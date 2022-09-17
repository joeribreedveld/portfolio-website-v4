// Imports
import type { GetStaticProps, NextPage } from "next"
import projects from "../../public/json/projects.json"
import { useRouter } from "next/router"

// Functions
const Project: NextPage = ({ project }: any) => {
	return (
		<>
			<div className='bg-white min-h-[100vh] page-padding-x page-padding-y'>{project.title}</div>
		</>
	)
}

// getStaticPaths
export async function getStaticPaths() {
	const paths = projects.map((project) => {
		return { params: { slug: project.slug } }
	})

	return {
		paths,
		fallback: false,
	}
}

// getStaticProps
export const getStaticProps: GetStaticProps = async (context) => {
	const params = context.params

	const project = await projects.map((project) => {
		if (project.slug === params.slug) {
			return project
		}
	})

	return {
		props: {
			project,
		},
	}
}

// Exports
export default Project
