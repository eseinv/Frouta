const fs = require('fs');

const prettierOptions = JSON.parse(fs.readFileSync('./.prettierrc', 'utf8'));

module.exports = {
	parser: 'babel-eslint',
	extends: ['airbnb', 'prettier', 'prettier/react'],
	plugins: ['prettier', 'react'],
	env: {
		browser: true,
		node: true,
		jest: true,
		es6: true,
	},
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		'prettier/prettier': [0, prettierOptions],

		'arrow-body-style': [1, 'as-needed'],

		'class-methods-use-this': 0,
		'comma-dangle': [1, 'always-multiline'],
		'import/imports-first': 0,
		'import/newline-after-import': 0,
		'import/no-dynamic-require': 0,
		'import/no-extraneous-dependencies': 0,
		'import/no-named-as-default': 0,
		'import/no-unresolved': 1,
		'import/no-webpack-loader-syntax': 0,
		'import/prefer-default-export': 0,
		'jsx-a11y/anchor-is-valid': [
			'warning',
			{
				components: ['Link'],
				specialLink: ['to', 'hrefLeft', 'hrefRight'],
				aspects: ['noHref', 'invalidHref', 'preferButton'],
			},
		],
		'jsx-a11y/label-has-for': [
			1,
			{
				components: ['Label'],
				required: {
					some: ['nesting', 'id'],
				},
				allowChildren: false,
			},
		],
		'jsx-a11y/click-events-have-key-events': 1,
		'jsx-a11y/no-static-element-interactions': ['warning'],
		indent: [
			0,
			'tab',
			{
				SwitchCase: 1,
			},
		],
		'max-len': 0,
		'newline-per-chained-call': 0,
		'no-confusing-arrow': 0,
		'no-console': 1,
		'no-use-before-define': 0,
		'prefer-template': 1,
		'react/jsx-closing-tag-location': 0,
		'react/forbid-prop-types': 0,
		'react/jsx-first-prop-new-line': [1, 'multiline'],
		'react/jsx-filename-extension': 0,
		'react/jsx-no-target-blank': 0,
		'react/require-default-props': 0,
		'react/require-extension': 0,
		'react/self-closing-comp': 0,
		'react/sort-comp': 0,
		'react/no-array-index-key': 0,
		'require-yield': 0,
		'react/prop-types': 1,
		'react/prefer-stateless-function': 1,
		'no-unused-vars': 1,
		'jsx-a11y/alt-text': [
			1,
			{
				elements: ['img', 'object', 'area', 'input[type="image"]'],
				img: ['Image'],
				object: ['Object'],
				area: ['Area'],
				'input[type="image"]': ['InputImage'],
			},
		],
	},
	settings: {
		'import/resolver': {
			webpack: {
				config: './internals/webpack/webpack.prod.babel.js',
			},
		},
	},
};
