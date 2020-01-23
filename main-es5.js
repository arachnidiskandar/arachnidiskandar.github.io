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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"app\">\r\n  <app-header></app-header>\r\n  <app-content></app-content>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/content/content.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/content.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentContentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"conteudo\" class=\"bg-img\">\r\n  <div class=\"d-flex\"></div>\r\n  <div id=\"teste\">\r\n    <h3 class=\"bg-primary\">Meus Projetos</h3>\r\n    <app-projetos></app-projetos>\r\n  </div>\r\n  <div>\r\n    <h3 class=\"bg-primary\">Sobre</h3>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav [@mudarNavBar]=\"estado\" class=\"d-flex fixed-top navbar\">\r\n  <div>\r\n    <h5>Augusto Rafael</h5>\r\n    <span>Desenvolvedor Front-End</span>\r\n  </div>\r\n  <div (click)=\"mudarMenu()\" class=\"bg-menu\" *ngIf=\"menu\">\r\n  </div>\r\n  <div\r\n    id=\"opcoes\"\r\n    [class.ativa]=\"menu\"\r\n  >\r\n    <ul>\r\n      <li><span>Projetos</span></li>\r\n      <li><span>Sobre</span></li>\r\n      <li><span>Contato</span></li>\r\n      <div id=\"icones\">\r\n        <li>\r\n          <a\r\n            [ngStyle]=\"mudarEstilo()\"\r\n            href=\"https://github.com/arachnidiskandar\"\r\n          >\r\n            <i class=\"fa fa-github\"></i>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a\r\n            [ngStyle]=\"mudarEstilo()\"\r\n            href=\"https://www.linkedin.com/in/augusto-rafael-santos-da-silva-b957b5162/\"\r\n          >\r\n            <i class=\"fa fa-linkedin\"></i>\r\n          </a>\r\n        </li>\r\n      </div>\r\n    </ul>\r\n  </div>\r\n  <input type=\"checkbox\" id=\"check\" />\r\n  <label for=\"check\" id=\"checkbtn\">\r\n    <i (click)=\"mudarMenu()\" class=\"fa fa-bars\"></i>\r\n  </label>\r\n</nav>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/projeto/projeto.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projeto/projeto.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjetoProjetoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"projeto\">\r\n    <img (click)=\"mudarEstado()\" class=\"pointer\" src=\"https://via.placeholder.com/600\">\r\n    <div class=\"pt-1 info-projetos d-flex flex-column\">\r\n        <div class=\"titulo-projeto mb-2 d-flex justify-content-around\">\r\n            <h5>{{ projeto.nome }}</h5>\r\n            <i (click)=\"mudarEstado()\" class=\"fa fa-ellipsis-v pointer\"></i>\r\n        </div>\r\n        <p class=\"m-3\">{{ projeto.descricao }}</p>\r\n    </div>\r\n    <div [@mostrarDetalhesProjeto]=\"estado\" class=\"detalhes\">\r\n        <div class=\"titulo-detalhe d-flex justify-content-between m-3\">\r\n            <h5>Detalhes do Projeto</h5><img class=\"pointer\" (click)=\"mudarEstado()\" src=\"../../assets/icons/close.svg\" alt=\"\">\r\n        </div>\r\n        <div class=\"info mr-2\">\r\n            <ul>\r\n                <li *ngFor=\"let detalhe of projeto.detalhes\">{{ detalhe }}</li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"botoes d-flex justify-content-center\">\r\n            <div class=\"d-flex m-3\">\r\n                <button *ngIf=\"projeto.online\" class=\"btn btn-primary mr-3\"><a *ngIf=\"projeto.online\" href=\"{{ projeto.site }}\" target=\"_blank\">Ver Online</a></button>\r\n                <button class=\"btn btn-primary\"><a href=\"{{ projeto.github }}\" target=\"_blank\">Código Fonte</a></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/projetos.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/projetos.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjetosProjetosComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex flex-wrap flex-row justify-content-around\">\r\n    <div *ngFor=\"let projeto of projetos\">\r\n        <app-projeto [projeto]=\"projeto\"></app-projeto>\r\n    </div>\r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".app {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n}\n\n.loading {\n  opacity: 0;\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  background: #272c33;\n  padding-top: 25vh;\n  text-align: center;\n  z-index: -1;\n  -webkit-transition: opacity 0.8s ease-out;\n  transition: opacity 0.8s ease-out;\n}\n\napp-root:empty + .loading {\n  opacity: 1;\n  z-index: 100;\n}\n\napp-root:empty + .loading h1 {\n  font-family: \"courier\", monospace;\n  color: #EEE;\n  margin-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFByb2pldG9zXFxTb3VyY2VDb2RlUG9ydGlmb2xpby9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7QUNDSjs7QURDQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7RUFBQSxpQ0FBQTtBQ0VKOztBRENBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUNFRjs7QURERTtFQUNFLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwIHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZmxvdzpyb3cgd3JhcDtcclxufVxyXG4ubG9hZGluZyB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjcyYzMzO1xyXG4gICAgcGFkZGluZy10b3A6IDI1dmg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjhzIGVhc2Utb3V0O1xyXG59XHJcblxyXG5hcHAtcm9vdDplbXB0eSArIC5sb2FkaW5nIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBoMSB7XHJcbiAgICBmb250LWZhbWlseTogXCJjb3VyaWVyXCIsIG1vbm9zcGFjZTtcclxuICAgIGNvbG9yOiAjRUVFO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB9XHJcbn1cclxuXHJcbiIsIi5hcHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xufVxuXG4ubG9hZGluZyB7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzI3MmMzMztcbiAgcGFkZGluZy10b3A6IDI1dmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogLTE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC44cyBlYXNlLW91dDtcbn1cblxuYXBwLXJvb3Q6ZW1wdHkgKyAubG9hZGluZyB7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDEwMDtcbn1cbmFwcC1yb290OmVtcHR5ICsgLmxvYWRpbmcgaDEge1xuICBmb250LWZhbWlseTogXCJjb3VyaWVyXCIsIG1vbm9zcGFjZTtcbiAgY29sb3I6ICNFRUU7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59Il19 */";
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Augusto Rafael | Desenvolvedor Front-End';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _content_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./content/content.component */
    "./src/app/content/content.component.ts");
    /* harmony import */


    var _projetos_projetos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./projetos/projetos.component */
    "./src/app/projetos/projetos.component.ts");
    /* harmony import */


    var _projeto_projeto_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./projeto/projeto.component */
    "./src/app/projeto/projeto.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_6__["ContentComponent"], _projetos_projetos_component__WEBPACK_IMPORTED_MODULE_7__["ProjetosComponent"], _projeto_projeto_component__WEBPACK_IMPORTED_MODULE_8__["ProjetoComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/content/content.component.scss":
  /*!************************************************!*\
    !*** ./src/app/content/content.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContentContentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#conteudo div {\n  height: 100vh;\n}\n#conteudo div h3 {\n  padding: 1vh;\n  color: white;\n}\n#conteudo div:nth-child(2) {\n  height: auto;\n}\n#conteudo div:nth-child(2) h3 {\n  color: white;\n}\n.bg-img {\n  background-image: url('thumb-1920-737474.png');\n  height: 100vh;\n  width: 100%;\n  background-position: center;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9DOlxcUHJvamV0b3NcXFNvdXJjZUNvZGVQb3J0aWZvbGlvL3NyY1xcYXBwXFxjb250ZW50XFxjb250ZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0k7RUFDSSxhQUFBO0FDRlI7QURHUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDRFo7QURJSTtFQUNJLFlBQUE7QUNGUjtBREdRO0VBQ0ksWUFBQTtBQ0RaO0FES0E7RUFDSSw4Q0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vc3R5bGVzL2NvbG9ycy5zY3NzJztcclxuXHJcbiNjb250ZXVkbyB7XHJcbiAgICBkaXYge1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxdmg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkaXY6bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmJnLWltZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvdGh1bWItMTkyMC03Mzc0NzQucG5nXCIpO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4iLCIjY29udGV1ZG8gZGl2IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbiNjb250ZXVkbyBkaXYgaDMge1xuICBwYWRkaW5nOiAxdmg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiNjb250ZXVkbyBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuI2NvbnRldWRvIGRpdjpudGgtY2hpbGQoMikgaDMge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iZy1pbWcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvdGh1bWItMTkyMC03Mzc0NzQucG5nXCIpO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/content/content.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/content/content.component.ts ***!
    \**********************************************/

  /*! exports provided: ContentComponent */

  /***/
  function srcAppContentContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentComponent", function () {
      return ContentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_projetos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/projetos */
    "./src/app/shared/projetos.ts");

    var ContentComponent =
    /*#__PURE__*/
    function () {
      function ContentComponent() {
        _classCallCheck(this, ContentComponent);

        this.projetos = _shared_projetos__WEBPACK_IMPORTED_MODULE_2__["MEUS_PROJETOS"];
      }

      _createClass(ContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContentComponent;
    }();

    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-content',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./content.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/content/content.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./content.component.scss */
      "./src/app/content/content.component.scss")).default]
    })], ContentComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/header/header.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nav {\n  -webkit-box-flex: 0;\n          flex: 0 1 100%;\n  padding: 0vh 1vw;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 9vh;\n}\nnav div:first-child h5 {\n  margin: 0;\n}\nnav div:first-child span {\n  font-size: 14px;\n}\nnav #opcoes {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\nnav #opcoes ul {\n  margin: 0;\n  padding: 0;\n  display: -webkit-box;\n  display: flex;\n}\nnav #opcoes ul li > span:hover, nav #opcoes ul i:hover {\n  border-bottom: solid 1px;\n  cursor: pointer;\n}\nnav #opcoes ul li {\n  font-weight: bold;\n  font-size: 20px;\n  margin: 0;\n  list-style: none;\n  margin: 1vw;\n  border-bottom: solid 1px transparent;\n}\nnav #opcoes ul li a i {\n  font-size: 30px;\n}\nnav #opcoes ul #icones {\n  display: -webkit-box;\n  display: flex;\n}\nnav #checkbtn {\n  font-size: 30px;\n  cursor: pointer;\n  display: none;\n}\nnav #check {\n  display: none;\n}\n@media screen and (max-width: 768px) {\n  #opcoes {\n    position: absolute;\n    top: 9vh;\n    height: 91vh;\n    right: 0px;\n    background-color: white;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center !important;\n            justify-content: center !important;\n    width: 50vw;\n    z-index: 99;\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    opacity: 0;\n    -webkit-transition: opacity 0.2s ease-in, -webkit-transform 0.2s ease-in;\n    transition: opacity 0.2s ease-in, -webkit-transform 0.2s ease-in;\n    transition: transform 0.2s ease-in, opacity 0.2s ease-in;\n    transition: transform 0.2s ease-in, opacity 0.2s ease-in, -webkit-transform 0.2s ease-in;\n  }\n  #opcoes ul {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    padding: 0;\n  }\n  #opcoes ul li a {\n    color: #4168a3;\n    font-size: 14px;\n  }\n  #opcoes ul #icones {\n    display: -webkit-box;\n    display: flex;\n    justify-content: space-around;\n  }\n\n  #opcoes.ativa {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n    opacity: 1;\n  }\n\n  #checkbtn {\n    display: block !important;\n  }\n\n  .bg-menu {\n    top: 9vh;\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    background-color: #0000008c;\n    left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxQcm9qZXRvc1xcU291cmNlQ29kZVBvcnRpZm9saW8vc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvQzpcXFByb2pldG9zXFxTb3VyY2VDb2RlUG9ydGlmb2xpby9zcmNcXGFwcFxcc3R5bGVzXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLG1CQUFBO1VBQUEsY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFdBQUE7QUNESjtBREdRO0VBQ0ksU0FBQTtBQ0RaO0FER1E7RUFDSSxlQUFBO0FDRFo7QURJSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7QUNGUjtBREdRO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNEVjtBREVZO0VBQ0ksd0JBQUE7RUFDQSxlQUFBO0FDQWhCO0FERVk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7QUNBaEI7QURFb0I7RUFDSSxlQUFBO0FDQXhCO0FESVk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUNGZDtBRE9JO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDTFI7QURRSTtFQUNJLGFBQUE7QUNOUjtBRFVBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUNBLHVCQUFBO0lBQ0Esb0JBQUE7SUFBQSxhQUFBO0lBQ0EsbUNBQUE7WUFBQSxrQ0FBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsbUNBQUE7WUFBQSwyQkFBQTtJQUNBLFVBQUE7SUFDQSx3RUFBQTtJQUFBLGdFQUFBO0lBQUEsd0RBQUE7SUFBQSx3RkFBQTtFQ1BOO0VEUU07SUFDRSxvQkFBQTtJQUFBLGFBQUE7SUFDQSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7SUFDQSxVQUFBO0VDTlI7RURRVTtJQUNFLGNFNUVKO0lGNkVJLGVBQUE7RUNOWjtFRFNRO0lBQ0Usb0JBQUE7SUFBQSxhQUFBO0lBQ0EsNkJBQUE7RUNQVjs7RURXRTtJQUNJLGlDQUFBO1lBQUEseUJBQUE7SUFDQSxVQUFBO0VDUk47O0VEVUU7SUFDSSx5QkFBQTtFQ1BOOztFRFVFO0lBQ0UsUUFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSwyQkFBQTtJQUNBLE9BQUE7RUNQSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL3N0eWxlcy9jb2xvcnMuc2Nzcyc7XHJcblxyXG5uYXYge1xyXG4gICAgZmxleDowIDEgMTAwJTtcclxuICAgIHBhZGRpbmc6IDB2aCAxdnc7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA5dmg7XHJcbiAgICBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIGg1IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICNvcGNvZXMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgbGkgPiBzcGFuOmhvdmVyLCBpOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDF2dztcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNpY29uZXMge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgI2NoZWNrYnRuIHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICAgfVxyXG4gICAgI2NoZWNrIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgI29wY29lcyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogOXZoO1xyXG4gICAgICAgIGhlaWdodDogOTF2aDtcclxuICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogNTB2dztcclxuICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLCBvcGFjaXR5IDAuMnMgZWFzZS1pbjtcclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgICNpY29uZXMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAjb3Bjb2VzLmF0aXZhIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICAjY2hlY2tidG4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmJnLW1lbnUge1xyXG4gICAgICB0b3A6IDl2aDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA4YztcclxuICAgICAgbGVmdDogMDtcclxuICAgIH1cclxufVxyXG4iLCJuYXYge1xuICBmbGV4OiAwIDEgMTAwJTtcbiAgcGFkZGluZzogMHZoIDF2dztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA5dmg7XG59XG5uYXYgZGl2OmZpcnN0LWNoaWxkIGg1IHtcbiAgbWFyZ2luOiAwO1xufVxubmF2IGRpdjpmaXJzdC1jaGlsZCBzcGFuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxubmF2ICNvcGNvZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxubmF2ICNvcGNvZXMgdWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5uYXYgI29wY29lcyB1bCBsaSA+IHNwYW46aG92ZXIsIG5hdiAjb3Bjb2VzIHVsIGk6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm5hdiAjb3Bjb2VzIHVsIGxpIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDF2dztcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHRyYW5zcGFyZW50O1xufVxubmF2ICNvcGNvZXMgdWwgbGkgYSBpIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxubmF2ICNvcGNvZXMgdWwgI2ljb25lcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5uYXYgI2NoZWNrYnRuIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5uYXYgI2NoZWNrIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgI29wY29lcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogOXZoO1xuICAgIGhlaWdodDogOTF2aDtcbiAgICByaWdodDogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICB3aWR0aDogNTB2dztcbiAgICB6LWluZGV4OiA5OTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLCBvcGFjaXR5IDAuMnMgZWFzZS1pbjtcbiAgfVxuICAjb3Bjb2VzIHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICAjb3Bjb2VzIHVsIGxpIGEge1xuICAgIGNvbG9yOiAjNDE2OGEzO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAjb3Bjb2VzIHVsICNpY29uZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cblxuICAjb3Bjb2VzLmF0aXZhIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAjY2hlY2tidG4ge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYmctbWVudSB7XG4gICAgdG9wOiA5dmg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA4YztcbiAgICBsZWZ0OiAwO1xuICB9XG59IiwiJHByaW1hcnk6ICM0MTY4YTM7XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(renderer) {
        _classCallCheck(this, HeaderComponent);

        this.renderer = renderer;
        this.estado = 'inicial';
        this.menu = false;
      }

      _createClass(HeaderComponent, [{
        key: "onScroll",
        value: function onScroll() {
          window.pageYOffset > window.innerHeight * 0.9 ? this.estado = 'final' : this.estado = 'inicial';
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "mudarEstilo",
        value: function mudarEstilo() {
          if (this.estado === 'inicial') {
            return {
              color: 'white',
              borderBottom: 'white'
            };
          } else {
            return {
              color: '#4168a3',
              borderBottom: '#4168a3'
            };
          }
        }
      }, {
        key: "mudarMenu",
        value: function mudarMenu() {
          this.gerenciarBody();
          this.menu ? this.menu = false : this.menu = true;

          if (window.pageYOffset < window.innerHeight * 0.9) {
            this.estado === 'inicial' ? this.estado = 'final' : this.estado = 'inicial';
          }
        }
      }, {
        key: "gerenciarBody",
        value: function gerenciarBody() {
          document.body.style.overflow === 'hidden' ? this.renderer.setStyle(document.body, 'overflow', 'auto') : this.renderer.setStyle(document.body, 'overflow', 'hidden');
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll')], HeaderComponent.prototype, "onScroll", null);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('mudarNavBar', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('inicial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        color: 'white',
        backgroundColor: 'transparent'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        color: ' #4168a3',
        backgroundColor: 'white'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('inicial=>final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('200ms')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('final=>inicial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('200ms'))])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/header/header.component.scss")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/projeto/projeto.component.scss":
  /*!************************************************!*\
    !*** ./src/app/projeto/projeto.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjetoProjetoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".projeto {\n  margin: 10px;\n  border-radius: 5px;\n  overflow: hidden;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  position: relative;\n  max-width: 320px;\n}\n.projeto img {\n  max-height: 320px;\n}\n.projeto .info-projetos {\n  background-color: white;\n  color: #4168a3;\n}\n.projeto .info-projetos .titulo-projeto h5 {\n  margin: 0;\n}\n.projeto .info-projetos .titulo-projeto i {\n  font-size: 18px;\n  color: #4168a3;\n  margin-top: 5px;\n}\n.projeto .detalhes {\n  width: auto;\n  height: 100%;\n  top: 100%;\n  position: absolute;\n  background-color: white;\n}\n.projeto .detalhes .titulo-detalhe {\n  color: #4168a3;\n}\n.projeto .detalhes .info {\n  height: 300px;\n}\n.projeto .detalhes .botoes {\n  font-size: 2rem;\n  border-top: solid 1px #d4d4d4;\n}\n.projeto .detalhes .botoes button a {\n  text-decoration: none;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamV0by9DOlxcUHJvamV0b3NcXFNvdXJjZUNvZGVQb3J0aWZvbGlvL3NyY1xcYXBwXFxwcm9qZXRvXFxwcm9qZXRvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9qZXRvL3Byb2pldG8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2pldG8vQzpcXFByb2pldG9zXFxTb3VyY2VDb2RlUG9ydGlmb2xpby9zcmNcXGFwcFxcc3R5bGVzXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDREY7QURHRTtFQUNFLGlCQUFBO0FDREo7QURHRTtFQUNFLHVCQUFBO0VBQ0EsY0VmTTtBRGNWO0FESU07RUFDRSxTQUFBO0FDRlI7QURJTTtFQUNFLGVBQUE7RUFDQSxjRXZCRTtFRndCRixlQUFBO0FDRlI7QURNRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNKSjtBREtJO0VBQ0ksY0VuQ0U7QURnQ1Y7QURLSTtFQUNJLGFBQUE7QUNIUjtBREtJO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0FDSFI7QURLWTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQ0hoQiIsImZpbGUiOiJzcmMvYXBwL3Byb2pldG8vcHJvamV0by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL3N0eWxlcy9jb2xvcnMuc2Nzcyc7XHJcblxyXG4ucHJvamV0byB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtd2lkdGg6IDMyMHB4O1xyXG4gIFxyXG4gIGltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMjBweDtcclxuICB9XHJcbiAgLmluZm8tcHJvamV0b3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICBcclxuICAgIC50aXR1bG8tcHJvamV0byB7XHJcbiAgICAgIGg1IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICAgICAgaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmRldGFsaGVzIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAudGl0dWxvLWRldGFsaGUge1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgIH1cclxuICAgIC5pbmZvIHtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgfVxyXG4gICAgLmJvdG9lcyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZDRkNGQ0O1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIucHJvamV0byB7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDMyMHB4O1xufVxuLnByb2pldG8gaW1nIHtcbiAgbWF4LWhlaWdodDogMzIwcHg7XG59XG4ucHJvamV0byAuaW5mby1wcm9qZXRvcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzQxNjhhMztcbn1cbi5wcm9qZXRvIC5pbmZvLXByb2pldG9zIC50aXR1bG8tcHJvamV0byBoNSB7XG4gIG1hcmdpbjogMDtcbn1cbi5wcm9qZXRvIC5pbmZvLXByb2pldG9zIC50aXR1bG8tcHJvamV0byBpIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzQxNjhhMztcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLnByb2pldG8gLmRldGFsaGVzIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnByb2pldG8gLmRldGFsaGVzIC50aXR1bG8tZGV0YWxoZSB7XG4gIGNvbG9yOiAjNDE2OGEzO1xufVxuLnByb2pldG8gLmRldGFsaGVzIC5pbmZvIHtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cbi5wcm9qZXRvIC5kZXRhbGhlcyAuYm90b2VzIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2Q0ZDRkNDtcbn1cbi5wcm9qZXRvIC5kZXRhbGhlcyAuYm90b2VzIGJ1dHRvbiBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59IiwiJHByaW1hcnk6ICM0MTY4YTM7XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/projeto/projeto.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/projeto/projeto.component.ts ***!
    \**********************************************/

  /*! exports provided: ProjetoComponent */

  /***/
  function srcAppProjetoProjetoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjetoComponent", function () {
      return ProjetoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var ProjetoComponent =
    /*#__PURE__*/
    function () {
      function ProjetoComponent() {
        _classCallCheck(this, ProjetoComponent);

        this.estado = 'inicial';
      }

      _createClass(ProjetoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "mudarEstado",
        value: function mudarEstado() {
          this.estado = this.estado === 'inicial' ? 'final' : 'inicial';
        }
      }]);

      return ProjetoComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProjetoComponent.prototype, "projeto", void 0);
    ProjetoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projeto',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projeto.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/projeto/projeto.component.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('mostrarDetalhesProjeto', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('inicial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        top: '100%'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        top: '0'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('inicial=>final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('final=>inicial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms'))])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projeto.component.scss */
      "./src/app/projeto/projeto.component.scss")).default]
    })], ProjetoComponent);
    /***/
  },

  /***/
  "./src/app/projetos/projetos.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/projetos/projetos.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjetosProjetosComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".d-flex {\n  min-width: 320px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamV0b3MvQzpcXFByb2pldG9zXFxTb3VyY2VDb2RlUG9ydGlmb2xpby9zcmNcXGFwcFxccHJvamV0b3NcXHByb2pldG9zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9qZXRvcy9wcm9qZXRvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wcm9qZXRvcy9wcm9qZXRvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kLWZsZXgge1xyXG4gICAgbWluLXdpZHRoOiAzMjBweDtcclxufVxyXG4iLCIuZC1mbGV4IHtcbiAgbWluLXdpZHRoOiAzMjBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/projetos/projetos.component.ts":
  /*!************************************************!*\
    !*** ./src/app/projetos/projetos.component.ts ***!
    \************************************************/

  /*! exports provided: ProjetosComponent */

  /***/
  function srcAppProjetosProjetosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjetosComponent", function () {
      return ProjetosComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_projetos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/projetos */
    "./src/app/shared/projetos.ts");

    var ProjetosComponent =
    /*#__PURE__*/
    function () {
      function ProjetosComponent() {
        _classCallCheck(this, ProjetosComponent);

        this.projetos = _shared_projetos__WEBPACK_IMPORTED_MODULE_2__["MEUS_PROJETOS"];
      }

      _createClass(ProjetosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjetosComponent;
    }();

    ProjetosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projetos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projetos.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/projetos/projetos.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projetos.component.scss */
      "./src/app/projetos/projetos.component.scss")).default]
    })], ProjetosComponent);
    /***/
  },

  /***/
  "./src/app/shared/projetos.ts":
  /*!************************************!*\
    !*** ./src/app/shared/projetos.ts ***!
    \************************************/

  /*! exports provided: MEUS_PROJETOS */

  /***/
  function srcAppSharedProjetosTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MEUS_PROJETOS", function () {
      return MEUS_PROJETOS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var MEUS_PROJETOS = [{
      nome: 'Produtores Consumidores',
      descricao: 'Trabalho de sistemas operacionais feito em python para resolver o problema "Produtores e Consumidores"',
      detalhes: ['Gerenciamento de múltiplas threads do processador', 'Programação orientada a objetos', 'Gerenciamento de concorrência de variáveis'],
      online: true,
      github: 'https://www.github.com/arachnidiskandar/ProdutoresConsumidores'
    }, {
      nome: 'Produtores Consumidores',
      descricao: 'Trabalho de sistemas operacionais feito em python para resolver o problema "Produtores e Consumidores"',
      detalhes: ['Gerenciamento de múltiplas threads do processador', 'Programação orientada a objetos', 'Gerenciamento de concorrência de variáveis']
    }, {
      nome: 'Produtores Consumidores',
      descricao: 'Trabalho de sistemas operacionais feito em python para resolver o problema "Produtores e Consumidores"',
      detalhes: ['Gerenciamento de múltiplas threads do processador', 'Programação orientada a objetos', 'Gerenciamento de concorrência de variáveis']
    }, {
      nome: 'Produtores Consumidores',
      descricao: 'Trabalho de sistemas operacionais feito em python para resolver o problema "Produtores e Consumidores"',
      detalhes: ['Gerenciamento de múltiplas threads do processador', 'Programação orientada a objetos', 'Gerenciamento de concorrência de variáveis']
    }, {
      nome: 'Produtores Consumidores',
      descricao: 'Trabalho de sistemas operacionais feito em python para resolver o problema "Produtores e Consumidores"',
      detalhes: ['Gerenciamento de múltiplas threads do processador', 'Programação orientada a objetos', 'Gerenciamento de concorrência de variáveis']
    }, {
      nome: 'Produtores Consumidores',
      descricao: 'Trabalho de sistemas operacionais feito em python para resolver o problema "Produtores e Consumidores"',
      detalhes: ['Gerenciamento de múltiplas threads do processador', 'Programação orientada a objetos', 'Gerenciamento de concorrência de variáveis']
    }];
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
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
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
    /*! C:\Projetos\SourceCodePortifolio\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map