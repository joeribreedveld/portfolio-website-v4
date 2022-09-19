// Imports
import type { GetStaticProps, NextPage } from "next"
import projects from "../../public/json/projects.json"
import { useRouter } from "next/router"

// Functions
const Project: NextPage = ({ project }: any) => {
	console.log(project)
	return (
		<>
			<div className='bg-white min-h-[100vh] page-padding-x page-padding-y'>
				<h3 className='text-xl font-bold mb-4'>{project.title}</h3>
				<p>{project.description}</p>
			</div>
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
export const getStaticProps: GetStaticProps = async ({ params }: any) => {
	const project = projects.filter((project) => project.slug === params.slug)

	return {
		props: {
			project: project[0],
		},
	}
}

// Exports
export default Project
