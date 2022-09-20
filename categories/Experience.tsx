// Imports
import experiences from "../public/json/experiences.json"

// Functions
function Experience() {
	const experienceList = experiences.map((experience) => {
		return (
			<>
				<li className='bg-white rounded-xl' key={experience.id}>
					<img src={experience.img} alt='Experience image' className='rounded-t-xl object-cover h-48 w-full' />
					<div className='p-8'>
						<h3 className='text-lg md:text-xl font-bold mb-4'>{experience.title}</h3>
						<p className='mb-4 text-secondary font-bold'>{experience.time}</p>
						<p className='mb-4'>{experience.intro}</p>
						<a href={"/experiences/" + experience.slug} className='text-primary underline hover:text-secondary'>
							Meer informatie
						</a>
					</div>
				</li>
			</>
		)
	})

	return (
		<>
			<section className='page-padding-x page-padding-y bg-gray' id='experience'>
				<h2 className='font-bold text-2xl mb-4'>Mijn werkervaring</h2>
				<p className='pb-10 md:w-1/2'>Dit is een lijst met bedrijven waar ik heb gewerkt. Klik op meer informatie voor een detail pagina per bedrijf.</p>
				<ul className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16'>{experienceList}</ul>
			</section>
		</>
	)
}

// Exports
export default Experience
