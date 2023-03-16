/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				white: 'rgb(var(--color-white) / 1)',
				black: 'rgb(var(--color-black) / 1)',

				input: {
					bg: 'rgb(var(--input-bg) / 1)',
					border: 'rgb(var(--input-border) / 1)',
					ring: 'rgb(var(--input-ring) / 1)',
					text: 'rgb(var(--input-text) / 1)'
				},

				button: {
					bg: 'rgb(var(--button-bg) / 1)',
					text: 'rgb(var(--button-text) / 1)'
				},

				text: {
					primary: 'rgb(var(--text-primary) / 1)'
				}
			}
		}
	},
	plugins: []
};
