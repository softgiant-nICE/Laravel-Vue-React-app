(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/themes/v4/components/core/AppBar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/themes/v4/components/core/AppBar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      notifications: ["Mike, Thanos is coming", "5 new avengers joined the team", "You're now friends with Capt", "Another Notification", "Another One - Dj Khalid voice"],
      title: "I got a digital dash -Future Hendrixx",
      responsive: false,
      responsiveInput: false,
      photo: __webpack_require__(/*! ../../assets/img/profile.png */ "./resources/js/components/admin/themes/v4/assets/img/profile.png")
    };
  },
  watch: {// '$route'(val) {
    //     this.title = val.name
    // }
  },
  mounted: function mounted() {
    this.onResponsiveInverted();
    window.addEventListener('resize', this.onResponsiveInverted);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.onResponsiveInverted);
  },
  methods: {
    onResponsiveInverted: function onResponsiveInverted() {
      if (window.innerWidth < 991) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    },
    toggleMenu: function toggleMenu() {
      this.$eventHub.$emit('toggleMenuV4');
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/themes/v4/components/core/AppBar.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/themes/v4/components/core/AppBar.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Fix coming in v2.0.8 */\n#core-app-bar {\n    width: auto;\n}\n#core-app-bar a {\n    text-decoration: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/themes/v4/components/core/AppBar.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/themes/v4/components/core/AppBar.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader??ref--6-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppBar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/themes/v4/components/core/AppBar.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/themes/v4/components/core/AppBar.vue?vue&type=template&id=70734440&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/themes/v4/components/core/AppBar.vue?vue&type=template&id=70734440& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app-bar",
    {
      attrs: {
        id: "core-app-bar",
        app: "",
        flat: "",
        height: "70",
        "clipped-left": "",
        absolute: "",
        color: "#f5f5f5"
      }
    },
    [
      _c(
        "v-toolbar-title",
        {
          staticClass: "font-weight-light align-items-center d-flex",
          staticStyle: { "margin-left": "-16px" }
        },
        [
          _c(
            "div",
            {
              staticStyle: {
                width: "250px",
                "background-color": "white",
                display: "flex",
                "justify-content": "center"
              }
            },
            [
              _c("v-img", {
                attrs: {
                  src: "../../../assets/img/logo.png",
                  width: "150",
                  height: "70",
                  "max-width": "150"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-flex align-center" },
            [
              _c(
                "v-btn",
                {
                  attrs: { icon: "" },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.toggleMenu($event)
                    }
                  }
                },
                [
                  _c("v-icon", { attrs: { color: "black" } }, [
                    _vm._v("mdi-view-list")
                  ])
                ],
                1
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c("v-spacer"),
      _vm._v(" "),
      _c("v-text-field", {
        staticClass: "purple-input",
        attrs: {
          app: "",
          label: "Searching...",
          "hide-details": "",
          color: "purple",
          "prepend-inner-icon": "search"
        }
      }),
      _vm._v(" "),
      _c("v-spacer"),
      _vm._v(" "),
      _c(
        "v-badge",
        {
          staticClass: "mr-4",
          attrs: { color: "purple", overlap: "" },
          scopedSlots: _vm._u([
            {
              key: "badge",
              fn: function() {
                return [
                  _c("span", { staticStyle: { "font-size": "10px" } }, [
                    _vm._v("39")
                  ])
                ]
              },
              proxy: true
            }
          ])
        },
        [_vm._v(" "), _c("v-icon", [_vm._v("mdi-comment-outline")])],
        1
      ),
      _vm._v(" "),
      _c("v-icon", { staticClass: "mr-4", attrs: { color: "" } }, [
        _vm._v("mdi-bell-outline")
      ]),
      _vm._v(" "),
      _c(
        "v-menu",
        {
          attrs: {
            bottom: "",
            left: "",
            "offset-y": "",
            transition: "slide-y-transition",
            "mr-3": ""
          },
          scopedSlots: _vm._u([
            {
              key: "activator",
              fn: function(ref) {
                var attrs = ref.attrs
                var on = ref.on
                return [
                  _c(
                    "div",
                    _vm._g({ staticClass: "mr-4" }, on),
                    [
                      _c("v-avatar", { attrs: { size: "36" } }, [
                        _c("img", { attrs: { src: _vm.photo } })
                      ]),
                      _vm._v("\n                Angelbi88\n            ")
                    ],
                    1
                  )
                ]
              }
            }
          ])
        },
        [
          _vm._v(" "),
          _c(
            "v-card",
            [
              _c(
                "v-list",
                { attrs: { dense: "" } },
                [
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-content",
                        [_c("v-list-item-title", [_vm._v("My Profile")])],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    [
                      _c(
                        "v-list-item-content",
                        [_c("v-list-item-title", [_vm._v("LogOut")])],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/themes/v4/assets/img/profile.png":
/*!************************************************************************!*\
  !*** ./resources/js/components/admin/themes/v4/assets/img/profile.png ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/profile.png?011f18e2408de9ba911e9b1515b78528";

/***/ }),

/***/ "./resources/js/components/admin/themes/v4/components/core/AppBar.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/admin/themes/v4/components/core/AppBar.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppBar_vue_vue_type_template_id_70734440___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppBar.vue?vue&type=template&id=70734440& */ "./resources/js/components/admin/themes/v4/components/core/AppBar.vue?vue&type=template&id=70734440&");
/* harmony import */ var _AppBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppBar.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/themes/v4/components/core/AppBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AppBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppBar.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/admin/themes/v4/components/core/AppBar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AppBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppBar_vue_vue_type_template_id_70734440___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppBar_vue_vue_type_template_id_70734440___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/themes/v4/components/core/AppBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/themes/v4/components/core/AppBar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/admin/themes/v4/components/core/AppBar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/themes/v4/components/core/AppBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/themes/v4/components/core/AppBar.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/admin/themes/v4/components/core/AppBar.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader??ref--6-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppBar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/themes/v4/components/core/AppBar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/admin/themes/v4/components/core/AppBar.vue?vue&type=template&id=70734440&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/admin/themes/v4/components/core/AppBar.vue?vue&type=template&id=70734440& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBar_vue_vue_type_template_id_70734440___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppBar.vue?vue&type=template&id=70734440& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/themes/v4/components/core/AppBar.vue?vue&type=template&id=70734440&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBar_vue_vue_type_template_id_70734440___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBar_vue_vue_type_template_id_70734440___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);