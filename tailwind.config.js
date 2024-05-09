/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/preline/preline.js",
	],
	darkMode: "class",
	theme: {
		extend: {
			screens: {
				xs: "361px",
				md: "992px",
			},
		},
	},
	plugins: [require("preline/plugin"), require("@tailwindcss/forms")],
};
