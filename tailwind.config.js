/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				body: ["sans-serif", "-apple-system, BlinkMacSystemFont"],
				serif: ["serif", "Roboto"],
				sans: ["sans-serif", "-apple-system, BlinkMacSystemFont"],
				mono: ["monospace", "Roboto Mono"],
				mont: ["sans-serif", "Montserrat"],
			},
			colors: {
				black: "#1D1D1F",
				blue: "#0077ED",
			},
		},
	},
	plugins: [],
}
