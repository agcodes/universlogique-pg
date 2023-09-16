'use strict';

define("universlogique-pg/tests/lint/app.lint-test", [], function () {
  "use strict";

  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/drawing-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/drawing-component.js should pass ESLint\n\n');
  });
  QUnit.test('object/canvas/canvas-data-32.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'object/canvas/canvas-data-32.js should pass ESLint\n\n');
  });
  QUnit.test('object/math/CComplex.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'object/math/CComplex.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/page.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/page.js should pass ESLint\n\n10:3 - Unexpected console statement. (no-console)');
  });
  QUnit.test('services/animation-service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/animation-service.js should pass ESLint\n\n');
  });
  QUnit.test('services/canvas2d-service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/canvas2d-service.js should pass ESLint\n\n');
  });
  QUnit.test('services/colors-service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/colors-service.js should pass ESLint\n\n');
  });
});
define("universlogique-pg/tests/lint/tests.lint-test", [], function () {
  "use strict";

  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  QUnit.module('ESLint | tests');
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});
define("universlogique-pg/tests/test-helper", ["universlogique-pg/app", "universlogique-pg/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"universlogique-pg/app",0,"universlogique-pg/config/environment",0,"qunit",0,"@ember/test-helpers",0,"qunit-dom",0,"ember-qunit"eaimeta@70e063a35619d71f
  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define('universlogique-pg/config/environment', [], function() {
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

require('universlogique-pg/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
