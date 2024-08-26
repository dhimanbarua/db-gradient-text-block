import { __ } from "@wordpress/i18n";
import { Dashicon } from "@wordpress/components";
export const HEADER_TAGS = [
    {label: __("H1", 'gtb'), value: 'h1'},
    {label: __("H2", 'gtb'), value: 'h2'},
    {label: __("H3", 'gtb'), value: 'h3'},
    {label: __("H4", 'gtb'), value: 'h4'},
    {label: __("H5", 'gtb'), value: 'h5'},
    {label: __("H6", 'gtb'), value: 'h6'},
    {label: __("P", 'gtb'), value: 'p'},
    {label: __("SPAN", 'gtb'), value: 'span'},
];

export const ALIGNMENT_POSITION = [
	{ label: <Dashicon icon={"editor-alignleft"} />, value: "left" },
	{ label: <Dashicon icon={"editor-aligncenter"} />, value: "center" },
	{ label: <Dashicon icon={"editor-alignright"} />, value: "right" },
];
