module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "react-app",
        "react-app/jest",
        "plugin:react/recommended",
        "airbnb",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project":"./tsconfig.json",
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "import"
    ],
    "rules": {
        "no-use-before-define":"off",
        "@typescript-eslint/no-use-before-define":[
            "error"
        ],
        "react/jsx-filename-extension":[
            "error", 
            { "extensions" :["js","jsx","ts","tsx"] }
        ],
        "react/jsx-pascal-case": [
            2, 
            { 
                "allowAllCaps": false, 
                "allowNamespace": false, 
                "allowLeadingUnderscore": false, 
                "ignore": ["$*"]
            }
        ],
        "camelcase": [
            0, 
            {
                "ignoreDestructuring": true
            }
        ],
        "import/extensions":[
            "error",
            "ignorePackages",
            {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"
            }
        ]
    },
    "settings": {
        "import/resolver": {
            "node": {
                "extensions" :[
                    ".js",
                    ".jsx",
                    ".ts",
                    ".tsx"
                ]
            }
        }
    }
}
