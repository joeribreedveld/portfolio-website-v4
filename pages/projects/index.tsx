// Imports
import type { NextPage } from "next"
import { FaArrowRight } from "react-icons/fa"
import projects from "../../public/json/projects.json"
import { FiExternalLink, FiGithub } from "react-icons/fi"
import { useRouter } from "next/router"

// Functions
const Projects: NextPage = () => {
	return (
		<div className='page-padding-x page-padding-y text-center'>
			<h2 className='text-4xl font-bold pb-4 text-primary'>Projecten</h2>
			<p className='mb-24 text-secondary text-xl'>Dit zijn al mijn projecten. Klik op een project voor meer informatie.</p>
			<p className='text-red-500'>In onderhoud</p>
		</div>
	)
}

// Exports
export default Projects
