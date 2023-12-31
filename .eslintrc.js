'use strict';

module.exports = {
	globals: {
		server: true,
	},
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			legacyDecorators: true,
		},
	},
	plugins: [
		'ember'
	],
	extends: [
		'eslint:recommended',
		'plugin:ember/recommended'
	],
	env: {
		browser: true
	},
	rules: {
	},
	overrides: [
		// node files
		{
			files: [
				'.template-lintrc.js',
				'ember-cli-build.js',
				'testem.js',
				'blueprints/*/index.js',
				'config/**/*.js',
				'lib/*/index.js'
			],
			parserOptions: {
				sourceType: 'script',
				ecmaVersion: 2015
			},
			env: {
				browser: false,
				node: true
			}
		}
	]
};
