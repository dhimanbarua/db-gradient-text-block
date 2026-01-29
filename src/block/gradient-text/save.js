/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';

/**
 * Save function
 */

export default function save({ attributes }) {
	const { uniqueId, content, headingTag, showTextReveal } = attributes;

	// Block Props
	const blockProps = useBlockProps.save({
		className: uniqueId,
	});
	// Text Reveal Effect
	const textRevealEffect = showTextReveal ? 'wow gtb-reveal' : '';

	return (
		<div {...blockProps}>
			<div className={`gtb-gradient-text-wrraper ${textRevealEffect}`}>
				<RichText.Content
					className='gtb-gradient-text'
					tagName={headingTag}
					value={content} />
			</div>
		</div>
	);
}
