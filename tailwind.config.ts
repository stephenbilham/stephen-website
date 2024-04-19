const config = {
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
			padding: {
				"18": "72px", // Define a custom padding value
			},
		},
	},
	plugins: [],
	darkMode: "class",
};

export default config;
