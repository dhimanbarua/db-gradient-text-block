/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';

/**
 * Save function
 */

export default function save({ attributes }) {
	const { uniqueId, content, headingTag } = attributes;

	// Block Props
	const blockProps = useBlockProps.save({
		className: uniqueId,
	});

	return (
		<div {...blockProps}>
			<div className="gtb-gradient-text-wrraper">
				<RichText.Content
					className='gtb-gradient-text'
					tagName={headingTag}
					value={content} />
			</div>
		</div>
	);
}
