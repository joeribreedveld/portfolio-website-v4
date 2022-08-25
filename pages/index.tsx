// Imports
import type { NextPage } from "next"
import About from "../categories/About"
import Hero from "../categories/Hero"
import Skills from "../categories/Skills"

// Functions
const Home: NextPage = () => {
	return (
		<>
			<Hero />
			<About />
			<Skills />
		</>
	)
}

// Exports
export default Home
