/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./categories/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				body: ["sans-serif", "Roboto"],
				serif: ["serif", "Roboto"],
				sans: ["sans-serif", "Roboto"],
				mono: ["monospace", "Roboto Mono"],
			},
			colors: {
				black: "#24292f",
				primary: "#608598",
				gray: "#f8f8f8",
			},
		},
	},
	plugins: [],
}
