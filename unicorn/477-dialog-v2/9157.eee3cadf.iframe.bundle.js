/*! For license information please see 9157.eee3cadf.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[9157],{12419:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>commonjsGlobal,c:()=>createCommonjsModule});__webpack_require__(4173);var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function createCommonjsModule(o,e,n){return o(n={path:e,exports:{},require:function require(o,e){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}},61383:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>classnames});__webpack_require__(18145),__webpack_require__(16781);var classnames=(0,__webpack_require__(12419).c)((function(e){!function(){var r={}.hasOwnProperty;function s(){for(var e=[],a=0;a<arguments.length;a++){var o=arguments[a];if(o){var n=typeof o;if("string"===n||"number"===n)e.push(o);else if(Array.isArray(o)&&o.length){var t=s.apply(null,o);t&&e.push(t)}else if("object"===n)for(var i in o)r.call(o,i)&&o[i]&&e.push(i)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):window.classNames=s}()}))},79157:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ino_img_list:()=>InoImgList});__webpack_require__(38695),__webpack_require__(1939),__webpack_require__(95094);var _index_cf7ab64c_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(92696),_index_e8aa1b36_js__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__(12419),__webpack_require__(61383)),InoImgList=function(){function t(t){(0,_index_cf7ab64c_js__WEBPACK_IMPORTED_MODULE_3__.r)(this,t),this.masonry=!1,this.encloseLabel=!1}return t.prototype.componentDidLoad=function(){this.masonry&&this.el.querySelectorAll(".mdc-image-list__image-aspect-container").forEach((function(t){t.classList.remove("mdc-image-list__image-aspect-container")}))},t.prototype.render=function(){var t=(0,_index_e8aa1b36_js__WEBPACK_IMPORTED_MODULE_5__.c)({"mdc-image-list":!0,"mdc-image-list--masonry":this.masonry,"mdc-image-list--with-text-protection":this.encloseLabel});return(0,_index_cf7ab64c_js__WEBPACK_IMPORTED_MODULE_3__.h)(_index_cf7ab64c_js__WEBPACK_IMPORTED_MODULE_3__.H,null,(0,_index_cf7ab64c_js__WEBPACK_IMPORTED_MODULE_3__.h)("ul",{class:t},(0,_index_cf7ab64c_js__WEBPACK_IMPORTED_MODULE_3__.h)("slot",null)))},Object.defineProperty(t.prototype,"el",{get:function get(){return(0,_index_cf7ab64c_js__WEBPACK_IMPORTED_MODULE_3__.g)(this)},enumerable:!1,configurable:!0}),t}();InoImgList.style=".mdc-image-list{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0 auto;padding:0}.mdc-image-list__item,.mdc-image-list__image-aspect-container{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}.mdc-image-list__item{list-style-type:none}.mdc-image-list__image{width:100%}.mdc-image-list__image-aspect-container .mdc-image-list__image{position:absolute;top:0;right:0;bottom:0;left:0;height:100%;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-image-list__image-aspect-container{padding-bottom:calc(100% / 1)}.mdc-image-list__image{border-radius:0}.mdc-image-list--with-text-protection .mdc-image-list__supporting{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-image-list__supporting{color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-sizing:border-box;box-sizing:border-box;padding:8px 0;line-height:24px}.mdc-image-list__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;-webkit-text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-image-list--with-text-protection .mdc-image-list__supporting{position:absolute;bottom:0;width:100%;height:48px;padding:0 16px;background:rgba(0, 0, 0, 0.6);color:#fff}.mdc-image-list--masonry{display:block}.mdc-image-list--masonry .mdc-image-list__item{-webkit-column-break-inside:avoid;-moz-column-break-inside:avoid;break-inside:avoid-column}.mdc-image-list--masonry .mdc-image-list__image{display:block;height:auto}ino-img-list{--img-list-cols:var(--ino-img-list-cols, 3)}ino-img-list ul:not(.mdc-image-list--masonry) .mdc-image-list__item{width:calc(100% / var(--img-list-cols) - (4px + 1px / var(--img-list-cols)));margin:2px}ino-img-list ul.mdc-image-list--masonry{-webkit-column-count:var(--img-list-cols);-moz-column-count:var(--img-list-cols);column-count:var(--img-list-cols);-webkit-column-gap:16px;-moz-column-gap:16px;column-gap:16px}ino-img-list ul.mdc-image-list--masonry .mdc-image-list__item{margin-bottom:16px}"},4173:(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__(23103)({global:!0},{globalThis:__webpack_require__(9859)})}}]);
//# sourceMappingURL=9157.eee3cadf.iframe.bundle.js.map