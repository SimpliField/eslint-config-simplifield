'use strict';

var OFF = 'off';
var WARN = 'warn';

module.exports = {
  parserOptions: {
    sourceType: 'script',
    arrowFunctions: true,
    binaryLiterals: true,
    blockBindings: true,
    classes: false,
    defaultParams: true,
    destructuring: true,
    forOf: true,
    generators: false,
    modules: false,
    objectLiteralComputedProperties: true,
    objectLiteralDuplicateProperties: true,
    objectLiteralShorthandMethods: true,
    objectLiteralShorthandProperties: true,
    octalLiterals: false,
    regexUFlag: true,
    regexYFlag: true,
    restParams: true,
    spread: true,
    superInFunctions: true,
    templateStrings: true,
    unicodeCodePointEscapes: true,
  },
  env: {
    node: true,
    mocha: true,
    es6: true,
    mongo: true,
    browser: true,
  },
  globals: {
    angular: false,
    inject: false,
    moment: false,
    R: false,

    describe: false,
    beforeEach: false,
    afterEach: false,
    it: false,

    expect: false,
    sinon: false,
  },
  extends: './common.js',
  plugins: [],
  rules: {
    strict: ['error', 'function'],
    'max-nested-callbacks': WARN,
    'newline-after-var': WARN,
    'global-require': OFF,
    'consistent-this': OFF,
    'func-names': OFF,
  },
};
