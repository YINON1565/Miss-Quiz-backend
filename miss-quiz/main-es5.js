function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_test_page_test_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/test-page/test-page.component */
    "./src/app/pages/test-page/test-page.component.ts");
    /* harmony import */


    var _pages_test_details_test_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/test-details/test-details.component */
    "./src/app/pages/test-details/test-details.component.ts");
    /* harmony import */


    var _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/user-page/user-page.component */
    "./src/app/pages/user-page/user-page.component.ts");
    /* harmony import */


    var _pages_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/user-details/user-details.component */
    "./src/app/pages/user-details/user-details.component.ts");
    /* harmony import */


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/login/login.component */
    "./src/app/pages/login/login.component.ts");
    /* harmony import */


    var _guards_loggedin_user_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./guards/loggedin-user.guard */
    "./src/app/guards/loggedin-user.guard.ts");

    var routes = [{
      path: 'test',
      component: _pages_test_page_test_page_component__WEBPACK_IMPORTED_MODULE_2__["TestPageComponent"],
      canActivate: [_guards_loggedin_user_guard__WEBPACK_IMPORTED_MODULE_7__["LoggedinUserGuard"]]
    }, {
      path: 'test/:id',
      component: _pages_test_details_test_details_component__WEBPACK_IMPORTED_MODULE_3__["TestDetailsComponent"],
      canActivate: [_guards_loggedin_user_guard__WEBPACK_IMPORTED_MODULE_7__["LoggedinUserGuard"]]
    }, {
      path: 'user',
      component: _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_4__["UserPageComponent"],
      canActivate: [_guards_loggedin_user_guard__WEBPACK_IMPORTED_MODULE_7__["LoggedinUserGuard"]]
    }, {
      path: 'user/:id',
      component: _pages_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_5__["UserDetailsComponent"],
      canActivate: [_guards_loggedin_user_guard__WEBPACK_IMPORTED_MODULE_7__["LoggedinUserGuard"]]
    }, {
      path: 'login',
      component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    }, {
      path: '',
      redirectTo: '/test',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/main-header/main-header.component */
    "./src/app/components/main-header/main-header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "main-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_components_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_1__["MainHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _pages_test_page_test_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/test-page/test-page.component */
    "./src/app/pages/test-page/test-page.component.ts");
    /* harmony import */


    var _components_test_list_test_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/test-list/test-list.component */
    "./src/app/components/test-list/test-list.component.ts");
    /* harmony import */


    var _components_test_preview_test_preview_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/test-preview/test-preview.component */
    "./src/app/components/test-preview/test-preview.component.ts");
    /* harmony import */


    var _pages_test_details_test_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pages/test-details/test-details.component */
    "./src/app/pages/test-details/test-details.component.ts");
    /* harmony import */


    var _pages_test_edit_test_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./pages/test-edit/test-edit.component */
    "./src/app/pages/test-edit/test-edit.component.ts");
    /* harmony import */


    var _components_question_list_question_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/question-list/question-list.component */
    "./src/app/components/question-list/question-list.component.ts");
    /* harmony import */


    var _components_question_preview_question_preview_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/question-preview/question-preview.component */
    "./src/app/components/question-preview/question-preview.component.ts");
    /* harmony import */


    var _components_answer_list_answer_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/answer-list/answer-list.component */
    "./src/app/components/answer-list/answer-list.component.ts");
    /* harmony import */


    var _components_answer_preview_answer_preview_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/answer-preview/answer-preview.component */
    "./src/app/components/answer-preview/answer-preview.component.ts");
    /* harmony import */


    var _components_helpers_my_checkbox_my_checkbox_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/helpers/my-checkbox/my-checkbox.component */
    "./src/app/components/helpers/my-checkbox/my-checkbox.component.ts");
    /* harmony import */


    var _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/timer/timer.component */
    "./src/app/components/timer/timer.component.ts");
    /* harmony import */


    var _services_test_test_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./services/test/test.service */
    "./src/app/services/test/test.service.ts");
    /* harmony import */


    var _services_util_util_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./services/util/util.service */
    "./src/app/services/util/util.service.ts");
    /* harmony import */


    var _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/main-nav/main-nav.component */
    "./src/app/components/main-nav/main-nav.component.ts");
    /* harmony import */


    var _components_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/main-header/main-header.component */
    "./src/app/components/main-header/main-header.component.ts");
    /* harmony import */


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./pages/login/login.component */
    "./src/app/pages/login/login.component.ts");
    /* harmony import */


    var _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./pages/user-page/user-page.component */
    "./src/app/pages/user-page/user-page.component.ts");
    /* harmony import */


    var _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/user-list/user-list.component */
    "./src/app/components/user-list/user-list.component.ts");
    /* harmony import */


    var _components_user_preview_user_preview_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./components/user-preview/user-preview.component */
    "./src/app/components/user-preview/user-preview.component.ts");
    /* harmony import */


    var _pages_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./pages/user-details/user-details.component */
    "./src/app/pages/user-details/user-details.component.ts"); // GENERAL
    // <-- NgModel lives here
    // MATERIALS
    //APP
    //COMPONENTS
    // HELPERS
    //SERVICES


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_test_test_service__WEBPACK_IMPORTED_MODULE_27__["TestService"], _services_util_util_service__WEBPACK_IMPORTED_MODULE_28__["UtilService"]],
      imports: [[// GENERAL
      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], //MATETIALS
      _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [//APP
        _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"], //COMPONENTS
        _pages_test_page_test_page_component__WEBPACK_IMPORTED_MODULE_16__["TestPageComponent"], _components_test_list_test_list_component__WEBPACK_IMPORTED_MODULE_17__["TestListComponent"], _components_test_preview_test_preview_component__WEBPACK_IMPORTED_MODULE_18__["TestPreviewComponent"], _pages_test_details_test_details_component__WEBPACK_IMPORTED_MODULE_19__["TestDetailsComponent"], _pages_test_edit_test_edit_component__WEBPACK_IMPORTED_MODULE_20__["TestEditComponent"], _components_question_list_question_list_component__WEBPACK_IMPORTED_MODULE_21__["QuestionListComponent"], _components_question_preview_question_preview_component__WEBPACK_IMPORTED_MODULE_22__["QuestionPreviewComponent"], _components_answer_list_answer_list_component__WEBPACK_IMPORTED_MODULE_23__["AnswerListComponent"], _components_answer_preview_answer_preview_component__WEBPACK_IMPORTED_MODULE_24__["AnswerPreviewComponent"], _components_helpers_my_checkbox_my_checkbox_component__WEBPACK_IMPORTED_MODULE_25__["MyCheckboxComponent"], _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_26__["TimerComponent"], _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_29__["MainNavComponent"], _components_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_30__["MainHeaderComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_31__["LoginComponent"], _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_32__["UserPageComponent"], _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_33__["UserListComponent"], _components_user_preview_user_preview_component__WEBPACK_IMPORTED_MODULE_34__["UserPreviewComponent"], _pages_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_35__["UserDetailsComponent"]],
        imports: [// GENERAL
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], //MATETIALS
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [//APP
          _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"], //COMPONENTS
          _pages_test_page_test_page_component__WEBPACK_IMPORTED_MODULE_16__["TestPageComponent"], _components_test_list_test_list_component__WEBPACK_IMPORTED_MODULE_17__["TestListComponent"], _components_test_preview_test_preview_component__WEBPACK_IMPORTED_MODULE_18__["TestPreviewComponent"], _pages_test_details_test_details_component__WEBPACK_IMPORTED_MODULE_19__["TestDetailsComponent"], _pages_test_edit_test_edit_component__WEBPACK_IMPORTED_MODULE_20__["TestEditComponent"], _components_question_list_question_list_component__WEBPACK_IMPORTED_MODULE_21__["QuestionListComponent"], _components_question_preview_question_preview_component__WEBPACK_IMPORTED_MODULE_22__["QuestionPreviewComponent"], _components_answer_list_answer_list_component__WEBPACK_IMPORTED_MODULE_23__["AnswerListComponent"], _components_answer_preview_answer_preview_component__WEBPACK_IMPORTED_MODULE_24__["AnswerPreviewComponent"], _components_helpers_my_checkbox_my_checkbox_component__WEBPACK_IMPORTED_MODULE_25__["MyCheckboxComponent"], _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_26__["TimerComponent"], _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_29__["MainNavComponent"], _components_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_30__["MainHeaderComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_31__["LoginComponent"], _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_32__["UserPageComponent"], _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_33__["UserListComponent"], _components_user_preview_user_preview_component__WEBPACK_IMPORTED_MODULE_34__["UserPreviewComponent"], _pages_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_35__["UserDetailsComponent"]],
          imports: [// GENERAL
          _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], //MATETIALS
          _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"]],
          //SERVICES
          providers: [_services_test_test_service__WEBPACK_IMPORTED_MODULE_27__["TestService"], _services_util_util_service__WEBPACK_IMPORTED_MODULE_28__["UtilService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/answer-list/answer-list.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/answer-list/answer-list.component.ts ***!
    \*****************************************************************/

  /*! exports provided: AnswerListComponent */

  /***/
  function srcAppComponentsAnswerListAnswerListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnswerListComponent", function () {
      return AnswerListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _answer_preview_answer_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../answer-preview/answer-preview.component */
    "./src/app/components/answer-preview/answer-preview.component.ts");

    function AnswerListComponent_answer_preview_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "answer-preview", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnswerListComponent_answer_preview_0_Template_answer_preview_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var idx_r2 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.onCheackedAnswer(idx_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var answer_r1 = ctx.$implicit;
        var idx_r2 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("answer", answer_r1)("idx", idx_r2)("answeredIdx", ctx_r0.answeredIdx)("idDisabled", !ctx_r0.timeLeft);
      }
    }

    var AnswerListComponent = /*#__PURE__*/function () {
      function AnswerListComponent() {
        _classCallCheck(this, AnswerListComponent);

        this.cheackedAnswer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(AnswerListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onCheackedAnswer",
        value: function onCheackedAnswer(idx) {
          this.timeLeft ? this.cheackedAnswer.emit(idx) : '';
        }
      }]);

      return AnswerListComponent;
    }();

    AnswerListComponent.ɵfac = function AnswerListComponent_Factory(t) {
      return new (t || AnswerListComponent)();
    };

    AnswerListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AnswerListComponent,
      selectors: [["answer-list"]],
      inputs: {
        answers: "answers",
        answeredIdx: "answeredIdx",
        timeLeft: "timeLeft"
      },
      outputs: {
        cheackedAnswer: "cheackedAnswer"
      },
      decls: 1,
      vars: 1,
      consts: [[3, "answer", "idx", "answeredIdx", "idDisabled", "click", 4, "ngFor", "ngForOf"], [3, "answer", "idx", "answeredIdx", "idDisabled", "click"]],
      template: function AnswerListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AnswerListComponent_answer_preview_0_Template, 1, 4, "answer-preview", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.answers);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _answer_preview_answer_preview_component__WEBPACK_IMPORTED_MODULE_2__["AnswerPreviewComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5zd2VyLWxpc3QvYW5zd2VyLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnswerListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'answer-list',
          templateUrl: './answer-list.component.html',
          styleUrls: ['./answer-list.component.scss']
        }]
      }], function () {
        return [];
      }, {
        answers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        answeredIdx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        timeLeft: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cheackedAnswer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/answer-preview/answer-preview.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/answer-preview/answer-preview.component.ts ***!
    \***********************************************************************/

  /*! exports provided: AnswerPreviewComponent */

  /***/
  function srcAppComponentsAnswerPreviewAnswerPreviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnswerPreviewComponent", function () {
      return AnswerPreviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _helpers_my_checkbox_my_checkbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../helpers/my-checkbox/my-checkbox.component */
    "./src/app/components/helpers/my-checkbox/my-checkbox.component.ts");

    var _c0 = function _c0(a0, a1, a2) {
      return {
        disable: a0,
        answered: a1,
        "correct-answer": a2
      };
    };

    var AnswerPreviewComponent = /*#__PURE__*/function () {
      function AnswerPreviewComponent() {
        _classCallCheck(this, AnswerPreviewComponent);
      }

      _createClass(AnswerPreviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "isDisable",
        get: function get() {
          return (this.answeredIdx || this.answeredIdx === 0) && this.answeredIdx !== this.idx;
        }
      }]);

      return AnswerPreviewComponent;
    }();

    AnswerPreviewComponent.ɵfac = function AnswerPreviewComponent_Factory(t) {
      return new (t || AnswerPreviewComponent)();
    };

    AnswerPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AnswerPreviewComponent,
      selectors: [["answer-preview"]],
      inputs: {
        answer: "answer",
        idx: "idx",
        idDisabled: "idDisabled",
        answeredIdx: "answeredIdx"
      },
      decls: 5,
      vars: 9,
      consts: [[1, "flex", "a-center", 3, "ngClass"], [1, "m-i-start-1ch", "m-i-end-1ch", 3, "value", "idDisabled"]],
      template: function AnswerPreviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "my-checkbox", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](5, _c0, ctx.isDisable, ctx.answeredIdx === ctx.idx, ctx.answer.isCorrect));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.idx + 1, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", (ctx.answeredIdx || ctx.answeredIdx === 0) && ctx.answeredIdx === ctx.idx)("idDisabled", ctx.idDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.answer.answerContent, "\n");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _helpers_my_checkbox_my_checkbox_component__WEBPACK_IMPORTED_MODULE_2__["MyCheckboxComponent"]],
      styles: [".disable[_ngcontent-%COMP%] {\n  background-color: red;\n}\n\n.answered[_ngcontent-%COMP%] {\n  background-color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbnN3ZXItcHJldmlldy9DOlxcc2l0ZS1wcm9qXFxfQW5ndWxhclxcTWlzcy1RdWl6XFxxdWl6LWZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxhbnN3ZXItcHJldmlld1xcYW5zd2VyLXByZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYW5zd2VyLXByZXZpZXcvYW5zd2VyLXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxxQkFBQTtBQ0hKOztBRE1BO0VBQ0ksc0JBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5zd2VyLXByZXZpZXcvYW5zd2VyLXByZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29ycmVjdC1hbnN3ZXIge1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5kaXNhYmxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmFuc3dlcmVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn0iLCIuZGlzYWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmFuc3dlcmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnswerPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'answer-preview',
          templateUrl: './answer-preview.component.html',
          styleUrls: ['./answer-preview.component.scss']
        }]
      }], function () {
        return [];
      }, {
        answer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        idx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        idDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        answeredIdx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/helpers/my-checkbox/my-checkbox.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/helpers/my-checkbox/my-checkbox.component.ts ***!
    \*************************************************************************/

  /*! exports provided: MyCheckboxComponent */

  /***/
  function srcAppComponentsHelpersMyCheckboxMyCheckboxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyCheckboxComponent", function () {
      return MyCheckboxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "disable": a0
      };
    };

    var MyCheckboxComponent = /*#__PURE__*/function () {
      function MyCheckboxComponent() {
        _classCallCheck(this, MyCheckboxComponent);

        this.idDisabled = false;
      }

      _createClass(MyCheckboxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MyCheckboxComponent;
    }();

    MyCheckboxComponent.ɵfac = function MyCheckboxComponent_Factory(t) {
      return new (t || MyCheckboxComponent)();
    };

    MyCheckboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyCheckboxComponent,
      selectors: [["my-checkbox"]],
      inputs: {
        value: "value",
        idDisabled: "idDisabled"
      },
      decls: 4,
      vars: 5,
      consts: [[1, "checkbox", "path"], ["type", "checkbox", "value", "value", 3, "ngModel", "disabled", "ngClass", "ngModelChange"], ["viewBox", "0 0 21 21"], ["d", "M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"]],
      template: function MyCheckboxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyCheckboxComponent_Template_input_ngModelChange_1_listener($event) {
            return ctx.value = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value)("disabled", ctx.idDisabled)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.idDisabled));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: [".checkbox[_ngcontent-%COMP%] {\n  --background: #fff;\n  --border: #d1d6ee;\n  --border-hover: #bbc1e1;\n  --border-active: #1e2235;\n  --tick: #fff;\n  position: relative;\n}\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .checkbox[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n}\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  position: relative;\n  outline: none;\n  background: var(--background);\n  border: none;\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: box-shadow 0.3s;\n  box-shadow: inset 0 0 0 var(--s, 1px) var(--b, var(--border));\n}\n.checkbox[_ngcontent-%COMP%]   input.disable[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n}\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(.disable):hover {\n  --s: 2px;\n  --b: var(--border-hover);\n}\n.checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(.disable):checked {\n  --b: var(--border-active);\n}\n.checkbox[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  pointer-events: none;\n  fill: none;\n  stroke-width: 2px;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke: var(--stroke, var(--border-active));\n  position: absolute;\n  left: 0;\n  width: auto;\n  height: auto;\n  transform: scale(var(--scale, 1)) translateZ(0);\n}\n.checkbox.path[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked {\n  --s: 2px;\n  transition-delay: 0.4s;\n}\n.checkbox.path[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + svg[_ngcontent-%COMP%] {\n  --a: 16.1 86.12;\n  --o: 102.22;\n}\n.checkbox.path[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  stroke-dasharray: var(--a, 86.12);\n  stroke-dashoffset: var(--o, 86.12);\n  transition: stroke-dasharray 0.6s, stroke-dashoffset 0.6s;\n}\n.checkbox.bounce[_ngcontent-%COMP%] {\n  --stroke: var(--tick);\n}\n.checkbox.bounce[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked {\n  --s: 11px;\n}\n.checkbox.bounce[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + svg[_ngcontent-%COMP%] {\n  -webkit-animation: bounce 0.4s linear forwards 0.2s;\n          animation: bounce 0.4s linear forwards 0.2s;\n}\n.checkbox.bounce[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  --scale: 0;\n}\n@-webkit-keyframes bounce {\n  50% {\n    transform: scale(1.2);\n  }\n  75% {\n    transform: scale(0.9);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes bounce {\n  50% {\n    transform: scale(1.2);\n  }\n  75% {\n    transform: scale(0.9);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWxwZXJzL215LWNoZWNrYm94L0M6XFxzaXRlLXByb2pcXF9Bbmd1bGFyXFxNaXNzLVF1aXpcXHF1aXotZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhlbHBlcnNcXG15LWNoZWNrYm94XFxteS1jaGVja2JveC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWxwZXJzL215LWNoZWNrYm94L215LWNoZWNrYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNBRjtBRENFOztFQUVFLFdBVE87RUFVUCxZQVZPO0FDV1g7QURFRTtFQUNFLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFJQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkRBQUE7QUNISjtBREZJO0VBQ0UsbUJBQUE7QUNJTjtBREVNO0VBQ0UsUUFBQTtFQUNBLHdCQUFBO0FDQVI7QURFTTtFQUNFLHlCQUFBO0FDQVI7QURJRTtFQUNFLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFFQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtBQ0hKO0FET007RUFDRSxRQUFBO0VBQ0Esc0JBQUE7QUNMUjtBRE1RO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNKVjtBRFFJO0VBQ0UsaUNBQUE7RUFDQSxrQ0FBQTtFQUNBLHlEQUFBO0FDTk47QURTRTtFQUNFLHFCQUFBO0FDUEo7QURTTTtFQUNFLFNBQUE7QUNQUjtBRFFRO0VBQ0UsbURBQUE7VUFBQSwyQ0FBQTtBQ05WO0FEVUk7RUFDRSxVQUFBO0FDUk47QURhQTtFQUNFO0lBQ0UscUJBQUE7RUNWRjtFRFlBO0lBQ0UscUJBQUE7RUNWRjtFRFlBO0lBQ0UsbUJBQUE7RUNWRjtBQUNGO0FEQ0E7RUFDRTtJQUNFLHFCQUFBO0VDVkY7RURZQTtJQUNFLHFCQUFBO0VDVkY7RURZQTtJQUNFLG1CQUFBO0VDVkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVscGVycy9teS1jaGVja2JveC9teS1jaGVja2JveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVja2JveCB7XHJcbiAgICAkYmFzZTogMjVweDtcclxuICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgLS1ib3JkZXI6ICNkMWQ2ZWU7XHJcbiAgLS1ib3JkZXItaG92ZXI6ICNiYmMxZTE7XHJcbiAgLS1ib3JkZXItYWN0aXZlOiAjMWUyMjM1O1xyXG4gIC0tdGljazogI2ZmZjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaW5wdXQsXHJcbiAgc3ZnIHtcclxuICAgIHdpZHRoOiAkYmFzZTtcclxuICAgIGhlaWdodDogJGJhc2U7XHJcbiAgICAvLyBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgaW5wdXQge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICYuZGlzYWJsZSB7XHJcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICB9XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3M7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCB2YXIoLS1zLCAxcHgpIHZhcigtLWIsIHZhcigtLWJvcmRlcikpO1xyXG4gICAgJjpub3QoLmRpc2FibGUpIHtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgLS1zOiAycHg7XHJcbiAgICAgICAgLS1iOiB2YXIoLS1ib3JkZXItaG92ZXIpO1xyXG4gICAgICB9XHJcbiAgICAgICY6Y2hlY2tlZCB7XHJcbiAgICAgICAgLS1iOiB2YXIoLS1ib3JkZXItYWN0aXZlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBzdmcge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBmaWxsOiBub25lO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAycHg7XHJcbiAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XHJcbiAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xyXG4gICAgc3Ryb2tlOiB2YXIoLS1zdHJva2UsIHZhcigtLWJvcmRlci1hY3RpdmUpKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHRyYW5zZm9ybTogc2NhbGUodmFyKC0tc2NhbGUsIDEpKSB0cmFuc2xhdGVaKDApO1xyXG4gIH1cclxuICAmLnBhdGgge1xyXG4gICAgaW5wdXQge1xyXG4gICAgICAmOmNoZWNrZWQge1xyXG4gICAgICAgIC0tczogMnB4O1xyXG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgICAgICAgJiArIHN2ZyB7XHJcbiAgICAgICAgICAtLWE6IDE2LjEgODYuMTI7XHJcbiAgICAgICAgICAtLW86IDEwMi4yMjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHN2ZyB7XHJcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IHZhcigtLWEsIDg2LjEyKTtcclxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IHZhcigtLW8sIDg2LjEyKTtcclxuICAgICAgdHJhbnNpdGlvbjogc3Ryb2tlLWRhc2hhcnJheSAwLjZzLCBzdHJva2UtZGFzaG9mZnNldCAwLjZzO1xyXG4gICAgfVxyXG4gIH1cclxuICAmLmJvdW5jZSB7XHJcbiAgICAtLXN0cm9rZTogdmFyKC0tdGljayk7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICY6Y2hlY2tlZCB7XHJcbiAgICAgICAgLS1zOiAxMXB4O1xyXG4gICAgICAgICYgKyBzdmcge1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBib3VuY2UgMC40cyBsaW5lYXIgZm9yd2FyZHMgMC4ycztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHN2ZyB7XHJcbiAgICAgIC0tc2NhbGU6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICB9XHJcbiAgNzUlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxufSIsIi5jaGVja2JveCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgLS1ib3JkZXI6ICNkMWQ2ZWU7XG4gIC0tYm9yZGVyLWhvdmVyOiAjYmJjMWUxO1xuICAtLWJvcmRlci1hY3RpdmU6ICMxZTIyMzU7XG4gIC0tdGljazogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNoZWNrYm94IGlucHV0LFxuLmNoZWNrYm94IHN2ZyB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG4uY2hlY2tib3ggaW5wdXQge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3M7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIHZhcigtLXMsIDFweCkgdmFyKC0tYiwgdmFyKC0tYm9yZGVyKSk7XG59XG4uY2hlY2tib3ggaW5wdXQuZGlzYWJsZSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uY2hlY2tib3ggaW5wdXQ6bm90KC5kaXNhYmxlKTpob3ZlciB7XG4gIC0tczogMnB4O1xuICAtLWI6IHZhcigtLWJvcmRlci1ob3Zlcik7XG59XG4uY2hlY2tib3ggaW5wdXQ6bm90KC5kaXNhYmxlKTpjaGVja2VkIHtcbiAgLS1iOiB2YXIoLS1ib3JkZXItYWN0aXZlKTtcbn1cbi5jaGVja2JveCBzdmcge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlLXdpZHRoOiAycHg7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgc3Ryb2tlOiB2YXIoLS1zdHJva2UsIHZhcigtLWJvcmRlci1hY3RpdmUpKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICB0cmFuc2Zvcm06IHNjYWxlKHZhcigtLXNjYWxlLCAxKSkgdHJhbnNsYXRlWigwKTtcbn1cbi5jaGVja2JveC5wYXRoIGlucHV0OmNoZWNrZWQge1xuICAtLXM6IDJweDtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC40cztcbn1cbi5jaGVja2JveC5wYXRoIGlucHV0OmNoZWNrZWQgKyBzdmcge1xuICAtLWE6IDE2LjEgODYuMTI7XG4gIC0tbzogMTAyLjIyO1xufVxuLmNoZWNrYm94LnBhdGggc3ZnIHtcbiAgc3Ryb2tlLWRhc2hhcnJheTogdmFyKC0tYSwgODYuMTIpO1xuICBzdHJva2UtZGFzaG9mZnNldDogdmFyKC0tbywgODYuMTIpO1xuICB0cmFuc2l0aW9uOiBzdHJva2UtZGFzaGFycmF5IDAuNnMsIHN0cm9rZS1kYXNob2Zmc2V0IDAuNnM7XG59XG4uY2hlY2tib3guYm91bmNlIHtcbiAgLS1zdHJva2U6IHZhcigtLXRpY2spO1xufVxuLmNoZWNrYm94LmJvdW5jZSBpbnB1dDpjaGVja2VkIHtcbiAgLS1zOiAxMXB4O1xufVxuLmNoZWNrYm94LmJvdW5jZSBpbnB1dDpjaGVja2VkICsgc3ZnIHtcbiAgYW5pbWF0aW9uOiBib3VuY2UgMC40cyBsaW5lYXIgZm9yd2FyZHMgMC4ycztcbn1cbi5jaGVja2JveC5ib3VuY2Ugc3ZnIHtcbiAgLS1zY2FsZTogMDtcbn1cblxuQGtleWZyYW1lcyBib3VuY2Uge1xuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgfVxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyCheckboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'my-checkbox',
          templateUrl: './my-checkbox.component.html',
          styleUrls: ['./my-checkbox.component.scss']
        }]
      }], function () {
        return [];
      }, {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        idDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/main-header/main-header.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/main-header/main-header.component.ts ***!
    \*****************************************************************/

  /*! exports provided: MainHeaderComponent */

  /***/
  function srcAppComponentsMainHeaderMainHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainHeaderComponent", function () {
      return MainHeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../main-nav/main-nav.component */
    "./src/app/components/main-nav/main-nav.component.ts");

    var MainHeaderComponent = /*#__PURE__*/function () {
      function MainHeaderComponent() {
        _classCallCheck(this, MainHeaderComponent);
      }

      _createClass(MainHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainHeaderComponent;
    }();

    MainHeaderComponent.ɵfac = function MainHeaderComponent_Factory(t) {
      return new (t || MainHeaderComponent)();
    };

    MainHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainHeaderComponent,
      selectors: [["main-header"]],
      decls: 2,
      vars: 0,
      consts: [[1, "main-header"]],
      template: function MainHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "main-nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_1__["MainNavComponent"]],
      styles: [".mat-badge-content[_ngcontent-%COMP%]{font-weight:600;font-size:12px;font-family:Roboto, \"Helvetica Neue\", sans-serif}\n.mat-badge-small[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{font-size:9px}\n.mat-badge-large[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{font-size:24px}\n.mat-h1[_ngcontent-%COMP%], .mat-headline[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font:400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 16px}\n.mat-h2[_ngcontent-%COMP%], .mat-title[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font:500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 16px}\n.mat-h3[_ngcontent-%COMP%], .mat-subheading-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font:400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 16px}\n.mat-h4[_ngcontent-%COMP%], .mat-subheading-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font:400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 16px}\n.mat-h5[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font:400 calc(14px * 0.83)/20px Roboto, \"Helvetica Neue\", sans-serif;margin:0 0 12px}\n.mat-h6[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font:400 calc(14px * 0.67)/20px Roboto, \"Helvetica Neue\", sans-serif;margin:0 0 12px}\n.mat-body-strong[_ngcontent-%COMP%], .mat-body-2[_ngcontent-%COMP%]{font:500 14px/24px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}\n.mat-body[_ngcontent-%COMP%], .mat-body-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]{font:400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}\n.mat-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-body-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 12px}\n.mat-small[_ngcontent-%COMP%], .mat-caption[_ngcontent-%COMP%]{font:400 12px/20px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}\n.mat-display-4[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-4[_ngcontent-%COMP%]{font:300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:-0.05em;margin:0 0 56px}\n.mat-display-3[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-3[_ngcontent-%COMP%]{font:400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:-0.02em;margin:0 0 64px}\n.mat-display-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-2[_ngcontent-%COMP%]{font:400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:-0.005em;margin:0 0 64px}\n.mat-display-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-1[_ngcontent-%COMP%]{font:400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 64px}\n.mat-bottom-sheet-container[_ngcontent-%COMP%]{font:400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}\n.mat-button[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%], .mat-flat-button[_ngcontent-%COMP%], .mat-fab[_ngcontent-%COMP%], .mat-mini-fab[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px;font-weight:500}\n.mat-button-toggle[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\n.mat-card[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\n.mat-card-title[_ngcontent-%COMP%]{font-size:24px;font-weight:500}\n.mat-card-header[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{font-size:20px}\n.mat-card-subtitle[_ngcontent-%COMP%], .mat-card-content[_ngcontent-%COMP%]{font-size:14px}\n.mat-checkbox[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\n.mat-checkbox-layout[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%]{line-height:24px}\n.mat-chip[_ngcontent-%COMP%]{font-size:14px;font-weight:500}\n.mat-chip[_ngcontent-%COMP%]   .mat-chip-trailing-icon.mat-icon[_ngcontent-%COMP%], .mat-chip[_ngcontent-%COMP%]   .mat-chip-remove.mat-icon[_ngcontent-%COMP%]{font-size:18px}\n.mat-table[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\n.mat-header-cell[_ngcontent-%COMP%]{font-size:12px;font-weight:500}\n.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%]{font-size:14px}\n.mat-calendar[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\n.mat-calendar-body[_ngcontent-%COMP%]{font-size:13px}\n.mat-calendar-body-label[_ngcontent-%COMP%], .mat-calendar-period-button[_ngcontent-%COMP%]{font-size:14px;font-weight:500}\n.mat-calendar-table-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:11px;font-weight:400}\n.mat-dialog-title[_ngcontent-%COMP%]{font:500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}\n.mat-expansion-panel-header[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:15px;font-weight:400}\n.mat-expansion-panel-content[_ngcontent-%COMP%]{font:400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}\n.mat-form-field[_ngcontent-%COMP%]{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}\n.mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.34375em}\n.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:150%;line-height:1.125}\n.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]{height:1.5em;width:1.5em}\n.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{height:1.125em;line-height:1.125}\n.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid transparent}\n.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.34375em) scale(0.75);width:133.3333333333%}\n.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.34374em) scale(0.75);width:133.3333433333%}\n.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-0.84375em;padding-top:.84375em}\n.mat-form-field-label[_ngcontent-%COMP%]{top:1.34375em}\n.mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.34375em}\n.mat-form-field-subscript-wrapper[_ngcontent-%COMP%]{font-size:75%;margin-top:.6666666667em;top:calc(100% - 1.7916666667em)}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}\n.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);-ms-transform:translateY(-1.28125em) scale(0.75);width:133.3333333333%}\n.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-form-field-autofill-control[_ngcontent-%COMP%]:-webkit-autofill + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);-ms-transform:translateY(-1.28124em) scale(0.75);width:133.3333433333%}\n.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);-ms-transform:translateY(-1.28123em) scale(0.75);width:133.3333533333%}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.28125em}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-subscript-wrapper[_ngcontent-%COMP%]{margin-top:.5416666667em;top:calc(100% - 1.6666666667em)}\n@media print{.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28122em) scale(0.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-form-field-autofill-control[_ngcontent-%COMP%]:-webkit-autofill + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28121em) scale(0.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.2812em) scale(0.75)}}\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.25em 0 .75em 0}\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.09375em;margin-top:-0.5em}\n.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-fill.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-0.59375em) scale(0.75);width:133.3333333333%}\n.mat-form-field-appearance-fill.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-0.59374em) scale(0.75);width:133.3333433333%}\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:1em 0 1em 0}\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.84375em;margin-top:-0.25em}\n.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-outline.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.59375em) scale(0.75);width:133.3333333333%}\n.mat-form-field-appearance-outline.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.59374em) scale(0.75);width:133.3333433333%}\n.mat-grid-tile-header[_ngcontent-%COMP%], .mat-grid-tile-footer[_ngcontent-%COMP%]{font-size:14px}\n.mat-grid-tile-header[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%], .mat-grid-tile-footer[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\n.mat-grid-tile-header[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2), .mat-grid-tile-footer[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:12px}\ninput.mat-input-element[_ngcontent-%COMP%]{margin-top:-0.0625em}\n.mat-menu-item[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px;font-weight:400}\n.mat-paginator[_ngcontent-%COMP%], .mat-paginator-page-size[_ngcontent-%COMP%]   .mat-select-trigger[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:12px}\n.mat-radio-button[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\n.mat-select[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\n.mat-select-trigger[_ngcontent-%COMP%]{height:1.125em}\n.mat-slide-toggle-content[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\n.mat-slider-thumb-label-text[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:12px;font-weight:500}\n.mat-stepper-vertical[_ngcontent-%COMP%], .mat-stepper-horizontal[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\n.mat-step-label[_ngcontent-%COMP%]{font-size:14px;font-weight:400}\n.mat-step-sub-label-error[_ngcontent-%COMP%]{font-weight:normal}\n.mat-step-label-error[_ngcontent-%COMP%]{font-size:14px}\n.mat-step-label-selected[_ngcontent-%COMP%]{font-size:14px;font-weight:500}\n.mat-tab-group[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\n.mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px;font-weight:500}\n.mat-toolbar[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font:500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0}\n.mat-tooltip[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}\n.mat-tooltip-handset[_ngcontent-%COMP%]{font-size:14px;padding-top:8px;padding-bottom:8px}\n.mat-list-item[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\n.mat-list-option[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{font-size:16px}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:14px}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]{font-size:16px}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:14px}\n.mat-list-base[_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px;font-weight:500}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{font-size:12px}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:12px}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]{font-size:12px}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:12px}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:12px;font-weight:500}\n.mat-option[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:16px}\n.mat-optgroup-label[_ngcontent-%COMP%]{font:500 14px/24px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}\n.mat-simple-snackbar[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px}\n.mat-simple-snackbar-action[_ngcontent-%COMP%]{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}\n.mat-tree[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\n.mat-tree-node[_ngcontent-%COMP%], .mat-nested-tree-node[_ngcontent-%COMP%]{font-weight:400;font-size:14px}\n.mat-ripple[_ngcontent-%COMP%]{overflow:hidden;position:relative}\n.mat-ripple[_ngcontent-%COMP%]:not(:empty){transform:translateZ(0)}\n.mat-ripple.mat-ripple-unbounded[_ngcontent-%COMP%]{overflow:visible}\n.mat-ripple-element[_ngcontent-%COMP%]{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale(0)}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{display:none}\n.cdk-visually-hidden[_ngcontent-%COMP%]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}\n.cdk-overlay-container[_ngcontent-%COMP%], .cdk-global-overlay-wrapper[_ngcontent-%COMP%]{pointer-events:none;top:0;left:0;height:100%;width:100%}\n.cdk-overlay-container[_ngcontent-%COMP%]{position:fixed;z-index:1000}\n.cdk-overlay-container[_ngcontent-%COMP%]:empty{display:none}\n.cdk-global-overlay-wrapper[_ngcontent-%COMP%]{display:flex;position:absolute;z-index:1000}\n.cdk-overlay-pane[_ngcontent-%COMP%]{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}\n.cdk-overlay-backdrop[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);opacity:0}\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:1}\n@media screen and (-ms-high-contrast: active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:.6}}\n.cdk-overlay-dark-backdrop[_ngcontent-%COMP%]{background:rgba(0,0,0,.32)}\n.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%], .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:0}\n.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%]{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}\n.cdk-global-scrollblock[_ngcontent-%COMP%]{position:fixed;width:100%;overflow-y:scroll}\n@-webkit-keyframes cdk-text-field-autofill-start{}\n@keyframes cdk-text-field-autofill-start{}\n@-webkit-keyframes cdk-text-field-autofill-end{}\n@keyframes cdk-text-field-autofill-end{}\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:-webkit-autofill{-webkit-animation:cdk-text-field-autofill-start 0s 1ms;animation:cdk-text-field-autofill-start 0s 1ms}\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill){-webkit-animation:cdk-text-field-autofill-end 0s 1ms;animation:cdk-text-field-autofill-end 0s 1ms}\ntextarea.cdk-textarea-autosize[_ngcontent-%COMP%]{resize:none}\ntextarea.cdk-textarea-autosize-measuring[_ngcontent-%COMP%]{padding:2px 0 !important;box-sizing:content-box !important;height:auto !important;overflow:hidden !important}\ntextarea.cdk-textarea-autosize-measuring-firefox[_ngcontent-%COMP%]{padding:2px 0 !important;box-sizing:content-box !important;height:0 !important}\n.mat-focus-indicator[_ngcontent-%COMP%]{position:relative}\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]{position:relative}\n.mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.1)}\n.mat-option[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\n.mat-option[_ngcontent-%COMP%]:hover:not(.mat-option-disabled), .mat-option[_ngcontent-%COMP%]:focus:not(.mat-option-disabled){background:rgba(0,0,0,.04)}\n.mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-multiple):not(.mat-option-disabled){background:rgba(0,0,0,.04)}\n.mat-option.mat-active[_ngcontent-%COMP%]{background:rgba(0,0,0,.04);color:rgba(0,0,0,.87)}\n.mat-option.mat-option-disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\n.mat-primary[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled){color:#673ab7}\n.mat-accent[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled){color:#ffd740}\n.mat-warn[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled){color:#f44336}\n.mat-optgroup-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\n.mat-optgroup-disabled[_ngcontent-%COMP%]   .mat-optgroup-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\n.mat-pseudo-checkbox[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\n.mat-pseudo-checkbox[_ngcontent-%COMP%]::after{color:#fafafa}\n.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%]{color:#b0b0b0}\n.mat-primary[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%]{background:#673ab7}\n.mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%]{background:#ffd740}\n.mat-warn[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%]{background:#f44336}\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%], .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%]{background:#b0b0b0}\n.mat-app-background[_ngcontent-%COMP%]{background-color:#fafafa;color:rgba(0,0,0,.87)}\n.mat-elevation-z0[_ngcontent-%COMP%]{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z1[_ngcontent-%COMP%]{box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z2[_ngcontent-%COMP%]{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z3[_ngcontent-%COMP%]{box-shadow:0px 3px 3px -2px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14),0px 1px 8px 0px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z4[_ngcontent-%COMP%]{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z5[_ngcontent-%COMP%]{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 5px 8px 0px rgba(0, 0, 0, 0.14),0px 1px 14px 0px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z6[_ngcontent-%COMP%]{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z7[_ngcontent-%COMP%]{box-shadow:0px 4px 5px -2px rgba(0, 0, 0, 0.2),0px 7px 10px 1px rgba(0, 0, 0, 0.14),0px 2px 16px 1px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z8[_ngcontent-%COMP%]{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z9[_ngcontent-%COMP%]{box-shadow:0px 5px 6px -3px rgba(0, 0, 0, 0.2),0px 9px 12px 1px rgba(0, 0, 0, 0.14),0px 3px 16px 2px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z10[_ngcontent-%COMP%]{box-shadow:0px 6px 6px -3px rgba(0, 0, 0, 0.2),0px 10px 14px 1px rgba(0, 0, 0, 0.14),0px 4px 18px 3px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z11[_ngcontent-%COMP%]{box-shadow:0px 6px 7px -4px rgba(0, 0, 0, 0.2),0px 11px 15px 1px rgba(0, 0, 0, 0.14),0px 4px 20px 3px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z12[_ngcontent-%COMP%]{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z13[_ngcontent-%COMP%]{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 13px 19px 2px rgba(0, 0, 0, 0.14),0px 5px 24px 4px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z14[_ngcontent-%COMP%]{box-shadow:0px 7px 9px -4px rgba(0, 0, 0, 0.2),0px 14px 21px 2px rgba(0, 0, 0, 0.14),0px 5px 26px 4px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z15[_ngcontent-%COMP%]{box-shadow:0px 8px 9px -5px rgba(0, 0, 0, 0.2),0px 15px 22px 2px rgba(0, 0, 0, 0.14),0px 6px 28px 5px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z16[_ngcontent-%COMP%]{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z17[_ngcontent-%COMP%]{box-shadow:0px 8px 11px -5px rgba(0, 0, 0, 0.2),0px 17px 26px 2px rgba(0, 0, 0, 0.14),0px 6px 32px 5px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z18[_ngcontent-%COMP%]{box-shadow:0px 9px 11px -5px rgba(0, 0, 0, 0.2),0px 18px 28px 2px rgba(0, 0, 0, 0.14),0px 7px 34px 6px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z19[_ngcontent-%COMP%]{box-shadow:0px 9px 12px -6px rgba(0, 0, 0, 0.2),0px 19px 29px 2px rgba(0, 0, 0, 0.14),0px 7px 36px 6px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z20[_ngcontent-%COMP%]{box-shadow:0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 20px 31px 3px rgba(0, 0, 0, 0.14),0px 8px 38px 7px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z21[_ngcontent-%COMP%]{box-shadow:0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 21px 33px 3px rgba(0, 0, 0, 0.14),0px 8px 40px 7px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z22[_ngcontent-%COMP%]{box-shadow:0px 10px 14px -6px rgba(0, 0, 0, 0.2),0px 22px 35px 3px rgba(0, 0, 0, 0.14),0px 8px 42px 7px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z23[_ngcontent-%COMP%]{box-shadow:0px 11px 14px -7px rgba(0, 0, 0, 0.2),0px 23px 36px 3px rgba(0, 0, 0, 0.14),0px 9px 44px 8px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z24[_ngcontent-%COMP%]{box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0, 0, 0, 0.12)}\n.mat-theme-loaded-marker[_ngcontent-%COMP%]{display:none}\n.mat-autocomplete-panel[_ngcontent-%COMP%]{background:#fff;color:rgba(0,0,0,.87)}\n.mat-autocomplete-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)}\n.mat-autocomplete-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-active):not(:hover){background:#fff}\n.mat-autocomplete-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-active):not(:hover):not(.mat-option-disabled){color:rgba(0,0,0,.87)}\n.mat-badge-content[_ngcontent-%COMP%]{color:#fff;background:#673ab7}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{outline:solid 1px;border-radius:0}\n.mat-badge-accent[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{background:#ffd740;color:rgba(0,0,0,.87)}\n.mat-badge-warn[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{color:#fff;background:#f44336}\n.mat-badge[_ngcontent-%COMP%]{position:relative}\n.mat-badge-hidden[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{display:none}\n.mat-badge-disabled[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{background:#b9b9b9;color:rgba(0,0,0,.38)}\n.mat-badge-content[_ngcontent-%COMP%]{position:absolute;text-align:center;display:inline-block;border-radius:50%;transition:transform 200ms ease-in-out;transform:scale(0.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none}\n.ng-animate-disabled[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%], .mat-badge-content._mat-animation-noopable[_ngcontent-%COMP%]{transition:none}\n.mat-badge-content.mat-badge-active[_ngcontent-%COMP%]{transform:none}\n.mat-badge-small[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{width:16px;height:16px;line-height:16px}\n.mat-badge-small.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{top:-8px}\n.mat-badge-small.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{bottom:-8px}\n.mat-badge-small.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-16px}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-16px}\n.mat-badge-small.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-16px}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-16px}\n.mat-badge-small.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-8px}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-8px}\n.mat-badge-small.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-8px}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-8px}\n.mat-badge-medium[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{width:22px;height:22px;line-height:22px}\n.mat-badge-medium.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{top:-11px}\n.mat-badge-medium.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{bottom:-11px}\n.mat-badge-medium.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-22px}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-22px}\n.mat-badge-medium.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-22px}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-22px}\n.mat-badge-medium.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-11px}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-11px}\n.mat-badge-medium.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-11px}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-11px}\n.mat-badge-large[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{width:28px;height:28px;line-height:28px}\n.mat-badge-large.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{top:-14px}\n.mat-badge-large.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{bottom:-14px}\n.mat-badge-large.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-28px}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-28px}\n.mat-badge-large.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-28px}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-28px}\n.mat-badge-large.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-14px}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-14px}\n.mat-badge-large.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-14px}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-14px}\n.mat-bottom-sheet-container[_ngcontent-%COMP%]{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12);background:#fff;color:rgba(0,0,0,.87)}\n.mat-button[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%]{color:inherit;background:transparent}\n.mat-button.mat-primary[_ngcontent-%COMP%], .mat-icon-button.mat-primary[_ngcontent-%COMP%], .mat-stroked-button.mat-primary[_ngcontent-%COMP%]{color:#673ab7}\n.mat-button.mat-accent[_ngcontent-%COMP%], .mat-icon-button.mat-accent[_ngcontent-%COMP%], .mat-stroked-button.mat-accent[_ngcontent-%COMP%]{color:#ffd740}\n.mat-button.mat-warn[_ngcontent-%COMP%], .mat-icon-button.mat-warn[_ngcontent-%COMP%], .mat-stroked-button.mat-warn[_ngcontent-%COMP%]{color:#f44336}\n.mat-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-icon-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-icon-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-icon-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-icon-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-stroked-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-stroked-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-stroked-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-stroked-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.26)}\n.mat-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{background-color:#673ab7}\n.mat-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{background-color:#ffd740}\n.mat-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{background-color:#f44336}\n.mat-button.mat-button-disabled[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-button-disabled[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-button-disabled[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{background-color:transparent}\n.mat-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{opacity:.1;background-color:currentColor}\n.mat-button-focus-overlay[_ngcontent-%COMP%]{background:#000}\n.mat-stroked-button[_ngcontent-%COMP%]:not(.mat-button-disabled){border-color:rgba(0,0,0,.12)}\n.mat-flat-button[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%], .mat-fab[_ngcontent-%COMP%], .mat-mini-fab[_ngcontent-%COMP%]{color:rgba(0,0,0,.87);background-color:#fff}\n.mat-flat-button.mat-primary[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%]{color:#fff}\n.mat-flat-button.mat-accent[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\n.mat-flat-button.mat-warn[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%]{color:#fff}\n.mat-flat-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.26)}\n.mat-flat-button.mat-primary[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%]{background-color:#673ab7}\n.mat-flat-button.mat-accent[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%]{background-color:#ffd740}\n.mat-flat-button.mat-warn[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%]{background-color:#f44336}\n.mat-flat-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.12)}\n.mat-flat-button.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}\n.mat-flat-button.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.1)}\n.mat-flat-button.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}\n.mat-stroked-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-flat-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}\n.mat-raised-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)}\n.mat-raised-button[_ngcontent-%COMP%]:not(.mat-button-disabled):active:not([class*=mat-elevation-z]){box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)}\n.mat-raised-button.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}\n.mat-fab[_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-mini-fab[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)}\n.mat-fab[_ngcontent-%COMP%]:not(.mat-button-disabled):active:not([class*=mat-elevation-z]), .mat-mini-fab[_ngcontent-%COMP%]:not(.mat-button-disabled):active:not([class*=mat-elevation-z]){box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0, 0, 0, 0.12)}\n.mat-fab.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-mini-fab.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}\n.mat-button-toggle-standalone[_ngcontent-%COMP%], .mat-button-toggle-group[_ngcontent-%COMP%]{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)}\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard[_ngcontent-%COMP%], .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]{box-shadow:none}\n.mat-button-toggle[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\n.mat-button-toggle[_ngcontent-%COMP%]   .mat-button-toggle-focus-overlay[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.12)}\n.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]{color:rgba(0,0,0,.87);background:#fff}\n.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle-focus-overlay[_ngcontent-%COMP%]{background-color:#000}\n.mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%] + .mat-button-toggle[_ngcontent-%COMP%]{border-left:solid 1px rgba(0,0,0,.12)}\n[dir=rtl][_ngcontent-%COMP%]   .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%] + .mat-button-toggle[_ngcontent-%COMP%]{border-left:none;border-right:solid 1px rgba(0,0,0,.12)}\n.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%] + .mat-button-toggle[_ngcontent-%COMP%]{border-left:none;border-right:none;border-top:solid 1px rgba(0,0,0,.12)}\n.mat-button-toggle-checked[_ngcontent-%COMP%]{background-color:#e0e0e0;color:rgba(0,0,0,.54)}\n.mat-button-toggle-checked.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\n.mat-button-toggle-disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.26);background-color:#eee}\n.mat-button-toggle-disabled.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]{background:#fff}\n.mat-button-toggle-disabled.mat-button-toggle-checked[_ngcontent-%COMP%]{background-color:#bdbdbd}\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard[_ngcontent-%COMP%], .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]{border:solid 1px rgba(0,0,0,.12)}\n.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle-label-content[_ngcontent-%COMP%]{line-height:48px}\n.mat-card[_ngcontent-%COMP%]{background:#fff;color:rgba(0,0,0,.87)}\n.mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12)}\n.mat-card.mat-card-flat[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}\n.mat-card-subtitle[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\n.mat-checkbox-frame[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.54)}\n.mat-checkbox-checkmark[_ngcontent-%COMP%]{fill:#fafafa}\n.mat-checkbox-checkmark-path[_ngcontent-%COMP%]{stroke:#fafafa !important}\n.mat-checkbox-mixedmark[_ngcontent-%COMP%]{background-color:#fafafa}\n.mat-checkbox-indeterminate.mat-primary[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-primary[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#673ab7}\n.mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#ffd740}\n.mat-checkbox-indeterminate.mat-warn[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-warn[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#f44336}\n.mat-checkbox-disabled.mat-checkbox-checked[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-disabled.mat-checkbox-indeterminate[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#b0b0b0}\n.mat-checkbox-disabled[_ngcontent-%COMP%]:not(.mat-checkbox-checked)   .mat-checkbox-frame[_ngcontent-%COMP%]{border-color:#b0b0b0}\n.mat-checkbox-disabled[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\n.mat-checkbox[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#000}\n.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-primary   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-primary   .mat-ripple-element[_ngcontent-%COMP%]{background:#673ab7}\n.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-accent   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-accent   .mat-ripple-element[_ngcontent-%COMP%]{background:#ffd740}\n.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-warn   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-warn   .mat-ripple-element[_ngcontent-%COMP%]{background:#f44336}\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]{background-color:#e0e0e0;color:rgba(0,0,0,.87)}\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%]{color:rgba(0,0,0,.87);opacity:.4}\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]:not(.mat-chip-disabled):active{box-shadow:0px 3px 3px -2px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14),0px 1px 8px 0px rgba(0, 0, 0, 0.12)}\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]:not(.mat-chip-disabled)   .mat-chip-remove[_ngcontent-%COMP%]:hover{opacity:.54}\n.mat-chip.mat-standard-chip.mat-chip-disabled[_ngcontent-%COMP%]{opacity:.4}\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]::after{background:#000}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#673ab7;color:#fff}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%]{color:#fff;opacity:.4}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%]{background-color:#f44336;color:#fff}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%]{color:#fff;opacity:.4}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%]{background-color:#ffd740;color:rgba(0,0,0,.87)}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%]{color:rgba(0,0,0,.87);opacity:.4}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.1)}\n.mat-table[_ngcontent-%COMP%]{background:#fff}\n.mat-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .mat-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .mat-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], [mat-header-row][_ngcontent-%COMP%], [mat-row][_ngcontent-%COMP%], [mat-footer-row][_ngcontent-%COMP%], .mat-table-sticky[_ngcontent-%COMP%]{background:inherit}\nmat-row[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%]{border-bottom-color:rgba(0,0,0,.12)}\n.mat-header-cell[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\n.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\n.mat-calendar-arrow[_ngcontent-%COMP%]{border-top-color:rgba(0,0,0,.54)}\n.mat-datepicker-toggle[_ngcontent-%COMP%], .mat-datepicker-content[_ngcontent-%COMP%]   .mat-calendar-next-button[_ngcontent-%COMP%], .mat-datepicker-content[_ngcontent-%COMP%]   .mat-calendar-previous-button[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\n.mat-calendar-table-header[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\n.mat-calendar-table-header-divider[_ngcontent-%COMP%]::after{background:rgba(0,0,0,.12)}\n.mat-calendar-body-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\n.mat-calendar-body-cell-content[_ngcontent-%COMP%], .mat-date-range-input-separator[_ngcontent-%COMP%]{color:rgba(0,0,0,.87);border-color:transparent}\n.mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){color:rgba(0,0,0,.38)}\n.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-date-range-input-separator[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\n.mat-calendar-body-cell[_ngcontent-%COMP%]:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-keyboard-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%] > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%] > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:rgba(0,0,0,.04)}\n.mat-calendar-body-in-preview[_ngcontent-%COMP%]{color:rgba(0,0,0,.24)}\n.mat-calendar-body-today[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:rgba(0,0,0,.38)}\n.mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-today[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:rgba(0,0,0,.18)}\n.mat-calendar-body-in-range[_ngcontent-%COMP%]::before{background:rgba(103,58,183,.2)}\n.mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%]::before{background:rgba(249,171,0,.2)}\n.mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before, [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before{background:linear-gradient(to right, rgba(103, 58, 183, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%)}\n.mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before, [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before{background:linear-gradient(to left, rgba(103, 58, 183, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%)}\n.mat-calendar-body-in-range[_ngcontent-%COMP%] > .mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-calendar-body-in-comparison-range.mat-calendar-body-in-range[_ngcontent-%COMP%]::after{background:#a8dab5}\n.mat-calendar-body-comparison-identical.mat-calendar-body-selected[_ngcontent-%COMP%], .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%] > .mat-calendar-body-selected[_ngcontent-%COMP%]{background:#46a35e}\n.mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:#673ab7;color:#fff}\n.mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:rgba(103,58,183,.4)}\n.mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 1px #fff}\n.mat-datepicker-content[_ngcontent-%COMP%]{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12);background-color:#fff;color:rgba(0,0,0,.87)}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-range[_ngcontent-%COMP%]::before{background:rgba(255,215,64,.2)}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%]::before{background:rgba(249,171,0,.2)}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before, .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before{background:linear-gradient(to right, rgba(255, 215, 64, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%)}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before, .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before{background:linear-gradient(to left, rgba(255, 215, 64, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%)}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-range[_ngcontent-%COMP%] > .mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range.mat-calendar-body-in-range[_ngcontent-%COMP%]::after{background:#a8dab5}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-comparison-identical.mat-calendar-body-selected[_ngcontent-%COMP%], .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%] > .mat-calendar-body-selected[_ngcontent-%COMP%]{background:#46a35e}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:#ffd740;color:rgba(0,0,0,.87)}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:rgba(255,215,64,.4)}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 1px rgba(0,0,0,.87)}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-range[_ngcontent-%COMP%]::before{background:rgba(244,67,54,.2)}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%]::before{background:rgba(249,171,0,.2)}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before, .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before{background:linear-gradient(to right, rgba(244, 67, 54, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%)}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before, .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before{background:linear-gradient(to left, rgba(244, 67, 54, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%)}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-range[_ngcontent-%COMP%] > .mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range.mat-calendar-body-in-range[_ngcontent-%COMP%]::after{background:#a8dab5}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-comparison-identical.mat-calendar-body-selected[_ngcontent-%COMP%], .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%] > .mat-calendar-body-selected[_ngcontent-%COMP%]{background:#46a35e}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:#f44336;color:#fff}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:rgba(244,67,54,.4)}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 1px #fff}\n.mat-datepicker-content-touch[_ngcontent-%COMP%]{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}\n.mat-datepicker-toggle-active[_ngcontent-%COMP%]{color:#673ab7}\n.mat-datepicker-toggle-active.mat-accent[_ngcontent-%COMP%]{color:#ffd740}\n.mat-datepicker-toggle-active.mat-warn[_ngcontent-%COMP%]{color:#f44336}\n.mat-date-range-input-inner[disabled][_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\n.mat-dialog-container[_ngcontent-%COMP%]{box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0, 0, 0, 0.12);background:#fff;color:rgba(0,0,0,.87)}\n.mat-divider[_ngcontent-%COMP%]{border-top-color:rgba(0,0,0,.12)}\n.mat-divider-vertical[_ngcontent-%COMP%]{border-right-color:rgba(0,0,0,.12)}\n.mat-expansion-panel[_ngcontent-%COMP%]{background:#fff;color:rgba(0,0,0,.87)}\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)}\n.mat-action-row[_ngcontent-%COMP%]{border-top-color:rgba(0,0,0,.12)}\n.mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header.cdk-keyboard-focused[_ngcontent-%COMP%]:not([aria-disabled=true]), .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header.cdk-program-focused[_ngcontent-%COMP%]:not([aria-disabled=true]), .mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expanded)   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover:not([aria-disabled=true]){background:rgba(0,0,0,.04)}\n@media(hover: none){.mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expanded):not([aria-disabled=true])   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover{background:#fff}}\n.mat-expansion-panel-header-title[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\n.mat-expansion-panel-header-description[_ngcontent-%COMP%], .mat-expansion-indicator[_ngcontent-%COMP%]::after{color:rgba(0,0,0,.54)}\n.mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]{color:rgba(0,0,0,.26)}\n.mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%]{color:inherit}\n.mat-expansion-panel-header[_ngcontent-%COMP%]{height:48px}\n.mat-expansion-panel-header.mat-expanded[_ngcontent-%COMP%]{height:64px}\n.mat-form-field-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.6)}\n.mat-hint[_ngcontent-%COMP%]{color:rgba(0,0,0,.6)}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:#673ab7}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label.mat-accent[_ngcontent-%COMP%]{color:#ffd740}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label.mat-warn[_ngcontent-%COMP%]{color:#f44336}\n.mat-focused[_ngcontent-%COMP%]   .mat-form-field-required-marker[_ngcontent-%COMP%]{color:#ffd740}\n.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.87)}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#673ab7}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-accent[_ngcontent-%COMP%]{background-color:#ffd740}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-warn[_ngcontent-%COMP%]{background-color:#f44336}\n.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid)   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:#673ab7}\n.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid).mat-accent   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:#ffd740}\n.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid).mat-warn   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:#f44336}\n.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:#f44336}\n.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label.mat-accent[_ngcontent-%COMP%], .mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]   .mat-form-field-required-marker[_ngcontent-%COMP%]{color:#f44336}\n.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%], .mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-accent[_ngcontent-%COMP%]{background-color:#f44336}\n.mat-error[_ngcontent-%COMP%]{color:#f44336}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-hint[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.42)}\n.mat-form-field-appearance-legacy.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-image:linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);background-size:4px 100%;background-repeat:repeat-x}\n.mat-form-field-appearance-standard[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.42)}\n.mat-form-field-appearance-standard.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-image:linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);background-size:4px 100%;background-repeat:repeat-x}\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.04)}\n.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.02)}\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]::before{background-color:rgba(0,0,0,.42)}\n.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\n.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]::before{background-color:transparent}\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:rgba(0,0,0,.12)}\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\n.mat-form-field-appearance-outline.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:#673ab7}\n.mat-form-field-appearance-outline.mat-focused.mat-accent[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:#ffd740}\n.mat-form-field-appearance-outline.mat-focused.mat-warn[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:#f44336}\n.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:#f44336}\n.mat-form-field-appearance-outline.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\n.mat-form-field-appearance-outline.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:rgba(0,0,0,.06)}\n.mat-icon.mat-primary[_ngcontent-%COMP%]{color:#673ab7}\n.mat-icon.mat-accent[_ngcontent-%COMP%]{color:#ffd740}\n.mat-icon.mat-warn[_ngcontent-%COMP%]{color:#f44336}\n.mat-form-field-type-mat-native-select[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:rgba(0,0,0,.54)}\n.mat-input-element[_ngcontent-%COMP%]:disabled, .mat-form-field-type-mat-native-select.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:rgba(0,0,0,.38)}\n.mat-input-element[_ngcontent-%COMP%]{caret-color:#673ab7}\n.mat-input-element[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(0,0,0,.42)}\n.mat-input-element[_ngcontent-%COMP%]::placeholder{color:rgba(0,0,0,.42)}\n.mat-input-element[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(0,0,0,.42)}\n.mat-input-element[_ngcontent-%COMP%]::-webkit-input-placeholder{color:rgba(0,0,0,.42)}\n.mat-input-element[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(0,0,0,.42)}\n.mat-form-field.mat-accent[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{caret-color:#ffd740}\n.mat-form-field.mat-warn[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%], .mat-form-field-invalid[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{caret-color:#f44336}\n.mat-form-field-type-mat-native-select.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:#f44336}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\n.mat-list-base[_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\n.mat-list-item-disabled[_ngcontent-%COMP%]{background-color:#eee}\n.mat-list-option[_ngcontent-%COMP%]:hover, .mat-list-option[_ngcontent-%COMP%]:focus, .mat-nav-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:hover, .mat-nav-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:focus, .mat-action-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:hover, .mat-action-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:focus{background:rgba(0,0,0,.04)}\n.mat-list-single-selected-option[_ngcontent-%COMP%], .mat-list-single-selected-option[_ngcontent-%COMP%]:hover, .mat-list-single-selected-option[_ngcontent-%COMP%]:focus{background:rgba(0,0,0,.12)}\n.mat-menu-panel[_ngcontent-%COMP%]{background:#fff}\n.mat-menu-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)}\n.mat-menu-item[_ngcontent-%COMP%]{background:transparent;color:rgba(0,0,0,.87)}\n.mat-menu-item[disabled][_ngcontent-%COMP%], .mat-menu-item[disabled][_ngcontent-%COMP%]::after{color:rgba(0,0,0,.38)}\n.mat-menu-item[_ngcontent-%COMP%]   .mat-icon-no-color[_ngcontent-%COMP%], .mat-menu-item-submenu-trigger[_ngcontent-%COMP%]::after{color:rgba(0,0,0,.54)}\n.mat-menu-item[_ngcontent-%COMP%]:hover:not([disabled]), .mat-menu-item.cdk-program-focused[_ngcontent-%COMP%]:not([disabled]), .mat-menu-item.cdk-keyboard-focused[_ngcontent-%COMP%]:not([disabled]), .mat-menu-item-highlighted[_ngcontent-%COMP%]:not([disabled]){background:rgba(0,0,0,.04)}\n.mat-paginator[_ngcontent-%COMP%]{background:#fff}\n.mat-paginator[_ngcontent-%COMP%], .mat-paginator-page-size[_ngcontent-%COMP%]   .mat-select-trigger[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\n.mat-paginator-decrement[_ngcontent-%COMP%], .mat-paginator-increment[_ngcontent-%COMP%]{border-top:2px solid rgba(0,0,0,.54);border-right:2px solid rgba(0,0,0,.54)}\n.mat-paginator-first[_ngcontent-%COMP%], .mat-paginator-last[_ngcontent-%COMP%]{border-top:2px solid rgba(0,0,0,.54)}\n.mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-decrement[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-increment[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-first[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-last[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.38)}\n.mat-paginator-container[_ngcontent-%COMP%]{min-height:56px}\n.mat-progress-bar-background[_ngcontent-%COMP%]{fill:#d1c4e9}\n.mat-progress-bar-buffer[_ngcontent-%COMP%]{background-color:#d1c4e9}\n.mat-progress-bar-fill[_ngcontent-%COMP%]::after{background-color:#673ab7}\n.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-background[_ngcontent-%COMP%]{fill:#ffe57f}\n.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-buffer[_ngcontent-%COMP%]{background-color:#ffe57f}\n.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-fill[_ngcontent-%COMP%]::after{background-color:#ffd740}\n.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-background[_ngcontent-%COMP%]{fill:#ffcdd2}\n.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-buffer[_ngcontent-%COMP%]{background-color:#ffcdd2}\n.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-fill[_ngcontent-%COMP%]::after{background-color:#f44336}\n.mat-progress-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#673ab7}\n.mat-progress-spinner.mat-accent[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner.mat-accent[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#ffd740}\n.mat-progress-spinner.mat-warn[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner.mat-warn[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#f44336}\n.mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.54)}\n.mat-radio-button.mat-primary.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:#673ab7}\n.mat-radio-button.mat-primary[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-primary[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-primary.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-primary[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%]{background-color:#673ab7}\n.mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:#ffd740}\n.mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-accent[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%]{background-color:#ffd740}\n.mat-radio-button.mat-warn.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:#f44336}\n.mat-radio-button.mat-warn[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-warn[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-warn.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-warn[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%]{background-color:#f44336}\n.mat-radio-button.mat-radio-disabled.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%], .mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.38)}\n.mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.38)}\n.mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-label-content[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\n.mat-radio-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#000}\n.mat-select-value[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\n.mat-select-placeholder[_ngcontent-%COMP%]{color:rgba(0,0,0,.42)}\n.mat-select-disabled[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\n.mat-select-arrow[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\n.mat-select-panel[_ngcontent-%COMP%]{background:#fff}\n.mat-select-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)}\n.mat-select-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-multiple){background:rgba(0,0,0,.12)}\n.mat-form-field.mat-focused.mat-primary[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:#673ab7}\n.mat-form-field.mat-focused.mat-accent[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:#ffd740}\n.mat-form-field.mat-focused.mat-warn[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:#f44336}\n.mat-form-field[_ngcontent-%COMP%]   .mat-select.mat-select-invalid[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:#f44336}\n.mat-form-field[_ngcontent-%COMP%]   .mat-select.mat-select-disabled[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\n.mat-drawer-container[_ngcontent-%COMP%]{background-color:#fafafa;color:rgba(0,0,0,.87)}\n.mat-drawer[_ngcontent-%COMP%]{background-color:#fff;color:rgba(0,0,0,.87)}\n.mat-drawer.mat-drawer-push[_ngcontent-%COMP%]{background-color:#fff}\n.mat-drawer[_ngcontent-%COMP%]:not(.mat-drawer-side){box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12)}\n.mat-drawer-side[_ngcontent-%COMP%]{border-right:solid 1px rgba(0,0,0,.12)}\n.mat-drawer-side.mat-drawer-end[_ngcontent-%COMP%]{border-left:solid 1px rgba(0,0,0,.12);border-right:none}\n[dir=rtl][_ngcontent-%COMP%]   .mat-drawer-side[_ngcontent-%COMP%]{border-left:solid 1px rgba(0,0,0,.12);border-right:none}\n[dir=rtl][_ngcontent-%COMP%]   .mat-drawer-side.mat-drawer-end[_ngcontent-%COMP%]{border-left:none;border-right:solid 1px rgba(0,0,0,.12)}\n.mat-drawer-backdrop.mat-drawer-shown[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.6)}\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%]{background-color:#ffd740}\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%]{background-color:rgba(255,215,64,.54)}\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#ffd740}\n.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%]{background-color:#673ab7}\n.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%]{background-color:rgba(103,58,183,.54)}\n.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#673ab7}\n.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%]{background-color:#f44336}\n.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%]{background-color:rgba(244,67,54,.54)}\n.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#f44336}\n.mat-slide-toggle[_ngcontent-%COMP%]:not(.mat-checked)   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#000}\n.mat-slide-toggle-thumb[_ngcontent-%COMP%]{box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12);background-color:#fafafa}\n.mat-slide-toggle-bar[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.38)}\n.mat-slider-track-background[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.26)}\n.mat-primary[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:#673ab7}\n.mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%]{color:#fff}\n.mat-primary[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%]{background-color:rgba(103,58,183,.2)}\n.mat-accent[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:#ffd740}\n.mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\n.mat-accent[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%]{background-color:rgba(255,215,64,.2)}\n.mat-warn[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:#f44336}\n.mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%]{color:#fff}\n.mat-warn[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%]{background-color:rgba(244,67,54,.2)}\n.mat-slider[_ngcontent-%COMP%]:hover   .mat-slider-track-background[_ngcontent-%COMP%], .cdk-focused[_ngcontent-%COMP%]   .mat-slider-track-background[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.38)}\n.mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-track-background[_ngcontent-%COMP%], .mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.26)}\n.mat-slider-disabled[_ngcontent-%COMP%]:hover   .mat-slider-track-background[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.26)}\n.mat-slider-min-value[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.12)}\n.mat-slider-min-value.mat-slider-thumb-label-showing[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value.mat-slider-thumb-label-showing[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.87)}\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.26)}\n.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing)   .mat-slider-thumb[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.26);background-color:transparent}\n.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing):hover   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing).cdk-focused   .mat-slider-thumb[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.38)}\n.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled   .mat-slider-thumb[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.26)}\n.mat-slider-has-ticks[_ngcontent-%COMP%]   .mat-slider-wrapper[_ngcontent-%COMP%]::after{border-color:rgba(0,0,0,.7)}\n.mat-slider-horizontal[_ngcontent-%COMP%]   .mat-slider-ticks[_ngcontent-%COMP%]{background-image:repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);background-image:-moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent)}\n.mat-slider-vertical[_ngcontent-%COMP%]   .mat-slider-ticks[_ngcontent-%COMP%]{background-image:repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent)}\n.mat-step-header.cdk-keyboard-focused[_ngcontent-%COMP%], .mat-step-header.cdk-program-focused[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.04)}\n@media(hover: none){.mat-step-header[_ngcontent-%COMP%]:hover{background:none}}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-label[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-optional[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.54);color:#fff}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-selected[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%]{background-color:#673ab7;color:#fff}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-error[_ngcontent-%COMP%]{background-color:transparent;color:#f44336}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-label.mat-step-label-active[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-label.mat-step-label-error[_ngcontent-%COMP%]{color:#f44336}\n.mat-stepper-horizontal[_ngcontent-%COMP%], .mat-stepper-vertical[_ngcontent-%COMP%]{background-color:#fff}\n.mat-stepper-vertical-line[_ngcontent-%COMP%]::before{border-left-color:rgba(0,0,0,.12)}\n.mat-horizontal-stepper-header[_ngcontent-%COMP%]::before, .mat-horizontal-stepper-header[_ngcontent-%COMP%]::after, .mat-stepper-horizontal-line[_ngcontent-%COMP%]{border-top-color:rgba(0,0,0,.12)}\n.mat-horizontal-stepper-header[_ngcontent-%COMP%]{height:72px}\n.mat-stepper-label-position-bottom[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%], .mat-vertical-stepper-header[_ngcontent-%COMP%]{padding:24px 24px}\n.mat-stepper-vertical-line[_ngcontent-%COMP%]::before{top:-16px;bottom:-16px}\n.mat-stepper-label-position-bottom[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]::after, .mat-stepper-label-position-bottom[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]::before{top:36px}\n.mat-stepper-label-position-bottom[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%]{top:36px}\n.mat-sort-header-arrow[_ngcontent-%COMP%]{color:#757575}\n.mat-tab-nav-bar[_ngcontent-%COMP%], .mat-tab-header[_ngcontent-%COMP%]{border-bottom:1px solid rgba(0,0,0,.12)}\n.mat-tab-group-inverted-header[_ngcontent-%COMP%]   .mat-tab-nav-bar[_ngcontent-%COMP%], .mat-tab-group-inverted-header[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%]{border-top:1px solid rgba(0,0,0,.12);border-bottom:none}\n.mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\n.mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\n.mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.87)}\n.mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.38)}\n.mat-tab-group[class*=mat-background-][_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar[class*=mat-background-][_ngcontent-%COMP%]{border-bottom:none;border-top:none}\n.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(209,196,233,.3)}\n.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#673ab7}\n.mat-tab-group.mat-primary.mat-background-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-primary.mat-background-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#fff}\n.mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(255,229,127,.3)}\n.mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#ffd740}\n.mat-tab-group.mat-accent.mat-background-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-accent.mat-background-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.87)}\n.mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}\n.mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#f44336}\n.mat-tab-group.mat-warn.mat-background-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-warn.mat-background-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#fff}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(209,196,233,.3)}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%]{background-color:#673ab7}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]{color:#fff}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%]{color:rgba(255,255,255,.4)}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:#fff}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(255,255,255,.4)}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.12)}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(255,229,127,.3)}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%]{background-color:#ffd740}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.4)}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.87)}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.4)}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.12)}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%]{background-color:#f44336}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]{color:#fff}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%]{color:rgba(255,255,255,.4)}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:#fff}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(255,255,255,.4)}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.12)}\n.mat-toolbar[_ngcontent-%COMP%]{background:#f5f5f5;color:rgba(0,0,0,.87)}\n.mat-toolbar.mat-primary[_ngcontent-%COMP%]{background:#673ab7;color:#fff}\n.mat-toolbar.mat-accent[_ngcontent-%COMP%]{background:#ffd740;color:rgba(0,0,0,.87)}\n.mat-toolbar.mat-warn[_ngcontent-%COMP%]{background:#f44336;color:#fff}\n.mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{background-color:currentColor}\n.mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:inherit}\n.mat-toolbar[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{caret-color:currentColor}\n.mat-toolbar-multiple-rows[_ngcontent-%COMP%]{min-height:64px}\n.mat-toolbar-row[_ngcontent-%COMP%], .mat-toolbar-single-row[_ngcontent-%COMP%]{height:64px}\n@media(max-width: 599px){.mat-toolbar-multiple-rows[_ngcontent-%COMP%]{min-height:56px}.mat-toolbar-row[_ngcontent-%COMP%], .mat-toolbar-single-row[_ngcontent-%COMP%]{height:56px}}\n.mat-tooltip[_ngcontent-%COMP%]{background:rgba(97,97,97,.9)}\n.mat-tree[_ngcontent-%COMP%]{background:#fff}\n.mat-tree-node[_ngcontent-%COMP%], .mat-nested-tree-node[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\n.mat-tree-node[_ngcontent-%COMP%]{min-height:48px}\n.mat-snack-bar-container[_ngcontent-%COMP%]{color:rgba(255,255,255,.7);background:#323232;box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)}\n.mat-simple-snackbar-action[_ngcontent-%COMP%]{color:#ffd740}\n\n\n@-webkit-keyframes opacity {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes opacity {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes slide-up {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n@keyframes slide-up {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n@-webkit-keyframes slide-down {\n  0% {\n    transform: translateY(-100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n@keyframes slide-down {\n  0% {\n    transform: translateY(-100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n@-webkit-keyframes slide-left {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(0%);\n  }\n}\n@keyframes slide-left {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(0%);\n  }\n}\n@-webkit-keyframes slide-right {\n  0% {\n    transform: translateX(100%);\n  }\n  100% {\n    transform: translateX(0%);\n  }\n}\n@keyframes slide-right {\n  0% {\n    transform: translateX(100%);\n  }\n  100% {\n    transform: translateX(0%);\n  }\n}\n@-webkit-keyframes shake {\n  0% {\n    transform: rotate(10deg);\n  }\n  25% {\n    transform: rotate(-10deg);\n  }\n  50% {\n    transform: rotate(0);\n  }\n}\n@keyframes shake {\n  0% {\n    transform: rotate(10deg);\n  }\n  25% {\n    transform: rotate(-10deg);\n  }\n  50% {\n    transform: rotate(0);\n  }\n}\n@-webkit-keyframes grow-center-to-sides {\n  0% {\n    transform: scale(0, 1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes grow-center-to-sides {\n  0% {\n    transform: scale(0, 1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.site-block[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.ratio-16-9[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.ratio-16-9[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  width: 100%;\n  padding-top: 56%;\n}\n.ratio-16-9[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.ratio-16-9[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.ratio-square[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.ratio-square[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  width: 100%;\n  padding-top: 100%;\n}\n.ratio-square[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.ratio-square[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.ratio-card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.ratio-card[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  width: 100%;\n  padding-top: 80%;\n}\n.ratio-card[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.ratio-card[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.ratio-poster[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.ratio-poster[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  width: 100%;\n  padding-top: 150%;\n}\n.ratio-poster[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.ratio-poster[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.bolder[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n.lighter[_ngcontent-%COMP%] {\n  font-weight: lighter;\n}\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.inline-flex[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.col[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.row[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.bet[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.evenly[_ngcontent-%COMP%] {\n  justify-content: space-evenly;\n}\n.j-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.j-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.a-end[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.a-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.not-allowed[_ngcontent-%COMP%], .disable[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n}\n.cursor-initial[_ngcontent-%COMP%] {\n  cursor: initial;\n}\n.relative[_ngcontent-%COMP%] {\n  position: relative;\n}\n.fixed[_ngcontent-%COMP%] {\n  position: fixed;\n}\n.absolute[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.static[_ngcontent-%COMP%] {\n  position: static;\n}\n.sticky[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n}\n.none[_ngcontent-%COMP%] {\n  display: none;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n}\n.block[_ngcontent-%COMP%] {\n  display: block;\n}\n.inline-block[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.monospace[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.m-i-start-1ch[_ngcontent-%COMP%] {\n  -webkit-margin-start: 1ch;\n          margin-inline-start: 1ch;\n}\n.m-i-start-2ch[_ngcontent-%COMP%] {\n  -webkit-margin-start: 2ch;\n          margin-inline-start: 2ch;\n}\n.m-i-start-3ch[_ngcontent-%COMP%] {\n  -webkit-margin-start: 3ch;\n          margin-inline-start: 3ch;\n}\n.m-i-end-1ch[_ngcontent-%COMP%] {\n  -webkit-margin-end: 1ch;\n          margin-inline-end: 1ch;\n}\n.m-i-end-2ch[_ngcontent-%COMP%] {\n  -webkit-margin-end: 2ch;\n          margin-inline-end: 2ch;\n}\n.m-i-end-3ch[_ngcontent-%COMP%] {\n  -webkit-margin-end: 3ch;\n          margin-inline-end: 3ch;\n}\n.m-b-start-1ch[_ngcontent-%COMP%] {\n  -webkit-margin-before: 1ch;\n          margin-block-start: 1ch;\n}\n.m-b-start-2ch[_ngcontent-%COMP%] {\n  -webkit-margin-before: 2ch;\n          margin-block-start: 2ch;\n}\n.m-b-start-3ch[_ngcontent-%COMP%] {\n  -webkit-margin-before: 3ch;\n          margin-block-start: 3ch;\n}\n.m-b-end-1ch[_ngcontent-%COMP%] {\n  -webkit-margin-after: 1ch;\n          margin-block-end: 1ch;\n}\n.m-b-end-2ch[_ngcontent-%COMP%] {\n  -webkit-margin-after: 2ch;\n          margin-block-end: 2ch;\n}\n.m-b-end-3ch[_ngcontent-%COMP%] {\n  -webkit-margin-after: 3ch;\n          margin-block-end: 3ch;\n}\n.w100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.h100[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.avatar[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  background-color: #68b0c9;\n  transition: background-color 0.3s;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.avatar.isHorizonal[_ngcontent-%COMP%] {\n  -o-object-fit: fill;\n     object-fit: fill;\n}\n.avatar.avatar-s[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n}\n.avatar.avatar-m[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n}\n.avatar.avatar-l[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n}\n.divider-line[_ngcontent-%COMP%] {\n  background-color: #991212;\n  height: 0.5px;\n  width: 50%;\n  margin: 20px auto;\n}\n.divider-start-line[_ngcontent-%COMP%] {\n  background-color: #991212;\n  height: 0.5px;\n  width: 25vw;\n  margin: 20px;\n}\n.cln-ul[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n.cln-li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.cln-a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: initial;\n}\n.cln-btn[_ngcontent-%COMP%] {\n  border: none;\n  background-color: initial;\n}\n.opacity-hover-9[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.opacity-hover-8[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.opacity-hover-7[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n.opacity-hover-6[_ngcontent-%COMP%]:hover {\n  opacity: 0.6;\n}\n.opacity-hover-5[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n}\nbody[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  margin: 0;\n  scroll-behavior: smooth;\n}\nbody[_ngcontent-%COMP%]   .screen[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000;\n  opacity: 0;\n  z-index: -11;\n  transition: opacity 0.5s, z-index 0 0.5s;\n}\nbody.screen-visibility[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\nbody.screen-visibility[_ngcontent-%COMP%]   .screen[_ngcontent-%COMP%] {\n  transition: opacity 0.5s;\n  z-index: 1000;\n  opacity: 0.85;\n}\nbody[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.8em;\n}\nbody[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n}\nbody[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #0000001c;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: initial;\n}\nul[_ngcontent-%COMP%] {\n  list-style: none;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.width-container[_ngcontent-%COMP%] {\n  width: 100vw;\n}\n@media (min-width: 680px) {\n  .width-container[_ngcontent-%COMP%] {\n    width: 680px;\n    margin: 0 auto;\n  }\n}\n.main-header[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  overflow: hidden;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.342);\n  width: 100%;\n  top: 0;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLWhlYWRlci9DOlxcc2l0ZS1wcm9qXFxfQW5ndWxhclxcTWlzcy1RdWl6XFxxdWl6LWZyb250ZW5kL3NyY1xcc3R5bGVzLnNjc3MiLCJub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvcHJlYnVpbHQtdGhlbWVzL2RlZXBwdXJwbGUtYW1iZXIuY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4taGVhZGVyL0M6XFxzaXRlLXByb2pcXF9Bbmd1bGFyXFxNaXNzLVF1aXpcXHF1aXotZnJvbnRlbmQvc3JjXFxzdHlsZXNcXHNldHVwXFxfbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1oZWFkZXIvQzpcXHNpdGUtcHJvalxcX0FuZ3VsYXJcXE1pc3MtUXVpelxccXVpei1mcm9udGVuZC9zcmNcXHN0eWxlc1xcYW5pbWF0aW9uc1xcX2ZhZGUuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluLWhlYWRlci9tYWluLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluLWhlYWRlci9DOlxcc2l0ZS1wcm9qXFxfQW5ndWxhclxcTWlzcy1RdWl6XFxxdWl6LWZyb250ZW5kL3NyY1xcc3R5bGVzXFxhbmltYXRpb25zXFxfc2xpZGUuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluLWhlYWRlci9DOlxcc2l0ZS1wcm9qXFxfQW5ndWxhclxcTWlzcy1RdWl6XFxxdWl6LWZyb250ZW5kL3NyY1xcc3R5bGVzXFxhbmltYXRpb25zXFxfcm90YXRlLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1oZWFkZXIvQzpcXHNpdGUtcHJvalxcX0FuZ3VsYXJcXE1pc3MtUXVpelxccXVpei1mcm9udGVuZC9zcmNcXHN0eWxlc1xcYW5pbWF0aW9uc1xcX3JpcHBsZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4taGVhZGVyL0M6XFxzaXRlLXByb2pcXF9Bbmd1bGFyXFxNaXNzLVF1aXpcXHF1aXotZnJvbnRlbmQvc3JjXFxzdHlsZXNcXGJhc2ljc1xcX2hlbHBlcnMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluLWhlYWRlci9DOlxcc2l0ZS1wcm9qXFxfQW5ndWxhclxcTWlzcy1RdWl6XFxxdWl6LWZyb250ZW5kL3NyY1xcc3R5bGVzXFxzZXR1cFxcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4taGVhZGVyL0M6XFxzaXRlLXByb2pcXF9Bbmd1bGFyXFxNaXNzLVF1aXpcXHF1aXotZnJvbnRlbmQvc3JjXFxzdHlsZXNcXGJhc2ljc1xcX2Jhc2Uuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluLWhlYWRlci9DOlxcc2l0ZS1wcm9qXFxfQW5ndWxhclxcTWlzcy1RdWl6XFxxdWl6LWZyb250ZW5kL3NyY1xcc3R5bGVzXFxiYXNpY3NcXF9sYXlvdXQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluLWhlYWRlci9DOlxcc2l0ZS1wcm9qXFxfQW5ndWxhclxcTWlzcy1RdWl6XFxxdWl6LWZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtYWluLWhlYWRlclxcbWFpbi1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNBQSxtQkFBbUIsZUFBZSxDQUFDLGNBQWMsQ0FBQyxnREFBZ0Q7QUFBQyxvQ0FBb0MsYUFBYTtBQUFDLG9DQUFvQyxjQUFjO0FBQUMseUNBQXlDLHVEQUF1RCxDQUFDLHFCQUFxQixDQUFDLGVBQWU7QUFBQyxzQ0FBc0MsdURBQXVELENBQUMscUJBQXFCLENBQUMsZUFBZTtBQUFDLDZDQUE2Qyx1REFBdUQsQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlO0FBQUMsNkNBQTZDLHVEQUF1RCxDQUFDLHFCQUFxQixDQUFDLGVBQWU7QUFBQywyQkFBMkIsb0VBQW9FLENBQUMsZUFBZTtBQUFDLDJCQUEyQixvRUFBb0UsQ0FBQyxlQUFlO0FBQUMs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RFAsY0FBQTtFUDRiTjtBQUNGO0FROWJBO0VBQ0ksd0JBQUE7RUFBQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QVJpY0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4taGVhZGVyL21haW4taGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGltcG9ydCAnfkBhbmd1bGFyL21hdGVyaWFsL3ByZWJ1aWx0LXRoZW1lcy9kZWVwcHVycGxlLWFtYmVyLmNzcyc7XG5cblxuQGltcG9ydCAnLi9zdHlsZXMvZ2xvYmFsLnNjc3MnO1xuQGltcG9ydCAnLi9zdHlsZXMvZ2xvYmFsLXN0YXRpYy5zY3NzJzsiLCIubWF0LWJhZGdlLWNvbnRlbnR7Zm9udC13ZWlnaHQ6NjAwO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtYmFkZ2Utc21hbGwgLm1hdC1iYWRnZS1jb250ZW50e2ZvbnQtc2l6ZTo5cHh9Lm1hdC1iYWRnZS1sYXJnZSAubWF0LWJhZGdlLWNvbnRlbnR7Zm9udC1zaXplOjI0cHh9Lm1hdC1oMSwubWF0LWhlYWRsaW5lLC5tYXQtdHlwb2dyYXBoeSBoMXtmb250OjQwMCAyNHB4LzMycHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO21hcmdpbjowIDAgMTZweH0ubWF0LWgyLC5tYXQtdGl0bGUsLm1hdC10eXBvZ3JhcGh5IGgye2ZvbnQ6NTAwIDIwcHgvMzJweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzpub3JtYWw7bWFyZ2luOjAgMCAxNnB4fS5tYXQtaDMsLm1hdC1zdWJoZWFkaW5nLTIsLm1hdC10eXBvZ3JhcGh5IGgze2ZvbnQ6NDAwIDE2cHgvMjhweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzpub3JtYWw7bWFyZ2luOjAgMCAxNnB4fS5tYXQtaDQsLm1hdC1zdWJoZWFkaW5nLTEsLm1hdC10eXBvZ3JhcGh5IGg0e2ZvbnQ6NDAwIDE1cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzpub3JtYWw7bWFyZ2luOjAgMCAxNnB4fS5tYXQtaDUsLm1hdC10eXBvZ3JhcGh5IGg1e2ZvbnQ6NDAwIGNhbGMoMTRweCAqIDAuODMpLzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bWFyZ2luOjAgMCAxMnB4fS5tYXQtaDYsLm1hdC10eXBvZ3JhcGh5IGg2e2ZvbnQ6NDAwIGNhbGMoMTRweCAqIDAuNjcpLzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bWFyZ2luOjAgMCAxMnB4fS5tYXQtYm9keS1zdHJvbmcsLm1hdC1ib2R5LTJ7Zm9udDo1MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbH0ubWF0LWJvZHksLm1hdC1ib2R5LTEsLm1hdC10eXBvZ3JhcGh5e2ZvbnQ6NDAwIDE0cHgvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzpub3JtYWx9Lm1hdC1ib2R5IHAsLm1hdC1ib2R5LTEgcCwubWF0LXR5cG9ncmFwaHkgcHttYXJnaW46MCAwIDEycHh9Lm1hdC1zbWFsbCwubWF0LWNhcHRpb257Zm9udDo0MDAgMTJweC8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbH0ubWF0LWRpc3BsYXktNCwubWF0LXR5cG9ncmFwaHkgLm1hdC1kaXNwbGF5LTR7Zm9udDozMDAgMTEycHgvMTEycHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6LTAuMDVlbTttYXJnaW46MCAwIDU2cHh9Lm1hdC1kaXNwbGF5LTMsLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS0ze2ZvbnQ6NDAwIDU2cHgvNTZweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzotMC4wMmVtO21hcmdpbjowIDAgNjRweH0ubWF0LWRpc3BsYXktMiwubWF0LXR5cG9ncmFwaHkgLm1hdC1kaXNwbGF5LTJ7Zm9udDo0MDAgNDVweC80OHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOi0wLjAwNWVtO21hcmdpbjowIDAgNjRweH0ubWF0LWRpc3BsYXktMSwubWF0LXR5cG9ncmFwaHkgLm1hdC1kaXNwbGF5LTF7Zm9udDo0MDAgMzRweC80MHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbDttYXJnaW46MCAwIDY0cHh9Lm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVye2ZvbnQ6NDAwIDE0cHgvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzpub3JtYWx9Lm1hdC1idXR0b24sLm1hdC1yYWlzZWQtYnV0dG9uLC5tYXQtaWNvbi1idXR0b24sLm1hdC1zdHJva2VkLWJ1dHRvbiwubWF0LWZsYXQtYnV0dG9uLC5tYXQtZmFiLC5tYXQtbWluaS1mYWJ7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtYnV0dG9uLXRvZ2dsZXtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LWNhcmR7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1jYXJkLXRpdGxle2ZvbnQtc2l6ZToyNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZXtmb250LXNpemU6MjBweH0ubWF0LWNhcmQtc3VidGl0bGUsLm1hdC1jYXJkLWNvbnRlbnR7Zm9udC1zaXplOjE0cHh9Lm1hdC1jaGVja2JveHtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LWNoZWNrYm94LWxheW91dCAubWF0LWNoZWNrYm94LWxhYmVse2xpbmUtaGVpZ2h0OjI0cHh9Lm1hdC1jaGlwe2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LWNoaXAgLm1hdC1jaGlwLXRyYWlsaW5nLWljb24ubWF0LWljb24sLm1hdC1jaGlwIC5tYXQtY2hpcC1yZW1vdmUubWF0LWljb257Zm9udC1zaXplOjE4cHh9Lm1hdC10YWJsZXtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LWhlYWRlci1jZWxse2ZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LWNlbGwsLm1hdC1mb290ZXItY2VsbHtmb250LXNpemU6MTRweH0ubWF0LWNhbGVuZGFye2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtY2FsZW5kYXItYm9keXtmb250LXNpemU6MTNweH0ubWF0LWNhbGVuZGFyLWJvZHktbGFiZWwsLm1hdC1jYWxlbmRhci1wZXJpb2QtYnV0dG9ue2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlciB0aHtmb250LXNpemU6MTFweDtmb250LXdlaWdodDo0MDB9Lm1hdC1kaWFsb2ctdGl0bGV7Zm9udDo1MDAgMjBweC8zMnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbH0ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJ7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjE1cHg7Zm9udC13ZWlnaHQ6NDAwfS5tYXQtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnR7Zm9udDo0MDAgMTRweC8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbH0ubWF0LWZvcm0tZmllbGR7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC13ZWlnaHQ6NDAwO2xpbmUtaGVpZ2h0OjEuMTI1O2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbH0ubWF0LWZvcm0tZmllbGQtd3JhcHBlcntwYWRkaW5nLWJvdHRvbToxLjM0Mzc1ZW19Lm1hdC1mb3JtLWZpZWxkLXByZWZpeCAubWF0LWljb24sLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCAubWF0LWljb257Zm9udC1zaXplOjE1MCU7bGluZS1oZWlnaHQ6MS4xMjV9Lm1hdC1mb3JtLWZpZWxkLXByZWZpeCAubWF0LWljb24tYnV0dG9uLC5tYXQtZm9ybS1maWVsZC1zdWZmaXggLm1hdC1pY29uLWJ1dHRvbntoZWlnaHQ6MS41ZW07d2lkdGg6MS41ZW19Lm1hdC1mb3JtLWZpZWxkLXByZWZpeCAubWF0LWljb24tYnV0dG9uIC5tYXQtaWNvbiwubWF0LWZvcm0tZmllbGQtc3VmZml4IC5tYXQtaWNvbi1idXR0b24gLm1hdC1pY29ue2hlaWdodDoxLjEyNWVtO2xpbmUtaGVpZ2h0OjEuMTI1fS5tYXQtZm9ybS1maWVsZC1pbmZpeHtwYWRkaW5nOi41ZW0gMDtib3JkZXItdG9wOi44NDM3NWVtIHNvbGlkIHRyYW5zcGFyZW50fS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4zNDM3NWVtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzMzMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjM0Mzc0ZW0pIHNjYWxlKDAuNzUpO3dpZHRoOjEzMy4zMzMzNDMzMzMzJX0ubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlcnt0b3A6LTAuODQzNzVlbTtwYWRkaW5nLXRvcDouODQzNzVlbX0ubWF0LWZvcm0tZmllbGQtbGFiZWx7dG9wOjEuMzQzNzVlbX0ubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JvdHRvbToxLjM0Mzc1ZW19Lm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVye2ZvbnQtc2l6ZTo3NSU7bWFyZ2luLXRvcDouNjY2NjY2NjY2N2VtO3RvcDpjYWxjKDEwMCUgLSAxLjc5MTY2NjY2NjdlbSl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC13cmFwcGVye3BhZGRpbmctYm90dG9tOjEuMjVlbX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4e3BhZGRpbmc6LjQzNzVlbSAwfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSgwLjc1KSBwZXJzcGVjdGl2ZSgxMDBweCkgdHJhbnNsYXRlWigwLjAwMXB4KTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjVlbSkgc2NhbGUoMC43NSk7d2lkdGg6MTMzLjMzMzMzMzMzMzMlfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjVlbSkgc2NhbGUoMC43NSkgcGVyc3BlY3RpdmUoMTAwcHgpIHRyYW5zbGF0ZVooMC4wMDEwMXB4KTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjRlbSkgc2NhbGUoMC43NSk7d2lkdGg6MTMzLjMzMzM0MzMzMzMlfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSgwLjc1KSBwZXJzcGVjdGl2ZSgxMDBweCkgdHJhbnNsYXRlWigwLjAwMTAycHgpOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyM2VtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzUzMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0b3A6MS4yODEyNWVtfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JvdHRvbToxLjI1ZW19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlcnttYXJnaW4tdG9wOi41NDE2NjY2NjY3ZW07dG9wOmNhbGMoMTAwJSAtIDEuNjY2NjY2NjY2N2VtKX1AbWVkaWEgcHJpbnR7Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTIyZW0pIHNjYWxlKDAuNzUpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjFlbSkgc2NhbGUoMC43NSl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTJlbSkgc2NhbGUoMC43NSl9fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWluZml4e3BhZGRpbmc6LjI1ZW0gMCAuNzVlbSAwfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RvcDoxLjA5Mzc1ZW07bWFyZ2luLXRvcDotMC41ZW19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cysubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTAuNTkzNzVlbSkgc2NhbGUoMC43NSk7d2lkdGg6MTMzLjMzMzMzMzMzMzMlfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTAuNTkzNzRlbSkgc2NhbGUoMC43NSk7d2lkdGg6MTMzLjMzMzM0MzMzMzMlfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWluZml4e3BhZGRpbmc6MWVtIDAgMWVtIDB9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtbGFiZWx7dG9wOjEuODQzNzVlbTttYXJnaW4tdG9wOi0wLjI1ZW19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cysubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuNTkzNzVlbSkgc2NhbGUoMC43NSk7d2lkdGg6MTMzLjMzMzMzMzMzMzMlfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuNTkzNzRlbSkgc2NhbGUoMC43NSk7d2lkdGg6MTMzLjMzMzM0MzMzMzMlfS5tYXQtZ3JpZC10aWxlLWhlYWRlciwubWF0LWdyaWQtdGlsZS1mb290ZXJ7Zm9udC1zaXplOjE0cHh9Lm1hdC1ncmlkLXRpbGUtaGVhZGVyIC5tYXQtbGluZSwubWF0LWdyaWQtdGlsZS1mb290ZXIgLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWdyaWQtdGlsZS1oZWFkZXIgLm1hdC1saW5lOm50aC1jaGlsZChuKzIpLC5tYXQtZ3JpZC10aWxlLWZvb3RlciAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMil7Zm9udC1zaXplOjEycHh9aW5wdXQubWF0LWlucHV0LWVsZW1lbnR7bWFyZ2luLXRvcDotMC4wNjI1ZW19Lm1hdC1tZW51LWl0ZW17Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NDAwfS5tYXQtcGFnaW5hdG9yLC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2Vye2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4fS5tYXQtcmFkaW8tYnV0dG9ue2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtc2VsZWN0e2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtc2VsZWN0LXRyaWdnZXJ7aGVpZ2h0OjEuMTI1ZW19Lm1hdC1zbGlkZS10b2dnbGUtY29udGVudHtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0e2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LXN0ZXBwZXItdmVydGljYWwsLm1hdC1zdGVwcGVyLWhvcml6b250YWx7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1zdGVwLWxhYmVse2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjQwMH0ubWF0LXN0ZXAtc3ViLWxhYmVsLWVycm9ye2ZvbnQtd2VpZ2h0Om5vcm1hbH0ubWF0LXN0ZXAtbGFiZWwtZXJyb3J7Zm9udC1zaXplOjE0cHh9Lm1hdC1zdGVwLWxhYmVsLXNlbGVjdGVke2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LXRhYi1ncm91cHtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1saW5re2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LXRvb2xiYXIsLm1hdC10b29sYmFyIGgxLC5tYXQtdG9vbGJhciBoMiwubWF0LXRvb2xiYXIgaDMsLm1hdC10b29sYmFyIGg0LC5tYXQtdG9vbGJhciBoNSwubWF0LXRvb2xiYXIgaDZ7Zm9udDo1MDAgMjBweC8zMnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbDttYXJnaW46MH0ubWF0LXRvb2x0aXB7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEwcHg7cGFkZGluZy10b3A6NnB4O3BhZGRpbmctYm90dG9tOjZweH0ubWF0LXRvb2x0aXAtaGFuZHNldHtmb250LXNpemU6MTRweDtwYWRkaW5nLXRvcDo4cHg7cGFkZGluZy1ib3R0b206OHB4fS5tYXQtbGlzdC1pdGVte2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtbGlzdC1vcHRpb257Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW17Zm9udC1zaXplOjE2cHh9Lm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMil7Zm9udC1zaXplOjE0cHh9Lm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbntmb250LXNpemU6MTZweH0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZXt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbiAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMil7Zm9udC1zaXplOjE0cHh9Lm1hdC1saXN0LWJhc2UgLm1hdC1zdWJoZWFkZXJ7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3QtaXRlbXtmb250LXNpemU6MTJweH0ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpe2ZvbnQtc2l6ZToxMnB4fS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3Qtb3B0aW9ue2ZvbnQtc2l6ZToxMnB4fS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZXt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpe2ZvbnQtc2l6ZToxMnB4fS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LXN1YmhlYWRlcntmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTJweDtmb250LXdlaWdodDo1MDB9Lm1hdC1vcHRpb257Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjE2cHh9Lm1hdC1vcHRncm91cC1sYWJlbHtmb250OjUwMCAxNHB4LzI0cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsfS5tYXQtc2ltcGxlLXNuYWNrYmFye2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4fS5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbntsaW5lLWhlaWdodDoxO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtdHJlZXtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LXRyZWUtbm9kZSwubWF0LW5lc3RlZC10cmVlLW5vZGV7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc2l6ZToxNHB4fS5tYXQtcmlwcGxle292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZX0ubWF0LXJpcHBsZTpub3QoOmVtcHR5KXt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX0ubWF0LXJpcHBsZS5tYXQtcmlwcGxlLXVuYm91bmRlZHtvdmVyZmxvdzp2aXNpYmxlfS5tYXQtcmlwcGxlLWVsZW1lbnR7cG9zaXRpb246YWJzb2x1dGU7Ym9yZGVyLXJhZGl1czo1MCU7cG9pbnRlci1ldmVudHM6bm9uZTt0cmFuc2l0aW9uOm9wYWNpdHksdHJhbnNmb3JtIDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTt0cmFuc2Zvcm06c2NhbGUoMCl9LmNkay1oaWdoLWNvbnRyYXN0LWFjdGl2ZSAubWF0LXJpcHBsZS1lbGVtZW50e2Rpc3BsYXk6bm9uZX0uY2RrLXZpc3VhbGx5LWhpZGRlbntib3JkZXI6MDtjbGlwOnJlY3QoMCAwIDAgMCk7aGVpZ2h0OjFweDttYXJnaW46LTFweDtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzowO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjFweDtvdXRsaW5lOjA7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmV9LmNkay1vdmVybGF5LWNvbnRhaW5lciwuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXJ7cG9pbnRlci1ldmVudHM6bm9uZTt0b3A6MDtsZWZ0OjA7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJX0uY2RrLW92ZXJsYXktY29udGFpbmVye3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6MTAwMH0uY2RrLW92ZXJsYXktY29udGFpbmVyOmVtcHR5e2Rpc3BsYXk6bm9uZX0uY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXJ7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTAwMH0uY2RrLW92ZXJsYXktcGFuZXtwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czphdXRvO2JveC1zaXppbmc6Ym9yZGVyLWJveDt6LWluZGV4OjEwMDA7ZGlzcGxheTpmbGV4O21heC13aWR0aDoxMDAlO21heC1oZWlnaHQ6MTAwJX0uY2RrLW92ZXJsYXktYmFja2Ryb3B7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7ei1pbmRleDoxMDAwO3BvaW50ZXItZXZlbnRzOmF1dG87LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50O3RyYW5zaXRpb246b3BhY2l0eSA0MDBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtvcGFjaXR5OjB9LmNkay1vdmVybGF5LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmd7b3BhY2l0eToxfUBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKXsuY2RrLW92ZXJsYXktYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZ3tvcGFjaXR5Oi42fX0uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcHtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjMyKX0uY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AsLmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmd7b3BhY2l0eTowfS5jZGstb3ZlcmxheS1jb25uZWN0ZWQtcG9zaXRpb24tYm91bmRpbmctYm94e3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTAwMDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO21pbi13aWR0aDoxcHg7bWluLWhlaWdodDoxcHh9LmNkay1nbG9iYWwtc2Nyb2xsYmxvY2t7cG9zaXRpb246Zml4ZWQ7d2lkdGg6MTAwJTtvdmVyZmxvdy15OnNjcm9sbH1Aa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0ey8qISovfUBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5key8qISovfS5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6LXdlYmtpdC1hdXRvZmlsbHthbmltYXRpb246Y2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQgMHMgMW1zfS5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6bm90KDotd2Via2l0LWF1dG9maWxsKXthbmltYXRpb246Y2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kIDBzIDFtc310ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemV7cmVzaXplOm5vbmV9dGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZ3twYWRkaW5nOjJweCAwICFpbXBvcnRhbnQ7Ym94LXNpemluZzpjb250ZW50LWJveCAhaW1wb3J0YW50O2hlaWdodDphdXRvICFpbXBvcnRhbnQ7b3ZlcmZsb3c6aGlkZGVuICFpbXBvcnRhbnR9dGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZy1maXJlZm94e3BhZGRpbmc6MnB4IDAgIWltcG9ydGFudDtib3gtc2l6aW5nOmNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7aGVpZ2h0OjAgIWltcG9ydGFudH0ubWF0LWZvY3VzLWluZGljYXRvcntwb3NpdGlvbjpyZWxhdGl2ZX0ubWF0LW1kYy1mb2N1cy1pbmRpY2F0b3J7cG9zaXRpb246cmVsYXRpdmV9Lm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEpfS5tYXQtb3B0aW9ue2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LW9wdGlvbjpob3Zlcjpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpLC5tYXQtb3B0aW9uOmZvY3VzOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSk6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA0KX0ubWF0LW9wdGlvbi5tYXQtYWN0aXZle2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDQpO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LW9wdGlvbi5tYXQtb3B0aW9uLWRpc2FibGVke2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXByaW1hcnkgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7Y29sb3I6IzY3M2FiN30ubWF0LWFjY2VudCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKXtjb2xvcjojZmZkNzQwfS5tYXQtd2FybiAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKXtjb2xvcjojZjQ0MzM2fS5tYXQtb3B0Z3JvdXAtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtb3B0Z3JvdXAtZGlzYWJsZWQgLm1hdC1vcHRncm91cC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1wc2V1ZG8tY2hlY2tib3h7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtcHNldWRvLWNoZWNrYm94OjphZnRlcntjb2xvcjojZmFmYWZhfS5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVke2NvbG9yOiNiMGIwYjB9Lm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsLm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGV7YmFja2dyb3VuZDojNjczYWI3fS5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSwubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLC5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGV7YmFja2dyb3VuZDojZmZkNzQwfS5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLC5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRle2JhY2tncm91bmQ6I2Y0NDMzNn0ubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWQsLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVke2JhY2tncm91bmQ6I2IwYjBiMH0ubWF0LWFwcC1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6I2ZhZmFmYTtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1lbGV2YXRpb24tejB7Ym94LXNoYWRvdzowcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoxe2JveC1zaGFkb3c6MHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejJ7Ym94LXNoYWRvdzowcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16M3tib3gtc2hhZG93OjBweCAzcHggM3B4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAzcHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXo0e2JveC1zaGFkb3c6MHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXo1e2JveC1zaGFkb3c6MHB4IDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDVweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAxNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXo2e2JveC1zaGFkb3c6MHB4IDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggMThweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16N3tib3gtc2hhZG93OjBweCA0cHggNXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA3cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMnB4IDE2cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejh7Ym94LXNoYWRvdzowcHggNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXo5e2JveC1zaGFkb3c6MHB4IDVweCA2cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDlweCAxMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAzcHggMTZweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTB7Ym94LXNoYWRvdzowcHggNnB4IDZweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTBweCAxNHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA0cHggMThweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTF7Ym94LXNoYWRvdzowcHggNnB4IDdweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTFweCAxNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA0cHggMjBweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTJ7Ym94LXNoYWRvdzowcHggN3B4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTJweCAxN3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA1cHggMjJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTN7Ym94LXNoYWRvdzowcHggN3B4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTNweCAxOXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA1cHggMjRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTR7Ym94LXNoYWRvdzowcHggN3B4IDlweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTRweCAyMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA1cHggMjZweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTV7Ym94LXNoYWRvdzowcHggOHB4IDlweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTVweCAyMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA2cHggMjhweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTZ7Ym94LXNoYWRvdzowcHggOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDE2cHggMjRweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggNnB4IDMwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejE3e2JveC1zaGFkb3c6MHB4IDhweCAxMXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxN3B4IDI2cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDZweCAzMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoxOHtib3gtc2hhZG93OjBweCA5cHggMTFweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMThweCAyOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA3cHggMzRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTl7Ym94LXNoYWRvdzowcHggOXB4IDEycHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDE5cHggMjlweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggN3B4IDM2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejIwe2JveC1zaGFkb3c6MHB4IDEwcHggMTNweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMjBweCAzMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA4cHggMzhweCA3cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MjF7Ym94LXNoYWRvdzowcHggMTBweCAxM3B4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAyMXB4IDMzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDhweCA0MHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoyMntib3gtc2hhZG93OjBweCAxMHB4IDE0cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDIycHggMzVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggOHB4IDQycHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejIze2JveC1zaGFkb3c6MHB4IDExcHggMTRweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMjNweCAzNnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA5cHggNDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MjR7Ym94LXNoYWRvdzowcHggMTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtdGhlbWUtbG9hZGVkLW1hcmtlcntkaXNwbGF5Om5vbmV9Lm1hdC1hdXRvY29tcGxldGUtcGFuZWx7YmFja2dyb3VuZDojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWF1dG9jb21wbGV0ZS1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA0cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtYWN0aXZlKTpub3QoOmhvdmVyKXtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LWFjdGl2ZSk6bm90KDpob3Zlcik6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1iYWRnZS1jb250ZW50e2NvbG9yOiNmZmY7YmFja2dyb3VuZDojNjczYWI3fS5jZGstaGlnaC1jb250cmFzdC1hY3RpdmUgLm1hdC1iYWRnZS1jb250ZW50e291dGxpbmU6c29saWQgMXB4O2JvcmRlci1yYWRpdXM6MH0ubWF0LWJhZGdlLWFjY2VudCAubWF0LWJhZGdlLWNvbnRlbnR7YmFja2dyb3VuZDojZmZkNzQwO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWJhZGdlLXdhcm4gLm1hdC1iYWRnZS1jb250ZW50e2NvbG9yOiNmZmY7YmFja2dyb3VuZDojZjQ0MzM2fS5tYXQtYmFkZ2V7cG9zaXRpb246cmVsYXRpdmV9Lm1hdC1iYWRnZS1oaWRkZW4gLm1hdC1iYWRnZS1jb250ZW50e2Rpc3BsYXk6bm9uZX0ubWF0LWJhZGdlLWRpc2FibGVkIC5tYXQtYmFkZ2UtY29udGVudHtiYWNrZ3JvdW5kOiNiOWI5Yjk7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtYmFkZ2UtY29udGVudHtwb3NpdGlvbjphYnNvbHV0ZTt0ZXh0LWFsaWduOmNlbnRlcjtkaXNwbGF5OmlubGluZS1ibG9jaztib3JkZXItcmFkaXVzOjUwJTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDt0cmFuc2Zvcm06c2NhbGUoMC42KTtvdmVyZmxvdzpoaWRkZW47d2hpdGUtc3BhY2U6bm93cmFwO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7cG9pbnRlci1ldmVudHM6bm9uZX0ubmctYW5pbWF0ZS1kaXNhYmxlZCAubWF0LWJhZGdlLWNvbnRlbnQsLm1hdC1iYWRnZS1jb250ZW50Ll9tYXQtYW5pbWF0aW9uLW5vb3BhYmxle3RyYW5zaXRpb246bm9uZX0ubWF0LWJhZGdlLWNvbnRlbnQubWF0LWJhZGdlLWFjdGl2ZXt0cmFuc2Zvcm06bm9uZX0ubWF0LWJhZGdlLXNtYWxsIC5tYXQtYmFkZ2UtY29udGVudHt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O2xpbmUtaGVpZ2h0OjE2cHh9Lm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYWJvdmUgLm1hdC1iYWRnZS1jb250ZW50e3RvcDotOHB4fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWJlbG93IC5tYXQtYmFkZ2UtY29udGVudHtib3R0b206LThweH0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LTE2cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi0xNnB4fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDotMTZweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotMTZweH0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LThweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LThweH0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6LThweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotOHB4fS5tYXQtYmFkZ2UtbWVkaXVtIC5tYXQtYmFkZ2UtY29udGVudHt3aWR0aDoyMnB4O2hlaWdodDoyMnB4O2xpbmUtaGVpZ2h0OjIycHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWFib3ZlIC5tYXQtYmFkZ2UtY29udGVudHt0b3A6LTExcHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWJlbG93IC5tYXQtYmFkZ2UtY29udGVudHtib3R0b206LTExcHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotMjJweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi0yMnB4fS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6LTIycHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi0yMnB4fS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LTExcHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6YXV0bztyaWdodDotMTFweH0ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi0xMXB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotMTFweH0ubWF0LWJhZGdlLWxhcmdlIC5tYXQtYmFkZ2UtY29udGVudHt3aWR0aDoyOHB4O2hlaWdodDoyOHB4O2xpbmUtaGVpZ2h0OjI4cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYWJvdmUgLm1hdC1iYWRnZS1jb250ZW50e3RvcDotMTRweH0ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1iZWxvdyAubWF0LWJhZGdlLWNvbnRlbnR7Ym90dG9tOi0xNHB4fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotMjhweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LTI4cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi0yOHB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi0yOHB4fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotMTRweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LTE0cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi0xNHB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi0xNHB4fS5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lcntib3gtc2hhZG93OjBweCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTZweCAyNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtYnV0dG9uLC5tYXQtaWNvbi1idXR0b24sLm1hdC1zdHJva2VkLWJ1dHRvbntjb2xvcjppbmhlcml0O2JhY2tncm91bmQ6dHJhbnNwYXJlbnR9Lm1hdC1idXR0b24ubWF0LXByaW1hcnksLm1hdC1pY29uLWJ1dHRvbi5tYXQtcHJpbWFyeSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1wcmltYXJ5e2NvbG9yOiM2NzNhYjd9Lm1hdC1idXR0b24ubWF0LWFjY2VudCwubWF0LWljb24tYnV0dG9uLm1hdC1hY2NlbnQsLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYWNjZW50e2NvbG9yOiNmZmQ3NDB9Lm1hdC1idXR0b24ubWF0LXdhcm4sLm1hdC1pY29uLWJ1dHRvbi5tYXQtd2FybiwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC13YXJue2NvbG9yOiNmNDQzMzZ9Lm1hdC1idXR0b24ubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1idXR0b24ubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1pY29uLWJ1dHRvbi5tYXQtcHJpbWFyeS5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtaWNvbi1idXR0b24ubWF0LWFjY2VudC5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtaWNvbi1idXR0b24ubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LWljb24tYnV0dG9uLm1hdC1idXR0b24tZGlzYWJsZWQubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1wcmltYXJ5Lm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtd2Fybi5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LWJ1dHRvbi1kaXNhYmxlZC5tYXQtYnV0dG9uLWRpc2FibGVke2NvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtaWNvbi1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3fS5tYXQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LWljb24tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmQ3NDB9Lm1hdC1idXR0b24ubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LWljb24tYnV0dG9uLm1hdC13YXJuIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1pY29uLWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ubWF0LWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtaWNvbi1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXN0cm9rZWQtYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnR7b3BhY2l0eTouMTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcn0ubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQ6IzAwMH0ubWF0LXN0cm9rZWQtYnV0dG9uOm5vdCgubWF0LWJ1dHRvbi1kaXNhYmxlZCl7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWZsYXQtYnV0dG9uLC5tYXQtcmFpc2VkLWJ1dHRvbiwubWF0LWZhYiwubWF0LW1pbmktZmFie2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeSwubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnksLm1hdC1mYWIubWF0LXByaW1hcnksLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeXtjb2xvcjojZmZmfS5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudCwubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudCwubWF0LWZhYi5tYXQtYWNjZW50LC5tYXQtbWluaS1mYWIubWF0LWFjY2VudHtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybiwubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm4sLm1hdC1mYWIubWF0LXdhcm4sLm1hdC1taW5pLWZhYi5tYXQtd2Fybntjb2xvcjojZmZmfS5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuLm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5Lm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnQubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LXJhaXNlZC1idXR0b24ubWF0LWJ1dHRvbi1kaXNhYmxlZC5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtZmFiLm1hdC1wcmltYXJ5Lm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1mYWIubWF0LWFjY2VudC5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtZmFiLm1hdC13YXJuLm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1mYWIubWF0LWJ1dHRvbi1kaXNhYmxlZC5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LW1pbmktZmFiLm1hdC1hY2NlbnQubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LW1pbmktZmFiLm1hdC13YXJuLm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1taW5pLWZhYi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWR7Y29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnksLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5LC5tYXQtZmFiLm1hdC1wcmltYXJ5LC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3fS5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudCwubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudCwubWF0LWZhYi5tYXQtYWNjZW50LC5tYXQtbWluaS1mYWIubWF0LWFjY2VudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmQ3NDB9Lm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybiwubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm4sLm1hdC1mYWIubWF0LXdhcm4sLm1hdC1taW5pLWZhYi5tYXQtd2FybntiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeS5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudC5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LWZsYXQtYnV0dG9uLm1hdC1idXR0b24tZGlzYWJsZWQubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudC5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2Fybi5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1mYWIubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LWZhYi5tYXQtYWNjZW50Lm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1mYWIubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LWZhYi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeS5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtbWluaS1mYWIubWF0LWFjY2VudC5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtbWluaS1mYWIubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LW1pbmktZmFiLm1hdC1idXR0b24tZGlzYWJsZWQubWF0LWJ1dHRvbi1kaXNhYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1mYWIubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0ubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtZmFiLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LW1pbmktZmFiLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEpfS5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWZhYi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtbWluaS1mYWIubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEpfS5tYXQtc3Ryb2tlZC1idXR0b246bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksLm1hdC1mbGF0LWJ1dHRvbjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1yYWlzZWQtYnV0dG9uOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1yYWlzZWQtYnV0dG9uOm5vdCgubWF0LWJ1dHRvbi1kaXNhYmxlZCk6YWN0aXZlOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LXJhaXNlZC1idXR0b24ubWF0LWJ1dHRvbi1kaXNhYmxlZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1mYWI6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksLm1hdC1taW5pLWZhYjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA2cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1mYWI6bm90KC5tYXQtYnV0dG9uLWRpc2FibGVkKTphY3RpdmU6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksLm1hdC1taW5pLWZhYjpub3QoLm1hdC1idXR0b24tZGlzYWJsZWQpOmFjdGl2ZTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCA3cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxMnB4IDE3cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDVweCAyMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZmFiLm1hdC1idXR0b24tZGlzYWJsZWQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksLm1hdC1taW5pLWZhYi5tYXQtYnV0dG9uLWRpc2FibGVkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZSwubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXB7Ym94LXNoYWRvdzowcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkLC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJke2JveC1zaGFkb3c6bm9uZX0ubWF0LWJ1dHRvbi10b2dnbGV7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtYnV0dG9uLXRvZ2dsZSAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZHtjb2xvcjpyZ2JhKDAsMCwwLC44Nyk7YmFja2dyb3VuZDojZmZmfS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZS1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6IzAwMH0ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUrLm1hdC1idXR0b24tdG9nZ2xle2JvcmRlci1sZWZ0OnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMil9W2Rpcj1ydGxdIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSsubWF0LWJ1dHRvbi10b2dnbGV7Ym9yZGVyLWxlZnQ6bm9uZTtib3JkZXItcmlnaHQ6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZC5tYXQtYnV0dG9uLXRvZ2dsZS12ZXJ0aWNhbCAubWF0LWJ1dHRvbi10b2dnbGUrLm1hdC1idXR0b24tdG9nZ2xle2JvcmRlci1sZWZ0Om5vbmU7Ym9yZGVyLXJpZ2h0Om5vbmU7Ym9yZGVyLXRvcDpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2Vke2JhY2tncm91bmQtY29sb3I6I2UwZTBlMDtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZHtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1idXR0b24tdG9nZ2xlLWRpc2FibGVke2NvbG9yOnJnYmEoMCwwLDAsLjI2KTtiYWNrZ3JvdW5kLWNvbG9yOiNlZWV9Lm1hdC1idXR0b24tdG9nZ2xlLWRpc2FibGVkLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmR7YmFja2dyb3VuZDojZmZmfS5tYXQtYnV0dG9uLXRvZ2dsZS1kaXNhYmxlZC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2Vke2JhY2tncm91bmQtY29sb3I6I2JkYmRiZH0ubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkLC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJke2JvcmRlcjpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZS1sYWJlbC1jb250ZW50e2xpbmUtaGVpZ2h0OjQ4cHh9Lm1hdC1jYXJke2JhY2tncm91bmQ6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1jYXJkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1jYXJkLm1hdC1jYXJkLWZsYXQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtY2FyZC1zdWJ0aXRsZXtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1jaGVja2JveC1mcmFtZXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtY2hlY2tib3gtY2hlY2ttYXJre2ZpbGw6I2ZhZmFmYX0ubWF0LWNoZWNrYm94LWNoZWNrbWFyay1wYXRoe3N0cm9rZTojZmFmYWZhICFpbXBvcnRhbnR9Lm1hdC1jaGVja2JveC1taXhlZG1hcmt7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhfS5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiM2NzNhYjd9Lm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmQ3NDB9Lm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LXdhcm4gLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LWNoZWNrYm94LWRpc2FibGVkLm1hdC1jaGVja2JveC1jaGVja2VkIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwubWF0LWNoZWNrYm94LWRpc2FibGVkLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiNiMGIwYjB9Lm1hdC1jaGVja2JveC1kaXNhYmxlZDpub3QoLm1hdC1jaGVja2JveC1jaGVja2VkKSAubWF0LWNoZWNrYm94LWZyYW1le2JvcmRlci1jb2xvcjojYjBiMGIwfS5tYXQtY2hlY2tib3gtZGlzYWJsZWQgLm1hdC1jaGVja2JveC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1jaGVja2JveCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6IzAwMH0ubWF0LWNoZWNrYm94LWNoZWNrZWQ6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1jaGVja2JveDphY3RpdmU6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZDojNjczYWI3fS5tYXQtY2hlY2tib3gtY2hlY2tlZDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtY2hlY2tib3g6YWN0aXZlOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZDojZmZkNzQwfS5tYXQtY2hlY2tib3gtY2hlY2tlZDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWNoZWNrYm94OmFjdGl2ZTpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kOiNmNDQzMzZ9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwe2JhY2tncm91bmQtY29sb3I6I2UwZTBlMDtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwIC5tYXQtY2hpcC1yZW1vdmV7Y29sb3I6cmdiYSgwLDAsMCwuODcpO29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwOm5vdCgubWF0LWNoaXAtZGlzYWJsZWQpOmFjdGl2ZXtib3gtc2hhZG93OjBweCAzcHggM3B4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAzcHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcDpub3QoLm1hdC1jaGlwLWRpc2FibGVkKSAubWF0LWNoaXAtcmVtb3ZlOmhvdmVye29wYWNpdHk6LjU0fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1kaXNhYmxlZHtvcGFjaXR5Oi40fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcDo6YWZ0ZXJ7YmFja2dyb3VuZDojMDAwfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtcHJpbWFyeXtiYWNrZ3JvdW5kLWNvbG9yOiM2NzNhYjc7Y29sb3I6I2ZmZn0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXByaW1hcnkgLm1hdC1jaGlwLXJlbW92ZXtjb2xvcjojZmZmO29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXdhcm57YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2O2NvbG9yOiNmZmZ9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC13YXJuIC5tYXQtY2hpcC1yZW1vdmV7Y29sb3I6I2ZmZjtvcGFjaXR5Oi40fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMSl9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1hY2NlbnR7YmFja2dyb3VuZC1jb2xvcjojZmZkNzQwO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LWFjY2VudCAubWF0LWNoaXAtcmVtb3Zle2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtvcGFjaXR5Oi40fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xKX0ubWF0LXRhYmxle2JhY2tncm91bmQ6I2ZmZn0ubWF0LXRhYmxlIHRoZWFkLC5tYXQtdGFibGUgdGJvZHksLm1hdC10YWJsZSB0Zm9vdCxtYXQtaGVhZGVyLXJvdyxtYXQtcm93LG1hdC1mb290ZXItcm93LFttYXQtaGVhZGVyLXJvd10sW21hdC1yb3ddLFttYXQtZm9vdGVyLXJvd10sLm1hdC10YWJsZS1zdGlja3l7YmFja2dyb3VuZDppbmhlcml0fW1hdC1yb3csbWF0LWhlYWRlci1yb3csbWF0LWZvb3Rlci1yb3csdGgubWF0LWhlYWRlci1jZWxsLHRkLm1hdC1jZWxsLHRkLm1hdC1mb290ZXItY2VsbHtib3JkZXItYm90dG9tLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWhlYWRlci1jZWxse2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWNlbGwsLm1hdC1mb290ZXItY2VsbHtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1jYWxlbmRhci1hcnJvd3tib3JkZXItdG9wLWNvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWRhdGVwaWNrZXItdG9nZ2xlLC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItbmV4dC1idXR0b24sLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhci1wcmV2aW91cy1idXR0b257Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVye2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlci1kaXZpZGVyOjphZnRlcntiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWNhbGVuZGFyLWJvZHktbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQsLm1hdC1kYXRlLXJhbmdlLWlucHV0LXNlcGFyYXRvcntjb2xvcjpyZ2JhKDAsMCwwLC44Nyk7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50fS5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZD4ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwpe2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1kYXRlLXJhbmdlLWlucHV0LXNlcGFyYXRvcntjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1jYWxlbmRhci1ib2R5LWNlbGw6bm90KC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCk6aG92ZXI+Lm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsKSwuY2RrLWtleWJvYXJkLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZT4ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwpLC5jZGstcHJvZ3JhbS1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmU+Lm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjA0KX0ubWF0LWNhbGVuZGFyLWJvZHktaW4tcHJldmlld3tjb2xvcjpyZ2JhKDAsMCwwLC4yNCl9Lm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwpe2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsKXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMTgpfS5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZTo6YmVmb3Jle2JhY2tncm91bmQ6cmdiYSgxMDMsNTgsMTgzLC4yKX0ubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwsLm1hdC1jYWxlbmRhci1ib2R5LWluLWNvbXBhcmlzb24tcmFuZ2U6OmJlZm9yZXtiYWNrZ3JvdW5kOnJnYmEoMjQ5LDE3MSwwLC4yKX0ubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2Utc3RhcnQ6OmJlZm9yZSxbZGlyPXJ0bF0gLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLWVuZDo6YmVmb3Jle2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDEwMywgNTgsIDE4MywgMC4yKSA1MCUsIHJnYmEoMjQ5LCAxNzEsIDAsIDAuMikgNTAlKX0ubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2UtZW5kOjpiZWZvcmUsW2Rpcj1ydGxdIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1zdGFydDo6YmVmb3Jle2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMTAzLCA1OCwgMTgzLCAwLjIpIDUwJSwgcmdiYSgyNDksIDE3MSwgMCwgMC4yKSA1MCUpfS5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZT4ubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwsLm1hdC1jYWxlbmRhci1ib2R5LWluLWNvbXBhcmlzb24tcmFuZ2UubWF0LWNhbGVuZGFyLWJvZHktaW4tcmFuZ2U6OmFmdGVye2JhY2tncm91bmQ6I2E4ZGFiNX0ubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQsLm1hdC1jYWxlbmRhci1ib2R5LWluLWNvbXBhcmlzb24tcmFuZ2U+Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQ6IzQ2YTM1ZX0ubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3O2NvbG9yOiNmZmZ9Lm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTAzLDU4LDE4MywuNCl9Lm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4ICNmZmZ9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnR7Ym94LXNoYWRvdzowcHggMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZTo6YmVmb3Jle2JhY2tncm91bmQ6cmdiYSgyNTUsMjE1LDY0LC4yKX0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCwubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1pbi1jb21wYXJpc29uLXJhbmdlOjpiZWZvcmV7YmFja2dyb3VuZDpyZ2JhKDI0OSwxNzEsMCwuMil9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2Utc3RhcnQ6OmJlZm9yZSwubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IFtkaXI9cnRsXSAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2UtZW5kOjpiZWZvcmV7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjU1LCAyMTUsIDY0LCAwLjIpIDUwJSwgcmdiYSgyNDksIDE3MSwgMCwgMC4yKSA1MCUpfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLWVuZDo6YmVmb3JlLC5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgW2Rpcj1ydGxdIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1zdGFydDo6YmVmb3Jle2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMjU1LCAyMTUsIDY0LCAwLjIpIDUwJSwgcmdiYSgyNDksIDE3MSwgMCwgMC4yKSA1MCUpfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LWluLXJhbmdlPi5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCwubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1pbi1jb21wYXJpc29uLXJhbmdlLm1hdC1jYWxlbmRhci1ib2R5LWluLXJhbmdlOjphZnRlcntiYWNrZ3JvdW5kOiNhOGRhYjV9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQsLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktaW4tY29tcGFyaXNvbi1yYW5nZT4ubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZDojNDZhMzVlfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6I2ZmZDc0MDtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjE1LDY0LC40KX0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCByZ2JhKDAsMCwwLC44Nyl9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LWluLXJhbmdlOjpiZWZvcmV7YmFja2dyb3VuZDpyZ2JhKDI0NCw2Nyw1NCwuMil9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsLC5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1pbi1jb21wYXJpc29uLXJhbmdlOjpiZWZvcmV7YmFja2dyb3VuZDpyZ2JhKDI0OSwxNzEsMCwuMil9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLXN0YXJ0OjpiZWZvcmUsLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gW2Rpcj1ydGxdIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1lbmQ6OmJlZm9yZXtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNDQsIDY3LCA1NCwgMC4yKSA1MCUsIHJnYmEoMjQ5LCAxNzEsIDAsIDAuMikgNTAlKX0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2UtZW5kOjpiZWZvcmUsLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gW2Rpcj1ydGxdIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1zdGFydDo6YmVmb3Jle2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMjQ0LCA2NywgNTQsIDAuMikgNTAlLCByZ2JhKDI0OSwgMTcxLCAwLCAwLjIpIDUwJSl9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LWluLXJhbmdlPi5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCwubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktaW4tY29tcGFyaXNvbi1yYW5nZS5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZTo6YWZ0ZXJ7YmFja2dyb3VuZDojYThkYWI1fS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCwubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktaW4tY29tcGFyaXNvbi1yYW5nZT4ubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZDojNDZhMzVlfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzY7Y29sb3I6I2ZmZn0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDQsNjcsNTQsLjQpfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCAjZmZmfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50LXRvdWNoe2JveC1zaGFkb3c6MHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZXtjb2xvcjojNjczYWI3fS5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZlLm1hdC1hY2NlbnR7Y29sb3I6I2ZmZDc0MH0ubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZS5tYXQtd2Fybntjb2xvcjojZjQ0MzM2fS5tYXQtZGF0ZS1yYW5nZS1pbnB1dC1pbm5lcltkaXNhYmxlZF17Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtZGlhbG9nLWNvbnRhaW5lcntib3gtc2hhZG93OjBweCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggOXB4IDQ2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7YmFja2dyb3VuZDojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWRpdmlkZXJ7Ym9yZGVyLXRvcC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1kaXZpZGVyLXZlcnRpY2Fse2JvcmRlci1yaWdodC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1leHBhbnNpb24tcGFuZWx7YmFja2dyb3VuZDojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtYWN0aW9uLXJvd3tib3JkZXItdG9wLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWV4cGFuc2lvbi1wYW5lbCAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKSwubWF0LWV4cGFuc2lvbi1wYW5lbCAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pLC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXI6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA0KX1AbWVkaWEoaG92ZXI6IG5vbmUpey5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKTpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3ZlcntiYWNrZ3JvdW5kOiNmZmZ9fS5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uLC5tYXQtZXhwYW5zaW9uLWluZGljYXRvcjo6YWZ0ZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclthcmlhLWRpc2FibGVkPXRydWVde2NvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD10cnVlXSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9ue2NvbG9yOmluaGVyaXR9Lm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVye2hlaWdodDo0OHB4fS5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5tYXQtZXhwYW5kZWR7aGVpZ2h0OjY0cHh9Lm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjYpfS5tYXQtaGludHtjb2xvcjpyZ2JhKDAsMCwwLC42KX0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOiM2NzNhYjd9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbC5tYXQtYWNjZW50e2NvbG9yOiNmZmQ3NDB9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbC5tYXQtd2Fybntjb2xvcjojZjQ0MzM2fS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2Vye2NvbG9yOiNmZmQ3NDB9Lm1hdC1mb3JtLWZpZWxkLXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOiM2NzNhYjd9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LWFjY2VudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmQ3NDB9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LXdhcm57YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb2N1c2VkOm5vdCgubWF0LWZvcm0tZmllbGQtaW52YWxpZCkgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlcntjb2xvcjojNjczYWI3fS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb2N1c2VkOm5vdCgubWF0LWZvcm0tZmllbGQtaW52YWxpZCkubWF0LWFjY2VudCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVye2NvbG9yOiNmZmQ3NDB9Lm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvY3VzZWQ6bm90KC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkKS5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVye2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLm1hdC1hY2NlbnQsLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXJ7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LWFjY2VudHtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1lcnJvcntjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWhpbnR7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNDIpIDAlLCByZ2JhKDAsIDAsIDAsIDAuNDIpIDMzJSwgdHJhbnNwYXJlbnQgMCUpO2JhY2tncm91bmQtc2l6ZTo0cHggMTAwJTtiYWNrZ3JvdW5kLXJlcGVhdDpyZXBlYXQteH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLXN0YW5kYXJkLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC40MikgMCUsIHJnYmEoMCwgMCwgMCwgMC40MikgMzMlLCB0cmFuc3BhcmVudCAwJSk7YmFja2dyb3VuZC1zaXplOjRweCAxMDAlO2JhY2tncm91bmQtcmVwZWF0OnJlcGVhdC14fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWZsZXh7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtZmxleHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjAyKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5le2NvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre2NvbG9yOiM2NzNhYjd9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZC5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre2NvbG9yOiNmZmQ3NDB9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZC5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmV7Y29sb3I6cmdiYSgwLDAsMCwuMDYpfS5tYXQtaWNvbi5tYXQtcHJpbWFyeXtjb2xvcjojNjczYWI3fS5tYXQtaWNvbi5tYXQtYWNjZW50e2NvbG9yOiNmZmQ3NDB9Lm1hdC1pY29uLm1hdC13YXJue2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlcntjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1pbnB1dC1lbGVtZW50OmRpc2FibGVkLC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXJ7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtaW5wdXQtZWxlbWVudHtjYXJldC1jb2xvcjojNjczYWI3fS5tYXQtaW5wdXQtZWxlbWVudDo6cGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtaW5wdXQtZWxlbWVudDo6LW1vei1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1pbnB1dC1lbGVtZW50Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWlucHV0LWVsZW1lbnQ6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWZvcm0tZmllbGQubWF0LWFjY2VudCAubWF0LWlucHV0LWVsZW1lbnR7Y2FyZXQtY29sb3I6I2ZmZDc0MH0ubWF0LWZvcm0tZmllbGQubWF0LXdhcm4gLm1hdC1pbnB1dC1lbGVtZW50LC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtaW5wdXQtZWxlbWVudHtjYXJldC1jb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlcntjb2xvcjojZjQ0MzM2fS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVte2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9ue2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWxpc3QtYmFzZSAubWF0LXN1YmhlYWRlcntjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1saXN0LWl0ZW0tZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojZWVlfS5tYXQtbGlzdC1vcHRpb246aG92ZXIsLm1hdC1saXN0LW9wdGlvbjpmb2N1cywubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtOmhvdmVyLC5tYXQtbmF2LWxpc3QgLm1hdC1saXN0LWl0ZW06Zm9jdXMsLm1hdC1hY3Rpb24tbGlzdCAubWF0LWxpc3QtaXRlbTpob3ZlciwubWF0LWFjdGlvbi1saXN0IC5tYXQtbGlzdC1pdGVtOmZvY3Vze2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDQpfS5tYXQtbGlzdC1zaW5nbGUtc2VsZWN0ZWQtb3B0aW9uLC5tYXQtbGlzdC1zaW5nbGUtc2VsZWN0ZWQtb3B0aW9uOmhvdmVyLC5tYXQtbGlzdC1zaW5nbGUtc2VsZWN0ZWQtb3B0aW9uOmZvY3Vze2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMTIpfS5tYXQtbWVudS1wYW5lbHtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC1tZW51LXBhbmVsOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtbWVudS1pdGVte2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtbWVudS1pdGVtW2Rpc2FibGVkXSwubWF0LW1lbnUtaXRlbVtkaXNhYmxlZF06OmFmdGVye2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LW1lbnUtaXRlbSAubWF0LWljb24tbm8tY29sb3IsLm1hdC1tZW51LWl0ZW0tc3VibWVudS10cmlnZ2VyOjphZnRlcntjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1tZW51LWl0ZW06aG92ZXI6bm90KFtkaXNhYmxlZF0pLC5tYXQtbWVudS1pdGVtLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KFtkaXNhYmxlZF0pLC5tYXQtbWVudS1pdGVtLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdChbZGlzYWJsZWRdKSwubWF0LW1lbnUtaXRlbS1oaWdobGlnaHRlZDpub3QoW2Rpc2FibGVkXSl7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1wYWdpbmF0b3J7YmFja2dyb3VuZDojZmZmfS5tYXQtcGFnaW5hdG9yLC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2Vye2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50e2JvcmRlci10b3A6MnB4IHNvbGlkIHJnYmEoMCwwLDAsLjU0KTtib3JkZXItcmlnaHQ6MnB4IHNvbGlkIHJnYmEoMCwwLDAsLjU0KX0ubWF0LXBhZ2luYXRvci1maXJzdCwubWF0LXBhZ2luYXRvci1sYXN0e2JvcmRlci10b3A6MnB4IHNvbGlkIHJnYmEoMCwwLDAsLjU0KX0ubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50LC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWZpcnN0LC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWxhc3R7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXBhZ2luYXRvci1jb250YWluZXJ7bWluLWhlaWdodDo1NnB4fS5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmR7ZmlsbDojZDFjNGU5fS5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlcntiYWNrZ3JvdW5kLWNvbG9yOiNkMWM0ZTl9Lm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3fS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQgLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZHtmaWxsOiNmZmU1N2Z9Lm1hdC1wcm9ncmVzcy1iYXIubWF0LWFjY2VudCAubWF0LXByb2dyZXNzLWJhci1idWZmZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZlNTdmfS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZkNzQwfS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmR7ZmlsbDojZmZjZGQyfS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmNkZDJ9Lm1hdC1wcm9ncmVzcy1iYXIubWF0LXdhcm4gLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBjaXJjbGUsLm1hdC1zcGlubmVyIGNpcmNsZXtzdHJva2U6IzY3M2FiN30ubWF0LXByb2dyZXNzLXNwaW5uZXIubWF0LWFjY2VudCBjaXJjbGUsLm1hdC1zcGlubmVyLm1hdC1hY2NlbnQgY2lyY2xle3N0cm9rZTojZmZkNzQwfS5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lci5tYXQtd2FybiBjaXJjbGUsLm1hdC1zcGlubmVyLm1hdC13YXJuIGNpcmNsZXtzdHJva2U6I2Y0NDMzNn0ubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xle2JvcmRlci1jb2xvcjojNjczYWI3fS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQ6bm90KC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUpLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnk6YWN0aXZlIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3fS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGV7Ym9yZGVyLWNvbG9yOiNmZmQ3NDB9Lm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQ6bm90KC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUpLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50OmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxle2JhY2tncm91bmQtY29sb3I6I2ZmZDc0MH0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2Fybi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtib3JkZXItY29sb3I6I2Y0NDMzNn0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2FybiAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2FybiAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2Fybi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuOmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxle2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xle2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkIC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkIC5tYXQtcmFkaW8taW5uZXItY2lyY2xle2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLWxhYmVsLWNvbnRlbnR7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtcmFkaW8tYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5tYXQtc2VsZWN0LXZhbHVle2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXNlbGVjdC1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1zZWxlY3QtZGlzYWJsZWQgLm1hdC1zZWxlY3QtdmFsdWV7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtc2VsZWN0LWFycm93e2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LXNlbGVjdC1wYW5lbHtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC1zZWxlY3QtcGFuZWw6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1zZWxlY3QtcGFuZWwgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSl7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1wcmltYXJ5IC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOiM2NzNhYjd9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1hY2NlbnQgLm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6I2ZmZDc0MH0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQubWF0LXdhcm4gLm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1pbnZhbGlkIC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtZGlzYWJsZWQgLm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtZHJhd2VyLWNvbnRhaW5lcntiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmE7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZHJhd2Vye2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1kcmF3ZXIubWF0LWRyYXdlci1wdXNoe2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWF0LWRyYXdlcjpub3QoLm1hdC1kcmF3ZXItc2lkZSl7Ym94LXNoYWRvdzowcHggOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDE2cHggMjRweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggNnB4IDMwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1kcmF3ZXItc2lkZXtib3JkZXItcmlnaHQ6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWRyYXdlci1zaWRlLm1hdC1kcmF3ZXItZW5ke2JvcmRlci1sZWZ0OnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMik7Ym9yZGVyLXJpZ2h0Om5vbmV9W2Rpcj1ydGxdIC5tYXQtZHJhd2VyLXNpZGV7Ym9yZGVyLWxlZnQ6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKTtib3JkZXItcmlnaHQ6bm9uZX1bZGlyPXJ0bF0gLm1hdC1kcmF3ZXItc2lkZS5tYXQtZHJhd2VyLWVuZHtib3JkZXItbGVmdDpub25lO2JvcmRlci1yaWdodDpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZHJhd2VyLWJhY2tkcm9wLm1hdC1kcmF3ZXItc2hvd257YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC42KX0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYntiYWNrZ3JvdW5kLWNvbG9yOiNmZmQ3NDB9Lm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFye2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjE1LDY0LC41NCl9Lm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmQ3NDB9Lm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWJ7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3fS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLWJhcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTAzLDU4LDE4MywuNTQpfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3fS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtd2Fybi5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0NCw2Nyw1NCwuNTQpfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtc2xpZGUtdG9nZ2xlOm5vdCgubWF0LWNoZWNrZWQpIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie2JveC1zaGFkb3c6MHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhfS5tYXQtc2xpZGUtdG9nZ2xlLWJhcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10cmFjay1maWxsLC5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10aHVtYiwubWF0LXByaW1hcnkgLm1hdC1zbGlkZXItdGh1bWItbGFiZWx7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3fS5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0e2NvbG9yOiNmZmZ9Lm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLWZvY3VzLXJpbmd7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDEwMyw1OCwxODMsLjIpfS5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWItbGFiZWx7YmFja2dyb3VuZC1jb2xvcjojZmZkNzQwfS5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHR7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLWZvY3VzLXJpbmd7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyMTUsNjQsLjIpfS5tYXQtd2FybiAubWF0LXNsaWRlci10cmFjay1maWxsLC5tYXQtd2FybiAubWF0LXNsaWRlci10aHVtYiwubWF0LXdhcm4gLm1hdC1zbGlkZXItdGh1bWItbGFiZWx7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtd2FybiAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0e2NvbG9yOiNmZmZ9Lm1hdC13YXJuIC5tYXQtc2xpZGVyLWZvY3VzLXJpbmd7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0NCw2Nyw1NCwuMil9Lm1hdC1zbGlkZXI6aG92ZXIgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCwuY2RrLWZvY3VzZWQgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kLC5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1zbGlkZXItZGlzYWJsZWQ6aG92ZXIgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LXNsaWRlci1taW4tdmFsdWUgLm1hdC1zbGlkZXItZm9jdXMtcmluZ3tiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nIC5tYXQtc2xpZGVyLXRodW1iLC5tYXQtc2xpZGVyLW1pbi12YWx1ZS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcgLm1hdC1zbGlkZXItdGh1bWItbGFiZWx7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZy5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10aHVtYiwubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nLmNkay1mb2N1c2VkIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVse2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykgLm1hdC1zbGlkZXItdGh1bWJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjI2KTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyk6aG92ZXIgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1zbGlkZXItbWluLXZhbHVlOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKS5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10aHVtYntib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyk6aG92ZXIubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10aHVtYiwubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpLmNkay1mb2N1c2VkLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LXNsaWRlci1oYXMtdGlja3MgLm1hdC1zbGlkZXItd3JhcHBlcjo6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjcpfS5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdGlja3N7YmFja2dyb3VuZC1pbWFnZTpyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNyksIHJnYmEoMCwgMCwgMCwgMC43KSAycHgsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtiYWNrZ3JvdW5kLWltYWdlOi1tb3otcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCgwLjAwMDFkZWcsIHJnYmEoMCwgMCwgMCwgMC43KSwgcmdiYSgwLCAwLCAwLCAwLjcpIDJweCwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpfS5tYXQtc2xpZGVyLXZlcnRpY2FsIC5tYXQtc2xpZGVyLXRpY2tze2JhY2tncm91bmQtaW1hZ2U6cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMC43KSwgcmdiYSgwLCAwLCAwLCAwLjcpIDJweCwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpfS5tYXQtc3RlcC1oZWFkZXIuY2RrLWtleWJvYXJkLWZvY3VzZWQsLm1hdC1zdGVwLWhlYWRlci5jZGstcHJvZ3JhbS1mb2N1c2VkLC5tYXQtc3RlcC1oZWFkZXI6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wNCl9QG1lZGlhKGhvdmVyOiBub25lKXsubWF0LXN0ZXAtaGVhZGVyOmhvdmVye2JhY2tncm91bmQ6bm9uZX19Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwsLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtb3B0aW9uYWx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb257YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC41NCk7Y29sb3I6I2ZmZn0ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSwubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXR7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3O2NvbG9yOiNmZmZ9Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lcnJvcntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmNDQzMzZ9Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtYWN0aXZle2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1lcnJvcntjb2xvcjojZjQ0MzM2fS5tYXQtc3RlcHBlci1ob3Jpem9udGFsLC5tYXQtc3RlcHBlci12ZXJ0aWNhbHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC1zdGVwcGVyLXZlcnRpY2FsLWxpbmU6OmJlZm9yZXtib3JkZXItbGVmdC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjpiZWZvcmUsLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjphZnRlciwubWF0LXN0ZXBwZXItaG9yaXpvbnRhbC1saW5le2JvcmRlci10b3AtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcntoZWlnaHQ6NzJweH0ubWF0LXN0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlciwubWF0LXZlcnRpY2FsLXN0ZXBwZXItaGVhZGVye3BhZGRpbmc6MjRweCAyNHB4fS5tYXQtc3RlcHBlci12ZXJ0aWNhbC1saW5lOjpiZWZvcmV7dG9wOi0xNnB4O2JvdHRvbTotMTZweH0ubWF0LXN0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcjo6YWZ0ZXIsLm1hdC1zdGVwcGVyLWxhYmVsLXBvc2l0aW9uLWJvdHRvbSAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmJlZm9yZXt0b3A6MzZweH0ubWF0LXN0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmV7dG9wOjM2cHh9Lm1hdC1zb3J0LWhlYWRlci1hcnJvd3tjb2xvcjojNzU3NTc1fS5tYXQtdGFiLW5hdi1iYXIsLm1hdC10YWItaGVhZGVye2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyKX0ubWF0LXRhYi1ncm91cC1pbnZlcnRlZC1oZWFkZXIgLm1hdC10YWItbmF2LWJhciwubWF0LXRhYi1ncm91cC1pbnZlcnRlZC1oZWFkZXIgLm1hdC10YWItaGVhZGVye2JvcmRlci10b3A6MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyKTtib3JkZXItYm90dG9tOm5vbmV9Lm1hdC10YWItbGFiZWwsLm1hdC10YWItbGlua3tjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWR7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC10YWItZ3JvdXBbY2xhc3MqPW1hdC1iYWNrZ3JvdW5kLV0gLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLW5hdi1iYXJbY2xhc3MqPW1hdC1iYWNrZ3JvdW5kLV17Ym9yZGVyLWJvdHRvbTpub25lO2JvcmRlci10b3A6bm9uZX0ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIwOSwxOTYsMjMzLC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIsLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3fS5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5Lm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyMjksMTI3LC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtaW5rLWJhciwubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6I2ZmZDc0MH0ubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50Lm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LWluay1iYXIsLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50Lm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjA1LDIxMCwuMyl9Lm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXRhYi1ncm91cC5tYXQtd2Fybi5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtaW5rLWJhciwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgyMDksMTk2LDIzMywuMyl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rcywubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmtzLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbntiYWNrZ3JvdW5kLWNvbG9yOiM2NzNhYjd9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmssLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5re2NvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWR7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMTIpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjI5LDEyNywuMyl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGlua3MsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rcywubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbntiYWNrZ3JvdW5kLWNvbG9yOiNmZmQ3NDB9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmt7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWR7Y29sb3I6cmdiYSgwLDAsMCwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjQpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDIwNSwyMTAsLjMpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGlua3MsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rcywubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb257YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGlua3tjb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVke2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjQpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjQpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEyKX0ubWF0LXRvb2xiYXJ7YmFja2dyb3VuZDojZjVmNWY1O2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXRvb2xiYXIubWF0LXByaW1hcnl7YmFja2dyb3VuZDojNjczYWI3O2NvbG9yOiNmZmZ9Lm1hdC10b29sYmFyLm1hdC1hY2NlbnR7YmFja2dyb3VuZDojZmZkNzQwO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXRvb2xiYXIubWF0LXdhcm57YmFja2dyb3VuZDojZjQ0MzM2O2NvbG9yOiNmZmZ9Lm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUsLm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsLm1hdC10b29sYmFyIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxle2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yfS5tYXQtdG9vbGJhciAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC10b29sYmFyIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC10b29sYmFyIC5tYXQtc2VsZWN0LXZhbHVlLC5tYXQtdG9vbGJhciAubWF0LXNlbGVjdC1hcnJvdywubWF0LXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOmluaGVyaXR9Lm1hdC10b29sYmFyIC5tYXQtaW5wdXQtZWxlbWVudHtjYXJldC1jb2xvcjpjdXJyZW50Q29sb3J9Lm1hdC10b29sYmFyLW11bHRpcGxlLXJvd3N7bWluLWhlaWdodDo2NHB4fS5tYXQtdG9vbGJhci1yb3csLm1hdC10b29sYmFyLXNpbmdsZS1yb3d7aGVpZ2h0OjY0cHh9QG1lZGlhKG1heC13aWR0aDogNTk5cHgpey5tYXQtdG9vbGJhci1tdWx0aXBsZS1yb3dze21pbi1oZWlnaHQ6NTZweH0ubWF0LXRvb2xiYXItcm93LC5tYXQtdG9vbGJhci1zaW5nbGUtcm93e2hlaWdodDo1NnB4fX0ubWF0LXRvb2x0aXB7YmFja2dyb3VuZDpyZ2JhKDk3LDk3LDk3LC45KX0ubWF0LXRyZWV7YmFja2dyb3VuZDojZmZmfS5tYXQtdHJlZS1ub2RlLC5tYXQtbmVzdGVkLXRyZWUtbm9kZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC10cmVlLW5vZGV7bWluLWhlaWdodDo0OHB4fS5tYXQtc25hY2stYmFyLWNvbnRhaW5lcntjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC43KTtiYWNrZ3JvdW5kOiMzMjMyMzI7Ym94LXNoYWRvdzowcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggNnB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAxOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbntjb2xvcjojZmZkNzQwfVxuIiwiLyogTWVkaWEgcXVlcmllcyBCcmVha3BvaW50IG1peGlucyAqL1xyXG5cclxuQG1peGluIGZvci1taW5pLW1vYmlsZS1sYXlvdXQge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWstbWluaS1tb2JpbGUpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gZm9yLW1lZGl1bS1tb2JpbGUtbGF5b3V0IHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrLW1lZGl1bS1tb2JpbGUpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gZm9yLW1vYmlsZS1sYXlvdXQge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3ItbmFycm93LWxheW91dCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVhay1uYXJyb3cpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZvci1ub3JtYWwtbGF5b3V0IHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrLW5vcm1hbCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9yLXdpZGUtbGF5b3V0IHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrLXdpZGUpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gUlRMIHx8IExUUlxyXG5cclxuLy8gJGxheW91dC1kaXJlY3Rpb246IHJ0bCAhZGVmYXVsdDtcclxuXHJcbi8vIEBtaXhpbiBsdHIge1xyXG4vLyAgICAgQGlmICRsYXlvdXQtZGlyZWN0aW9uID09IGx0ciB7XHJcbi8vICAgICAgICAgQGNvbnRlbnQ7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gQG1peGluIHJ0bCB7XHJcbi8vICAgICBAaWYgJGxheW91dC1kaXJlY3Rpb24gPT0gcnRsIHtcclxuLy8gICAgICAgICBAY29udGVudDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLyogTWVkaWEgIE1peGlucyAqL1xyXG5cclxuLy9hc3BlY3QgcmF0aW8gbWl4aW5cclxuQG1peGluIGFzcGVjdC1yYXRpbygkd2lkdGgsICRoZWlnaHQpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAoJGhlaWdodCAvICR3aWR0aCkgKiAxMDAlO1xyXG4gIH1cclxuICA+ICoge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gIH1cclxuICA+IGltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbn1cclxuXHJcbi8vIE1peGluIGZvciByZW1vdmluZyBob3ZlciBlZmVjdHMgb24gaXBob25lIHNjcmVlblxyXG5AbWl4aW4gaG92ZXItc3VwcG9ydGVkIHtcclxuICBAbWVkaWEgbm90IGFsbCBhbmQgKHBvaW50ZXI6IGNvYXJzZSkge1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHJpcHBsZSgkY29sb3IsICRib3JkZXItcmFkaXVzKSB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgIGFuaW1hdGlvbjogZ3Jvdy1jZW50ZXItdG8tc2lkZXMgMC4zcztcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGxpbmUtcmlwcGxlKCRjb2xvciwgJGJvcmRlci1yYWRpdXMpIHtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICBhbmltYXRpb246IGdyb3ctY2VudGVyLXRvLXNpZGVzIC4zcyBsaW5lYXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICAgIGhlaWdodDogNXB4O1xyXG4gICAgfVxyXG59XHJcbiIsIkBrZXlmcmFtZXMgb3BhY2l0eSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAvLyAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTUwJSk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC8vICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGltcG9ydCAnfkBhbmd1bGFyL21hdGVyaWFsL3ByZWJ1aWx0LXRoZW1lcy9kZWVwcHVycGxlLWFtYmVyLmNzcyc7XG4vKiBNZWRpYSBxdWVyaWVzIEJyZWFrcG9pbnQgbWl4aW5zICovXG4vKiBNZWRpYSAgTWl4aW5zICovXG5Aa2V5ZnJhbWVzIG9wYWNpdHkge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlLWRvd24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlLWxlZnQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlLXJpZ2h0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNoYWtlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcbiAgfVxuICAyNSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBncm93LWNlbnRlci10by1zaWRlcyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAsIDEpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbi5zaXRlLWJsb2NrIHtcbiAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbn1cblxuLnJhdGlvLTE2LTkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucmF0aW8tMTYtOTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA1NiU7XG59XG4ucmF0aW8tMTYtOSA+ICoge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cbi5yYXRpby0xNi05ID4gaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnJhdGlvLXNxdWFyZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5yYXRpby1zcXVhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTAwJTtcbn1cbi5yYXRpby1zcXVhcmUgPiAqIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG4ucmF0aW8tc3F1YXJlID4gaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnJhdGlvLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucmF0aW8tY2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA4MCU7XG59XG4ucmF0aW8tY2FyZCA+ICoge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cbi5yYXRpby1jYXJkID4gaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnJhdGlvLXBvc3RlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5yYXRpby1wb3N0ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTUwJTtcbn1cbi5yYXRpby1wb3N0ZXIgPiAqIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG4ucmF0aW8tcG9zdGVyID4gaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJvbGRlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5saWdodGVyIHtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmlubGluZS1mbGV4IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi5jb2wge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucm93IHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmJldCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmFyb3VuZCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uZXZlbmx5IHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5qLWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uai1lbmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uYS1lbmQge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5hLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubm90LWFsbG93ZWQsXG4uZGlzYWJsZSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5jdXJzb3ItaW5pdGlhbCB7XG4gIGN1cnNvcjogaW5pdGlhbDtcbn1cblxuLnJlbGF0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZml4ZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5hYnNvbHV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnN0YXRpYyB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG59XG5cbi5zdGlja3kge1xuICBwb3NpdGlvbjogc3RpY2t5O1xufVxuXG4ubm9uZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pbmxpbmUtYmxvY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5tb25vc3BhY2Uge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xufVxuXG4ubS1pLXN0YXJ0LTFjaCB7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDFjaDtcbn1cblxuLm0taS1zdGFydC0yY2gge1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAyY2g7XG59XG5cbi5tLWktc3RhcnQtM2NoIHtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogM2NoO1xufVxuXG4ubS1pLWVuZC0xY2gge1xuICBtYXJnaW4taW5saW5lLWVuZDogMWNoO1xufVxuXG4ubS1pLWVuZC0yY2gge1xuICBtYXJnaW4taW5saW5lLWVuZDogMmNoO1xufVxuXG4ubS1pLWVuZC0zY2gge1xuICBtYXJnaW4taW5saW5lLWVuZDogM2NoO1xufVxuXG4ubS1iLXN0YXJ0LTFjaCB7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMWNoO1xufVxuXG4ubS1iLXN0YXJ0LTJjaCB7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMmNoO1xufVxuXG4ubS1iLXN0YXJ0LTNjaCB7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogM2NoO1xufVxuXG4ubS1iLWVuZC0xY2gge1xuICBtYXJnaW4tYmxvY2stZW5kOiAxY2g7XG59XG5cbi5tLWItZW5kLTJjaCB7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDJjaDtcbn1cblxuLm0tYi1lbmQtM2NoIHtcbiAgbWFyZ2luLWJsb2NrLWVuZDogM2NoO1xufVxuXG4udzEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaDEwMCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmF2YXRhciB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4YjBjOTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5hdmF0YXIuaXNIb3Jpem9uYWwge1xuICBvYmplY3QtZml0OiBmaWxsO1xufVxuLmF2YXRhci5hdmF0YXItcyB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG4uYXZhdGFyLmF2YXRhci1tIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuLmF2YXRhci5hdmF0YXItbCB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cbi5kaXZpZGVyLWxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTkxMjEyO1xuICBoZWlnaHQ6IDAuNXB4O1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cblxuLmRpdmlkZXItc3RhcnQtbGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTEyMTI7XG4gIGhlaWdodDogMC41cHg7XG4gIHdpZHRoOiAyNXZ3O1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5jbG4tdWwge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5jbG4tbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uY2xuLWEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbml0aWFsO1xufVxuXG4uY2xuLWJ0biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcbn1cblxuLm9wYWNpdHktaG92ZXItOTpob3ZlciB7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLm9wYWNpdHktaG92ZXItODpob3ZlciB7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLm9wYWNpdHktaG92ZXItNzpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLm9wYWNpdHktaG92ZXItNjpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNjtcbn1cblxuLm9wYWNpdHktaG92ZXItNTpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuYm9keSB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgbWFyZ2luOiAwO1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cbmJvZHkgLnNjcmVlbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IC0xMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzLCB6LWluZGV4IDAgMC41cztcbn1cbmJvZHkuc2NyZWVuLXZpc2liaWxpdHkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuYm9keS5zY3JlZW4tdmlzaWJpbGl0eSAuc2NyZWVuIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xuICB6LWluZGV4OiAxMDAwO1xuICBvcGFjaXR5OiAwLjg1O1xufVxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMC44ZW07XG59XG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMWM7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbml0aWFsO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG51bCBsaSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLndpZHRoLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2ODBweCkge1xuICAud2lkdGgtY29udGFpbmVyIHtcbiAgICB3aWR0aDogNjgwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cblxuLm1haW4taGVhZGVyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMCAwIDRweCByZ2JhKDAsIDAsIDAsIDAuMzQyKTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTA7XG59IiwiQGtleWZyYW1lcyBzbGlkZS11cCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcclxuICAgIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHNsaWRlLWRvd24ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gICAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc2xpZGUtbGVmdCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbiAgICB9XHJcbn1cclxuQGtleWZyYW1lcyBzbGlkZS1yaWdodCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuICAgIH1cclxufVxyXG4iLCJcclxuXHJcbkBrZXlmcmFtZXMgc2hha2Uge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcclxuICAgIH1cclxuICAgIDI1JSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICB9XHJcbn0iLCJcclxuQGtleWZyYW1lcyBncm93LWNlbnRlci10by1zaWRlcyB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLy8gd2lkdGg6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLCAxKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9ICAgXHJcbn0iLCIuc2l0ZS1ibG9jayB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiByZW0oMjBweCk7XHJcbn1cclxuXHJcbi8vIEFzcGVjdCByYXRpb3NcclxuXHJcbi5yYXRpby0xNi05IHtcclxuICAgIEBpbmNsdWRlIGFzcGVjdC1yYXRpbygxMDAsIDU2KTtcclxufVxyXG5cclxuLnJhdGlvLXNxdWFyZSB7XHJcbiAgICBAaW5jbHVkZSBhc3BlY3QtcmF0aW8oMTAwLCAxMDApO1xyXG59XHJcblxyXG4ucmF0aW8tY2FyZCB7XHJcbiAgICBAaW5jbHVkZSBhc3BlY3QtcmF0aW8oMTAwLCA4MCk7XHJcbn1cclxuXHJcbi5yYXRpby1wb3N0ZXIge1xyXG4gICAgQGluY2x1ZGUgYXNwZWN0LXJhdGlvKDEwMCwgMTUwKTtcclxufVxyXG5cclxuLy8gQk9MRFxyXG4uYm9sZCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmJvbGRlciB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4ubGlnaHRlciB7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxufVxyXG5cclxuLy8gRkxFWFxyXG5cclxuLmZsZXgge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmlubGluZS1mbGV4IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcblxyXG4uY29sIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmJldCB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5hcm91bmQge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5ldmVubHkge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcbi5qLWNlbnRlciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmotZW5kIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5hLWVuZCB7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5hLWNlbnRlciB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4vLyBDVVJTT1JcclxuXHJcbi5wb2ludGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5vdC1hbGxvd2VkLFxyXG4uZGlzYWJsZSB7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG4uY3Vyc29yLWluaXRpYWwge1xyXG4gICAgY3Vyc29yOiBpbml0aWFsO1xyXG59XHJcblxyXG4vLyBQT1NJVElPTlNcclxuXHJcbi5yZWxhdGl2ZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmZpeGVkIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG4uYWJzb2x1dGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5zdGF0aWMge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxufVxyXG4uc3RpY2t5IHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbn1cclxuXHJcbi8vIERJU1BMQVlTXHJcblxyXG4ubm9uZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbn1cclxuLmJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5pbmxpbmUtYmxvY2sge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4vLyBGT05UU1xyXG5cclxuLm1vbm9zcGFjZSB7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG59XHJcblxyXG4vLyBNQVJHSU5TXHJcblxyXG4ubS1pLXN0YXJ0LTFjaCB7XHJcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAxY2g7XHJcbn1cclxuLm0taS1zdGFydC0yY2gge1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMmNoO1xyXG59XHJcbi5tLWktc3RhcnQtM2NoIHtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDNjaDtcclxufVxyXG5cclxuLm0taS1lbmQtMWNoIHtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAxY2g7XHJcbn1cclxuLm0taS1lbmQtMmNoIHtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAyY2g7XHJcbn1cclxuLm0taS1lbmQtM2NoIHtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAzY2g7XHJcbn1cclxuXHJcbi5tLWItc3RhcnQtMWNoIHtcclxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWNoO1xyXG59XHJcbi5tLWItc3RhcnQtMmNoIHtcclxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMmNoO1xyXG59XHJcbi5tLWItc3RhcnQtM2NoIHtcclxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogM2NoO1xyXG59XHJcblxyXG4ubS1iLWVuZC0xY2gge1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWNoO1xyXG59XHJcbi5tLWItZW5kLTJjaCB7XHJcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAyY2g7XHJcbn1cclxuLm0tYi1lbmQtM2NoIHtcclxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDNjaDtcclxufVxyXG5cclxuLy8gV0lEVEggQU5EIEhFSUdIVFxyXG5cclxuLncxMDAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmgxMDAge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4vLyBBVkFUQVJcclxuXHJcbi5hdmF0YXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNscjc7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuXHJcbiAgICAmLmlzSG9yaXpvbmFsIHtcclxuICAgICAgICBvYmplY3QtZml0OiBmaWxsO1xyXG4gICAgfVxyXG5cclxuICAgICYuYXZhdGFyLXMge1xyXG4gICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgIH1cclxuICAgICYuYXZhdGFyLW0ge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgJi5hdmF0YXItbCB7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB9XHJcbiAgICAmLmFub255bW91cyB7XHJcbiAgICAgICAgLy8gZmlsdGVyOiAkZmlsdGVyMztcclxuICAgIH1cclxufVxyXG5cclxuLmRpdmlkZXItbGluZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyMztcclxuICAgIGhlaWdodDogMC41cHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbn1cclxuLmRpdmlkZXItc3RhcnQtbGluZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyMztcclxuICAgIGhlaWdodDogMC41cHg7XHJcbiAgICB3aWR0aDogMjV2dztcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuLmNsbi11bCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5jbG4tbGkge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4uY2xuLWEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGluaXRpYWw7XHJcbn1cclxuXHJcbi5jbG4tYnRuIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XHJcbn1cclxuXHJcbi8vIE9QQUNJVFlcclxuXHJcbi5vcGFjaXR5LWhvdmVyLTkge1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgfVxyXG59XHJcbi5vcGFjaXR5LWhvdmVyLTgge1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgfVxyXG59XHJcbi5vcGFjaXR5LWhvdmVyLTcge1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgfVxyXG59XHJcbi5vcGFjaXR5LWhvdmVyLTYge1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgfVxyXG59XHJcbi5vcGFjaXR5LWhvdmVyLTUge1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENPTE9SIFBBTEVUVEVcclxuJGNscjE6ICMwZTBjMjg7XHJcbiRjbHIyOiAjMjQyODQ5O1xyXG4kY2xyMzogIzk5MTIxMjtcclxuJGNscjQ6ICM3ZWM4ZTM7XHJcbiRjbHI1OiAjZWVmYmZmO1xyXG4kY2xyNjogIzc3YmRkNjtcclxuJGNscjc6ICM2OGIwYzk7XHJcbiRjbHI4OiAjZjZmZGZmO1xyXG4kY2xyOTogI2U3ZjNmZjtcclxuJGNscjEwOiAjZmZjOWM5O1xyXG4kY2xyMTE6ICNhNGFhZGI7XHJcblxyXG4vLyBCTFVFXHJcblxyXG4kYmx1ZTE6ICMwZTBjMjg7XHJcbiRibHVlMjogIzI0Mjg0OTtcclxuJGJsdWUzOiAjNjhiMGM5O1xyXG4kYmx1ZTQ6ICM3N2JkZDY7XHJcbiRibHVlNTogIzdlYzhlMztcclxuJGJsdWU2OiAjYTRhYWRiO1xyXG4kYmx1ZTc6ICNlZWZiZmY7XHJcbiRibHVlODogI2Y2ZmRmZjtcclxuXHJcbi8vIFJFRFxyXG5cclxuJHJlZDE6ICM5OTEyMTI7XHJcbiRyZWQyOiAjZmY2ZTZlO1xyXG4kcmVkMzogI2ZmYzljOTtcclxuJHJlZDQ6ICNmZmVjZWM7XHJcblxyXG4kZ3JheTE6ICM1ODYxNjM7XHJcbiRncmF5MjogIzNkNDc0YjtcclxuJGdyYXkzOiAjMjgzMTM0O1xyXG5cclxuJGdyYXk0OiAjNTg2MTYzMjg7XHJcbiRncmF5NTogIzU4NjE2MzE1O1xyXG5cclxuJGdyZWVuMTogcmdiKDAsIDI1NSwgMCk7XHJcblxyXG4kcHJpbWFyeS1jb2xvcjogIzFhMjM3ZTtcclxuJGRhcmstcHJpbWFyeS1jb2xvcjogIzBmMTA0MTtcclxuJGFjY2VudC1jb2xvcjogIzI5NjJmZjtcclxuJHN1Yi15ZWxsb3c6ICNmZmNhMDA7XHJcblxyXG4kd2lkdGgtbmF2LWtpdDogMjMwcHg7XHJcblxyXG4vLyBCT1gtU0hBRE9XXHJcbiRzaGFkb3cxOiAwcHggMHB4IDFweCAxcHggIzAwMDAwMDI2O1xyXG4kc2hhZG93MjogMHB4IDBweCAzcHggMXB4ICMwMDAwMDAyNjtcclxuJHNoYWRvdzM6IDBweCAwcHggNHB4IDFweCAjMDAwMDAwMjY7XHJcblxyXG4kc2R3MTogMCAwIDVweCAjMDAwMDAwMjk7O1xyXG4kc2R3MjogMHB4IDBweCA0cHggMXB4ICMwMDAwMDAyNjtcclxuLy8gQk9SREVSXHJcbiRib3JkZXIxOiAxcHggc29saWQgIzI0Mjg0OTMwO1xyXG5cclxuLy8gTEFZT1VUIEJSRUFLUE9JTlRTXHJcbiRicmVhay1taW5pLW1vYmlsZTogMzMwcHg7XHJcbiRicmVhay1tZWRpdW0tbW9iaWxlOiA0ODBweDtcclxuJGJyZWFrLW1vYmlsZTogNjgwcHg7XHJcbiRicmVhay1uYXJyb3c6IDg4MHB4O1xyXG4kYnJlYWstbm9ybWFsOiAxMDIwcHg7XHJcbiRicmVhay13aWRlOiAxNDAwcHg7XHJcblxyXG4iLCJib2R5IHtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG4gICAgLnNjcmVlbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB6LWluZGV4OiAtMTE7XHJcbiAgICAgICAgLy8gdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cywgei1pbmRleCAwIC41cztcclxuICAgIH1cclxuICAgICYuc2NyZWVuLXZpc2liaWxpdHkge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgLnNjcmVlbiB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcclxuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC44NTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgd2lkdGg6IDAuOGVtO1xyXG4gICAgfVxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgICAgIC8vIGRpc3BsYXk6IGhpZGRlbjtcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAxYztcclxuICAgICAgICAvLyAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgLy8gICBvdXRsaW5lOiAxcHggc29saWQgc2xhdGVncmV5O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogaW5pdGlhbDtcclxufVxyXG5cclxudWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGxpIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbn0iLCIud2lkdGgtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIEBpbmNsdWRlIGZvci1tb2JpbGUtbGF5b3V0IHtcclxuICAgICAgICB3aWR0aDogJGJyZWFrLW1vYmlsZTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxufSIsIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy5zY3NzJztcclxuXHJcblxyXG4ubWFpbi1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwgMCwgMCwgMC4zNDIpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'main-header',
          templateUrl: './main-header.component.html',
          styleUrls: ['./main-header.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/main-nav/main-nav.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/main-nav/main-nav.component.ts ***!
    \***********************************************************/

  /*! exports provided: MainNavComponent */

  /***/
  function srcAppComponentsMainNavMainNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainNavComponent", function () {
      return MainNavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MainNavComponent_a_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SignUp");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainNavComponent_ng_template_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainNavComponent_ng_template_20_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.onLogout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return {
        exact: true
      };
    };

    var MainNavComponent = /*#__PURE__*/function () {
      function MainNavComponent(_authService) {
        _classCallCheck(this, MainNavComponent);

        this._authService = _authService;
      }

      _createClass(MainNavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLogout",
        value: function onLogout() {
          this._authService.logout();
        }
      }, {
        key: "isLoggedinUser",
        get: function get() {
          return !!this._authService.userValue;
        }
      }]);

      return MainNavComponent;
    }();

    MainNavComponent.ɵfac = function MainNavComponent_Factory(t) {
      return new (t || MainNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    MainNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainNavComponent,
      selectors: [["main-nav"]],
      decls: 22,
      vars: 4,
      consts: [[1, "width-container", "flex", "bet"], ["routerLink", "/", "title", "Home", 1, "logo"], ["src", "assets/svg/puzzle-piece.svg", "alt", "Quiz"], [1, "m-i-start-1ch"], [1, "nav-link-container", "flex", "a-cente"], ["routerLinkActive", "active", "routerLink", "/", 3, "routerLinkActiveOptions"], ["routerLinkActive", "active", "routerLink", "/test"], ["routerLinkActive", "active", "routerLink", "/user"], ["routerLinkActive", "active", "routerLink", "/results"], ["routerLinkActive", "active", "routerLink", "/login", 4, "ngIf", "ngIfElse"], ["loggedinUser", ""], ["routerLinkActive", "active", "routerLink", "/login"], [3, "click"]],
      template: function MainNavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "QUIZ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Quiz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Users");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Results");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MainNavComponent_a_19_Template, 2, 0, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MainNavComponent_ng_template_20_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedinUser)("ngIfElse", _r1);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: [".mat-badge-content[_ngcontent-%COMP%]{font-weight:600;font-size:12px;font-family:Roboto, \"Helvetica Neue\", sans-serif}\n.mat-badge-small[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{font-size:9px}\n.mat-badge-large[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{font-size:24px}\n.mat-h1[_ngcontent-%COMP%], .mat-headline[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font:400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 16px}\n.mat-h2[_ngcontent-%COMP%], .mat-title[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font:500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 16px}\n.mat-h3[_ngcontent-%COMP%], .mat-subheading-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font:400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 16px}\n.mat-h4[_ngcontent-%COMP%], .mat-subheading-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font:400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 16px}\n.mat-h5[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font:400 calc(14px * 0.83)/20px Roboto, \"Helvetica Neue\", sans-serif;margin:0 0 12px}\n.mat-h6[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font:400 calc(14px * 0.67)/20px Roboto, \"Helvetica Neue\", sans-serif;margin:0 0 12px}\n.mat-body-strong[_ngcontent-%COMP%], .mat-body-2[_ngcontent-%COMP%]{font:500 14px/24px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}\n.mat-body[_ngcontent-%COMP%], .mat-body-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]{font:400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}\n.mat-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-body-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 12px}\n.mat-small[_ngcontent-%COMP%], .mat-caption[_ngcontent-%COMP%]{font:400 12px/20px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}\n.mat-display-4[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-4[_ngcontent-%COMP%]{font:300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:-0.05em;margin:0 0 56px}\n.mat-display-3[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-3[_ngcontent-%COMP%]{font:400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:-0.02em;margin:0 0 64px}\n.mat-display-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-2[_ngcontent-%COMP%]{font:400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:-0.005em;margin:0 0 64px}\n.mat-display-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-1[_ngcontent-%COMP%]{font:400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0 0 64px}\n.mat-bottom-sheet-container[_ngcontent-%COMP%]{font:400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}\n.mat-button[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%], .mat-flat-button[_ngcontent-%COMP%], .mat-fab[_ngcontent-%COMP%], .mat-mini-fab[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px;font-weight:500}\n.mat-button-toggle[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\n.mat-card[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\n.mat-card-title[_ngcontent-%COMP%]{font-size:24px;font-weight:500}\n.mat-card-header[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{font-size:20px}\n.mat-card-subtitle[_ngcontent-%COMP%], .mat-card-content[_ngcontent-%COMP%]{font-size:14px}\n.mat-checkbox[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\n.mat-checkbox-layout[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%]{line-height:24px}\n.mat-chip[_ngcontent-%COMP%]{font-size:14px;font-weight:500}\n.mat-chip[_ngcontent-%COMP%]   .mat-chip-trailing-icon.mat-icon[_ngcontent-%COMP%], .mat-chip[_ngcontent-%COMP%]   .mat-chip-remove.mat-icon[_ngcontent-%COMP%]{font-size:18px}\n.mat-table[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\n.mat-header-cell[_ngcontent-%COMP%]{font-size:12px;font-weight:500}\n.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%]{font-size:14px}\n.mat-calendar[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\n.mat-calendar-body[_ngcontent-%COMP%]{font-size:13px}\n.mat-calendar-body-label[_ngcontent-%COMP%], .mat-calendar-period-button[_ngcontent-%COMP%]{font-size:14px;font-weight:500}\n.mat-calendar-table-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:11px;font-weight:400}\n.mat-dialog-title[_ngcontent-%COMP%]{font:500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}\n.mat-expansion-panel-header[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:15px;font-weight:400}\n.mat-expansion-panel-content[_ngcontent-%COMP%]{font:400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}\n.mat-form-field[_ngcontent-%COMP%]{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}\n.mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.34375em}\n.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:150%;line-height:1.125}\n.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]{height:1.5em;width:1.5em}\n.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{height:1.125em;line-height:1.125}\n.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid transparent}\n.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.34375em) scale(0.75);width:133.3333333333%}\n.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.34374em) scale(0.75);width:133.3333433333%}\n.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-0.84375em;padding-top:.84375em}\n.mat-form-field-label[_ngcontent-%COMP%]{top:1.34375em}\n.mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.34375em}\n.mat-form-field-subscript-wrapper[_ngcontent-%COMP%]{font-size:75%;margin-top:.6666666667em;top:calc(100% - 1.7916666667em)}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}\n.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);-ms-transform:translateY(-1.28125em) scale(0.75);width:133.3333333333%}\n.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-form-field-autofill-control[_ngcontent-%COMP%]:-webkit-autofill + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);-ms-transform:translateY(-1.28124em) scale(0.75);width:133.3333433333%}\n.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);-ms-transform:translateY(-1.28123em) scale(0.75);width:133.3333533333%}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.28125em}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-subscript-wrapper[_ngcontent-%COMP%]{margin-top:.5416666667em;top:calc(100% - 1.6666666667em)}\n@media print{.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28122em) scale(0.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-form-field-autofill-control[_ngcontent-%COMP%]:-webkit-autofill + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28121em) scale(0.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.2812em) scale(0.75)}}\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.25em 0 .75em 0}\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.09375em;margin-top:-0.5em}\n.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-fill.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-0.59375em) scale(0.75);width:133.3333333333%}\n.mat-form-field-appearance-fill.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-0.59374em) scale(0.75);width:133.3333433333%}\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:1em 0 1em 0}\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.84375em;margin-top:-0.25em}\n.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-outline.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.59375em) scale(0.75);width:133.3333333333%}\n.mat-form-field-appearance-outline.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.59374em) scale(0.75);width:133.3333433333%}\n.mat-grid-tile-header[_ngcontent-%COMP%], .mat-grid-tile-footer[_ngcontent-%COMP%]{font-size:14px}\n.mat-grid-tile-header[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%], .mat-grid-tile-footer[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\n.mat-grid-tile-header[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2), .mat-grid-tile-footer[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:12px}\ninput.mat-input-element[_ngcontent-%COMP%]{margin-top:-0.0625em}\n.mat-menu-item[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px;font-weight:400}\n.mat-paginator[_ngcontent-%COMP%], .mat-paginator-page-size[_ngcontent-%COMP%]   .mat-select-trigger[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:12px}\n.mat-radio-button[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\n.mat-select[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\n.mat-select-trigger[_ngcontent-%COMP%]{height:1.125em}\n.mat-slide-toggle-content[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\n.mat-slider-thumb-label-text[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:12px;font-weight:500}\n.mat-stepper-vertical[_ngcontent-%COMP%], .mat-stepper-horizontal[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\n.mat-step-label[_ngcontent-%COMP%]{font-size:14px;font-weight:400}\n.mat-step-sub-label-error[_ngcontent-%COMP%]{font-weight:normal}\n.mat-step-label-error[_ngcontent-%COMP%]{font-size:14px}\n.mat-step-label-selected[_ngcontent-%COMP%]{font-size:14px;font-weight:500}\n.mat-tab-group[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\n.mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px;font-weight:500}\n.mat-toolbar[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font:500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal;margin:0}\n.mat-tooltip[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}\n.mat-tooltip-handset[_ngcontent-%COMP%]{font-size:14px;padding-top:8px;padding-bottom:8px}\n.mat-list-item[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\n.mat-list-option[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{font-size:16px}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:14px}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]{font-size:16px}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:14px}\n.mat-list-base[_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px;font-weight:500}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{font-size:12px}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:12px}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]{font-size:12px}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:12px}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:12px;font-weight:500}\n.mat-option[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:16px}\n.mat-optgroup-label[_ngcontent-%COMP%]{font:500 14px/24px Roboto, \"Helvetica Neue\", sans-serif;letter-spacing:normal}\n.mat-simple-snackbar[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif;font-size:14px}\n.mat-simple-snackbar-action[_ngcontent-%COMP%]{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}\n.mat-tree[_ngcontent-%COMP%]{font-family:Roboto, \"Helvetica Neue\", sans-serif}\n.mat-tree-node[_ngcontent-%COMP%], .mat-nested-tree-node[_ngcontent-%COMP%]{font-weight:400;font-size:14px}\n.mat-ripple[_ngcontent-%COMP%]{overflow:hidden;position:relative}\n.mat-ripple[_ngcontent-%COMP%]:not(:empty){transform:translateZ(0)}\n.mat-ripple.mat-ripple-unbounded[_ngcontent-%COMP%]{overflow:visible}\n.mat-ripple-element[_ngcontent-%COMP%]{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale(0)}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{display:none}\n.cdk-visually-hidden[_ngcontent-%COMP%]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}\n.cdk-overlay-container[_ngcontent-%COMP%], .cdk-global-overlay-wrapper[_ngcontent-%COMP%]{pointer-events:none;top:0;left:0;height:100%;width:100%}\n.cdk-overlay-container[_ngcontent-%COMP%]{position:fixed;z-index:1000}\n.cdk-overlay-container[_ngcontent-%COMP%]:empty{display:none}\n.cdk-global-overlay-wrapper[_ngcontent-%COMP%]{display:flex;position:absolute;z-index:1000}\n.cdk-overlay-pane[_ngcontent-%COMP%]{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}\n.cdk-overlay-backdrop[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);opacity:0}\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:1}\n@media screen and (-ms-high-contrast: active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:.6}}\n.cdk-overlay-dark-backdrop[_ngcontent-%COMP%]{background:rgba(0,0,0,.32)}\n.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%], .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:0}\n.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%]{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}\n.cdk-global-scrollblock[_ngcontent-%COMP%]{position:fixed;width:100%;overflow-y:scroll}\n@-webkit-keyframes cdk-text-field-autofill-start{}\n@keyframes cdk-text-field-autofill-start{}\n@-webkit-keyframes cdk-text-field-autofill-end{}\n@keyframes cdk-text-field-autofill-end{}\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:-webkit-autofill{-webkit-animation:cdk-text-field-autofill-start 0s 1ms;animation:cdk-text-field-autofill-start 0s 1ms}\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill){-webkit-animation:cdk-text-field-autofill-end 0s 1ms;animation:cdk-text-field-autofill-end 0s 1ms}\ntextarea.cdk-textarea-autosize[_ngcontent-%COMP%]{resize:none}\ntextarea.cdk-textarea-autosize-measuring[_ngcontent-%COMP%]{padding:2px 0 !important;box-sizing:content-box !important;height:auto !important;overflow:hidden !important}\ntextarea.cdk-textarea-autosize-measuring-firefox[_ngcontent-%COMP%]{padding:2px 0 !important;box-sizing:content-box !important;height:0 !important}\n.mat-focus-indicator[_ngcontent-%COMP%]{position:relative}\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]{position:relative}\n.mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.1)}\n.mat-option[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\n.mat-option[_ngcontent-%COMP%]:hover:not(.mat-option-disabled), .mat-option[_ngcontent-%COMP%]:focus:not(.mat-option-disabled){background:rgba(0,0,0,.04)}\n.mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-multiple):not(.mat-option-disabled){background:rgba(0,0,0,.04)}\n.mat-option.mat-active[_ngcontent-%COMP%]{background:rgba(0,0,0,.04);color:rgba(0,0,0,.87)}\n.mat-option.mat-option-disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\n.mat-primary[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled){color:#673ab7}\n.mat-accent[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled){color:#ffd740}\n.mat-warn[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled){color:#f44336}\n.mat-optgroup-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\n.mat-optgroup-disabled[_ngcontent-%COMP%]   .mat-optgroup-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\n.mat-pseudo-checkbox[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\n.mat-pseudo-checkbox[_ngcontent-%COMP%]::after{color:#fafafa}\n.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%]{color:#b0b0b0}\n.mat-primary[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%]{background:#673ab7}\n.mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%]{background:#ffd740}\n.mat-warn[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%]{background:#f44336}\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%], .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%]{background:#b0b0b0}\n.mat-app-background[_ngcontent-%COMP%]{background-color:#fafafa;color:rgba(0,0,0,.87)}\n.mat-elevation-z0[_ngcontent-%COMP%]{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z1[_ngcontent-%COMP%]{box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z2[_ngcontent-%COMP%]{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z3[_ngcontent-%COMP%]{box-shadow:0px 3px 3px -2px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14),0px 1px 8px 0px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z4[_ngcontent-%COMP%]{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z5[_ngcontent-%COMP%]{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 5px 8px 0px rgba(0, 0, 0, 0.14),0px 1px 14px 0px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z6[_ngcontent-%COMP%]{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z7[_ngcontent-%COMP%]{box-shadow:0px 4px 5px -2px rgba(0, 0, 0, 0.2),0px 7px 10px 1px rgba(0, 0, 0, 0.14),0px 2px 16px 1px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z8[_ngcontent-%COMP%]{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z9[_ngcontent-%COMP%]{box-shadow:0px 5px 6px -3px rgba(0, 0, 0, 0.2),0px 9px 12px 1px rgba(0, 0, 0, 0.14),0px 3px 16px 2px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z10[_ngcontent-%COMP%]{box-shadow:0px 6px 6px -3px rgba(0, 0, 0, 0.2),0px 10px 14px 1px rgba(0, 0, 0, 0.14),0px 4px 18px 3px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z11[_ngcontent-%COMP%]{box-shadow:0px 6px 7px -4px rgba(0, 0, 0, 0.2),0px 11px 15px 1px rgba(0, 0, 0, 0.14),0px 4px 20px 3px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z12[_ngcontent-%COMP%]{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z13[_ngcontent-%COMP%]{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 13px 19px 2px rgba(0, 0, 0, 0.14),0px 5px 24px 4px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z14[_ngcontent-%COMP%]{box-shadow:0px 7px 9px -4px rgba(0, 0, 0, 0.2),0px 14px 21px 2px rgba(0, 0, 0, 0.14),0px 5px 26px 4px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z15[_ngcontent-%COMP%]{box-shadow:0px 8px 9px -5px rgba(0, 0, 0, 0.2),0px 15px 22px 2px rgba(0, 0, 0, 0.14),0px 6px 28px 5px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z16[_ngcontent-%COMP%]{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z17[_ngcontent-%COMP%]{box-shadow:0px 8px 11px -5px rgba(0, 0, 0, 0.2),0px 17px 26px 2px rgba(0, 0, 0, 0.14),0px 6px 32px 5px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z18[_ngcontent-%COMP%]{box-shadow:0px 9px 11px -5px rgba(0, 0, 0, 0.2),0px 18px 28px 2px rgba(0, 0, 0, 0.14),0px 7px 34px 6px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z19[_ngcontent-%COMP%]{box-shadow:0px 9px 12px -6px rgba(0, 0, 0, 0.2),0px 19px 29px 2px rgba(0, 0, 0, 0.14),0px 7px 36px 6px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z20[_ngcontent-%COMP%]{box-shadow:0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 20px 31px 3px rgba(0, 0, 0, 0.14),0px 8px 38px 7px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z21[_ngcontent-%COMP%]{box-shadow:0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 21px 33px 3px rgba(0, 0, 0, 0.14),0px 8px 40px 7px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z22[_ngcontent-%COMP%]{box-shadow:0px 10px 14px -6px rgba(0, 0, 0, 0.2),0px 22px 35px 3px rgba(0, 0, 0, 0.14),0px 8px 42px 7px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z23[_ngcontent-%COMP%]{box-shadow:0px 11px 14px -7px rgba(0, 0, 0, 0.2),0px 23px 36px 3px rgba(0, 0, 0, 0.14),0px 9px 44px 8px rgba(0, 0, 0, 0.12)}\n.mat-elevation-z24[_ngcontent-%COMP%]{box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0, 0, 0, 0.12)}\n.mat-theme-loaded-marker[_ngcontent-%COMP%]{display:none}\n.mat-autocomplete-panel[_ngcontent-%COMP%]{background:#fff;color:rgba(0,0,0,.87)}\n.mat-autocomplete-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)}\n.mat-autocomplete-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-active):not(:hover){background:#fff}\n.mat-autocomplete-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-active):not(:hover):not(.mat-option-disabled){color:rgba(0,0,0,.87)}\n.mat-badge-content[_ngcontent-%COMP%]{color:#fff;background:#673ab7}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{outline:solid 1px;border-radius:0}\n.mat-badge-accent[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{background:#ffd740;color:rgba(0,0,0,.87)}\n.mat-badge-warn[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{color:#fff;background:#f44336}\n.mat-badge[_ngcontent-%COMP%]{position:relative}\n.mat-badge-hidden[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{display:none}\n.mat-badge-disabled[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{background:#b9b9b9;color:rgba(0,0,0,.38)}\n.mat-badge-content[_ngcontent-%COMP%]{position:absolute;text-align:center;display:inline-block;border-radius:50%;transition:transform 200ms ease-in-out;transform:scale(0.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none}\n.ng-animate-disabled[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%], .mat-badge-content._mat-animation-noopable[_ngcontent-%COMP%]{transition:none}\n.mat-badge-content.mat-badge-active[_ngcontent-%COMP%]{transform:none}\n.mat-badge-small[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{width:16px;height:16px;line-height:16px}\n.mat-badge-small.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{top:-8px}\n.mat-badge-small.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{bottom:-8px}\n.mat-badge-small.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-16px}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-16px}\n.mat-badge-small.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-16px}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-16px}\n.mat-badge-small.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-8px}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-8px}\n.mat-badge-small.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-8px}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-8px}\n.mat-badge-medium[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{width:22px;height:22px;line-height:22px}\n.mat-badge-medium.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{top:-11px}\n.mat-badge-medium.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{bottom:-11px}\n.mat-badge-medium.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-22px}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-22px}\n.mat-badge-medium.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-22px}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-22px}\n.mat-badge-medium.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-11px}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-11px}\n.mat-badge-medium.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-11px}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-11px}\n.mat-badge-large[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{width:28px;height:28px;line-height:28px}\n.mat-badge-large.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{top:-14px}\n.mat-badge-large.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{bottom:-14px}\n.mat-badge-large.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-28px}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-28px}\n.mat-badge-large.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-28px}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-28px}\n.mat-badge-large.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:-14px}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{left:auto;right:-14px}\n.mat-badge-large.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:-14px}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{right:auto;left:-14px}\n.mat-bottom-sheet-container[_ngcontent-%COMP%]{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12);background:#fff;color:rgba(0,0,0,.87)}\n.mat-button[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%]{color:inherit;background:transparent}\n.mat-button.mat-primary[_ngcontent-%COMP%], .mat-icon-button.mat-primary[_ngcontent-%COMP%], .mat-stroked-button.mat-primary[_ngcontent-%COMP%]{color:#673ab7}\n.mat-button.mat-accent[_ngcontent-%COMP%], .mat-icon-button.mat-accent[_ngcontent-%COMP%], .mat-stroked-button.mat-accent[_ngcontent-%COMP%]{color:#ffd740}\n.mat-button.mat-warn[_ngcontent-%COMP%], .mat-icon-button.mat-warn[_ngcontent-%COMP%], .mat-stroked-button.mat-warn[_ngcontent-%COMP%]{color:#f44336}\n.mat-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-icon-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-icon-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-icon-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-icon-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-stroked-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-stroked-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-stroked-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-stroked-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.26)}\n.mat-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{background-color:#673ab7}\n.mat-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{background-color:#ffd740}\n.mat-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{background-color:#f44336}\n.mat-button.mat-button-disabled[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-button-disabled[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-button-disabled[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%]{background-color:transparent}\n.mat-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{opacity:.1;background-color:currentColor}\n.mat-button-focus-overlay[_ngcontent-%COMP%]{background:#000}\n.mat-stroked-button[_ngcontent-%COMP%]:not(.mat-button-disabled){border-color:rgba(0,0,0,.12)}\n.mat-flat-button[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%], .mat-fab[_ngcontent-%COMP%], .mat-mini-fab[_ngcontent-%COMP%]{color:rgba(0,0,0,.87);background-color:#fff}\n.mat-flat-button.mat-primary[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%]{color:#fff}\n.mat-flat-button.mat-accent[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\n.mat-flat-button.mat-warn[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%]{color:#fff}\n.mat-flat-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.26)}\n.mat-flat-button.mat-primary[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%]{background-color:#673ab7}\n.mat-flat-button.mat-accent[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%]{background-color:#ffd740}\n.mat-flat-button.mat-warn[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%]{background-color:#f44336}\n.mat-flat-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-flat-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-raised-button.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-fab.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-primary.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-accent.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-warn.mat-button-disabled[_ngcontent-%COMP%], .mat-mini-fab.mat-button-disabled.mat-button-disabled[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.12)}\n.mat-flat-button.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}\n.mat-flat-button.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.1)}\n.mat-flat-button.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}\n.mat-stroked-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-flat-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}\n.mat-raised-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)}\n.mat-raised-button[_ngcontent-%COMP%]:not(.mat-button-disabled):active:not([class*=mat-elevation-z]){box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)}\n.mat-raised-button.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}\n.mat-fab[_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-mini-fab[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)}\n.mat-fab[_ngcontent-%COMP%]:not(.mat-button-disabled):active:not([class*=mat-elevation-z]), .mat-mini-fab[_ngcontent-%COMP%]:not(.mat-button-disabled):active:not([class*=mat-elevation-z]){box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0, 0, 0, 0.12)}\n.mat-fab.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-mini-fab.mat-button-disabled[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}\n.mat-button-toggle-standalone[_ngcontent-%COMP%], .mat-button-toggle-group[_ngcontent-%COMP%]{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)}\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard[_ngcontent-%COMP%], .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]{box-shadow:none}\n.mat-button-toggle[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\n.mat-button-toggle[_ngcontent-%COMP%]   .mat-button-toggle-focus-overlay[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.12)}\n.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]{color:rgba(0,0,0,.87);background:#fff}\n.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle-focus-overlay[_ngcontent-%COMP%]{background-color:#000}\n.mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%] + .mat-button-toggle[_ngcontent-%COMP%]{border-left:solid 1px rgba(0,0,0,.12)}\n[dir=rtl][_ngcontent-%COMP%]   .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%] + .mat-button-toggle[_ngcontent-%COMP%]{border-left:none;border-right:solid 1px rgba(0,0,0,.12)}\n.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%] + .mat-button-toggle[_ngcontent-%COMP%]{border-left:none;border-right:none;border-top:solid 1px rgba(0,0,0,.12)}\n.mat-button-toggle-checked[_ngcontent-%COMP%]{background-color:#e0e0e0;color:rgba(0,0,0,.54)}\n.mat-button-toggle-checked.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\n.mat-button-toggle-disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.26);background-color:#eee}\n.mat-button-toggle-disabled.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]{background:#fff}\n.mat-button-toggle-disabled.mat-button-toggle-checked[_ngcontent-%COMP%]{background-color:#bdbdbd}\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard[_ngcontent-%COMP%], .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]{border:solid 1px rgba(0,0,0,.12)}\n.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle-label-content[_ngcontent-%COMP%]{line-height:48px}\n.mat-card[_ngcontent-%COMP%]{background:#fff;color:rgba(0,0,0,.87)}\n.mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12)}\n.mat-card.mat-card-flat[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}\n.mat-card-subtitle[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\n.mat-checkbox-frame[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.54)}\n.mat-checkbox-checkmark[_ngcontent-%COMP%]{fill:#fafafa}\n.mat-checkbox-checkmark-path[_ngcontent-%COMP%]{stroke:#fafafa !important}\n.mat-checkbox-mixedmark[_ngcontent-%COMP%]{background-color:#fafafa}\n.mat-checkbox-indeterminate.mat-primary[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-primary[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#673ab7}\n.mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#ffd740}\n.mat-checkbox-indeterminate.mat-warn[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-warn[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#f44336}\n.mat-checkbox-disabled.mat-checkbox-checked[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-disabled.mat-checkbox-indeterminate[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%]{background-color:#b0b0b0}\n.mat-checkbox-disabled[_ngcontent-%COMP%]:not(.mat-checkbox-checked)   .mat-checkbox-frame[_ngcontent-%COMP%]{border-color:#b0b0b0}\n.mat-checkbox-disabled[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\n.mat-checkbox[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#000}\n.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-primary   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-primary   .mat-ripple-element[_ngcontent-%COMP%]{background:#673ab7}\n.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-accent   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-accent   .mat-ripple-element[_ngcontent-%COMP%]{background:#ffd740}\n.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-warn   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-warn   .mat-ripple-element[_ngcontent-%COMP%]{background:#f44336}\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]{background-color:#e0e0e0;color:rgba(0,0,0,.87)}\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%]{color:rgba(0,0,0,.87);opacity:.4}\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]:not(.mat-chip-disabled):active{box-shadow:0px 3px 3px -2px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14),0px 1px 8px 0px rgba(0, 0, 0, 0.12)}\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]:not(.mat-chip-disabled)   .mat-chip-remove[_ngcontent-%COMP%]:hover{opacity:.54}\n.mat-chip.mat-standard-chip.mat-chip-disabled[_ngcontent-%COMP%]{opacity:.4}\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]::after{background:#000}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]{background-color:#673ab7;color:#fff}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%]{color:#fff;opacity:.4}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%]{background-color:#f44336;color:#fff}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%]{color:#fff;opacity:.4}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%]{background-color:#ffd740;color:rgba(0,0,0,.87)}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%]{color:rgba(0,0,0,.87);opacity:.4}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.1)}\n.mat-table[_ngcontent-%COMP%]{background:#fff}\n.mat-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .mat-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .mat-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], [mat-header-row][_ngcontent-%COMP%], [mat-row][_ngcontent-%COMP%], [mat-footer-row][_ngcontent-%COMP%], .mat-table-sticky[_ngcontent-%COMP%]{background:inherit}\nmat-row[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%]{border-bottom-color:rgba(0,0,0,.12)}\n.mat-header-cell[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\n.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\n.mat-calendar-arrow[_ngcontent-%COMP%]{border-top-color:rgba(0,0,0,.54)}\n.mat-datepicker-toggle[_ngcontent-%COMP%], .mat-datepicker-content[_ngcontent-%COMP%]   .mat-calendar-next-button[_ngcontent-%COMP%], .mat-datepicker-content[_ngcontent-%COMP%]   .mat-calendar-previous-button[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\n.mat-calendar-table-header[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\n.mat-calendar-table-header-divider[_ngcontent-%COMP%]::after{background:rgba(0,0,0,.12)}\n.mat-calendar-body-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\n.mat-calendar-body-cell-content[_ngcontent-%COMP%], .mat-date-range-input-separator[_ngcontent-%COMP%]{color:rgba(0,0,0,.87);border-color:transparent}\n.mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){color:rgba(0,0,0,.38)}\n.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-date-range-input-separator[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\n.mat-calendar-body-cell[_ngcontent-%COMP%]:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-keyboard-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%] > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%] > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:rgba(0,0,0,.04)}\n.mat-calendar-body-in-preview[_ngcontent-%COMP%]{color:rgba(0,0,0,.24)}\n.mat-calendar-body-today[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:rgba(0,0,0,.38)}\n.mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-today[_ngcontent-%COMP%]:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:rgba(0,0,0,.18)}\n.mat-calendar-body-in-range[_ngcontent-%COMP%]::before{background:rgba(103,58,183,.2)}\n.mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%]::before{background:rgba(249,171,0,.2)}\n.mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before, [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before{background:linear-gradient(to right, rgba(103, 58, 183, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%)}\n.mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before, [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before{background:linear-gradient(to left, rgba(103, 58, 183, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%)}\n.mat-calendar-body-in-range[_ngcontent-%COMP%] > .mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-calendar-body-in-comparison-range.mat-calendar-body-in-range[_ngcontent-%COMP%]::after{background:#a8dab5}\n.mat-calendar-body-comparison-identical.mat-calendar-body-selected[_ngcontent-%COMP%], .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%] > .mat-calendar-body-selected[_ngcontent-%COMP%]{background:#46a35e}\n.mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:#673ab7;color:#fff}\n.mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:rgba(103,58,183,.4)}\n.mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 1px #fff}\n.mat-datepicker-content[_ngcontent-%COMP%]{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12);background-color:#fff;color:rgba(0,0,0,.87)}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-range[_ngcontent-%COMP%]::before{background:rgba(255,215,64,.2)}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%]::before{background:rgba(249,171,0,.2)}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before, .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before{background:linear-gradient(to right, rgba(255, 215, 64, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%)}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before, .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before{background:linear-gradient(to left, rgba(255, 215, 64, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%)}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-range[_ngcontent-%COMP%] > .mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range.mat-calendar-body-in-range[_ngcontent-%COMP%]::after{background:#a8dab5}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-comparison-identical.mat-calendar-body-selected[_ngcontent-%COMP%], .mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%] > .mat-calendar-body-selected[_ngcontent-%COMP%]{background:#46a35e}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:#ffd740;color:rgba(0,0,0,.87)}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:rgba(255,215,64,.4)}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 1px rgba(0,0,0,.87)}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-range[_ngcontent-%COMP%]::before{background:rgba(244,67,54,.2)}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%]::before{background:rgba(249,171,0,.2)}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before, .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before{background:linear-gradient(to right, rgba(244, 67, 54, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%)}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-end[_ngcontent-%COMP%]::before, .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   [dir=rtl][_ngcontent-%COMP%]   .mat-calendar-body-comparison-bridge-start[_ngcontent-%COMP%]::before{background:linear-gradient(to left, rgba(244, 67, 54, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%)}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-range[_ngcontent-%COMP%] > .mat-calendar-body-comparison-identical[_ngcontent-%COMP%], .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range.mat-calendar-body-in-range[_ngcontent-%COMP%]::after{background:#a8dab5}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-comparison-identical.mat-calendar-body-selected[_ngcontent-%COMP%], .mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-in-comparison-range[_ngcontent-%COMP%] > .mat-calendar-body-selected[_ngcontent-%COMP%]{background:#46a35e}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:#f44336;color:#fff}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-disabled[_ngcontent-%COMP%] > .mat-calendar-body-selected[_ngcontent-%COMP%]{background-color:rgba(244,67,54,.4)}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 1px #fff}\n.mat-datepicker-content-touch[_ngcontent-%COMP%]{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}\n.mat-datepicker-toggle-active[_ngcontent-%COMP%]{color:#673ab7}\n.mat-datepicker-toggle-active.mat-accent[_ngcontent-%COMP%]{color:#ffd740}\n.mat-datepicker-toggle-active.mat-warn[_ngcontent-%COMP%]{color:#f44336}\n.mat-date-range-input-inner[disabled][_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\n.mat-dialog-container[_ngcontent-%COMP%]{box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0, 0, 0, 0.12);background:#fff;color:rgba(0,0,0,.87)}\n.mat-divider[_ngcontent-%COMP%]{border-top-color:rgba(0,0,0,.12)}\n.mat-divider-vertical[_ngcontent-%COMP%]{border-right-color:rgba(0,0,0,.12)}\n.mat-expansion-panel[_ngcontent-%COMP%]{background:#fff;color:rgba(0,0,0,.87)}\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)}\n.mat-action-row[_ngcontent-%COMP%]{border-top-color:rgba(0,0,0,.12)}\n.mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header.cdk-keyboard-focused[_ngcontent-%COMP%]:not([aria-disabled=true]), .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header.cdk-program-focused[_ngcontent-%COMP%]:not([aria-disabled=true]), .mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expanded)   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover:not([aria-disabled=true]){background:rgba(0,0,0,.04)}\n@media(hover: none){.mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expanded):not([aria-disabled=true])   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover{background:#fff}}\n.mat-expansion-panel-header-title[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\n.mat-expansion-panel-header-description[_ngcontent-%COMP%], .mat-expansion-indicator[_ngcontent-%COMP%]::after{color:rgba(0,0,0,.54)}\n.mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]{color:rgba(0,0,0,.26)}\n.mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%]{color:inherit}\n.mat-expansion-panel-header[_ngcontent-%COMP%]{height:48px}\n.mat-expansion-panel-header.mat-expanded[_ngcontent-%COMP%]{height:64px}\n.mat-form-field-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.6)}\n.mat-hint[_ngcontent-%COMP%]{color:rgba(0,0,0,.6)}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:#673ab7}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label.mat-accent[_ngcontent-%COMP%]{color:#ffd740}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label.mat-warn[_ngcontent-%COMP%]{color:#f44336}\n.mat-focused[_ngcontent-%COMP%]   .mat-form-field-required-marker[_ngcontent-%COMP%]{color:#ffd740}\n.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.87)}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#673ab7}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-accent[_ngcontent-%COMP%]{background-color:#ffd740}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-warn[_ngcontent-%COMP%]{background-color:#f44336}\n.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid)   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:#673ab7}\n.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid).mat-accent   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:#ffd740}\n.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid).mat-warn   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:#f44336}\n.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:#f44336}\n.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label.mat-accent[_ngcontent-%COMP%], .mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]   .mat-form-field-required-marker[_ngcontent-%COMP%]{color:#f44336}\n.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%], .mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-accent[_ngcontent-%COMP%]{background-color:#f44336}\n.mat-error[_ngcontent-%COMP%]{color:#f44336}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-hint[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.42)}\n.mat-form-field-appearance-legacy.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-image:linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);background-size:4px 100%;background-repeat:repeat-x}\n.mat-form-field-appearance-standard[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.42)}\n.mat-form-field-appearance-standard.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-image:linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);background-size:4px 100%;background-repeat:repeat-x}\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.04)}\n.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.02)}\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]::before{background-color:rgba(0,0,0,.42)}\n.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\n.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]::before{background-color:transparent}\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:rgba(0,0,0,.12)}\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\n.mat-form-field-appearance-outline.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:#673ab7}\n.mat-form-field-appearance-outline.mat-focused.mat-accent[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:#ffd740}\n.mat-form-field-appearance-outline.mat-focused.mat-warn[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:#f44336}\n.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%]{color:#f44336}\n.mat-form-field-appearance-outline.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\n.mat-form-field-appearance-outline.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%]{color:rgba(0,0,0,.06)}\n.mat-icon.mat-primary[_ngcontent-%COMP%]{color:#673ab7}\n.mat-icon.mat-accent[_ngcontent-%COMP%]{color:#ffd740}\n.mat-icon.mat-warn[_ngcontent-%COMP%]{color:#f44336}\n.mat-form-field-type-mat-native-select[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:rgba(0,0,0,.54)}\n.mat-input-element[_ngcontent-%COMP%]:disabled, .mat-form-field-type-mat-native-select.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:rgba(0,0,0,.38)}\n.mat-input-element[_ngcontent-%COMP%]{caret-color:#673ab7}\n.mat-input-element[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(0,0,0,.42)}\n.mat-input-element[_ngcontent-%COMP%]::placeholder{color:rgba(0,0,0,.42)}\n.mat-input-element[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(0,0,0,.42)}\n.mat-input-element[_ngcontent-%COMP%]::-webkit-input-placeholder{color:rgba(0,0,0,.42)}\n.mat-input-element[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(0,0,0,.42)}\n.mat-form-field.mat-accent[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{caret-color:#ffd740}\n.mat-form-field.mat-warn[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%], .mat-form-field-invalid[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{caret-color:#f44336}\n.mat-form-field-type-mat-native-select.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after{color:#f44336}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\n.mat-list-base[_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\n.mat-list-item-disabled[_ngcontent-%COMP%]{background-color:#eee}\n.mat-list-option[_ngcontent-%COMP%]:hover, .mat-list-option[_ngcontent-%COMP%]:focus, .mat-nav-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:hover, .mat-nav-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:focus, .mat-action-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:hover, .mat-action-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:focus{background:rgba(0,0,0,.04)}\n.mat-list-single-selected-option[_ngcontent-%COMP%], .mat-list-single-selected-option[_ngcontent-%COMP%]:hover, .mat-list-single-selected-option[_ngcontent-%COMP%]:focus{background:rgba(0,0,0,.12)}\n.mat-menu-panel[_ngcontent-%COMP%]{background:#fff}\n.mat-menu-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)}\n.mat-menu-item[_ngcontent-%COMP%]{background:transparent;color:rgba(0,0,0,.87)}\n.mat-menu-item[disabled][_ngcontent-%COMP%], .mat-menu-item[disabled][_ngcontent-%COMP%]::after{color:rgba(0,0,0,.38)}\n.mat-menu-item[_ngcontent-%COMP%]   .mat-icon-no-color[_ngcontent-%COMP%], .mat-menu-item-submenu-trigger[_ngcontent-%COMP%]::after{color:rgba(0,0,0,.54)}\n.mat-menu-item[_ngcontent-%COMP%]:hover:not([disabled]), .mat-menu-item.cdk-program-focused[_ngcontent-%COMP%]:not([disabled]), .mat-menu-item.cdk-keyboard-focused[_ngcontent-%COMP%]:not([disabled]), .mat-menu-item-highlighted[_ngcontent-%COMP%]:not([disabled]){background:rgba(0,0,0,.04)}\n.mat-paginator[_ngcontent-%COMP%]{background:#fff}\n.mat-paginator[_ngcontent-%COMP%], .mat-paginator-page-size[_ngcontent-%COMP%]   .mat-select-trigger[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\n.mat-paginator-decrement[_ngcontent-%COMP%], .mat-paginator-increment[_ngcontent-%COMP%]{border-top:2px solid rgba(0,0,0,.54);border-right:2px solid rgba(0,0,0,.54)}\n.mat-paginator-first[_ngcontent-%COMP%], .mat-paginator-last[_ngcontent-%COMP%]{border-top:2px solid rgba(0,0,0,.54)}\n.mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-decrement[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-increment[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-first[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-last[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.38)}\n.mat-paginator-container[_ngcontent-%COMP%]{min-height:56px}\n.mat-progress-bar-background[_ngcontent-%COMP%]{fill:#d1c4e9}\n.mat-progress-bar-buffer[_ngcontent-%COMP%]{background-color:#d1c4e9}\n.mat-progress-bar-fill[_ngcontent-%COMP%]::after{background-color:#673ab7}\n.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-background[_ngcontent-%COMP%]{fill:#ffe57f}\n.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-buffer[_ngcontent-%COMP%]{background-color:#ffe57f}\n.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-fill[_ngcontent-%COMP%]::after{background-color:#ffd740}\n.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-background[_ngcontent-%COMP%]{fill:#ffcdd2}\n.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-buffer[_ngcontent-%COMP%]{background-color:#ffcdd2}\n.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-fill[_ngcontent-%COMP%]::after{background-color:#f44336}\n.mat-progress-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#673ab7}\n.mat-progress-spinner.mat-accent[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner.mat-accent[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#ffd740}\n.mat-progress-spinner.mat-warn[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner.mat-warn[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#f44336}\n.mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.54)}\n.mat-radio-button.mat-primary.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:#673ab7}\n.mat-radio-button.mat-primary[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-primary[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-primary.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-primary[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%]{background-color:#673ab7}\n.mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:#ffd740}\n.mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-accent[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%]{background-color:#ffd740}\n.mat-radio-button.mat-warn.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:#f44336}\n.mat-radio-button.mat-warn[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-warn[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-warn.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-warn[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%]{background-color:#f44336}\n.mat-radio-button.mat-radio-disabled.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%], .mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.38)}\n.mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.38)}\n.mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-label-content[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\n.mat-radio-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#000}\n.mat-select-value[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\n.mat-select-placeholder[_ngcontent-%COMP%]{color:rgba(0,0,0,.42)}\n.mat-select-disabled[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\n.mat-select-arrow[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\n.mat-select-panel[_ngcontent-%COMP%]{background:#fff}\n.mat-select-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)}\n.mat-select-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-multiple){background:rgba(0,0,0,.12)}\n.mat-form-field.mat-focused.mat-primary[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:#673ab7}\n.mat-form-field.mat-focused.mat-accent[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:#ffd740}\n.mat-form-field.mat-focused.mat-warn[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:#f44336}\n.mat-form-field[_ngcontent-%COMP%]   .mat-select.mat-select-invalid[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:#f44336}\n.mat-form-field[_ngcontent-%COMP%]   .mat-select.mat-select-disabled[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\n.mat-drawer-container[_ngcontent-%COMP%]{background-color:#fafafa;color:rgba(0,0,0,.87)}\n.mat-drawer[_ngcontent-%COMP%]{background-color:#fff;color:rgba(0,0,0,.87)}\n.mat-drawer.mat-drawer-push[_ngcontent-%COMP%]{background-color:#fff}\n.mat-drawer[_ngcontent-%COMP%]:not(.mat-drawer-side){box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12)}\n.mat-drawer-side[_ngcontent-%COMP%]{border-right:solid 1px rgba(0,0,0,.12)}\n.mat-drawer-side.mat-drawer-end[_ngcontent-%COMP%]{border-left:solid 1px rgba(0,0,0,.12);border-right:none}\n[dir=rtl][_ngcontent-%COMP%]   .mat-drawer-side[_ngcontent-%COMP%]{border-left:solid 1px rgba(0,0,0,.12);border-right:none}\n[dir=rtl][_ngcontent-%COMP%]   .mat-drawer-side.mat-drawer-end[_ngcontent-%COMP%]{border-left:none;border-right:solid 1px rgba(0,0,0,.12)}\n.mat-drawer-backdrop.mat-drawer-shown[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.6)}\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%]{background-color:#ffd740}\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%]{background-color:rgba(255,215,64,.54)}\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#ffd740}\n.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%]{background-color:#673ab7}\n.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%]{background-color:rgba(103,58,183,.54)}\n.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#673ab7}\n.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%]{background-color:#f44336}\n.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%]{background-color:rgba(244,67,54,.54)}\n.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#f44336}\n.mat-slide-toggle[_ngcontent-%COMP%]:not(.mat-checked)   .mat-ripple-element[_ngcontent-%COMP%]{background-color:#000}\n.mat-slide-toggle-thumb[_ngcontent-%COMP%]{box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12);background-color:#fafafa}\n.mat-slide-toggle-bar[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.38)}\n.mat-slider-track-background[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.26)}\n.mat-primary[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:#673ab7}\n.mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%]{color:#fff}\n.mat-primary[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%]{background-color:rgba(103,58,183,.2)}\n.mat-accent[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:#ffd740}\n.mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\n.mat-accent[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%]{background-color:rgba(255,215,64,.2)}\n.mat-warn[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:#f44336}\n.mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%]{color:#fff}\n.mat-warn[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%]{background-color:rgba(244,67,54,.2)}\n.mat-slider[_ngcontent-%COMP%]:hover   .mat-slider-track-background[_ngcontent-%COMP%], .cdk-focused[_ngcontent-%COMP%]   .mat-slider-track-background[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.38)}\n.mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-track-background[_ngcontent-%COMP%], .mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.26)}\n.mat-slider-disabled[_ngcontent-%COMP%]:hover   .mat-slider-track-background[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.26)}\n.mat-slider-min-value[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.12)}\n.mat-slider-min-value.mat-slider-thumb-label-showing[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value.mat-slider-thumb-label-showing[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.87)}\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.26)}\n.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing)   .mat-slider-thumb[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.26);background-color:transparent}\n.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing):hover   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing).cdk-focused   .mat-slider-thumb[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.38)}\n.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled   .mat-slider-thumb[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.26)}\n.mat-slider-has-ticks[_ngcontent-%COMP%]   .mat-slider-wrapper[_ngcontent-%COMP%]::after{border-color:rgba(0,0,0,.7)}\n.mat-slider-horizontal[_ngcontent-%COMP%]   .mat-slider-ticks[_ngcontent-%COMP%]{background-image:repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);background-image:-moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent)}\n.mat-slider-vertical[_ngcontent-%COMP%]   .mat-slider-ticks[_ngcontent-%COMP%]{background-image:repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent)}\n.mat-step-header.cdk-keyboard-focused[_ngcontent-%COMP%], .mat-step-header.cdk-program-focused[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.04)}\n@media(hover: none){.mat-step-header[_ngcontent-%COMP%]:hover{background:none}}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-label[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-optional[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.54);color:#fff}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-selected[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%]{background-color:#673ab7;color:#fff}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-error[_ngcontent-%COMP%]{background-color:transparent;color:#f44336}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-label.mat-step-label-active[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-label.mat-step-label-error[_ngcontent-%COMP%]{color:#f44336}\n.mat-stepper-horizontal[_ngcontent-%COMP%], .mat-stepper-vertical[_ngcontent-%COMP%]{background-color:#fff}\n.mat-stepper-vertical-line[_ngcontent-%COMP%]::before{border-left-color:rgba(0,0,0,.12)}\n.mat-horizontal-stepper-header[_ngcontent-%COMP%]::before, .mat-horizontal-stepper-header[_ngcontent-%COMP%]::after, .mat-stepper-horizontal-line[_ngcontent-%COMP%]{border-top-color:rgba(0,0,0,.12)}\n.mat-horizontal-stepper-header[_ngcontent-%COMP%]{height:72px}\n.mat-stepper-label-position-bottom[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%], .mat-vertical-stepper-header[_ngcontent-%COMP%]{padding:24px 24px}\n.mat-stepper-vertical-line[_ngcontent-%COMP%]::before{top:-16px;bottom:-16px}\n.mat-stepper-label-position-bottom[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]::after, .mat-stepper-label-position-bottom[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%]::before{top:36px}\n.mat-stepper-label-position-bottom[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%]{top:36px}\n.mat-sort-header-arrow[_ngcontent-%COMP%]{color:#757575}\n.mat-tab-nav-bar[_ngcontent-%COMP%], .mat-tab-header[_ngcontent-%COMP%]{border-bottom:1px solid rgba(0,0,0,.12)}\n.mat-tab-group-inverted-header[_ngcontent-%COMP%]   .mat-tab-nav-bar[_ngcontent-%COMP%], .mat-tab-group-inverted-header[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%]{border-top:1px solid rgba(0,0,0,.12);border-bottom:none}\n.mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\n.mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.38)}\n.mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.87)}\n.mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.38)}\n.mat-tab-group[class*=mat-background-][_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar[class*=mat-background-][_ngcontent-%COMP%]{border-bottom:none;border-top:none}\n.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(209,196,233,.3)}\n.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#673ab7}\n.mat-tab-group.mat-primary.mat-background-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-primary.mat-background-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#fff}\n.mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(255,229,127,.3)}\n.mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#ffd740}\n.mat-tab-group.mat-accent.mat-background-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-accent.mat-background-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.87)}\n.mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}\n.mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#f44336}\n.mat-tab-group.mat-warn.mat-background-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-warn.mat-background-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%]{background-color:#fff}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(209,196,233,.3)}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%]{background-color:#673ab7}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]{color:#fff}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%]{color:rgba(255,255,255,.4)}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:#fff}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(255,255,255,.4)}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.12)}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(255,229,127,.3)}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%]{background-color:#ffd740}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%]{color:rgba(0,0,0,.4)}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.87)}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.4)}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.12)}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%]{background-color:#f44336}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]{color:#fff}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%]{color:rgba(255,255,255,.4)}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:#fff}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%]{border-color:rgba(255,255,255,.4)}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.12)}\n.mat-toolbar[_ngcontent-%COMP%]{background:#f5f5f5;color:rgba(0,0,0,.87)}\n.mat-toolbar.mat-primary[_ngcontent-%COMP%]{background:#673ab7;color:#fff}\n.mat-toolbar.mat-accent[_ngcontent-%COMP%]{background:#ffd740;color:rgba(0,0,0,.87)}\n.mat-toolbar.mat-warn[_ngcontent-%COMP%]{background:#f44336;color:#fff}\n.mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{background-color:currentColor}\n.mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%]{color:inherit}\n.mat-toolbar[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{caret-color:currentColor}\n.mat-toolbar-multiple-rows[_ngcontent-%COMP%]{min-height:64px}\n.mat-toolbar-row[_ngcontent-%COMP%], .mat-toolbar-single-row[_ngcontent-%COMP%]{height:64px}\n@media(max-width: 599px){.mat-toolbar-multiple-rows[_ngcontent-%COMP%]{min-height:56px}.mat-toolbar-row[_ngcontent-%COMP%], .mat-toolbar-single-row[_ngcontent-%COMP%]{height:56px}}\n.mat-tooltip[_ngcontent-%COMP%]{background:rgba(97,97,97,.9)}\n.mat-tree[_ngcontent-%COMP%]{background:#fff}\n.mat-tree-node[_ngcontent-%COMP%], .mat-nested-tree-node[_ngcontent-%COMP%]{color:rgba(0,0,0,.87)}\n.mat-tree-node[_ngcontent-%COMP%]{min-height:48px}\n.mat-snack-bar-container[_ngcontent-%COMP%]{color:rgba(255,255,255,.7);background:#323232;box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)}\n.mat-simple-snackbar-action[_ngcontent-%COMP%]{color:#ffd740}\n\n\n@-webkit-keyframes opacity {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes opacity {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes slide-up {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n@keyframes slide-up {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n@-webkit-keyframes slide-down {\n  0% {\n    transform: translateY(-100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n@keyframes slide-down {\n  0% {\n    transform: translateY(-100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n@-webkit-keyframes slide-left {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(0%);\n  }\n}\n@keyframes slide-left {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(0%);\n  }\n}\n@-webkit-keyframes slide-right {\n  0% {\n    transform: translateX(100%);\n  }\n  100% {\n    transform: translateX(0%);\n  }\n}\n@keyframes slide-right {\n  0% {\n    transform: translateX(100%);\n  }\n  100% {\n    transform: translateX(0%);\n  }\n}\n@-webkit-keyframes shake {\n  0% {\n    transform: rotate(10deg);\n  }\n  25% {\n    transform: rotate(-10deg);\n  }\n  50% {\n    transform: rotate(0);\n  }\n}\n@keyframes shake {\n  0% {\n    transform: rotate(10deg);\n  }\n  25% {\n    transform: rotate(-10deg);\n  }\n  50% {\n    transform: rotate(0);\n  }\n}\n@-webkit-keyframes grow-center-to-sides {\n  0% {\n    transform: scale(0, 1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes grow-center-to-sides {\n  0% {\n    transform: scale(0, 1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.site-block[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.ratio-16-9[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.ratio-16-9[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  width: 100%;\n  padding-top: 56%;\n}\n.ratio-16-9[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.ratio-16-9[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.ratio-square[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.ratio-square[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  width: 100%;\n  padding-top: 100%;\n}\n.ratio-square[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.ratio-square[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.ratio-card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.ratio-card[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  width: 100%;\n  padding-top: 80%;\n}\n.ratio-card[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.ratio-card[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.ratio-poster[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.ratio-poster[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  width: 100%;\n  padding-top: 150%;\n}\n.ratio-poster[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.ratio-poster[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.bolder[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n.lighter[_ngcontent-%COMP%] {\n  font-weight: lighter;\n}\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.inline-flex[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.col[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.row[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.bet[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.around[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n.evenly[_ngcontent-%COMP%] {\n  justify-content: space-evenly;\n}\n.j-center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.j-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.a-end[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.a-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.not-allowed[_ngcontent-%COMP%], .disable[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n}\n.cursor-initial[_ngcontent-%COMP%] {\n  cursor: initial;\n}\n.relative[_ngcontent-%COMP%] {\n  position: relative;\n}\n.fixed[_ngcontent-%COMP%] {\n  position: fixed;\n}\n.absolute[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.static[_ngcontent-%COMP%] {\n  position: static;\n}\n.sticky[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n}\n.none[_ngcontent-%COMP%] {\n  display: none;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n}\n.block[_ngcontent-%COMP%] {\n  display: block;\n}\n.inline-block[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.monospace[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.m-i-start-1ch[_ngcontent-%COMP%] {\n  -webkit-margin-start: 1ch;\n          margin-inline-start: 1ch;\n}\n.m-i-start-2ch[_ngcontent-%COMP%] {\n  -webkit-margin-start: 2ch;\n          margin-inline-start: 2ch;\n}\n.m-i-start-3ch[_ngcontent-%COMP%] {\n  -webkit-margin-start: 3ch;\n          margin-inline-start: 3ch;\n}\n.m-i-end-1ch[_ngcontent-%COMP%] {\n  -webkit-margin-end: 1ch;\n          margin-inline-end: 1ch;\n}\n.m-i-end-2ch[_ngcontent-%COMP%] {\n  -webkit-margin-end: 2ch;\n          margin-inline-end: 2ch;\n}\n.m-i-end-3ch[_ngcontent-%COMP%] {\n  -webkit-margin-end: 3ch;\n          margin-inline-end: 3ch;\n}\n.m-b-start-1ch[_ngcontent-%COMP%] {\n  -webkit-margin-before: 1ch;\n          margin-block-start: 1ch;\n}\n.m-b-start-2ch[_ngcontent-%COMP%] {\n  -webkit-margin-before: 2ch;\n          margin-block-start: 2ch;\n}\n.m-b-start-3ch[_ngcontent-%COMP%] {\n  -webkit-margin-before: 3ch;\n          margin-block-start: 3ch;\n}\n.m-b-end-1ch[_ngcontent-%COMP%] {\n  -webkit-margin-after: 1ch;\n          margin-block-end: 1ch;\n}\n.m-b-end-2ch[_ngcontent-%COMP%] {\n  -webkit-margin-after: 2ch;\n          margin-block-end: 2ch;\n}\n.m-b-end-3ch[_ngcontent-%COMP%] {\n  -webkit-margin-after: 3ch;\n          margin-block-end: 3ch;\n}\n.w100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.h100[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.avatar[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  background-color: #68b0c9;\n  transition: background-color 0.3s;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.avatar.isHorizonal[_ngcontent-%COMP%] {\n  -o-object-fit: fill;\n     object-fit: fill;\n}\n.avatar.avatar-s[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n}\n.avatar.avatar-m[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n}\n.avatar.avatar-l[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n}\n.divider-line[_ngcontent-%COMP%] {\n  background-color: #991212;\n  height: 0.5px;\n  width: 50%;\n  margin: 20px auto;\n}\n.divider-start-line[_ngcontent-%COMP%] {\n  background-color: #991212;\n  height: 0.5px;\n  width: 25vw;\n  margin: 20px;\n}\n.cln-ul[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n.cln-li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.cln-a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: initial;\n}\n.cln-btn[_ngcontent-%COMP%] {\n  border: none;\n  background-color: initial;\n}\n.opacity-hover-9[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.opacity-hover-8[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.opacity-hover-7[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n.opacity-hover-6[_ngcontent-%COMP%]:hover {\n  opacity: 0.6;\n}\n.opacity-hover-5[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n}\nbody[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  margin: 0;\n  scroll-behavior: smooth;\n}\nbody[_ngcontent-%COMP%]   .screen[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000;\n  opacity: 0;\n  z-index: -11;\n  transition: opacity 0.5s, z-index 0 0.5s;\n}\nbody.screen-visibility[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\nbody.screen-visibility[_ngcontent-%COMP%]   .screen[_ngcontent-%COMP%] {\n  transition: opacity 0.5s;\n  z-index: 1000;\n  opacity: 0.85;\n}\nbody[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.8em;\n}\nbody[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n}\nbody[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #0000001c;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: initial;\n}\nul[_ngcontent-%COMP%] {\n  list-style: none;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.width-container[_ngcontent-%COMP%] {\n  width: 100vw;\n}\n@media (min-width: 680px) {\n  .width-container[_ngcontent-%COMP%] {\n    width: 680px;\n    margin: 0 auto;\n  }\n}\nnav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 32px;\n}\nnav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: transform 0.3s;\n}\nnav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform-origin: 0;\n  transform: rotate(-15deg);\n}\nnav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 16px;\n  color: red;\n}\nnav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 35px;\n}\nnav[_ngcontent-%COMP%]   .nav-link-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0px 20px;\n  position: relative;\n}\nnav[_ngcontent-%COMP%]   .nav-link-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: red;\n  z-index: 1;\n}\nnav[_ngcontent-%COMP%]   .nav-link-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::after {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  overflow: hidden;\n  content: \"\";\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  -webkit-animation: grow-center-to-sides 0.3s;\n          animation: grow-center-to-sides 0.3s;\n  border-radius: 0;\n  background-color: rgba(255, 0, 0, 0.062);\n}\nnav[_ngcontent-%COMP%]   .nav-link-container[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: red;\n  z-index: 1;\n}\nnav[_ngcontent-%COMP%]   .nav-link-container[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]::before {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  content: \"\";\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  -webkit-animation: grow-center-to-sides 0.3s linear;\n          animation: grow-center-to-sides 0.3s linear;\n  background-color: red;\n  border-radius: 0;\n  height: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLW5hdi9DOlxcc2l0ZS1wcm9qXFxfQW5ndWxhclxcTWlzcy1RdWl6XFxxdWl6LWZyb250ZW5kL3NyY1xcc3R5bGVzLnNjc3MiLCJub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvcHJlYnVpbHQtdGhlbWVzL2RlZXBwdXJwbGUtYW1iZXIuY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4tbmF2L0M6XFxzaXRlLXByb2pcXF9Bbmd1bGFyXFxNaXNzLVF1aXpcXHF1aXotZnJvbnRlbmQvc3JjXFxzdHlsZXNcXHNldHVwXFxfbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1uYXYvQzpcXHNpdGUtcHJvalxcX0FuZ3VsYXJcXE1pc3MtUXVpelxccXVpei1mcm9udGVuZC9zcmNcXHN0eWxlc1xcYW5pbWF0aW9uc1xcX2ZhZGUuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluLW5hdi9tYWluLW5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluLW5hdi9DOlxcc2l0ZS1wcm9qXFxfQW5ndWxhclxcTWlzcy1RdWl6XFxxdWl6LWZyb250ZW5kL3NyY1xcc3R5bGVzXFxhbmltYXRpb25zXFxfc2xpZGUuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluLW5hdi9DOlxcc2l0ZS1wcm9qXFxfQW5ndWxhclxcTWlzcy1RdWl6XFxxdWl6LWZyb250ZW5kL3NyY1xcc3R5bGVzXFxhbmltYXRpb25zXFxfcm90YXRlLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1uYXYvQzpcXHNpdGUtcHJvalxcX0FuZ3VsYXJcXE1pc3MtUXVpelxccXVpei1mcm9udGVuZC9zcmNcXHN0eWxlc1xcYW5pbWF0aW9uc1xcX3JpcHBsZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4tbmF2L0M6XFxzaXRlLXByb2pcXF9Bbmd1bGFyXFxNaXNzLVF1aXpcXHF1aXotZnJvbnRlbmQvc3JjXFxzdHlsZXNcXGJhc2ljc1xcX2hlbHBlcnMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluLW5hdi9DOlxcc2l0ZS1wcm9qXFxfQW5ndWxhclxcTWlzcy1RdWl6XFxxdWl6LWZyb250ZW5kL3NyY1xcc3R5bGVzXFxzZXR1cFxcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4tbmF2L0M6XFxzaXRlLXByb2pcXF9Bbmd1bGFyXFxNaXNzLVF1aXpcXHF1aXotZnJvbnRlbmQvc3JjXFxzdHlsZXNcXGJhc2ljc1xcX2Jhc2Uuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluLW5hdi9DOlxcc2l0ZS1wcm9qXFxfQW5ndWxhclxcTWlzcy1RdWl6XFxxdWl6LWZyb250ZW5kL3NyY1xcc3R5bGVzXFxiYXNpY3NcXF9sYXlvdXQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluLW5hdi9DOlxcc2l0ZS1wcm9qXFxfQW5ndWxhclxcTWlzcy1RdWl6XFxxdWl6LWZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtYWluLW5hdlxcbWFpbi1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNBQSxtQkFBbUIsZUFBZSxDQUFDLGNBQWMsQ0FBQyxnREFBZ0Q7QUFBQyxvQ0FBb0MsYUFBYTtBQUFDLG9DQUFvQyxjQUFjO0FBQUMseUNBQXlDLHVEQUF1RCxDQUFDLHFCQUFxQixDQUFDLGVBQWU7QUFBQyxzQ0FBc0MsdURBQXVELENBQUMscUJBQXFCLENBQUMsZUFBZTtBQUFDLDZDQUE2Qyx1REFBdUQsQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlO0FBQUMsNkNBQTZDLHVEQUF1RCxDQUFDLHFCQUFxQixDQUFDLGVBQWU7QUFBQywyQkFBMkIsb0VBQW9FLENBQUMsZUFBZTtBQUFDLDJCQUEyQixvRUFBb0UsQ0FBQyxlQUFlO0FBQUMsNkJBQTZCLHVEQUF1RCxDQUFDLHFCQUFxQjtBQUFDLHNDQUFzQyx1REFBdUQs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QVJnY1I7QVEvYlE7RUFDSSwwQkFBQTtBUmljWjtBUTliWTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7QVJnY2hCO0FRN2JRO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBUitiWjtBUTViSTtFQUNJLFdBQUE7QVI4YlI7QVEzYlE7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBUjZiWjtBUTViWTtFQUVJLFVBQUE7RVZtRFosVUFBQTtBRTJZSjtBRjFZSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSw0Q0FBQTtVQUFBLG9DQUFBO0VBQ0EsZ0JVL0RrRDtFVmdFbEQsd0NVaEUwQjtBUjRjaEM7QVExY1k7RUFDSSxVQUFBO0VWa0VaLFVBQUE7QUUyWUo7QUYxWUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsbURBQUE7VUFBQSwyQ0FBQTtFQUNBLHFCVTVFK0I7RVY2RS9CLGdCVTdFb0M7RVY4RXBDLFdBQUE7QUU0WU4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4tbmF2L21haW4tbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGltcG9ydCAnfkBhbmd1bGFyL21hdGVyaWFsL3ByZWJ1aWx0LXRoZW1lcy9kZWVwcHVycGxlLWFtYmVyLmNzcyc7XG5cblxuQGltcG9ydCAnLi9zdHlsZXMvZ2xvYmFsLnNjc3MnO1xuQGltcG9ydCAnLi9zdHlsZXMvZ2xvYmFsLXN0YXRpYy5zY3NzJzsiLCIubWF0LWJhZGdlLWNvbnRlbnR7Zm9udC13ZWlnaHQ6NjAwO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtYmFkZ2Utc21hbGwgLm1hdC1iYWRnZS1jb250ZW50e2ZvbnQtc2l6ZTo5cHh9Lm1hdC1iYWRnZS1sYXJnZSAubWF0LWJhZGdlLWNvbnRlbnR7Zm9udC1zaXplOjI0cHh9Lm1hdC1oMSwubWF0LWhlYWRsaW5lLC5tYXQtdHlwb2dyYXBoeSBoMXtmb250OjQwMCAyNHB4LzMycHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO21hcmdpbjowIDAgMTZweH0ubWF0LWgyLC5tYXQtdGl0bGUsLm1hdC10eXBvZ3JhcGh5IGgye2ZvbnQ6NTAwIDIwcHgvMzJweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzpub3JtYWw7bWFyZ2luOjAgMCAxNnB4fS5tYXQtaDMsLm1hdC1zdWJoZWFkaW5nLTIsLm1hdC10eXBvZ3JhcGh5IGgze2ZvbnQ6NDAwIDE2cHgvMjhweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzpub3JtYWw7bWFyZ2luOjAgMCAxNnB4fS5tYXQtaDQsLm1hdC1zdWJoZWFkaW5nLTEsLm1hdC10eXBvZ3JhcGh5IGg0e2ZvbnQ6NDAwIDE1cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzpub3JtYWw7bWFyZ2luOjAgMCAxNnB4fS5tYXQtaDUsLm1hdC10eXBvZ3JhcGh5IGg1e2ZvbnQ6NDAwIGNhbGMoMTRweCAqIDAuODMpLzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bWFyZ2luOjAgMCAxMnB4fS5tYXQtaDYsLm1hdC10eXBvZ3JhcGh5IGg2e2ZvbnQ6NDAwIGNhbGMoMTRweCAqIDAuNjcpLzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bWFyZ2luOjAgMCAxMnB4fS5tYXQtYm9keS1zdHJvbmcsLm1hdC1ib2R5LTJ7Zm9udDo1MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbH0ubWF0LWJvZHksLm1hdC1ib2R5LTEsLm1hdC10eXBvZ3JhcGh5e2ZvbnQ6NDAwIDE0cHgvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzpub3JtYWx9Lm1hdC1ib2R5IHAsLm1hdC1ib2R5LTEgcCwubWF0LXR5cG9ncmFwaHkgcHttYXJnaW46MCAwIDEycHh9Lm1hdC1zbWFsbCwubWF0LWNhcHRpb257Zm9udDo0MDAgMTJweC8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbH0ubWF0LWRpc3BsYXktNCwubWF0LXR5cG9ncmFwaHkgLm1hdC1kaXNwbGF5LTR7Zm9udDozMDAgMTEycHgvMTEycHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6LTAuMDVlbTttYXJnaW46MCAwIDU2cHh9Lm1hdC1kaXNwbGF5LTMsLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS0ze2ZvbnQ6NDAwIDU2cHgvNTZweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzotMC4wMmVtO21hcmdpbjowIDAgNjRweH0ubWF0LWRpc3BsYXktMiwubWF0LXR5cG9ncmFwaHkgLm1hdC1kaXNwbGF5LTJ7Zm9udDo0MDAgNDVweC80OHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOi0wLjAwNWVtO21hcmdpbjowIDAgNjRweH0ubWF0LWRpc3BsYXktMSwubWF0LXR5cG9ncmFwaHkgLm1hdC1kaXNwbGF5LTF7Zm9udDo0MDAgMzRweC80MHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbDttYXJnaW46MCAwIDY0cHh9Lm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVye2ZvbnQ6NDAwIDE0cHgvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzpub3JtYWx9Lm1hdC1idXR0b24sLm1hdC1yYWlzZWQtYnV0dG9uLC5tYXQtaWNvbi1idXR0b24sLm1hdC1zdHJva2VkLWJ1dHRvbiwubWF0LWZsYXQtYnV0dG9uLC5tYXQtZmFiLC5tYXQtbWluaS1mYWJ7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtYnV0dG9uLXRvZ2dsZXtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LWNhcmR7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1jYXJkLXRpdGxle2ZvbnQtc2l6ZToyNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZXtmb250LXNpemU6MjBweH0ubWF0LWNhcmQtc3VidGl0bGUsLm1hdC1jYXJkLWNvbnRlbnR7Zm9udC1zaXplOjE0cHh9Lm1hdC1jaGVja2JveHtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LWNoZWNrYm94LWxheW91dCAubWF0LWNoZWNrYm94LWxhYmVse2xpbmUtaGVpZ2h0OjI0cHh9Lm1hdC1jaGlwe2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LWNoaXAgLm1hdC1jaGlwLXRyYWlsaW5nLWljb24ubWF0LWljb24sLm1hdC1jaGlwIC5tYXQtY2hpcC1yZW1vdmUubWF0LWljb257Zm9udC1zaXplOjE4cHh9Lm1hdC10YWJsZXtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LWhlYWRlci1jZWxse2ZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LWNlbGwsLm1hdC1mb290ZXItY2VsbHtmb250LXNpemU6MTRweH0ubWF0LWNhbGVuZGFye2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtY2FsZW5kYXItYm9keXtmb250LXNpemU6MTNweH0ubWF0LWNhbGVuZGFyLWJvZHktbGFiZWwsLm1hdC1jYWxlbmRhci1wZXJpb2QtYnV0dG9ue2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlciB0aHtmb250LXNpemU6MTFweDtmb250LXdlaWdodDo0MDB9Lm1hdC1kaWFsb2ctdGl0bGV7Zm9udDo1MDAgMjBweC8zMnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbH0ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJ7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjE1cHg7Zm9udC13ZWlnaHQ6NDAwfS5tYXQtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnR7Zm9udDo0MDAgMTRweC8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbH0ubWF0LWZvcm0tZmllbGR7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC13ZWlnaHQ6NDAwO2xpbmUtaGVpZ2h0OjEuMTI1O2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbH0ubWF0LWZvcm0tZmllbGQtd3JhcHBlcntwYWRkaW5nLWJvdHRvbToxLjM0Mzc1ZW19Lm1hdC1mb3JtLWZpZWxkLXByZWZpeCAubWF0LWljb24sLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCAubWF0LWljb257Zm9udC1zaXplOjE1MCU7bGluZS1oZWlnaHQ6MS4xMjV9Lm1hdC1mb3JtLWZpZWxkLXByZWZpeCAubWF0LWljb24tYnV0dG9uLC5tYXQtZm9ybS1maWVsZC1zdWZmaXggLm1hdC1pY29uLWJ1dHRvbntoZWlnaHQ6MS41ZW07d2lkdGg6MS41ZW19Lm1hdC1mb3JtLWZpZWxkLXByZWZpeCAubWF0LWljb24tYnV0dG9uIC5tYXQtaWNvbiwubWF0LWZvcm0tZmllbGQtc3VmZml4IC5tYXQtaWNvbi1idXR0b24gLm1hdC1pY29ue2hlaWdodDoxLjEyNWVtO2xpbmUtaGVpZ2h0OjEuMTI1fS5tYXQtZm9ybS1maWVsZC1pbmZpeHtwYWRkaW5nOi41ZW0gMDtib3JkZXItdG9wOi44NDM3NWVtIHNvbGlkIHRyYW5zcGFyZW50fS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4zNDM3NWVtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzMzMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjM0Mzc0ZW0pIHNjYWxlKDAuNzUpO3dpZHRoOjEzMy4zMzMzNDMzMzMzJX0ubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlcnt0b3A6LTAuODQzNzVlbTtwYWRkaW5nLXRvcDouODQzNzVlbX0ubWF0LWZvcm0tZmllbGQtbGFiZWx7dG9wOjEuMzQzNzVlbX0ubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JvdHRvbToxLjM0Mzc1ZW19Lm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVye2ZvbnQtc2l6ZTo3NSU7bWFyZ2luLXRvcDouNjY2NjY2NjY2N2VtO3RvcDpjYWxjKDEwMCUgLSAxLjc5MTY2NjY2NjdlbSl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC13cmFwcGVye3BhZGRpbmctYm90dG9tOjEuMjVlbX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4e3BhZGRpbmc6LjQzNzVlbSAwfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSgwLjc1KSBwZXJzcGVjdGl2ZSgxMDBweCkgdHJhbnNsYXRlWigwLjAwMXB4KTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjVlbSkgc2NhbGUoMC43NSk7d2lkdGg6MTMzLjMzMzMzMzMzMzMlfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjVlbSkgc2NhbGUoMC43NSkgcGVyc3BlY3RpdmUoMTAwcHgpIHRyYW5zbGF0ZVooMC4wMDEwMXB4KTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjRlbSkgc2NhbGUoMC43NSk7d2lkdGg6MTMzLjMzMzM0MzMzMzMlfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pKy5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSgwLjc1KSBwZXJzcGVjdGl2ZSgxMDBweCkgdHJhbnNsYXRlWigwLjAwMTAycHgpOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMS4yODEyM2VtKSBzY2FsZSgwLjc1KTt3aWR0aDoxMzMuMzMzMzUzMzMzMyV9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1sYWJlbHt0b3A6MS4yODEyNWVtfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JvdHRvbToxLjI1ZW19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlcnttYXJnaW4tdG9wOi41NDE2NjY2NjY3ZW07dG9wOmNhbGMoMTAwJSAtIDEuNjY2NjY2NjY2N2VtKX1AbWVkaWEgcHJpbnR7Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTIyZW0pIHNjYWxlKDAuNzUpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuMjgxMjFlbSkgc2NhbGUoMC43NSl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikrLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xLjI4MTJlbSkgc2NhbGUoMC43NSl9fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWluZml4e3BhZGRpbmc6LjI1ZW0gMCAuNzVlbSAwfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWxhYmVse3RvcDoxLjA5Mzc1ZW07bWFyZ2luLXRvcDotMC41ZW19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cysubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTAuNTkzNzVlbSkgc2NhbGUoMC43NSk7d2lkdGg6MTMzLjMzMzMzMzMzMzMlfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTAuNTkzNzRlbSkgc2NhbGUoMC43NSk7d2lkdGg6MTMzLjMzMzM0MzMzMzMlfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWluZml4e3BhZGRpbmc6MWVtIDAgMWVtIDB9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtbGFiZWx7dG9wOjEuODQzNzVlbTttYXJnaW4tdG9wOi0wLjI1ZW19Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCwubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cysubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuNTkzNzVlbSkgc2NhbGUoMC43NSk7d2lkdGg6MTMzLjMzMzMzMzMzMzMlfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSsubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWx7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEuNTkzNzRlbSkgc2NhbGUoMC43NSk7d2lkdGg6MTMzLjMzMzM0MzMzMzMlfS5tYXQtZ3JpZC10aWxlLWhlYWRlciwubWF0LWdyaWQtdGlsZS1mb290ZXJ7Zm9udC1zaXplOjE0cHh9Lm1hdC1ncmlkLXRpbGUtaGVhZGVyIC5tYXQtbGluZSwubWF0LWdyaWQtdGlsZS1mb290ZXIgLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWdyaWQtdGlsZS1oZWFkZXIgLm1hdC1saW5lOm50aC1jaGlsZChuKzIpLC5tYXQtZ3JpZC10aWxlLWZvb3RlciAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMil7Zm9udC1zaXplOjEycHh9aW5wdXQubWF0LWlucHV0LWVsZW1lbnR7bWFyZ2luLXRvcDotMC4wNjI1ZW19Lm1hdC1tZW51LWl0ZW17Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NDAwfS5tYXQtcGFnaW5hdG9yLC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2Vye2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4fS5tYXQtcmFkaW8tYnV0dG9ue2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtc2VsZWN0e2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtc2VsZWN0LXRyaWdnZXJ7aGVpZ2h0OjEuMTI1ZW19Lm1hdC1zbGlkZS10b2dnbGUtY29udGVudHtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0e2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LXN0ZXBwZXItdmVydGljYWwsLm1hdC1zdGVwcGVyLWhvcml6b250YWx7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1zdGVwLWxhYmVse2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjQwMH0ubWF0LXN0ZXAtc3ViLWxhYmVsLWVycm9ye2ZvbnQtd2VpZ2h0Om5vcm1hbH0ubWF0LXN0ZXAtbGFiZWwtZXJyb3J7Zm9udC1zaXplOjE0cHh9Lm1hdC1zdGVwLWxhYmVsLXNlbGVjdGVke2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LXRhYi1ncm91cHtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1saW5re2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMH0ubWF0LXRvb2xiYXIsLm1hdC10b29sYmFyIGgxLC5tYXQtdG9vbGJhciBoMiwubWF0LXRvb2xiYXIgaDMsLm1hdC10b29sYmFyIGg0LC5tYXQtdG9vbGJhciBoNSwubWF0LXRvb2xiYXIgaDZ7Zm9udDo1MDAgMjBweC8zMnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOm5vcm1hbDttYXJnaW46MH0ubWF0LXRvb2x0aXB7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjEwcHg7cGFkZGluZy10b3A6NnB4O3BhZGRpbmctYm90dG9tOjZweH0ubWF0LXRvb2x0aXAtaGFuZHNldHtmb250LXNpemU6MTRweDtwYWRkaW5nLXRvcDo4cHg7cGFkZGluZy1ib3R0b206OHB4fS5tYXQtbGlzdC1pdGVte2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmfS5tYXQtbGlzdC1vcHRpb257Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWZ9Lm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW17Zm9udC1zaXplOjE2cHh9Lm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMil7Zm9udC1zaXplOjE0cHh9Lm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbntmb250LXNpemU6MTZweH0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZXt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbiAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMil7Zm9udC1zaXplOjE0cHh9Lm1hdC1saXN0LWJhc2UgLm1hdC1zdWJoZWFkZXJ7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3QtaXRlbXtmb250LXNpemU6MTJweH0ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5le3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpcztkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpe2ZvbnQtc2l6ZToxMnB4fS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3Qtb3B0aW9ue2ZvbnQtc2l6ZToxMnB4fS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZXt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpe2ZvbnQtc2l6ZToxMnB4fS5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LXN1YmhlYWRlcntmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtmb250LXNpemU6MTJweDtmb250LXdlaWdodDo1MDB9Lm1hdC1vcHRpb257Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjE2cHh9Lm1hdC1vcHRncm91cC1sYWJlbHtmb250OjUwMCAxNHB4LzI0cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6bm9ybWFsfS5tYXQtc2ltcGxlLXNuYWNrYmFye2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNHB4fS5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbntsaW5lLWhlaWdodDoxO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC13ZWlnaHQ6NTAwfS5tYXQtdHJlZXtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZn0ubWF0LXRyZWUtbm9kZSwubWF0LW5lc3RlZC10cmVlLW5vZGV7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc2l6ZToxNHB4fS5tYXQtcmlwcGxle292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZX0ubWF0LXJpcHBsZTpub3QoOmVtcHR5KXt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX0ubWF0LXJpcHBsZS5tYXQtcmlwcGxlLXVuYm91bmRlZHtvdmVyZmxvdzp2aXNpYmxlfS5tYXQtcmlwcGxlLWVsZW1lbnR7cG9zaXRpb246YWJzb2x1dGU7Ym9yZGVyLXJhZGl1czo1MCU7cG9pbnRlci1ldmVudHM6bm9uZTt0cmFuc2l0aW9uOm9wYWNpdHksdHJhbnNmb3JtIDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTt0cmFuc2Zvcm06c2NhbGUoMCl9LmNkay1oaWdoLWNvbnRyYXN0LWFjdGl2ZSAubWF0LXJpcHBsZS1lbGVtZW50e2Rpc3BsYXk6bm9uZX0uY2RrLXZpc3VhbGx5LWhpZGRlbntib3JkZXI6MDtjbGlwOnJlY3QoMCAwIDAgMCk7aGVpZ2h0OjFweDttYXJnaW46LTFweDtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzowO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjFweDtvdXRsaW5lOjA7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmV9LmNkay1vdmVybGF5LWNvbnRhaW5lciwuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXJ7cG9pbnRlci1ldmVudHM6bm9uZTt0b3A6MDtsZWZ0OjA7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJX0uY2RrLW92ZXJsYXktY29udGFpbmVye3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6MTAwMH0uY2RrLW92ZXJsYXktY29udGFpbmVyOmVtcHR5e2Rpc3BsYXk6bm9uZX0uY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXJ7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTAwMH0uY2RrLW92ZXJsYXktcGFuZXtwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czphdXRvO2JveC1zaXppbmc6Ym9yZGVyLWJveDt6LWluZGV4OjEwMDA7ZGlzcGxheTpmbGV4O21heC13aWR0aDoxMDAlO21heC1oZWlnaHQ6MTAwJX0uY2RrLW92ZXJsYXktYmFja2Ryb3B7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7ei1pbmRleDoxMDAwO3BvaW50ZXItZXZlbnRzOmF1dG87LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50O3RyYW5zaXRpb246b3BhY2l0eSA0MDBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtvcGFjaXR5OjB9LmNkay1vdmVybGF5LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmd7b3BhY2l0eToxfUBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKXsuY2RrLW92ZXJsYXktYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZ3tvcGFjaXR5Oi42fX0uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcHtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjMyKX0uY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AsLmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmd7b3BhY2l0eTowfS5jZGstb3ZlcmxheS1jb25uZWN0ZWQtcG9zaXRpb24tYm91bmRpbmctYm94e3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTAwMDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO21pbi13aWR0aDoxcHg7bWluLWhlaWdodDoxcHh9LmNkay1nbG9iYWwtc2Nyb2xsYmxvY2t7cG9zaXRpb246Zml4ZWQ7d2lkdGg6MTAwJTtvdmVyZmxvdy15OnNjcm9sbH1Aa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0ey8qISovfUBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5key8qISovfS5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6LXdlYmtpdC1hdXRvZmlsbHthbmltYXRpb246Y2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQgMHMgMW1zfS5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6bm90KDotd2Via2l0LWF1dG9maWxsKXthbmltYXRpb246Y2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kIDBzIDFtc310ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemV7cmVzaXplOm5vbmV9dGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZ3twYWRkaW5nOjJweCAwICFpbXBvcnRhbnQ7Ym94LXNpemluZzpjb250ZW50LWJveCAhaW1wb3J0YW50O2hlaWdodDphdXRvICFpbXBvcnRhbnQ7b3ZlcmZsb3c6aGlkZGVuICFpbXBvcnRhbnR9dGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZy1maXJlZm94e3BhZGRpbmc6MnB4IDAgIWltcG9ydGFudDtib3gtc2l6aW5nOmNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7aGVpZ2h0OjAgIWltcG9ydGFudH0ubWF0LWZvY3VzLWluZGljYXRvcntwb3NpdGlvbjpyZWxhdGl2ZX0ubWF0LW1kYy1mb2N1cy1pbmRpY2F0b3J7cG9zaXRpb246cmVsYXRpdmV9Lm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEpfS5tYXQtb3B0aW9ue2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LW9wdGlvbjpob3Zlcjpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpLC5tYXQtb3B0aW9uOmZvY3VzOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSk6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA0KX0ubWF0LW9wdGlvbi5tYXQtYWN0aXZle2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDQpO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LW9wdGlvbi5tYXQtb3B0aW9uLWRpc2FibGVke2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXByaW1hcnkgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCl7Y29sb3I6IzY3M2FiN30ubWF0LWFjY2VudCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKXtjb2xvcjojZmZkNzQwfS5tYXQtd2FybiAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKXtjb2xvcjojZjQ0MzM2fS5tYXQtb3B0Z3JvdXAtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtb3B0Z3JvdXAtZGlzYWJsZWQgLm1hdC1vcHRncm91cC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1wc2V1ZG8tY2hlY2tib3h7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtcHNldWRvLWNoZWNrYm94OjphZnRlcntjb2xvcjojZmFmYWZhfS5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVke2NvbG9yOiNiMGIwYjB9Lm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsLm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGV7YmFja2dyb3VuZDojNjczYWI3fS5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSwubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLC5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGV7YmFja2dyb3VuZDojZmZkNzQwfS5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLC5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRle2JhY2tncm91bmQ6I2Y0NDMzNn0ubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWQsLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVke2JhY2tncm91bmQ6I2IwYjBiMH0ubWF0LWFwcC1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6I2ZhZmFmYTtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1lbGV2YXRpb24tejB7Ym94LXNoYWRvdzowcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoxe2JveC1zaGFkb3c6MHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejJ7Ym94LXNoYWRvdzowcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16M3tib3gtc2hhZG93OjBweCAzcHggM3B4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAzcHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXo0e2JveC1zaGFkb3c6MHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXo1e2JveC1zaGFkb3c6MHB4IDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDVweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAxNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXo2e2JveC1zaGFkb3c6MHB4IDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggMThweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16N3tib3gtc2hhZG93OjBweCA0cHggNXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA3cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMnB4IDE2cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejh7Ym94LXNoYWRvdzowcHggNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXo5e2JveC1zaGFkb3c6MHB4IDVweCA2cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDlweCAxMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAzcHggMTZweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTB7Ym94LXNoYWRvdzowcHggNnB4IDZweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTBweCAxNHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA0cHggMThweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTF7Ym94LXNoYWRvdzowcHggNnB4IDdweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTFweCAxNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA0cHggMjBweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTJ7Ym94LXNoYWRvdzowcHggN3B4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTJweCAxN3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA1cHggMjJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTN7Ym94LXNoYWRvdzowcHggN3B4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTNweCAxOXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA1cHggMjRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTR7Ym94LXNoYWRvdzowcHggN3B4IDlweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTRweCAyMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA1cHggMjZweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTV7Ym94LXNoYWRvdzowcHggOHB4IDlweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTVweCAyMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA2cHggMjhweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTZ7Ym94LXNoYWRvdzowcHggOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDE2cHggMjRweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggNnB4IDMwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejE3e2JveC1zaGFkb3c6MHB4IDhweCAxMXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxN3B4IDI2cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDZweCAzMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoxOHtib3gtc2hhZG93OjBweCA5cHggMTFweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMThweCAyOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA3cHggMzRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MTl7Ym94LXNoYWRvdzowcHggOXB4IDEycHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDE5cHggMjlweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggN3B4IDM2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejIwe2JveC1zaGFkb3c6MHB4IDEwcHggMTNweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMjBweCAzMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA4cHggMzhweCA3cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MjF7Ym94LXNoYWRvdzowcHggMTBweCAxM3B4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAyMXB4IDMzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDhweCA0MHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZWxldmF0aW9uLXoyMntib3gtc2hhZG93OjBweCAxMHB4IDE0cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDIycHggMzVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggOHB4IDQycHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1lbGV2YXRpb24tejIze2JveC1zaGFkb3c6MHB4IDExcHggMTRweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMjNweCAzNnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA5cHggNDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWVsZXZhdGlvbi16MjR7Ym94LXNoYWRvdzowcHggMTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtdGhlbWUtbG9hZGVkLW1hcmtlcntkaXNwbGF5Om5vbmV9Lm1hdC1hdXRvY29tcGxldGUtcGFuZWx7YmFja2dyb3VuZDojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWF1dG9jb21wbGV0ZS1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA0cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtYWN0aXZlKTpub3QoOmhvdmVyKXtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LWFjdGl2ZSk6bm90KDpob3Zlcik6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1iYWRnZS1jb250ZW50e2NvbG9yOiNmZmY7YmFja2dyb3VuZDojNjczYWI3fS5jZGstaGlnaC1jb250cmFzdC1hY3RpdmUgLm1hdC1iYWRnZS1jb250ZW50e291dGxpbmU6c29saWQgMXB4O2JvcmRlci1yYWRpdXM6MH0ubWF0LWJhZGdlLWFjY2VudCAubWF0LWJhZGdlLWNvbnRlbnR7YmFja2dyb3VuZDojZmZkNzQwO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWJhZGdlLXdhcm4gLm1hdC1iYWRnZS1jb250ZW50e2NvbG9yOiNmZmY7YmFja2dyb3VuZDojZjQ0MzM2fS5tYXQtYmFkZ2V7cG9zaXRpb246cmVsYXRpdmV9Lm1hdC1iYWRnZS1oaWRkZW4gLm1hdC1iYWRnZS1jb250ZW50e2Rpc3BsYXk6bm9uZX0ubWF0LWJhZGdlLWRpc2FibGVkIC5tYXQtYmFkZ2UtY29udGVudHtiYWNrZ3JvdW5kOiNiOWI5Yjk7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtYmFkZ2UtY29udGVudHtwb3NpdGlvbjphYnNvbHV0ZTt0ZXh0LWFsaWduOmNlbnRlcjtkaXNwbGF5OmlubGluZS1ibG9jaztib3JkZXItcmFkaXVzOjUwJTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDt0cmFuc2Zvcm06c2NhbGUoMC42KTtvdmVyZmxvdzpoaWRkZW47d2hpdGUtc3BhY2U6bm93cmFwO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7cG9pbnRlci1ldmVudHM6bm9uZX0ubmctYW5pbWF0ZS1kaXNhYmxlZCAubWF0LWJhZGdlLWNvbnRlbnQsLm1hdC1iYWRnZS1jb250ZW50Ll9tYXQtYW5pbWF0aW9uLW5vb3BhYmxle3RyYW5zaXRpb246bm9uZX0ubWF0LWJhZGdlLWNvbnRlbnQubWF0LWJhZGdlLWFjdGl2ZXt0cmFuc2Zvcm06bm9uZX0ubWF0LWJhZGdlLXNtYWxsIC5tYXQtYmFkZ2UtY29udGVudHt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O2xpbmUtaGVpZ2h0OjE2cHh9Lm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYWJvdmUgLm1hdC1iYWRnZS1jb250ZW50e3RvcDotOHB4fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWJlbG93IC5tYXQtYmFkZ2UtY29udGVudHtib3R0b206LThweH0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LTE2cHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi0xNnB4fS5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudHtyaWdodDotMTZweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotMTZweH0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LThweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LThweH0ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6LThweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotOHB4fS5tYXQtYmFkZ2UtbWVkaXVtIC5tYXQtYmFkZ2UtY29udGVudHt3aWR0aDoyMnB4O2hlaWdodDoyMnB4O2xpbmUtaGVpZ2h0OjIycHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWFib3ZlIC5tYXQtYmFkZ2UtY29udGVudHt0b3A6LTExcHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWJlbG93IC5tYXQtYmFkZ2UtY29udGVudHtib3R0b206LTExcHh9Lm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotMjJweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDphdXRvO3JpZ2h0Oi0yMnB4fS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6LTIycHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi0yMnB4fS5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6LTExcHh9W2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50e2xlZnQ6YXV0bztyaWdodDotMTFweH0ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi0xMXB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0OmF1dG87bGVmdDotMTFweH0ubWF0LWJhZGdlLWxhcmdlIC5tYXQtYmFkZ2UtY29udGVudHt3aWR0aDoyOHB4O2hlaWdodDoyOHB4O2xpbmUtaGVpZ2h0OjI4cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYWJvdmUgLm1hdC1iYWRnZS1jb250ZW50e3RvcDotMTRweH0ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1iZWxvdyAubWF0LWJhZGdlLWNvbnRlbnR7Ym90dG9tOi0xNHB4fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotMjhweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LTI4cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi0yOHB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi0yOHB4fS5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnR7bGVmdDotMTRweH1bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudHtsZWZ0OmF1dG87cmlnaHQ6LTE0cHh9Lm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50e3JpZ2h0Oi0xNHB4fVtkaXI9cnRsXSAubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnR7cmlnaHQ6YXV0bztsZWZ0Oi0xNHB4fS5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lcntib3gtc2hhZG93OjBweCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTZweCAyNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtYnV0dG9uLC5tYXQtaWNvbi1idXR0b24sLm1hdC1zdHJva2VkLWJ1dHRvbntjb2xvcjppbmhlcml0O2JhY2tncm91bmQ6dHJhbnNwYXJlbnR9Lm1hdC1idXR0b24ubWF0LXByaW1hcnksLm1hdC1pY29uLWJ1dHRvbi5tYXQtcHJpbWFyeSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1wcmltYXJ5e2NvbG9yOiM2NzNhYjd9Lm1hdC1idXR0b24ubWF0LWFjY2VudCwubWF0LWljb24tYnV0dG9uLm1hdC1hY2NlbnQsLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYWNjZW50e2NvbG9yOiNmZmQ3NDB9Lm1hdC1idXR0b24ubWF0LXdhcm4sLm1hdC1pY29uLWJ1dHRvbi5tYXQtd2FybiwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC13YXJue2NvbG9yOiNmNDQzMzZ9Lm1hdC1idXR0b24ubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1idXR0b24ubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1pY29uLWJ1dHRvbi5tYXQtcHJpbWFyeS5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtaWNvbi1idXR0b24ubWF0LWFjY2VudC5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtaWNvbi1idXR0b24ubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LWljb24tYnV0dG9uLm1hdC1idXR0b24tZGlzYWJsZWQubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1wcmltYXJ5Lm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtd2Fybi5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LWJ1dHRvbi1kaXNhYmxlZC5tYXQtYnV0dG9uLWRpc2FibGVke2NvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LC5tYXQtaWNvbi1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3fS5tYXQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LWljb24tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmQ3NDB9Lm1hdC1idXR0b24ubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwubWF0LWljb24tYnV0dG9uLm1hdC13YXJuIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1pY29uLWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ubWF0LWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtaWNvbi1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXN0cm9rZWQtYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnR7b3BhY2l0eTouMTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcn0ubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQ6IzAwMH0ubWF0LXN0cm9rZWQtYnV0dG9uOm5vdCgubWF0LWJ1dHRvbi1kaXNhYmxlZCl7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWZsYXQtYnV0dG9uLC5tYXQtcmFpc2VkLWJ1dHRvbiwubWF0LWZhYiwubWF0LW1pbmktZmFie2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeSwubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnksLm1hdC1mYWIubWF0LXByaW1hcnksLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeXtjb2xvcjojZmZmfS5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudCwubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudCwubWF0LWZhYi5tYXQtYWNjZW50LC5tYXQtbWluaS1mYWIubWF0LWFjY2VudHtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybiwubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm4sLm1hdC1mYWIubWF0LXdhcm4sLm1hdC1taW5pLWZhYi5tYXQtd2Fybntjb2xvcjojZmZmfS5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuLm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5Lm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnQubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LXJhaXNlZC1idXR0b24ubWF0LWJ1dHRvbi1kaXNhYmxlZC5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtZmFiLm1hdC1wcmltYXJ5Lm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1mYWIubWF0LWFjY2VudC5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtZmFiLm1hdC13YXJuLm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1mYWIubWF0LWJ1dHRvbi1kaXNhYmxlZC5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LW1pbmktZmFiLm1hdC1hY2NlbnQubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LW1pbmktZmFiLm1hdC13YXJuLm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1taW5pLWZhYi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWR7Y29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnksLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5LC5tYXQtZmFiLm1hdC1wcmltYXJ5LC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3fS5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudCwubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudCwubWF0LWZhYi5tYXQtYWNjZW50LC5tYXQtbWluaS1mYWIubWF0LWFjY2VudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmQ3NDB9Lm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybiwubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm4sLm1hdC1mYWIubWF0LXdhcm4sLm1hdC1taW5pLWZhYi5tYXQtd2FybntiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeS5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudC5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LWZsYXQtYnV0dG9uLm1hdC1idXR0b24tZGlzYWJsZWQubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudC5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2Fybi5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1mYWIubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LWZhYi5tYXQtYWNjZW50Lm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1mYWIubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LWZhYi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWQsLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeS5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtbWluaS1mYWIubWF0LWFjY2VudC5tYXQtYnV0dG9uLWRpc2FibGVkLC5tYXQtbWluaS1mYWIubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwubWF0LW1pbmktZmFiLm1hdC1idXR0b24tZGlzYWJsZWQubWF0LWJ1dHRvbi1kaXNhYmxlZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1mYWIubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0ubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtZmFiLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LW1pbmktZmFiLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEpfS5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWZhYi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtbWluaS1mYWIubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEpfS5tYXQtc3Ryb2tlZC1idXR0b246bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksLm1hdC1mbGF0LWJ1dHRvbjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1yYWlzZWQtYnV0dG9uOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1yYWlzZWQtYnV0dG9uOm5vdCgubWF0LWJ1dHRvbi1kaXNhYmxlZCk6YWN0aXZlOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LXJhaXNlZC1idXR0b24ubWF0LWJ1dHRvbi1kaXNhYmxlZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1mYWI6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksLm1hdC1taW5pLWZhYjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA2cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1mYWI6bm90KC5tYXQtYnV0dG9uLWRpc2FibGVkKTphY3RpdmU6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksLm1hdC1taW5pLWZhYjpub3QoLm1hdC1idXR0b24tZGlzYWJsZWQpOmFjdGl2ZTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCA3cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAxMnB4IDE3cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDVweCAyMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtZmFiLm1hdC1idXR0b24tZGlzYWJsZWQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksLm1hdC1taW5pLWZhYi5tYXQtYnV0dG9uLWRpc2FibGVkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZSwubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXB7Ym94LXNoYWRvdzowcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkLC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJke2JveC1zaGFkb3c6bm9uZX0ubWF0LWJ1dHRvbi10b2dnbGV7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtYnV0dG9uLXRvZ2dsZSAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZHtjb2xvcjpyZ2JhKDAsMCwwLC44Nyk7YmFja2dyb3VuZDojZmZmfS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZS1mb2N1cy1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6IzAwMH0ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUrLm1hdC1idXR0b24tdG9nZ2xle2JvcmRlci1sZWZ0OnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMil9W2Rpcj1ydGxdIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSsubWF0LWJ1dHRvbi10b2dnbGV7Ym9yZGVyLWxlZnQ6bm9uZTtib3JkZXItcmlnaHQ6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZC5tYXQtYnV0dG9uLXRvZ2dsZS12ZXJ0aWNhbCAubWF0LWJ1dHRvbi10b2dnbGUrLm1hdC1idXR0b24tdG9nZ2xle2JvcmRlci1sZWZ0Om5vbmU7Ym9yZGVyLXJpZ2h0Om5vbmU7Ym9yZGVyLXRvcDpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2Vke2JhY2tncm91bmQtY29sb3I6I2UwZTBlMDtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZHtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1idXR0b24tdG9nZ2xlLWRpc2FibGVke2NvbG9yOnJnYmEoMCwwLDAsLjI2KTtiYWNrZ3JvdW5kLWNvbG9yOiNlZWV9Lm1hdC1idXR0b24tdG9nZ2xlLWRpc2FibGVkLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmR7YmFja2dyb3VuZDojZmZmfS5tYXQtYnV0dG9uLXRvZ2dsZS1kaXNhYmxlZC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2Vke2JhY2tncm91bmQtY29sb3I6I2JkYmRiZH0ubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkLC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJke2JvcmRlcjpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZS1sYWJlbC1jb250ZW50e2xpbmUtaGVpZ2h0OjQ4cHh9Lm1hdC1jYXJke2JhY2tncm91bmQ6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1jYXJkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1jYXJkLm1hdC1jYXJkLWZsYXQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtY2FyZC1zdWJ0aXRsZXtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1jaGVja2JveC1mcmFtZXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtY2hlY2tib3gtY2hlY2ttYXJre2ZpbGw6I2ZhZmFmYX0ubWF0LWNoZWNrYm94LWNoZWNrbWFyay1wYXRoe3N0cm9rZTojZmFmYWZhICFpbXBvcnRhbnR9Lm1hdC1jaGVja2JveC1taXhlZG1hcmt7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhfS5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiM2NzNhYjd9Lm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmQ3NDB9Lm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LXdhcm4gLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LWNoZWNrYm94LWRpc2FibGVkLm1hdC1jaGVja2JveC1jaGVja2VkIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwubWF0LWNoZWNrYm94LWRpc2FibGVkLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOiNiMGIwYjB9Lm1hdC1jaGVja2JveC1kaXNhYmxlZDpub3QoLm1hdC1jaGVja2JveC1jaGVja2VkKSAubWF0LWNoZWNrYm94LWZyYW1le2JvcmRlci1jb2xvcjojYjBiMGIwfS5tYXQtY2hlY2tib3gtZGlzYWJsZWQgLm1hdC1jaGVja2JveC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1jaGVja2JveCAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6IzAwMH0ubWF0LWNoZWNrYm94LWNoZWNrZWQ6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1jaGVja2JveDphY3RpdmU6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZDojNjczYWI3fS5tYXQtY2hlY2tib3gtY2hlY2tlZDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtY2hlY2tib3g6YWN0aXZlOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZDojZmZkNzQwfS5tYXQtY2hlY2tib3gtY2hlY2tlZDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LWNoZWNrYm94OmFjdGl2ZTpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kOiNmNDQzMzZ9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwe2JhY2tncm91bmQtY29sb3I6I2UwZTBlMDtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwIC5tYXQtY2hpcC1yZW1vdmV7Y29sb3I6cmdiYSgwLDAsMCwuODcpO29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwOm5vdCgubWF0LWNoaXAtZGlzYWJsZWQpOmFjdGl2ZXtib3gtc2hhZG93OjBweCAzcHggM3B4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAzcHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcDpub3QoLm1hdC1jaGlwLWRpc2FibGVkKSAubWF0LWNoaXAtcmVtb3ZlOmhvdmVye29wYWNpdHk6LjU0fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1kaXNhYmxlZHtvcGFjaXR5Oi40fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcDo6YWZ0ZXJ7YmFja2dyb3VuZDojMDAwfS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtcHJpbWFyeXtiYWNrZ3JvdW5kLWNvbG9yOiM2NzNhYjc7Y29sb3I6I2ZmZn0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXByaW1hcnkgLm1hdC1jaGlwLXJlbW92ZXtjb2xvcjojZmZmO29wYWNpdHk6LjR9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4xKX0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXdhcm57YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2O2NvbG9yOiNmZmZ9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC13YXJuIC5tYXQtY2hpcC1yZW1vdmV7Y29sb3I6I2ZmZjtvcGFjaXR5Oi40fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMSl9Lm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1hY2NlbnR7YmFja2dyb3VuZC1jb2xvcjojZmZkNzQwO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LWFjY2VudCAubWF0LWNoaXAtcmVtb3Zle2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtvcGFjaXR5Oi40fS5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xKX0ubWF0LXRhYmxle2JhY2tncm91bmQ6I2ZmZn0ubWF0LXRhYmxlIHRoZWFkLC5tYXQtdGFibGUgdGJvZHksLm1hdC10YWJsZSB0Zm9vdCxtYXQtaGVhZGVyLXJvdyxtYXQtcm93LG1hdC1mb290ZXItcm93LFttYXQtaGVhZGVyLXJvd10sW21hdC1yb3ddLFttYXQtZm9vdGVyLXJvd10sLm1hdC10YWJsZS1zdGlja3l7YmFja2dyb3VuZDppbmhlcml0fW1hdC1yb3csbWF0LWhlYWRlci1yb3csbWF0LWZvb3Rlci1yb3csdGgubWF0LWhlYWRlci1jZWxsLHRkLm1hdC1jZWxsLHRkLm1hdC1mb290ZXItY2VsbHtib3JkZXItYm90dG9tLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWhlYWRlci1jZWxse2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWNlbGwsLm1hdC1mb290ZXItY2VsbHtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1jYWxlbmRhci1hcnJvd3tib3JkZXItdG9wLWNvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LWRhdGVwaWNrZXItdG9nZ2xlLC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItbmV4dC1idXR0b24sLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhci1wcmV2aW91cy1idXR0b257Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVye2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlci1kaXZpZGVyOjphZnRlcntiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWNhbGVuZGFyLWJvZHktbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQsLm1hdC1kYXRlLXJhbmdlLWlucHV0LXNlcGFyYXRvcntjb2xvcjpyZ2JhKDAsMCwwLC44Nyk7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50fS5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZD4ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwpe2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1kYXRlLXJhbmdlLWlucHV0LXNlcGFyYXRvcntjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1jYWxlbmRhci1ib2R5LWNlbGw6bm90KC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCk6aG92ZXI+Lm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsKSwuY2RrLWtleWJvYXJkLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZT4ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwpLC5jZGstcHJvZ3JhbS1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmU+Lm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjA0KX0ubWF0LWNhbGVuZGFyLWJvZHktaW4tcHJldmlld3tjb2xvcjpyZ2JhKDAsMCwwLC4yNCl9Lm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwpe2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsKXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMTgpfS5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZTo6YmVmb3Jle2JhY2tncm91bmQ6cmdiYSgxMDMsNTgsMTgzLC4yKX0ubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwsLm1hdC1jYWxlbmRhci1ib2R5LWluLWNvbXBhcmlzb24tcmFuZ2U6OmJlZm9yZXtiYWNrZ3JvdW5kOnJnYmEoMjQ5LDE3MSwwLC4yKX0ubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2Utc3RhcnQ6OmJlZm9yZSxbZGlyPXJ0bF0gLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLWVuZDo6YmVmb3Jle2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDEwMywgNTgsIDE4MywgMC4yKSA1MCUsIHJnYmEoMjQ5LCAxNzEsIDAsIDAuMikgNTAlKX0ubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2UtZW5kOjpiZWZvcmUsW2Rpcj1ydGxdIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1zdGFydDo6YmVmb3Jle2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMTAzLCA1OCwgMTgzLCAwLjIpIDUwJSwgcmdiYSgyNDksIDE3MSwgMCwgMC4yKSA1MCUpfS5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZT4ubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwsLm1hdC1jYWxlbmRhci1ib2R5LWluLWNvbXBhcmlzb24tcmFuZ2UubWF0LWNhbGVuZGFyLWJvZHktaW4tcmFuZ2U6OmFmdGVye2JhY2tncm91bmQ6I2E4ZGFiNX0ubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQsLm1hdC1jYWxlbmRhci1ib2R5LWluLWNvbXBhcmlzb24tcmFuZ2U+Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQ6IzQ2YTM1ZX0ubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3O2NvbG9yOiNmZmZ9Lm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkPi5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTAzLDU4LDE4MywuNCl9Lm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4ICNmZmZ9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnR7Ym94LXNoYWRvdzowcHggMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZTo6YmVmb3Jle2JhY2tncm91bmQ6cmdiYSgyNTUsMjE1LDY0LC4yKX0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCwubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1pbi1jb21wYXJpc29uLXJhbmdlOjpiZWZvcmV7YmFja2dyb3VuZDpyZ2JhKDI0OSwxNzEsMCwuMil9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2Utc3RhcnQ6OmJlZm9yZSwubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IFtkaXI9cnRsXSAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2UtZW5kOjpiZWZvcmV7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjU1LCAyMTUsIDY0LCAwLjIpIDUwJSwgcmdiYSgyNDksIDE3MSwgMCwgMC4yKSA1MCUpfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLWVuZDo6YmVmb3JlLC5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgW2Rpcj1ydGxdIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1zdGFydDo6YmVmb3Jle2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMjU1LCAyMTUsIDY0LCAwLjIpIDUwJSwgcmdiYSgyNDksIDE3MSwgMCwgMC4yKSA1MCUpfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LWluLXJhbmdlPi5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCwubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1pbi1jb21wYXJpc29uLXJhbmdlLm1hdC1jYWxlbmRhci1ib2R5LWluLXJhbmdlOjphZnRlcntiYWNrZ3JvdW5kOiNhOGRhYjV9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQsLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktaW4tY29tcGFyaXNvbi1yYW5nZT4ubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZDojNDZhMzVlfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6I2ZmZDc0MDtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjE1LDY0LC40KX0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCByZ2JhKDAsMCwwLC44Nyl9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LWluLXJhbmdlOjpiZWZvcmV7YmFja2dyb3VuZDpyZ2JhKDI0NCw2Nyw1NCwuMil9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsLC5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1pbi1jb21wYXJpc29uLXJhbmdlOjpiZWZvcmV7YmFja2dyb3VuZDpyZ2JhKDI0OSwxNzEsMCwuMil9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLXN0YXJ0OjpiZWZvcmUsLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gW2Rpcj1ydGxdIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1lbmQ6OmJlZm9yZXtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNDQsIDY3LCA1NCwgMC4yKSA1MCUsIHJnYmEoMjQ5LCAxNzEsIDAsIDAuMikgNTAlKX0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2UtZW5kOjpiZWZvcmUsLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gW2Rpcj1ydGxdIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1zdGFydDo6YmVmb3Jle2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMjQ0LCA2NywgNTQsIDAuMikgNTAlLCByZ2JhKDI0OSwgMTcxLCAwLCAwLjIpIDUwJSl9Lm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LWluLXJhbmdlPi5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCwubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktaW4tY29tcGFyaXNvbi1yYW5nZS5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZTo6YWZ0ZXJ7YmFja2dyb3VuZDojYThkYWI1fS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCwubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktaW4tY29tcGFyaXNvbi1yYW5nZT4ubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWR7YmFja2dyb3VuZDojNDZhMzVlfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzY7Y29sb3I6I2ZmZn0ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDQsNjcsNTQsLjQpfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZHtib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCAjZmZmfS5tYXQtZGF0ZXBpY2tlci1jb250ZW50LXRvdWNoe2JveC1zaGFkb3c6MHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKX0ubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZXtjb2xvcjojNjczYWI3fS5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZlLm1hdC1hY2NlbnR7Y29sb3I6I2ZmZDc0MH0ubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZS5tYXQtd2Fybntjb2xvcjojZjQ0MzM2fS5tYXQtZGF0ZS1yYW5nZS1pbnB1dC1pbm5lcltkaXNhYmxlZF17Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtZGlhbG9nLWNvbnRhaW5lcntib3gtc2hhZG93OjBweCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggOXB4IDQ2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7YmFja2dyb3VuZDojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWRpdmlkZXJ7Ym9yZGVyLXRvcC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1kaXZpZGVyLXZlcnRpY2Fse2JvcmRlci1yaWdodC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1leHBhbnNpb24tcGFuZWx7YmFja2dyb3VuZDojZmZmO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtib3gtc2hhZG93OjBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtYWN0aW9uLXJvd3tib3JkZXItdG9wLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWV4cGFuc2lvbi1wYW5lbCAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKSwubWF0LWV4cGFuc2lvbi1wYW5lbCAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pLC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXI6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA0KX1AbWVkaWEoaG92ZXI6IG5vbmUpey5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKTpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3ZlcntiYWNrZ3JvdW5kOiNmZmZ9fS5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uLC5tYXQtZXhwYW5zaW9uLWluZGljYXRvcjo6YWZ0ZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclthcmlhLWRpc2FibGVkPXRydWVde2NvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD10cnVlXSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9ue2NvbG9yOmluaGVyaXR9Lm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVye2hlaWdodDo0OHB4fS5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5tYXQtZXhwYW5kZWR7aGVpZ2h0OjY0cHh9Lm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOnJnYmEoMCwwLDAsLjYpfS5tYXQtaGludHtjb2xvcjpyZ2JhKDAsMCwwLC42KX0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOiM2NzNhYjd9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbC5tYXQtYWNjZW50e2NvbG9yOiNmZmQ3NDB9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbC5tYXQtd2Fybntjb2xvcjojZjQ0MzM2fS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2Vye2NvbG9yOiNmZmQ3NDB9Lm1hdC1mb3JtLWZpZWxkLXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZXtiYWNrZ3JvdW5kLWNvbG9yOiM2NzNhYjd9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LWFjY2VudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmQ3NDB9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LXdhcm57YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb2N1c2VkOm5vdCgubWF0LWZvcm0tZmllbGQtaW52YWxpZCkgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlcntjb2xvcjojNjczYWI3fS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb2N1c2VkOm5vdCgubWF0LWZvcm0tZmllbGQtaW52YWxpZCkubWF0LWFjY2VudCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVye2NvbG9yOiNmZmQ3NDB9Lm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvY3VzZWQ6bm90KC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkKS5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVye2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVse2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLm1hdC1hY2NlbnQsLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXJ7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LWFjY2VudHtiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzZ9Lm1hdC1lcnJvcntjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWhpbnR7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNDIpIDAlLCByZ2JhKDAsIDAsIDAsIDAuNDIpIDMzJSwgdHJhbnNwYXJlbnQgMCUpO2JhY2tncm91bmQtc2l6ZTo0cHggMTAwJTtiYWNrZ3JvdW5kLXJlcGVhdDpyZXBlYXQteH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLXN0YW5kYXJkLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC40MikgMCUsIHJnYmEoMCwgMCwgMCwgMC40MikgMzMlLCB0cmFuc3BhcmVudCAwJSk7YmFja2dyb3VuZC1zaXplOjRweCAxMDAlO2JhY2tncm91bmQtcmVwZWF0OnJlcGVhdC14fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWZsZXh7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtZmxleHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjAyKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5le2NvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre2NvbG9yOiM2NzNhYjd9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZC5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre2NvbG9yOiNmZmQ3NDB9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZC5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tjb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNre2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmV7Y29sb3I6cmdiYSgwLDAsMCwuMDYpfS5tYXQtaWNvbi5tYXQtcHJpbWFyeXtjb2xvcjojNjczYWI3fS5tYXQtaWNvbi5tYXQtYWNjZW50e2NvbG9yOiNmZmQ3NDB9Lm1hdC1pY29uLm1hdC13YXJue2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlcntjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1pbnB1dC1lbGVtZW50OmRpc2FibGVkLC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXJ7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtaW5wdXQtZWxlbWVudHtjYXJldC1jb2xvcjojNjczYWI3fS5tYXQtaW5wdXQtZWxlbWVudDo6cGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSgwLDAsMCwuNDIpfS5tYXQtaW5wdXQtZWxlbWVudDo6LW1vei1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1pbnB1dC1lbGVtZW50Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWlucHV0LWVsZW1lbnQ6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMCwwLDAsLjQyKX0ubWF0LWZvcm0tZmllbGQubWF0LWFjY2VudCAubWF0LWlucHV0LWVsZW1lbnR7Y2FyZXQtY29sb3I6I2ZmZDc0MH0ubWF0LWZvcm0tZmllbGQubWF0LXdhcm4gLm1hdC1pbnB1dC1lbGVtZW50LC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtaW5wdXQtZWxlbWVudHtjYXJldC1jb2xvcjojZjQ0MzM2fS5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlcntjb2xvcjojZjQ0MzM2fS5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVte2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9ue2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LWxpc3QtYmFzZSAubWF0LXN1YmhlYWRlcntjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1saXN0LWl0ZW0tZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojZWVlfS5tYXQtbGlzdC1vcHRpb246aG92ZXIsLm1hdC1saXN0LW9wdGlvbjpmb2N1cywubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtOmhvdmVyLC5tYXQtbmF2LWxpc3QgLm1hdC1saXN0LWl0ZW06Zm9jdXMsLm1hdC1hY3Rpb24tbGlzdCAubWF0LWxpc3QtaXRlbTpob3ZlciwubWF0LWFjdGlvbi1saXN0IC5tYXQtbGlzdC1pdGVtOmZvY3Vze2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDQpfS5tYXQtbGlzdC1zaW5nbGUtc2VsZWN0ZWQtb3B0aW9uLC5tYXQtbGlzdC1zaW5nbGUtc2VsZWN0ZWQtb3B0aW9uOmhvdmVyLC5tYXQtbGlzdC1zaW5nbGUtc2VsZWN0ZWQtb3B0aW9uOmZvY3Vze2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMTIpfS5tYXQtbWVudS1wYW5lbHtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC1tZW51LXBhbmVsOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pe2JveC1zaGFkb3c6MHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtbWVudS1pdGVte2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtbWVudS1pdGVtW2Rpc2FibGVkXSwubWF0LW1lbnUtaXRlbVtkaXNhYmxlZF06OmFmdGVye2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LW1lbnUtaXRlbSAubWF0LWljb24tbm8tY29sb3IsLm1hdC1tZW51LWl0ZW0tc3VibWVudS10cmlnZ2VyOjphZnRlcntjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1hdC1tZW51LWl0ZW06aG92ZXI6bm90KFtkaXNhYmxlZF0pLC5tYXQtbWVudS1pdGVtLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KFtkaXNhYmxlZF0pLC5tYXQtbWVudS1pdGVtLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdChbZGlzYWJsZWRdKSwubWF0LW1lbnUtaXRlbS1oaWdobGlnaHRlZDpub3QoW2Rpc2FibGVkXSl7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNCl9Lm1hdC1wYWdpbmF0b3J7YmFja2dyb3VuZDojZmZmfS5tYXQtcGFnaW5hdG9yLC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2Vye2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50e2JvcmRlci10b3A6MnB4IHNvbGlkIHJnYmEoMCwwLDAsLjU0KTtib3JkZXItcmlnaHQ6MnB4IHNvbGlkIHJnYmEoMCwwLDAsLjU0KX0ubWF0LXBhZ2luYXRvci1maXJzdCwubWF0LXBhZ2luYXRvci1sYXN0e2JvcmRlci10b3A6MnB4IHNvbGlkIHJnYmEoMCwwLDAsLjU0KX0ubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50LC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWZpcnN0LC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWxhc3R7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXBhZ2luYXRvci1jb250YWluZXJ7bWluLWhlaWdodDo1NnB4fS5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmR7ZmlsbDojZDFjNGU5fS5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlcntiYWNrZ3JvdW5kLWNvbG9yOiNkMWM0ZTl9Lm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3fS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQgLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZHtmaWxsOiNmZmU1N2Z9Lm1hdC1wcm9ncmVzcy1iYXIubWF0LWFjY2VudCAubWF0LXByb2dyZXNzLWJhci1idWZmZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZlNTdmfS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZkNzQwfS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmR7ZmlsbDojZmZjZGQyfS5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmNkZDJ9Lm1hdC1wcm9ncmVzcy1iYXIubWF0LXdhcm4gLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBjaXJjbGUsLm1hdC1zcGlubmVyIGNpcmNsZXtzdHJva2U6IzY3M2FiN30ubWF0LXByb2dyZXNzLXNwaW5uZXIubWF0LWFjY2VudCBjaXJjbGUsLm1hdC1zcGlubmVyLm1hdC1hY2NlbnQgY2lyY2xle3N0cm9rZTojZmZkNzQwfS5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lci5tYXQtd2FybiBjaXJjbGUsLm1hdC1zcGlubmVyLm1hdC13YXJuIGNpcmNsZXtzdHJva2U6I2Y0NDMzNn0ubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xle2JvcmRlci1jb2xvcjojNjczYWI3fS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQ6bm90KC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUpLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnk6YWN0aXZlIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGV7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3fS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGV7Ym9yZGVyLWNvbG9yOiNmZmQ3NDB9Lm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQ6bm90KC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUpLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50OmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxle2JhY2tncm91bmQtY29sb3I6I2ZmZDc0MH0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2Fybi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtib3JkZXItY29sb3I6I2Y0NDMzNn0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2FybiAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2FybiAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSwubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2Fybi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlLC5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuOmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxle2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUsLm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xle2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkIC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQsLm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkIC5tYXQtcmFkaW8taW5uZXItY2lyY2xle2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLWxhYmVsLWNvbnRlbnR7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtcmFkaW8tYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5tYXQtc2VsZWN0LXZhbHVle2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXNlbGVjdC1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDAsMCwwLC40Mil9Lm1hdC1zZWxlY3QtZGlzYWJsZWQgLm1hdC1zZWxlY3QtdmFsdWV7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtc2VsZWN0LWFycm93e2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWF0LXNlbGVjdC1wYW5lbHtiYWNrZ3JvdW5kOiNmZmZ9Lm1hdC1zZWxlY3QtcGFuZWw6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSl7Ym94LXNoYWRvdzowcHggMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1zZWxlY3QtcGFuZWwgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSl7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1wcmltYXJ5IC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOiM2NzNhYjd9Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1hY2NlbnQgLm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6I2ZmZDc0MH0ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQubWF0LXdhcm4gLm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6I2Y0NDMzNn0ubWF0LWZvcm0tZmllbGQgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1pbnZhbGlkIC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOiNmNDQzMzZ9Lm1hdC1mb3JtLWZpZWxkIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtZGlzYWJsZWQgLm1hdC1zZWxlY3QtYXJyb3d7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtZHJhd2VyLWNvbnRhaW5lcntiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmE7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtZHJhd2Vye2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1kcmF3ZXIubWF0LWRyYXdlci1wdXNoe2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWF0LWRyYXdlcjpub3QoLm1hdC1kcmF3ZXItc2lkZSl7Ym94LXNoYWRvdzowcHggOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDE2cHggMjRweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggNnB4IDMwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Lm1hdC1kcmF3ZXItc2lkZXtib3JkZXItcmlnaHQ6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWF0LWRyYXdlci1zaWRlLm1hdC1kcmF3ZXItZW5ke2JvcmRlci1sZWZ0OnNvbGlkIDFweCByZ2JhKDAsMCwwLC4xMik7Ym9yZGVyLXJpZ2h0Om5vbmV9W2Rpcj1ydGxdIC5tYXQtZHJhd2VyLXNpZGV7Ym9yZGVyLWxlZnQ6c29saWQgMXB4IHJnYmEoMCwwLDAsLjEyKTtib3JkZXItcmlnaHQ6bm9uZX1bZGlyPXJ0bF0gLm1hdC1kcmF3ZXItc2lkZS5tYXQtZHJhd2VyLWVuZHtib3JkZXItbGVmdDpub25lO2JvcmRlci1yaWdodDpzb2xpZCAxcHggcmdiYSgwLDAsMCwuMTIpfS5tYXQtZHJhd2VyLWJhY2tkcm9wLm1hdC1kcmF3ZXItc2hvd257YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC42KX0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYntiYWNrZ3JvdW5kLWNvbG9yOiNmZmQ3NDB9Lm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFye2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjE1LDY0LC41NCl9Lm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmQ3NDB9Lm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWJ7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3fS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLWJhcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTAzLDU4LDE4MywuNTQpfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3fS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtd2Fybi5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0NCw2Nyw1NCwuNTQpfS5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtc2xpZGUtdG9nZ2xlOm5vdCgubWF0LWNoZWNrZWQpIC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5tYXQtc2xpZGUtdG9nZ2xlLXRodW1ie2JveC1zaGFkb3c6MHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhfS5tYXQtc2xpZGUtdG9nZ2xlLWJhcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5ke2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10cmFjay1maWxsLC5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10aHVtYiwubWF0LXByaW1hcnkgLm1hdC1zbGlkZXItdGh1bWItbGFiZWx7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3fS5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0e2NvbG9yOiNmZmZ9Lm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLWZvY3VzLXJpbmd7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDEwMyw1OCwxODMsLjIpfS5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWItbGFiZWx7YmFja2dyb3VuZC1jb2xvcjojZmZkNzQwfS5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHR7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLWZvY3VzLXJpbmd7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyMTUsNjQsLjIpfS5tYXQtd2FybiAubWF0LXNsaWRlci10cmFjay1maWxsLC5tYXQtd2FybiAubWF0LXNsaWRlci10aHVtYiwubWF0LXdhcm4gLm1hdC1zbGlkZXItdGh1bWItbGFiZWx7YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtd2FybiAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0e2NvbG9yOiNmZmZ9Lm1hdC13YXJuIC5tYXQtc2xpZGVyLWZvY3VzLXJpbmd7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0NCw2Nyw1NCwuMil9Lm1hdC1zbGlkZXI6aG92ZXIgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCwuY2RrLWZvY3VzZWQgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kLC5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4yNil9Lm1hdC1zbGlkZXItZGlzYWJsZWQ6aG92ZXIgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LXNsaWRlci1taW4tdmFsdWUgLm1hdC1zbGlkZXItZm9jdXMtcmluZ3tiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nIC5tYXQtc2xpZGVyLXRodW1iLC5tYXQtc2xpZGVyLW1pbi12YWx1ZS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcgLm1hdC1zbGlkZXItdGh1bWItbGFiZWx7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZy5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10aHVtYiwubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nLmNkay1mb2N1c2VkIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVse2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykgLm1hdC1zbGlkZXItdGh1bWJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjI2KTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyk6aG92ZXIgLm1hdC1zbGlkZXItdGh1bWIsLm1hdC1zbGlkZXItbWluLXZhbHVlOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKS5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10aHVtYntib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyk6aG92ZXIubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10aHVtYiwubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpLmNkay1mb2N1c2VkLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWF0LXNsaWRlci1oYXMtdGlja3MgLm1hdC1zbGlkZXItd3JhcHBlcjo6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjcpfS5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdGlja3N7YmFja2dyb3VuZC1pbWFnZTpyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNyksIHJnYmEoMCwgMCwgMCwgMC43KSAycHgsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtiYWNrZ3JvdW5kLWltYWdlOi1tb3otcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCgwLjAwMDFkZWcsIHJnYmEoMCwgMCwgMCwgMC43KSwgcmdiYSgwLCAwLCAwLCAwLjcpIDJweCwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpfS5tYXQtc2xpZGVyLXZlcnRpY2FsIC5tYXQtc2xpZGVyLXRpY2tze2JhY2tncm91bmQtaW1hZ2U6cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMC43KSwgcmdiYSgwLCAwLCAwLCAwLjcpIDJweCwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpfS5tYXQtc3RlcC1oZWFkZXIuY2RrLWtleWJvYXJkLWZvY3VzZWQsLm1hdC1zdGVwLWhlYWRlci5jZGstcHJvZ3JhbS1mb2N1c2VkLC5tYXQtc3RlcC1oZWFkZXI6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wNCl9QG1lZGlhKGhvdmVyOiBub25lKXsubWF0LXN0ZXAtaGVhZGVyOmhvdmVye2JhY2tncm91bmQ6bm9uZX19Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwsLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtb3B0aW9uYWx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb257YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC41NCk7Y29sb3I6I2ZmZn0ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSwubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXR7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3O2NvbG9yOiNmZmZ9Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lcnJvcntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmNDQzMzZ9Lm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtYWN0aXZle2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1lcnJvcntjb2xvcjojZjQ0MzM2fS5tYXQtc3RlcHBlci1ob3Jpem9udGFsLC5tYXQtc3RlcHBlci12ZXJ0aWNhbHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1hdC1zdGVwcGVyLXZlcnRpY2FsLWxpbmU6OmJlZm9yZXtib3JkZXItbGVmdC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjpiZWZvcmUsLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjphZnRlciwubWF0LXN0ZXBwZXItaG9yaXpvbnRhbC1saW5le2JvcmRlci10b3AtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcntoZWlnaHQ6NzJweH0ubWF0LXN0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlciwubWF0LXZlcnRpY2FsLXN0ZXBwZXItaGVhZGVye3BhZGRpbmc6MjRweCAyNHB4fS5tYXQtc3RlcHBlci12ZXJ0aWNhbC1saW5lOjpiZWZvcmV7dG9wOi0xNnB4O2JvdHRvbTotMTZweH0ubWF0LXN0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcjo6YWZ0ZXIsLm1hdC1zdGVwcGVyLWxhYmVsLXBvc2l0aW9uLWJvdHRvbSAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmJlZm9yZXt0b3A6MzZweH0ubWF0LXN0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmV7dG9wOjM2cHh9Lm1hdC1zb3J0LWhlYWRlci1hcnJvd3tjb2xvcjojNzU3NTc1fS5tYXQtdGFiLW5hdi1iYXIsLm1hdC10YWItaGVhZGVye2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyKX0ubWF0LXRhYi1ncm91cC1pbnZlcnRlZC1oZWFkZXIgLm1hdC10YWItbmF2LWJhciwubWF0LXRhYi1ncm91cC1pbnZlcnRlZC1oZWFkZXIgLm1hdC10YWItaGVhZGVye2JvcmRlci10b3A6MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyKTtib3JkZXItYm90dG9tOm5vbmV9Lm1hdC10YWItbGFiZWwsLm1hdC10YWItbGlua3tjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWR7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC10YWItZ3JvdXBbY2xhc3MqPW1hdC1iYWNrZ3JvdW5kLV0gLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLW5hdi1iYXJbY2xhc3MqPW1hdC1iYWNrZ3JvdW5kLV17Ym9yZGVyLWJvdHRvbTpub25lO2JvcmRlci10b3A6bm9uZX0ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIwOSwxOTYsMjMzLC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIsLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojNjczYWI3fS5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5Lm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyMjksMTI3LC4zKX0ubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtaW5rLWJhciwubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6I2ZmZDc0MH0ubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50Lm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LWluay1iYXIsLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50Lm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LWluay1iYXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjA1LDIxMCwuMyl9Lm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC1pbmstYmFyLC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6I2Y0NDMzNn0ubWF0LXRhYi1ncm91cC5tYXQtd2Fybi5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtaW5rLWJhciwubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC1pbmstYmFye2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgyMDksMTk2LDIzMywuMyl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rcywubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXIsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmtzLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbntiYWNrZ3JvdW5kLWNvbG9yOiM2NzNhYjd9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmssLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5re2NvbG9yOiNmZmZ9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWR7Y29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9ue2JvcmRlci1jb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50e2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMTIpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpe2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjI5LDEyNywuMyl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGlua3MsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlciwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rcywubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbntiYWNrZ3JvdW5kLWNvbG9yOiNmZmQ3NDB9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmt7Y29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWQsLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWR7Y29sb3I6cmdiYSgwLDAsMCwuNCl9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuODcpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjQpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnR7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDIwNSwyMTAsLjMpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGlua3MsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rcywubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb257YmFja2dyb3VuZC1jb2xvcjojZjQ0MzM2fS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwsLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGlua3tjb2xvcjojZmZmfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVke2NvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjQpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbntib3JkZXItY29sb3I6I2ZmZn0ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb257Ym9yZGVyLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjQpfS5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudHtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjEyKX0ubWF0LXRvb2xiYXJ7YmFja2dyb3VuZDojZjVmNWY1O2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXRvb2xiYXIubWF0LXByaW1hcnl7YmFja2dyb3VuZDojNjczYWI3O2NvbG9yOiNmZmZ9Lm1hdC10b29sYmFyLm1hdC1hY2NlbnR7YmFja2dyb3VuZDojZmZkNzQwO2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWF0LXRvb2xiYXIubWF0LXdhcm57YmFja2dyb3VuZDojZjQ0MzM2O2NvbG9yOiNmZmZ9Lm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUsLm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsLm1hdC10b29sYmFyIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxle2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yfS5tYXQtdG9vbGJhciAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC10b29sYmFyIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwsLm1hdC10b29sYmFyIC5tYXQtc2VsZWN0LXZhbHVlLC5tYXQtdG9vbGJhciAubWF0LXNlbGVjdC1hcnJvdywubWF0LXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtc2VsZWN0LWFycm93e2NvbG9yOmluaGVyaXR9Lm1hdC10b29sYmFyIC5tYXQtaW5wdXQtZWxlbWVudHtjYXJldC1jb2xvcjpjdXJyZW50Q29sb3J9Lm1hdC10b29sYmFyLW11bHRpcGxlLXJvd3N7bWluLWhlaWdodDo2NHB4fS5tYXQtdG9vbGJhci1yb3csLm1hdC10b29sYmFyLXNpbmdsZS1yb3d7aGVpZ2h0OjY0cHh9QG1lZGlhKG1heC13aWR0aDogNTk5cHgpey5tYXQtdG9vbGJhci1tdWx0aXBsZS1yb3dze21pbi1oZWlnaHQ6NTZweH0ubWF0LXRvb2xiYXItcm93LC5tYXQtdG9vbGJhci1zaW5nbGUtcm93e2hlaWdodDo1NnB4fX0ubWF0LXRvb2x0aXB7YmFja2dyb3VuZDpyZ2JhKDk3LDk3LDk3LC45KX0ubWF0LXRyZWV7YmFja2dyb3VuZDojZmZmfS5tYXQtdHJlZS1ub2RlLC5tYXQtbmVzdGVkLXRyZWUtbm9kZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1hdC10cmVlLW5vZGV7bWluLWhlaWdodDo0OHB4fS5tYXQtc25hY2stYmFyLWNvbnRhaW5lcntjb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC43KTtiYWNrZ3JvdW5kOiMzMjMyMzI7Ym94LXNoYWRvdzowcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggNnB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDFweCAxOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpfS5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbntjb2xvcjojZmZkNzQwfVxuIiwiLyogTWVkaWEgcXVlcmllcyBCcmVha3BvaW50IG1peGlucyAqL1xyXG5cclxuQG1peGluIGZvci1taW5pLW1vYmlsZS1sYXlvdXQge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWstbWluaS1tb2JpbGUpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gZm9yLW1lZGl1bS1tb2JpbGUtbGF5b3V0IHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrLW1lZGl1bS1tb2JpbGUpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gZm9yLW1vYmlsZS1sYXlvdXQge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3ItbmFycm93LWxheW91dCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVhay1uYXJyb3cpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZvci1ub3JtYWwtbGF5b3V0IHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrLW5vcm1hbCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9yLXdpZGUtbGF5b3V0IHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrLXdpZGUpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gUlRMIHx8IExUUlxyXG5cclxuLy8gJGxheW91dC1kaXJlY3Rpb246IHJ0bCAhZGVmYXVsdDtcclxuXHJcbi8vIEBtaXhpbiBsdHIge1xyXG4vLyAgICAgQGlmICRsYXlvdXQtZGlyZWN0aW9uID09IGx0ciB7XHJcbi8vICAgICAgICAgQGNvbnRlbnQ7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gQG1peGluIHJ0bCB7XHJcbi8vICAgICBAaWYgJGxheW91dC1kaXJlY3Rpb24gPT0gcnRsIHtcclxuLy8gICAgICAgICBAY29udGVudDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLyogTWVkaWEgIE1peGlucyAqL1xyXG5cclxuLy9hc3BlY3QgcmF0aW8gbWl4aW5cclxuQG1peGluIGFzcGVjdC1yYXRpbygkd2lkdGgsICRoZWlnaHQpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAoJGhlaWdodCAvICR3aWR0aCkgKiAxMDAlO1xyXG4gIH1cclxuICA+ICoge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gIH1cclxuICA+IGltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbn1cclxuXHJcbi8vIE1peGluIGZvciByZW1vdmluZyBob3ZlciBlZmVjdHMgb24gaXBob25lIHNjcmVlblxyXG5AbWl4aW4gaG92ZXItc3VwcG9ydGVkIHtcclxuICBAbWVkaWEgbm90IGFsbCBhbmQgKHBvaW50ZXI6IGNvYXJzZSkge1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHJpcHBsZSgkY29sb3IsICRib3JkZXItcmFkaXVzKSB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgIGFuaW1hdGlvbjogZ3Jvdy1jZW50ZXItdG8tc2lkZXMgMC4zcztcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGxpbmUtcmlwcGxlKCRjb2xvciwgJGJvcmRlci1yYWRpdXMpIHtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICBhbmltYXRpb246IGdyb3ctY2VudGVyLXRvLXNpZGVzIC4zcyBsaW5lYXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICAgIGhlaWdodDogNXB4O1xyXG4gICAgfVxyXG59XHJcbiIsIkBrZXlmcmFtZXMgb3BhY2l0eSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAvLyAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTUwJSk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC8vICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGltcG9ydCAnfkBhbmd1bGFyL21hdGVyaWFsL3ByZWJ1aWx0LXRoZW1lcy9kZWVwcHVycGxlLWFtYmVyLmNzcyc7XG4vKiBNZWRpYSBxdWVyaWVzIEJyZWFrcG9pbnQgbWl4aW5zICovXG4vKiBNZWRpYSAgTWl4aW5zICovXG5Aa2V5ZnJhbWVzIG9wYWNpdHkge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlLWRvd24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlLWxlZnQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaWRlLXJpZ2h0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNoYWtlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcbiAgfVxuICAyNSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBncm93LWNlbnRlci10by1zaWRlcyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAsIDEpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbi5zaXRlLWJsb2NrIHtcbiAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbn1cblxuLnJhdGlvLTE2LTkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucmF0aW8tMTYtOTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA1NiU7XG59XG4ucmF0aW8tMTYtOSA+ICoge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cbi5yYXRpby0xNi05ID4gaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnJhdGlvLXNxdWFyZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5yYXRpby1zcXVhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTAwJTtcbn1cbi5yYXRpby1zcXVhcmUgPiAqIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG4ucmF0aW8tc3F1YXJlID4gaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnJhdGlvLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucmF0aW8tY2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA4MCU7XG59XG4ucmF0aW8tY2FyZCA+ICoge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cbi5yYXRpby1jYXJkID4gaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnJhdGlvLXBvc3RlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5yYXRpby1wb3N0ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTUwJTtcbn1cbi5yYXRpby1wb3N0ZXIgPiAqIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG4ucmF0aW8tcG9zdGVyID4gaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJvbGRlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5saWdodGVyIHtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmlubGluZS1mbGV4IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi5jb2wge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucm93IHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmJldCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmFyb3VuZCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uZXZlbmx5IHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5qLWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uai1lbmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uYS1lbmQge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5hLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubm90LWFsbG93ZWQsXG4uZGlzYWJsZSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5jdXJzb3ItaW5pdGlhbCB7XG4gIGN1cnNvcjogaW5pdGlhbDtcbn1cblxuLnJlbGF0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZml4ZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5hYnNvbHV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnN0YXRpYyB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG59XG5cbi5zdGlja3kge1xuICBwb3NpdGlvbjogc3RpY2t5O1xufVxuXG4ubm9uZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pbmxpbmUtYmxvY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5tb25vc3BhY2Uge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xufVxuXG4ubS1pLXN0YXJ0LTFjaCB7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDFjaDtcbn1cblxuLm0taS1zdGFydC0yY2gge1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAyY2g7XG59XG5cbi5tLWktc3RhcnQtM2NoIHtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogM2NoO1xufVxuXG4ubS1pLWVuZC0xY2gge1xuICBtYXJnaW4taW5saW5lLWVuZDogMWNoO1xufVxuXG4ubS1pLWVuZC0yY2gge1xuICBtYXJnaW4taW5saW5lLWVuZDogMmNoO1xufVxuXG4ubS1pLWVuZC0zY2gge1xuICBtYXJnaW4taW5saW5lLWVuZDogM2NoO1xufVxuXG4ubS1iLXN0YXJ0LTFjaCB7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMWNoO1xufVxuXG4ubS1iLXN0YXJ0LTJjaCB7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMmNoO1xufVxuXG4ubS1iLXN0YXJ0LTNjaCB7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogM2NoO1xufVxuXG4ubS1iLWVuZC0xY2gge1xuICBtYXJnaW4tYmxvY2stZW5kOiAxY2g7XG59XG5cbi5tLWItZW5kLTJjaCB7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDJjaDtcbn1cblxuLm0tYi1lbmQtM2NoIHtcbiAgbWFyZ2luLWJsb2NrLWVuZDogM2NoO1xufVxuXG4udzEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaDEwMCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmF2YXRhciB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4YjBjOTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5hdmF0YXIuaXNIb3Jpem9uYWwge1xuICBvYmplY3QtZml0OiBmaWxsO1xufVxuLmF2YXRhci5hdmF0YXItcyB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG4uYXZhdGFyLmF2YXRhci1tIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuLmF2YXRhci5hdmF0YXItbCB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cbi5kaXZpZGVyLWxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTkxMjEyO1xuICBoZWlnaHQ6IDAuNXB4O1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cblxuLmRpdmlkZXItc3RhcnQtbGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTEyMTI7XG4gIGhlaWdodDogMC41cHg7XG4gIHdpZHRoOiAyNXZ3O1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5jbG4tdWwge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5jbG4tbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uY2xuLWEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbml0aWFsO1xufVxuXG4uY2xuLWJ0biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcbn1cblxuLm9wYWNpdHktaG92ZXItOTpob3ZlciB7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLm9wYWNpdHktaG92ZXItODpob3ZlciB7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLm9wYWNpdHktaG92ZXItNzpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLm9wYWNpdHktaG92ZXItNjpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNjtcbn1cblxuLm9wYWNpdHktaG92ZXItNTpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuYm9keSB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgbWFyZ2luOiAwO1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cbmJvZHkgLnNjcmVlbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IC0xMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzLCB6LWluZGV4IDAgMC41cztcbn1cbmJvZHkuc2NyZWVuLXZpc2liaWxpdHkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuYm9keS5zY3JlZW4tdmlzaWJpbGl0eSAuc2NyZWVuIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xuICB6LWluZGV4OiAxMDAwO1xuICBvcGFjaXR5OiAwLjg1O1xufVxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMC44ZW07XG59XG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMWM7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbml0aWFsO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG51bCBsaSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLndpZHRoLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2ODBweCkge1xuICAud2lkdGgtY29udGFpbmVyIHtcbiAgICB3aWR0aDogNjgwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cblxubmF2IC5sb2dvIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAzMnB4O1xufVxubmF2IC5sb2dvIGltZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xufVxubmF2IC5sb2dvOmhvdmVyIGltZyB7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XG59XG5uYXYgLmxvZ28gc3BhbiB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHJlZDtcbn1cbm5hdiBpbWcge1xuICB3aWR0aDogMzVweDtcbn1cbm5hdiAubmF2LWxpbmstY29udGFpbmVyIGEge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbm5hdiAubmF2LWxpbmstY29udGFpbmVyIGE6aG92ZXIge1xuICBjb2xvcjogcmVkO1xuICB6LWluZGV4OiAxO1xufVxubmF2IC5uYXYtbGluay1jb250YWluZXIgYTpob3Zlcjo6YWZ0ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogLTE7XG4gIGFuaW1hdGlvbjogZ3Jvdy1jZW50ZXItdG8tc2lkZXMgMC4zcztcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMDYyKTtcbn1cbm5hdiAubmF2LWxpbmstY29udGFpbmVyIGEuYWN0aXZlIHtcbiAgY29sb3I6IHJlZDtcbiAgei1pbmRleDogMTtcbn1cbm5hdiAubmF2LWxpbmstY29udGFpbmVyIGEuYWN0aXZlOjpiZWZvcmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IC0xO1xuICBhbmltYXRpb246IGdyb3ctY2VudGVyLXRvLXNpZGVzIDAuM3MgbGluZWFyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGhlaWdodDogNXB4O1xufSIsIkBrZXlmcmFtZXMgc2xpZGUtdXAge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcbiAgICB9XHJcbn1cclxuQGtleWZyYW1lcyBzbGlkZS1kb3duIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcclxuICAgIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHNsaWRlLWxlZnQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc2xpZGUtcmlnaHQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcblxyXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XHJcbiAgICB9XHJcbiAgICAyNSUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgfVxyXG59IiwiXHJcbkBrZXlmcmFtZXMgZ3Jvdy1jZW50ZXItdG8tc2lkZXMge1xyXG4gICAgMCUge1xyXG4gICAgICAgIC8vIHdpZHRoOiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCwgMSk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfSAgIFxyXG59IiwiLnNpdGUtYmxvY2sge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogcmVtKDIwcHgpO1xyXG59XHJcblxyXG4vLyBBc3BlY3QgcmF0aW9zXHJcblxyXG4ucmF0aW8tMTYtOSB7XHJcbiAgICBAaW5jbHVkZSBhc3BlY3QtcmF0aW8oMTAwLCA1Nik7XHJcbn1cclxuXHJcbi5yYXRpby1zcXVhcmUge1xyXG4gICAgQGluY2x1ZGUgYXNwZWN0LXJhdGlvKDEwMCwgMTAwKTtcclxufVxyXG5cclxuLnJhdGlvLWNhcmQge1xyXG4gICAgQGluY2x1ZGUgYXNwZWN0LXJhdGlvKDEwMCwgODApO1xyXG59XHJcblxyXG4ucmF0aW8tcG9zdGVyIHtcclxuICAgIEBpbmNsdWRlIGFzcGVjdC1yYXRpbygxMDAsIDE1MCk7XHJcbn1cclxuXHJcbi8vIEJPTERcclxuLmJvbGQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5ib2xkZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuLmxpZ2h0ZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxuXHJcbi8vIEZMRVhcclxuXHJcbi5mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5pbmxpbmUtZmxleCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG5cclxuLmNvbCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ucm93IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5iZXQge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uYXJvdW5kIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4uZXZlbmx5IHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcblxyXG4uai1jZW50ZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5qLWVuZCB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uYS1lbmQge1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uYS1jZW50ZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLy8gQ1VSU09SXHJcblxyXG4ucG9pbnRlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5ub3QtYWxsb3dlZCxcclxuLmRpc2FibGUge1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuLmN1cnNvci1pbml0aWFsIHtcclxuICAgIGN1cnNvcjogaW5pdGlhbDtcclxufVxyXG5cclxuLy8gUE9TSVRJT05TXHJcblxyXG4ucmVsYXRpdmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5maXhlZCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuLmFic29sdXRlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uc3RhdGljIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbn1cclxuLnN0aWNreSB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG59XHJcblxyXG4vLyBESVNQTEFZU1xyXG5cclxuLm5vbmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG59XHJcbi5ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uaW5saW5lLWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLy8gRk9OVFNcclxuXHJcbi5tb25vc3BhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxufVxyXG5cclxuLy8gTUFSR0lOU1xyXG5cclxuLm0taS1zdGFydC0xY2gge1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMWNoO1xyXG59XHJcbi5tLWktc3RhcnQtMmNoIHtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDJjaDtcclxufVxyXG4ubS1pLXN0YXJ0LTNjaCB7XHJcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAzY2g7XHJcbn1cclxuXHJcbi5tLWktZW5kLTFjaCB7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMWNoO1xyXG59XHJcbi5tLWktZW5kLTJjaCB7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMmNoO1xyXG59XHJcbi5tLWktZW5kLTNjaCB7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogM2NoO1xyXG59XHJcblxyXG4ubS1iLXN0YXJ0LTFjaCB7XHJcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFjaDtcclxufVxyXG4ubS1iLXN0YXJ0LTJjaCB7XHJcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDJjaDtcclxufVxyXG4ubS1iLXN0YXJ0LTNjaCB7XHJcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDNjaDtcclxufVxyXG5cclxuLm0tYi1lbmQtMWNoIHtcclxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFjaDtcclxufVxyXG4ubS1iLWVuZC0yY2gge1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMmNoO1xyXG59XHJcbi5tLWItZW5kLTNjaCB7XHJcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAzY2g7XHJcbn1cclxuXHJcbi8vIFdJRFRIIEFORCBIRUlHSFRcclxuXHJcbi53MTAwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5oMTAwIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLy8gQVZBVEFSXHJcblxyXG4uYXZhdGFyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjbHI3O1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcblxyXG4gICAgJi5pc0hvcml6b25hbCB7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogZmlsbDtcclxuICAgIH1cclxuXHJcbiAgICAmLmF2YXRhci1zIHtcclxuICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB9XHJcbiAgICAmLmF2YXRhci1tIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuICAgICYuYXZhdGFyLWwge1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgfVxyXG4gICAgJi5hbm9ueW1vdXMge1xyXG4gICAgICAgIC8vIGZpbHRlcjogJGZpbHRlcjM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kaXZpZGVyLWxpbmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNscjM7XHJcbiAgICBoZWlnaHQ6IDAuNXB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG59XHJcbi5kaXZpZGVyLXN0YXJ0LWxpbmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNscjM7XHJcbiAgICBoZWlnaHQ6IDAuNXB4O1xyXG4gICAgd2lkdGg6IDI1dnc7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbi5jbG4tdWwge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4uY2xuLWxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuLmNsbi1hIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBpbml0aWFsO1xyXG59XHJcblxyXG4uY2xuLWJ0biB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xyXG59XHJcblxyXG4vLyBPUEFDSVRZXHJcblxyXG4ub3BhY2l0eS1ob3Zlci05IHtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIH1cclxufVxyXG4ub3BhY2l0eS1ob3Zlci04IHtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgIH1cclxufVxyXG4ub3BhY2l0eS1ob3Zlci03IHtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgIH1cclxufVxyXG4ub3BhY2l0eS1ob3Zlci02IHtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIH1cclxufVxyXG4ub3BhY2l0eS1ob3Zlci01IHtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDT0xPUiBQQUxFVFRFXHJcbiRjbHIxOiAjMGUwYzI4O1xyXG4kY2xyMjogIzI0Mjg0OTtcclxuJGNscjM6ICM5OTEyMTI7XHJcbiRjbHI0OiAjN2VjOGUzO1xyXG4kY2xyNTogI2VlZmJmZjtcclxuJGNscjY6ICM3N2JkZDY7XHJcbiRjbHI3OiAjNjhiMGM5O1xyXG4kY2xyODogI2Y2ZmRmZjtcclxuJGNscjk6ICNlN2YzZmY7XHJcbiRjbHIxMDogI2ZmYzljOTtcclxuJGNscjExOiAjYTRhYWRiO1xyXG5cclxuLy8gQkxVRVxyXG5cclxuJGJsdWUxOiAjMGUwYzI4O1xyXG4kYmx1ZTI6ICMyNDI4NDk7XHJcbiRibHVlMzogIzY4YjBjOTtcclxuJGJsdWU0OiAjNzdiZGQ2O1xyXG4kYmx1ZTU6ICM3ZWM4ZTM7XHJcbiRibHVlNjogI2E0YWFkYjtcclxuJGJsdWU3OiAjZWVmYmZmO1xyXG4kYmx1ZTg6ICNmNmZkZmY7XHJcblxyXG4vLyBSRURcclxuXHJcbiRyZWQxOiAjOTkxMjEyO1xyXG4kcmVkMjogI2ZmNmU2ZTtcclxuJHJlZDM6ICNmZmM5Yzk7XHJcbiRyZWQ0OiAjZmZlY2VjO1xyXG5cclxuJGdyYXkxOiAjNTg2MTYzO1xyXG4kZ3JheTI6ICMzZDQ3NGI7XHJcbiRncmF5MzogIzI4MzEzNDtcclxuXHJcbiRncmF5NDogIzU4NjE2MzI4O1xyXG4kZ3JheTU6ICM1ODYxNjMxNTtcclxuXHJcbiRncmVlbjE6IHJnYigwLCAyNTUsIDApO1xyXG5cclxuJHByaW1hcnktY29sb3I6ICMxYTIzN2U7XHJcbiRkYXJrLXByaW1hcnktY29sb3I6ICMwZjEwNDE7XHJcbiRhY2NlbnQtY29sb3I6ICMyOTYyZmY7XHJcbiRzdWIteWVsbG93OiAjZmZjYTAwO1xyXG5cclxuJHdpZHRoLW5hdi1raXQ6IDIzMHB4O1xyXG5cclxuLy8gQk9YLVNIQURPV1xyXG4kc2hhZG93MTogMHB4IDBweCAxcHggMXB4ICMwMDAwMDAyNjtcclxuJHNoYWRvdzI6IDBweCAwcHggM3B4IDFweCAjMDAwMDAwMjY7XHJcbiRzaGFkb3czOiAwcHggMHB4IDRweCAxcHggIzAwMDAwMDI2O1xyXG5cclxuJHNkdzE6IDAgMCA1cHggIzAwMDAwMDI5OztcclxuJHNkdzI6IDBweCAwcHggNHB4IDFweCAjMDAwMDAwMjY7XHJcbi8vIEJPUkRFUlxyXG4kYm9yZGVyMTogMXB4IHNvbGlkICMyNDI4NDkzMDtcclxuXHJcbi8vIExBWU9VVCBCUkVBS1BPSU5UU1xyXG4kYnJlYWstbWluaS1tb2JpbGU6IDMzMHB4O1xyXG4kYnJlYWstbWVkaXVtLW1vYmlsZTogNDgwcHg7XHJcbiRicmVhay1tb2JpbGU6IDY4MHB4O1xyXG4kYnJlYWstbmFycm93OiA4ODBweDtcclxuJGJyZWFrLW5vcm1hbDogMTAyMHB4O1xyXG4kYnJlYWstd2lkZTogMTQwMHB4O1xyXG5cclxuIiwiYm9keSB7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICAgIC5zY3JlZW4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgei1pbmRleDogLTExO1xyXG4gICAgICAgIC8vIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMsIHotaW5kZXggMCAuNXM7XHJcbiAgICB9XHJcbiAgICAmLnNjcmVlbi12aXNpYmlsaXR5IHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIC5zY3JlZW4ge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIHdpZHRoOiAwLjhlbTtcclxuICAgIH1cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICAvLyBkaXNwbGF5OiBoaWRkZW47XHJcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIH1cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMWM7XHJcbiAgICAgICAgLy8gICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIC8vICAgb3V0bGluZTogMXB4IHNvbGlkIHNsYXRlZ3JleTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGluaXRpYWw7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBsaSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG59IiwiLndpZHRoLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBAaW5jbHVkZSBmb3ItbW9iaWxlLWxheW91dCB7XHJcbiAgICAgICAgd2lkdGg6ICRicmVhay1tb2JpbGU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuXHJcbm5hdiB7XHJcbiAgIFxyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDA7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMzVweDtcclxuICAgIH1cclxuICAgIC5uYXYtbGluay1jb250YWluZXIge1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgcmlwcGxlKHJnYmEoMjU1LCAwLCAwLCAwLjA2MiksIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBsaW5lLXJpcHBsZShyZWQsIDApO1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'main-nav',
          templateUrl: './main-nav.component.html',
          styleUrls: ['./main-nav.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/question-list/question-list.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/question-list/question-list.component.ts ***!
    \*********************************************************************/

  /*! exports provided: QuestionListComponent */

  /***/
  function srcAppComponentsQuestionListQuestionListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionListComponent", function () {
      return QuestionListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _question_preview_question_preview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../question-preview/question-preview.component */
    "./src/app/components/question-preview/question-preview.component.ts");

    var QuestionListComponent = /*#__PURE__*/function () {
      function QuestionListComponent() {
        _classCallCheck(this, QuestionListComponent);

        this.updateScore = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(QuestionListComponent, [{
        key: "changeCurrQuestionIdx",
        value: function changeCurrQuestionIdx(diff) {
          this.currQuestionIdx += diff;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currQuestionIdx = 0;
        }
      }]);

      return QuestionListComponent;
    }();

    QuestionListComponent.ɵfac = function QuestionListComponent_Factory(t) {
      return new (t || QuestionListComponent)();
    };

    QuestionListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: QuestionListComponent,
      selectors: [["question-list"]],
      inputs: {
        questions: "questions",
        timeLeft: "timeLeft"
      },
      outputs: {
        updateScore: "updateScore"
      },
      decls: 5,
      vars: 4,
      consts: [[3, "timeLeft", "question", "updateScore"], [3, "disabled", "click"]],
      template: function QuestionListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "question-preview", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateScore", function QuestionListComponent_Template_question_preview_updateScore_0_listener() {
            return ctx.updateScore.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionListComponent_Template_button_click_1_listener() {
            return ctx.changeCurrQuestionIdx(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u05D4\u05D1\u05D0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionListComponent_Template_button_click_3_listener() {
            return ctx.changeCurrQuestionIdx(0 - 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u05D4\u05E7\u05D5\u05D3\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("timeLeft", ctx.timeLeft)("question", ctx.questions[ctx.currQuestionIdx]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.currQuestionIdx === ctx.questions.length - 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.currQuestionIdx === 0);
        }
      },
      directives: [_question_preview_question_preview_component__WEBPACK_IMPORTED_MODULE_1__["QuestionPreviewComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcXVlc3Rpb24tbGlzdC9xdWVzdGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'question-list',
          templateUrl: './question-list.component.html',
          styleUrls: ['./question-list.component.scss']
        }]
      }], function () {
        return [];
      }, {
        questions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        timeLeft: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        updateScore: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/question-preview/question-preview.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/question-preview/question-preview.component.ts ***!
    \***************************************************************************/

  /*! exports provided: QuestionPreviewComponent */

  /***/
  function srcAppComponentsQuestionPreviewQuestionPreviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionPreviewComponent", function () {
      return QuestionPreviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _answer_list_answer_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../answer-list/answer-list.component */
    "./src/app/components/answer-list/answer-list.component.ts");

    var QuestionPreviewComponent = /*#__PURE__*/function () {
      function QuestionPreviewComponent() {
        _classCallCheck(this, QuestionPreviewComponent);

        this.updateScore = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(QuestionPreviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "cheackedAnswer",
        value: function cheackedAnswer(idx) {
          this.question.answeredIdx = this.question.answeredIdx === idx ? null : idx;
          this.question.isCorrectAnswered = this.question.isCorrectAnswered ? false : this.question.answers[idx].isCorrect ? true : false;
          this.updateScore.emit();
        }
      }]);

      return QuestionPreviewComponent;
    }();

    QuestionPreviewComponent.ɵfac = function QuestionPreviewComponent_Factory(t) {
      return new (t || QuestionPreviewComponent)();
    };

    QuestionPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: QuestionPreviewComponent,
      selectors: [["question-preview"]],
      inputs: {
        question: "question",
        timeLeft: "timeLeft"
      },
      outputs: {
        updateScore: "updateScore"
      },
      decls: 4,
      vars: 5,
      consts: [[3, "timeLeft", "answers", "answeredIdx", "cheackedAnswer"]],
      template: function QuestionPreviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "answer-list", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cheackedAnswer", function QuestionPreviewComponent_Template_answer_list_cheackedAnswer_3_listener($event) {
            return ctx.cheackedAnswer($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u05E9\u05DD \u05D4\u05E9\u05D0\u05DC\u05D4: ", ctx.question.questionContent, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\nanswered ", ctx.question.answeredIdx, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("timeLeft", ctx.timeLeft)("answers", ctx.question.answers)("answeredIdx", ctx.question.answeredIdx);
        }
      },
      directives: [_answer_list_answer_list_component__WEBPACK_IMPORTED_MODULE_1__["AnswerListComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcXVlc3Rpb24tcHJldmlldy9xdWVzdGlvbi1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'question-preview',
          templateUrl: './question-preview.component.html',
          styleUrls: ['./question-preview.component.scss']
        }]
      }], function () {
        return [];
      }, {
        question: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        timeLeft: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        updateScore: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/test-list/test-list.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/test-list/test-list.component.ts ***!
    \*************************************************************/

  /*! exports provided: TestListComponent */

  /***/
  function srcAppComponentsTestListTestListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestListComponent", function () {
      return TestListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _test_preview_test_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../test-preview/test-preview.component */
    "./src/app/components/test-preview/test-preview.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function TestListComponent_test_preview_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "test-preview", 1);
      }

      if (rf & 2) {
        var test_r1 = ctx.$implicit;
        var idx_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/test/", test_r1._id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("test", test_r1)("idx", idx_r2);
      }
    }

    var TestListComponent = /*#__PURE__*/function () {
      function TestListComponent() {
        _classCallCheck(this, TestListComponent);
      }

      _createClass(TestListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TestListComponent;
    }();

    TestListComponent.ɵfac = function TestListComponent_Factory(t) {
      return new (t || TestListComponent)();
    };

    TestListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TestListComponent,
      selectors: [["test-list"]],
      inputs: {
        tests: "tests"
      },
      decls: 1,
      vars: 1,
      consts: [[3, "test", "idx", "routerLink", 4, "ngFor", "ngForOf"], [3, "test", "idx", "routerLink"]],
      template: function TestListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TestListComponent_test_preview_0_Template, 1, 3, "test-preview", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tests);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _test_preview_test_preview_component__WEBPACK_IMPORTED_MODULE_2__["TestPreviewComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVzdC1saXN0L3Rlc3QtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'test-list',
          templateUrl: './test-list.component.html',
          styleUrls: ['./test-list.component.scss']
        }]
      }], function () {
        return [];
      }, {
        tests: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/test-preview/test-preview.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/test-preview/test-preview.component.ts ***!
    \*******************************************************************/

  /*! exports provided: TestPreviewComponent */

  /***/
  function srcAppComponentsTestPreviewTestPreviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestPreviewComponent", function () {
      return TestPreviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/util/util.service */
    "./src/app/services/util/util.service.ts");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TestPreviewComponent_section_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("totalAnswered: ", ctx_r0.test.totalAnswered, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("totalCorrectAnswered: ", ctx_r0.test.totalCorrectAnswered, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("timeLeft: ", ctx_r0.timeForShow, "");
      }
    }

    var TestPreviewComponent = /*#__PURE__*/function () {
      function TestPreviewComponent(_utilService) {
        _classCallCheck(this, TestPreviewComponent);

        this._utilService = _utilService;
      }

      _createClass(TestPreviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.timeForShow = this._utilService.padNum(Math.floor(this.test.timeLeft / 60)) + ':' + this._utilService.padNum(this.test.timeLeft % 60);
        }
      }]);

      return TestPreviewComponent;
    }();

    TestPreviewComponent.ɵfac = function TestPreviewComponent_Factory(t) {
      return new (t || TestPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]));
    };

    TestPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TestPreviewComponent,
      selectors: [["test-preview"]],
      inputs: {
        test: "test",
        idx: "idx"
      },
      decls: 4,
      vars: 2,
      consts: [["matTooltip", "Info about the action", 1, "test-preview", "flex", "col", "a-center", "j-center"], ["class", "flex col a-center j-center", 4, "ngIf"], [1, "flex", "col", "a-center", "j-center"]],
      template: function TestPreviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TestPreviewComponent_section_3_Template, 7, 3, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.test.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.test.totalAnswered);
        }
      },
      directives: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: [".test-preview[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .test-preview[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZXN0LXByZXZpZXcvQzpcXHNpdGUtcHJvalxcX0FuZ3VsYXJcXE1pc3MtUXVpelxccXVpei1mcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcdGVzdC1wcmV2aWV3XFx0ZXN0LXByZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdGVzdC1wcmV2aWV3L3Rlc3QtcHJldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFNBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVzdC1wcmV2aWV3L3Rlc3QtcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXN0LXByZXZpZXcge1xyXG4gICAgaDMsIGg1IHtcclxuICAgICAgICBtYXJnaW46ICAwO1xyXG4gICAgfVxyXG59IiwiLnRlc3QtcHJldmlldyBoMywgLnRlc3QtcHJldmlldyBoNSB7XG4gIG1hcmdpbjogMDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'test-preview',
          templateUrl: './test-preview.component.html',
          styleUrls: ['./test-preview.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]
        }];
      }, {
        test: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        idx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/timer/timer.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/timer/timer.component.ts ***!
    \*****************************************************/

  /*! exports provided: TimerComponent */

  /***/
  function srcAppComponentsTimerTimerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimerComponent", function () {
      return TimerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/util/util.service */
    "./src/app/services/util/util.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "neer-the-end": a0
      };
    };

    var TimerComponent = /*#__PURE__*/function () {
      function TimerComponent(_utilService) {
        _classCallCheck(this, TimerComponent);

        this._utilService = _utilService;
        this.updateTime = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isNeerTheEnd = false;
      }

      _createClass(TimerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.observableTimer();
        }
      }, {
        key: "observableTimer",
        value: function observableTimer() {
          var _this = this;

          if (this.timeLeft <= 0) {
            this.isNeerTheEnd = true;
            return;
          }

          var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(200, 1000);
          var subscription = source.subscribe(function (val) {
            if (!_this.isNeerTheEnd && _this.timeLeft < 30) {
              _this.isNeerTheEnd = true;
            }

            if (_this.timeLeft <= 1) {
              subscription.unsubscribe();
            }

            _this.updateTime.emit(_this.timeLeft - 1);
          });
        }
      }, {
        key: "timeForShow",
        get: function get() {
          return this._utilService.padNum(Math.floor(this.timeLeft / 60)) + ':' + this._utilService.padNum(this.timeLeft % 60);
        }
      }]);

      return TimerComponent;
    }();

    TimerComponent.ɵfac = function TimerComponent_Factory(t) {
      return new (t || TimerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]));
    };

    TimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TimerComponent,
      selectors: [["timer"]],
      inputs: {
        timeLeft: "timeLeft"
      },
      outputs: {
        updateTime: "updateTime"
      },
      decls: 2,
      vars: 4,
      consts: [[3, "ngClass"]],
      template: function TimerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.isNeerTheEnd));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("timer : ", ctx.timeForShow, "");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
      styles: [".neer-the-end[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aW1lci9DOlxcc2l0ZS1wcm9qXFxfQW5ndWxhclxcTWlzcy1RdWl6XFxxdWl6LWZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFx0aW1lclxcdGltZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdGltZXIvdGltZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RpbWVyL3RpbWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5lZXItdGhlLWVuZCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59IiwiLm5lZXItdGhlLWVuZCB7XG4gIGNvbG9yOiByZWQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'timer',
          templateUrl: './timer.component.html',
          styleUrls: ['./timer.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_util_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]
        }];
      }, {
        timeLeft: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        updateTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/user-list/user-list.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/user-list/user-list.component.ts ***!
    \*************************************************************/

  /*! exports provided: UserListComponent */

  /***/
  function srcAppComponentsUserListUserListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserListComponent", function () {
      return UserListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _user_preview_user_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user-preview/user-preview.component */
    "./src/app/components/user-preview/user-preview.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function UserListComponent_user_preview_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "user-preview", 1);
      }

      if (rf & 2) {
        var user_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/user/", user_r1._id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", user_r1);
      }
    }

    var UserListComponent = /*#__PURE__*/function () {
      function UserListComponent() {
        _classCallCheck(this, UserListComponent);
      }

      _createClass(UserListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserListComponent;
    }();

    UserListComponent.ɵfac = function UserListComponent_Factory(t) {
      return new (t || UserListComponent)();
    };

    UserListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserListComponent,
      selectors: [["user-list"]],
      inputs: {
        users: "users"
      },
      decls: 1,
      vars: 1,
      consts: [[3, "user", "routerLink", 4, "ngFor", "ngForOf"], [3, "user", "routerLink"]],
      template: function UserListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserListComponent_user_preview_0_Template, 1, 2, "user-preview", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _user_preview_user_preview_component__WEBPACK_IMPORTED_MODULE_2__["UserPreviewComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'user-list',
          templateUrl: './user-list.component.html',
          styleUrls: ['./user-list.component.scss']
        }]
      }], function () {
        return [];
      }, {
        users: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/user-preview/user-preview.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/user-preview/user-preview.component.ts ***!
    \*******************************************************************/

  /*! exports provided: UserPreviewComponent */

  /***/
  function srcAppComponentsUserPreviewUserPreviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPreviewComponent", function () {
      return UserPreviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UserPreviewComponent = /*#__PURE__*/function () {
      function UserPreviewComponent() {
        _classCallCheck(this, UserPreviewComponent);
      }

      _createClass(UserPreviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserPreviewComponent;
    }();

    UserPreviewComponent.ɵfac = function UserPreviewComponent_Factory(t) {
      return new (t || UserPreviewComponent)();
    };

    UserPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserPreviewComponent,
      selectors: [["user-preview"]],
      inputs: {
        user: "user"
      },
      decls: 5,
      vars: 2,
      consts: [[1, "user-preview", "flex", "col", "a-center", "j-center"]],
      template: function UserPreviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u05E9\u05DD: ", ctx.user.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u05DE\u05D1\u05D7\u05E0\u05D9\u05DD: ", ctx.user.tests.length, "");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1wcmV2aWV3L3VzZXItcHJldmlldy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'user-preview',
          templateUrl: './user-preview.component.html',
          styleUrls: ['./user-preview.component.scss']
        }]
      }], function () {
        return [];
      }, {
        user: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/guards/loggedin-user.guard.ts":
  /*!***********************************************!*\
    !*** ./src/app/guards/loggedin-user.guard.ts ***!
    \***********************************************/

  /*! exports provided: LoggedinUserGuard */

  /***/
  function srcAppGuardsLoggedinUserGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoggedinUserGuard", function () {
      return LoggedinUserGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LoggedinUserGuard = /*#__PURE__*/function () {
      function LoggedinUserGuard(_authService, _router) {
        _classCallCheck(this, LoggedinUserGuard);

        this._authService = _authService;
        this._router = _router;
      }

      _createClass(LoggedinUserGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var isLoggedinUser = !!this._authService.userValue;
          isLoggedinUser ? '' : this._router.navigate(['/login']);
          return isLoggedinUser;
        }
      }]);

      return LoggedinUserGuard;
    }();

    LoggedinUserGuard.ɵfac = function LoggedinUserGuard_Factory(t) {
      return new (t || LoggedinUserGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    LoggedinUserGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoggedinUserGuard,
      factory: LoggedinUserGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoggedinUserGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/login/login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/login/login.component.ts ***!
    \************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPagesLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/user/user.service */
    "./src/app/services/user/user.service.ts");
    /* harmony import */


    var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function LoginComponent_mat_form_field_2_mat_error_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.getError("name"), " ");
      }
    }

    function LoginComponent_mat_form_field_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u05D4\u05D6\u05DF \u05E9\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_mat_form_field_2_mat_error_4_Template, 2, 1, "mat-error", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formGroup.controls["name"].invalid);
      }
    }

    function LoginComponent_mat_error_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.getError("email"), " ");
      }
    }

    function LoginComponent_mat_error_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.getError("password"), " ");
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(_userService, _authService, _router) {
        _classCallCheck(this, LoginComponent);

        this._userService = _userService;
        this._authService = _authService;
        this._router = _router;
        this._regPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        this._regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
        this.hide = true;
        this.isSignup = true;
      } //CREATED


      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._loadUser();

          this._authService.userValue ? this._router.navigate(['/']) : ''; // this.userForm.valueChanges.subscribe(x=> console.log(x))
        }
      }, {
        key: "_loadUser",
        //METHODS
        value: function _loadUser() {
          this._user = this._authService.getEmptyUser();

          this._buildForm(this._user);
        }
      }, {
        key: "_buildForm",
        value: function _buildForm(user) {
          this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](user.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](user.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this._regEmail)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](user.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this._regPassword)])
          });
          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](user.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](user.password, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8))
          });
        }
      }, {
        key: "getError",
        value: function getError(el) {
          var fromControl = this.formGroup.get(el);

          switch (el) {
            case 'name':
              if (fromControl.hasError('required')) {
                return 'שדה חובה';
              } else if (fromControl.hasError('minlength')) {
                return 'שם חייב להכיל לפחות שני תווים';
              }

              break;

            case 'email':
              if (fromControl.hasError('required')) {
                return 'שדה חובה';
              } else if (fromControl.hasError('email') || fromControl.hasError('pattern')) {
                return 'מייל לא חוקי';
              }

              break;

            case 'password':
              if (fromControl.hasError('required')) {
                return 'שדה חובה';
              } else if (fromControl.hasError('minlength')) {
                return 'סיסמא חייבת להכיל לפחות 8 תווים';
              } else if (fromControl.hasError('pattern')) {
                return 'סיסמא צריכה להכיל אותיות גדולות וקטנות (באנגלית) ומספרים';
              }

              break;

            default:
              return '';
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(NgForm) {
          // this.userForm.valid
          //   ? this._checkIsAccountExists(this.userForm.value.email)
          //   : this._handleError();
          var isValid = this.isSignup ? this.registerForm.valid : this.loginForm.valid;
          !isValid ? this._handleError() : this.isSignup ? this._signup() : this._login();
        } // private _checkIsAccountExists(email: string) {
        //   this._userService.getByEmail(email).pipe(
        //     tap((user) => {
        //       user && user._id ? this._signup() : this._login();
        //     })
        //   );
        // }

      }, {
        key: "_signup",
        value: function _signup() {
          var _this2 = this;

          // this._userService.getByEmail(credantials.email).pipe(
          //   tap(user=> {user && user._id? }),
          //   catchError()
          // )
          var _this$registerForm$va = this.registerForm.value,
              name = _this$registerForm$va.name,
              email = _this$registerForm$va.email,
              password = _this$registerForm$va.password;

          this._authService.signup(Object.assign(Object.assign({}, this._user), {
            name: name,
            email: email,
            password: password
          })).subscribe(function (userRegistered) {
            userRegistered ? _this2._handleSuccess('userRegistered', userRegistered) : _this2._handleError();
          });
        }
      }, {
        key: "_login",
        value: function _login() {
          var _this3 = this;

          this._authService.login(this.loginForm.value).subscribe(function (userLogged) {
            userLogged ? _this3._handleSuccess('userRegistered', userLogged) : _this3._handleError();
          });
        }
      }, {
        key: "_handleError",
        value: function _handleError() {
          console.log('error');
        }
      }, {
        key: "_handleSuccess",
        value: function _handleSuccess(type, user) {
          switch (type) {
            case 'userRegistered':
              this._router.navigate(['/']);

              break;

            case 'userLogged':
              this._router.navigate(['/']);

              break;
          } // Todo: add massage

        }
      }, {
        key: "toggleIsSignUpBtnText",
        get: function get() {
          return this.isSignup ? 'יש לך חשבון? התחבר עכשיו' : 'אינך רשום עדיין? הרשם עכשיו';
        } //COMPUTED

      }, {
        key: "getErrorMessage",
        get: function get() {
          if (this.registerForm.value.email.hasError('required')) {
            return 'You must enter a value';
          }

          return this.registerForm.value.email.hasError('email') ? 'Not a valid email' : '';
        }
      }, {
        key: "formGroup",
        get: function get() {
          return this.isSignup ? this.registerForm : this.loginForm;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["login"]],
      decls: 21,
      vars: 11,
      consts: [[1, "width-container", "flex", "col", "j-center", 3, "formGroup", "submit"], ["f", ""], ["appearance", "legacy", 4, "ngIf"], ["appearance", "legacy"], ["matInput", "", "type", "email", "placeholder", "pat@example.com", "formControlName", "email", "required", ""], [4, "ngIf"], ["matInput", "", "formControlName", "password", "required", "", 3, "type"], ["type", "button", "mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "flex", "bet"], ["type", "submit", "mat-stroked-button", "", "color", "primary", 3, "disabled"], ["type", "button", "mat-button", "", "color", "primary", 3, "click"], ["matInput", "", "type", "text", "formControlName", "name", "required", ""]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return ctx.onSubmit(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_mat_form_field_2_Template, 5, 1, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u05D4\u05D6\u05DF \u05DB\u05EA\u05D5\u05D1\u05EA \u05DE\u05D9\u05D9\u05DC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponent_mat_error_7_Template, 2, 1, "mat-error", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u05D4\u05D6\u05DF \u05E1\u05D9\u05E1\u05DE\u05D0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_12_listener() {
            return ctx.hide = !ctx.hide;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_mat_error_15_Template, 2, 1, "mat-error", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_19_listener() {
            return ctx.isSignup = !ctx.isSignup;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.isSignup ? ctx.registerForm : ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSignup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["email"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["password"].invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isSignup ? !ctx.registerForm.valid : !ctx.loginForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.isSignup ? "\u05D4\u05E8\u05E9\u05DD" : "\u05D4\u05EA\u05D7\u05D1\u05E8", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.toggleIsSignUpBtnText, " ");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]],
      styles: ["@-webkit-keyframes opacity {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes opacity {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes slide-up {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n@keyframes slide-up {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n@-webkit-keyframes slide-down {\n  0% {\n    transform: translateY(-100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n@keyframes slide-down {\n  0% {\n    transform: translateY(-100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n@-webkit-keyframes slide-left {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(0%);\n  }\n}\n@keyframes slide-left {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(0%);\n  }\n}\n@-webkit-keyframes slide-right {\n  0% {\n    transform: translateX(100%);\n  }\n  100% {\n    transform: translateX(0%);\n  }\n}\n@keyframes slide-right {\n  0% {\n    transform: translateX(100%);\n  }\n  100% {\n    transform: translateX(0%);\n  }\n}\n@-webkit-keyframes shake {\n  0% {\n    transform: rotate(10deg);\n  }\n  25% {\n    transform: rotate(-10deg);\n  }\n  50% {\n    transform: rotate(0);\n  }\n}\n@keyframes shake {\n  0% {\n    transform: rotate(10deg);\n  }\n  25% {\n    transform: rotate(-10deg);\n  }\n  50% {\n    transform: rotate(0);\n  }\n}\n@-webkit-keyframes grow-center-to-sides {\n  0% {\n    transform: scale(0, 1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes grow-center-to-sides {\n  0% {\n    transform: scale(0, 1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\nform[_ngcontent-%COMP%] {\n  padding: 15px;\n  margin: 20px 0;\n  border-radius: 3px;\n}\nform[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  direction: rtl;\n}\nform[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  text-align: right;\n  -webkit-margin-after: 12px;\n          margin-block-end: 12px;\n}\n@media (min-width: 330px) {\n  form[_ngcontent-%COMP%] {\n    padding: 25px;\n    width: 330px;\n    box-shadow: 0 0 5px #0000001c;\n    position: fixed;\n    top: 30%;\n    left: 50%;\n    transform: translate(-50%, -30%);\n  }\n}\ninput[_ngcontent-%COMP%]:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0px 30px white inset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXHNpdGUtcHJvalxcX0FuZ3VsYXJcXE1pc3MtUXVpelxccXVpei1mcm9udGVuZC9zcmNcXHN0eWxlc1xcc2V0dXBcXF9taXhpbnMuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXHNpdGUtcHJvalxcX0FuZ3VsYXJcXE1pc3MtUXVpelxccXVpei1mcm9udGVuZC9zcmNcXHN0eWxlc1xcYW5pbWF0aW9uc1xcX2ZhZGUuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL0M6XFxzaXRlLXByb2pcXF9Bbmd1bGFyXFxNaXNzLVF1aXpcXHF1aXotZnJvbnRlbmQvc3JjXFxzdHlsZXNcXGFuaW1hdGlvbnNcXF9zbGlkZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9DOlxcc2l0ZS1wcm9qXFxfQW5ndWxhclxcTWlzcy1RdWl6XFxxdWl6LWZyb250ZW5kL3NyY1xcc3R5bGVzXFxhbmltYXRpb25zXFxfcm90YXRlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL0M6XFxzaXRlLXByb2pcXF9Bbmd1bGFyXFxNaXNzLVF1aXpcXHF1aXotZnJvbnRlbmQvc3JjXFxzdHlsZXNcXGFuaW1hdGlvbnNcXF9yaXBwbGUuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXHNpdGUtcHJvalxcX0FuZ3VsYXJcXE1pc3MtUXVpelxccXVpei1mcm9udGVuZC9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXHNpdGUtcHJvalxcX0FuZ3VsYXJcXE1pc3MtUXVpelxccXVpei1mcm9udGVuZC9zcmNcXHN0eWxlc1xcc2V0dXBcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBQTtBQW1EQSxrQkFBQTtBQ25EQTtFQUNJO0lBQ0ksVUFBQTtFQ0dOO0VEQUU7SUFDSSxVQUFBO0VDRU47QUFDRjtBRFRBO0VBQ0k7SUFDSSxVQUFBO0VDR047RURBRTtJQUNJLFVBQUE7RUNFTjtBQUNGO0FDVEE7RUFDSTtJQUNJLDJCQUFBO0VEV047RUNURTtJQUNJLHlCQUFBO0VEV047QUFDRjtBQ2pCQTtFQUNJO0lBQ0ksMkJBQUE7RURXTjtFQ1RFO0lBQ0kseUJBQUE7RURXTjtBQUNGO0FDVEE7RUFDSTtJQUNJLDRCQUFBO0VEV047RUNURTtJQUNJLHlCQUFBO0VEV047QUFDRjtBQ2pCQTtFQUNJO0lBQ0ksNEJBQUE7RURXTjtFQ1RFO0lBQ0kseUJBQUE7RURXTjtBQUNGO0FDVEE7RUFDSTtJQUNJLDRCQUFBO0VEV047RUNURTtJQUNJLHlCQUFBO0VEV047QUFDRjtBQ2pCQTtFQUNJO0lBQ0ksNEJBQUE7RURXTjtFQ1RFO0lBQ0kseUJBQUE7RURXTjtBQUNGO0FDVEE7RUFDSTtJQUNJLDJCQUFBO0VEV047RUNURTtJQUNJLHlCQUFBO0VEV047QUFDRjtBQ2pCQTtFQUNJO0lBQ0ksMkJBQUE7RURXTjtFQ1RFO0lBQ0kseUJBQUE7RURXTjtBQUNGO0FFdkNBO0VBQ0k7SUFDSSx3QkFBQTtFRnlDTjtFRXZDRTtJQUNJLHlCQUFBO0VGeUNOO0VFdkNFO0lBQ0ksb0JBQUE7RUZ5Q047QUFDRjtBRWxEQTtFQUNJO0lBQ0ksd0JBQUE7RUZ5Q047RUV2Q0U7SUFDSSx5QkFBQTtFRnlDTjtFRXZDRTtJQUNJLG9CQUFBO0VGeUNOO0FBQ0Y7QUduREE7RUFDSTtJQUVJLHNCQUFBO0VIb0ROO0VHbERFO0lBRUksbUJBQUE7RUhtRE47QUFDRjtBRzNEQTtFQUNJO0lBRUksc0JBQUE7RUhvRE47RUdsREU7SUFFSSxtQkFBQTtFSG1ETjtBQUNGO0FJMURBO0VBWUksYUFBQTtFQUNBLGNBQUE7RUFVQSxrQkFBQTtBSndDSjtBSTlESTtFQUNJLGNBQUE7QUpnRVI7QUk3REk7RUFFUSxpQkFBQTtFQUNBLDBCQUFBO1VBQUEsc0JBQUE7QUo4RFo7QUZyRUU7RU1ERjtJQWVRLGFBQUE7SUFDQSxZQ3dDWTtJRHZDWiw2QkFBQTtJQUNBLGVBQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtJQUNBLGdDQUFBO0VKMkROO0FBQ0Y7QUl2REE7RUFDSSx1REFBQTtBSjJESiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTWVkaWEgcXVlcmllcyBCcmVha3BvaW50IG1peGlucyAqL1xyXG5cclxuQG1peGluIGZvci1taW5pLW1vYmlsZS1sYXlvdXQge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWstbWluaS1tb2JpbGUpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gZm9yLW1lZGl1bS1tb2JpbGUtbGF5b3V0IHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrLW1lZGl1bS1tb2JpbGUpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gZm9yLW1vYmlsZS1sYXlvdXQge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3ItbmFycm93LWxheW91dCB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVhay1uYXJyb3cpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGZvci1ub3JtYWwtbGF5b3V0IHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrLW5vcm1hbCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9yLXdpZGUtbGF5b3V0IHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrLXdpZGUpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gUlRMIHx8IExUUlxyXG5cclxuLy8gJGxheW91dC1kaXJlY3Rpb246IHJ0bCAhZGVmYXVsdDtcclxuXHJcbi8vIEBtaXhpbiBsdHIge1xyXG4vLyAgICAgQGlmICRsYXlvdXQtZGlyZWN0aW9uID09IGx0ciB7XHJcbi8vICAgICAgICAgQGNvbnRlbnQ7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gQG1peGluIHJ0bCB7XHJcbi8vICAgICBAaWYgJGxheW91dC1kaXJlY3Rpb24gPT0gcnRsIHtcclxuLy8gICAgICAgICBAY29udGVudDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLyogTWVkaWEgIE1peGlucyAqL1xyXG5cclxuLy9hc3BlY3QgcmF0aW8gbWl4aW5cclxuQG1peGluIGFzcGVjdC1yYXRpbygkd2lkdGgsICRoZWlnaHQpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAoJGhlaWdodCAvICR3aWR0aCkgKiAxMDAlO1xyXG4gIH1cclxuICA+ICoge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gIH1cclxuICA+IGltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbn1cclxuXHJcbi8vIE1peGluIGZvciByZW1vdmluZyBob3ZlciBlZmVjdHMgb24gaXBob25lIHNjcmVlblxyXG5AbWl4aW4gaG92ZXItc3VwcG9ydGVkIHtcclxuICBAbWVkaWEgbm90IGFsbCBhbmQgKHBvaW50ZXI6IGNvYXJzZSkge1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHJpcHBsZSgkY29sb3IsICRib3JkZXItcmFkaXVzKSB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgIGFuaW1hdGlvbjogZ3Jvdy1jZW50ZXItdG8tc2lkZXMgMC4zcztcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGxpbmUtcmlwcGxlKCRjb2xvciwgJGJvcmRlci1yYWRpdXMpIHtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICBhbmltYXRpb246IGdyb3ctY2VudGVyLXRvLXNpZGVzIC4zcyBsaW5lYXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICAgIGhlaWdodDogNXB4O1xyXG4gICAgfVxyXG59XHJcbiIsIkBrZXlmcmFtZXMgb3BhY2l0eSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAvLyAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTUwJSk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC8vICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyogTWVkaWEgcXVlcmllcyBCcmVha3BvaW50IG1peGlucyAqL1xuLyogTWVkaWEgIE1peGlucyAqL1xuQGtleWZyYW1lcyBvcGFjaXR5IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZS11cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZS1kb3duIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZS1sZWZ0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZS1yaWdodCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzaGFrZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XG4gIH1cbiAgMjUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZ3Jvdy1jZW50ZXItdG8tc2lkZXMge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLCAxKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5mb3JtIHtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbmZvcm0gKiB7XG4gIGRpcmVjdGlvbjogcnRsO1xufVxuZm9ybSAubWF0LWZvcm0tZmllbGQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMTJweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMzBweCkge1xuICBmb3JtIHtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIHdpZHRoOiAzMzBweDtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICMwMDAwMDAxYztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAzMCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0zMCUpO1xuICB9XG59XG5cbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGwge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwcHggMzBweCB3aGl0ZSBpbnNldCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiAtd2Via2l0LWJveC1zaGFkb3cgMC4zcztcbn0iLCJAa2V5ZnJhbWVzIHNsaWRlLXVwIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gICAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc2xpZGUtZG93biB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcbiAgICB9XHJcbn1cclxuQGtleWZyYW1lcyBzbGlkZS1sZWZ0IHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuICAgIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHNsaWRlLXJpZ2h0IHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5cclxuQGtleWZyYW1lcyBzaGFrZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xyXG4gICAgfVxyXG4gICAgMjUlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgIH1cclxufSIsIlxyXG5Aa2V5ZnJhbWVzIGdyb3ctY2VudGVyLXRvLXNpZGVzIHtcclxuICAgIDAlIHtcclxuICAgICAgICAvLyB3aWR0aDogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAsIDEpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIH0gICBcclxufSIsIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9nbG9iYWwuc2Nzcyc7XHJcblxyXG5mb3JtIHtcclxuICAgICoge1xyXG4gICAgICAgIGRpcmVjdGlvbjogcnRsO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgLy8gOmhvc3QtY29udGV4dCgpIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IDEycHg7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG4gICAgLy8gd2lkdGg6IDEwMHZ3O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgQGluY2x1ZGUgZm9yLW1pbmktbW9iaWxlLWxheW91dCB7XHJcbiAgICAgICAgcGFkZGluZzoyNXB4O1xyXG4gICAgICAgIHdpZHRoOiAkYnJlYWstbWluaS1tb2JpbGU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCAjMDAwMDAwMWM7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMzAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMzAlKTtcclxuICAgIH1cclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwcHggMzBweCB3aGl0ZSBpbnNldCAhaW1wb3J0YW50O1xyXG4gICAgLy8gLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiAtd2Via2l0LWJveC1zaGFkb3cgMC4zcztcclxuICAgIC8vICY6OnBsYWNlaG9sZGVyIHtcclxuICAgIC8vICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAvLyAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgLy8gfVxyXG59XHJcbiIsIi8vIENPTE9SIFBBTEVUVEVcclxuJGNscjE6ICMwZTBjMjg7XHJcbiRjbHIyOiAjMjQyODQ5O1xyXG4kY2xyMzogIzk5MTIxMjtcclxuJGNscjQ6ICM3ZWM4ZTM7XHJcbiRjbHI1OiAjZWVmYmZmO1xyXG4kY2xyNjogIzc3YmRkNjtcclxuJGNscjc6ICM2OGIwYzk7XHJcbiRjbHI4OiAjZjZmZGZmO1xyXG4kY2xyOTogI2U3ZjNmZjtcclxuJGNscjEwOiAjZmZjOWM5O1xyXG4kY2xyMTE6ICNhNGFhZGI7XHJcblxyXG4vLyBCTFVFXHJcblxyXG4kYmx1ZTE6ICMwZTBjMjg7XHJcbiRibHVlMjogIzI0Mjg0OTtcclxuJGJsdWUzOiAjNjhiMGM5O1xyXG4kYmx1ZTQ6ICM3N2JkZDY7XHJcbiRibHVlNTogIzdlYzhlMztcclxuJGJsdWU2OiAjYTRhYWRiO1xyXG4kYmx1ZTc6ICNlZWZiZmY7XHJcbiRibHVlODogI2Y2ZmRmZjtcclxuXHJcbi8vIFJFRFxyXG5cclxuJHJlZDE6ICM5OTEyMTI7XHJcbiRyZWQyOiAjZmY2ZTZlO1xyXG4kcmVkMzogI2ZmYzljOTtcclxuJHJlZDQ6ICNmZmVjZWM7XHJcblxyXG4kZ3JheTE6ICM1ODYxNjM7XHJcbiRncmF5MjogIzNkNDc0YjtcclxuJGdyYXkzOiAjMjgzMTM0O1xyXG5cclxuJGdyYXk0OiAjNTg2MTYzMjg7XHJcbiRncmF5NTogIzU4NjE2MzE1O1xyXG5cclxuJGdyZWVuMTogcmdiKDAsIDI1NSwgMCk7XHJcblxyXG4kcHJpbWFyeS1jb2xvcjogIzFhMjM3ZTtcclxuJGRhcmstcHJpbWFyeS1jb2xvcjogIzBmMTA0MTtcclxuJGFjY2VudC1jb2xvcjogIzI5NjJmZjtcclxuJHN1Yi15ZWxsb3c6ICNmZmNhMDA7XHJcblxyXG4kd2lkdGgtbmF2LWtpdDogMjMwcHg7XHJcblxyXG4vLyBCT1gtU0hBRE9XXHJcbiRzaGFkb3cxOiAwcHggMHB4IDFweCAxcHggIzAwMDAwMDI2O1xyXG4kc2hhZG93MjogMHB4IDBweCAzcHggMXB4ICMwMDAwMDAyNjtcclxuJHNoYWRvdzM6IDBweCAwcHggNHB4IDFweCAjMDAwMDAwMjY7XHJcblxyXG4kc2R3MTogMCAwIDVweCAjMDAwMDAwMjk7O1xyXG4kc2R3MjogMHB4IDBweCA0cHggMXB4ICMwMDAwMDAyNjtcclxuLy8gQk9SREVSXHJcbiRib3JkZXIxOiAxcHggc29saWQgIzI0Mjg0OTMwO1xyXG5cclxuLy8gTEFZT1VUIEJSRUFLUE9JTlRTXHJcbiRicmVhay1taW5pLW1vYmlsZTogMzMwcHg7XHJcbiRicmVhay1tZWRpdW0tbW9iaWxlOiA0ODBweDtcclxuJGJyZWFrLW1vYmlsZTogNjgwcHg7XHJcbiRicmVhay1uYXJyb3c6IDg4MHB4O1xyXG4kYnJlYWstbm9ybWFsOiAxMDIwcHg7XHJcbiRicmVhay13aWRlOiAxNDAwcHg7XHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/test-details/test-details.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/test-details/test-details.component.ts ***!
    \**************************************************************/

  /*! exports provided: TestDetailsComponent */

  /***/
  function srcAppPagesTestDetailsTestDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestDetailsComponent", function () {
      return TestDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_test_test_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/test/test.service */
    "./src/app/services/test/test.service.ts");
    /* harmony import */


    var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/user/user.service */
    "./src/app/services/user/user.service.ts");
    /* harmony import */


    var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/timer/timer.component */
    "./src/app/components/timer/timer.component.ts");
    /* harmony import */


    var _components_question_list_question_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../components/question-list/question-list.component */
    "./src/app/components/question-list/question-list.component.ts");

    function TestDetailsComponent_section_0_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestDetailsComponent_section_0_ng_container_5_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r4.isStartQuiz = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Start Quiz");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function TestDetailsComponent_section_0_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "timer", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateTime", function TestDetailsComponent_section_0_ng_template_6_Template_timer_updateTime_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r6.updateTime($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "question-list", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateScore", function TestDetailsComponent_section_0_ng_template_6_Template_question_list_updateScore_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.updateScore();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("timeLeft", ctx_r3.test.timeLeft);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u05E1\u05D4\"\u05DB \u05EA\u05E9\u05D5\u05D1\u05D5\u05EA \u05E9\u05E0\u05E2\u05E0\u05D5: ", ctx_r3.test.totalAnswered, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u05E1\u05D4\"\u05DB \u05EA\u05E9\u05D5\u05D1\u05D5\u05EA \u05E0\u05DB\u05D5\u05E0\u05D5\u05EA: ", ctx_r3.test.totalCorrectAnswered, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("questions", ctx_r3.test.questions)("timeLeft", ctx_r3.test.timeLeft);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        disable: a0
      };
    };

    function TestDetailsComponent_section_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TestDetailsComponent_section_0_ng_container_5_Template, 3, 0, "ng-container", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TestDetailsComponent_section_0_ng_template_6_Template, 6, 5, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, !ctx_r0.test.timeLeft));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("countUpdateUser: ", ctx_r0.countUpdateUser, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u05E9\u05DD \u05D4\u05DE\u05D1\u05D7\u05DF: ", ctx_r0.test.title, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isStartQuiz)("ngIfElse", _r2);
      }
    }

    var TestDetailsComponent = /*#__PURE__*/function () {
      function TestDetailsComponent(_route, _testService, _userService, _authService) {
        _classCallCheck(this, TestDetailsComponent);

        this._route = _route;
        this._testService = _testService;
        this._userService = _userService;
        this._authService = _authService; // public loggedinUser: User;

        this.isStartQuiz = false;
        this.countUpdateUser = 0;
      }

      _createClass(TestDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._loadTest();
        }
      }, {
        key: "_loadCurrLoggedinUser",
        value: function _loadCurrLoggedinUser() {
          return JSON.parse(JSON.stringify(this.loggedinUser));
        }
      }, {
        key: "_loadTest",
        value: function _loadTest() {
          var _this4 = this;

          var testId = this._route.snapshot.paramMap.get('id');

          if (testId) {
            this._testService.getById(testId).subscribe(function (newTest) {
              _this4.user = _this4._loadCurrLoggedinUser();

              var test = _this4.user.tests.find(function (test) {
                return test._id === newTest._id;
              });

              if (test) {
                _this4.test = test;
              } else {
                _this4.user.tests.push(newTest);

                _this4.test = newTest;

                _this4.updateUser();
              }
            });
          } else {// this.test = this.testService.getEmptyTest()
          }
        }
      }, {
        key: "updateUser",
        value: function updateUser() {
          this.countUpdateUser++;
          console.log(this.user.tests, 'tests of loggedinUser prev update');

          this._userService.updateUser(this.user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (userUpdated) {
            // this.loggedinUser = userUpdated
            console.log(userUpdated, 'userUpdated in test details');
          });
        }
      }, {
        key: "updateScore",
        value: function updateScore() {
          var answereds = this.test.questions.filter(function (q) {
            return q.answeredIdx || q.answeredIdx === 0;
          });
          this.test.totalAnswered = answereds.length;
          this.test.totalCorrectAnswered = answereds.filter(function (q) {
            return q.isCorrectAnswered;
          }).length; // this._updateTest();
        }
      }, {
        key: "updateTime",
        value: function updateTime(currTimeLeft) {
          this.test.timeLeft = currTimeLeft; // this._updateTest();
        }
      }, {
        key: "_updateTest",
        value: function _updateTest() {
          var _this5 = this;

          this.user = this._loadCurrLoggedinUser();
          var testIdx = this.user.tests.findIndex(function (test) {
            return test._id === _this5.test._id;
          });
          this.user.tests.splice(testIdx, 1, this.test);
          this.updateUser();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          //Called once, before the instance is destroyed.
          //Add 'implements OnDestroy' to the class.
          this._updateTest();
        }
      }, {
        key: "loggedinUser",
        get: function get() {
          return this._authService.userValue;
        }
      }]);

      return TestDetailsComponent;
    }();

    TestDetailsComponent.ɵfac = function TestDetailsComponent_Factory(t) {
      return new (t || TestDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_test_test_service__WEBPACK_IMPORTED_MODULE_3__["TestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]));
    };

    TestDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TestDetailsComponent,
      selectors: [["test-details"]],
      decls: 1,
      vars: 1,
      consts: [["class", "width-container", 3, "ngClass", 4, "ngIf"], [1, "width-container", 3, "ngClass"], [4, "ngIf", "ngIfElse"], ["startQuiz", ""], [3, "click"], [3, "timeLeft", "updateTime"], [3, "questions", "timeLeft", "updateScore"]],
      template: function TestDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TestDetailsComponent_section_0_Template, 8, 7, "section", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.test);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_7__["TimerComponent"], _components_question_list_question_list_component__WEBPACK_IMPORTED_MODULE_8__["QuestionListComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlc3QtZGV0YWlscy90ZXN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'test-details',
          templateUrl: './test-details.component.html',
          styleUrls: ['./test-details.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_services_test_test_service__WEBPACK_IMPORTED_MODULE_3__["TestService"]
        }, {
          type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/test-edit/test-edit.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/test-edit/test-edit.component.ts ***!
    \********************************************************/

  /*! exports provided: TestEditComponent */

  /***/
  function srcAppPagesTestEditTestEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestEditComponent", function () {
      return TestEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TestEditComponent = /*#__PURE__*/function () {
      function TestEditComponent() {
        _classCallCheck(this, TestEditComponent);
      }

      _createClass(TestEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TestEditComponent;
    }();

    TestEditComponent.ɵfac = function TestEditComponent_Factory(t) {
      return new (t || TestEditComponent)();
    };

    TestEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TestEditComponent,
      selectors: [["test-edit"]],
      decls: 2,
      vars: 0,
      template: function TestEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "test-edit works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlc3QtZWRpdC90ZXN0LWVkaXQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'test-edit',
          templateUrl: './test-edit.component.html',
          styleUrls: ['./test-edit.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/test-page/test-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/test-page/test-page.component.ts ***!
    \********************************************************/

  /*! exports provided: TestPageComponent */

  /***/
  function srcAppPagesTestPageTestPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestPageComponent", function () {
      return TestPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_test_test_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/test/test.service */
    "./src/app/services/test/test.service.ts");
    /* harmony import */


    var _components_test_list_test_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../components/test-list/test-list.component */
    "./src/app/components/test-list/test-list.component.ts");

    var TestPageComponent = /*#__PURE__*/function () {
      function TestPageComponent(testService) {
        _classCallCheck(this, TestPageComponent);

        this.testService = testService;
      }

      _createClass(TestPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._loadTests();
        }
      }, {
        key: "_loadTests",
        value: function _loadTests() {
          var _this6 = this;

          this.testService.query().subscribe(function (tests) {
            return _this6.tests = tests;
          });
        }
      }, {
        key: "onCheckedTest",
        value: function onCheckedTest(testId) {
          this.testService.getById(testId).subscribe();
        }
      }]);

      return TestPageComponent;
    }();

    TestPageComponent.ɵfac = function TestPageComponent_Factory(t) {
      return new (t || TestPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_test_test_service__WEBPACK_IMPORTED_MODULE_1__["TestService"]));
    };

    TestPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TestPageComponent,
      selectors: [["test-page"]],
      decls: 2,
      vars: 1,
      consts: [[1, "width-container"], [1, "test-list", 3, "tests"]],
      template: function TestPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "test-list", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tests", ctx.tests);
        }
      },
      directives: [_components_test_list_test_list_component__WEBPACK_IMPORTED_MODULE_2__["TestListComponent"]],
      styles: ["main {\n  padding: 20px;\n}\nmain .test-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 10px;\n}\nmain .test-list .test-preview {\n  cursor: pointer;\n  height: 150px;\n  border-radius: 3px;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);\n  transition: box-shadow 0.3s;\n}\nmain .test-list .test-preview:hover {\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.75);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVzdC1wYWdlL0M6XFxzaXRlLXByb2pcXF9Bbmd1bGFyXFxNaXNzLVF1aXpcXHF1aXotZnJvbnRlbmQvc3JjXFxhcHBcXHBhZ2VzXFx0ZXN0LXBhZ2VcXHRlc3QtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGVzdC1wYWdlL3Rlc3QtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjtBREFJO0VBRUksYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtBQ0NSO0FEQVE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBR0Esc0NBQUE7RUFDQSwyQkFBQTtBQ0FaO0FEQ1k7RUFDSSx1Q0FBQTtBQ0NoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlc3QtcGFnZS90ZXN0LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAudGVzdC1saXN0IHtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcclxuICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICAgICAgLnRlc3QtcHJldmlldyB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAvLyB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4zcztcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJtYWluIHtcbiAgcGFkZGluZzogMjBweDtcbn1cbm1haW4gLnRlc3QtbGlzdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xuICBnYXA6IDEwcHg7XG59XG5tYWluIC50ZXN0LWxpc3QgLnRlc3QtcHJldmlldyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzO1xufVxubWFpbiAudGVzdC1saXN0IC50ZXN0LXByZXZpZXc6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59Il19 */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'test-page',
          templateUrl: './test-page.component.html',
          styleUrls: ['./test-page.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _services_test_test_service__WEBPACK_IMPORTED_MODULE_1__["TestService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/user-details/user-details.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/user-details/user-details.component.ts ***!
    \**************************************************************/

  /*! exports provided: UserDetailsComponent */

  /***/
  function srcAppPagesUserDetailsUserDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function () {
      return UserDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/user/user.service */
    "./src/app/services/user/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_test_list_test_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/test-list/test-list.component */
    "./src/app/components/test-list/test-list.component.ts");

    function UserDetailsComponent_main_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Quizs:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "test-list", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tests", ctx_r0.user.tests);
      }
    }

    var UserDetailsComponent = /*#__PURE__*/function () {
      function UserDetailsComponent(_userService, _route) {
        _classCallCheck(this, UserDetailsComponent);

        this._userService = _userService;
        this._route = _route;
      }

      _createClass(UserDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._loadUser();
        }
      }, {
        key: "_loadUser",
        value: function _loadUser() {
          var _this7 = this;

          var userId = this._route.snapshot.paramMap.get('id');

          this._userService.getById(userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (user) {
            _this7.user = user;
          });
        }
      }]);

      return UserDetailsComponent;
    }();

    UserDetailsComponent.ɵfac = function UserDetailsComponent_Factory(t) {
      return new (t || UserDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    UserDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserDetailsComponent,
      selectors: [["user-details"]],
      decls: 1,
      vars: 1,
      consts: [["class", "width-container", 4, "ngIf"], [1, "width-container"], [1, "test-list", 3, "tests"]],
      template: function UserDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserDetailsComponent_main_0_Template, 6, 2, "main", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_test_list_test_list_component__WEBPACK_IMPORTED_MODULE_5__["TestListComponent"]],
      styles: ["main .test-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 10px;\n}\nmain .test-list .test-preview {\n  cursor: pointer;\n  height: 200px;\n  border-radius: 3px;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);\n  transition: box-shadow 0.3s;\n}\nmain .test-list .test-preview:hover {\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.75);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1kZXRhaWxzL0M6XFxzaXRlLXByb2pcXF9Bbmd1bGFyXFxNaXNzLVF1aXpcXHF1aXotZnJvbnRlbmQvc3JjXFxhcHBcXHBhZ2VzXFx1c2VyLWRldGFpbHNcXHVzZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUVJLGFBQUE7RUFDQSwyREFBQTtFQUNBLFNBQUE7QUNEUjtBREVRO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUdBLHNDQUFBO0VBQ0EsMkJBQUE7QUNGWjtBREdZO0VBQ0ksdUNBQUE7QUNEaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbiB7XHJcbiAgICAudGVzdC1saXN0IHtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcclxuICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICAgICAgLnRlc3QtcHJldmlldyB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAvLyB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4zcztcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJtYWluIC50ZXN0LWxpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgZ2FwOiAxMHB4O1xufVxubWFpbiAudGVzdC1saXN0IC50ZXN0LXByZXZpZXcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogMCAwIDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcztcbn1cbm1haW4gLnRlc3QtbGlzdCAudGVzdC1wcmV2aWV3OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDRweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufSJdfQ== */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'user-details',
          templateUrl: './user-details.component.html',
          styleUrls: ['./user-details.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/user-page/user-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/user-page/user-page.component.ts ***!
    \********************************************************/

  /*! exports provided: UserPageComponent */

  /***/
  function srcAppPagesUserPageUserPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPageComponent", function () {
      return UserPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/user/user.service */
    "./src/app/services/user/user.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../components/user-list/user-list.component */
    "./src/app/components/user-list/user-list.component.ts");

    function UserPageComponent_user_list_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "user-list", 2);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("users", ctx_r0.users);
      }
    }

    var UserPageComponent = /*#__PURE__*/function () {
      function UserPageComponent(_userService) {
        _classCallCheck(this, UserPageComponent);

        this._userService = _userService;
      }

      _createClass(UserPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._loadUsers();
        }
      }, {
        key: "_loadUsers",
        value: function _loadUsers() {
          var _this8 = this;

          this._userService.query().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (users) {
            _this8.users = users;
          });
        }
      }]);

      return UserPageComponent;
    }();

    UserPageComponent.ɵfac = function UserPageComponent_Factory(t) {
      return new (t || UserPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
    };

    UserPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserPageComponent,
      selectors: [["user-page"]],
      decls: 2,
      vars: 1,
      consts: [[1, "width-container"], ["class", "user-list", 3, "users", 4, "ngIf"], [1, "user-list", 3, "users"]],
      template: function UserPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserPageComponent_user_list_1_Template, 1, 1, "user-list", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.users);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"]],
      styles: ["main {\n  padding: 20px;\n}\nmain .user-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n  gap: 10px;\n}\nmain .user-list .user-preview {\n  cursor: pointer;\n  height: 100px;\n  border-radius: 3px;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);\n  transition: box-shadow 0.3s;\n}\nmain .user-list .user-preview:hover {\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.75);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1wYWdlL0M6XFxzaXRlLXByb2pcXF9Bbmd1bGFyXFxNaXNzLVF1aXpcXHF1aXotZnJvbnRlbmQvc3JjXFxhcHBcXHBhZ2VzXFx1c2VyLXBhZ2VcXHVzZXItcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdXNlci1wYWdlL3VzZXItcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjtBREFJO0VBRUksYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtBQ0NSO0FEQVE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBR0Esc0NBQUE7RUFDQSwyQkFBQTtBQ0FaO0FEQ1k7RUFDSSx1Q0FBQTtBQ0NoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItcGFnZS91c2VyLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAudXNlci1saXN0IHtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAxZnIpKTtcclxuICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICAgICAgLnVzZXItcHJldmlldyB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAvLyB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4zcztcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJtYWluIHtcbiAgcGFkZGluZzogMjBweDtcbn1cbm1haW4gLnVzZXItbGlzdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xuICBnYXA6IDEwcHg7XG59XG5tYWluIC51c2VyLWxpc3QgLnVzZXItcHJldmlldyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzO1xufVxubWFpbiAudXNlci1saXN0IC51c2VyLXByZXZpZXc6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59Il19 */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'user-page',
          templateUrl: './user-page.component.html',
          styleUrls: ['./user-page.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth/auth.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/auth/auth.service.ts ***!
    \***********************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _http_base_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../http/base-url */
    "./src/app/services/http/base-url.ts");
    /* harmony import */


    var _storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../storage/storage.service */
    "./src/app/services/storage/storage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(_storageService, _http, _router) {
        _classCallCheck(this, AuthService);

        this._storageService = _storageService;
        this._http = _http;
        this._router = _router; // STATE

        this.KEY_LOGGEDIN = 'loggedin-user';
        this._httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
        this._url = "".concat(_http_base_url__WEBPACK_IMPORTED_MODULE_4__["BASE_URL"], "auth");
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this._storageService.loadSession(this.KEY_LOGGEDIN));
        this.user = this.userSubject.asObservable();
      } // GETTERS


      _createClass(AuthService, [{
        key: "_handleLogin",
        // MUTATIONS
        value: function _handleLogin(user) {
          try {
            this._storageService.storeSession(this.KEY_LOGGEDIN, user);
          } catch (err) {
            console.log('ERROR IN _handleLogin', err);
          }
        }
      }, {
        key: "_handleError",
        value: function _handleError() {
          var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
          var result = arguments.length > 1 ? arguments[1] : undefined;
          return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.log(error.error.error);
            console.log(result, 'result'); // log to console instead
            // TODO: better job of transforming error for user consumption
            // this._log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
          };
        } // private _log(message: string) {
        //   this.messageService.add(`HeroService: ${message}`);
        // }
        // ACTINOS

      }, {
        key: "login",
        value: function login(userLoginCred) {
          var _this9 = this;

          return this._http.post("".concat(this._url, "/login"), userLoginCred).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            _this9._handleLogin(user);

            _this9.userSubject.next(user);

            return user;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this._handleError("login userLoginCred=".concat(userLoginCred))));
        }
      }, {
        key: "signup",
        value: function signup(userCred) {
          var _this10 = this;

          sessionStorage.clear();
          return this._http.post("".concat(this._url, "/signup"), userCred).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            _this10._handleLogin(user);

            _this10.userSubject.next(user);

            return user;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this._handleError("signup user=".concat(this._url))));
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this11 = this;

          return this._http.post("".concat(this._url, "/logout"), null, this._httpOptions).subscribe(function (res) {
            // const {message} = res
            sessionStorage.clear();

            _this11.userSubject.next(null);

            _this11._router.navigate(['/login']);
          });
        }
      }, {
        key: "getEmptyUser",
        value: function getEmptyUser() {
          return {
            joinAt: null,
            name: '',
            email: '',
            password: '',
            isAdmin: false,
            tests: []
          };
        }
      }, {
        key: "userValue",
        get: function get() {
          return this.userSubject.value;
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/http/base-url.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/http/base-url.ts ***!
    \*******************************************/

  /*! exports provided: BASE_URL */

  /***/
  function srcAppServicesHttpBaseUrlTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BASE_URL", function () {
      return BASE_URL;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BASE_URL = _angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"] ? '//localhost:3030/api/' : '/api/';
    /***/
  },

  /***/
  "./src/app/services/storage/storage.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/storage/storage.service.ts ***!
    \*****************************************************/

  /*! exports provided: StorageService */

  /***/
  function srcAppServicesStorageStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageService", function () {
      return StorageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StorageService = /*#__PURE__*/function () {
      function StorageService() {
        _classCallCheck(this, StorageService);
      }

      _createClass(StorageService, [{
        key: "load",
        value: function load(key) {
          var val = localStorage.getItem(key);
          return val ? JSON.parse(val) : null;
        }
      }, {
        key: "store",
        value: function store(key, val) {
          localStorage[key] = JSON.stringify(val);
        }
      }, {
        key: "loadSession",
        value: function loadSession(key) {
          var val = sessionStorage.getItem(key);
          return val ? JSON.parse(val) : null;
        }
      }, {
        key: "storeSession",
        value: function storeSession(key, val) {
          sessionStorage[key] = JSON.stringify(val);
        }
      }]);

      return StorageService;
    }();

    StorageService.ɵfac = function StorageService_Factory(t) {
      return new (t || StorageService)();
    };

    StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StorageService,
      factory: StorageService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/test/mock-tests.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/test/mock-tests.ts ***!
    \*********************************************/

  /*! exports provided: Tests */

  /***/
  function srcAppServicesTestMockTestsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tests", function () {
      return Tests;
    });

    var Tests = [{
      _id: 't10',
      title: 'title10',
      // createor?: User,
      // createdAt?: number,
      // lastUpdatedAt?: number,
      timeLeft: 60 * 10,
      categories: [],
      totalAnswered: 0,
      totalCorrectAnswered: 0,
      questions: [{
        _id: 'q10',
        questionContent: 'questionContent10',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent101',
          isCorrect: false
        }, {
          answerContent: 'answerContent102',
          isCorrect: false
        }, {
          answerContent: 'answerContent103',
          isCorrect: true
        }, {
          answerContent: 'answerContent104',
          isCorrect: false
        }]
      }, {
        _id: 'q11',
        questionContent: 'questionContent11',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent111',
          isCorrect: false
        }, {
          answerContent: 'answerContent112',
          isCorrect: false
        }, {
          answerContent: 'answerContent113',
          isCorrect: true
        }, {
          answerContent: 'answerContent114',
          isCorrect: false
        }]
      }, {
        _id: 'q12',
        questionContent: 'questionContent12',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent121',
          isCorrect: false
        }, {
          answerContent: 'answerContent122',
          isCorrect: true
        }, {
          answerContent: 'answerContent123',
          isCorrect: false
        }, {
          answerContent: 'answerContent124',
          isCorrect: false
        }]
      }, {
        _id: 'q13',
        questionContent: 'questionContent13',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent131',
          isCorrect: true
        }, {
          answerContent: 'answerContent132',
          isCorrect: false
        }, {
          answerContent: 'answerContent133',
          isCorrect: false
        }, {
          answerContent: 'answerContent134',
          isCorrect: false
        }]
      }, {
        _id: 'q14',
        questionContent: 'questionContent14',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent141',
          isCorrect: false
        }, {
          answerContent: 'answerContent142',
          isCorrect: false
        }, {
          answerContent: 'answerContent143',
          isCorrect: true
        }, {
          answerContent: 'answerContent144',
          isCorrect: false
        }]
      }, {
        _id: 'q15',
        questionContent: 'questionContent15',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent151',
          isCorrect: false
        }, {
          answerContent: 'answerContent152',
          isCorrect: false
        }, {
          answerContent: 'answerContent153',
          isCorrect: false
        }, {
          answerContent: 'answerContent154',
          isCorrect: true
        }]
      }, {
        _id: 'q16',
        questionContent: 'questionContent16',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent161',
          isCorrect: false
        }, {
          answerContent: 'answerContent162',
          isCorrect: false
        }, {
          answerContent: 'answerContent163',
          isCorrect: true
        }, {
          answerContent: 'answerContent164',
          isCorrect: false
        }]
      }, {
        _id: 'q17',
        questionContent: 'questionContent17',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent171',
          isCorrect: false
        }, {
          answerContent: 'answerContent172',
          isCorrect: false
        }, {
          answerContent: 'answerContent173',
          isCorrect: true
        }, {
          answerContent: 'answerContent174',
          isCorrect: false
        }]
      }, {
        _id: 'q18',
        questionContent: 'questionContent18',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent181',
          isCorrect: false
        }, {
          answerContent: 'answerContent182',
          isCorrect: true
        }, {
          answerContent: 'answerContent183',
          isCorrect: false
        }, {
          answerContent: 'answerContent184',
          isCorrect: false
        }]
      }, {
        _id: 'q19',
        questionContent: 'questionContent19',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent191',
          isCorrect: true
        }, {
          answerContent: 'answerContent192',
          isCorrect: false
        }, {
          answerContent: 'answerContent193',
          isCorrect: false
        }, {
          answerContent: 'answerContent194',
          isCorrect: false
        }]
      }],
      watcheds: [],
      reviews: [],
      isPublish: true
    }, {
      _id: 't20',
      title: 'title20',
      // createor?: User,
      // createdAt?: number,
      // lastUpdatedAt?: number,
      timeLeft: 60 * 10,
      categories: [],
      totalAnswered: 0,
      totalCorrectAnswered: 0,
      questions: [{
        _id: 'q20',
        questionContent: 'questionContent20',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent201',
          isCorrect: false
        }, {
          answerContent: 'answerContent202',
          isCorrect: false
        }, {
          answerContent: 'answerContent203',
          isCorrect: true
        }, {
          answerContent: 'answerContent204',
          isCorrect: false
        }]
      }, {
        _id: 'q21',
        questionContent: 'questionContent21',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent211',
          isCorrect: false
        }, {
          answerContent: 'answerContent212',
          isCorrect: false
        }, {
          answerContent: 'answerContent213',
          isCorrect: true
        }, {
          answerContent: 'answerContent214',
          isCorrect: false
        }]
      }, {
        _id: 'q22',
        questionContent: 'questionContent22',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent221',
          isCorrect: false
        }, {
          answerContent: 'answerContent222',
          isCorrect: true
        }, {
          answerContent: 'answerContent223',
          isCorrect: false
        }, {
          answerContent: 'answerContent224',
          isCorrect: false
        }]
      }, {
        _id: 'q23',
        questionContent: 'questionContent23',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent231',
          isCorrect: true
        }, {
          answerContent: 'answerContent232',
          isCorrect: false
        }, {
          answerContent: 'answerContent233',
          isCorrect: false
        }, {
          answerContent: 'answerContent234',
          isCorrect: false
        }]
      }, {
        _id: 'q24',
        questionContent: 'questionContent24',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent241',
          isCorrect: false
        }, {
          answerContent: 'answerContent242',
          isCorrect: false
        }, {
          answerContent: 'answerContent243',
          isCorrect: true
        }, {
          answerContent: 'answerContent244',
          isCorrect: false
        }]
      }, {
        _id: 'q25',
        questionContent: 'questionContent25',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent251',
          isCorrect: false
        }, {
          answerContent: 'answerContent252',
          isCorrect: false
        }, {
          answerContent: 'answerContent253',
          isCorrect: false
        }, {
          answerContent: 'answerContent254',
          isCorrect: true
        }]
      }, {
        _id: 'q26',
        questionContent: 'questionContent26',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent261',
          isCorrect: false
        }, {
          answerContent: 'answerContent262',
          isCorrect: false
        }, {
          answerContent: 'answerContent263',
          isCorrect: true
        }, {
          answerContent: 'answerContent264',
          isCorrect: false
        }]
      }, {
        _id: 'q27',
        questionContent: 'questionContent27',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent271',
          isCorrect: false
        }, {
          answerContent: 'answerContent272',
          isCorrect: false
        }, {
          answerContent: 'answerContent273',
          isCorrect: true
        }, {
          answerContent: 'answerContent274',
          isCorrect: false
        }]
      }, {
        _id: 'q28',
        questionContent: 'questionContent28',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent281',
          isCorrect: false
        }, {
          answerContent: 'answerContent282',
          isCorrect: true
        }, {
          answerContent: 'answerContent283',
          isCorrect: false
        }, {
          answerContent: 'answerContent284',
          isCorrect: false
        }]
      }, {
        _id: 'q29',
        questionContent: 'questionContent29',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent291',
          isCorrect: true
        }, {
          answerContent: 'answerContent292',
          isCorrect: false
        }, {
          answerContent: 'answerContent293',
          isCorrect: false
        }, {
          answerContent: 'answerContent294',
          isCorrect: false
        }]
      }],
      watcheds: [],
      reviews: [],
      isPublish: true
    }, {
      _id: 't30',
      title: 'title30',
      // createor?: User,
      // createdAt?: number,
      // lastUpdatedAt?: number,
      timeLeft: 60 * 10,
      categories: [],
      totalAnswered: 0,
      totalCorrectAnswered: 0,
      questions: [{
        _id: 'q30',
        questionContent: 'questionContent30',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent301',
          isCorrect: false
        }, {
          answerContent: 'answerContent302',
          isCorrect: false
        }, {
          answerContent: 'answerContent303',
          isCorrect: true
        }, {
          answerContent: 'answerContent304',
          isCorrect: false
        }]
      }, {
        _id: 'q31',
        questionContent: 'questionContent31',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent311',
          isCorrect: false
        }, {
          answerContent: 'answerContent312',
          isCorrect: false
        }, {
          answerContent: 'answerContent313',
          isCorrect: true
        }, {
          answerContent: 'answerContent314',
          isCorrect: false
        }]
      }, {
        _id: 'q32',
        questionContent: 'questionContent32',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent321',
          isCorrect: false
        }, {
          answerContent: 'answerContent322',
          isCorrect: true
        }, {
          answerContent: 'answerContent323',
          isCorrect: false
        }, {
          answerContent: 'answerContent324',
          isCorrect: false
        }]
      }, {
        _id: 'q33',
        questionContent: 'questionContent33',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent331',
          isCorrect: true
        }, {
          answerContent: 'answerContent332',
          isCorrect: false
        }, {
          answerContent: 'answerContent333',
          isCorrect: false
        }, {
          answerContent: 'answerContent334',
          isCorrect: false
        }]
      }, {
        _id: 'q34',
        questionContent: 'questionContent34',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent341',
          isCorrect: false
        }, {
          answerContent: 'answerContent342',
          isCorrect: false
        }, {
          answerContent: 'answerContent343',
          isCorrect: true
        }, {
          answerContent: 'answerContent344',
          isCorrect: false
        }]
      }, {
        _id: 'q35',
        questionContent: 'questionContent35',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent351',
          isCorrect: false
        }, {
          answerContent: 'answerContent352',
          isCorrect: false
        }, {
          answerContent: 'answerContent353',
          isCorrect: false
        }, {
          answerContent: 'answerContent354',
          isCorrect: true
        }]
      }, {
        _id: 'q36',
        questionContent: 'questionContent36',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent361',
          isCorrect: false
        }, {
          answerContent: 'answerContent362',
          isCorrect: false
        }, {
          answerContent: 'answerContent363',
          isCorrect: true
        }, {
          answerContent: 'answerContent364',
          isCorrect: false
        }]
      }, {
        _id: 'q37',
        questionContent: 'questionContent37',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent371',
          isCorrect: false
        }, {
          answerContent: 'answerContent372',
          isCorrect: false
        }, {
          answerContent: 'answerContent373',
          isCorrect: true
        }, {
          answerContent: 'answerContent374',
          isCorrect: false
        }]
      }, {
        _id: 'q38',
        questionContent: 'questionContent38',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent381',
          isCorrect: false
        }, {
          answerContent: 'answerContent382',
          isCorrect: true
        }, {
          answerContent: 'answerContent383',
          isCorrect: false
        }, {
          answerContent: 'answerContent384',
          isCorrect: false
        }]
      }, {
        _id: 'q39',
        questionContent: 'questionContent39',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent391',
          isCorrect: true
        }, {
          answerContent: 'answerContent392',
          isCorrect: false
        }, {
          answerContent: 'answerContent393',
          isCorrect: false
        }, {
          answerContent: 'answerContent394',
          isCorrect: false
        }]
      }],
      watcheds: [],
      reviews: [],
      isPublish: true
    }, {
      _id: 't40',
      title: 'title40',
      // createor?: User,
      // createdAt?: number,
      // lastUpdatedAt?: number,
      timeLeft: 60 * 10,
      categories: [],
      totalAnswered: 0,
      totalCorrectAnswered: 0,
      questions: [{
        _id: 'q40',
        questionContent: 'questionContent40',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent401',
          isCorrect: false
        }, {
          answerContent: 'answerContent402',
          isCorrect: false
        }, {
          answerContent: 'answerContent403',
          isCorrect: true
        }, {
          answerContent: 'answerContent404',
          isCorrect: false
        }]
      }, {
        _id: 'q41',
        questionContent: 'questionContent41',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent411',
          isCorrect: false
        }, {
          answerContent: 'answerContent412',
          isCorrect: false
        }, {
          answerContent: 'answerContent413',
          isCorrect: true
        }, {
          answerContent: 'answerContent414',
          isCorrect: false
        }]
      }, {
        _id: 'q42',
        questionContent: 'questionContent42',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent421',
          isCorrect: false
        }, {
          answerContent: 'answerContent422',
          isCorrect: true
        }, {
          answerContent: 'answerContent423',
          isCorrect: false
        }, {
          answerContent: 'answerContent424',
          isCorrect: false
        }]
      }, {
        _id: 'q43',
        questionContent: 'questionContent43',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent431',
          isCorrect: true
        }, {
          answerContent: 'answerContent432',
          isCorrect: false
        }, {
          answerContent: 'answerContent433',
          isCorrect: false
        }, {
          answerContent: 'answerContent434',
          isCorrect: false
        }]
      }, {
        _id: 'q44',
        questionContent: 'questionContent44',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent441',
          isCorrect: false
        }, {
          answerContent: 'answerContent442',
          isCorrect: false
        }, {
          answerContent: 'answerContent443',
          isCorrect: true
        }, {
          answerContent: 'answerContent444',
          isCorrect: false
        }]
      }, {
        _id: 'q45',
        questionContent: 'questionContent45',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent451',
          isCorrect: false
        }, {
          answerContent: 'answerContent452',
          isCorrect: false
        }, {
          answerContent: 'answerContent453',
          isCorrect: false
        }, {
          answerContent: 'answerContent454',
          isCorrect: true
        }]
      }, {
        _id: 'q46',
        questionContent: 'questionContent46',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent461',
          isCorrect: false
        }, {
          answerContent: 'answerContent462',
          isCorrect: false
        }, {
          answerContent: 'answerContent463',
          isCorrect: true
        }, {
          answerContent: 'answerContent464',
          isCorrect: false
        }]
      }, {
        _id: 'q47',
        questionContent: 'questionContent47',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent471',
          isCorrect: false
        }, {
          answerContent: 'answerContent472',
          isCorrect: false
        }, {
          answerContent: 'answerContent473',
          isCorrect: true
        }, {
          answerContent: 'answerContent474',
          isCorrect: false
        }]
      }, {
        _id: 'q48',
        questionContent: 'questionContent48',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent481',
          isCorrect: false
        }, {
          answerContent: 'answerContent482',
          isCorrect: true
        }, {
          answerContent: 'answerContent483',
          isCorrect: false
        }, {
          answerContent: 'answerContent484',
          isCorrect: false
        }]
      }, {
        _id: 'q49',
        questionContent: 'questionContent49',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent491',
          isCorrect: true
        }, {
          answerContent: 'answerContent492',
          isCorrect: false
        }, {
          answerContent: 'answerContent493',
          isCorrect: false
        }, {
          answerContent: 'answerContent494',
          isCorrect: false
        }]
      }],
      watcheds: [],
      reviews: [],
      isPublish: true
    }, {
      _id: 't50',
      title: 'title50',
      // createor?: User,
      // createdAt?: number,
      // lastUpdatedAt?: number,
      timeLeft: 60 * 10,
      categories: [],
      totalAnswered: 0,
      totalCorrectAnswered: 0,
      questions: [{
        _id: 'q50',
        questionContent: 'questionContent50',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent501',
          isCorrect: false
        }, {
          answerContent: 'answerContent502',
          isCorrect: false
        }, {
          answerContent: 'answerContent503',
          isCorrect: true
        }, {
          answerContent: 'answerContent504',
          isCorrect: false
        }]
      }, {
        _id: 'q51',
        questionContent: 'questionContent51',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent511',
          isCorrect: false
        }, {
          answerContent: 'answerContent512',
          isCorrect: false
        }, {
          answerContent: 'answerContent513',
          isCorrect: true
        }, {
          answerContent: 'answerContent514',
          isCorrect: false
        }]
      }, {
        _id: 'q52',
        questionContent: 'questionContent52',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent521',
          isCorrect: false
        }, {
          answerContent: 'answerContent522',
          isCorrect: true
        }, {
          answerContent: 'answerContent523',
          isCorrect: false
        }, {
          answerContent: 'answerContent524',
          isCorrect: false
        }]
      }, {
        _id: 'q53',
        questionContent: 'questionContent53',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent531',
          isCorrect: true
        }, {
          answerContent: 'answerContent532',
          isCorrect: false
        }, {
          answerContent: 'answerContent533',
          isCorrect: false
        }, {
          answerContent: 'answerContent534',
          isCorrect: false
        }]
      }, {
        _id: 'q54',
        questionContent: 'questionContent54',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent541',
          isCorrect: false
        }, {
          answerContent: 'answerContent542',
          isCorrect: false
        }, {
          answerContent: 'answerContent543',
          isCorrect: true
        }, {
          answerContent: 'answerContent544',
          isCorrect: false
        }]
      }, {
        _id: 'q55',
        questionContent: 'questionContent55',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent551',
          isCorrect: false
        }, {
          answerContent: 'answerContent552',
          isCorrect: false
        }, {
          answerContent: 'answerContent553',
          isCorrect: false
        }, {
          answerContent: 'answerContent554',
          isCorrect: true
        }]
      }, {
        _id: 'q56',
        questionContent: 'questionContent56',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent561',
          isCorrect: false
        }, {
          answerContent: 'answerContent562',
          isCorrect: false
        }, {
          answerContent: 'answerContent563',
          isCorrect: true
        }, {
          answerContent: 'answerContent564',
          isCorrect: false
        }]
      }, {
        _id: 'q57',
        questionContent: 'questionContent57',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent571',
          isCorrect: false
        }, {
          answerContent: 'answerContent572',
          isCorrect: false
        }, {
          answerContent: 'answerContent573',
          isCorrect: true
        }, {
          answerContent: 'answerContent574',
          isCorrect: false
        }]
      }, {
        _id: 'q58',
        questionContent: 'questionContent58',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent581',
          isCorrect: false
        }, {
          answerContent: 'answerContent582',
          isCorrect: true
        }, {
          answerContent: 'answerContent583',
          isCorrect: false
        }, {
          answerContent: 'answerContent584',
          isCorrect: false
        }]
      }, {
        _id: 'q59',
        questionContent: 'questionContent59',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent591',
          isCorrect: true
        }, {
          answerContent: 'answerContent592',
          isCorrect: false
        }, {
          answerContent: 'answerContent593',
          isCorrect: false
        }, {
          answerContent: 'answerContent594',
          isCorrect: false
        }]
      }],
      watcheds: [],
      reviews: [],
      isPublish: true
    }, {
      _id: 't60',
      title: 'title60',
      // createor?: User,
      // createdAt?: number,
      // lastUpdatedAt?: number,
      timeLeft: 60 * 10,
      categories: [],
      totalAnswered: 0,
      totalCorrectAnswered: 0,
      questions: [{
        _id: 'q60',
        questionContent: 'questionContent60',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent601',
          isCorrect: false
        }, {
          answerContent: 'answerContent602',
          isCorrect: false
        }, {
          answerContent: 'answerContent603',
          isCorrect: true
        }, {
          answerContent: 'answerContent604',
          isCorrect: false
        }]
      }, {
        _id: 'q61',
        questionContent: 'questionContent61',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent611',
          isCorrect: false
        }, {
          answerContent: 'answerContent612',
          isCorrect: false
        }, {
          answerContent: 'answerContent613',
          isCorrect: true
        }, {
          answerContent: 'answerContent614',
          isCorrect: false
        }]
      }, {
        _id: 'q62',
        questionContent: 'questionContent62',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent621',
          isCorrect: false
        }, {
          answerContent: 'answerContent622',
          isCorrect: true
        }, {
          answerContent: 'answerContent623',
          isCorrect: false
        }, {
          answerContent: 'answerContent624',
          isCorrect: false
        }]
      }, {
        _id: 'q63',
        questionContent: 'questionContent63',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent631',
          isCorrect: true
        }, {
          answerContent: 'answerContent632',
          isCorrect: false
        }, {
          answerContent: 'answerContent633',
          isCorrect: false
        }, {
          answerContent: 'answerContent634',
          isCorrect: false
        }]
      }, {
        _id: 'q64',
        questionContent: 'questionContent64',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent641',
          isCorrect: false
        }, {
          answerContent: 'answerContent642',
          isCorrect: false
        }, {
          answerContent: 'answerContent643',
          isCorrect: true
        }, {
          answerContent: 'answerContent644',
          isCorrect: false
        }]
      }, {
        _id: 'q65',
        questionContent: 'questionContent65',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent651',
          isCorrect: false
        }, {
          answerContent: 'answerContent652',
          isCorrect: false
        }, {
          answerContent: 'answerContent653',
          isCorrect: false
        }, {
          answerContent: 'answerContent654',
          isCorrect: true
        }]
      }, {
        _id: 'q66',
        questionContent: 'questionContent66',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent661',
          isCorrect: false
        }, {
          answerContent: 'answerContent662',
          isCorrect: false
        }, {
          answerContent: 'answerContent663',
          isCorrect: true
        }, {
          answerContent: 'answerContent664',
          isCorrect: false
        }]
      }, {
        _id: 'q67',
        questionContent: 'questionContent67',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent671',
          isCorrect: false
        }, {
          answerContent: 'answerContent672',
          isCorrect: false
        }, {
          answerContent: 'answerContent673',
          isCorrect: true
        }, {
          answerContent: 'answerContent674',
          isCorrect: false
        }]
      }, {
        _id: 'q68',
        questionContent: 'questionContent68',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent681',
          isCorrect: false
        }, {
          answerContent: 'answerContent682',
          isCorrect: true
        }, {
          answerContent: 'answerContent683',
          isCorrect: false
        }, {
          answerContent: 'answerContent684',
          isCorrect: false
        }]
      }, {
        _id: 'q69',
        questionContent: 'questionContent69',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent691',
          isCorrect: true
        }, {
          answerContent: 'answerContent692',
          isCorrect: false
        }, {
          answerContent: 'answerContent693',
          isCorrect: false
        }, {
          answerContent: 'answerContent694',
          isCorrect: false
        }]
      }],
      watcheds: [],
      reviews: [],
      isPublish: true
    }, {
      _id: 't70',
      title: 'title70',
      // createor?: User,
      // createdAt?: number,
      // lastUpdatedAt?: number,
      timeLeft: 60 * 10,
      categories: [],
      totalAnswered: 0,
      totalCorrectAnswered: 0,
      questions: [{
        _id: 'q70',
        questionContent: 'questionContent70',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent701',
          isCorrect: false
        }, {
          answerContent: 'answerContent702',
          isCorrect: false
        }, {
          answerContent: 'answerContent703',
          isCorrect: true
        }, {
          answerContent: 'answerContent704',
          isCorrect: false
        }]
      }, {
        _id: 'q71',
        questionContent: 'questionContent71',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent711',
          isCorrect: false
        }, {
          answerContent: 'answerContent712',
          isCorrect: false
        }, {
          answerContent: 'answerContent713',
          isCorrect: true
        }, {
          answerContent: 'answerContent714',
          isCorrect: false
        }]
      }, {
        _id: 'q72',
        questionContent: 'questionContent72',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent721',
          isCorrect: false
        }, {
          answerContent: 'answerContent722',
          isCorrect: true
        }, {
          answerContent: 'answerContent723',
          isCorrect: false
        }, {
          answerContent: 'answerContent724',
          isCorrect: false
        }]
      }, {
        _id: 'q73',
        questionContent: 'questionContent73',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent731',
          isCorrect: true
        }, {
          answerContent: 'answerContent732',
          isCorrect: false
        }, {
          answerContent: 'answerContent733',
          isCorrect: false
        }, {
          answerContent: 'answerContent734',
          isCorrect: false
        }]
      }, {
        _id: 'q74',
        questionContent: 'questionContent74',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent741',
          isCorrect: false
        }, {
          answerContent: 'answerContent742',
          isCorrect: false
        }, {
          answerContent: 'answerContent743',
          isCorrect: true
        }, {
          answerContent: 'answerContent744',
          isCorrect: false
        }]
      }, {
        _id: 'q75',
        questionContent: 'questionContent75',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent751',
          isCorrect: false
        }, {
          answerContent: 'answerContent752',
          isCorrect: false
        }, {
          answerContent: 'answerContent753',
          isCorrect: false
        }, {
          answerContent: 'answerContent754',
          isCorrect: true
        }]
      }, {
        _id: 'q76',
        questionContent: 'questionContent76',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent761',
          isCorrect: false
        }, {
          answerContent: 'answerContent762',
          isCorrect: false
        }, {
          answerContent: 'answerContent763',
          isCorrect: true
        }, {
          answerContent: 'answerContent764',
          isCorrect: false
        }]
      }, {
        _id: 'q77',
        questionContent: 'questionContent77',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent771',
          isCorrect: false
        }, {
          answerContent: 'answerContent772',
          isCorrect: false
        }, {
          answerContent: 'answerContent773',
          isCorrect: true
        }, {
          answerContent: 'answerContent774',
          isCorrect: false
        }]
      }, {
        _id: 'q78',
        questionContent: 'questionContent78',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent781',
          isCorrect: false
        }, {
          answerContent: 'answerContent782',
          isCorrect: true
        }, {
          answerContent: 'answerContent783',
          isCorrect: false
        }, {
          answerContent: 'answerContent784',
          isCorrect: false
        }]
      }, {
        _id: 'q79',
        questionContent: 'questionContent79',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent791',
          isCorrect: true
        }, {
          answerContent: 'answerContent792',
          isCorrect: false
        }, {
          answerContent: 'answerContent793',
          isCorrect: false
        }, {
          answerContent: 'answerContent794',
          isCorrect: false
        }]
      }],
      watcheds: [],
      reviews: [],
      isPublish: true
    }, {
      _id: 't80',
      title: 'title80',
      // createor?: User,
      // createdAt?: number,
      // lastUpdatedAt?: number,
      timeLeft: 60 * 10,
      categories: [],
      totalAnswered: 0,
      totalCorrectAnswered: 0,
      questions: [{
        _id: 'q80',
        questionContent: 'questionContent80',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent801',
          isCorrect: false
        }, {
          answerContent: 'answerContent802',
          isCorrect: false
        }, {
          answerContent: 'answerContent803',
          isCorrect: true
        }, {
          answerContent: 'answerContent804',
          isCorrect: false
        }]
      }, {
        _id: 'q81',
        questionContent: 'questionContent81',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent811',
          isCorrect: false
        }, {
          answerContent: 'answerContent812',
          isCorrect: false
        }, {
          answerContent: 'answerContent813',
          isCorrect: true
        }, {
          answerContent: 'answerContent814',
          isCorrect: false
        }]
      }, {
        _id: 'q82',
        questionContent: 'questionContent82',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent821',
          isCorrect: false
        }, {
          answerContent: 'answerContent822',
          isCorrect: true
        }, {
          answerContent: 'answerContent823',
          isCorrect: false
        }, {
          answerContent: 'answerContent824',
          isCorrect: false
        }]
      }, {
        _id: 'q83',
        questionContent: 'questionContent83',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent831',
          isCorrect: true
        }, {
          answerContent: 'answerContent832',
          isCorrect: false
        }, {
          answerContent: 'answerContent833',
          isCorrect: false
        }, {
          answerContent: 'answerContent834',
          isCorrect: false
        }]
      }, {
        _id: 'q84',
        questionContent: 'questionContent84',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent841',
          isCorrect: false
        }, {
          answerContent: 'answerContent842',
          isCorrect: false
        }, {
          answerContent: 'answerContent843',
          isCorrect: true
        }, {
          answerContent: 'answerContent844',
          isCorrect: false
        }]
      }, {
        _id: 'q85',
        questionContent: 'questionContent85',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent851',
          isCorrect: false
        }, {
          answerContent: 'answerContent852',
          isCorrect: false
        }, {
          answerContent: 'answerContent853',
          isCorrect: false
        }, {
          answerContent: 'answerContent854',
          isCorrect: true
        }]
      }, {
        _id: 'q86',
        questionContent: 'questionContent86',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent861',
          isCorrect: false
        }, {
          answerContent: 'answerContent862',
          isCorrect: false
        }, {
          answerContent: 'answerContent863',
          isCorrect: true
        }, {
          answerContent: 'answerContent864',
          isCorrect: false
        }]
      }, {
        _id: 'q87',
        questionContent: 'questionContent87',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent871',
          isCorrect: false
        }, {
          answerContent: 'answerContent872',
          isCorrect: false
        }, {
          answerContent: 'answerContent873',
          isCorrect: true
        }, {
          answerContent: 'answerContent874',
          isCorrect: false
        }]
      }, {
        _id: 'q88',
        questionContent: 'questionContent88',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent881',
          isCorrect: false
        }, {
          answerContent: 'answerContent882',
          isCorrect: true
        }, {
          answerContent: 'answerContent883',
          isCorrect: false
        }, {
          answerContent: 'answerContent884',
          isCorrect: false
        }]
      }, {
        _id: 'q89',
        questionContent: 'questionContent89',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent891',
          isCorrect: true
        }, {
          answerContent: 'answerContent892',
          isCorrect: false
        }, {
          answerContent: 'answerContent893',
          isCorrect: false
        }, {
          answerContent: 'answerContent894',
          isCorrect: false
        }]
      }],
      watcheds: [],
      reviews: [],
      isPublish: true
    }, {
      _id: 't90',
      title: 'title90',
      // createor?: User,
      // createdAt?: number,
      // lastUpdatedAt?: number,
      timeLeft: 60 * 10,
      categories: [],
      totalAnswered: 0,
      totalCorrectAnswered: 0,
      questions: [{
        _id: 'q90',
        questionContent: 'questionContent90',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent901',
          isCorrect: false
        }, {
          answerContent: 'answerContent902',
          isCorrect: false
        }, {
          answerContent: 'answerContent903',
          isCorrect: true
        }, {
          answerContent: 'answerContent904',
          isCorrect: false
        }]
      }, {
        _id: 'q91',
        questionContent: 'questionContent91',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent911',
          isCorrect: false
        }, {
          answerContent: 'answerContent912',
          isCorrect: false
        }, {
          answerContent: 'answerContent913',
          isCorrect: true
        }, {
          answerContent: 'answerContent914',
          isCorrect: false
        }]
      }, {
        _id: 'q92',
        questionContent: 'questionContent92',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent921',
          isCorrect: false
        }, {
          answerContent: 'answerContent922',
          isCorrect: true
        }, {
          answerContent: 'answerContent923',
          isCorrect: false
        }, {
          answerContent: 'answerContent924',
          isCorrect: false
        }]
      }, {
        _id: 'q93',
        questionContent: 'questionContent93',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent931',
          isCorrect: true
        }, {
          answerContent: 'answerContent932',
          isCorrect: false
        }, {
          answerContent: 'answerContent933',
          isCorrect: false
        }, {
          answerContent: 'answerContent934',
          isCorrect: false
        }]
      }, {
        _id: 'q94',
        questionContent: 'questionContent94',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent941',
          isCorrect: false
        }, {
          answerContent: 'answerContent942',
          isCorrect: false
        }, {
          answerContent: 'answerContent943',
          isCorrect: true
        }, {
          answerContent: 'answerContent944',
          isCorrect: false
        }]
      }, {
        _id: 'q95',
        questionContent: 'questionContent95',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent951',
          isCorrect: false
        }, {
          answerContent: 'answerContent952',
          isCorrect: false
        }, {
          answerContent: 'answerContent953',
          isCorrect: false
        }, {
          answerContent: 'answerContent954',
          isCorrect: true
        }]
      }, {
        _id: 'q96',
        questionContent: 'questionContent96',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent961',
          isCorrect: false
        }, {
          answerContent: 'answerContent962',
          isCorrect: false
        }, {
          answerContent: 'answerContent963',
          isCorrect: true
        }, {
          answerContent: 'answerContent964',
          isCorrect: false
        }]
      }, {
        _id: 'q97',
        questionContent: 'questionContent97',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent971',
          isCorrect: false
        }, {
          answerContent: 'answerContent972',
          isCorrect: false
        }, {
          answerContent: 'answerContent973',
          isCorrect: true
        }, {
          answerContent: 'answerContent974',
          isCorrect: false
        }]
      }, {
        _id: 'q98',
        questionContent: 'questionContent98',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent981',
          isCorrect: false
        }, {
          answerContent: 'answerContent982',
          isCorrect: true
        }, {
          answerContent: 'answerContent983',
          isCorrect: false
        }, {
          answerContent: 'answerContent984',
          isCorrect: false
        }]
      }, {
        _id: 'q99',
        questionContent: 'questionContent99',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent991',
          isCorrect: true
        }, {
          answerContent: 'answerContent992',
          isCorrect: false
        }, {
          answerContent: 'answerContent993',
          isCorrect: false
        }, {
          answerContent: 'answerContent994',
          isCorrect: false
        }]
      }],
      watcheds: [],
      reviews: [],
      isPublish: true
    }, {
      _id: 't00',
      title: 'title00',
      // createor?: User,
      // createdAt?: number,
      // lastUpdatedAt?: number,
      timeLeft: 60 * 10,
      categories: [],
      totalAnswered: 0,
      totalCorrectAnswered: 0,
      questions: [{
        _id: 'q00',
        questionContent: 'questionContent00',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent001',
          isCorrect: false
        }, {
          answerContent: 'answerContent002',
          isCorrect: false
        }, {
          answerContent: 'answerContent003',
          isCorrect: true
        }, {
          answerContent: 'answerContent004',
          isCorrect: false
        }]
      }, {
        _id: 'q01',
        questionContent: 'questionContent01',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent011',
          isCorrect: false
        }, {
          answerContent: 'answerContent012',
          isCorrect: false
        }, {
          answerContent: 'answerContent013',
          isCorrect: true
        }, {
          answerContent: 'answerContent014',
          isCorrect: false
        }]
      }, {
        _id: 'q02',
        questionContent: 'questionContent02',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent021',
          isCorrect: false
        }, {
          answerContent: 'answerContent022',
          isCorrect: true
        }, {
          answerContent: 'answerContent023',
          isCorrect: false
        }, {
          answerContent: 'answerContent024',
          isCorrect: false
        }]
      }, {
        _id: 'q03',
        questionContent: 'questionContent03',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent031',
          isCorrect: true
        }, {
          answerContent: 'answerContent032',
          isCorrect: false
        }, {
          answerContent: 'answerContent033',
          isCorrect: false
        }, {
          answerContent: 'answerContent034',
          isCorrect: false
        }]
      }, {
        _id: 'q04',
        questionContent: 'questionContent04',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent041',
          isCorrect: false
        }, {
          answerContent: 'answerContent042',
          isCorrect: false
        }, {
          answerContent: 'answerContent043',
          isCorrect: true
        }, {
          answerContent: 'answerContent044',
          isCorrect: false
        }]
      }, {
        _id: 'q05',
        questionContent: 'questionContent05',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent051',
          isCorrect: false
        }, {
          answerContent: 'answerContent052',
          isCorrect: false
        }, {
          answerContent: 'answerContent053',
          isCorrect: false
        }, {
          answerContent: 'answerContent054',
          isCorrect: true
        }]
      }, {
        _id: 'q06',
        questionContent: 'questionContent06',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent061',
          isCorrect: false
        }, {
          answerContent: 'answerContent062',
          isCorrect: false
        }, {
          answerContent: 'answerContent063',
          isCorrect: true
        }, {
          answerContent: 'answerContent064',
          isCorrect: false
        }]
      }, {
        _id: 'q07',
        questionContent: 'questionContent07',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent071',
          isCorrect: false
        }, {
          answerContent: 'answerContent072',
          isCorrect: false
        }, {
          answerContent: 'answerContent073',
          isCorrect: true
        }, {
          answerContent: 'answerContent074',
          isCorrect: false
        }]
      }, {
        _id: 'q08',
        questionContent: 'questionContent08',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent081',
          isCorrect: false
        }, {
          answerContent: 'answerContent082',
          isCorrect: true
        }, {
          answerContent: 'answerContent083',
          isCorrect: false
        }, {
          answerContent: 'answerContent084',
          isCorrect: false
        }]
      }, {
        _id: 'q09',
        questionContent: 'questionContent09',
        answeredIdx: null,
        isCorrectAnswered: false,
        answers: [{
          answerContent: 'answerContent091',
          isCorrect: true
        }, {
          answerContent: 'answerContent092',
          isCorrect: false
        }, {
          answerContent: 'answerContent093',
          isCorrect: false
        }, {
          answerContent: 'answerContent094',
          isCorrect: false
        }]
      }],
      watcheds: [],
      reviews: [],
      isPublish: true
    }];
    /***/
  },

  /***/
  "./src/app/services/test/test.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/test/test.service.ts ***!
    \***********************************************/

  /*! exports provided: TestService */

  /***/
  function srcAppServicesTestTestServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestService", function () {
      return TestService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _mock_tests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./mock-tests */
    "./src/app/services/test/mock-tests.ts");

    var TestService = /*#__PURE__*/function () {
      function TestService() {
        _classCallCheck(this, TestService);

        this._tests = _mock_tests__WEBPACK_IMPORTED_MODULE_2__["Tests"];
        this._isDevMode = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])();
      }

      _createClass(TestService, [{
        key: "query",
        value: function query(filterBy) {
          return this._isDevMode ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this._tests) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["never"])();
        }
      }, {
        key: "getById",
        value: function getById(testId) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this._tests.find(function (test) {
            return test._id === testId;
          }));
        }
      }]);

      return TestService;
    }();

    TestService.ɵfac = function TestService_Factory(t) {
      return new (t || TestService)();
    };

    TestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TestService,
      factory: TestService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/user/user.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/user/user.service.ts ***!
    \***********************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _http_base_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../http/base-url */
    "./src/app/services/http/base-url.ts");
    /* harmony import */


    var _storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../storage/storage.service */
    "./src/app/services/storage/storage.service.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/services/auth/auth.service.ts");

    var UserService = /*#__PURE__*/function () {
      function UserService(_storageService, _http, _authService) {
        _classCallCheck(this, UserService);

        this._storageService = _storageService;
        this._http = _http;
        this._authService = _authService; //HTTP

        this._httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
        this._url = "".concat(_http_base_url__WEBPACK_IMPORTED_MODULE_4__["BASE_URL"], "user");
      } // GETTERS
      // MUTATIONS


      _createClass(UserService, [{
        key: "_setUser",
        value: function _setUser(user) {
          this.user = user;
        }
      }, {
        key: "_setUsers",
        value: function _setUsers(users) {
          this.users = users;
        }
      }, {
        key: "_handleError",
        value: function _handleError() {
          var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
          var result = arguments.length > 1 ? arguments[1] : undefined;
          return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            // this._log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
          };
        }
      }, {
        key: "_log",
        value: function _log(message) {// this.messageService.add(`HeroService: ${message}`);
        } // ACTINOS

      }, {
        key: "query",
        value: function query() {
          var _this12 = this;

          var filterBy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return this._http.get("".concat(this._url)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (users) {
            _this12._setUsers(users);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this._handleError('qurey')));
        }
      }, {
        key: "getById",
        value: function getById(userId) {
          var _this13 = this;

          return this._http.get("".concat(this._url, "/").concat(userId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) {
            _this13._setUser(user); // this.log(`fetched hero id=${id}`);

          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this._handleError("getUser id=".concat(userId))));
        }
      }, {
        key: "updateUser",
        value: function updateUser(user) {
          var _this14 = this;

          return this._http.put("".concat(this._url, "/").concat(user._id), user, this._httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (userUpdated) {
            console.log(userUpdated, 'userUpdated in service');

            if (user._id == _this14._authService.userValue._id) {
              _this14._storageService.storeSession(_this14._authService.KEY_LOGGEDIN, userUpdated);

              _this14._authService.userSubject.next(userUpdated);
            }

            _this14._log("updated user id=".concat(userUpdated._id));

            return userUpdated;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this._handleError('updateUser')));
        }
      }, {
        key: "removeUser",
        value: function removeUser(userId) {
          var _this15 = this;

          return this._http["delete"]("".concat(this._url, "/").concat(userId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            if (userId == _this15._authService.userValue._id) {
              _this15._authService.logout();
            }
          }));
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/util/util.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/util/util.service.ts ***!
    \***********************************************/

  /*! exports provided: UtilService */

  /***/
  function srcAppServicesUtilUtilServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilService", function () {
      return UtilService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UtilService = /*#__PURE__*/function () {
      function UtilService() {
        _classCallCheck(this, UtilService);
      }

      _createClass(UtilService, [{
        key: "padNum",
        value: function padNum(num) {
          return num > 9 ? num : '0' + num;
        }
      }]);

      return UtilService;
    }();

    UtilService.ɵfac = function UtilService_Factory(t) {
      return new (t || UtilService)();
    };

    UtilService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UtilService,
      factory: UtilService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\site-proj\_Angular\Miss-Quiz\quiz-frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map