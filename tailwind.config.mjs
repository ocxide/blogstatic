const colors = require("tailwindcss/colors");

function createColor(name) {
	return `rgb(var(--${name}) / <alpha-value>)`;
}

function createPalette(name) {
	return {
		de2: createColor(`${name}-de2`),
		de1: createColor(`${name}-de1`),
		DEFAULT: createColor(name),
		el1: createColor(`${name}-el1`),
		el2: createColor(`${name}-el2`),
	};
}

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
	],
	theme: {
		extend: {
			colors: {
				warning: {
					...colors.red,
					DEFAULT: 'theme("colors.red.500")',
				},
				text: createColor("text"),
				background: createPalette("background"),
				primary: createPalette("primary"),
				secondary: createPalette("secondary"),
				accent: createPalette("accent"),
			},
		},
	},
	plugins: [require("daisyui")],
};
