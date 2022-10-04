module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended",
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
		"tsconfigRootDir": __dirname,
		"project": ["./tsconfig.json"],
    },
    "plugins": [
        "vue",
        "@typescript-eslint",
    ],
    "rules": {
    },
	"ignorePatterns": ["*.d.ts"],
}
