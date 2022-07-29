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
	const router = useRouter()

	return (
		<div className='page-padding-x page-padding-y'>
			<button onClick={() => router.push("/projects")} className=' text-quaternary underline mb-8'>
				Ga terug
			</button>
			<h1 className='font-bold text-2xl text-primary pb-4'>{project.title}</h1>
			<p className='text-secondary text-lg pb-8'>{project.intro}</p>
			<p>{project.description}</p>
		</div>
	)
}

export default Project
