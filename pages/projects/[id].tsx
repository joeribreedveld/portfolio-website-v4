import projects from "../../public/assets/json/projects.json"
import type { NextPage } from "next"
import { useRouter } from "next/router"

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
			<button onClick={() => router.push("/projects")} className=' text-quaternary underline mb-8'>
				Ga terug
			</button>
			<h2 className='font-bold text-2xl text-primary pb-4'>{project.title}</h2>
			<p className='pb-4'>{project.date}</p>
			<p className='text-secondary text-lg pb-4'>{project.intro}</p>
			<h3 className='text-lg text-primary pb-2'>Gemaakt met:</h3>
			<ul className='pb-8'>{skillList}</ul>
			<p>{project.description}</p>
		</div>
	)
}

export default Project
