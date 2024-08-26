/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { Fragment, useEffect } from "@wordpress/element";

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
		textBodyBg,
		textBodyGradient,
		fontSize,
		textDecoration,
		textTransform,
		letterSpacing,
		lineHeight,
		gtbPadding,
		gtbMargin,
		gtbBorder,
		gtbBorderRadius,
	} = attributes;

	console.log(gtbBorderRadius);

	// Unique ID
	useEffect(() => {
		if (!uniqueId) {
			setAttributes({
				uniqueId: 'gtb-gradient-text-' + clientId.slice(0, 8),
			});
		}
	}, []);

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
	}
		.${uniqueId} ${headingTag}.gtb-gradient-text{
			font-size: ${fontSize};
			text-decoration: ${textDecoration};
			text-transform: ${textTransform};
			letter-spacing: ${letterSpacing};
			line-height: ${lineHeight};
			color: ${textColor};
			background: ${textGradient};
			${textGradient ? `-webkit-background-clip: text;-webkit-text-fill-color: transparent;` : ''}};
			
		}
		.${uniqueId} span.gtb-gradient-text{
			display: block;
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

	return (
		<Fragment>
			<style>{`${softMinifyCssStrings(blockStyleCss)}`}</style>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<div {...blockProps}>
				<div className="gtb-gradient-text-wrraper">
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
