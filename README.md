# eslint-config-simplifield

[![NPM version](https://badge.fury.io/js/eslint-config-simplifield.svg)](https://npmjs.org/package/eslint-config-simplifield)
[![Build status](https://secure.travis-ci.org/SimpliField/eslint-config-simplifield.svg)](https://travis-ci.org/SimpliField/eslint-config-simplifield)
[![CodeFactor](https://www.codefactor.io/repository/github/simplifield/eslint-config-simplifield/badge)](https://www.codefactor.io/repository/github/simplifield/eslint-config-simplifield)
[![Dependency Status](https://dependencyci.com/github/SimpliField/eslint-config-simplifield/badge)](https://dependencyci.com/github/SimpliField/eslint-config-simplifield)
[![Dependency Status](https://david-dm.org/SimpliField/eslint-config-simplifield.svg)](https://david-dm.org/SimpliField/eslint-config-simplifield)
[![devDependency Status](https://david-dm.org/SimpliField/eslint-config-simplifield/dev-status.svg)](https://david-dm.org/SimpliField/eslint-config-simplifield#info=devDependencies)

> ESLint configuration at Simplifield.

To use those rules in your projects, first, install it
 as a development dependency and than add it to your `.eslintrc` file.

It will automatically append the SimpliField rules to your
project.

Theses are our own rules but you can require a reconsideration
 of a rule by creating an issue which name is the rule you
 wanna change.

See [shareable configs documentation](http://eslint.org/docs/developer-guide/shareable-configs)
 for more infos.

## Usage
Sample `.eslintrc` using this plugin:
```json
{
  "extends": "eslint-config-simplifield",
  "env": {
    "node": true,
    "mocha": true
  },
  "globals": {
    "require": false,
    "describe": false,
    "beforeEach": false,
    "afterEach": false,
    "before": false,
    "after": false,
    "it": false,
    "sinon": false,
    "module": false
  },
  "plugins": [
    "mongodb"
  ]
}
```
A `.eslintrc` for frontend with react & flow:
```json
{
  "extends": "eslint-config-simplifield/lib/frontend",
  "plugins": [ "react", "flowtype" ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "react/jsx-uses-vars": "error",
    "react/jsx-uses-react": "error",
    "keyword-spacing": ["error", { "before": true }],
    "arrow-parens": ["error", "as-needed"],
    "operator-linebreak": "off",
    "no-mixed-operators": "off",
    "newline-per-chained-call": "off",
    "indent": "off"
  }
}
```

## License
[MIT](LICENSE)
