(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app\">\n  <app-header></app-header>\n  <app-content></app-content>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/content.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/content.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"conteudo\">\n    <div class=\"d-flex\">\n        <h4 class=\"align-self-center\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aspernatur amet est mollitia rem libero voluptates providen</h4>\n    </div>\n    <div>\n        <h3 class=\"text-center\">Projetos</h3>\n        <app-projetos></app-projetos>\n    </div>\n    <div class=\"d-flex justify-content-center\">\n        <h3>Sobre</h3>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"d-flex flex justify-content-end fixed-top\">\n    <p>Projetos</p>\n    <p>Sobre</p>\n    <p>Contato</p>\n    <a href=\"https://github.com/arachnidiskandar\"><i class=\"fa fa-github mr-3\"></i></a>\n    <a href=\"https://www.linkedin.com/in/augusto-rafael-santos-da-silva-b957b5162/\"><i class=\"fa fa-linkedin\"></i></a>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projeto/projeto.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projeto/projeto.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"projeto\">\n    <img (click)=\"mudarEstado()\" class=\"pointer\" src=\"https://via.placeholder.com/600\">\n    <div class=\"pt-1 info-projetos d-flex flex-column\">\n        <div class=\"titulo-projeto mb-2 d-flex justify-content-around\">\n            <h5>{{ projeto.nome }}</h5>\n            <i (click)=\"mudarEstado()\" class=\"fa fa-ellipsis-v pointer\"></i>\n        </div>\n        <p class=\"m-3\">{{ projeto.descricao }}</p>\n    </div>\n    <div [@mostrarDetalhesProjeto]=\"estado\" class=\"detalhes\">\n        <div class=\"titulo-detalhe d-flex justify-content-between m-3\">\n            <h5>Detalhes do Projeto</h5><img class=\"pointer\" (click)=\"mudarEstado()\" src=\"../../assets/icons/close.svg\" alt=\"\">\n        </div>\n        <div>\n            <ul>\n                <li *ngFor=\"let detalhe of projeto.detalhes\">{{ detalhe }}</li>\n            </ul>\n        </div>\n        <div class=\"botoes d-flex justify-content-center\">\n            <button class=\"btn btn-primary\"><a *ngIf=\"projeto.online\" href=\"{{ projeto.site }}\" target=\"_blank\"><i class=\"fa fa-external-link\"></i></a></button>\n            <button class=\"btn btn-primary\"><a href=\"{{ projeto.github }}\" target=\"_blank\"><i class=\"fa fa-github\"></i></a></button>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/projetos.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/projetos.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex flex-wrap flex-row justify-content-around\">\n    <div *ngFor=\"let projeto of projetos\">\n        <app-projeto [projeto]=\"projeto\"></app-projeto>\n    </div>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFByb2pldG9zXFxwb3J0aWZvbGlvL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcCB7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWZsb3c6cm93IHdyYXA7XHJcbn0iLCIuYXBwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'portifolio';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _projetos_projetos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projetos/projetos.component */ "./src/app/projetos/projetos.component.ts");
/* harmony import */ var _projeto_projeto_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projeto/projeto.component */ "./src/app/projeto/projeto.component.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _content_content_component__WEBPACK_IMPORTED_MODULE_6__["ContentComponent"],
            _projetos_projetos_component__WEBPACK_IMPORTED_MODULE_7__["ProjetosComponent"],
            _projeto_projeto_component__WEBPACK_IMPORTED_MODULE_8__["ProjetoComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/content/content.component.scss":
/*!************************************************!*\
  !*** ./src/app/content/content.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#conteudo div {\n  height: 100vh;\n  background-color: #dddddd;\n}\n#conteudo div:nth-child(2) {\n  background-color: #d3d3d3;\n  height: auto;\n}\n#conteudo div:first-child {\n  background-color: white;\n}\n#conteudo div:first-child h4 {\n  margin: 0px 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9DOlxcUHJvamV0b3NcXHBvcnRpZm9saW8vc3JjXFxhcHBcXGNvbnRlbnRcXGNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtBQ0FSO0FERUk7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUNBUjtBREVJO0VBQ0ksdUJBQUE7QUNBUjtBRENRO0VBQ0ksaUJBQUE7QUNDWiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250ZXVkbyB7XHJcbiAgICBkaXYge1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcclxuICAgIH1cclxuICAgIGRpdjpudGgtY2hpbGQoMil7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDNkMztcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiI2NvbnRldWRvIGRpdiB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG59XG4jY29udGV1ZG8gZGl2Om50aC1jaGlsZCgyKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XG4gIGhlaWdodDogYXV0bztcbn1cbiNjb250ZXVkbyBkaXY6Zmlyc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbiNjb250ZXVkbyBkaXY6Zmlyc3QtY2hpbGQgaDQge1xuICBtYXJnaW46IDBweCAxMDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_projetos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/projetos */ "./src/app/shared/projetos.ts");



let ContentComponent = class ContentComponent {
    constructor() {
        this.projetos = _shared_projetos__WEBPACK_IMPORTED_MODULE_2__["MEUS_PROJETOS"];
    }
    ngOnInit() {
    }
};
ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-content',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./content.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/content.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./content.component.scss */ "./src/app/content/content.component.scss")).default]
    })
], ContentComponent);



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nav {\n  -webkit-box-flex: 0;\n          flex: 0 1 100%;\n  color: #4168a3;\n  padding: 1vh;\n  background-color: white;\n}\nnav p {\n  font-weight: bold;\n  font-size: 20px;\n}\nnav a {\n  color: #4168a3;\n}\nnav a i {\n  font-size: 30px;\n}\nnav p, nav i {\n  margin: 2px 15px;\n}\nnav p:hover, nav a:hover {\n  color: #c0c0c0;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxQcm9qZXRvc1xccG9ydGlmb2xpby9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9DOlxcUHJvamV0b3NcXHBvcnRpZm9saW8vc3JjXFxhcHBcXHN0eWxlc1xcY29sb3JzLnNjc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxtQkFBQTtVQUFBLGNBQUE7RUFDQSxjQ0pNO0VEU04sWUFBQTtFQUNBLHVCQUFBO0FFTEo7QUZBSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBRUVSO0FGRUk7RUFDSSxjQ1pFO0FDWVY7QUZDUTtFQUNJLGVBQUE7QUVDWjtBRkdJO0VBQ0ksZ0JBQUE7QUVEUjtBRkdJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUVEUiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9zdHlsZXMvY29sb3JzLnNjc3MnO1xyXG5cclxubmF2IHtcclxuICAgIGZsZXg6MCAxIDEwMCU7XHJcbiAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBwYWRkaW5nOiAxdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcCwgaSB7XHJcbiAgICAgICAgbWFyZ2luOiAycHggMTVweDtcclxuICAgIH1cclxuICAgIHA6aG92ZXIsIGE6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjYzBjMGMwO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG4iLCIkcHJpbWFyeTogIzQxNjhhMztcclxuIiwibmF2IHtcbiAgZmxleDogMCAxIDEwMCU7XG4gIGNvbG9yOiAjNDE2OGEzO1xuICBwYWRkaW5nOiAxdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxubmF2IHAge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxubmF2IGEge1xuICBjb2xvcjogIzQxNjhhMztcbn1cbm5hdiBhIGkge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5uYXYgcCwgbmF2IGkge1xuICBtYXJnaW46IDJweCAxNXB4O1xufVxubmF2IHA6aG92ZXIsIG5hdiBhOmhvdmVyIHtcbiAgY29sb3I6ICNjMGMwYzA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/projeto/projeto.component.scss":
/*!************************************************!*\
  !*** ./src/app/projeto/projeto.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".projeto {\n  margin: 10px;\n  border-radius: 5px;\n  overflow: hidden;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  position: relative;\n  max-width: 350px;\n}\n.projeto img {\n  max-height: 320px;\n}\n.projeto .info-projetos {\n  background-color: white;\n  color: #4168a3;\n}\n.projeto .info-projetos .titulo-projeto h5 {\n  margin: 0;\n}\n.projeto .info-projetos .titulo-projeto i {\n  font-size: 18px;\n  color: #4168a3;\n  margin-top: 5px;\n}\n.projeto .detalhes {\n  width: auto;\n  height: 100%;\n  top: 100%;\n  position: absolute;\n  background-color: white;\n}\n.projeto .detalhes .titulo-detalhe {\n  color: #4168a3;\n}\n.projeto .detalhes .botoes {\n  font-size: 2rem;\n  border-top: solid 1px #d4d4d4;\n}\n.projeto .detalhes .botoes button {\n  border-radius: 20px;\n}\n.projeto .detalhes .botoes button i {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamV0by9DOlxcUHJvamV0b3NcXHBvcnRpZm9saW8vc3JjXFxhcHBcXHByb2pldG9cXHByb2pldG8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2pldG8vcHJvamV0by5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvamV0by9DOlxcUHJvamV0b3NcXHBvcnRpZm9saW8vc3JjXFxhcHBcXHN0eWxlc1xcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZFQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0RGO0FER0U7RUFDRSxpQkFBQTtBQ0RKO0FER0U7RUFDRSx1QkFBQTtFQUNBLGNFZk07QURjVjtBRElNO0VBQ0UsU0FBQTtBQ0ZSO0FESU07RUFDRSxlQUFBO0VBQ0EsY0V2QkU7RUZ3QkYsZUFBQTtBQ0ZSO0FETUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDSko7QURLSTtFQUNJLGNFbkNFO0FEZ0NWO0FES0k7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7QUNIUjtBRElRO0VBQ0ksbUJBQUE7QUNGWjtBREdZO0VBQ0ksWUFBQTtBQ0RoQiIsImZpbGUiOiJzcmMvYXBwL3Byb2pldG8vcHJvamV0by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL3N0eWxlcy9jb2xvcnMuc2Nzcyc7XHJcblxyXG4ucHJvamV0byB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gIFxyXG4gIGltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMjBweDtcclxuICB9XHJcbiAgLmluZm8tcHJvamV0b3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICBcclxuICAgIC50aXR1bG8tcHJvamV0byB7XHJcbiAgICAgIGg1IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICAgICAgaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmRldGFsaGVzIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAudGl0dWxvLWRldGFsaGUge1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgIH1cclxuICAgIC5ib3RvZXMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2Q0ZDRkNDtcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnByb2pldG8ge1xuICBtYXJnaW46IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbn1cbi5wcm9qZXRvIGltZyB7XG4gIG1heC1oZWlnaHQ6IDMyMHB4O1xufVxuLnByb2pldG8gLmluZm8tcHJvamV0b3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICM0MTY4YTM7XG59XG4ucHJvamV0byAuaW5mby1wcm9qZXRvcyAudGl0dWxvLXByb2pldG8gaDUge1xuICBtYXJnaW46IDA7XG59XG4ucHJvamV0byAuaW5mby1wcm9qZXRvcyAudGl0dWxvLXByb2pldG8gaSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM0MTY4YTM7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5wcm9qZXRvIC5kZXRhbGhlcyB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5wcm9qZXRvIC5kZXRhbGhlcyAudGl0dWxvLWRldGFsaGUge1xuICBjb2xvcjogIzQxNjhhMztcbn1cbi5wcm9qZXRvIC5kZXRhbGhlcyAuYm90b2VzIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2Q0ZDRkNDtcbn1cbi5wcm9qZXRvIC5kZXRhbGhlcyAuYm90b2VzIGJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4ucHJvamV0byAuZGV0YWxoZXMgLmJvdG9lcyBidXR0b24gaSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iLCIkcHJpbWFyeTogIzQxNjhhMztcclxuIl19 */");

/***/ }),

/***/ "./src/app/projeto/projeto.component.ts":
/*!**********************************************!*\
  !*** ./src/app/projeto/projeto.component.ts ***!
  \**********************************************/
/*! exports provided: ProjetoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetoComponent", function() { return ProjetoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");



let ProjetoComponent = class ProjetoComponent {
    constructor() {
        this.estado = 'inicial';
    }
    ngOnInit() {
    }
    mudarEstado() {
        this.estado = this.estado === 'inicial' ? 'final' : 'inicial';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProjetoComponent.prototype, "projeto", void 0);
ProjetoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projeto',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projeto.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projeto/projeto.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('mostrarDetalhesProjeto', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('inicial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    top: '100%',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    top: '0',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('inicial=>final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('final=>inicial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms'))
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projeto.component.scss */ "./src/app/projeto/projeto.component.scss")).default]
    })
], ProjetoComponent);



/***/ }),

/***/ "./src/app/projetos/projetos.component.scss":
/*!**************************************************!*\
  !*** ./src/app/projetos/projetos.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".d-flex {\n  min-width: 320px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamV0b3MvQzpcXFByb2pldG9zXFxwb3J0aWZvbGlvL3NyY1xcYXBwXFxwcm9qZXRvc1xccHJvamV0b3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2pldG9zL3Byb2pldG9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3Byb2pldG9zL3Byb2pldG9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmQtZmxleCB7XHJcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xyXG59XHJcbiIsIi5kLWZsZXgge1xuICBtaW4td2lkdGg6IDMyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/projetos/projetos.component.ts":
/*!************************************************!*\
  !*** ./src/app/projetos/projetos.component.ts ***!
  \************************************************/
/*! exports provided: ProjetosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetosComponent", function() { return ProjetosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_projetos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/projetos */ "./src/app/shared/projetos.ts");



let ProjetosComponent = class ProjetosComponent {
    constructor() {
        this.projetos = _shared_projetos__WEBPACK_IMPORTED_MODULE_2__["MEUS_PROJETOS"];
    }
    ngOnInit() {
    }
};
ProjetosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projetos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projetos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/projetos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projetos.component.scss */ "./src/app/projetos/projetos.component.scss")).default]
    })
], ProjetosComponent);



/***/ }),

/***/ "./src/app/shared/projetos.ts":
/*!************************************!*\
  !*** ./src/app/shared/projetos.ts ***!
  \************************************/
/*! exports provided: MEUS_PROJETOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEUS_PROJETOS", function() { return MEUS_PROJETOS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const MEUS_PROJETOS = [
    {
        nome: 'Produtores Consumidores',
        descricao: 'Trabalho de sistemas operacionais feito em python para resolver o problema "Produtores e Consumidores"',
        detalhes: [
            'Gerenciamento de múltiplas threads do processador',
            'Programação orientada a objetos',
            'Gerenciamento de concorrência de variáveis'
        ],
        online: true,
        github: 'https://www.github.com/arachnidiskandar/ProdutoresConsumidores'
    },
    {
        nome: 'Produtores Consumidores',
        descricao: 'Trabalho de sistemas operacionais feito em python para resolver o problema "Produtores e Consumidores"',
        detalhes: [
            'Gerenciamento de múltiplas threads do processador',
            'Programação orientada a objetos',
            'Gerenciamento de concorrência de variáveis'
        ]
    },
    {
        nome: 'Produtores Consumidores',
        descricao: 'Trabalho de sistemas operacionais feito em python para resolver o problema "Produtores e Consumidores"',
        detalhes: [
            'Gerenciamento de múltiplas threads do processador',
            'Programação orientada a objetos',
            'Gerenciamento de concorrência de variáveis'
        ]
    },
    {
        nome: 'Produtores Consumidores',
        descricao: 'Trabalho de sistemas operacionais feito em python para resolver o problema "Produtores e Consumidores"',
        detalhes: [
            'Gerenciamento de múltiplas threads do processador',
            'Programação orientada a objetos',
            'Gerenciamento de concorrência de variáveis'
        ]
    },
    {
        nome: 'Produtores Consumidores',
        descricao: 'Trabalho de sistemas operacionais feito em python para resolver o problema "Produtores e Consumidores"',
        detalhes: [
            'Gerenciamento de múltiplas threads do processador',
            'Programação orientada a objetos',
            'Gerenciamento de concorrência de variáveis'
        ]
    },
    {
        nome: 'Produtores Consumidores',
        descricao: 'Trabalho de sistemas operacionais feito em python para resolver o problema "Produtores e Consumidores"',
        detalhes: [
            'Gerenciamento de múltiplas threads do processador',
            'Programação orientada a objetos',
            'Gerenciamento de concorrência de variáveis'
        ]
    }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projetos\portifolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map