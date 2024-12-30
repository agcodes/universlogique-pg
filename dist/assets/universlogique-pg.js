'use strict';



;define("universlogique-pg/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "universlogique-pg/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"universlogique-pg/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  class App extends _application.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);
      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);
      _defineProperty(this, "Resolver", _emberResolver.default);
    }
  }
  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("universlogique-pg/blog/tests/addon.lint-test", [], function () {
  "use strict";

  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  QUnit.module('ESLint | addon');
  QUnit.test('addon/components/news-child-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/news-child-component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/news-component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'addon/components/news-component.js should pass ESLint\n\n2:9 - \'tracked\' is defined but never used. (no-unused-vars)\n3:9 - \'action\' is defined but never used. (no-unused-vars)');
  });
  QUnit.test('addon/components/weather-child-component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'addon/components/weather-child-component.js should pass ESLint\n\n2:9 - \'tracked\' is defined but never used. (no-unused-vars)\n3:9 - \'action\' is defined but never used. (no-unused-vars)');
  });
  QUnit.test('addon/components/weather-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/weather-component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/engine.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/engine.js should pass ESLint\n\n');
  });
  QUnit.test('addon/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/resolver.js should pass ESLint\n\n');
  });
  QUnit.test('addon/routes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/routes.js should pass ESLint\n\n');
  });
});
;define("universlogique-pg/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component/-private/ember-component-manager"eaimeta@70e063a35619d71f
});
;define("universlogique-pg/components/drawing-component", ["exports", "universlogique-pg/services/canvas2d-service", "@glimmer/component", "universlogique-pg/services/animation-service", "universlogique-pg/services/colors-service"], function (_exports, _canvas2dService, _component, _animationService, _colorsService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"universlogique-pg/services/canvas2d-service",0,"@glimmer/component",0,"universlogique-pg/services/animation-service",0,"universlogique-pg/services/colors-service"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  class DrawingComponent extends _component.default {
    constructor(owner, args) {
      super(owner, args);
      _defineProperty(this, "canvasService", null);
      _defineProperty(this, "animationService", null);
      _defineProperty(this, "colorsService", null);
      _defineProperty(this, "fps", 50);
      _defineProperty(this, "width", 400);
      _defineProperty(this, "height", 400);
      _defineProperty(this, "inputData", null);
      this.inputData = args.inputData;
      this.colorsService = new _colorsService.default();
      this.canvasService = new _canvas2dService.default();
    }
    initComponent(idCanvas) {
      this.intervalID = setTimeout(() => {
        this.initRender(idCanvas);
      }, 200);
    }
    initRender(idCanvas) {
      this.canvasService.setContext(idCanvas);
      this.canvasService.setCanvasData(this.width, this.height, 0, 0);
    }
    addMainAnimation(f, fps) {
      this.withAnimation = true;
      this.setAnimationService();
      this.animationService.functions.animation = f;
      if (typeof fps === "number") {
        this.fps = fps;
      }
    }
    setAnimationService() {
      if (this.animationService === null) {
        this.animationService = new _animationService.default();
      }
    }
    startComponentAnimation() {
      this.startMainAnimation(this.fps);
    }
    startMainAnimation(fps_, bFirstDraw, params) {
      this.setAnimationService();
      if (typeof fps_ !== "number") {
        fps_ = this.fps;
      }
      if (typeof bFirstDraw !== "boolean") {
        bFirstDraw = true;
      }
      this.startAnimation(fps_, "animation", bFirstDraw, params);
    }
    startAnimation(fps_, f, bFirstDraw, params) {
      this.animationOn = true;
      this.animationService.startAnimation(fps_, f, bFirstDraw, params);
      return true;
    }
  }
  _exports.default = DrawingComponent;
});
;define("universlogique-pg/components/head-content", ["exports", "@ember/service", "@glimmer/component", "universlogique-pg/templates/head", "@ember/component"], function (_exports, _service, _component, _head, _component2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/service",0,"@glimmer/component",0,"universlogique-pg/templates/head",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  let HeadContent = (_dec = (0, _service.inject)('head-data'), (_class = class HeadContent extends _component.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "model", _descriptor, this);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "model", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = HeadContent;
  (0, _component2.setComponentTemplate)(_head.default, HeadContent);
});
;define("universlogique-pg/components/head-layout", ["exports", "ember-cli-head/components/head-layout"], function (_exports, _headLayout) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _headLayout.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-head/components/head-layout"eaimeta@70e063a35619d71f
});
;define("universlogique-pg/components/link-to-external", ["exports", "ember-engines/components/link-to-external"], function (_exports, _linkToExternal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkToExternal.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-engines/components/link-to-external"eaimeta@70e063a35619d71f
});
;define("universlogique-pg/components/radio-button", ["exports", "ember-radio-buttons/components/radio-button"], function (_exports, _radioButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _radioButton.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-radio-buttons/components/radio-button"eaimeta@70e063a35619d71f
});
;define("universlogique-pg/config/asset-manifest", ["exports", "require", "universlogique-pg/config/environment"], function (_exports, _require, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"require",0,"universlogique-pg/config/environment"eaimeta@70e063a35619d71f
  const modulePrefix = _environment.default.modulePrefix;
  const metaName = `${modulePrefix}/config/asset-manifest`;
  const nodeName = `${modulePrefix}/config/node-asset-manifest`;
  let config = {};
  try {
    // If we have a Node version of the asset manifest, use that for FastBoot and
    // similar environments.
    if (_require.default.has(nodeName)) {
      config = (0, _require.default)(nodeName).default; // eslint-disable-line
    } else {
      const rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
      config = JSON.parse(unescape(rawConfig));
    }
  } catch (err) {
    throw new Error('Failed to load asset manifest. For browser environments, verify the meta tag with name "' + metaName + '" is present. For non-browser environments, verify that you included the node-asset-manifest module.');
  }
  var _default = config;
  _exports.default = _default;
});
;define("universlogique-pg/generative/tests/addon.lint-test", [], function () {
  "use strict";

  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  QUnit.module('ESLint | addon');
  QUnit.test('addon/components/mandelbrot-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/mandelbrot-component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/newton-fractal-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/newton-fractal-component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/engine.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/engine.js should pass ESLint\n\n');
  });
  QUnit.test('addon/object/fractal-parameters.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/object/fractal-parameters.js should pass ESLint\n\n');
  });
  QUnit.test('addon/object/fractal.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/object/fractal.js should pass ESLint\n\n');
  });
  QUnit.test('addon/object/mandelbrot-base.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/object/mandelbrot-base.js should pass ESLint\n\n');
  });
  QUnit.test('addon/object/mandelbrot-functions.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'addon/object/mandelbrot-functions.js should pass ESLint\n\n60:61 - Unnecessary escape character: \\/. (no-useless-escape)');
  });
  QUnit.test('addon/object/mandelbrot-parameters.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/object/mandelbrot-parameters.js should pass ESLint\n\n');
  });
  QUnit.test('addon/object/mandelbrot.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/object/mandelbrot.js should pass ESLint\n\n');
  });
  QUnit.test('addon/object/newton-fractal-functions.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'addon/object/newton-fractal-functions.js should pass ESLint\n\n206:61 - Unnecessary escape character: \\/. (no-useless-escape)');
  });
  QUnit.test('addon/object/newton-fractal-parameters.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'addon/object/newton-fractal-parameters.js should pass ESLint\n\n14:3 - Unexpected console statement. (no-console)');
  });
  QUnit.test('addon/object/newton-fractal.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/object/newton-fractal.js should pass ESLint\n\n');
  });
  QUnit.test('addon/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/resolver.js should pass ESLint\n\n');
  });
  QUnit.test('addon/routes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/routes.js should pass ESLint\n\n');
  });
  QUnit.test('addon/routes/mandelbrot/page.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/routes/mandelbrot/page.js should pass ESLint\n\n');
  });
  QUnit.test('addon/routes/newton-fractal/page.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/routes/newton-fractal/page.js should pass ESLint\n\n');
  });
});
;define("universlogique-pg/helpers/app-version", ["exports", "@ember/component/helper", "universlogique-pg/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"universlogique-pg/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f
  function appVersion(_) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;
    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }
  var _default = (0, _helper.helper)(appVersion);
  _exports.default = _default;
});
;define("universlogique-pg/helpers/format-date", ["exports", "ember-intl/helpers/format-date"], function (_exports, _formatDate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _formatDate.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-intl/helpers/format-date"eaimeta@70e063a35619d71f
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */
});
;define("universlogique-pg/helpers/format-message", ["exports", "ember-intl/helpers/format-message"], function (_exports, _formatMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _formatMessage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-intl/helpers/format-message"eaimeta@70e063a35619d71f
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */
});
;define("universlogique-pg/helpers/format-number", ["exports", "ember-intl/helpers/format-number"], function (_exports, _formatNumber) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _formatNumber.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-intl/helpers/format-number"eaimeta@70e063a35619d71f
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */
});
;define("universlogique-pg/helpers/format-relative", ["exports", "ember-intl/helpers/format-relative"], function (_exports, _formatRelative) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _formatRelative.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-intl/helpers/format-relative"eaimeta@70e063a35619d71f
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */
});
;define("universlogique-pg/helpers/format-time", ["exports", "ember-intl/helpers/format-time"], function (_exports, _formatTime) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _formatTime.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-intl/helpers/format-time"eaimeta@70e063a35619d71f
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */
});
;define("universlogique-pg/helpers/t", ["exports", "ember-intl/helpers/t"], function (_exports, _t) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _t.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-intl/helpers/t"eaimeta@70e063a35619d71f
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */
});
;define("universlogique-pg/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "universlogique-pg/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"universlogique-pg/config/environment"eaimeta@70e063a35619d71f
  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }
  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("universlogique-pg/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-resolver/resolvers/classic/container-debug-adapter"eaimeta@70e063a35619d71f
  var _default = {
    name: 'container-debug-adapter',
    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }
  };
  _exports.default = _default;
});
;define("universlogique-pg/initializers/ember-engines-router-service", ["exports", "ember-engines-router-service/initializers/ember-engines-router-service.js"], function (_exports, _emberEnginesRouterService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberEnginesRouterService.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-engines-router-service/initializers/ember-engines-router-service.js"eaimeta@70e063a35619d71f
});
;define("universlogique-pg/initializers/engines", ["exports", "ember-engines/initializers/engines"], function (_exports, _engines) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _engines.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function () {
      return _engines.initialize;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-engines/initializers/engines"eaimeta@70e063a35619d71f
});
;define("universlogique-pg/initializers/export-application-global", ["exports", "ember", "universlogique-pg/config/environment"], function (_exports, _ember, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;
  0; //eaimeta@70e063a35619d71f0,"ember",0,"universlogique-pg/config/environment"eaimeta@70e063a35619d71f
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }
      var value = _environment.default.exportApplicationGlobal;
      var globalName;
      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }
      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }
  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("universlogique-pg/instance-initializers/head-browser", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  var _default = {
    name: 'head-browser',
    initialize() {
      // do nothing!
      // this functionality has been moved into addon/components/head-layout.js
      // This is only here in order to not break existing addons relying on this, e.g. ember-page-title.
    }
  };
  _exports.default = _default;
});
;define("universlogique-pg/instance-initializers/load-asset-manifest", ["exports", "universlogique-pg/config/asset-manifest"], function (_exports, _assetManifest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;
  0; //eaimeta@70e063a35619d71f0,"universlogique-pg/config/asset-manifest"eaimeta@70e063a35619d71f
  /**
   * Initializes the AssetLoader service with a generated asset-manifest.
   */
  function initialize(instance) {
    const service = instance.lookup('service:asset-loader');
    service.pushManifest(_assetManifest.default);
  }
  var _default = {
    name: 'load-asset-manifest',
    initialize
  };
  _exports.default = _default;
});
;define("universlogique-pg/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/did-insert"eaimeta@70e063a35619d71f
});
;define("universlogique-pg/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/did-update"eaimeta@70e063a35619d71f
});
;define("universlogique-pg/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/will-destroy"eaimeta@70e063a35619d71f
});
;define("universlogique-pg/object/canvas/canvas-data-32", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  class CanvasData32 {
    constructor() {
      this.isLittleEndian = false;
      this.buf8 = null;
      this.data = null;
      this.w = 0;
      this.h = 0;
      this.offSet = 0;
    }
    getImageData(imagedata) {
      imagedata.data.set(this.buf8);
    }
    initialize(imagedata, w, h, offSet) {
      this.w = w;
      this.h = h;
      this.offSet = offSet;
      // new buffer
      const buffer = new ArrayBuffer(imagedata.data.length);

      // Uint8ClampedArray (imagedata.data)
      this.buf8 = new Uint8ClampedArray(buffer);
      // writing object
      this.data = new Uint32Array(buffer);

      // Determine whether Uint32 is little- or big-endian.
      this.data[1] = 0x0a0b0c0d;
      this.isLittleEndian = true;
      if (buffer[4] === 0x0a && buffer[5] === 0x0b && buffer[6] === 0x0c && buffer[7] === 0x0d) {
        this.isLittleEndian = false;
      }
    }
    addBackgroundInImageData(color) {
      if (color === null) {
        return false;
      }
      if (typeof color[3] !== "number") {
        // alpha by default
        color[3] = 255;
      }
      const valColor = this.isLittleEndian ? color[3] << 24 |
      // alpha
      color[2] << 16 |
      // blue
      color[1] << 8 |
      // green
      color[0] : color[0] << 24 |
      // red
      color[1] << 16 |
      // green
      color[2] << 8 |
      // blue
      color[3]; // alpha;

      for (let index = 0; index < this.data.length; index++) {
        this.data[index] = valColor;
      }
      return true;
    }
    addPointsInData(pts, color, size) {
      if (pts === null || typeof pts !== 'object') {
        return false;
      }
      for (let i = 0; i < pts.length; i++) {
        if (pts[i]) {
          if (pts[i][3]) {
            this.addOnePointInData(pts[i], pts[i][3], size);
          } else {
            this.addOnePointInData(pts[i], color, size);
          }
        }
      }
      return true;
    }
    addBackgroundInDrawingArea(color, w, h, x1, y1) {
      for (let indexY = y1; indexY < h; indexY++) {
        for (let indexX = x1; indexX < w; indexX++) {
          this.addOnePointInData([indexX, indexY], color, 1);
        }
      }
    }
    addOnePointInData(pt, color, size) {
      if (color === null) {
        return false;
      }
      let x = Math.floor(pt[0]);
      let y = Math.floor(pt[1]);
      if (size > 1) {
        if (size === 2) {
          x -= 1;
          y -= 1;
        } else if (size % 2 === 0) {
          x -= size / 2;
          y -= size / 2;
        } else {
          x -= (size - 1) / 2;
          y -= (size - 1) / 2;
        }
      }
      for (let indexY = 0; indexY < size; indexY++) {
        for (let indexX = 0; indexX < size; indexX++) {
          if (x < 0) {
            return false;
          }
          if (y < 0) {
            return false;
          }
          if (x + 1 > this.w) {
            return false;
          }
          if (y + 1 > this.h) {
            return false;
          }
          const k = y * this.w + x;
          if (k >= 0 && k <= this.data.length) {
            if (typeof color[3] !== 'number' || color[3] === Infinity || color[3] > 255) {
              color[3] = 255; // default alpha
            }

            if (this.isLittleEndian === true) {
              this.data[k] = Math.round(color[3]) << 24 |
              // alpha
              Math.round(color[2]) << 16 |
              // blue
              Math.round(color[1]) << 8 |
              // green
              Math.round(color[0]); // red
            } else {
              this.data[k] = Math.round(color[0]) << 24 |
              // red
              Math.round(color[1]) << 16 |
              // green
              Math.round(color[2]) << 8 |
              // blue
              Math.round(color[3]); // alpha
            }
          }

          x++;
        }
        y++;
      }
      return true;
    }
  }
  _exports.default = CanvasData32;
});
;define("universlogique-pg/object/math/CComplex", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  /*
   * https://github.com/justinlubin/newton-js
   * https://github.com/infusion/Complex.js/blob/master/complex.js
   */
  class CComplex {
    // a + bi
    constructor(a, b, c) {
      this.a = a; // r real
      this.b = b; // i imaginary
      this.c = typeof c === "number" ? c : 0; // add "3rd dimension" for fun
      this.square = 0;
    }
    setSquare() {
      this.square = this.squaresSum();
      return this.square;
    }
    getArgument() {
      return Math.atan2(this.b, this.a);
    }
    squaresSum() {
      return this.a * this.a + this.b * this.b;
    }
    getMagnitude() {
      return Math.sqrt(this.squaresSum());
    }
    signR() {
      if (this.a < 0) {
        return -1;
      }
      if (this.a === 0) {
        return 0;
      }
      if (this.a > 0) {
        return 1;
      }
    }
    addReal(r) {
      return new CComplex(this.a + r, this.b, this.c);
    }
    addImg(i) {
      return new CComplex(this.a, this.b + i, this.c);
    }
    add(c) {
      return new CComplex(this.a + c.a, this.b + c.b, this.c + c.c);
    }
    sub(c) {
      return new CComplex(this.a - c.a, this.b - c.b, this.c - c.c);
    }
    mul(z) {
      return new CComplex(this.a * z.a - this.b * z.b, this.b * z.a + this.a * z.b, this.c);
    }
    mulReal(r) {
      return new CComplex(this.a * r, this.b * r, this.c * r);
    }
    div(z) {
      const denominator = z.a * z.a + z.b * z.b + z.c * z.c;
      return new CComplex((this.a * z.a + this.b * z.b) / denominator, (this.b * z.a - this.a * z.b) / denominator, this.c);
    }
    inverse() {
      this.setSquare();
      const c1 = new CComplex(1, 0, 0);
      const denominator = this.square + this.c * this.c;
      return new CComplex((c1.a * this.a + c1.b * this.b) / denominator, (c1.b * this.a - c1.a * this.b) / denominator);
    }
    iAbs() {
      return new CComplex(this.a, Math.abs(this.b), this.c);
    }
    rAbs() {
      return new CComplex(Math.abs(this.a), this.b, this.c);
    }
    abs() {
      return new CComplex(Math.abs(this.a), Math.abs(this.b), Math.abs(this.c));
    }
    opposite() {
      return new CComplex(-this.a, -this.b, -this.c);
    }
    conjugate() {
      return new CComplex(this.a, -this.b, this.c);
    }
    pow(n) {
      if (typeof this.c === "number" && this.c !== 0) {
        // handle 3rd dimension if defined
        if (n > 1 && n % 2 === 0) {
          return this.pow3d(n);
        }
      }
      switch (n) {
        case 0:
          return new CComplex(1, 0, 0);
        case 1:
          return new CComplex(this.a, this.b, this.c);
        case 2:
          return new CComplex(
          // a2 – b2
          this.a * this.a - this.b * this.b,
          // (2ab)
          2 * this.a * this.b);
        case 3:
          return new CComplex(
          //  a3 – 3ab2
          Math.pow(this.a, 3) - 3 * this.a * this.b * this.b,
          // (3a2b – b3)
          3 * this.a * this.a * this.b - Math.pow(this.b, 3));
        case 4:
          return new CComplex(
          //  a4 – 6a2b2 + b4
          Math.pow(this.a, 4) - 6 * this.a * this.a * this.b * this.b + Math.pow(this.b, 4),
          // (4a3b – 4ab3)
          4 * Math.pow(this.a, 3) * this.b - 4 * this.a * Math.pow(this.b, 3));
        default:
      }

      // generic formula
      const arg = this.getArgument();
      const magnitude = this.getMagnitude();
      return new CComplex(Math.cos(n * arg) * Math.pow(magnitude, n), Math.sin(n * arg) * Math.pow(magnitude, n));
    }
    pow3d(n) {
      let z = new CComplex(this.a, this.b, this.c);
      for (let j = 0; j < n / 2; j++) {
        // z*z
        z = z.square3d();
      }
      return z;
    }
    square3d() {
      this.setSquare();
      return new CComplex((this.square - this.c * this.c) * (this.a * this.a - this.b * this.b) / this.square, 2 * (this.square - this.c * this.c) * this.a * this.b / this.square, -2 * this.c * Math.sqrt(this.square));
    }
    isZero() {
      return this.b === 0 && this.a === 0;
    }
    getC(f) {
      switch (f) {
        case '':
        case '0':
          return this;
        case 'rAbs':
          return this.rAbs();
        case 'iAbs':
          return this.rAbs();
        case 'abs':
          return this.abs();
        case 'inverse':
          return this.inverse();
        case 'conjugate':
          return this.conjugate();
        case 'opposite':
          return this.opposite();
        case 'sin':
          return this.sin();
        case 'cos':
          return this.cos();
        case 'cosh':
          return this.cosh();
        case 'sinh':
          return this.sinh();
        case 'tan':
          return this.tan();
        case 'tanh':
          return this.tanh();
        case 'cot':
          return this.cot();
        case 'coth':
          return this.coth();
        case 'sec':
          return this.sec();
        case 'sech':
          return this.sech();
        case 'csc':
          return this.csc();
        case 'csch':
          return this.csch();
        case 'atan':
          return this.atan();
        case 'acos':
          return this.acos();
        case 'acosh':
          return this.acosh();
        case 'acot':
          return this.acot();
        case 'acoth':
          return this.acoth();
        case 'asin':
          return this.asin();
        case 'asinh':
          return this.asinh();
        case 'asec':
          return this.asec();
        case 'asech':
          return this.asech();
        case 'acsc':
          return this.acsc();
        case 'log':
          return this.log();
        case 'ln':
          return this.ln();
        case 'sqrt':
          return this.sqrt();
        case 'cosCoshSinSinh':
          return this.cosCoshSinSinh();
        case 'cosCoshSinSinh2':
          return this.cosCoshSinSinh2();
        case 'squareDiv':
          return this.squareDiv();
        case 'squareTan':
          return this.squareTan();
        case 'squareAtan':
          return this.squareAtan();
        case 'expDiv':
          return this.expDiv();
        case 'expDivSinh':
          return this.expDivSinh();
        default:
          return this;
      }
    }
    transform(args) {
      if (args === null || args.length === 0) {
        return this;
      }
      this.a += args[0];
      if (args.length == 1) {
        return this;
      }
      this.b += args[1];
      if (args.length == 2) {
        return this;
      }
      this.c += args[2];
      if (args.length == 3) {
        return this;
      }
      if (args.length > 3) {
        this.a *= args[3];
      }
      if (args.length > 4) {
        this.b *= args[4];
      }
      if (args.length > 5) {
        this.c *= args[5];
      }
      return this;
    }
    sqrt() {
      const d = Math.sqrt(this.squaresSum());
      const a = Math.sqrt((d + this.a) / 2);
      const b = d / Math.abs(d) * Math.sqrt((d - this.a) / 2);
      return new CComplex(a, b);
    }
    log() {
      return new CComplex(this.logHypot(this.a, this.b), Math.atan2(this.b, this.a));
    }
    logHypot(a, b) {
      const _a = Math.abs(a);
      const _b = Math.abs(b);
      if (a === 0) {
        return Math.log(_b);
      }
      if (b === 0) {
        return Math.log(_a);
      }
      if (_a < 3000 && _b < 3000) {
        return Math.log(a * a + b * b) * 0.5;
      }
      return Math.log(a / Math.cos(Math.atan2(b, a)));
    }
    sin() {
      // sin(a).cosh(b)+i cos(a).sinh(b)
      return new CComplex(Math.cosh(this.b) * Math.sin(this.a), Math.sinh(this.b) * Math.cos(this.a));
    }
    sinh() {
      // sinh(a+bi)=sinh(a).cos(b)+i cosh(a).sin(b)
      return new CComplex(Math.sinh(this.a) * Math.cos(this.b), Math.cosh(this.a) * Math.sin(this.b));
    }
    cos() {
      // cos(a).cosh(b) − i sin(a).sinh(b)
      return new CComplex(Math.cosh(this.b) * Math.cos(this.a), -Math.sinh(this.b) * Math.sin(this.a));
    }
    cosh() {
      // cosh(a+bi)=cosh(a).cos(b) + i sinh(a).sin(b)
      return new CComplex(Math.cosh(this.a) * Math.cos(this.b), Math.sinh(this.a) * Math.sin(this.b));
    }
    tan() {
      const d = Math.cos(2 * this.a) + Math.cosh(2 * this.b);
      return new CComplex(Math.sin(2 * this.a) / d, Math.sinh(2 * this.b) / d);
    }
    tanh() {
      const d = Math.cosh(2 * this.a) + Math.cos(2 * this.b);
      return new CComplex(Math.sinh(2 * this.a) / d, Math.sin(2 * this.b) / d);
    }
    cot() {
      // cot(c) = i(e^(ci) + e^(-ci)) / (e^(ci) - e^(-ci))
      const d = Math.cos(2 * this.a) - Math.cosh(2 * this.b);
      return new CComplex(-Math.sin(2 * this.a) / d, Math.sinh(2 * this.b) / d);
    }
    coth() {
      const d = Math.cosh(2 * this.a) - Math.cos(2 * this.b);
      return new CComplex(Math.sinh(2 * this.a) / d, -Math.sin(2 * this.b) / d);
    }
    sec() {
      // (cos(a).cosh(b) + i sin(a).sinh(b)) / cos2(a).cosh2(b)+sin2(a).sinh2(b)
      const d = 0.5 * Math.cosh(2 * this.b) + 0.5 * Math.cos(2 * this.a);
      return new CComplex(Math.cos(this.a) * Math.cosh(this.b) / d, Math.sin(this.a) * Math.sinh(this.b) / d);
    }
    sech() {
      const d = Math.cos(2 * this.b) + Math.cosh(2 * this.a);
      return new CComplex(2 * Math.cosh(this.a) * Math.cos(this.b) / d, -2 * Math.sinh(this.a) * Math.sin(this.b) / d);
    }
    csc() {
      const d = 0.5 * Math.cosh(2 * this.b) - 0.5 * Math.cos(2 * this.a);
      return new CComplex(Math.sin(this.a) * Math.cosh(this.b) / d, -Math.cos(this.a) * Math.sinh(this.b) / d);
    }
    csch() {
      const d = Math.cos(2 * this.b) - Math.cosh(2 * this.a);
      return new CComplex(-2 * Math.sinh(this.a) * Math.cos(this.b) / d, 2 * Math.cosh(this.a) * Math.sin(this.b) / d);
    }
    acos() {
      const t1 = new CComplex(this.b * this.b - this.a * this.a + 1, -2 * this.a * this.b).pow(1 / 2);
      const t2 = new CComplex(t1.a - this.b, t1.b + this.a).log();
      return new CComplex(Math.PI / 2 - t2.b, t2.a);
    }
    acosh() {
      let res = this.acos();
      let tmp = 0;
      if (res.b <= 0) {
        tmp = res.a;
        res.a = -res.b;
        res.b = tmp;
      } else {
        tmp = res.b;
        res.b = -res.a;
        res.a = tmp;
      }
      return res;
    }
    asinh() {
      let tmp = this.b;
      this.b = -this.a;
      this.a = tmp;
      let res = this.asin();
      this.a = -this.b;
      this.b = tmp;
      tmp = res.a;
      res.a = -res.b;
      res.b = tmp;
      return res;
    }
    acoth() {
      if (this.a === 0 && this.b === 0) {
        return new CComplex(0, Math.PI / 2);
      }
      if (this.setSquare() === 0) {
        return new CComplex(Infinity, Infinity);
      }
      return new CComplex(this.a / this.square, -this.b / this.square).atanh();
    }
    acsch() {
      if (this.b === 0) {
        return new CComplex(this.a !== 0 ? Math.log(this.a + Math.sqrt(this.a * this.a + 1)) : Infinity, 0);
      }
      if (this.setSquare() === 0) {
        return new CComplex(Infinity, Infinity);
      }
      return new CComplex(this.a / this.square, -this.b / this.square).asinh();
    }
    asech() {
      if (this.setSquare() === 0) {
        return new CComplex(Infinity, Infinity);
      }
      return new CComplex(this.a / this.square, -this.b / this.square).acosh();
    }
    asin() {
      // asin(c) = -i * log(ci + sqrt(1 - c^2))

      let t1 = new CComplex(this.b * this.b - this.a * this.a + 1, -2 * this.a * this.b).pow(1 / 2);
      let t2 = new CComplex(t1.a - this.b, t1.b + this.a).log();
      return new CComplex(t2.b, -t2.a);
    }
    acot() {
      if (this.setSquare() === 0) {
        return new CComplex(Math.atan2(1, this.a), 0);
      }
      return new CComplex(this.a / this.square, -this.b / this.square).atan();
    }
    asec() {
      if (this.setSquare() === 0) {
        return new CComplex(0, Infinity);
      }
      return new CComplex(this.a / this.square, -this.b / this.square).acos();
    }
    acsc() {
      if (this.setSquare() === 0) {
        return new CComplex(Math.PI / 2, Infinity);
      }
      return new CComplex(this.a / this.square, -this.b / this.square).asin();
    }
    atan() {
      if (this.a === 0) {
        if (this.b === 1) {
          return new CComplex(0, Infinity);
        }
        if (this.b === -1) {
          return new CComplex(0, -Infinity);
        }
      }
      const d = this.a * this.a + (1.0 - this.b) * (1.0 - this.b);
      const t1 = new CComplex((1 - this.b * this.b - this.a * this.a) / d, -2 * this.a / d).log();
      return new CComplex(-0.5 * t1.b, 0.5 * t1.a);
    }
    ln() {
      this.setSquare();
      //0.5 * ln(x² + y²) + 
      // i atan(x / y)
      return new CComplex(0.5 * Math.log10(this.square), Math.atan(this.a / this.b));
    }
    cosCoshSinSinh2() {
      return new CComplex(Math.cosh(this.b) * Math.sin(this.a), -Math.sinh(this.b) * Math.cos(this.a), 0);
    }
    cosCoshSinSinh() {
      return new CComplex(Math.cosh(-this.b) * Math.cos(this.a), Math.sinh(-this.b) * Math.sin(this.a), 0);
    }
    expDiv() {
      return new CComplex(0.5 * Math.exp(this.squaresSum()), this.a / this.b, 0);
    }
    expDivSinh() {
      return new CComplex(0.5 * Math.exp(this.squaresSum()), Math.sinh(this.a / this.b), 0);
    }
    squareDiv() {
      return new CComplex(this.squaresSum(), this.a / this.b, 0);
    }
    squareAtan() {
      return new CComplex(this.squaresSum(), Math.atan(this.a / this.b), 0);
    }
    squareTan() {
      return new CComplex(this.squaresSum(), Math.tan(this.a / this.b), 0);
    }
  }
  _exports.default = CComplex;
});
;define("universlogique-pg/router", ["exports", "@ember/routing/router", "universlogique-pg/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"universlogique-pg/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  class Router extends _router.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "location", _environment.default.locationType);
      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }
  }
  _exports.default = Router;
  Router.map(function () {
    // engine blog
    this.mount('blog');
    this.mount('generative');
    this.route('ember');
  });
});
;define("universlogique-pg/routes/page", ["exports", "@ember/routing/route", "fetch"], function (_exports, _route, _fetch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"fetch"eaimeta@70e063a35619d71f
  var _default = _route.default.extend({
    async getData(folder, params) {
      const pageUrl = '/data/' + folder + '/data-' + params.id + '.json ';
      const response = await (0, _fetch.default)(pageUrl);
      const data = await response.json();
      console.log(data);
      return data;
    }
  });
  _exports.default = _default;
});
;define("universlogique-pg/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-ajax/services/ajax"eaimeta@70e063a35619d71f
});
;define("universlogique-pg/services/animation-service", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  class AnimationService {
    constructor() {
      _defineProperty(this, "id", 0);
      _defineProperty(this, "fpsInterval", 0);
      _defineProperty(this, "startAnimationTime", null);
      _defineProperty(this, "startFrameTime", null);
      _defineProperty(this, "time2", null);
      _defineProperty(this, "elapsedTime", 0);
      _defineProperty(this, "sumTime", 0);
      _defineProperty(this, "hits", 0);
      _defineProperty(this, "animationRunning", false);
      _defineProperty(this, "animationEnd", true);
      _defineProperty(this, "functions", null);
      this.initialize();
    }
    initialize() {
      this.id = 0;
      this.fpsInterval = 0;
      this.sumTime = 0;
      this.hits = 0;
      this.startAnimationTime = null;
      this.startFrameTime = null;
      this.animationRunning = false;
      this.animationEnd = true;
      this.functions = [];
      this.animationParams = {};
    }
    stopAnimationRunning() {
      this.setAnimationRunning(false);
    }
    getAnimationEnd() {
      return this.animationEnd;
    }
    /**
     * 
     * @param {type} b
     * @returns {boolean}
     */
    setAnimationEnd(b) {
      if (b === true) {
        this.animationRunning = false;
      }
      this.animationEnd = b;
    }
    /**
     * 
     * @param {type} b
     * @returns {boolean}
     */
    setAnimationRunning(b) {
      if (b === true) {
        this.animationEnd = false;
      }
      this.animationRunning = b;
      return b;
    }
    /**
     * 
     * @returns {type}
     */
    getAnimationRunning() {
      return this.animationRunning;
    }
    startAnimation(fps, f, bFirstDraw, params) {
      this.bRafSupport = this.testRafSupport();
      if (typeof this.functions[f] !== 'function') {
        this.setAnimationEnd(true);
        return false;
      }
      this.id = Date.now() + '_' + Math.floor(Math.random() * 10000000);
      if (params === null || typeof params !== 'object') {
        params = {};
      }
      params.i = 0;
      if (bFirstDraw === true) {
        this.functions[f](params);
        params.i++;
      }
      this.fpsInterval = 1000 / fps;
      this.startFrameTime = Date.now();
      this.setAnimationRunning(true);
      this.animationEnd = false;
      this.startAnimationTime = new Date();
      if (this.bRafSupport === true) {
        this.animateWithRaf(f, params, this.id, 1);
      } else {
        this.animateWithTimeOut(f, this, this.fpsInterval, params, this.id);
      }
    }
    getFpsRate() {
      return Math.round(this.hits / (new Date() - this.startAnimationTime) / 1000);
    }
    getAnimationTime() {
      return Math.round((new Date() - this.startAnimationTime) / 1000);
    }
    /**
     * 
     * @returns {Boolean}
     */
    ctrlFps() {
      // calc elapsed time since last loop
      const currentTime = Date.now();
      this.elapsedTime = currentTime - this.startFrameTime;
      if (this.elapsedTime > this.fpsInterval) {
        // Get ready for next frame by setting then=now, but...
        // Also, adjust for fpsInterval not being multiple of 16.67
        this.startFrameTime = currentTime - this.elapsedTime % this.fpsInterval;
        return true;
      }
      return false;
    }
    animateWithRaf(f, params, id, indice) {
      if (indice !== 1 && this.animationEnd === true) {
        return false;
      }
      if (this.id !== id) {
        // if id has changed
        return false;
      }
      if (this.requestAnimationFrame_(() => this.animateWithRaf(f, params, id)) < 0) {
        return false;
      }
      if (this.animationEnd === true) {
        return false;
      }
      if (this.animationRunning === true) {
        if (this.ctrlFps() === true) {
          this.hits++;
          // execute function
          if (this.functions[f](params) === false) {
            // function return false, stop animation
            this.setAnimationEnd(true);
            return false;
          }
          params.i++;
        }
      }
      return true;
    }
    /**
     * 
     * @param {type} f
     * @returns {Number|Window.webkitRequestAnimationFrame|window.webkitRequestAnimationFrame}
     */
    requestAnimationFrame_(f) {
      try {
        return window.requestAnimationFrame(f) || window.mozRequestAnimationFrame(f) || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame(f) || window.msRequestAnimationFrame(f) || null;
      } catch (err) {
        return -1;
      }
    }
    /**
     * 
     * @param {type} f_
     * @param {type} that_
     * @param {type} t_
     * @param {type} params_
     * @param {type} id_
     * @returns {Boolean}
     */
    animateWithTimeOut(f_, that_, t_, params_, id_) {
      if (typeof f_ === 'function') {
        that_.animationParams.f = f_;
        that_.animationParams.t = t_;
        that_.animationParams.params = params_;
        that_.animationParams.id_ = id_;
        window.that = that_;
      }
      if (window.that.getAnimationRunning() === true) {
        // execute function
        if (window.that.functions[window.that.animationParams.f](window.that.animationParams.params) === false) {
          window.that.stopAnimationRunning(true);
          return false;
        } else {
          window.that.animationParams.params.i++;
          setTimeout(window.that.animateWithTimeOut, window.that.animationParams.t);
        }
      } else {
        return false;
      }
    }

    /**
     * 
     * * 
     * @returns {Boolean}
     */
    testRafSupport() {
      let rafTest = null;
      try {
        rafTest = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null;
      } catch (err) {
        return false;
      }
      if (rafTest === null) {
        // animation frame not available
        return false;
      }

      // test
      return this.requestAnimationFrame_(function () {}) !== -1;
    }
  }
  _exports.default = AnimationService;
});
;define("universlogique-pg/services/asset-loader", ["exports", "ember-asset-loader/services/asset-loader"], function (_exports, _assetLoader) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _assetLoader.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-asset-loader/services/asset-loader"eaimeta@70e063a35619d71f
});
;define("universlogique-pg/services/canvas2d-service", ["exports", "universlogique-pg/object/canvas/canvas-data-32"], function (_exports, _canvasData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"universlogique-pg/object/canvas/canvas-data-32"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  class Canvas2dService {
    constructor() {
      _defineProperty(this, "canvasData", null);
      _defineProperty(this, "imageData", null);
      _defineProperty(this, "offSet", null);
      _defineProperty(this, "limitWidth", 0);
      _defineProperty(this, "limitHeight", 0);
      _defineProperty(this, "centerAbs", true);
      _defineProperty(this, "margin", null);
      _defineProperty(this, "grad", null);
      _defineProperty(this, "ptMin", null);
      _defineProperty(this, "ptMax", null);
    }
    setContext(idCanvas) {
      this.canvasElement = document.getElementById(idCanvas);
      this.context = null;
      this.offSet = [0, 0, 0];
      if (this.canvasElement) {
        this.context = this.canvasElement.getContext('2d');
        return !this.context;
      }
    }
    initialize() {
      this.ptMax = [this.width, this.height, 0];
      this.ptMin = [0, 0, 0];
      this.margin = [0, 0, 0];
      this.offSet = [0, 0, 0];
      this.grad = [1, 1, 1];
      this.paramsDefined = false;
      this.signedCoord = false;
    }
    setCanvasData(w, h, x, y) {
      this.width = w;
      this.height = h;
      this.limitWidth = w;
      this.limitHeight = h;
      this.imagedata = this.context.createImageData(w, h);
      this.canvasData = new _canvasData.default();
      this.canvasData.initialize(this.imagedata, w, h, [x, y]);
      this.canvasData.getImageData(this.imagedata);
    }
    addBackgroundInImageData(color) {
      if (color === null) {
        return false;
      }
      return this.canvasData.addBackgroundInImageData(color);
    }
    addPointsInData(pts, color, size) {
      if (pts === null || pts.length === 0) {
        return false;
      }
      if (this.canvasData === null) {
        return false;
      }
      if (typeof size === "undefined") {
        size = 1;
      }
      return this.canvasData.addPointsInData(pts, color, size);
    }
    updateImageData(pts, color, size) {
      if (pts === null) {
        return false;
      }
      if (this.canvasData === null) {
        return false;
      }
      this.canvasData.addPointsInData(pts, color, size);
      return this.putImageData(0, 0);
    }
    putImageData(x0, y0, w, h) {
      this.canvasData.getImageData(this.imagedata);
      if (x0 > this.imagedata.width) {
        return false;
      }
      if (y0 > this.imagedata.height) {
        return false;
      }
      if (typeof w !== "number") {
        this.context.putImageData(this.imagedata, x0, y0);
      } else {
        if (w - x0 > this.imagedata.width) {
          w = this.imagedata.width - x0;
        }
        if (h - y0 > this.imagedata.height) {
          h = this.imagedata.height - y0;
        }
        this.context.putImageData(this.imagedata, x0, y0, x0, y0, w, h);
      }
      return true;
    }
    defGrid(pts, w, h, coefMargin) {
      if (coefMargin === null || typeof coefMargin !== "object") {
        coefMargin = [0, 0, 0];
      }
      let is3D = false;
      this.initialize();
      if (pts === null || typeof pts !== "object") {
        return false;
      }
      if (pts.length === 0) {
        return false;
      }
      this.ptMax = this.getMaxOfPts(pts, this.signedCoord);
      this.ptMin = this.getMinOfPts(pts);

      // X
      this.margin[0] = Math.round(w * coefMargin[0]);
      if (this.ptMax[0] - this.ptMin[0] !== 0) {
        this.grad[0] = (w - this.margin[0] * 2) / (this.ptMax[0] - this.ptMin[0]);
      }

      // Y
      this.margin[1] = Math.round(h * coefMargin[1]);
      if (this.ptMax[1] - this.ptMin[1] !== 0) {
        this.grad[1] = (h - this.margin[1] * 2) / (this.ptMax[1] - this.ptMin[1]);
      }

      // Z
      this.margin[2] = Math.round(h * coefMargin[2]);
      if (is3D && this.ptMax[2] - this.ptMin[2] !== 0) {
        this.grad[2] = (h - this.margin[2] * 2) / (this.ptMax[2] - this.ptMin[2]);
      }
      this.paramsDefined = true;
      return true;
    }
    getMinOfPts(pts) {
      let ptMin = [0, 0, 0];
      for (let i = 0, n = pts.length; i < n; i++) {
        if (this.isSet(pts[i])) {
          for (let index = 0; index < 3; index++) {
            if (this.isSet(pts[i][index]) && (i === 0 || pts[i][index] < ptMin[index]) && isFinite(pts[i][index])) {
              ptMin[index] = pts[i][index];
            }
          }
        }
      }
      return ptMin;
    }
    getMaxOfPts(pts, abs) {
      let ptMax = [0, 0, 0, null];
      if (abs === false) {
        for (let i = 0, n = pts.length; i < n; i++) {
          if (this.isSet(pts[i])) {
            for (let index = 0; index < 3; index++) {
              if (this.isSet(pts[i][index]) && isFinite(pts[i][index]) && (i === 0 || pts[i][index] > ptMax[index])) {
                ptMax[index] = pts[i][index];
              }
            }
          }
        }
      } else {
        for (let i = 0, n = pts.length; i < n; i++) {
          if (this.isSet(pts[i])) {
            for (let index = 0; index < 3; index++) {
              if (this.isSet(pts[i][index]) && isFinite(pts[i][index]) && (i === 0 || Math.abs(pts[i][index]) > ptMax[index])) {
                ptMax[index] = Math.abs(pts[i][index]);
              }
            }
          }
        }
      }
      return ptMax;
    }
    getPointFromPlan(pt, withLimit, decimals) {
      if (typeof decimals !== "number") {
        decimals = 6;
      }
      if (this.isSet(pt) === false) {
        return pt;
      }
      if (withLimit) {
        pt[0] -= this.limitX0;
      }
      if (this.grad[0] === 0 && this.grad[1] === 0) {
        return pt;
      }
      const xC = this.centerAbs ? (pt[0] - (this.limitWidth - this.limitHeight) / 2 - this.margin[0] + this.ptMin[0] * this.grad[0]) / this.grad[0] - this.offSet[1] * this.grad[1] : (pt[0] - this.margin[0] + this.ptMin[0] * this.grad[0]) / this.grad[0] - this.offSet[1] * this.grad[1];
      const yC = (pt[1] - this.margin[1] + this.ptMin[1] * this.grad[1]) / this.grad[1] - this.offSet[0] * this.grad[0];
      const d = Math.pow(10, decimals);
      return [Math.round(xC * d) / d, Math.round(yC * d) / d, 0, typeof pt[3] !== 'undefined' ? pt[3] : null];
    }
    getPointOnPlan(pt) {
      let xC = 0;
      let yC = 0;
      let zC = 0;
      let color = null;
      if (this.isSet(pt) === false) {
        return pt;
      }
      if (typeof pt[3] === "object") {
        color = pt[3];
      }
      if (this.grad[0] === 0 && this.grad[1] === 0) {
        return pt;
      }
      xC = (pt[0] - this.ptMin[0]) * this.grad[0] + this.margin[0];
      yC = (pt[1] - this.ptMin[1]) * this.grad[1] + this.margin[1];
      zC = 0;
      if (typeof pt[4] !== 'undefined') {
        return [Math.round(xC + this.offSet[0] * this.grad[0]), Math.round(yC + this.offSet[1] * this.grad[1]), zC, color, pt[4]];
      }
      return [Math.round(xC + this.offSet[0] * this.grad[0]), Math.round(yC + this.offSet[1] * this.grad[1]), zC, color];
    }
    isSet(v) {
      return typeof v !== 'undefined' && v !== null;
    }
  }
  _exports.default = Canvas2dService;
});
;define("universlogique-pg/services/colors-service", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  class ColorsService {
    addColors(colors) {
      const color = [0, 0, 0];
      for (let j = 0; j < color.length; j++) {
        for (let index = 0; index < colors.length; index++) {
          color[j] += colors[index][j];
        }
      }
      for (let j = 0; j < color.length; j++) {
        if (color[j] > 255) {
          color[j] = 0;
        }
      }
      return color;
    }
    hslToRgbText(hsl) {
      return this.rgbText(this.hslToRgb(hsl));
    }
    relativeRgb(rgb) {
      return [rgb[0] / 255, rgb[1] / 255, rgb[2] / 255];
    }
    rgbText(rgb) {
      if (rgb.length === 4) {
        return "rgba(" + Math.round(rgb[0]) + "," + Math.round(rgb[1]) + "," + Math.round(rgb[2]) + "," + Math.round(rgb[3]) + ")";
      }
      return "rgb(" + Math.round(rgb[0]) + "," + Math.round(rgb[1]) + "," + Math.round(rgb[2]) + ")";
    }
    rgbToHex(rgb) {
      const componentToHex = function (c) {
        const hex = c.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      };
      return "#" + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);
    }
    rgbToHsl(rgb) {
      if (rgb === null) {
        return null;
      }
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const max = Math.max(r, g, b),
        min = Math.min(r, g, b);
      let h = (max + min) / 2;
      let s = 0;
      const l = (max + min) / 2;
      if (max === min) {
        h = 0;
      } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h = h * 60;
      }
      return [h, s * 100, l * 100];
    }
    hslToHex(hsl) {
      return this.rgbToHex(this.hslToRgb(hsl));
    }
    getRandomHueColor(s, l) {
      return this.hslToRgb([Math.floor(Math.random() * 360), s, l]);
    }
    hslToRgba(hsla) {
      const a = hsla[3];
      const color = this.hslToRgb(hsla);
      color[3] = a;
      return color;
    }
    hslToRgb(hsl) {
      if (hsl === null) {
        return null;
      }
      let r, g, b, m, c, x;
      let h = parseInt(hsl[0], 10);
      if (h < 0) {
        h = h * -1;
      }
      if (h > 360) {
        h = Math.floor(h % 360) + 1;
      }
      let s = parseInt(hsl[1], 10);
      let l = parseInt(hsl[2], 10);
      if (!isFinite(h)) h = 0;
      if (!isFinite(s)) s = 0;
      if (!isFinite(l)) l = 0;
      h /= 60;
      if (h < 0) {
        h = 6 - -h % 6;
      }
      h %= 6;
      s = Math.max(0, Math.min(1, s / 100));
      l = Math.max(0, Math.min(1, l / 100));
      c = (1 - Math.abs(2 * l - 1)) * s;
      x = c * (1 - Math.abs(h % 2 - 1));
      if (h < 1) {
        r = c;
        g = x;
        b = 0;
      } else if (h < 2) {
        r = x;
        g = c;
        b = 0;
      } else if (h < 3) {
        r = 0;
        g = c;
        b = x;
      } else if (h < 4) {
        r = 0;
        g = x;
        b = c;
      } else if (h < 5) {
        r = x;
        g = 0;
        b = c;
      } else {
        r = c;
        g = 0;
        b = x;
      }
      m = l - c / 2;
      r = Math.round((r + m) * 255);
      g = Math.round((g + m) * 255);
      b = Math.round((b + m) * 255);
      if (hsl.length >= 4 && typeof hsl[3] === "number" && hsl[3] !== Infinity) {
        if (hsl[3] > 100) {
          hsl[3] = 100;
        }
        if (hsl[3] < 0) {
          hsl[3] = 0;
        }
        return [r, g, b, hsl[3] * 255 / 100];
      }
      return [r, g, b];
    }
    hexToRgb(hex) {
      if (hex === null || typeof hex === "undefined") {
        return null;
      }
      if (hex.length > 7) {
        hex = hex.substring(0, 6);
      }
      for (let index = 0; index < 6; index++) {
        if (hex.length < 6) {
          hex = '0' + hex;
        } else {
          break;
        }
      }
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
    }
    numberToRgb(number) {
      return this.hexToRgb(this.decimalToHexString(number));
    }
    decimalToHexString(number) {
      if (number < 0) {
        number = 0xFFFFFFFF + number + 1;
      }
      return '#' + number.toString(16).toUpperCase();
    }
    setPointsPerlinNoiseColor(pts, h, s, l, dh, ds, dl) {
      for (let index = 0; index < pts.length; index++) {
        pts[index][3] = this.getPerlinNoiseColor(pts[index], h, s, l, dh, ds, dl);
      }
      return pts;
    }
    getPerlinNoiseColor(pt, h, s, l, dh, ds, dl) {
      if (pt !== null) {
        return this.hslToRgb([h + dh * this.noise2d(pt[0], pt[1]), s + ds * this.noise2d(pt[0], pt[1]), l + dl * this.noise2d(pt[0], pt[1])]);
      }
      return [0, 0, 0];
    }
    noise2d(x, y) {
      return this.smoothNoise(this.smoothNoise(x) * 850000 + y);
    }
    linear_interpolate(a, b, t) {
      return (1. - t) * a + t * b;
    }
    smoothNoise(x) {
      //Bruit du point précédent
      //Bruit du point suivant
      //Interpolation :
      return this.linear_interpolate(this.randNoise(x), this.randNoise(x + 1), 0);
    }
    //Fournit une valeur aléatoire entre -1 et 1
    randNoise(t) {
      //t = (t << 13) ^ t;
      return (1.0 - (t * (t * t * 15731 + 889221) + 1376312589 & 0x7fffffff) / 1073741824.0 + 1.) / 2;
    }
    lerpForPoint(x, y, t) {
      const pi = Math.PI;
      return this.lerp((Math.cos(t * 2 * pi) + 1) / 2, x * Math.sin(t * 2 * pi), y) * -1;
    }
    lerp(v0, v1, amt) {
      let maxMove = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      let minDiff = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0.0001;
      let diff = v1 - v0;
      if (maxMove > 0) {
        diff = Math.min(diff, maxMove);
        diff = Math.max(diff, -maxMove);
      }
      if (Math.abs(diff) < minDiff) {
        return v1;
      }
      return v0 + diff * amt;
    }
  }
  _exports.default = ColorsService;
});
;define("universlogique-pg/services/engine-router-service", ["exports", "ember-engines-router-service/services/engine-router-service.js"], function (_exports, _engineRouterService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _engineRouterService.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-engines-router-service/services/engine-router-service.js"eaimeta@70e063a35619d71f
});
;define("universlogique-pg/services/head-data", ["exports", "ember-cli-head/services/head-data"], function (_exports, _headData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _headData.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-head/services/head-data"eaimeta@70e063a35619d71f
});
;define("universlogique-pg/services/intl", ["exports", "ember-intl/services/intl"], function (_exports, _intl) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _intl.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-intl/services/intl"eaimeta@70e063a35619d71f
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */
});
;define("universlogique-pg/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class='card m-4'>
    <div class='card-body'>
      <LinkTo @route='index'>
        Index
      </LinkTo>
  
      {{outlet}}
    </div>
  </div>
  */
  {
    "id": "KkpANpw6",
    "block": "[[[10,0],[14,0,\"card m-4\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"card-body\"],[12],[1,\"\\n    \"],[8,[39,0],null,[[\"@route\"],[\"index\"]],[[\"default\"],[[[[1,\"\\n      Index\\n    \"]],[]]]]],[1,\"\\n\\n    \"],[46,[28,[37,2],null,null],null,null,null],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],false,[\"link-to\",\"component\",\"-outlet\"]]",
    "moduleName": "universlogique-pg/templates/application.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("universlogique-pg/templates/ember", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class='card m-4'>
    <div class='card-body'>
      <p>
        ember template
      </p>
      <LinkTo @route='index'>
        Index
      </LinkTo>
      {{outlet}}
    </div>
  </div>
  */
  {
    "id": "1h5tafko",
    "block": "[[[10,0],[14,0,\"card m-4\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"card-body\"],[12],[1,\"\\n    \"],[10,2],[12],[1,\"\\n      ember template\\n    \"],[13],[1,\"\\n    \"],[8,[39,0],null,[[\"@route\"],[\"index\"]],[[\"default\"],[[[[1,\"\\n      Index\\n    \"]],[]]]]],[1,\"\\n    \"],[46,[28,[37,2],null,null],null,null,null],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],false,[\"link-to\",\"component\",\"-outlet\"]]",
    "moduleName": "universlogique-pg/templates/ember.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("universlogique-pg/templates/head", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{! template-lint-disable no-html-comments }}
  <!-- ember-cli-head/templates/head.hbs -->
  <!-- If you see this your application's `head.hbs` has gone missing. -->
  
  */
  {
    "id": "lsxuTdBH",
    "block": "[[[3,\" ember-cli-head/templates/head.hbs \"],[1,\"\\n\"],[3,\" If you see this your application's `head.hbs` has gone missing. \"],[1,\"\\n\"]],[],false,[]]",
    "moduleName": "universlogique-pg/templates/head.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("universlogique-pg/templates/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class='card m-4'>
    <div class='card-body'>
      <p>
        Index
      </p>
      <ul>
        <li>
          <LinkTo @route='generative'>
            Fractals
          </LinkTo>
        </li>
        <li>
          <a href='https://agcodes.github.io/universlogique-pg/'>
            Git repos
          </a>
        </li>
      </ul>
  
      {{outlet}}
    </div>
  </div>
  */
  {
    "id": "rVTHy/NL",
    "block": "[[[10,0],[14,0,\"card m-4\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"card-body\"],[12],[1,\"\\n    \"],[10,2],[12],[1,\"\\n      Index\\n    \"],[13],[1,\"\\n    \"],[10,\"ul\"],[12],[1,\"\\n      \"],[10,\"li\"],[12],[1,\"\\n        \"],[8,[39,0],null,[[\"@route\"],[\"generative\"]],[[\"default\"],[[[[1,\"\\n          Fractals\\n        \"]],[]]]]],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,\"li\"],[12],[1,\"\\n        \"],[10,3],[14,6,\"https://agcodes.github.io/universlogique-pg/\"],[12],[1,\"\\n          Git repos\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[46,[28,[37,2],null,null],null,null,null],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[],false,[\"link-to\",\"component\",\"-outlet\"]]",
    "moduleName": "universlogique-pg/templates/index.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("universlogique-pg/utils/intl/missing-message", ["exports", "ember-intl/-private/utils/missing-message"], function (_exports, _missingMessage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _missingMessage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-intl/-private/utils/missing-message"eaimeta@70e063a35619d71f
});
;

;define('universlogique-pg/config/environment', [], function() {
  var prefix = 'universlogique-pg';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("universlogique-pg/app")["default"].create({"name":"universlogique-pg","version":"5.0.0+c402eac6"});
          }
        
//# sourceMappingURL=universlogique-pg.map
