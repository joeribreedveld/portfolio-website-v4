// Imports
import type { NextPage } from "next"
import { FaArrowRight } from "react-icons/fa"
import Link from "next/link"

// Functions
const About: NextPage = () => {
	return (
		<div className='page-padding-x page-padding-y flex flex-col gap-48'>
			<section className='flex justify-center flex-col text-center'>
				<h2 className='text-4xl font-bold pb-8 text-primary'>Over mij</h2>
				<p className='text-xl pb-6'>
					Hallo mijn naam is Joeri Breedveld. Ik ben een Junior Full Stack Developer en ik woon in Amsterdam. Ik programmeer sinds 2021 en ik studeer ook Software Development bij
					Mediacollege Amsterdam. Ik vind het heel leuk om nieuwe dingen te leren en uitdagingen aan te gaan.
				</p>
				<Link href='/projects'>
					<a className='text-xl text-blue underline'>Bekijk mijn projecten</a>
				</Link>
			</section>
			<section className=''>
				<h2 className='text-4xl font-bold pb-8 text-primary'>Mijn skills</h2>
				<ul className='grid md:grid-cols-3 md:grid-rows-3 grid-cols-1 grid-rows-9 gap-6'>
					<div className='shadow p-8 rounded-xl'>Test</div>
					<div className='shadow p-8 rounded-xl'>Test</div>
					<div className='shadow p-8 rounded-xl'>Test</div>
					<div className='shadow p-8 rounded-xl'>Test</div>
					<div className='shadow p-8 rounded-xl'>Test</div>
					<div className='shadow p-8 rounded-xl'>Test</div>
					<div className='shadow p-8 rounded-xl'>Test</div>
					<div className='shadow p-8 rounded-xl'>Test</div>
					<div className='shadow p-8 rounded-xl'>Test</div>
				</ul>
			</section>
			<p className='text-red-500 text-center'>In onderhoud</p>
		</div>
	)
}

// Exports
export default About
