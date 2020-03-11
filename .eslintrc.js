module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:proposal/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module",
        "allowImportExportEverywhere": false,
        "codeFrame": true
    },
    "plugins": [
        "react",
        "babel"
    ],
    "rules": {
        "indent": ["error", 2]
        // "proposal/class-property-space-infix-ops": "error",
        // "proposal/class-property-semi": "error",
        // "proposal/class-property-no-initialized": "error",
        // "proposal/class-property-no-dupe-property": "error",
        // "proposal/class-property-no-semi-spacing": "error",
        // "babel/new-cap": 1,
        // "babel/camelcase": 1,
        // "babel/no-invalid-this": 1,
        // "babel/object-curly-spacing": 1,
        // "babel/quotes": 1,
        // "babel/semi": 1,
        // "babel/no-unused-expressions": 1,
        // "babel/valid-typeof": 1
    },
    "settings": {
        "react": {
            "version": "16.13"
        }
    }
};