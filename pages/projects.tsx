// Imports
import type { NextPage } from "next"
import { FaArrowRight } from "react-icons/fa"
import projects from "../public/assets/json/projects.json"
import { FiExternalLink, FiGithub } from "react-icons/fi"

// Functions
const Projects: NextPage = () => {
	const projectsList = projects.map((project) => {
		const skillList = project[0].skills.map((skill) => {
			return (
				<span key={skill} className='text-sm pr-4'>
					{skill}
				</span>
			)
		})

		return (
			<tr key={project[0].id} className='hover:bg-gray-100'>
				<td className='py-4 px-2 rounded-l-lg text-secondary font-mono'>{project[0].date}</td>
				<td className='py-4 px-2 font-bold'>{project[0].title}</td>
				<td className='py-4 px-2 text-gray-600 hidden md:table-cell'>{project[0].madeat}</td>
				<td className='py-4 px-2 text-gray-600 hidden md:table-cell'>{skillList}</td>
				<td className='py-4 px-2 pr-0'>
					{project[0].live ? (
						<a href={project[0].live} target='_blank' rel='noreferrer'>
							<FiExternalLink size={24} className='text-gray-600' />
						</a>
					) : (
						""
					)}
				</td>
				<td className='py-4 pl-0 px-2 rounded-r-lg'>
					{project[0].github ? (
						<a href={project[0].github} target='_blank' rel='noreferrer'>
							<FiGithub size={24} className='text-gray-600' />
						</a>
					) : (
						""
					)}
				</td>
			</tr>
		)
	})

	return (
		<div className='page-padding-x page-padding-y'>
			<h2 className='text-2xl font-bold pb-4 text-primary'>Projecten</h2>
			<p className='pb-16 text-secondary text-lg'>Dit is een archief van al mijn projecten.</p>
			<div className='overflow-auto'>
				<table className='table text-left w-full border-collapse overflow-auto'>
					<thead className='text-gray-600 font-bold'>
						<tr>
							<th className='py-4 px-2'>Datum</th>
							<th className='py-4 px-2'>Titel</th>
							<th className='py-4 px-2 hidden md:table-cell'>Gemaakt bij</th>
							<th className='py-4 px-2 hidden md:table-cell'>Gemaakt met</th>
							<th className='py-4 px-2'>Link</th>
						</tr>
					</thead>
					<tbody>{projectsList}</tbody>
				</table>
			</div>
		</div>
	)
}

// Exports
export default Projects
