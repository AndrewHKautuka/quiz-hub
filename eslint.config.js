import prettierConfig from "eslint-config-prettier"
import eslintPluginPrettier from "eslint-plugin-prettier"

export default [
	{
		plugins: {
			prettier: eslintPluginPrettier,
		},
		rules: {
			// ensure Prettier violations surface as ESLint errors
			"prettier/prettier": [
				"error",
				{
					tabWidth: 4,
					useTabs: true,
					semi: false,
					trailingComma: "all",
					bracketSpacing: true,
					singleQuote: false,
					endOfLine: "lf",
				},
			],
		},
	},
	prettierConfig, // disables conflicting stylistic rules
]
