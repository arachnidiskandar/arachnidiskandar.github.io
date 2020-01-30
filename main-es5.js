function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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


    __webpack_exports__["default"] = "<div class=\"app\">\n  <app-header></app-header>\n  <app-content></app-content>\n</div>\n";
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


    __webpack_exports__["default"] = "<div id=\"conteudo\" >\r\n  <div class=\"bg-img\"></div>\r\n  <div class=\"d-flex secao\"></div>\r\n  <div id=\"sobre\" class=\"secao\">\r\n    <h3 class=\"bg-primary\">Sobre</h3>\r\n    <div class=\"p-3\">\r\n      <p>Meu nome é Augusto, tenho 21 anos, moro em Canoas-RS e curso Análise e Desenvolvimento de Sistemas no IFRS de Canoas.</p>\r\n      <p>Em Agosto de 2019 eu comecei meu estágio em Desenvolvimento Web Front-End com Angular e desde então venho me aprofundando no Front-End.</p>\r\n      <p>O próximo objetivo é aprender Back-End utilizando com Node.js e também .NET Core Framework.</p>\r\n    </div>\r\n    <div id=\"conhecimentos\" class=\"p-2\">\r\n      <h4>Conhecimentos</h4>\r\n      <div>\r\n        <div class=\"skill\">\r\n          <img src=\"../../assets/images/html5.png\" alt=\"\">\r\n          <span>HTML</span>\r\n        </div>\r\n        <div class=\"skill\">\r\n          <img src=\"../../assets/images/css3.png\" alt=\"\">\r\n          <span>CSS3</span>\r\n        </div>\r\n        <div class=\"skill\">\r\n          <img src=\"../../assets/images/bootstrap.png\" alt=\"\">\r\n          <span>Bootstrap</span>\r\n        </div>\r\n        <div class=\"skill\">\r\n          <img src=\"../../assets/images/sass.png\" alt=\"\">\r\n          <span>Sass</span>\r\n        </div>\r\n        <div class=\"skill\">\r\n          <img src=\"../../assets/images/javascript.png\" alt=\"\">\r\n          <span>Javascript</span>\r\n        </div>\r\n        <div class=\"skill\">\r\n          <img src=\"../../assets/images/typescript.png\" alt=\"\">\r\n          <span>Typescript</span>\r\n        </div>\r\n        <div class=\"skill\">\r\n          <img src=\"../../assets/images/angular.png\" alt=\"\">\r\n          <span>Angular</span>\r\n        </div>\r\n        <div class=\"skill\">\r\n          <img src=\"../../assets/images/jest.png\" alt=\"\">\r\n          <span>Jest</span>\r\n        </div>\r\n        <div class=\"skill\">\r\n          <img src=\"../../assets/images/git.png\" alt=\"\">\r\n          <span>Git</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"projetos\" class=\"secao\">\r\n    <h3 class=\"bg-primary\">Meus Projetos</h3>\r\n    <app-projetos></app-projetos>\r\n  </div>\r\n  <div id=\"contato\" class=\"secao\">\r\n    <h3 class=\"bg-primary\">Contato</h3>\r\n    <div class=\"contatos\">\r\n      <div>\r\n        <i class=\"fa fa-envelope\"></i><span>augstarachrafael@gmail.com</span>\r\n      </div>\r\n      <div>\r\n        <i class=\"fa fa-whatsapp\" aria-hidden=\"true\"></i><span>(51) 98133-9668</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
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


    __webpack_exports__["default"] = "<nav [@mudarNavBar]=\"estado\" class=\"d-flex fixed-top navbar\">\r\n  <div>\r\n    <h5>Augusto Rafael</h5>\r\n    <span>Desenvolvedor Front-End</span>\r\n  </div>\r\n  <div (click)=\"mudarMenu()\" class=\"bg-menu\" *ngIf=\"menu\">\r\n  </div>\r\n  <div\r\n    id=\"opcoes\"\r\n    [class.ativa]=\"menu\"\r\n  >\r\n    <ul>\r\n      <li><a (click)=\"mudarMenu()\" href=\"#sobre\" [ngStyle]=\"mudarEstilo()\">Sobre</a></li>\r\n      <li><a (click)=\"mudarMenu()\" href=\"#projetos\" [ngStyle]=\"mudarEstilo()\">Projetos</a></li>\r\n      <li><a (click)=\"mudarMenu()\" href=\"#contato\" [ngStyle]=\"mudarEstilo()\">Contato</a></li>\r\n      <div id=\"icones\">\r\n        <li>\r\n          <a\r\n            [ngStyle]=\"mudarEstilo()\"\r\n            href=\"https://github.com/arachnidiskandar\"\r\n          >\r\n            <i class=\"fa fa-github\"></i>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a\r\n            [ngStyle]=\"mudarEstilo()\"\r\n            href=\"https://www.linkedin.com/in/augusto-rafael-santos-da-silva-b957b5162/\"\r\n          >\r\n            <i class=\"fa fa-linkedin\"></i>\r\n          </a>\r\n        </li>\r\n      </div>\r\n    </ul>\r\n  </div>\r\n  <input type=\"checkbox\" id=\"check\" />\r\n  <label for=\"check\" id=\"checkbtn\">\r\n    <i (click)=\"mudarMenu()\" class=\"fa fa-bars\"></i>\r\n  </label>\r\n</nav>\r\n";
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


    __webpack_exports__["default"] = "<div class=\"projeto\">\r\n<img (click)=\"mudarEstado()\" *ngIf=\"projeto.linkImage\" class=\"pointer img-prod\" src=\"{{ projeto.linkImage }}\">\r\n<img (click)=\"mudarEstado()\" *ngIf=\"!projeto.linkImage\" class=\"pointer img-prod\" src=\"https://via.placeholder.com/600\">\r\n    <div class=\"pt-1 info-projetos d-flex flex-column\">\r\n        <div class=\"titulo-projeto m-2 d-flex justify-content-between\">\r\n            <h5>{{ projeto.nome }}</h5>\r\n            <i (click)=\"mudarEstado()\" class=\"fa fa-ellipsis-v pointer\"></i>\r\n        </div>\r\n        <p class=\"m-3\">{{ projeto.descricao }}</p>\r\n    </div>\r\n    <div [@mostrarDetalhesProjeto]=\"estado\" class=\"detalhes\">\r\n        <div class=\"titulo-detalhe d-flex justify-content-between m-3\">\r\n            <h5>Detalhes do Projeto</h5><img class=\"pointer\" (click)=\"mudarEstado()\" src=\"../../assets/icons/close.svg\" alt=\"\">\r\n        </div>\r\n        <div class=\"info mr-2\">\r\n            <ul>\r\n                <li *ngFor=\"let detalhe of projeto.detalhes\">{{ detalhe }}</li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"botoes d-flex justify-content-center\">\r\n            <div class=\"d-flex m-3\">\r\n                <button *ngIf=\"projeto.online\" class=\"btn btn-primary mr-3\"><a *ngIf=\"projeto.online\" href=\"{{ projeto.site }}\" target=\"_blank\">Ver Online</a></button>\r\n                <button class=\"btn btn-primary\"><a href=\"{{ projeto.github }}\" target=\"_blank\">Código Fonte</a></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
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


    __webpack_exports__["default"] = "<div class=\"d-flex flex-wrap flex-row justify-content-around\">\n    <div *ngFor=\"let projeto of projetos\">\n        <app-projeto [projeto]=\"projeto\"></app-projeto>\n    </div>\n</div>\n\n\n";
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


    __webpack_exports__["default"] = ".app {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2M6XFxQcm9qZXRvc1xccG9ydGlmb2xpb1xcc3JjXFxhcHBcXHNoYXJlZC8uLlxcYXBwLmNvbXBvbmVudC5zY3NzIiwiLi4vYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0FDQ0oiLCJmaWxlIjoiLi4vYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcCB7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWZsb3c6cm93IHdyYXA7XHJcbn1cclxuXHJcbiIsIi5hcHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xufSJdfQ== */";
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
    /* harmony import */


    var _shared_AppReadyEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/AppReadyEvent */
    "./src/app/shared/AppReadyEvent.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(appReadyEvent) {
        _classCallCheck(this, AppComponent);

        this.title = 'Augusto Rafael | Desenvolvedor Front-End';
        this.appReadyEvent = appReadyEvent;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // FOR THE SAKE OF THE DEMO, let's add a small delay here so that the app can be
          // in a "loading" state for a "visible" amount of time.
          setTimeout(function () {
            _this.appReadyEvent.trigger();
          }, 1000);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _shared_AppReadyEvent__WEBPACK_IMPORTED_MODULE_2__["AppReadyEvent"]
      }];
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


    __webpack_exports__["default"] = "#conteudo .secao h3 {\n  padding: 1vh;\n  color: #fcfcfc;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n#conteudo div:nth-child(2) {\n  height: auto;\n}\n#conteudo div:nth-child(2) h3 {\n  color: #fcfcfc;\n}\n#conteudo #sobre #conhecimentos h4 {\n  text-align: center;\n}\n#conteudo #sobre #conhecimentos div {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n#conteudo #sobre #conhecimentos div .skill {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: 0.5rem;\n}\n#conteudo #sobre #conhecimentos div .skill img {\n  width: 50px;\n  height: 50px;\n  align-self: center;\n}\n#conteudo #sobre #conhecimentos div .skill span {\n  text-align: center;\n}\n#conteudo #contato .contatos {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  flex-wrap: wrap;\n}\n#conteudo #contato .contatos div {\n  margin: 5px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n#conteudo #contato .contatos div i {\n  margin-right: 5px;\n  font-size: 24px;\n  color: #4168a3;\n}\n@media screen and (min-width: 768px) {\n  #conteudo #contato {\n    height: 25vh;\n  }\n  #conteudo #contato .contatos {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    justify-content: space-around;\n    flex-wrap: wrap;\n  }\n}\n.bg-img {\n  background-image: url('thumb-1920-737474.png');\n  height: 100vh;\n  width: 100%;\n  background-position: center;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbnRlbnQvYzpcXFByb2pldG9zXFxwb3J0aWZvbGlvXFxzcmNcXGFwcFxcc2hhcmVkLy4uXFxjb250ZW50XFxjb250ZW50LmNvbXBvbmVudC5zY3NzIiwiLi4vY29udGVudC9jOlxcUHJvamV0b3NcXHBvcnRpZm9saW9cXHNyY1xcYXBwXFxzaGFyZWQvLi5cXHN0eWxlc1xcY29sb3JzLnNjc3MiLCIuLi9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSVE7RUFDSSxZQUFBO0VBQ0EsY0NMSjtFRE1JLG1CQUFBO1VBQUEsT0FBQTtBRUhaO0FGTUk7RUFDSSxZQUFBO0FFSlI7QUZLUTtFQUNJLGNDWko7QUNTUjtBRlFZO0VBQ0ksa0JBQUE7QUVOaEI7QUZRWTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FFTmhCO0FGT2dCO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGNBQUE7QUVMcEI7QUZNb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FFSnhCO0FGTW9CO0VBQ0ksa0JBQUE7QUVKeEI7QUZXUTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxlQUFBO0FFVFo7QUZXWTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FFVGhCO0FGVWdCO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0N4RFY7QUNnRFY7QUZhUTtFQW5CSjtJQW9CUSxZQUFBO0VFVlY7RUZXVTtJQUNJLG9CQUFBO0lBQUEsYUFBQTtJQUNBLDhCQUFBO0lBQUEsNkJBQUE7WUFBQSxtQkFBQTtJQUNBLDZCQUFBO0lBQ0EsZUFBQTtFRVRkO0FBQ0Y7QUZhQTtFQUNJLDhDQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FFVkoiLCJmaWxlIjoiLi4vY29udGVudC9jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vc3R5bGVzL2NvbG9ycy5zY3NzJztcclxuXHJcbiNjb250ZXVkbyB7XHJcbiAgICAuc2VjYW8ge1xyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMXZoO1xyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRpdjpudGgtY2hpbGQoMil7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAjc29icmUge1xyXG4gICAgICAgICNjb25oZWNpbWVudG9zIHtcclxuICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAuc2tpbGwge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgI2NvbnRhdG8ge1xyXG4gICAgICAgIC5jb250YXRvcyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1dmg7XHJcbiAgICAgICAgICAgIC5jb250YXRvcyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5iZy1pbWcge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy90aHVtYi0xOTIwLTczNzQ3NC5wbmdcIik7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbiIsIiRwcmltYXJ5OiAjNDE2OGEzO1xyXG4kd2hpdGU6ICNmY2ZjZmM7XHJcbiIsIiNjb250ZXVkbyAuc2VjYW8gaDMge1xuICBwYWRkaW5nOiAxdmg7XG4gIGNvbG9yOiAjZmNmY2ZjO1xuICBmbGV4OiAxO1xufVxuI2NvbnRldWRvIGRpdjpudGgtY2hpbGQoMikge1xuICBoZWlnaHQ6IGF1dG87XG59XG4jY29udGV1ZG8gZGl2Om50aC1jaGlsZCgyKSBoMyB7XG4gIGNvbG9yOiAjZmNmY2ZjO1xufVxuI2NvbnRldWRvICNzb2JyZSAjY29uaGVjaW1lbnRvcyBoNCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNjb250ZXVkbyAjc29icmUgI2NvbmhlY2ltZW50b3MgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiNjb250ZXVkbyAjc29icmUgI2NvbmhlY2ltZW50b3MgZGl2IC5za2lsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDAuNXJlbTtcbn1cbiNjb250ZXVkbyAjc29icmUgI2NvbmhlY2ltZW50b3MgZGl2IC5za2lsbCBpbWcge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4jY29udGV1ZG8gI3NvYnJlICNjb25oZWNpbWVudG9zIGRpdiAuc2tpbGwgc3BhbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNjb250ZXVkbyAjY29udGF0byAuY29udGF0b3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuI2NvbnRldWRvICNjb250YXRvIC5jb250YXRvcyBkaXYge1xuICBtYXJnaW46IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNjb250ZXVkbyAjY29udGF0byAuY29udGF0b3MgZGl2IGkge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzQxNjhhMztcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICNjb250ZXVkbyAjY29udGF0byB7XG4gICAgaGVpZ2h0OiAyNXZoO1xuICB9XG4gICNjb250ZXVkbyAjY29udGF0byAuY29udGF0b3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbn1cblxuLmJnLWltZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvdGh1bWItMTkyMC03Mzc0NzQucG5nXCIpO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSJdfQ== */";
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


    __webpack_exports__["default"] = "nav {\n  -webkit-box-flex: 0;\n          flex: 0 1 100%;\n  padding: 0vh 1vw;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 9vh;\n}\nnav div:first-child h5 {\n  margin: 0;\n}\nnav div:first-child span {\n  font-size: 14px;\n}\nnav #opcoes {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\nnav #opcoes ul {\n  margin: 0;\n  padding: 0;\n  display: -webkit-box;\n  display: flex;\n}\nnav #opcoes ul li > span:hover, nav #opcoes ul i:hover {\n  border-bottom: solid 1px;\n  cursor: pointer;\n}\nnav #opcoes ul li {\n  font-weight: bold;\n  font-size: 20px;\n  margin: 0;\n  list-style: none;\n  margin: 1vw;\n  border-bottom: solid 1px transparent;\n}\nnav #opcoes ul li a {\n  color: red;\n}\nnav #opcoes ul li a i {\n  font-size: 30px;\n}\nnav #opcoes ul #icones {\n  display: -webkit-box;\n  display: flex;\n}\nnav #checkbtn {\n  font-size: 30px;\n  cursor: pointer;\n  display: none;\n}\nnav #check {\n  display: none;\n}\n@media screen and (max-width: 768px) {\n  #opcoes {\n    position: absolute;\n    top: 8vh;\n    height: 100vh;\n    right: 0vw;\n    background-color: #fcfcfc;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center !important;\n            justify-content: center !important;\n    width: 50vw;\n    z-index: 99;\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    opacity: 0;\n    -webkit-transition: opacity 0.2s ease-in, -webkit-transform 0.2s ease-in;\n    transition: opacity 0.2s ease-in, -webkit-transform 0.2s ease-in;\n    transition: transform 0.2s ease-in, opacity 0.2s ease-in;\n    transition: transform 0.2s ease-in, opacity 0.2s ease-in, -webkit-transform 0.2s ease-in;\n  }\n  #opcoes ul {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    padding: 0;\n  }\n  #opcoes ul li a {\n    color: #4168a3;\n    font-size: 14px;\n  }\n  #opcoes ul #icones {\n    display: -webkit-box;\n    display: flex;\n    justify-content: space-around;\n  }\n\n  #opcoes.ativa {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n    opacity: 1;\n  }\n\n  #checkbtn {\n    display: block !important;\n  }\n\n  .bg-menu {\n    top: 9vh;\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    background-color: #0000008c;\n    left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2hlYWRlci9jOlxcUHJvamV0b3NcXHBvcnRpZm9saW9cXHNyY1xcYXBwXFxzaGFyZWQvLi5cXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiLi4vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uL2hlYWRlci9jOlxcUHJvamV0b3NcXHBvcnRpZm9saW9cXHNyY1xcYXBwXFxzaGFyZWQvLi5cXHN0eWxlc1xcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxtQkFBQTtVQUFBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxXQUFBO0FDREo7QURHUTtFQUNJLFNBQUE7QUNEWjtBREdRO0VBQ0ksZUFBQTtBQ0RaO0FESUk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FDRlI7QURHUTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDRFY7QURFWTtFQUNJLHdCQUFBO0VBQ0EsZUFBQTtBQ0FoQjtBREVZO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0FDQWhCO0FEQ2dCO0VBQ0ksVUFBQTtBQ0NwQjtBREFvQjtFQUNJLGVBQUE7QUNFeEI7QURFWTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQ0FkO0FES0k7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNIUjtBRE1JO0VBQ0ksYUFBQTtBQ0pSO0FEUUE7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0lBQ0EseUJFOURBO0lGK0RBLG9CQUFBO0lBQUEsYUFBQTtJQUNBLG1DQUFBO1lBQUEsa0NBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLG1DQUFBO1lBQUEsMkJBQUE7SUFDQSxVQUFBO0lBQ0Esd0VBQUE7SUFBQSxnRUFBQTtJQUFBLHdEQUFBO0lBQUEsd0ZBQUE7RUNMTjtFRE1NO0lBQ0Usb0JBQUE7SUFBQSxhQUFBO0lBQ0EsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0lBQ0EsVUFBQTtFQ0pSO0VETVU7SUFDRSxjRTdFSjtJRjhFSSxlQUFBO0VDSlo7RURPUTtJQUNFLG9CQUFBO0lBQUEsYUFBQTtJQUNBLDZCQUFBO0VDTFY7O0VEU0U7SUFDSSxpQ0FBQTtZQUFBLHlCQUFBO0lBQ0EsVUFBQTtFQ05OOztFRFFFO0lBQ0kseUJBQUE7RUNMTjs7RURRRTtJQUNFLFFBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsMkJBQUE7SUFDQSxPQUFBO0VDTEo7QUFDRiIsImZpbGUiOiIuLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vc3R5bGVzL2NvbG9ycy5zY3NzJztcclxuXHJcbm5hdiB7XHJcbiAgICBmbGV4OjAgMSAxMDAlO1xyXG4gICAgcGFkZGluZzogMHZoIDF2dztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDl2aDtcclxuICAgIGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgaDUge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgI29wY29lcyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBsaSA+IHNwYW46aG92ZXIsIGk6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMXZ3O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjaWNvbmVzIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgICNjaGVja2J0biB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgIH1cclxuICAgICNjaGVjayB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICNvcGNvZXMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDh2aDtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIHJpZ2h0OiAwdnc7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogNTB2dztcclxuICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLCBvcGFjaXR5IDAuMnMgZWFzZS1pbjtcclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgICNpY29uZXMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAjb3Bjb2VzLmF0aXZhIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICAjY2hlY2tidG4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmJnLW1lbnUge1xyXG4gICAgICB0b3A6IDl2aDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA4YztcclxuICAgICAgbGVmdDogMDtcclxuICAgIH1cclxufVxyXG4iLCJuYXYge1xuICBmbGV4OiAwIDEgMTAwJTtcbiAgcGFkZGluZzogMHZoIDF2dztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA5dmg7XG59XG5uYXYgZGl2OmZpcnN0LWNoaWxkIGg1IHtcbiAgbWFyZ2luOiAwO1xufVxubmF2IGRpdjpmaXJzdC1jaGlsZCBzcGFuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxubmF2ICNvcGNvZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxubmF2ICNvcGNvZXMgdWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5uYXYgI29wY29lcyB1bCBsaSA+IHNwYW46aG92ZXIsIG5hdiAjb3Bjb2VzIHVsIGk6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm5hdiAjb3Bjb2VzIHVsIGxpIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDF2dztcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHRyYW5zcGFyZW50O1xufVxubmF2ICNvcGNvZXMgdWwgbGkgYSB7XG4gIGNvbG9yOiByZWQ7XG59XG5uYXYgI29wY29lcyB1bCBsaSBhIGkge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5uYXYgI29wY29lcyB1bCAjaWNvbmVzIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbm5hdiAjY2hlY2tidG4ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogbm9uZTtcbn1cbm5hdiAjY2hlY2sge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAjb3Bjb2VzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA4dmg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICByaWdodDogMHZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA1MHZ3O1xuICAgIHotaW5kZXg6IDk5O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4sIG9wYWNpdHkgMC4ycyBlYXNlLWluO1xuICB9XG4gICNvcGNvZXMgdWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gICNvcGNvZXMgdWwgbGkgYSB7XG4gICAgY29sb3I6ICM0MTY4YTM7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gICNvcGNvZXMgdWwgI2ljb25lcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgfVxuXG4gICNvcGNvZXMuYXRpdmEge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gICNjaGVja2J0biB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5iZy1tZW51IHtcbiAgICB0b3A6IDl2aDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDhjO1xuICAgIGxlZnQ6IDA7XG4gIH1cbn0iLCIkcHJpbWFyeTogIzQxNjhhMztcclxuJHdoaXRlOiAjZmNmY2ZjO1xyXG4iXX0= */";
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
              color: '#fcfcfc',
              borderBottom: '#fcfcfc',
              font: '#fcfcfc'
            };
          } else {
            return {
              color: '#4168a3',
              borderBottom: '#4168a3',
              font: '#4168a3'
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
        color: '#fcfcfc',
        backgroundColor: 'transparent'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        color: ' #4168a3',
        backgroundColor: '#fcfcfc'
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


    __webpack_exports__["default"] = ".projeto {\n  margin: 10px;\n  border-radius: 5px;\n  overflow: hidden;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  position: relative;\n  max-width: 320px;\n}\n.projeto .img-prod {\n  height: 320px;\n  width: 320px;\n}\n.projeto .info-projetos {\n  background-color: white;\n  color: #4168a3;\n}\n.projeto .info-projetos .titulo-projeto h5 {\n  margin: 0;\n}\n.projeto .info-projetos .titulo-projeto i {\n  font-size: 18px;\n  color: #4168a3;\n  margin-top: 5px;\n}\n.projeto .info-projetos p {\n  min-height: 100px;\n}\n.projeto .detalhes {\n  width: 100%;\n  height: 100%;\n  top: 100%;\n  position: absolute;\n  background-color: white;\n}\n.projeto .detalhes .titulo-detalhe {\n  color: #4168a3;\n}\n.projeto .detalhes .info {\n  height: 300px;\n}\n.projeto .detalhes .botoes {\n  font-size: 2rem;\n  border-top: solid 1px #d4d4d4;\n}\n.projeto .detalhes .botoes button a {\n  text-decoration: none;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Byb2pldG8vYzpcXFByb2pldG9zXFxwb3J0aWZvbGlvXFxzcmNcXGFwcFxcc2hhcmVkLy4uXFxwcm9qZXRvXFxwcm9qZXRvLmNvbXBvbmVudC5zY3NzIiwiLi4vcHJvamV0by9wcm9qZXRvLmNvbXBvbmVudC5zY3NzIiwiLi4vcHJvamV0by9jOlxcUHJvamV0b3NcXHBvcnRpZm9saW9cXHNyY1xcYXBwXFxzaGFyZWQvLi5cXHN0eWxlc1xcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZFQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0RGO0FER0U7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ0RKO0FER0U7RUFDRSx1QkFBQTtFQUNBLGNFaEJNO0FEZVY7QURHTTtFQUNFLFNBQUE7QUNEUjtBREdNO0VBQ0UsZUFBQTtFQUNBLGNFdkJFO0VGd0JGLGVBQUE7QUNEUjtBRElJO0VBQ0UsaUJBQUE7QUNGTjtBREtFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ0hKO0FESUk7RUFDSSxjRXRDRTtBRG9DVjtBRElJO0VBQ0ksYUFBQTtBQ0ZSO0FESUk7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7QUNGUjtBRElZO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FDRmhCIiwiZmlsZSI6Ii4uL3Byb2pldG8vcHJvamV0by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL3N0eWxlcy9jb2xvcnMuc2Nzcyc7XHJcblxyXG4ucHJvamV0byB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtd2lkdGg6IDMyMHB4O1xyXG5cclxuICAuaW1nLXByb2Qge1xyXG4gICAgaGVpZ2h0OiAzMjBweDtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICB9XHJcbiAgLmluZm8tcHJvamV0b3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICAudGl0dWxvLXByb2pldG8ge1xyXG4gICAgICBoNSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5kZXRhbGhlcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgLnRpdHVsby1kZXRhbGhlIHtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICB9XHJcbiAgICAuaW5mbyB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIH1cclxuICAgIC5ib3RvZXMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2Q0ZDRkNDtcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnByb2pldG8ge1xuICBtYXJnaW46IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAzMjBweDtcbn1cbi5wcm9qZXRvIC5pbWctcHJvZCB7XG4gIGhlaWdodDogMzIwcHg7XG4gIHdpZHRoOiAzMjBweDtcbn1cbi5wcm9qZXRvIC5pbmZvLXByb2pldG9zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjNDE2OGEzO1xufVxuLnByb2pldG8gLmluZm8tcHJvamV0b3MgLnRpdHVsby1wcm9qZXRvIGg1IHtcbiAgbWFyZ2luOiAwO1xufVxuLnByb2pldG8gLmluZm8tcHJvamV0b3MgLnRpdHVsby1wcm9qZXRvIGkge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjNDE2OGEzO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4ucHJvamV0byAuaW5mby1wcm9qZXRvcyBwIHtcbiAgbWluLWhlaWdodDogMTAwcHg7XG59XG4ucHJvamV0byAuZGV0YWxoZXMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4ucHJvamV0byAuZGV0YWxoZXMgLnRpdHVsby1kZXRhbGhlIHtcbiAgY29sb3I6ICM0MTY4YTM7XG59XG4ucHJvamV0byAuZGV0YWxoZXMgLmluZm8ge1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuLnByb2pldG8gLmRldGFsaGVzIC5ib3RvZXMge1xuICBmb250LXNpemU6IDJyZW07XG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZDRkNGQ0O1xufVxuLnByb2pldG8gLmRldGFsaGVzIC5ib3RvZXMgYnV0dG9uIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iLCIkcHJpbWFyeTogIzQxNjhhMztcclxuJHdoaXRlOiAjZmNmY2ZjO1xyXG4iXX0= */";
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


    __webpack_exports__["default"] = ".d-flex {\n  min-width: 320px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Byb2pldG9zL2M6XFxQcm9qZXRvc1xccG9ydGlmb2xpb1xcc3JjXFxhcHBcXHNoYXJlZC8uLlxccHJvamV0b3NcXHByb2pldG9zLmNvbXBvbmVudC5zY3NzIiwiLi4vcHJvamV0b3MvcHJvamV0b3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6Ii4uL3Byb2pldG9zL3Byb2pldG9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmQtZmxleCB7XHJcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xyXG59XHJcbiIsIi5kLWZsZXgge1xuICBtaW4td2lkdGg6IDMyMHB4O1xufSJdfQ== */";
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
  "./src/app/shared/AppReadyEvent.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/AppReadyEvent.ts ***!
    \*****************************************/

  /*! exports provided: AppReadyEvent */

  /***/
  function srcAppSharedAppReadyEventTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppReadyEvent", function () {
      return AppReadyEvent;
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


    var _services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/message.service */
    "./src/app/shared/services/message.service.ts");

    var AppReadyEvent =
    /*#__PURE__*/
    function () {
      function AppReadyEvent(messageService) {
        _classCallCheck(this, AppReadyEvent);

        this.messageService = messageService;
        this.hasBeenTriggered = false;
      } // ---
      // PUBLIC METHODS.
      // ---
      // I emit the 'appready' event outside of the Angular application.


      _createClass(AppReadyEvent, [{
        key: "trigger",
        value: function trigger() {
          if (this.hasBeenTriggered) {
            return;
          }

          this.hasBeenTriggered = true;
          this.messageService.send('appready');
        }
      }]);

      return AppReadyEvent;
    }();

    AppReadyEvent.ctorParameters = function () {
      return [{
        type: _services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]
      }];
    };

    AppReadyEvent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AppReadyEvent);
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
      nome: 'Meu Portfólio',
      descricao: 'Esse projeto é o site que você está vendo. ' + 'Nele tentei aplicar a maioria das coisas que eu aprendi nos meus primeiros 6 meses.',
      detalhes: ['Angular', 'Sass', 'Animações com CSS', 'Responsividade para mobile', 'Manipulação do DOM com Renderer2 do Angular', 'Interfaces com Typescript', 'Pre-Bootstrap Loading'],
      github: 'https://github.com/arachnidiskandar/SourceCodePortifolio',
      linkImage: '../../assets/images/img_proj.png'
    }, {
      nome: 'Produtores Consumidores',
      descricao: 'Trabalho de sistemas operacionais feito em python para resolver o problema "Produtores e Consumidores"',
      detalhes: ['Gerenciamento de múltiplas threads do processador', 'Programação orientada a objetos', 'Gerenciamento de concorrência de variáveis'],
      github: 'https://www.github.com/arachnidiskandar/ProdutoresConsumidores',
      linkImage: '../../assets/images/img_python.png'
    }, {
      nome: 'Loja virtual básica',
      descricao: 'Trabalho da cadeira de Web II. Foi nesse projeto que eu aprendi o básico de Git trabalhando em grupo.',
      detalhes: ['HTML/CSS/Javascript', 'PHP', 'Gerenciamento de Cógido com Git', 'Manipulação do DOM com Vanilla JS'],
      github: 'https://github.com/MiguelRebelatto/LojaWebll'
    }, {
      nome: 'Algoritmo Busca DFS',
      descricao: 'Implementação do algoritmo de Busca DFS em javascript para o trabalho de Inteligência Artificial.',
      detalhes: ['Vanilla JS', 'Algoritmo de Busca'],
      github: 'https://github.com/arachnidiskandar/BuscaDFS',
      linkImage: '../../assets/images/img_js.png'
    }];
    /***/
  },

  /***/
  "./src/app/shared/services/message.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/services/message.service.ts ***!
    \****************************************************/

  /*! exports provided: MessageService */

  /***/
  function srcAppSharedServicesMessageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageService", function () {
      return MessageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MessageService =
    /*#__PURE__*/
    function () {
      function MessageService() {
        _classCallCheck(this, MessageService);
      } // ---
      // PUBLIC METHODS.
      // ---
      // I send messages outside of the current Angular application to the parent window.


      _createClass(MessageService, [{
        key: "send",
        value: function send(message) {
          window.postMessage(message, this.getOriginForSelf());
        } // ---
        // PRIVATE METHODS.
        // ---
        // I calculate the postMessage() origin that will lock the message target down to
        // the current window (for tightest security).
        // --
        // NOTE: Technically, this isn't really necessary since we know that we're only
        // sending messages to the SELF window. But, it's a good practice to always provide
        // an explicit origin value.

      }, {
        key: "getOriginForSelf",
        value: function getOriginForSelf() {
          // At this time, if the application is being loaded directly off disk (ie, not
          // being served-up as a web-app), then the origin has to be "*" or the message
          // will be denied by the browser. If you never expect to serve from disk, you can
          // omit this edge-case.
          if (window.location.protocol === 'file:') {
            return '*'; // If the application is being served-up "proper", then let's lock it down to the
            // current origin.
          } else {
            return "".concat(window.location.protocol, "//").concat(window.location.host);
          }
        }
      }]);

      return MessageService;
    }();

    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MessageService);
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
    /*! c:\Projetos\portifolio\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map