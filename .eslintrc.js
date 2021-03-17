module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    extraFileExtensions: ['.vue']
  },
  extends: [
    'airbnb-typescript',
    'plugin:vue/strongly-recommended',
    'plugin:vue-scoped-css/recommended',
    'prettier'
  ],
  plugins: ['prettier', '@typescript-eslint', 'import', 'unicorn', 'vue'],
  rules: {
    'prettier/prettier': ['error'],

    'max-len': 0,

    'import/order': 'error',

    'import/first': 'error',

    'import/no-mutable-exports': 'error',

    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

    'no-console': [
      process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      { allow: ['warn', 'error'] }
    ],

    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }
    ],

    'no-trailing-spaces': 'error',

    'no-lonely-if': 'error',

    'import/no-unresolved': 'off',

    'no-underscore-dangle': 0,

    'object-curly-spacing': 0,

    'prefer-object-spread': 'error',

    'no-plusplus': 'warn',

    'no-throw-literal': 'warn',

    curly: ['error', 'all'],

    'dot-notation': 'error',

    'no-var': 'error',

    'object-shorthand': 'error',

    'no-useless-rename': 'error',

    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],

    'require-atomic-updates': 0,

    'no-await-in-loop': 0,

    'class-methods-use-this': 0,

    'no-useless-constructor': 0,

    'import/prefer-default-export': 0,

    '@typescript-eslint/no-useless-constructor': 0,

    '@typescript-eslint/interface-name-prefix': 'off',

    '@typescript-eslint/camelcase': 'off',

    '@typescript-eslint/explicit-member-accessibility': 0,

    indent: ['error', 2, { SwitchCase: 1 }],

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        ts: 'never'
      }
    ],

    /** ******************* */
    /*   Unicorn Rules    */
    /** ******************* */
    'unicorn/prevent-abbreviations': 'off',

    'unicorn/filename-case': 'off',

    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

    'no-param-reassign': [
      'off',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state',
          'acc',
          'e',
          'ctx',
          'req',
          'request',
          'res',
          'response',
          '$scope'
        ]
      }
    ],

    'vue-scoped-css/require-scoped': ['error'],

    '@typescript-eslint/no-unused-vars': ['error', { args: 'all', argsIgnorePattern: '^_' }],

    'vue/require-default-prop': 'warn',

    'vue/no-unused-components': [
      'warn',
      {
        ignoreWhenBindingPresent: true
      }
    ],

    'vue/attributes-order': 'error',

    semi: ['error', 'always'],

    '@typescript-eslint/no-parameter-properties': 0,

    'vue/name-property-casing': ['error', 'PascalCase'],

    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        ignores: ['client-only']
      }
    ],

    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        prefix: ['I'],
        filter: {
          regex:
            '^(Window|Vue|Context|VueConstructor|Navigator|Process|AxiosRequestConfig|Chainable)$',
          match: false
        }
      }
    ],

    '@typescript-eslint/explicit-function-return-type': 'off',

    '@typescript-eslint/explicit-module-boundary-types': 'off',

    '@typescript-eslint/ban-types': 'off'
  },
  overrides: [],
  settings: {
    'import/core-modules': ['vue'],
    'import/resolver': {
      webpack: {
        extensions: ['.js', '.ts', '.json', '.vue'],
        moduleDirectory: ['node_modules', 'src/']
      },
      node: {
        extensions: ['.js', '.ts', '.json', '.vue'],
        moduleDirectory: ['node_modules', 'src/']
      }
    }
  }
};
