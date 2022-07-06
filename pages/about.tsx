// Imports
import type { NextPage } from "next"

// Functions
const About: NextPage = () => {
	return (
		<div className='page-padding-x page-padding-y flex flex-col gap-16'>
			<section>
				<h2 className='text-2xl font-bold pb-8'>Over mij</h2>
				<p className='w-2/4'>
					Hallo mijn naam is Joeri Breedveld. Ik ben een Junior Full Stack Developer en ik woon in Amsterdam. Ik programmeer sinds 2021 en ik studeer ook Software Development bij
					Mediacollege Amsterdam. Ik vind het heel leuk om nieuwe dingen te leren en uitdagingen aan te gaan.
				</p>
			</section>
			<section>
				<h2 className='text-2xl font-bold pb-8'>Mijn skills</h2>
				<ul className='flex gap-4 flex-wrap'>
					<li className='bg-gray-100 py-3 px-6  rounded-lg'>HTML</li>
					<li className='bg-gray-100 py-3 px-6  rounded-lg'>CSS</li>
					<li className='bg-gray-100 py-3 px-6  rounded-lg'>JavaScript</li>
					<li className='bg-gray-100 py-3 px-6  rounded-lg'>React</li>
					<li className='bg-gray-100 py-3 px-6  rounded-lg'>Sass</li>
					<li className='bg-gray-100 py-3 px-6  rounded-lg'>Laravel</li>
					<li className='bg-gray-100 py-3 px-6  rounded-lg'>Git</li>
					<li className='bg-gray-100 py-3 px-6  rounded-lg'>MERN</li>
					<li className='bg-gray-100 py-3 px-6  rounded-lg'>Adobe XD</li>
					<li className='bg-gray-100 py-3 px-6  rounded-lg'>VSCode</li>
					<li className='bg-gray-100 py-3 px-6  rounded-lg'>Node.js</li>
					<li className='bg-gray-100 py-3 px-6  rounded-lg'>Express.js</li>
					<li className='bg-gray-100 py-3 px-6  rounded-lg'>MongoDB</li>
					<li className='bg-gray-100 py-3 px-6  rounded-lg'>MySQL</li>
				</ul>
			</section>
			<section>
				<h2 className='text-2xl font-bold pb-8'>Werkervaring</h2>
				<ul className='flex flex-col gap-8'>
					<li className='flex flex-col gap-2'>
						<h4 className='text-lg font-bold'>Aruna</h4>
						<p>Beschrijving</p>
						<ul>
							<li>Taal</li>
							<li>Taal</li>
						</ul>
						<p>Tijd</p>
					</li>
					<li className='flex flex-col gap-2'>
						<h4 className='text-lg font-bold'>OSD</h4>
						<p>Beschrijving</p>
						<ul>
							<li>Taal</li>
							<li>Taal</li>
						</ul>
						<p>Tijd</p>
					</li>
				</ul>
			</section>
		</div>
	)
}

// Exports
export default About
