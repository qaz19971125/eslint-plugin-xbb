/**
 * @fileoverview eslint plugin for xbb
 * @author zhumingpeng
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require('requireindex')

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
  configs: {
    vue: {
      extends: [
        'plugin:vue/recommended',
        'plugin:sonarjs/recommended',
        'prettier'
      ],
      rules: {
        'vue/multi-word-component-names': 1,
        'vue/component-definition-name-casing': [0, 'kebab-case'],
        'vue/require-default-prop': 0,
        'vue/no-v-html': 0,
        'vue/attributes-order': [
          1,
          {
            alphabetical: true
          }
        ],
        'vue/prefer-separate-static-class': 2,
        'vue/no-this-in-before-route-enter': 2,
        'vue/no-multiple-objects-in-class': 2,
        'vue/new-line-between-multi-line-property': 1,

        'no-use-before-define': [2, { functions: true, classes: true }],
        'no-template-curly-in-string': 2,
        'no-unused-vars': [
          2,
          {
            vars: 'all',
            args: 'none',
            caughtErrors: 'none',
            ignoreRestSiblings: false
          }
        ],
        'no-empty': [2, { allowEmptyCatch: true }],
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-var': 1,
        'no-case-declarations': 0,
        'no-prototype-builtins': 0,
        'no-async-promise-executor': 0,
        'array-callback-return': 2,
        'no-void': 0,
        'prefer-promise-reject-errors': 0,
        'dot-notation': 0,
        'prefer-const': 1,
        'lines-between-class-members': 1,
        'multiline-ternary': 0,

        'max-lines-per-function': [2, 100],
        'max-nested-callbacks': [1, 3],
        'max-depth': [1, 5],
        'max-params': [1, 5]
      }
    }
  },
  rules: requireIndex(__dirname + '/rules')
}
