// Imports
import projects from "../public/json/projects.json"

// Functions
function Projects() {
	const projectList = projects.map((project) => {
		return (
			<>
				<li key={project.id}>
					<h3 className='text-xl font-bold mb-4'>{project.title}</h3>
					<p className='mb-4'>{project.intro}</p>
					<a href='#' className='text-primary underline hover:text-secondary'>
						Meer informatie
					</a>
				</li>
			</>
		)
	})

	return (
		<>
			<section className='page-padding-x page-padding-y bg-white'>
				<h2 className='font-bold text-2xl mb-8'>Mijn projecten</h2>
				<ul className='grid grid-cols-1 md:grid-cols-2 gap-8'>{projectList}</ul>
			</section>
		</>
	)
}

// Exports
export default Projects
