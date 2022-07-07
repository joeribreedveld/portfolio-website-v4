/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				body: ["sans-serif", "Roboto"],
				serif: ["serif", "Roboto"],
				sans: ["sans-serif", "Roboto"],
				mono: ["monospace", "Roboto Mono"],
				mont: ["sans-serif", "Montserrat"],
			},
			colors: {
				black: "#1D1D1F",
				primary: "#264653",
				secondary: "#2a9d8f",
				tertiary: "#e9c46a",
				quaternary: "#f4a261",
				quinary: "#e76f51",
			},
		},
	},
	plugins: [],
}
