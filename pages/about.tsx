// Imports
import type { NextPage } from "next"
import skills from "../public/json/skills.json"
import Link from "next/link"

// Functions
const About: NextPage = () => {
	const skillList = skills.map((skill) => {
		return <div className='shadow-md bg-[#f8f8f8] p-8 rounded-lg'>{skill.name}</div>
	})

	return (
		<div className='page-padding-x page-padding-y flex flex-col'>
			<section className='flex justify-center flex-col text-center mb-48'>
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
				<h2 className='text-4xl font-bold pb-8 text-primary text-center'>Mijn skills</h2>
				<ul className='grid md:grid-cols-3 md:grid-rows-3 grid-cols-1 grid-rows-9 gap-8'>{skillList}</ul>
			</section>
		</div>
	)
}

// Exports
export default About
