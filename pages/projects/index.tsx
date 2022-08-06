// Imports
import type { NextPage } from "next"
import { FaArrowRight } from "react-icons/fa"
import projects from "../../public/json/projects.json"
import { FiExternalLink, FiGithub } from "react-icons/fi"
import { useRouter } from "next/router"

// Functions
const Projects: NextPage = () => {
	const router = useRouter()

	const projectsList = projects.map((project) => {
		const skillList = project.skills.map((skill) => {
			return (
				<span key={skill} className='text-sm pr-1'>
					{skill}
				</span>
			)
		})

		return (
			<tr
				key={project.id}
				className='hover:bg-gray-50'
				onClick={() => {
					router.push("/projects/" + project.id)
				}}
			>
				<td className='py-4 px-2 rounded-l-lg text-secondary font-mono'>{project.date}</td>
				<td className='py-4 px-2 font-bold'>{project.title}</td>
				<td className='py-4 px-2 text-gray-600 hidden md:table-cell'>{project.madeat}</td>
				<td className='py-4 px-2 text-gray-600 hidden xl:table-cell'>{skillList}</td>
				<td className='py-4 px-2 pr-0'>
					{project.live ? (
						<a href={project.live} target='_blank' rel='noreferrer'>
							<FiExternalLink size={24} className='text-gray-600' />
						</a>
					) : (
						""
					)}
				</td>
				<td className='py-4 pl-0 px-2 rounded-r-lg'>
					{project.github ? (
						<a href={project.github} target='_blank' rel='noreferrer'>
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
				<table className='table text-left w-full border-collapse overflow-auto text-sm md:text-base'>
					<thead className='text-gray-600 font-bold'>
						<tr>
							<th className='py-4 px-2'>Datum</th>
							<th className='py-4 px-2'>Titel</th>
							<th className='py-4 px-2 hidden md:table-cell'>Gemaakt bij</th>
							<th className='py-4 px-2 hidden xl:table-cell'>Gemaakt met</th>
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
