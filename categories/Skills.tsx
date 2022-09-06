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
			<section className='page-padding-x page-padding-y bg-gray'>
				<h2 className='font-bold text-2xl mb-8'>Mijn skills</h2>
				<ul className='grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-8'>{skillList}</ul>
				<p className='text-primary underline'>Check mijn GitHub</p>
			</section>
		</>
	)
}

// Exports
export default Skills
