// Imports
import type { NextPage } from "next"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { AiFillMail } from "react-icons/ai"

// Functions
const Home: NextPage = () => {
	return (
		<div className='page-padding-x pb-16 pt-16 justify-between h-screen flex gap-32'>
			<div className='flex justify-center flex-col'>
				<h3 className='pb-8 font-mont tracking-widest text-tertiary'>HALLO MIJN NAAM IS</h3>
				<h1 className='text-4xl text-primary md:text-6xl pb-8 font-bold font-serif'>Joeri Breedveld</h1>
				<h3 className='text-lg md:text-2xl pb-8 font-serif text-secondary'>Full Stack Developer | JavaScript</h3>
				<p className='pb-24 w-3/4 md:w-1/2'>
					Hallo mijn naam is Joeri Breedveld. Ik ben een Junior Full Stack Developer en ik woon in Amsterdam. Ik programmeer sinds 2021 en ik studeer ook Software Development bij
					Mediacollege Amsterdam. Ik vind het heel leuk om nieuwe dingen te leren en uitdagingen aan te gaan.
				</p>
				<div className='flex gap-4'>
					<button className='button text-white border-tertiary bg-tertiary hover:text-primary hover:border hover:border-tertiary hover:bg-white'>Over mij</button>
					<button className='button text-primary border-tertiary hover:text-white hover:bg-tertiary'>Projecten</button>
				</div>
			</div>
		</div>
	)
}

// Exports
export default Home
