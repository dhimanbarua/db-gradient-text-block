const attributes = {
	uniqueID: {
		type: 'string',
	},
	blockStyle: {
		type: 'object',
	},
	headingTag: {
		type: 'string',
		default: 'h2',
	},
	headingAlign:{
		type: "string",
		default: "left"
	},
	content: {
		type: 'string',
		default: 'I am Gradient Text',
	},
	textColor: {
		type: 'string',
	},
	textGradient: {
		type: "string",
		default: "linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)"
	},
	textBodyBg: {
		type: "string",
	},
	textBodyGradient: {
		type: "string",
		default: "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)"
	},
	textFontSize: {
		type: "string",
	},
	textDecoration: {
		type: "string",
	},
	textTransform: {
		type: "string",
	},
	letterSpacing: {
		type: "string",
	},
	lineHeight: {
		type: "string",
	},
	showTextReveal: {
		type: "boolean",
		default: true,
	},
	textRevealBg: {
		type: "string",
	},
	textRevealGradient: {
		type: "string",
		default: "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)"
	},
	textRevealDelay: {
		type: "number",
		default: 0,
	},
	textRevealDuration: {
		type: "number",
		default: 1,
	},
	showHoverEffect: {
		type: "boolean",
		default: false,
	},
	hoverEffect: {
		type: "string",
		default: "none",
	},
	gtbPadding: {
		type: "object",
		default: {
			top:"16px",
			right:"16px",
			bottom:"16px",
			left:"16px",
		}
	},
	gtbMargin: {
		type: "object",
		default: {
			top:"0px",
			right:"0px",
			bottom:"0px",
			left:"0px",
		}
	},
	gtbBorder: {
		type: "object",
		default: {
			color: "transparent",
			style: "solid",
			width: "0",
		}
	},
	gtbBorderRadius: {
		type: "string"
	}
};

export default attributes;
