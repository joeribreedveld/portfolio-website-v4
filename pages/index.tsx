// Imports
import type { NextPage } from "next"
import About from "../categories/About"
import Hero from "../categories/Hero"

// Functions
const Home: NextPage = () => {
	return (
		<>
			<Hero />
			<About />
		</>
	)
}

// Exports
export default Home
