import projects from "../../public/json/projects.json"
import type { NextPage } from "next"
import { useRouter } from "next/router"
import { FiExternalLink, FiGithub } from "react-icons/fi"

export const getStaticPaths = async () => {
	const paths = projects.map((project) => {
		return {
			params: { id: project.id.toString() },
		}
	})

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps = async (context: any) => {
	const id = context.params.id

	return {
		props: { project: projects[id] },
	}
}

const Project: NextPage = ({ project }: any) => {
	const skillList = project.skills.map((skill: any) => {
		return (
			<li key={skill} className='pb-1 ml-8 list-disc text-gray-500'>
				{skill}
			</li>
		)
	})

	const router = useRouter()

	return (
		<div className='page-padding-x page-padding-y'>
			<button onClick={() => router.push("/projects")} className=' text-quaternary hover:text-quinary underline mb-8'>
				Ga terug
			</button>
			<h2 className='font-bold text-2xl text-primary pb-4'>{project.title}</h2>
			<p className='pb-4'>{project.date}</p>
			<p className='text-secondary text-lg pb-4'>{project.intro}</p>
			<h3 className='text-lg text-primary pb-2'>Gemaakt met:</h3>
			<ul className='pb-8'>{skillList}</ul>
			<p className='pb-8'>{project.description}</p>
			<ul className='flex gap-8'>
				{project.live ? (
					<li>
						<a href={project.live} className='text-quinary underline hover:text-quaternary' target='_blank' rel='noreferrer'>
							Website
						</a>
					</li>
				) : (
					""
				)}
				{project.github ? (
					<li>
						<a href={project.github} className='text-quinary underline hover:text-quaternary' target='_blank' rel='noreferrer'>
							GitHub
						</a>
					</li>
				) : (
					""
				)}
			</ul>
		</div>
	)
}

export default Project
