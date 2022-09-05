// Imports
import { FiGithub } from "react-icons/fi"
import { FiMail } from "react-icons/fi"
import { AiFillLinkedin } from "react-icons/ai"

// Functions
function Hero() {
	return (
		<>
			<section className='page-padding-x page-padding-y bg-black text-white min-h-screen flex justify-center flex-col'>
				<h1 className='text-primary font-bold text-5xl mb-4'>Joeri Breedveld</h1>
				<h3 className='text-xl mb-16'>Full Stack Developer</h3>
				<ul className='flex gap-16'>
					<li>
						<FiGithub size={24} />
					</li>
					<li>
						<FiMail size={24} />
					</li>
					<li>
						<AiFillLinkedin size={24} />
					</li>
				</ul>
			</section>
		</>
	)
}

// Exports
export default Hero
