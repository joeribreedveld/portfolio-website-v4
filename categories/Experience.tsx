// Imports
import experiences from "../public/json/experiences.json"

// Functions
function Experience() {
	const experienceList = experiences.map((experience) => {
		return (
			<>
				<li className='bg-white p-8 rounded-xl' key={experience.id}>
					<h3 className='text-xl font-bold mb-4'>{experience.name}</h3>
					<p className='mb-4 text-secondary font-bold'>{experience.time}</p>
					<p className='mb-4'>{experience.intro}</p>
					<a href='#' className='text-primary underline hover:text-secondary'>
						Meer informatie
					</a>
				</li>
			</>
		)
	})

	return (
		<>
			<section className='page-padding-x page-padding-y bg-gray'>
				<h2 className='font-bold text-2xl mb-8'>Mijn werkervaring</h2>
				<ul className='grid grid-cols-1 md:grid-cols-2 gap-8'>{experienceList}</ul>
			</section>
		</>
	)
}

// Exports
export default Experience
