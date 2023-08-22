/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: '#051014',
				'primary-focus': '#2E2F2F',
				'primary-content': '#fff'
			}
		},
		ripple: (theme) => ({
			colors: theme('colors')
		})
	},

	plugins: [require('tailwindcss-ripple')()]
};

module.exports = config;
