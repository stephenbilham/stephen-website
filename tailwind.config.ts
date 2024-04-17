import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				darkMode: "#171c28",
			},
			fontFamily: {
				sans: ["Montserrat", "sans-serif"],
			},
			height: {
				"25p": "25vh", // 25% of screen height
				"50p": "50vh", // 50% of screen height
				"75p": "75vh", // 75% of screen height
				"100p": "100vh", // 100% of screen height
			},
		},
	},
	plugins: [],
	darkMode: "class",
};

export default config;
