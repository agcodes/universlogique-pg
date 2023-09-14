/* eslint-env node */
'use strict';

module.exports = function (environment) {
  let ENV = {
		modulePrefix: 'generative',
		lazyLoading: {
			enabled: true
		},
		dependencies: {
			services: [
			]
		},
    environment,
  };

  return ENV;
};
