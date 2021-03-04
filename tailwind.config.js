/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['.public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors
		}
	},
	variants: {
		extend: {
			backgroundColor: ['active']
		}
	},
	plugins: []
};
