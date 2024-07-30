import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	js.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		},
		rules: {
			// Disable specific rules or customize their behavior
			'no-console': 'off',
			'svelte/a11y-no-noninteractive-element-interactions': 'off', // Disable the specific Svelte rule
			// Add other rule configurations as needed
		}
	},
	{
		ignores: ['build/', '.svelte-kit/', 'dist/']
	},
];
