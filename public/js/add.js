(self["webpackChunk"] = self["webpackChunk"] || []).push([["add"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/TabComponents/AddUser.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/TabComponents/AddUser.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      NIP: null,
      REGON: null,
      NAZWA: null,
      VAT: null,
      ULICA: null,
      NUMER_DOMU: null,
      NUMER_MIESZKANIA: null
    };
  },
  methods: {
    preDef: function preDef(e) {
      e.preventDefault();
    },
    addUser: function addUser() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().post('https://safe-peak-48470.herokuapp.com/api/companies', {
        NIP: this.NIP,
        REGON: this.REGON,
        NAZWA: this.REGON,
        VAT: this.VAT,
        ULICA: this.ULICA,
        NUMER_DOMU: this.NUMER_DOMU,
        NUMER_MIESZKANIA: this.NUMER_MIESZKANIA
      }).then(function (res) {
        console.log(res); // this.$router.push({name:'TabelaKontrahentow'});

        _this.$router.push({
          path: '/TabelaKontrahentow'
        });
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/TabComponents/AddUser.vue?vue&type=style&index=0&id=b4ff3da6&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/TabComponents/AddUser.vue?vue&type=style&index=0&id=b4ff3da6&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Lato:400,500,600,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.form-container[data-v-b4ff3da6]{\r\n  margin-top: 80px;\r\n  border: 1px solid rgba(255,255,255,0.3);\n}\n.form-heder[data-v-b4ff3da6]{\r\n  background-color: rgba(255,255,255,0.3);\r\n  padding: 20px 15px;\r\n  text-align: center;\r\n  font-weight: 500;\r\n  font-size: 12px;\r\n  color: #fff;\r\n  text-transform: uppercase;\n}\nform[data-v-b4ff3da6]{\r\n  display: grid;\r\n  grid-template-columns: repeat(2,1fr);\r\n  grid-template-rows: repeat(4,100px);\r\n  align-items: center;\r\n  justify-items: center;\n}\n.input-with-icon[data-v-b4ff3da6]{\r\n  width: 60%;\r\n  background-color: white;\r\n  padding: 20px 40px;\r\n  border-radius: 35px;\r\n  color: #366E56;\n}\ninput[data-v-b4ff3da6]{\r\n  width: 60%;\r\n  color: #444;\n}\r\n\r\n/* ===================================== */\n.wrapper[data-v-b4ff3da6]{\r\n  display: inline-flex;\r\n  height: 40px;\r\n  width: 60%;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  border-radius: 5px;\n}\n.wrapper .option[data-v-b4ff3da6]{\r\n  background: transparent;\r\n  height: 100%;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  margin: 0 10px;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  padding: 0 10px;\r\n  border: 1px solid white;\r\n  transition: all 0.3s ease;\n}\n.wrapper .option .dot[data-v-b4ff3da6]{\r\n  height: 20px;\r\n  width: 20px;\r\n  background: #d9d9d9;\r\n  border-radius: 50%;\r\n  position: relative;\n}\n.wrapper .option .dot[data-v-b4ff3da6]::before{\r\n  position: absolute;\r\n  content: \"\";\r\n  top: 4px;\r\n  left: 4px;\r\n  width: 12px;\r\n  height: 12px;\r\n  background: #16BA91;\r\n  border-radius: 50%;\r\n  opacity: 0;\r\n  transform: scale(1.5);\r\n  transition: all 0.3s ease;\n}\n.radio[data-v-b4ff3da6]{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 0;\r\n  background-color: transparent;\n}\ninput[type=\"radio\"][data-v-b4ff3da6]{\r\n  display: none;\n}\n#option-1:checked:checked ~ .option-1[data-v-b4ff3da6],\r\n#option-2:checked:checked ~ .option-2[data-v-b4ff3da6]{\r\n  border: 2px solid white;\r\n  background: transparent;\n}\n#option-1:checked:checked ~ .option-1 .dot[data-v-b4ff3da6],\r\n#option-2:checked:checked ~ .option-2 .dot[data-v-b4ff3da6]{\r\n  background: #fff;\n}\n#option-1:checked:checked ~ .option-1 .dot[data-v-b4ff3da6]::before,\r\n#option-2:checked:checked ~ .option-2 .dot[data-v-b4ff3da6]::before{\r\n  opacity: 1;\r\n  transform: scale(1);\n}\n.wrapper .option span[data-v-b4ff3da6]{\r\n  font-size: 20px;\r\n  color: #808080;\n}\n#option-1:checked:checked ~ .option-1 span[data-v-b4ff3da6],\r\n#option-2:checked:checked ~ .option-2 span[data-v-b4ff3da6]{\r\n  color: #fff;\n}\n.edit-user-btn[data-v-b4ff3da6]{\r\n     border: 1px solid rgba(255,255,255,0.7);\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      width: 200px;\r\n      padding: 20px 60px;\r\n      color: white;\r\n      margin: 40px auto;\r\n      background-color: transparent;\r\n      text-decoration: none;\n}\n.edit-user-btn[data-v-b4ff3da6]:hover{\r\n    border: 2px solid white;\r\n    cursor: pointer;\n} \r\n\r\n  \r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/Components/TabComponents/AddUser.vue":
/*!***********************************************************!*\
  !*** ./resources/js/Components/TabComponents/AddUser.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddUser_vue_vue_type_template_id_b4ff3da6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddUser.vue?vue&type=template&id=b4ff3da6&scoped=true& */ "./resources/js/Components/TabComponents/AddUser.vue?vue&type=template&id=b4ff3da6&scoped=true&");
/* harmony import */ var _AddUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddUser.vue?vue&type=script&lang=js& */ "./resources/js/Components/TabComponents/AddUser.vue?vue&type=script&lang=js&");
/* harmony import */ var _AddUser_vue_vue_type_style_index_0_id_b4ff3da6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddUser.vue?vue&type=style&index=0&id=b4ff3da6&scoped=true&lang=css& */ "./resources/js/Components/TabComponents/AddUser.vue?vue&type=style&index=0&id=b4ff3da6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _AddUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AddUser_vue_vue_type_template_id_b4ff3da6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddUser_vue_vue_type_template_id_b4ff3da6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "b4ff3da6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/TabComponents/AddUser.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/TabComponents/AddUser.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/Components/TabComponents/AddUser.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/TabComponents/AddUser.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/TabComponents/AddUser.vue?vue&type=template&id=b4ff3da6&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/Components/TabComponents/AddUser.vue?vue&type=template&id=b4ff3da6&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUser_vue_vue_type_template_id_b4ff3da6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUser_vue_vue_type_template_id_b4ff3da6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUser_vue_vue_type_template_id_b4ff3da6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUser.vue?vue&type=template&id=b4ff3da6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/TabComponents/AddUser.vue?vue&type=template&id=b4ff3da6&scoped=true&");


/***/ }),

/***/ "./resources/js/Components/TabComponents/AddUser.vue?vue&type=style&index=0&id=b4ff3da6&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/Components/TabComponents/AddUser.vue?vue&type=style&index=0&id=b4ff3da6&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUser_vue_vue_type_style_index_0_id_b4ff3da6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUser.vue?vue&type=style&index=0&id=b4ff3da6&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/TabComponents/AddUser.vue?vue&type=style&index=0&id=b4ff3da6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUser_vue_vue_type_style_index_0_id_b4ff3da6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUser_vue_vue_type_style_index_0_id_b4ff3da6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUser_vue_vue_type_style_index_0_id_b4ff3da6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUser_vue_vue_type_style_index_0_id_b4ff3da6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/TabComponents/AddUser.vue?vue&type=template&id=b4ff3da6&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/TabComponents/AddUser.vue?vue&type=template&id=b4ff3da6&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "form-container" }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "form",
      {
        attrs: { action: "" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.preDef($event)
          }
        }
      },
      [
        _c("div", { staticClass: "input-with-icon" }, [
          _c("i", { staticClass: "fas fa-home" }),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.NIP,
                expression: "NIP"
              }
            ],
            attrs: { type: "text", name: "NIP", placeholder: "NIP" },
            domProps: { value: _vm.NIP },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.NIP = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "input-with-icon" }, [
          _c("i", { staticClass: "fas fa-home" }),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.REGON,
                expression: "REGON"
              }
            ],
            attrs: { type: "text", name: "REGON", placeholder: "REGON" },
            domProps: { value: _vm.REGON },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.REGON = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "input-with-icon" }, [
          _c("i", { staticClass: "fas fa-home" }),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.NAZWA,
                expression: "NAZWA"
              }
            ],
            attrs: { type: "text", name: "NAZWA", placeholder: "NAZWA" },
            domProps: { value: _vm.NAZWA },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.NAZWA = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "input-with-icon" }, [
          _c("i", { staticClass: "fas fa-home" }),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.ULICA,
                expression: "ULICA"
              }
            ],
            attrs: { type: "text", name: "ULICA", placeholder: "ULICA" },
            domProps: { value: _vm.ULICA },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.ULICA = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "input-with-icon" }, [
          _c("i", { staticClass: "fas fa-home" }),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.NUMER_DOMU,
                expression: "NUMER_DOMU"
              }
            ],
            attrs: {
              type: "text",
              name: "NUMER_DOMU",
              placeholder: "NUMER DOMU"
            },
            domProps: { value: _vm.NUMER_DOMU },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.NUMER_DOMU = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "input-with-icon" }, [
          _c("i", { staticClass: "fas fa-home" }),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.NUMER_MIESZKANIA,
                expression: "NUMER_MIESZKANIA"
              }
            ],
            attrs: {
              type: "text",
              name: "NUMER_MIESZKANIA",
              placeholder: "NUMER MIESZKANIA"
            },
            domProps: { value: _vm.NUMER_MIESZKANIA },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.NUMER_MIESZKANIA = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "input-with-icon radio" }, [
          _c("div", { staticClass: "wrapper" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.VAT,
                  expression: "VAT"
                }
              ],
              attrs: { type: "radio", name: "VAT", value: "1", id: "option-1" },
              domProps: { checked: _vm._q(_vm.VAT, "1") },
              on: {
                change: function($event) {
                  _vm.VAT = "1"
                }
              }
            }),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.VAT,
                  expression: "VAT"
                }
              ],
              attrs: { type: "radio", name: "VAT", value: "0", id: "option-2" },
              domProps: { checked: _vm._q(_vm.VAT, "0") },
              on: {
                change: function($event) {
                  _vm.VAT = "0"
                }
              }
            }),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _vm._m(2)
          ])
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "edit-user-btn",
            attrs: { type: "submit" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.preDef($event)
              },
              click: function($event) {
                return _vm.addUser()
              }
            }
          },
          [_vm._v("Submit")]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-heder" }, [
      _c("h3", [_vm._v("Add User")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "option option-1", attrs: { for: "option-1" } },
      [
        _c("div", { staticClass: "dot" }),
        _vm._v(" "),
        _c("span", [_vm._v("Płacę")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "option option-2", attrs: { for: "option-2" } },
      [
        _c("div", { staticClass: "dot" }),
        _vm._v(" "),
        _c("span", [_vm._v("Nie")])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/TabComponents/AddUser.vue?vue&type=style&index=0&id=b4ff3da6&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/TabComponents/AddUser.vue?vue&type=style&index=0&id=b4ff3da6&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUser.vue?vue&type=style&index=0&id=b4ff3da6&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/TabComponents/AddUser.vue?vue&type=style&index=0&id=b4ff3da6&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("385adcec", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);