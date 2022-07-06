// Imports
import type { NextPage } from "next"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { AiFillMail } from "react-icons/ai"

// Functions
const Home: NextPage = () => {
	return (
		<div className='page-padding-x page-padding-y justify-center h-screen flex flex-col'>
			<h1 className='text-4xl md:text-6xl pb-8 font-bold'>Joeri Breedveld</h1>
			<h3 className='text-lg md:text-xl tracking-widest'>FULL STACK DEVELOPER</h3>
		</div>
	)
}

// Exports
export default Home
