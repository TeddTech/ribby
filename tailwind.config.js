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
			},
			// colors: {
			// 	blue: {
			// 		100: "#EAE2F7",
			// 		// 	200: "#1a202c",
			// 		500: "#7334AE",
			// 		600: "#7334AE",
			// 		// 	700: "#1a202c",
			// 		// 	800: "#1a202c",
			// 		// 	900: "#1a202c",
			// 	},
			// },
		},
	},
	plugins: [require("preline/plugin"), require("@tailwindcss/forms")],
};
