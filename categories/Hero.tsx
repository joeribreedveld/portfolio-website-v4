// Imports
import { FiGithub } from "react-icons/fi"
import { FiMail } from "react-icons/fi"
import { AiFillLinkedin } from "react-icons/ai"

// Functions
function Hero() {
	return (
		<>
			<section className='page-padding-x page-padding-y bg-black text-white min-h-screen flex justify-center flex-col text-center' id='hero'>
				<h1 className='text-primary font-bold text-4xl md:text-5xl mb-8'>Joeri Breedveld</h1>
				<h3 className='text-xl mb-16'>Full Stack Developer</h3>
				<ul className='flex gap-12 justify-center'>
					<li>
						<a href='https://github.com/joeribreedveld' target='_blank'>
							<FiGithub size={24} className='hover:text-primary transition ease-in-out duration-200' />
						</a>
					</li>
					<li>
						<a href='mailto:joeri.breedveld123@gmail.com' target='_blank'>
							<FiMail size={24} className='hover:text-primary transition ease-in-out duration-200' />
						</a>
					</li>
					<li>
						<a href='https://www.linkedin.com/in/joeribreedveld/' target='_blank'>
							<AiFillLinkedin size={24} className='hover:text-primary transition ease-in-out duration-200' />
						</a>
					</li>
				</ul>
			</section>
		</>
	)
}

// Exports
export default Hero
