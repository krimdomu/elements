/*! For license information please see 1020.3b4d658e.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[1020],{12419:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>commonjsGlobal,c:()=>createCommonjsModule});__webpack_require__(4173);var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function createCommonjsModule(o,e,n){return o(n={path:e,exports:{},require:function require(o,e){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}},53069:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{M:()=>MDCTextField,a:()=>MDCTextFieldHelperText,b:()=>MDCTextFieldIcon});__webpack_require__(95094),__webpack_require__(74083),__webpack_require__(38695),__webpack_require__(67321),__webpack_require__(95342),__webpack_require__(43450);var _component_aa03c231_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(48824),_component_873f6020_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(34162),_ponyfill_b3c8879a_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(61958),_component_6b74aefe_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(36920),cssClasses={ROOT:"mdc-text-field-character-counter"},strings={ROOT_SELECTOR:"."+cssClasses.ROOT},MDCTextFieldCharacterCounterFoundation=function(t){function e(n){return t.call(this,(0,_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_6__.a)((0,_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_6__.a)({},e.defaultAdapter),n))||this}return(0,_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_6__._)(e,t),Object.defineProperty(e,"cssClasses",{get:function get(){return cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function get(){return strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function get(){return{setContent:function setContent(){}}},enumerable:!0,configurable:!0}),e.prototype.setCounterValue=function(t,e){t=Math.min(t,e),this.adapter.setContent(t+" / "+e)},e}(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_6__.M),MDCTextFieldCharacterCounter=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_6__._)(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundationForTextField",{get:function get(){return this.foundation},enumerable:!0,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this;return new MDCTextFieldCharacterCounterFoundation({setContent:function setContent(e){t.root.textContent=e}})},e}(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_6__.b),strings$1={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},cssClasses$1={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon"},numbers={LABEL_SCALE:.75},VALIDATION_ATTR_WHITELIST=["pattern","min","max","required","step","minlength","maxlength"],ALWAYS_FLOAT_TYPES=["color","date","datetime-local","month","range","time","week"],POINTERDOWN_EVENTS=["mousedown","touchstart"],INTERACTION_EVENTS=["click","keydown"],MDCTextFieldFoundation=function(t){function e(n,i){void 0===i&&(i={});var r=t.call(this,(0,_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_6__.a)((0,_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_6__.a)({},e.defaultAdapter),n))||this;return r.isFocused_=!1,r.receivedUserInput_=!1,r.isValid_=!0,r.useNativeValidation_=!0,r.validateOnValueChange_=!0,r.helperText_=i.helperText,r.characterCounter_=i.characterCounter,r.leadingIcon_=i.leadingIcon,r.trailingIcon_=i.trailingIcon,r.inputFocusHandler_=function(){return r.activateFocus()},r.inputBlurHandler_=function(){return r.deactivateFocus()},r.inputInputHandler_=function(){return r.handleInput()},r.setPointerXOffset_=function(t){return r.setTransformOrigin(t)},r.textFieldInteractionHandler_=function(){return r.handleTextFieldInteraction()},r.validationAttributeChangeHandler_=function(t){return r.handleValidationAttributeChange(t)},r}return(0,_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_6__._)(e,t),Object.defineProperty(e,"cssClasses",{get:function get(){return cssClasses$1},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function get(){return strings$1},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function get(){return numbers},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"shouldAlwaysFloat_",{get:function get(){var t=this.getNativeInput_().type;return ALWAYS_FLOAT_TYPES.indexOf(t)>=0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"shouldFloat",{get:function get(){return this.shouldAlwaysFloat_||this.isFocused_||!!this.getValue()||this.isBadInput_()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"shouldShake",{get:function get(){return!this.isFocused_&&!this.isValid()&&!!this.getValue()},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function get(){return{addClass:function addClass(){},removeClass:function removeClass(){},hasClass:function hasClass(){return!0},setInputAttr:function setInputAttr(){},removeInputAttr:function removeInputAttr(){},registerTextFieldInteractionHandler:function registerTextFieldInteractionHandler(){},deregisterTextFieldInteractionHandler:function deregisterTextFieldInteractionHandler(){},registerInputInteractionHandler:function registerInputInteractionHandler(){},deregisterInputInteractionHandler:function deregisterInputInteractionHandler(){},registerValidationAttributeChangeHandler:function registerValidationAttributeChangeHandler(){return new MutationObserver((function(){}))},deregisterValidationAttributeChangeHandler:function deregisterValidationAttributeChangeHandler(){},getNativeInput:function getNativeInput(){return null},isFocused:function isFocused(){return!1},activateLineRipple:function activateLineRipple(){},deactivateLineRipple:function deactivateLineRipple(){},setLineRippleTransformOrigin:function setLineRippleTransformOrigin(){},shakeLabel:function shakeLabel(){},floatLabel:function floatLabel(){},setLabelRequired:function setLabelRequired(){},hasLabel:function hasLabel(){return!1},getLabelWidth:function getLabelWidth(){return 0},hasOutline:function hasOutline(){return!1},notchOutline:function notchOutline(){},closeOutline:function closeOutline(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this;this.adapter.hasLabel()&&this.getNativeInput_().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler_():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating_(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler_),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler_),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler_),POINTERDOWN_EVENTS.forEach((function(e){t.adapter.registerInputInteractionHandler(e,t.setPointerXOffset_)})),INTERACTION_EVENTS.forEach((function(e){t.adapter.registerTextFieldInteractionHandler(e,t.textFieldInteractionHandler_)})),this.validationObserver_=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_),this.setCharacterCounter_(this.getValue().length)},e.prototype.destroy=function(){var t=this;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler_),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler_),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler_),POINTERDOWN_EVENTS.forEach((function(e){t.adapter.deregisterInputInteractionHandler(e,t.setPointerXOffset_)})),INTERACTION_EVENTS.forEach((function(e){t.adapter.deregisterTextFieldInteractionHandler(e,t.textFieldInteractionHandler_)})),this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver_)},e.prototype.handleTextFieldInteraction=function(){var t=this.adapter.getNativeInput();t&&t.disabled||(this.receivedUserInput_=!0)},e.prototype.handleValidationAttributeChange=function(t){var e=this;t.some((function(t){return VALIDATION_ATTR_WHITELIST.indexOf(t)>-1&&(e.styleValidity_(!0),e.adapter.setLabelRequired(e.getNativeInput_().required),!0)})),t.indexOf("maxlength")>-1&&this.setCharacterCounter_(this.getValue().length)},e.prototype.notchOutline=function(t){if(this.adapter.hasOutline()&&this.adapter.hasLabel())if(t){var e=this.adapter.getLabelWidth()*numbers.LABEL_SCALE;this.adapter.notchOutline(e)}else this.adapter.closeOutline()},e.prototype.activateFocus=function(){this.isFocused_=!0,this.styleFocused_(this.isFocused_),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating_(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),!this.helperText_||!this.helperText_.isPersistent()&&this.helperText_.isValidation()&&this.isValid_||this.helperText_.showToScreenReader()},e.prototype.setTransformOrigin=function(t){if(!this.isDisabled()&&!this.adapter.hasOutline()){var e=t.touches,n=e?e[0]:t,i=n.target.getBoundingClientRect(),r=n.clientX-i.left;this.adapter.setLineRippleTransformOrigin(r)}},e.prototype.handleInput=function(){this.autoCompleteFocus(),this.setCharacterCounter_(this.getValue().length)},e.prototype.autoCompleteFocus=function(){this.receivedUserInput_||this.activateFocus()},e.prototype.deactivateFocus=function(){this.isFocused_=!1,this.adapter.deactivateLineRipple();var t=this.isValid();this.styleValidity_(t),this.styleFocused_(this.isFocused_),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating_(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput_=!1)},e.prototype.getValue=function(){return this.getNativeInput_().value},e.prototype.setValue=function(t){if(this.getValue()!==t&&(this.getNativeInput_().value=t),this.setCharacterCounter_(t.length),this.validateOnValueChange_){var e=this.isValid();this.styleValidity_(e)}this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating_(this.shouldFloat),this.validateOnValueChange_&&this.adapter.shakeLabel(this.shouldShake))},e.prototype.isValid=function(){return this.useNativeValidation_?this.isNativeInputValid_():this.isValid_},e.prototype.setValid=function(t){this.isValid_=t,this.styleValidity_(t);var e=!t&&!this.isFocused_&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(e)},e.prototype.setValidateOnValueChange=function(t){this.validateOnValueChange_=t},e.prototype.getValidateOnValueChange=function(){return this.validateOnValueChange_},e.prototype.setUseNativeValidation=function(t){this.useNativeValidation_=t},e.prototype.isDisabled=function(){return this.getNativeInput_().disabled},e.prototype.setDisabled=function(t){this.getNativeInput_().disabled=t,this.styleDisabled_(t)},e.prototype.setHelperTextContent=function(t){this.helperText_&&this.helperText_.setContent(t)},e.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon_&&this.leadingIcon_.setAriaLabel(t)},e.prototype.setLeadingIconContent=function(t){this.leadingIcon_&&this.leadingIcon_.setContent(t)},e.prototype.setTrailingIconAriaLabel=function(t){this.trailingIcon_&&this.trailingIcon_.setAriaLabel(t)},e.prototype.setTrailingIconContent=function(t){this.trailingIcon_&&this.trailingIcon_.setContent(t)},e.prototype.setCharacterCounter_=function(t){if(this.characterCounter_){var e=this.getNativeInput_().maxLength;if(-1===e)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter_.setCounterValue(t,e)}},e.prototype.isBadInput_=function(){return this.getNativeInput_().validity.badInput||!1},e.prototype.isNativeInputValid_=function(){return this.getNativeInput_().validity.valid},e.prototype.styleValidity_=function(t){var n=e.cssClasses.INVALID;if(t?this.adapter.removeClass(n):this.adapter.addClass(n),this.helperText_){if(this.helperText_.setValidity(t),!this.helperText_.isValidation())return;var r=this.helperText_.isVisible(),a=this.helperText_.getId();r&&a?this.adapter.setInputAttr(strings$1.ARIA_DESCRIBEDBY,a):this.adapter.removeInputAttr(strings$1.ARIA_DESCRIBEDBY)}},e.prototype.styleFocused_=function(t){var n=e.cssClasses.FOCUSED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.styleDisabled_=function(t){var n=e.cssClasses,i=n.DISABLED,r=n.INVALID;t?(this.adapter.addClass(i),this.adapter.removeClass(r)):this.adapter.removeClass(i),this.leadingIcon_&&this.leadingIcon_.setDisabled(t),this.trailingIcon_&&this.trailingIcon_.setDisabled(t)},e.prototype.styleFloating_=function(t){var n=e.cssClasses.LABEL_FLOATING;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.getNativeInput_=function(){return(this.adapter?this.adapter.getNativeInput():null)||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},e}(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_6__.M),cssClasses$2={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg",ROOT:"mdc-text-field-helper-text"},strings$2={ARIA_HIDDEN:"aria-hidden",ROLE:"role",ROOT_SELECTOR:"."+cssClasses$2.ROOT},MDCTextFieldHelperTextFoundation=function(t){function e(n){return t.call(this,(0,_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_6__.a)((0,_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_6__.a)({},e.defaultAdapter),n))||this}return(0,_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_6__._)(e,t),Object.defineProperty(e,"cssClasses",{get:function get(){return cssClasses$2},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function get(){return strings$2},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function get(){return{addClass:function addClass(){},removeClass:function removeClass(){},hasClass:function hasClass(){return!1},getAttr:function getAttr(){return null},setAttr:function setAttr(){},removeAttr:function removeAttr(){},setContent:function setContent(){}}},enumerable:!0,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return"true"!==this.adapter.getAttr(strings$2.ARIA_HIDDEN)},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.isPersistent=function(){return this.adapter.hasClass(cssClasses$2.HELPER_TEXT_PERSISTENT)},e.prototype.setPersistent=function(t){t?this.adapter.addClass(cssClasses$2.HELPER_TEXT_PERSISTENT):this.adapter.removeClass(cssClasses$2.HELPER_TEXT_PERSISTENT)},e.prototype.isValidation=function(){return this.adapter.hasClass(cssClasses$2.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidation=function(t){t?this.adapter.addClass(cssClasses$2.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(cssClasses$2.HELPER_TEXT_VALIDATION_MSG)},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(strings$2.ARIA_HIDDEN)},e.prototype.setValidity=function(t){var e=this.adapter.hasClass(cssClasses$2.HELPER_TEXT_PERSISTENT),i=this.adapter.hasClass(cssClasses$2.HELPER_TEXT_VALIDATION_MSG)&&!t;i?(this.showToScreenReader(),this.adapter.setAttr(strings$2.ROLE,"alert")):this.adapter.removeAttr(strings$2.ROLE),e||i||this.hide_()},e.prototype.hide_=function(){this.adapter.setAttr(strings$2.ARIA_HIDDEN,"true")},e}(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_6__.M),MDCTextFieldHelperText=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_6__._)(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundationForTextField",{get:function get(){return this.foundation},enumerable:!0,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this;return new MDCTextFieldHelperTextFoundation({addClass:function addClass(e){return t.root.classList.add(e)},removeClass:function removeClass(e){return t.root.classList.remove(e)},hasClass:function hasClass(e){return t.root.classList.contains(e)},getAttr:function getAttr(e){return t.root.getAttribute(e)},setAttr:function setAttr(e,n){return t.root.setAttribute(e,n)},removeAttr:function removeAttr(e){return t.root.removeAttribute(e)},setContent:function setContent(e){t.root.textContent=e}})},e}(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_6__.b),strings$3={ICON_EVENT:"MDCTextField:icon",ICON_ROLE:"button"},cssClasses$3={ROOT:"mdc-text-field__icon"},INTERACTION_EVENTS$1=["click","keydown"],MDCTextFieldIconFoundation=function(t){function e(n){var i=t.call(this,(0,_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_6__.a)((0,_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_6__.a)({},e.defaultAdapter),n))||this;return i.savedTabIndex_=null,i.interactionHandler_=function(t){return i.handleInteraction(t)},i}return(0,_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_6__._)(e,t),Object.defineProperty(e,"strings",{get:function get(){return strings$3},enumerable:!0,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function get(){return cssClasses$3},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function get(){return{getAttr:function getAttr(){return null},setAttr:function setAttr(){},removeAttr:function removeAttr(){},setContent:function setContent(){},registerInteractionHandler:function registerInteractionHandler(){},deregisterInteractionHandler:function deregisterInteractionHandler(){},notifyIconAction:function notifyIconAction(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this;this.savedTabIndex_=this.adapter.getAttr("tabindex"),INTERACTION_EVENTS$1.forEach((function(e){t.adapter.registerInteractionHandler(e,t.interactionHandler_)}))},e.prototype.destroy=function(){var t=this;INTERACTION_EVENTS$1.forEach((function(e){t.adapter.deregisterInteractionHandler(e,t.interactionHandler_)}))},e.prototype.setDisabled=function(t){this.savedTabIndex_&&(t?(this.adapter.setAttr("tabindex","-1"),this.adapter.removeAttr("role")):(this.adapter.setAttr("tabindex",this.savedTabIndex_),this.adapter.setAttr("role",strings$3.ICON_ROLE)))},e.prototype.setAriaLabel=function(t){this.adapter.setAttr("aria-label",t)},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.handleInteraction=function(t){var e="Enter"===t.key||13===t.keyCode;("click"===t.type||e)&&(t.preventDefault(),this.adapter.notifyIconAction())},e}(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_6__.M),MDCTextFieldIcon=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_6__._)(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundationForTextField",{get:function get(){return this.foundation},enumerable:!0,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this;return new MDCTextFieldIconFoundation({getAttr:function getAttr(e){return t.root.getAttribute(e)},setAttr:function setAttr(e,n){return t.root.setAttribute(e,n)},removeAttr:function removeAttr(e){return t.root.removeAttribute(e)},setContent:function setContent(e){t.root.textContent=e},registerInteractionHandler:function registerInteractionHandler(e,n){return t.listen(e,n)},deregisterInteractionHandler:function deregisterInteractionHandler(e,n){return t.unlisten(e,n)},notifyIconAction:function notifyIconAction(){return t.emit(MDCTextFieldIconFoundation.strings.ICON_EVENT,{},!0)}})},e}(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_6__.b),MDCTextField=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_6__._)(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t,e,n,i,r,a,o){void 0===t&&(t=function t(_t,e){return new _component_873f6020_js__WEBPACK_IMPORTED_MODULE_7__.M(_t,e)}),void 0===e&&(e=function e(t){return new _component_6b74aefe_js__WEBPACK_IMPORTED_MODULE_8__.a(t)}),void 0===n&&(n=function n(t){return new MDCTextFieldHelperText(t)}),void 0===i&&(i=function i(t){return new MDCTextFieldCharacterCounter(t)}),void 0===r&&(r=function r(t){return new MDCTextFieldIcon(t)}),void 0===a&&(a=function a(t){return new _component_6b74aefe_js__WEBPACK_IMPORTED_MODULE_8__.M(t)}),void 0===o&&(o=function o(t){return new _component_6b74aefe_js__WEBPACK_IMPORTED_MODULE_8__.b(t)}),this.input_=this.root.querySelector(strings$1.INPUT_SELECTOR);var s=this.root.querySelector(strings$1.LABEL_SELECTOR);this.label_=s?a(s):null;var u=this.root.querySelector(strings$1.LINE_RIPPLE_SELECTOR);this.lineRipple_=u?e(u):null;var l=this.root.querySelector(strings$1.OUTLINE_SELECTOR);this.outline_=l?o(l):null;var d=MDCTextFieldHelperTextFoundation.strings,c=this.root.nextElementSibling,p=c&&c.classList.contains(cssClasses$1.HELPER_LINE),f=p&&c&&c.querySelector(d.ROOT_SELECTOR);this.helperText_=f?n(f):null;var h=MDCTextFieldCharacterCounterFoundation.strings,_=this.root.querySelector(h.ROOT_SELECTOR);!_&&p&&c&&(_=c.querySelector(h.ROOT_SELECTOR)),this.characterCounter_=_?i(_):null;var g=this.root.querySelector(strings$1.LEADING_ICON_SELECTOR);this.leadingIcon_=g?r(g):null;var b=this.root.querySelector(strings$1.TRAILING_ICON_SELECTOR);this.trailingIcon_=b?r(b):null,this.prefix_=this.root.querySelector(strings$1.PREFIX_SELECTOR),this.suffix_=this.root.querySelector(strings$1.SUFFIX_SELECTOR),this.ripple=this.createRipple_(t)},e.prototype.destroy=function(){this.ripple&&this.ripple.destroy(),this.lineRipple_&&this.lineRipple_.destroy(),this.helperText_&&this.helperText_.destroy(),this.characterCounter_&&this.characterCounter_.destroy(),this.leadingIcon_&&this.leadingIcon_.destroy(),this.trailingIcon_&&this.trailingIcon_.destroy(),this.label_&&this.label_.destroy(),this.outline_&&this.outline_.destroy(),t.prototype.destroy.call(this)},e.prototype.initialSyncWithDOM=function(){this.disabled=this.input_.disabled},Object.defineProperty(e.prototype,"value",{get:function get(){return this.foundation.getValue()},set:function set(t){this.foundation.setValue(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"disabled",{get:function get(){return this.foundation.isDisabled()},set:function set(t){this.foundation.setDisabled(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"valid",{get:function get(){return this.foundation.isValid()},set:function set(t){this.foundation.setValid(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"required",{get:function get(){return this.input_.required},set:function set(t){this.input_.required=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"pattern",{get:function get(){return this.input_.pattern},set:function set(t){this.input_.pattern=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"minLength",{get:function get(){return this.input_.minLength},set:function set(t){this.input_.minLength=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"maxLength",{get:function get(){return this.input_.maxLength},set:function set(t){t<0?this.input_.removeAttribute("maxLength"):this.input_.maxLength=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"min",{get:function get(){return this.input_.min},set:function set(t){this.input_.min=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"max",{get:function get(){return this.input_.max},set:function set(t){this.input_.max=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"step",{get:function get(){return this.input_.step},set:function set(t){this.input_.step=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"helperTextContent",{set:function set(t){this.foundation.setHelperTextContent(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"leadingIconAriaLabel",{set:function set(t){this.foundation.setLeadingIconAriaLabel(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"leadingIconContent",{set:function set(t){this.foundation.setLeadingIconContent(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"trailingIconAriaLabel",{set:function set(t){this.foundation.setTrailingIconAriaLabel(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"trailingIconContent",{set:function set(t){this.foundation.setTrailingIconContent(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"useNativeValidation",{set:function set(t){this.foundation.setUseNativeValidation(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"prefixText",{get:function get(){return this.prefix_?this.prefix_.textContent:null},set:function set(t){this.prefix_&&(this.prefix_.textContent=t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"suffixText",{get:function get(){return this.suffix_?this.suffix_.textContent:null},set:function set(t){this.suffix_&&(this.suffix_.textContent=t)},enumerable:!0,configurable:!0}),e.prototype.focus=function(){this.input_.focus()},e.prototype.layout=function(){var t=this.foundation.shouldFloat;this.foundation.notchOutline(t)},e.prototype.getDefaultFoundation=function(){var t=(0,_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_6__.a)((0,_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_6__.a)((0,_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_6__.a)((0,_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_6__.a)((0,_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_6__.a)({},this.getRootAdapterMethods_()),this.getInputAdapterMethods_()),this.getLabelAdapterMethods_()),this.getLineRippleAdapterMethods_()),this.getOutlineAdapterMethods_());return new MDCTextFieldFoundation(t,this.getFoundationMap_())},e.prototype.getRootAdapterMethods_=function(){var t=this;return{addClass:function addClass(e){return t.root.classList.add(e)},removeClass:function removeClass(e){return t.root.classList.remove(e)},hasClass:function hasClass(e){return t.root.classList.contains(e)},registerTextFieldInteractionHandler:function registerTextFieldInteractionHandler(e,n){t.listen(e,n)},deregisterTextFieldInteractionHandler:function deregisterTextFieldInteractionHandler(e,n){t.unlisten(e,n)},registerValidationAttributeChangeHandler:function registerValidationAttributeChangeHandler(e){var i=new MutationObserver((function(t){return e(function n(t){return t.map((function(t){return t.attributeName})).filter((function(t){return t}))}(t))}));return i.observe(t.input_,{attributes:!0}),i},deregisterValidationAttributeChangeHandler:function deregisterValidationAttributeChangeHandler(t){t.disconnect()}}},e.prototype.getInputAdapterMethods_=function(){var t=this;return{getNativeInput:function getNativeInput(){return t.input_},setInputAttr:function setInputAttr(e,n){t.input_.setAttribute(e,n)},removeInputAttr:function removeInputAttr(e){t.input_.removeAttribute(e)},isFocused:function isFocused(){return document.activeElement===t.input_},registerInputInteractionHandler:function registerInputInteractionHandler(e,n){t.input_.addEventListener(e,n,(0,_component_873f6020_js__WEBPACK_IMPORTED_MODULE_7__.b)())},deregisterInputInteractionHandler:function deregisterInputInteractionHandler(e,n){t.input_.removeEventListener(e,n,(0,_component_873f6020_js__WEBPACK_IMPORTED_MODULE_7__.b)())}}},e.prototype.getLabelAdapterMethods_=function(){var t=this;return{floatLabel:function floatLabel(e){return t.label_&&t.label_.float(e)},getLabelWidth:function getLabelWidth(){return t.label_?t.label_.getWidth():0},hasLabel:function hasLabel(){return Boolean(t.label_)},shakeLabel:function shakeLabel(e){return t.label_&&t.label_.shake(e)},setLabelRequired:function setLabelRequired(e){return t.label_&&t.label_.setRequired(e)}}},e.prototype.getLineRippleAdapterMethods_=function(){var t=this;return{activateLineRipple:function activateLineRipple(){t.lineRipple_&&t.lineRipple_.activate()},deactivateLineRipple:function deactivateLineRipple(){t.lineRipple_&&t.lineRipple_.deactivate()},setLineRippleTransformOrigin:function setLineRippleTransformOrigin(e){t.lineRipple_&&t.lineRipple_.setRippleCenter(e)}}},e.prototype.getOutlineAdapterMethods_=function(){var t=this;return{closeOutline:function closeOutline(){return t.outline_&&t.outline_.closeNotch()},hasOutline:function hasOutline(){return Boolean(t.outline_)},notchOutline:function notchOutline(e){return t.outline_&&t.outline_.notch(e)}}},e.prototype.getFoundationMap_=function(){return{characterCounter:this.characterCounter_?this.characterCounter_.foundationForTextField:void 0,helperText:this.helperText_?this.helperText_.foundationForTextField:void 0,leadingIcon:this.leadingIcon_?this.leadingIcon_.foundationForTextField:void 0,trailingIcon:this.trailingIcon_?this.trailingIcon_.foundationForTextField:void 0}},e.prototype.createRipple_=function(t){var e=this,n=this.root.classList.contains(cssClasses$1.TEXTAREA),i=this.root.classList.contains(cssClasses$1.OUTLINED);if(n||i)return null;var r=(0,_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_6__.a)((0,_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_6__.a)({},_component_873f6020_js__WEBPACK_IMPORTED_MODULE_7__.M.createAdapter(this)),{isSurfaceActive:function isSurfaceActive(){return(0,_ponyfill_b3c8879a_js__WEBPACK_IMPORTED_MODULE_9__.m)(e.input_,":active")},registerInteractionHandler:function registerInteractionHandler(t,n){return e.input_.addEventListener(t,n,(0,_component_873f6020_js__WEBPACK_IMPORTED_MODULE_7__.b)())},deregisterInteractionHandler:function deregisterInteractionHandler(t,n){return e.input_.removeEventListener(t,n,(0,_component_873f6020_js__WEBPACK_IMPORTED_MODULE_7__.b)())}});return t(this.root,new _component_873f6020_js__WEBPACK_IMPORTED_MODULE_7__.a(r))},e}(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_6__.b)},61383:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>classnames});__webpack_require__(18145),__webpack_require__(16781);var classnames=(0,__webpack_require__(12419).c)((function(e){!function(){var r={}.hasOwnProperty;function s(){for(var e=[],a=0;a<arguments.length;a++){var o=arguments[a];if(o){var n=typeof o;if("string"===n||"number"===n)e.push(o);else if(Array.isArray(o)&&o.length){var t=s.apply(null,o);t&&e.push(t)}else if("object"===n)for(var i in o)r.call(o,i)&&o[i]&&e.push(i)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):window.classNames=s}()}))},65584:(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__(23103)({target:"Function",proto:!0},{bind:__webpack_require__(94128)})},4173:(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__(23103)({global:!0},{globalThis:__webpack_require__(9859)})}}]);
//# sourceMappingURL=1020.3b4d658e.iframe.bundle.js.map