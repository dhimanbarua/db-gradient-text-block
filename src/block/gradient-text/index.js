import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import attributes from './attributes';
import metadata from './block.json';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';

/**
 * Block Registration
 */
registerBlockType(metadata, {
	icon: {
		src: (
			<svg id="Capa_1"
				height="512" viewBox="0 0 512 512"
				width="512" xmlns="http://www.w3.org/2000/svg">
				<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="256" x2="256" y1="512" y2="0"><stop offset="0" stopColor="#ffbef9" /><stop offset="1" stopColor="#fff1ff" />
				</linearGradient><linearGradient id="SVGID_00000088837799238875899460000012499457702479800194_" gradientUnits="userSpaceOnUse" x1="317" x2="317" y1="422" y2="0"><stop offset="0" stopColor="#a93aff" /><stop offset="1" stopColor="#ff81ff" /></linearGradient><g><g><g><path d="m497 422c-8.291 0-15 6.709-15 15v15h-330v-15c0-8.291-6.709-15-15-15s-15 6.709-15 15v60c0 8.291 6.709 15 15 15s15-6.709 15-15v-15h330v15c0 8.291 6.709 15 15 15s15-6.709 15-15v-60c0-8.291-6.709-15-15-15zm-422-392c8.291 0 15-6.709 15-15s-6.709-15-15-15h-60c-8.291 0-15 6.709-15 15s6.709 15 15 15h15v362h-15c-8.291 0-15 6.709-15 15s6.709 15 15 15h60c8.291 0 15-6.709 15-15s-6.709-15-15-15h-15v-362z" fill="url(#SVGID_1_)" /></g></g><g><g><path d="m497 0h-360c-8.291 0-15 6.709-15 15v120c0 8.291 6.709 15 15 15s15-6.709 15-15v-30c0-8.276 6.738-15 15-15h105v287c0 8.276-6.738 15-15 15h-30c-8.291 0-15 6.709-15 15s6.709 15 15 15h180c8.291 0 15-6.709 15-15s-6.709-15-15-15h-30c-8.262 0-15-6.724-15-15v-287h105c8.262 0 15 6.724 15 15v30c0 8.291 6.709 15 15 15s15-6.709 15-15v-120c0-8.291-6.709-15-15-15z" fill="url(#SVGID_00000088837799238875899460000012499457702479800194_)" /></g></g></g></svg>
		),
	},
	attributes,
	edit: Edit,
	save: Save,
});
