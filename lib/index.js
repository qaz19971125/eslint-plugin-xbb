/**
 * @fileoverview eslint plugin for xbb
 * @author zhumingpeng
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

// const requireIndex = require('requireindex')

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
  configs: {
    recommended: {
      extends: [
        'plugin:vue/recommended',
        'plugin:sonarjs/recommended',
        'prettier'
      ],
      rules: {
        'vue/require-default-prop': 0,
        'vue/attributes-order': [
          1,
          {
            alphabetical: true
          }
        ],
        'vue/no-v-html': 0,
        'vue/component-name-in-template-casing': [1, 'kebab-case'],
        'vue/component-options-name-casing': 2,
        'vue/custom-event-name-casing': 1,
        'vue/new-line-between-multi-line-property': 1,
        'vue/no-multiple-objects-in-class': 2,
        'vue/no-reserved-component-names': 2,
        'vue/no-this-in-before-route-enter': 2,
        'vue/padding-line-between-blocks': 1,
        'vue/prefer-separate-static-class': 2,
        'vue/static-class-names-order': 1,
        'vue/v-on-function-call': 2,

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
  }
  // rules: requireIndex(__dirname + '/rules')
}
