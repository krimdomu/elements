/*! For license information please see 2984.0a6d8758.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[2984],{12419:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>commonjsGlobal,c:()=>createCommonjsModule});__webpack_require__(4173);var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function createCommonjsModule(o,e,n){return o(n={path:e,exports:{},require:function require(o,e){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}},61383:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>classnames});__webpack_require__(18145),__webpack_require__(16781);var classnames=(0,__webpack_require__(12419).c)((function(e){!function(){var r={}.hasOwnProperty;function s(){for(var e=[],a=0;a<arguments.length;a++){var o=arguments[a];if(o){var n=typeof o;if("string"===n||"number"===n)e.push(o);else if(Array.isArray(o)&&o.length){var t=s.apply(null,o);t&&e.push(t)}else if("object"===n)for(var i in o)r.call(o,i)&&o[i]&&e.push(i)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):window.classNames=s}()}))},22984:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ino_icon_button:()=>IconButton});__webpack_require__(95094);var _index_cf7ab64c_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(92696),_index_e8aa1b36_js__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(12419),__webpack_require__(61383)),_component_873f6020_js__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__(48824),__webpack_require__(34162)),IconButton=function(){function o(o){(0,_index_cf7ab64c_js__WEBPACK_IMPORTED_MODULE_1__.r)(this,o),this.clickEl=(0,_index_cf7ab64c_js__WEBPACK_IMPORTED_MODULE_1__.c)(this,"clickEl",7),this.colorScheme="primary",this.type="button"}return o.prototype.activatedChanged=function(o){o?this.maybeCreateRipple():this.maybeDestroyRipple()},o.prototype.clickHandler=function(o){this.disabled?(o.preventDefault(),o.stopPropagation()):this.clickEl.emit()},o.prototype.componentDidLoad=function(){this.maybeCreateRipple()},o.prototype.disconnectedCallback=function(){this.maybeDestroyRipple()},o.prototype.maybeCreateRipple=function(){this.activated||(this.mdcInstance=new _component_873f6020_js__WEBPACK_IMPORTED_MODULE_5__.M(this.el.querySelector(".mdc-icon-button")),this.mdcInstance.unbounded=!0)},o.prototype.maybeDestroyRipple=function(){var o;null===(o=this.mdcInstance)||void 0===o||o.destroy()},o.prototype.render=function(){var o=(0,_index_e8aa1b36_js__WEBPACK_IMPORTED_MODULE_3__.c)("ino-icon-button--color-scheme-"+this.colorScheme,{"ino-icon-button--filled":this.filled}),n=(0,_index_e8aa1b36_js__WEBPACK_IMPORTED_MODULE_3__.c)({"mdc-icon-button":!0,"mdc-ripple-upgraded--background-focused":this.activated});return(0,_index_cf7ab64c_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_cf7ab64c_js__WEBPACK_IMPORTED_MODULE_1__.H,{class:o},(0,_index_cf7ab64c_js__WEBPACK_IMPORTED_MODULE_1__.h)("button",{autoFocus:this.autoFocus,class:n,disabled:this.disabled,type:this.type},(0,_index_cf7ab64c_js__WEBPACK_IMPORTED_MODULE_1__.h)("ino-icon",{icon:this.icon,class:"mdc-icon-button__icon"})))},Object.defineProperty(o.prototype,"el",{get:function get(){return(0,_index_cf7ab64c_js__WEBPACK_IMPORTED_MODULE_1__.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(o,"watchers",{get:function get(){return{activated:["activatedChanged"]}},enumerable:!1,configurable:!0}),o}();IconButton.style='.mdc-icon-button{display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;font-size:24px;text-decoration:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:48px;height:48px;padding:12px}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}@-webkit-keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@-webkit-keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@-webkit-keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}@keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-icon-button{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);will-change:transform, opacity}.mdc-icon-button::before,.mdc-icon-button::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-icon-button::before{-webkit-transition:opacity 15ms linear, background-color 15ms linear;transition:opacity 15ms linear, background-color 15ms linear;z-index:1}.mdc-icon-button.mdc-ripple-upgraded::before{-webkit-transform:scale(var(--mdc-ripple-fg-scale, 1));transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button.mdc-ripple-upgraded::after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.mdc-icon-button.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-icon-button.mdc-ripple-upgraded--foreground-activation::after{-webkit-animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-icon-button.mdc-ripple-upgraded--foreground-deactivation::after{-webkit-animation:mdc-ripple-fg-opacity-out 150ms;animation:mdc-ripple-fg-opacity-out 150ms;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button::before,.mdc-icon-button::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-icon-button.mdc-ripple-upgraded::before,.mdc-icon-button.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button::before,.mdc-icon-button::after{background-color:#000}.mdc-icon-button:hover::before{opacity:0.04}.mdc-icon-button.mdc-ripple-upgraded--background-focused::before,.mdc-icon-button:not(.mdc-ripple-upgraded):focus::before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.12}.mdc-icon-button:not(.mdc-ripple-upgraded)::after{-webkit-transition:opacity 150ms linear;transition:opacity 150ms linear}.mdc-icon-button:not(.mdc-ripple-upgraded):active::after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.12}.mdc-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}ino-icon-button{}ino-icon-button ino-icon{--icon-color:var(--ino-icon-button-icon-color, #777777);--ino-icon-height:var(--ino-icon-button-icon-size, 24px);--ino-icon-width:var(--ino-icon-button-icon-size, 24px)}ino-icon-button .mdc-icon-button{width:var(--ino-icon-button-size, 48px);height:var(--ino-icon-button-size, 48px);padding:calc((var(--ino-icon-button-size, 48px) - var(--ino-icon-button-icon-size, 24px)) / 2);font-size:var(--ino-icon-button-icon-size, 24px);background-color:var(--ino-icon-button-background-color, transparent);border-radius:50%}ino-icon-button .mdc-icon-button::before,ino-icon-button .mdc-icon-button::after{background-color:var(--ino-icon-button-background-active-color, #777777)}ino-icon-button .mdc-icon-button.mdc-ripple-upgraded--background-focused ino-icon,ino-icon-button .mdc-icon-button:focus ino-icon{--icon-color:var(--ino-icon-button-icon-active-color, #777777)}ino-icon-button.ino-icon-button--color-scheme-primary{--ino-icon-button-icon-color:#3d40f5;--ino-icon-button-icon-active-color:#3d40f5;--ino-icon-button-background-active-color:#3d40f5}ino-icon-button.ino-icon-button--color-scheme-primary.ino-icon-button--filled{--ino-icon-button-icon-color:#fff;--ino-icon-button-icon-active-color:#fff;--ino-icon-button-background-color:#3d40f5;--ino-icon-button-background-active-color:#fff}ino-icon-button.ino-icon-button--color-scheme-secondary{--ino-icon-button-icon-color:#9ccd00;--ino-icon-button-icon-active-color:#9ccd00;--ino-icon-button-background-active-color:#9ccd00}ino-icon-button.ino-icon-button--color-scheme-secondary.ino-icon-button--filled{--ino-icon-button-icon-color:#fff;--ino-icon-button-icon-active-color:#fff;--ino-icon-button-background-color:#9ccd00;--ino-icon-button-background-active-color:#fff}ino-icon-button.ino-icon-button--color-scheme-success{--ino-icon-button-icon-color:#9ccd00;--ino-icon-button-icon-active-color:#9ccd00;--ino-icon-button-background-active-color:#9ccd00}ino-icon-button.ino-icon-button--color-scheme-success.ino-icon-button--filled{--ino-icon-button-icon-color:#fff;--ino-icon-button-icon-active-color:#fff;--ino-icon-button-background-color:#9ccd00;--ino-icon-button-background-active-color:#fff}ino-icon-button.ino-icon-button--color-scheme-warning{--ino-icon-button-icon-color:#ffde03;--ino-icon-button-icon-active-color:#ffde03;--ino-icon-button-background-active-color:#ffde03}ino-icon-button.ino-icon-button--color-scheme-warning.ino-icon-button--filled{--ino-icon-button-icon-color:#fff;--ino-icon-button-icon-active-color:#fff;--ino-icon-button-background-color:#ffde03;--ino-icon-button-background-active-color:#fff}ino-icon-button.ino-icon-button--color-scheme-error{--ino-icon-button-icon-color:#eb003b;--ino-icon-button-icon-active-color:#eb003b;--ino-icon-button-background-active-color:#eb003b}ino-icon-button.ino-icon-button--color-scheme-error.ino-icon-button--filled{--ino-icon-button-icon-color:#fff;--ino-icon-button-icon-active-color:#fff;--ino-icon-button-background-color:#eb003b;--ino-icon-button-background-active-color:#fff}ino-icon-button.ino-icon-button--color-scheme-light{--ino-icon-button-icon-color:#c1c1c1;--ino-icon-button-icon-active-color:#c1c1c1;--ino-icon-button-background-active-color:#c1c1c1}ino-icon-button.ino-icon-button--color-scheme-light.ino-icon-button--filled{--ino-icon-button-icon-color:#000;--ino-icon-button-icon-active-color:#000;--ino-icon-button-background-color:#c1c1c1;--ino-icon-button-background-active-color:#000}ino-icon-button.ino-icon-button--color-scheme-dark{--ino-icon-button-icon-color:#777777;--ino-icon-button-icon-active-color:#777777;--ino-icon-button-background-active-color:#777777}ino-icon-button.ino-icon-button--color-scheme-dark.ino-icon-button--filled{--ino-icon-button-icon-color:#ffffff;--ino-icon-button-icon-active-color:#ffffff;--ino-icon-button-background-color:#777777;--ino-icon-button-background-active-color:#ffffff}ino-icon-button button:disabled ino-icon{--icon-color:#9d9d9d}'},4173:(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__(23103)({global:!0},{globalThis:__webpack_require__(9859)})}}]);
//# sourceMappingURL=2984.0a6d8758.iframe.bundle.js.map