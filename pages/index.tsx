// Imports
import type { NextPage } from "next"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { AiFillMail } from "react-icons/ai"

// Functions
const Home: NextPage = () => {
	return (
		<div className='page-padding-x page-padding-y justify-between h-screen flex gap-32'>
			<div className='flex justify-center flex-col'>
				<h1 className='text-4xl text-black md:text-6xl pb-8 font-bold font-serif'>Joeri Breedveld</h1>
				<h3 className='text-lg md:text-2xl pb-8 font-serif text-gray-700'>Full Stack Developer | JavaScript</h3>
				<button className='button'>Bekijk mijn werk</button>
			</div>
		</div>
	)
}

// Exports
export default Home
