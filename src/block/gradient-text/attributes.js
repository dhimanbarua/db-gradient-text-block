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
	gtbPadding: {
		type: "object",
		default: {
			top:"0px",
			right:"0px",
			bottom:"0px",
			left:"0px",
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
			color: "#000000",
			style: "solid",
			width: "1",
		}
	},
	gtbBorderRadius: {
		type: "string"
	}
};

export default attributes;
