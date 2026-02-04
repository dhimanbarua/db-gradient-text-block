/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { Fragment, useEffect } from "@wordpress/element";
// eslint-disable-next-line import/no-extraneous-dependencies
import { gsap } from 'gsap';

// editor style
import './editor.scss';

/**
 * Internal dependencies
 */
import { softMinifyCssStrings } from '../../helper/softminify';
import Inspector from './inspector';

/**
 * Edit function
 */

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		uniqueId,
		blockStyle,
		headingTag,
		content,
		headingAlign,
		textColor,
		textGradient,
		showTextMask,
		textMaskMediaUrl,
		textMaskSize,
		textMaskPosition,
		textMaskRepeat,
		textBodyBg,
		textBodyGradient,
		textFontSize,
		textDecoration,
		textTransform,
		letterSpacing,
		lineHeight,
		gtbPadding,
		gtbMargin,
		gtbBorder,
		gtbBorderRadius,
		showTextReveal,
		textRevealBg,
		textRevealGradient,
		textRevealDelay,
		textRevealDuration,
		showHoverEffect,
		hoverEffect,
		showVerticalText,
		verticalTextPosition,
	} = attributes;

	

	// Unique ID
	useEffect(() => {
		if (!uniqueId) {
			setAttributes({
				uniqueId: 'gtb-gradient-text-' + clientId.slice(0, 8),
			});
		}
	}, []);

	// GSAP: animate masked text background position
	useEffect(() => {
		if (!showTextMask || !textMaskMediaUrl || !uniqueId) return;

		const el = document.querySelector(`.${uniqueId} .gtb-gradient-text`);
		if (!el) return;

		const tl = gsap.timeline({ repeat: -1 });
		tl.to(el, { duration: 30, backgroundPosition: '-960px 0px', ease: 'none' });

		return () => tl.kill();
	}, [showTextMask, textMaskMediaUrl, uniqueId]);

	// Block Props
	const blockProps = useBlockProps({
		className: uniqueId,
	});

	/**
	 * Block Styles
	 */
	const deskStyles = `
		.${uniqueId} .gtb-gradient-text-wrraper{
			${textBodyGradient ? `background-image: ${textBodyGradient};` : ''}
			${textBodyBg ? `background: ${textBodyBg};` : ''}
			padding: ${gtbPadding.top} ${gtbPadding.right} ${gtbPadding.bottom} ${gtbPadding.left};
			margin: ${gtbMargin.top} ${gtbMargin.right} ${gtbMargin.bottom} ${gtbMargin.left};
			border: ${gtbBorder.width} ${gtbBorder.style} ${gtbBorder.color};
			border-radius: ${gtbBorderRadius}px;
			text-align: ${headingAlign};
			text-decoration: ${textDecoration};
			line-height: normal;
		}
		.${uniqueId} ${headingTag}.gtb-gradient-text{
			font-size: ${textFontSize};
			text-decoration: ${textDecoration};
			text-transform: ${textTransform};
			letter-spacing: ${letterSpacing};
			line-height: ${lineHeight};
			${
				showTextMask && textMaskMediaUrl
					? `
				color: transparent;
				background-attachment: fixed;
				background-image: url('${textMaskMediaUrl}');
				background-size: ${textMaskSize};
				background-position: ${textMaskPosition};
				background-repeat: ${textMaskRepeat};
				-webkit-background-clip: text;
				background-clip: text;
				-webkit-text-fill-color: transparent;
			`
					: `
				color: ${textColor};
				background: ${textGradient};
				${textGradient ? `-webkit-background-clip: text;background-clip: text;-webkit-text-fill-color: transparent;color: transparent;` : ''}
			`
			}
			${showVerticalText && verticalTextPosition === 'top-to-bottom' ? `writing-mode: vertical-rl; text-orientation: mixed;` : ''}
			${showVerticalText && verticalTextPosition === 'bottom-to-top' ? `writing-mode: vertical-rl; text-orientation: mixed; transform: rotate(180deg);` : ''}
		}
		.${uniqueId} span.gtb-gradient-text{
			display: block;
		}
		.${uniqueId} .gtb-reveal.gtb-gradient-text-wrraper::after{
			${textRevealGradient ? `background: ${textRevealGradient};` : ''}
			${textRevealBg ? `background: ${textRevealBg};` : ''}
			animation-delay: ${textRevealDelay}s;
			animation-duration: ${textRevealDuration}s;
		}
		.${uniqueId} .gtb-reveal.animated > *{
			animation-delay: ${textRevealDelay}s;
		}

	`;
	const tabStyles = ``;
	const mobStyles = ``;

	/**
	 * Block All Styles
	 */
	const blockStyleCss = `
		${deskStyles}
		@media (max-width: 1024px) and (min-width: 768px) {
			${tabStyles}
		}
		@media (max-width: 767px) {
			${mobStyles}
		}
	`;

	// Set Block Styles
	useEffect(() => {
		if (JSON.stringify(blockStyle) !== JSON.stringify(blockStyleCss)) {
			setAttributes({ blockStyle: blockStyleCss });
		}
	}, [attributes]);

	// Text Reveal Effect
	const textRevealEffect = showTextReveal ? 'wow gtb-reveal' : '';
	const hoverEffectClass = showHoverEffect ? `gtb-hvr-${hoverEffect}` : '';
	return (
		<Fragment>
			<style>{`${softMinifyCssStrings(blockStyleCss)}`}</style>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<div {...blockProps}>
				<div className={`gtb-gradient-text-wrraper ${textRevealEffect} ${hoverEffectClass}`}>
					<RichText
						className='gtb-gradient-text'
						tagName={headingTag}
						value={content}
						onChange={(newContent) =>
							setAttributes({ content: newContent })
						}
					/>
				</div>
			</div>
		</Fragment>
	);
}
