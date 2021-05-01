module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "rules": {
    "func-call-spacing": [
      "error",
      "never"
    ],
    "block-spacing": [
      "error",
      "always"
    ],
    "comma-spacing": [
      "error",
      {"before": false, "after": true}
    ],
    "keyword-spacing": [
      "warn",
      {"before": false, "after": false},
    ],
    "arrow-spacing": [
      "error",
      {"before": true, "after": true}
    ],
    "no-unused-vars": [
      "off"
    ],
    "no-undef": [
      "off"
    ],
    "template-curly-spacing": [
      "error", "never"
    ],
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};
