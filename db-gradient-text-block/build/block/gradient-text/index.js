/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/block/gradient-text/attributes.js":
/*!***********************************************!*\
  !*** ./src/block/gradient-text/attributes.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const attributes = {
  uniqueID: {
    type: 'string'
  },
  blockStyle: {
    type: 'object'
  },
  headingTag: {
    type: 'string',
    default: 'h2'
  },
  headingAlign: {
    type: "string",
    default: "left"
  },
  content: {
    type: 'string',
    default: 'I am Gradient Text'
  },
  textColor: {
    type: 'string'
  },
  textGradient: {
    type: "string",
    default: "linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)"
  },
  textBodyBg: {
    type: "string"
  },
  textBodyGradient: {
    type: "string",
    default: "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)"
  },
  textDecoration: {
    type: "string"
  },
  textTransform: {
    type: "string"
  },
  letterSpacing: {
    type: "string"
  },
  lineHeight: {
    type: "string"
  },
  gtbPadding: {
    type: "object",
    default: {
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px"
    }
  },
  gtbMargin: {
    type: "object",
    default: {
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px"
    }
  },
  gtbBorder: {
    type: "object",
    default: {
      color: "#000000",
      style: "solid",
      width: "1"
    }
  },
  gtbBorderRadius: {
    type: "string"
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./src/block/gradient-text/constants.js":
/*!**********************************************!*\
  !*** ./src/block/gradient-text/constants.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALIGNMENT_POSITION: () => (/* binding */ ALIGNMENT_POSITION),
/* harmony export */   HEADER_TAGS: () => (/* binding */ HEADER_TAGS)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



const HEADER_TAGS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("H1", 'gtb'),
  value: 'h1'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("H2", 'gtb'),
  value: 'h2'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("H3", 'gtb'),
  value: 'h3'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("H4", 'gtb'),
  value: 'h4'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("H5", 'gtb'),
  value: 'h5'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("H6", 'gtb'),
  value: 'h6'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("P", 'gtb'),
  value: 'p'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("SPAN", 'gtb'),
  value: 'span'
}];
const ALIGNMENT_POSITION = [{
  label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "editor-alignleft"
  }),
  value: "left"
}, {
  label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "editor-aligncenter"
  }),
  value: "center"
}, {
  label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
    icon: "editor-alignright"
  }),
  value: "right"
}];

/***/ }),

/***/ "./src/block/gradient-text/edit.js":
/*!*****************************************!*\
  !*** ./src/block/gradient-text/edit.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/block/gradient-text/editor.scss");
/* harmony import */ var _helper_softminify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/softminify */ "./src/helper/softminify.js");
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inspector */ "./src/block/gradient-text/inspector.js");

/**
 * WordPress dependencies
 */



// editor style


/**
 * Internal dependencies
 */



/**
 * Edit function
 */

function Edit({
  attributes,
  setAttributes,
  clientId
}) {
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
    gtbBorderRadius
  } = attributes;
  console.log(gtbBorderRadius);

  // Unique ID
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!uniqueId) {
      setAttributes({
        uniqueId: 'gtb-gradient-text-' + clientId.slice(0, 8)
      });
    }
  }, []);

  // Block Props
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: uniqueId
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
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (JSON.stringify(blockStyle) !== JSON.stringify(blockStyleCss)) {
      setAttributes({
        blockStyle: blockStyleCss
      });
    }
  }, [attributes]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `${(0,_helper_softminify__WEBPACK_IMPORTED_MODULE_4__.softMinifyCssStrings)(blockStyleCss)}`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_5__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gtb-gradient-text-wrraper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    className: "gtb-gradient-text",
    tagName: headingTag,
    value: content,
    onChange: newContent => setAttributes({
      content: newContent
    })
  }))));
}

/***/ }),

/***/ "./src/block/gradient-text/index.js":
/*!******************************************!*\
  !*** ./src/block/gradient-text/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/block/gradient-text/style.scss");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes */ "./src/block/gradient-text/attributes.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block/gradient-text/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit */ "./src/block/gradient-text/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./save */ "./src/block/gradient-text/save.js");






/**
 * Internal dependencies
 */



/**
 * Block Registration
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__, {
  icon: {
    src: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      id: "Capa_1",
      height: "512",
      viewBox: "0 0 512 512",
      width: "512",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("linearGradient", {
      id: "SVGID_1_",
      gradientUnits: "userSpaceOnUse",
      x1: "256",
      x2: "256",
      y1: "512",
      y2: "0"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
      offset: "0",
      stopColor: "#ffbef9"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
      offset: "1",
      stopColor: "#fff1ff"
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("linearGradient", {
      id: "SVGID_00000088837799238875899460000012499457702479800194_",
      gradientUnits: "userSpaceOnUse",
      x1: "317",
      x2: "317",
      y1: "422",
      y2: "0"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
      offset: "0",
      stopColor: "#a93aff"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
      offset: "1",
      stopColor: "#ff81ff"
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "m497 422c-8.291 0-15 6.709-15 15v15h-330v-15c0-8.291-6.709-15-15-15s-15 6.709-15 15v60c0 8.291 6.709 15 15 15s15-6.709 15-15v-15h330v15c0 8.291 6.709 15 15 15s15-6.709 15-15v-60c0-8.291-6.709-15-15-15zm-422-392c8.291 0 15-6.709 15-15s-6.709-15-15-15h-60c-8.291 0-15 6.709-15 15s6.709 15 15 15h15v362h-15c-8.291 0-15 6.709-15 15s6.709 15 15 15h60c8.291 0 15-6.709 15-15s-6.709-15-15-15h-15v-362z",
      fill: "url(#SVGID_1_)"
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "m497 0h-360c-8.291 0-15 6.709-15 15v120c0 8.291 6.709 15 15 15s15-6.709 15-15v-30c0-8.276 6.738-15 15-15h105v287c0 8.276-6.738 15-15 15h-30c-8.291 0-15 6.709-15 15s6.709 15 15 15h180c8.291 0 15-6.709 15-15s-6.709-15-15-15h-30c-8.262 0-15-6.724-15-15v-287h105c8.262 0 15 6.724 15 15v30c0 8.291 6.709 15 15 15s15-6.709 15-15v-120c0-8.291-6.709-15-15-15z",
      fill: "url(#SVGID_00000088837799238875899460000012499457702479800194_)"
    })))))
  },
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_3__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_5__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ "./src/block/gradient-text/inspector.js":
/*!**********************************************!*\
  !*** ./src/block/gradient-text/inspector.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./src/block/gradient-text/constants.js");

/**
 * WordPress dependencies
 */





const Inspector = ({
  attributes,
  setAttributes
}) => {
  const {
    headingTag,
    headingAlign,
    textGradient,
    textColor,
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
    gtbBorderRadius
  } = attributes;
  const [colorSwitcher, setColorSwitcher] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)("gradient");
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gtb-panel-control"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "gtb-parent-tab-panel",
    activeClass: "active-tab",
    tabs: [{
      name: "general",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('General', 'db-gradient-text-block'),
      className: "gtb-tab general"
    }, {
      name: "styles",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Style', 'db-gradient-text-block'),
      className: "gtb-tab styles"
    }, {
      name: "advance",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Advanced', 'db-gradient-text-block'),
      className: "gtb-tab advance"
    }]
  }, tab => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gtb-tab-controls " + tab.name
  }, tab.name === "general" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Heading', 'db-gradient-text-block'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    id: "heading-tag",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Tag', 'db-gradient-text-block')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, null, _constants__WEBPACK_IMPORTED_MODULE_5__.HEADER_TAGS.map((tag, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    key: index,
    isSecondar: headingTag !== tag.value,
    isPrimary: headingTag === tag.value,
    onClick: () => setAttributes({
      headingTag: tag.value
    })
  }, tag.label)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    id: "gtb-text-alignment",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Alignment", 'db-gradient-text-block')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
    id: "gtb-text-group-alignment"
  }, _constants__WEBPACK_IMPORTED_MODULE_5__.ALIGNMENT_POSITION.map((item, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    key: index,
    isSecondary: headingAlign === item.value,
    isPrimary: headingAlign !== item.value,
    onClick: () => setAttributes({
      headingAlign: item.value
    })
  }, item.label))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Text", "db-gradient-text-block"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    id: "gtb-font-decoration"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.FontSizePicker, {
    value: fontSize,
    onChange: value => setAttributes({
      fontSize: value
    }),
    __nextHasNoMarginBottom: true
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalTextDecorationControl, {
    value: textDecoration,
    onChange: value => setAttributes({
      textDecoration: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalTextTransformControl, {
    value: textTransform,
    onChange: value => setAttributes({
      textTransform: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalLetterSpacingControl, {
    value: letterSpacing,
    onChange: value => {
      setAttributes({
        letterSpacing: value
      });
    },
    __nextHasNoMarginBottom: true
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.LineHeightControl, {
    value: lineHeight,
    onChange: value => {
      setAttributes({
        lineHeight: value
      });
    },
    __nextHasNoMarginBottom: true
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Background", "db-gradient-text-block"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, null, [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Color", "db-gradient-text-block"),
    value: "color"
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Gradient", "db-gradient-text-block"),
    value: "gradient"
  }].map(({
    value,
    label
  }, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    key: index,
    isPrimary: colorSwitcher === value,
    isSecondar: colorSwitcher !== value,
    onClick: () => setColorSwitcher(value)
  }, label)))), colorSwitcher === "color" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
    colors: [{
      name: "red",
      color: "#f00"
    }, {
      name: "white",
      color: "#FFF"
    }, {
      name: "blue",
      color: "#00f"
    }],
    value: textBodyBg,
    onChange: value => setAttributes({
      textBodyBg: value
    })
  }), colorSwitcher === "gradient" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.GradientPicker, {
    value: textBodyGradient,
    onChange: value => setAttributes({
      textBodyGradient: value
    }),
    gradients: [{
      name: 'JShine',
      gradient: 'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
      slug: 'jshine'
    }, {
      name: 'Moonlit Asteroid',
      gradient: 'linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)',
      slug: 'moonlit-asteroid'
    }, {
      name: 'Rastafarie',
      gradient: 'linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)',
      slug: 'rastafari'
    }]
  }))), tab.name === "styles" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Text Color", "db-gradient-text-block"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, null, [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Color", "db-gradient-text-block"),
    value: "color"
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Gradient", "db-gradient-text-block"),
    value: "gradient"
  }].map(({
    value,
    label
  }, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    key: index,
    isPrimary: colorSwitcher === value,
    isSecondar: colorSwitcher !== value,
    onClick: () => setColorSwitcher(value)
  }, label)))), colorSwitcher === "color" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
    colors: [{
      name: "red",
      color: "#f00"
    }, {
      name: "white",
      color: "#FFF"
    }, {
      name: "blue",
      color: "#00f"
    }],
    value: textColor,
    onChange: value => setAttributes({
      textColor: value
    })
  }), colorSwitcher === "gradient" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.GradientPicker, {
    value: textGradient,
    onChange: value => setAttributes({
      textGradient: value
    }),
    gradients: [{
      name: 'JShine',
      gradient: 'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
      slug: 'jshine'
    }, {
      name: 'Moonlit Asteroid',
      gradient: 'linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)',
      slug: 'moonlit-asteroid'
    }, {
      name: 'Rastafarie',
      gradient: 'linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)',
      slug: 'rastafari'
    }]
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Space", "db-gradient-text-block"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Padding", "db-gradient-text-block"),
    values: gtbPadding,
    onChange: nextValues => setAttributes({
      gtbPadding: nextValues
    }),
    units: [],
    allowReset: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Margin", "db-gradient-text-block"),
    values: gtbMargin,
    onChange: nextValues => setAttributes({
      gtbMargin: nextValues
    }),
    units: [],
    allowReset: false
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Border", "db-gradient-text-block"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBorderControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Border", "db-gradient-text-block"),
    value: gtbBorder,
    onChange: nextValues => setAttributes({
      gtbBorder: nextValues
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Border Radius (PX)", "db-gradient-text-block"),
    value: gtbBorderRadius,
    onChange: nextValues => setAttributes({
      gtbBorderRadius: nextValues
    })
  })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/block/gradient-text/save.js":
/*!*****************************************!*\
  !*** ./src/block/gradient-text/save.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */


/**
 * Save function
 */

function save({
  attributes
}) {
  const {
    uniqueId,
    content,
    headingTag
  } = attributes;

  // Block Props
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: uniqueId
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gtb-gradient-text-wrraper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    className: "gtb-gradient-text",
    tagName: headingTag,
    value: content
  })));
}

/***/ }),

/***/ "./src/helper/softminify.js":
/*!**********************************!*\
  !*** ./src/helper/softminify.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   softMinifyCssStrings: () => (/* binding */ softMinifyCssStrings)
/* harmony export */ });
// softMinifyCssStrings is for minifying the css
const softMinifyCssStrings = (cssString = ' ') => cssString.replace(/\s+/g, ' ').replace(/\.zb\-[\w\-\s\.\,\:\>\(\)\d\+\[\]\#\>]+\{[\s]+\}/g, '');

/***/ }),

/***/ "./src/block/gradient-text/editor.scss":
/*!*********************************************!*\
  !*** ./src/block/gradient-text/editor.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block/gradient-text/style.scss":
/*!********************************************!*\
  !*** ./src/block/gradient-text/style.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block/gradient-text/block.json":
/*!********************************************!*\
  !*** ./src/block/gradient-text/block.json ***!
  \********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":2,"name":"dbgradienttextblock/db-gradient-text","version":"0.1.0","title":"Gradient Text","category":"dbgradienttextblock","description":"Create gradient text with title","supports":{"html":false,"anchor":true},"textdomain":"db-gradient-text-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"block/gradient-text/index": 0,
/******/ 			"block/gradient-text/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdb_gradient_text_block"] = self["webpackChunkdb_gradient_text_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["block/gradient-text/style-index"], () => (__webpack_require__("./src/block/gradient-text/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map