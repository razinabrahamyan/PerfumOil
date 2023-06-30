"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_ts_src_layout_UserLayout_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/UserLayout.vue?vue&type=script&lang=ts":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/UserLayout.vue?vue&type=script&lang=ts ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");
/* harmony import */ var _core_helpers_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/helpers/config */ "./resources/ts/src/core/helpers/config.ts");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "UserLayout",
  components: {},
  setup: function setup() {
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_2__.useStore)();
    var route = (0,vue_router__WEBPACK_IMPORTED_MODULE_3__.useRoute)();
    var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    var pageTitle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.getters.pageTitle;
    });
    var breadcrumbs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.getters.pageBreadcrumbPath;
    });
    return {
      toolbarDisplay: _core_helpers_config__WEBPACK_IMPORTED_MODULE_1__.toolbarDisplay,
      loaderEnabled: _core_helpers_config__WEBPACK_IMPORTED_MODULE_1__.loaderEnabled,
      contentWidthFluid: _core_helpers_config__WEBPACK_IMPORTED_MODULE_1__.contentWidthFluid,
      loaderLogo: _core_helpers_config__WEBPACK_IMPORTED_MODULE_1__.loaderLogo,
      asideEnabled: _core_helpers_config__WEBPACK_IMPORTED_MODULE_1__.asideEnabled,
      subheaderDisplay: _core_helpers_config__WEBPACK_IMPORTED_MODULE_1__.subheaderDisplay,
      pageTitle: pageTitle,
      breadcrumbs: breadcrumbs,
      themeLightLogo: _core_helpers_config__WEBPACK_IMPORTED_MODULE_1__.themeLightLogo,
      themeDarkLogo: _core_helpers_config__WEBPACK_IMPORTED_MODULE_1__.themeDarkLogo
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/UserLayout.vue?vue&type=template&id=7d61ae37&ts=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/UserLayout.vue?vue&type=template&id=7d61ae37&ts=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "page d-flex flex-row flex-column-fluid"
};
var _hoisted_2 = {
  id: "kt_wrapper",
  "class": "wrapper d-flex flex-column flex-row-fluid"
};
var _hoisted_3 = {
  id: "kt_content",
  "class": "content d-flex flex-column flex-column-fluid"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-view");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" begin:: Body "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" begin:: Aside Left "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end:: Aside Left "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" begin:: Content "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" begin:: Content Body "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    id: "kt_content_container",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'container-fluid': _ctx.contentWidthFluid,
      'container-xxl': !_ctx.contentWidthFluid
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view)], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end:: Content Body ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end:: Content ")])])], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */);
}

/***/ }),

/***/ "./resources/ts/src/core/helpers/config.ts":
/*!*************************************************!*\
  !*** ./resources/ts/src/core/helpers/config.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asideDisplay": () => (/* binding */ asideDisplay),
/* harmony export */   "asideEnabled": () => (/* binding */ asideEnabled),
/* harmony export */   "asideMenuIcons": () => (/* binding */ asideMenuIcons),
/* harmony export */   "asideSecondaryDisplay": () => (/* binding */ asideSecondaryDisplay),
/* harmony export */   "asideTheme": () => (/* binding */ asideTheme),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "contentWidthFluid": () => (/* binding */ contentWidthFluid),
/* harmony export */   "displaySidebar": () => (/* binding */ displaySidebar),
/* harmony export */   "footerWidthFluid": () => (/* binding */ footerWidthFluid),
/* harmony export */   "headerFixed": () => (/* binding */ headerFixed),
/* harmony export */   "headerFixedOnMobile": () => (/* binding */ headerFixedOnMobile),
/* harmony export */   "headerLeft": () => (/* binding */ headerLeft),
/* harmony export */   "headerMenuIcons": () => (/* binding */ headerMenuIcons),
/* harmony export */   "headerWidthFluid": () => (/* binding */ headerWidthFluid),
/* harmony export */   "loaderEnabled": () => (/* binding */ loaderEnabled),
/* harmony export */   "loaderLogo": () => (/* binding */ loaderLogo),
/* harmony export */   "minimizationEnabled": () => (/* binding */ minimizationEnabled),
/* harmony export */   "minimizedAsideSecondary": () => (/* binding */ minimizedAsideSecondary),
/* harmony export */   "subheaderDisplay": () => (/* binding */ subheaderDisplay),
/* harmony export */   "themeDarkLogo": () => (/* binding */ themeDarkLogo),
/* harmony export */   "themeLightLogo": () => (/* binding */ themeLightLogo),
/* harmony export */   "toolbarDisplay": () => (/* binding */ toolbarDisplay),
/* harmony export */   "toolbarWidthFluid": () => (/* binding */ toolbarWidthFluid)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/index */ "./resources/ts/src/store/index.ts");
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");


/**
 * Returns layout config
 * @returns {object}
 */
var config = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig();
});
/**
 * Set the sidebar display
 * @returns {boolean}
 */
var displaySidebar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("sidebar.display");
});
/**
 * Check if footer container is fluid
 * @returns {boolean}
 */
var footerWidthFluid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("footer.width") === "fluid";
});
/**
 * Check if header container is fluid
 * @returns {boolean}
 */
var headerWidthFluid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("header.width") === "fluid";
});
/**
 * Returns header left part type
 * @returns {string}
 */
var headerLeft = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("header.left");
});
/**
 * Returns header fixed on desktop
 * @returns {boolean}
 */
var headerFixed = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("header.fixed.desktop");
});
/**
 * Returns header fixed on tablet and mobile
 * @returns {boolean}
 */
var headerFixedOnMobile = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("header.fixed.tabletAndMobile");
});
/**
 * Set the aside display
 * @returns {boolean}
 */
var asideDisplay = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("aside.display") === true;
});
/**
 * Aside secondary minimized by default
 * @returns {boolean}
 */
var minimizedAsideSecondary = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("aside.minimized");
});
/**
 * Aside minimization enabled
 * @returns {boolean}
 */
var minimizationEnabled = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("aside.minimize");
});
/**
 * Aside secondary display
 * @returns {boolean}
 */
var asideSecondaryDisplay = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("aside.secondaryDisplay");
});
/**
 * Check if toolbar width is fluid
 * @returns {boolean}
 */
var toolbarWidthFluid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("toolbar.width") === "fluid";
});
/**
 * Set the toolbar display
 * @returns {boolean}
 */
var toolbarDisplay = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("toolbar.display");
});
/**
 * Check if the page loader is enabled
 * @returns {boolean}
 */
var loaderEnabled = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("loader.display");
});
/**
 * Check if container width is fluid
 * @returns {boolean}
 */
var contentWidthFluid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("content.width") === "fluid";
});
/**
 * Page loader logo image
 * @returns {string}
 */
var loaderLogo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return process.env.BASE_URL + _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("loader.logo");
});
/**
 * Check if the aside menu is enabled
 * @returns {boolean}
 */
var asideEnabled = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return !!_store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("aside.display");
});
/**
 * Set the aside theme
 * @returns {string}
 */
var asideTheme = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("aside.theme");
});
/**
 * Set the subheader display
 * @returns {boolean}
 */
var subheaderDisplay = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("toolbar.display");
});
/**
 * Set the aside menu icon type
 * @returns {string}
 */
var asideMenuIcons = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("aside.menuIcon");
});
/**
 * Light theme logo image
 * @returns {string}
 */
var themeLightLogo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("main.logo.light");
});
/**
 * Dark theme logo image
 * @returns {string}
 */
var themeDarkLogo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("main.logo.dark");
});
/**
 * Set the header menu icon type
 * @returns {string}
 */
var headerMenuIcons = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].getters.layoutConfig("header.menuIcon");
});

/***/ }),

/***/ "./resources/ts/src/layout/UserLayout.vue":
/*!************************************************!*\
  !*** ./resources/ts/src/layout/UserLayout.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserLayout_vue_vue_type_template_id_7d61ae37_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserLayout.vue?vue&type=template&id=7d61ae37&ts=true */ "./resources/ts/src/layout/UserLayout.vue?vue&type=template&id=7d61ae37&ts=true");
/* harmony import */ var _UserLayout_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserLayout.vue?vue&type=script&lang=ts */ "./resources/ts/src/layout/UserLayout.vue?vue&type=script&lang=ts");
/* harmony import */ var C_OpenServer_domains_laravel_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_OpenServer_domains_laravel_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_UserLayout_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_UserLayout_vue_vue_type_template_id_7d61ae37_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/src/layout/UserLayout.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/src/layout/UserLayout.vue?vue&type=script&lang=ts":
/*!************************************************************************!*\
  !*** ./resources/ts/src/layout/UserLayout.vue?vue&type=script&lang=ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserLayout_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserLayout_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UserLayout.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/UserLayout.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./resources/ts/src/layout/UserLayout.vue?vue&type=template&id=7d61ae37&ts=true":
/*!**************************************************************************************!*\
  !*** ./resources/ts/src/layout/UserLayout.vue?vue&type=template&id=7d61ae37&ts=true ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserLayout_vue_vue_type_template_id_7d61ae37_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserLayout_vue_vue_type_template_id_7d61ae37_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UserLayout.vue?vue&type=template&id=7d61ae37&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/UserLayout.vue?vue&type=template&id=7d61ae37&ts=true");


/***/ })

}]);