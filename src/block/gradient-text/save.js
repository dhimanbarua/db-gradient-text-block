/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';

/**
 * Save function
 */

export default function save({ attributes }) {
	const { uniqueId, content, headingTag, showTextReveal, textRevealDelay, textRevealDuration, showHoverEffect, hoverEffect} = attributes;

	// Block Props
	const blockProps = useBlockProps.save({
		className: uniqueId,
	});
	// Text Reveal Effect
	const textRevealEffect = showTextReveal ? 'wow gtb-reveal' : '';
	const hoverEffectClass = showHoverEffect ? `gtb-hvr-${hoverEffect}` : '';

	// Inline styles for reveal timing
	const revealStyles = showTextReveal ? {
		'--reveal-delay': `${textRevealDelay}s`,
		'--reveal-duration': `${textRevealDuration}s`
	} : {};



	return (
		<div {...blockProps}>
			<div className={`gtb-gradient-text-wrraper ${textRevealEffect} ${hoverEffectClass}`} style={revealStyles} >
				<RichText.Content
					className='gtb-gradient-text'
					tagName={headingTag}
					value={content}
				/>
			</div>
		</div>
	);
}
