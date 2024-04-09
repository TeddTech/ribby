/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/preline/preline.js",
	],
	darkMode: "class",
	theme: {
		extend: {},
	},
	plugins: [require("preline/plugin"), require("@tailwindcss/forms")],
};
