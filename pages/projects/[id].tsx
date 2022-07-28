import projects from "../../public/assets/json/projects.json"
import type { NextPage } from "next"

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

export const getStaticProps = async (context) => {
	const id = context.params.id

	return {
		props: { project: projects[id] },
	}
}

const Project: NextPage = ({ project }) => {
	return (
		<div className='page-padding-x page-padding-y'>
			<h1 className='font-bold'>{project.title}</h1>
			<p>{project.description}</p>
		</div>
	)
}

export default Project
