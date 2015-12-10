module.exports = {
  "rules": {
    "accessor-pairs": [
      2, {
        "getWithoutSet": false,
        "setWithoutGet": true
      }
    ],
    "array-bracket-spacing": [
      2,
      "never"
    ],
    "arrow-parens": 2,
    "arrow-spacing": 2,
    "block-spacing": [
      2,
      "always"
    ],
    "brace-style": 0,
    "callback-return": [
      2, [
        "callback",
        "cb",
        "next",
        "done"
      ]
    ],
    "camelcase": 0,
    "comma-dangle": [
      2,
      "always-multiline"
    ],
    "comma-spacing": [
      2, {
        "before": false,
        "after": true
      }
    ],
    "comma-style": [
      2,
      "last"
    ],
    "complexity": [
      1,
      5
    ],
    "computed-property-spacing": [
      2,
      "never"
    ],
    "consistent-return": 2,
    "consistent-this": [
      2,
      "vm"
    ],
    "curly": 2,
    "default-case": 2,
    "dot-location": [
      2,
      "property"
    ],
    "dot-notation": 2,
    "eol-last": 2,
    "eqeqeq": [
      2,
      "smart"
    ],
    "func-names": 1,
    "func-style": [
      2,
      "declaration"
    ],
    "global-require": 2,
    "guard-for-in": 2,
    "handle-callback-err": 2,
    "id-length": 0,
    "id-match": 0,
    "indent": [
      2,
      2, {
        "SwitchCase": 1
      }
    ],
    "init-declarations": 0,
    "jsx-quotes": 0,
    "key-spacing": [
      2, {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    "linebreak-style": [
      2,
      "unix"
    ],
    "lines-around-comment": 0,
    "max-len": [
      2,
      100,
      2
    ],
    "max-nested-callbacks": [
      2,
      4
    ],
    "max-params": [
      2,
      4
    ],
    "new-cap": [
      2, {
        "newIsCap": true,
        "capIsNew": true
      }
    ],
    "new-parens": 2,
    "newline-after-var": 0,
    "no-alert": 2,
    "no-array-constructor": 2,
    "no-caller": 2,
    "no-catch-shadow": 2,
    "no-class-assign": 2,
    "no-cond-assign": 2,
    "no-console": 2,
    "no-const-assign": 2,
    "no-constant-condition": 2,
    "no-continue": 0,
    "no-control-regex": 2,
    "no-debugger": 2,
    "no-delete-var": 2,
    "no-div-regex": 2,
    "no-dupe-args": 2,
    "no-dupe-class-members": 0,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-else-return": 2,
    "no-empty": 2,
    "no-empty-character-class": 2,
    "no-empty-label": 2,
    "no-eq-null": 2,
    "no-eval": 2,
    "no-ex-assign": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": 0,
    "no-extra-semi": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-func-assign": 2,
    "no-implicit-coercion": 0,
    "no-implied-eval": 2,
    "no-inline-comments": 0,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-invalid-this": 1,
    "no-irregular-whitespace": 2,
    "no-iterator": 2,
    "no-label-var": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-lonely-if": 2,
    "no-loop-func": 2,
    "no-mixed-requires": 0,
    "no-mixed-spaces-and-tabs": 2,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-multiple-empty-lines": [
      2, {
        "max": 2
      }
    ],
    "no-native-reassign": 2,
    "no-negated-in-lhs": 2,
    "no-nested-ternary": 0,
    "no-new": 1,
    "no-new-func": 2,
    "no-new-object": 2,
    "no-new-require": 2,
    "no-obj-calls": 2,
    "no-octal": 2,
    "no-octal-escape": 2,
    "no-param-reassign": 0,
    "no-path-concat": 2,
    "no-process-env": 0,
    "no-process-exit": 0,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-regex-spaces": 2,
    "no-reserved-keys": 0,
    "no-restricted-modules": 0,
    "no-restricted-syntax": [
      0
    ],
    "no-return-assign": 2,
    "no-script-url": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-shadow": 1,
    "no-shadow-restricted-names": 2,
    "no-spaced-func": 2,
    "no-sparse-arrays": 2,
    "no-sync": 0,
    "no-ternary": 0,
    "no-throw-literal": 2,
    "no-trailing-spaces": 2,
    "no-undef": 2,
    "no-undef-init": 2,
    "no-undefined": 2,
    "no-underscore-dangle": 0,
    "no-unexpected-multiline": 2,
    "no-unneeded-ternary": 2,
    "no-unreachable": 2,
    "no-unused-expressions": 2,
    "no-unused-vars": 2,
    "no-use-before-define": [
      2,
      "nofunc"
    ],
    "no-useless-call": 2,
    "no-useless-concat": 2,
    "no-void": 2,
    "no-warning-comments": 0,
    "no-with": 2,
    "object-curly-spacing": [
      2,
      "always"
    ],
    "one-var": [
      2,
      "never"
    ],
    "operator-assignment": [
      2,
      "always"
    ],
    "operator-linebreak": [
      2,
      "after"
    ],
    "padded-blocks": 0,
    "prefer-arrow-callback": 0,
    "prefer-reflect": 0,
    "prefer-spread": 0,
    "prefer-template": 0,
    "quote-props": [
      2,
      "as-needed"
    ],
    "quotes": [
      2,
      "single"
    ],
    "radix": 2,
    "require-jsdoc": 0,
    "require-yield": 2,
    "semi": [
      2,
      "always"
    ],
    "semi-spacing": [
      2, {
        "before": false,
        "after": true
      }
    ],
    "sort-vars": 0,
    "space-after-keywords": 0,
    "space-before-blocks": [
      2,
      "always"
    ],
    "space-before-function-paren": [
      2,
      "never"
    ],
    "space-before-keywords": [
      2,
      "always"
    ],
    "space-in-parens": [
      2,
      "never"
    ],
    "space-infix-ops": 2,
    "space-return-throw-case": 2,
    "space-unary-ops": 2,
    "spaced-comment": [
      2,
      "always"
    ],
    "strict": 2,
    "valid-jsdoc": 2,
    "valid-typeof": 2,
    "vars-on-top": 2,
    "wrap-iife": 2,
    "wrap-regex": 2,
    "yoda": [
      2,
      "always"
    ]
  }
};
