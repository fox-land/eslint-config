/** @type {import('eslint').ESLint.ConfigData} */
export default {
	extends: ['eslint:recommended', 'plugin:import/recommended', 'eslint-config-prettier'],
	env: {
		'shared-node-browser': true,
		es6: true,
	},
	parserOptions: {
		sourceType: 'module',
	},
	overrides: [
		{
			files: ['*.cjs'],
			env: {
				commonjs: true,
			},
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
}
