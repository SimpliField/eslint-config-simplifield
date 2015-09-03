# eslint-config-simplifield
ESLint configuration at Simplifield.

To use those rules in your projects, first, install it
 as a development dependency and than add it to your `.eslintrc` file.

It will automatically append the SimpliField rules to your
project.

Theses are our own rules but you can require a reconsideration
 of a rule by creating an issue which name is the rule you
 wanna change.

See [shareable configs documentation](http://eslint.org/docs/developer-guide/shareable-configs)
 for more infos.

 Sample .eslintrc using this plugin:
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
