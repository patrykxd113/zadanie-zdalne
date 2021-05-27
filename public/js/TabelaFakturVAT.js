(self["webpackChunk"] = self["webpackChunk"] || []).push([["TabelaFakturVAT"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/TabComponents/TabelaFakturVAT.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/TabComponents/TabelaFakturVAT.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  methods: {
    netto: function netto(ilosc, kowta_netto) {
      return ilosc * kowta_netto;
    },
    wartoscBrutto: function wartoscBrutto(ilosc, kowta_netto, vat) {
      return this.netto(ilosc, kowta_netto) * (vat / 100);
    },
    brutto: function brutto(ilosc, kowta_netto, vat) {
      return this.netto(ilosc, kowta_netto) + this.wartoscBrutto(ilosc, kowta_netto, vat);
    },
    markGreen: function markGreen() {
      var tr = document.querySelectorAll('.netto');
      tr.forEach(function (ell) {
        if (ell.innerHTML > 1000) {
          ell.parentElement.style.backgroundColor = 'rgba(0,0,0,0.2)';
        } else if (ell.innerHTML < 1000) {
          ell.parentElement.style.backgroundColor = 'transparent';
        }
      });
    }
  },
  data: function data() {
    return {
      vat: [{
        Lp: 1,
        Opis: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        MPK: 4342,
        Kwota_Netto: 200,
        Ilość: 12,
        VAT: 0
      }, {
        Lp: 2,
        Opis: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        MPK: 6655,
        Kwota_Netto: 300,
        Ilość: 5,
        VAT: 5
      }, {
        Lp: 3,
        Opis: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        MPK: 3212,
        Kwota_Netto: 400,
        Ilość: 4,
        VAT: 8
      }, {
        Lp: 4,
        Opis: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        MPK: 9867,
        Kwota_Netto: 200,
        Ilość: 4,
        VAT: 5
      }, {
        Lp: 5,
        Opis: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        MPK: 5429,
        Kwota_Netto: 100,
        Ilość: 8,
        VAT: 23
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/TabComponents/TabelaFakturVAT.vue?vue&type=style&index=0&id=f7bcf8b8&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/TabComponents/TabelaFakturVAT.vue?vue&type=style&index=0&id=f7bcf8b8&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.over-1000-btn[data-v-f7bcf8b8]:hover{\n  border: 2px solid white;\n  cursor: pointer;\n}\n.over-1000-btn[data-v-f7bcf8b8]{\n  border: 1px solid rgba(255,255,255,0.7);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 200px;\n  padding: 20px 60px;\n  color: white;\n  margin: 40px auto;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/Components/TabComponents/TabelaFakturVAT.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/Components/TabComponents/TabelaFakturVAT.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TabelaFakturVAT_vue_vue_type_template_id_f7bcf8b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TabelaFakturVAT.vue?vue&type=template&id=f7bcf8b8&scoped=true& */ "./resources/js/Components/TabComponents/TabelaFakturVAT.vue?vue&type=template&id=f7bcf8b8&scoped=true&");
/* harmony import */ var _TabelaFakturVAT_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TabelaFakturVAT.vue?vue&type=script&lang=js& */ "./resources/js/Components/TabComponents/TabelaFakturVAT.vue?vue&type=script&lang=js&");
/* harmony import */ var _TabelaFakturVAT_vue_vue_type_style_index_0_id_f7bcf8b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TabelaFakturVAT.vue?vue&type=style&index=0&id=f7bcf8b8&scoped=true&lang=css& */ "./resources/js/Components/TabComponents/TabelaFakturVAT.vue?vue&type=style&index=0&id=f7bcf8b8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _TabelaFakturVAT_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _TabelaFakturVAT_vue_vue_type_template_id_f7bcf8b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _TabelaFakturVAT_vue_vue_type_template_id_f7bcf8b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "f7bcf8b8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/TabComponents/TabelaFakturVAT.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/TabComponents/TabelaFakturVAT.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Components/TabComponents/TabelaFakturVAT.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabelaFakturVAT_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TabelaFakturVAT.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/TabComponents/TabelaFakturVAT.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabelaFakturVAT_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/TabComponents/TabelaFakturVAT.vue?vue&type=template&id=f7bcf8b8&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/Components/TabComponents/TabelaFakturVAT.vue?vue&type=template&id=f7bcf8b8&scoped=true& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabelaFakturVAT_vue_vue_type_template_id_f7bcf8b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabelaFakturVAT_vue_vue_type_template_id_f7bcf8b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabelaFakturVAT_vue_vue_type_template_id_f7bcf8b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TabelaFakturVAT.vue?vue&type=template&id=f7bcf8b8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/TabComponents/TabelaFakturVAT.vue?vue&type=template&id=f7bcf8b8&scoped=true&");


/***/ }),

/***/ "./resources/js/Components/TabComponents/TabelaFakturVAT.vue?vue&type=style&index=0&id=f7bcf8b8&scoped=true&lang=css&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/Components/TabComponents/TabelaFakturVAT.vue?vue&type=style&index=0&id=f7bcf8b8&scoped=true&lang=css& ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TabelaFakturVAT_vue_vue_type_style_index_0_id_f7bcf8b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TabelaFakturVAT.vue?vue&type=style&index=0&id=f7bcf8b8&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/TabComponents/TabelaFakturVAT.vue?vue&type=style&index=0&id=f7bcf8b8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TabelaFakturVAT_vue_vue_type_style_index_0_id_f7bcf8b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TabelaFakturVAT_vue_vue_type_style_index_0_id_f7bcf8b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TabelaFakturVAT_vue_vue_type_style_index_0_id_f7bcf8b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TabelaFakturVAT_vue_vue_type_style_index_0_id_f7bcf8b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/TabComponents/TabelaFakturVAT.vue?vue&type=template&id=f7bcf8b8&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/TabComponents/TabelaFakturVAT.vue?vue&type=template&id=f7bcf8b8&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("section", [
      _c("h1", [_vm._v("vat")]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "tbl-content" }, [
        _c(
          "table",
          { attrs: { cellpadding: "0", cellspacing: "0", border: "0" } },
          [
            _c(
              "tbody",
              _vm._l(_vm.vat, function(v) {
                return _c("tr", { key: v.LP }, [
                  _c("td", [_vm._v(_vm._s(v.Lp))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(v.Opis))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(v.MPK))]),
                  _vm._v(" "),
                  _c("td", { staticClass: "netto" }, [
                    _vm._v(_vm._s(_vm.netto(v.Ilość, v.Kwota_Netto)))
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: v.Ilość,
                          expression: "v.Ilość"
                        }
                      ],
                      attrs: { type: "number" },
                      domProps: { value: v.Ilość },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(v, "Ilość", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: v.VAT,
                            expression: "v.VAT"
                          }
                        ],
                        attrs: { name: "" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              v,
                              "VAT",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c(
                          "option",
                          { attrs: { value: "", selected: "", disabled: "" } },
                          [_vm._v("Vat")]
                        ),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "0" } }, [_vm._v("0%")]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "5" } }, [_vm._v("5%")]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "8" } }, [_vm._v("8%")]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "23" } }, [
                          _vm._v("23%")
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(_vm._s(_vm.brutto(v.Ilość, v.Kwota_Netto, v.VAT)))
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(v.Kwota_Netto))]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      _vm._s(_vm.wartoscBrutto(v.Ilość, v.Kwota_Netto, v.VAT))
                    )
                  ])
                ])
              }),
              0
            )
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "button",
      {
        staticClass: "over-1000-btn",
        on: {
          click: function($event) {
            return _vm.markGreen()
          }
        }
      },
      [_vm._v("Click")]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "tbl-header" }, [
      _c(
        "table",
        { attrs: { cellpadding: "0", cellspacing: "0", border: "0" } },
        [
          _c("thead", [
            _c("tr", [
              _c("th", [_vm._v("Lp")]),
              _vm._v(" "),
              _c("th", [_vm._v("Opis")]),
              _vm._v(" "),
              _c("th", [_vm._v("MPK")]),
              _vm._v(" "),
              _c("th", [_vm._v("Kwota Netto")]),
              _vm._v(" "),
              _c("th", [_vm._v("Ilość")]),
              _vm._v(" "),
              _c("th", [_vm._v("VAT")]),
              _vm._v(" "),
              _c("th", [_vm._v("Kwota_Brutto")]),
              _vm._v(" "),
              _c("th", [_vm._v("Wartość_Netto")]),
              _vm._v(" "),
              _c("th", [_vm._v("Wartość_Brutto")])
            ])
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/TabComponents/TabelaFakturVAT.vue?vue&type=style&index=0&id=f7bcf8b8&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/TabComponents/TabelaFakturVAT.vue?vue&type=style&index=0&id=f7bcf8b8&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TabelaFakturVAT.vue?vue&type=style&index=0&id=f7bcf8b8&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/TabComponents/TabelaFakturVAT.vue?vue&type=style&index=0&id=f7bcf8b8&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("bff26fe8", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);