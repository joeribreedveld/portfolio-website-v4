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
				<p>{project.title}</p>
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
export const getStaticProps: GetStaticProps = async ({ params }) => {
	const project = projects.filter((project) => project.slug === params.slug)

	return {
		props: {
			project: project[0],
		},
	}
}

// Exports
export default Project
