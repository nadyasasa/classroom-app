/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		colors: {
			blue: '#005575',
			lightblue: "#F8FFFF",
			red: "#d92121",
			purple: "#7e5bef",
			pink: "#ff49db",
			orange: "#ff7849",
			green: "#13ce66",
			yellow: "#F4C522",
			graydark: "#6C6C6C",
			gray: "#C7C7C7",
			graylight: "#F5F5F5",
			white: "#ffffff",
			black: "#000000",
		},
		fontFamily: {
			sans: ["Segoe UI", "sans-serif"],
			serif: ["Merriweather", "serif"],
		},
		extend: {
			spacing: {
				128: "32rem",
				144: "36rem",
			},
			borderRadius: {
				"4xl": "2rem",
			},
		},
		extend: {},
	},
	plugins: [],
};
