'use strict';

var OFF = 'off';
var WARN = 'warn';
var ERROR = 'error';

// The SimpliField back is currently running under the Node 6 version
// https://kangax.github.io/compat-table/es6/#node6
// so the backend file must enable only ES6 features supported by it

module.exports = {
  parserOptions: {
    sourceType: 'script',
  },
  env: {
    node: true,
    mocha: true,
    es6: true,
    mongo: true,
  },
  extends: './common.js',
  plugins: [
    'mongodb',
    'promise',
    'node',
  ],
  settings: {
    mongodb: {
      callPatterns: {
        query: [
          '^([a-z\\.]+)(Collection|\\.?db?\\.collection\\([^\\)]+\\))\\' +
          '.(find|findOne)$',
        ],
        update: [
          '^([a-z\\.]+)(Collection|\\.?db?\\.collection\\([^\\)]+\\))\\' +
          '.(findOneAndUpdate|updateOne|updateMany)$',
        ],
        insert: [
          '^([a-z\\.]+)(Collection|\\.?db?\\.collection\\([^\\)]+\\))\\' +
          '.(insertOne|insertMany)$',
        ],
        remove: [
          '^([a-z\\.]+)(Collection|\\.?db?\\.collection\\([^\\)]+\\))\\' +
          '.(findOneAndDelete|deleteOne|deleteMany)$',
        ],
        deprecated: [
          '^([a-z\\.]+)(Collection|\\.?db?\\.collection\\([^\\)]+\\))\\' +
          '.(remove|update|findAndModify|ensureIndex|findAndRemove|insert|dropAllIndexes)$',
        ],
      },
    },
  },
  globals: {
    require: false,
    describe: false,
    beforeEach: false,
    afterEach: false,
    before: false,
    after: false,
    it: false,
    module: false,
  },
  ecmaFeatures: {},
  rules: {
    strict: ['error', 'global'],

    'mongodb/check-deprecated-calls': ERROR,

    'node/no-deprecated-api': OFF,
    'node/no-missing-import': 'error',
    'node/no-missing-require': 'error',
    'node/no-unpublished-import': OFF,
    'node/no-unpublished-require': OFF,
    'node/no-unsupported-features': ['error', { version: 6 }],

    'generator-star-spacing': [
      'error',
      {
        before: true,
        after: false,
      },
    ],
    'no-dupe-class-members': ERROR,
    'no-var': WARN,
    'object-shorthand': WARN,
    'prefer-arrow-callback': WARN,
    'prefer-const': WARN,
    'prefer-rest-params': WARN,
    'prefer-spread': WARN,
    'prefer-template': WARN,
    'require-yield': WARN,
    'sort-imports': WARN,
    'template-curly-spacing': WARN,
    'yield-star-spacing': WARN,
  },
};
