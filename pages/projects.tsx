// Imports
import type { NextPage } from "next"
import { FaArrowRight } from "react-icons/fa"
import projects from "../public/assets/json/projects.json"

// Functions
const Projects: NextPage = () => {
	const projectsList = projects.map((project) => {
		const skillList = project[0].skills.map((skill) => {
			return (
				<li key={skill} className='flex items-center gap-2'>
					<FaArrowRight className='text-tertiary' /> {skill}
				</li>
			)
		})

		return (
			<li key={project[0].id} className='flex flex-col gap-2'>
				<h4 className='text-xl font-bold text-secondary'>{project[0].title}</h4>
				<p>{project[0].intro}</p>

				<ul className=''>{skillList}</ul>
				<p className='text-quaternary font-bold'>{project[0].date}</p>
				<a href='#' className='text-quinary underline'>
					Meer informatie (werkt nog niet)
				</a>
			</li>
		)
	})

	return (
		<div className='page-padding-x page-padding-y'>
			<h2 className='text-2xl font-bold pb-8 text-primary'>Projecten</h2>
			<ul className='flex flex-col gap-8'>{projectsList}</ul>
		</div>
	)
}

// Exports
export default Projects
