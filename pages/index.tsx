// Imports
import type { NextPage } from "next"
import About from "../categories/About"
import Contact from "../categories/Contact"
import Experience from "../categories/Experience"
import Hero from "../categories/Hero"
import Projects from "../categories/Projects"
import Skills from "../categories/Skills"

// Functions
const Home: NextPage = () => {
	return (
		<>
			<Hero />
			<About />
			<Skills />
			<Projects />
			<Experience />
			<Contact />
		</>
	)
}

// Exports
export default Home
