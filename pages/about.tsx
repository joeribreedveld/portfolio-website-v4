// Imports
import type { NextPage } from "next"
import { FaArrowRight } from "react-icons/fa"
import Link from "next/link"

// Functions
const About: NextPage = () => {
	return (
		<div className='page-padding-x page-padding-y flex flex-col gap-48'>
			<section className='flex justify-center flex-col text-center'>
				<h2 className='text-5xl font-bold pb-8 text-primary'>Over mij</h2>
				<p className='text-xl pb-6'>
					Hallo mijn naam is Joeri Breedveld. Ik ben een Junior Full Stack Developer en ik woon in Amsterdam. Ik programmeer sinds 2021 en ik studeer ook Software Development bij
					Mediacollege Amsterdam. Ik vind het heel leuk om nieuwe dingen te leren en uitdagingen aan te gaan.
				</p>
				<Link href='/about'>
					<a className='text-xl text-blue underline'>Bekijk mijn projecten</a>
				</Link>
			</section>
			<section className=''>
				<h2 className='text-4xl font-bold pb-8 text-primary'>Mijn skills</h2>
				<ul className='grid md:grid-cols-3 md:grid-rows-3 grid-cols-1 grid-rows-9 gap-6'>
					<div className='bg-gray p-8 rounded-xl'>Test</div>
					<div className='bg-gray p-8 rounded-xl'>Test</div>
					<div className='bg-gray p-8 rounded-xl'>Test</div>
					<div className='bg-gray p-8 rounded-xl'>Test</div>
					<div className='bg-gray p-8 rounded-xl'>Test</div>
					<div className='bg-gray p-8 rounded-xl'>Test</div>
					<div className='bg-gray p-8 rounded-xl'>Test</div>
					<div className='bg-gray p-8 rounded-xl'>Test</div>
					<div className='bg-gray p-8 rounded-xl'>Test</div>
				</ul>
			</section>
			<section>
				<h2 className='text-4xl font-bold pb-8 text-primary'>Werkervaring</h2>
				<ul className='flex flex-col gap-8'>
					<li className='flex flex-col gap-2'>
						<h4 className='text-xl font-bold text-secondary'>Aruna</h4>
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
						<h4 className='text-xl font-bold text-secondary'>Oorsprongsdocumenten</h4>
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
