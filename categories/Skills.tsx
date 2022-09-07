// Imports
import skills from "../public/json/skills.json"

// Functions
function Skills() {
	const skillList = skills.map((skill) => {
		return (
			<>
				<li key={skill.id} className='bg-white rounded p-8'>
					{skill.name}
				</li>
			</>
		)
	})

	return (
		<>
			<section className='page-padding-x page-padding-y bg-gray' id='skills'>
				<h2 className='font-bold text-2xl mb-8'>Mijn skills</h2>
				<ul className='grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-8'>{skillList}</ul>
				<a href='https://github.com/joeribreedveld' target='_blank' className='text-primary underline hover:text-secondary'>
					Check mijn GitHub
				</a>
			</section>
		</>
	)
}

// Exports
export default Skills
