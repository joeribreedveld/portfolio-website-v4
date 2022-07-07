// Imports
import type { NextPage } from "next"
import { FaArrowRight } from "react-icons/fa"

// Functions
const About: NextPage = () => {
	return (
		<div className='page-padding-x page-padding-y flex flex-col gap-16'>
			<section>
				<h2 className='text-2xl font-bold pb-4 text-primary font-serif'>Over mij</h2>
				<p className='md:w-2/4'>
					Hallo mijn naam is Joeri Breedveld. Ik ben een Junior Full Stack Developer en ik woon in Amsterdam. Ik programmeer sinds 2021 en ik studeer ook Software Development bij
					Mediacollege Amsterdam. Ik vind het heel leuk om nieuwe dingen te leren en uitdagingen aan te gaan.
				</p>
			</section>
			<section>
				<h2 className='text-2xl font-bold pb-8 font-serif text-primary'>Mijn skills</h2>
				<ul className='flex flex-col gap-2 flex-wrap'>
					<li className='flex items-center gap-2'>
						<FaArrowRight className='text-secondary' /> HTML
					</li>
					<li className='flex items-center gap-2'>
						<FaArrowRight className='text-secondary' /> CSS
					</li>
					<li className='flex items-center gap-2'>
						<FaArrowRight className='text-secondary' /> JavaScript
					</li>
					<li className='flex items-center gap-2'>
						<FaArrowRight className='text-secondary' /> React
					</li>
					<li className='flex items-center gap-2'>
						<FaArrowRight className='text-secondary' /> Sass
					</li>
					<li className='flex items-center gap-2'>
						<FaArrowRight className='text-secondary' /> Laravel
					</li>
					<li className='flex items-center gap-2'>
						<FaArrowRight className='text-secondary' /> Git
					</li>
					<li className='flex items-center gap-2'>
						<FaArrowRight className='text-secondary' /> MERN
					</li>
					<li className='flex items-center gap-2'>
						<FaArrowRight className='text-secondary' /> Adobe XD
					</li>
					<li className='flex items-center gap-2'>
						<FaArrowRight className='text-secondary' /> VSCode
					</li>
					<li className='flex items-center gap-2'>
						<FaArrowRight className='text-secondary' /> Node.js
					</li>
					<li className='flex items-center gap-2'>
						<FaArrowRight className='text-secondary' /> Express.js
					</li>
					<li className='flex items-center gap-2'>
						<FaArrowRight className='text-secondary' /> MongoDB
					</li>
					<li className='flex items-center gap-2'>
						<FaArrowRight className='text-secondary' /> MySQL
					</li>
				</ul>
			</section>
			<section>
				<h2 className='text-2xl font-bold pb-8 font-serif text-primary'>Werkervaring</h2>
				<ul className='flex flex-col gap-8'>
					<li className='flex flex-col gap-2'>
						<h4 className='text-xl font-bold text-secondary font-serif'>Aruna</h4>
						<p>Ik ging hier samen met andere mensen uit mijn klas een Wordpress website maken.</p>
						<ul className=''>
							<li className='flex items-center gap-2'>
								<FaArrowRight className='text-tertiary' /> Wordpress
							</li>
							<li className='flex items-center gap-2'>
								<FaArrowRight className='text-tertiary' /> CSS
							</li>
							<li className='flex items-center gap-2'>
								<FaArrowRight className='text-tertiary' /> HTML
							</li>
						</ul>
						<p className='text-quaternary font-bold'>May 2022 - June 2022</p>
						<a href='#' className='text-quinary underline'>
							Meer informatie
						</a>
					</li>
					<li className='flex flex-col gap-2'>
						<h4 className='text-xl font-bold text-secondary font-serif'>Oorsprongsdocumenten</h4>
						<p>Ik werk aan een MERN ecommerce website met een support artikel systeem.</p>
						<ul className=''>
							<li className='flex items-center gap-2'>
								<FaArrowRight className='text-tertiary' /> Next.js
							</li>
							<li className='flex items-center gap-2'>
								<FaArrowRight className='text-tertiary' /> Node.js
							</li>
							<li className='flex items-center gap-2'>
								<FaArrowRight className='text-tertiary' /> MERN
							</li>
							<li className='flex items-center gap-2'>
								<FaArrowRight className='text-tertiary' /> TailwindCSS
							</li>
						</ul>
						<p className='text-quaternary font-bold'>June 2022 - Now</p>
						<a href='#' className='text-quinary underline'>
							Meer informatie
						</a>
					</li>
				</ul>
			</section>
		</div>
	)
}

// Exports
export default About
