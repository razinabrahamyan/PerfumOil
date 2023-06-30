"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_ts_src_layout_InitialRoute_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/components/Loader.vue?vue&type=script&lang=ts":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/components/Loader.vue?vue&type=script&lang=ts ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "Loader",
  props: {
    logo: String
  },
  setup: function setup() {
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_1__.useStore)();
    var loaderType = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return store.getters.layoutConfig("loader.type");
    });
    return {
      loaderType: loaderType
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/InitialRoute.vue?vue&type=script&lang=ts":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/InitialRoute.vue?vue&type=script&lang=ts ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");
/* harmony import */ var _store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/enums/StoreEnums */ "./resources/ts/src/store/enums/StoreEnums.ts");
/* harmony import */ var _core_services_LayoutService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/services/LayoutService */ "./resources/ts/src/core/services/LayoutService.ts");
/* harmony import */ var _assets_ts_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/ts/components */ "./resources/ts/src/assets/ts/components/index.ts");
/* harmony import */ var _components_Loader_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Loader.vue */ "./resources/ts/src/components/Loader.vue");
/* harmony import */ var _core_helpers_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core/helpers/config */ "./resources/ts/src/core/helpers/config.ts");
/* harmony import */ var _core_helpers_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/core/helpers/dom */ "./resources/ts/src/core/helpers/dom.ts");









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "InitialRoute",
  components: {
    KTLoader: _components_Loader_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  setup: function setup() {
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_7__.useStore)();
    var route = (0,vue_router__WEBPACK_IMPORTED_MODULE_8__.useRoute)();
    var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    _core_services_LayoutService__WEBPACK_IMPORTED_MODULE_2__["default"].init();
    if (!store.getters.getRole) {
      store.dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_CLASSNAME, "page-loading");
    }
    var hasPermission = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      if (store.getters.getRole) {
        store.dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.REMOVE_BODY_CLASSNAME, "page-loading");
        var parentRoute = route.matched.find(function (m) {
          return m.meta.auth;
        });
        if (!parentRoute) {
          switch (store.getters.getRole) {
            case 'user':
              break;
            case 'admin':
              router.push({
                path: 'dashboard'
              });
              break;
            default:
              break;
          }
        } else if (parentRoute.meta.auth !== store.getters.getRole) {
          router.push({
            path: '/404'
          });
        }
        return true;
      }
      return false;
    });
    if (!store.getters.isUserAuthenticated) {
      router.push({
        name: "sign-in"
      });
    }
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
        _assets_ts_components__WEBPACK_IMPORTED_MODULE_3__.DrawerComponent.bootstrap();
        _assets_ts_components__WEBPACK_IMPORTED_MODULE_3__.ScrollComponent.bootstrap();
        _assets_ts_components__WEBPACK_IMPORTED_MODULE_3__.DrawerComponent.updateAll();
        _assets_ts_components__WEBPACK_IMPORTED_MODULE_3__.ScrollComponent.updateAll();
      });
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      return route.path;
    }, function () {
      if (!store.getters.isUserAuthenticated) {
        router.push({
          name: "sign-in"
        });
      }
      _assets_ts_components__WEBPACK_IMPORTED_MODULE_3__.MenuComponent.hideDropdowns(undefined);
      _assets_ts_components__WEBPACK_IMPORTED_MODULE_3__.DrawerComponent.hideAll();
      (0,_core_helpers_dom__WEBPACK_IMPORTED_MODULE_6__.removeModalBackdrop)();
    });
    return {
      hasPermission: hasPermission,
      loaderEnabled: _core_helpers_config__WEBPACK_IMPORTED_MODULE_5__.loaderEnabled,
      loaderLogo: _core_helpers_config__WEBPACK_IMPORTED_MODULE_5__.loaderLogo
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/components/Loader.vue?vue&type=template&id=0cada789&ts=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/components/Loader.vue?vue&type=template&id=0cada789&ts=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "page-loader flex-column"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "spinner-border text-primary",
  role: "status"
}, null, -1 /* HOISTED */);
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-muted fs-6 fw-bold mt-5"
}, "Loading...", -1 /* HOISTED */);
var _hoisted_4 = [_hoisted_2, _hoisted_3];
var _hoisted_5 = {
  key: 1,
  "class": "page-loader flex-column"
};
var _hoisted_6 = ["src"];
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex align-items-center mt-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "spinner-border text-primary",
  role: "status"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-muted fs-6 fw-bold ms-5"
}, "Loading...")], -1 /* HOISTED */);
var _hoisted_8 = {
  key: 2,
  "class": "page-loader"
};
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "spinner-border text-primary",
  role: "status"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "visually-hidden"
}, "Loading...")], -1 /* HOISTED */);
var _hoisted_10 = [_hoisted_9];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Page loader"), _ctx.loaderType === 'spinner-message' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, _hoisted_4)) : _ctx.loaderType === 'spinner-logo' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    alt: "Logo",
    "class": "max-h-75px",
    src: _ctx.logo
  }, null, 8 /* PROPS */, _hoisted_6), _hoisted_7])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, _hoisted_10)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Page Loader")], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/InitialRoute.vue?vue&type=template&id=b897fb72&ts=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/InitialRoute.vue?vue&type=template&id=b897fb72&ts=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_KTLoader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("KTLoader");
  var _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-view");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [_ctx.loaderEnabled ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_KTLoader, {
    key: 0,
    logo: _ctx.loaderLogo
  }, null, 8 /* PROPS */, ["logo"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.hasPermission ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_router_view, {
    key: 1
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
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

/***/ "./resources/ts/src/core/helpers/dom.ts":
/*!**********************************************!*\
  !*** ./resources/ts/src/core/helpers/dom.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hideModal": () => (/* binding */ hideModal),
/* harmony export */   "removeModalBackdrop": () => (/* binding */ removeModalBackdrop)
/* harmony export */ });
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");

var hideModal = function hideModal(modalEl) {
  if (!modalEl) {
    return;
  }
  var myModal = bootstrap__WEBPACK_IMPORTED_MODULE_0__.Modal.getInstance(modalEl);
  myModal.hide();
};
var removeModalBackdrop = function removeModalBackdrop() {
  if (document.querySelectorAll(".modal-backdrop.fade.show").length) {
    document.querySelectorAll(".modal-backdrop.fade.show").forEach(function (item) {
      item.remove();
    });
  }
};


/***/ }),

/***/ "./resources/ts/src/core/services/LayoutService.ts":
/*!*********************************************************!*\
  !*** ./resources/ts/src/core/services/LayoutService.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! object-path */ "./node_modules/object-path/index.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/enums/StoreEnums */ "./resources/ts/src/store/enums/StoreEnums.ts");
/* harmony import */ var _store___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/ */ "./resources/ts/src/store/index.ts");
/* harmony import */ var _core_helpers_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/helpers/config */ "./resources/ts/src/core/helpers/config.ts");




var LayoutService = /** @class */function () {
  function LayoutService() {}
  /**
   * @description initialize default layout
   */
  LayoutService.init = function () {
    LayoutService.initLayout();
    LayoutService.initHeader();
    LayoutService.initAside();
    LayoutService.initFooter();
  };
  /**
   * @description init layout
   */
  LayoutService.initLayout = function () {
    _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_ATTRIBUTE, {
      qulifiedName: "id",
      value: "kt_body"
    });
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "loader.display")) {
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_CLASSNAME, "page-loading-enabled");
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_CLASSNAME, "page-loading");
    }
  };
  /**
   * @description init header
   */
  LayoutService.initHeader = function () {
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "header.fixed.desktop")) {
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_CLASSNAME, "header-fixed");
    }
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "header.fixed.tabletAndMobile")) {
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_CLASSNAME, "header-tablet-and-mobile-fixed");
    }
  };
  /**
   * @description init aside
   */
  LayoutService.initAside = function () {
    if (!object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "aside.display")) {
      return;
    }
    // Enable Aside
    _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_CLASSNAME, "aside-enabled");
    // Minimized
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "aside.minimized") && object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "aside.toggle")) {
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_ATTRIBUTE, {
        qulifiedName: "data-kt-aside-minimize",
        value: "on"
      });
    }
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "aside.fixed")) {
      // Fixed Aside
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_CLASSNAME, "aside-fixed");
    }
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "aside.secondaryDisplay")) {
      // Aside Secondary Enabled
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_CLASSNAME, "aside-secondary-enabled");
    }
    // Default minimized
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "aside.minimized")) {
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_ATTRIBUTE, {
        qulifiedName: "data-kt-aside-minimize",
        value: "on"
      });
    }
  };
  /**
   * @description init footer
   */
  LayoutService.initFooter = function () {
    // Fixed header
    if (object_path__WEBPACK_IMPORTED_MODULE_0___default().get(_core_helpers_config__WEBPACK_IMPORTED_MODULE_3__.config.value, "footer.width") === "fixed") {
      _store___WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.ADD_BODY_CLASSNAME, "footer-fixed");
    }
  };
  return LayoutService;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutService);

/***/ }),

/***/ "./resources/ts/src/components/Loader.vue":
/*!************************************************!*\
  !*** ./resources/ts/src/components/Loader.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Loader_vue_vue_type_template_id_0cada789_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loader.vue?vue&type=template&id=0cada789&ts=true */ "./resources/ts/src/components/Loader.vue?vue&type=template&id=0cada789&ts=true");
/* harmony import */ var _Loader_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader.vue?vue&type=script&lang=ts */ "./resources/ts/src/components/Loader.vue?vue&type=script&lang=ts");
/* harmony import */ var C_OpenServer_domains_laravel_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_OpenServer_domains_laravel_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Loader_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Loader_vue_vue_type_template_id_0cada789_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/src/components/Loader.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/src/layout/InitialRoute.vue":
/*!**************************************************!*\
  !*** ./resources/ts/src/layout/InitialRoute.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InitialRoute_vue_vue_type_template_id_b897fb72_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InitialRoute.vue?vue&type=template&id=b897fb72&ts=true */ "./resources/ts/src/layout/InitialRoute.vue?vue&type=template&id=b897fb72&ts=true");
/* harmony import */ var _InitialRoute_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InitialRoute.vue?vue&type=script&lang=ts */ "./resources/ts/src/layout/InitialRoute.vue?vue&type=script&lang=ts");
/* harmony import */ var C_OpenServer_domains_laravel_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_OpenServer_domains_laravel_vue_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_InitialRoute_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_InitialRoute_vue_vue_type_template_id_b897fb72_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/src/layout/InitialRoute.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/src/components/Loader.vue?vue&type=script&lang=ts":
/*!************************************************************************!*\
  !*** ./resources/ts/src/components/Loader.vue?vue&type=script&lang=ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Loader_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Loader_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Loader.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/components/Loader.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./resources/ts/src/layout/InitialRoute.vue?vue&type=script&lang=ts":
/*!**************************************************************************!*\
  !*** ./resources/ts/src/layout/InitialRoute.vue?vue&type=script&lang=ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InitialRoute_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InitialRoute_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InitialRoute.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/InitialRoute.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./resources/ts/src/components/Loader.vue?vue&type=template&id=0cada789&ts=true":
/*!**************************************************************************************!*\
  !*** ./resources/ts/src/components/Loader.vue?vue&type=template&id=0cada789&ts=true ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Loader_vue_vue_type_template_id_0cada789_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Loader_vue_vue_type_template_id_0cada789_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Loader.vue?vue&type=template&id=0cada789&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/components/Loader.vue?vue&type=template&id=0cada789&ts=true");


/***/ }),

/***/ "./resources/ts/src/layout/InitialRoute.vue?vue&type=template&id=b897fb72&ts=true":
/*!****************************************************************************************!*\
  !*** ./resources/ts/src/layout/InitialRoute.vue?vue&type=template&id=b897fb72&ts=true ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InitialRoute_vue_vue_type_template_id_b897fb72_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InitialRoute_vue_vue_type_template_id_b897fb72_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InitialRoute.vue?vue&type=template&id=b897fb72&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/InitialRoute.vue?vue&type=template&id=b897fb72&ts=true");


/***/ })

}]);