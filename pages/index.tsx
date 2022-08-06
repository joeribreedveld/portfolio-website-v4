// Imports
import type { NextPage } from "next"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { AiFillMail } from "react-icons/ai"
import Link from "next/link"
import { useRouter } from "next/router"

// Functions
const Home: NextPage = () => {
	const router = useRouter()

	return (
		<div className='page-padding-x pb-16 pt-16 justify-between h-screen flex gap-32 text-center'>
			<div className='flex justify-center flex-col'>
				<h1 className='text-4xl text-primary md:text-5xl pb-8 font-bold'>Joeri Breedveld</h1>
				<p className='pb-8 md:w-3/4 self-center text-xl'>
					Welkom bij mijn portfolio website! Op deze website kan je informatie vinden over wie ik ben, wat ik doe en wat ik kan. Voor meer informatie of vragen kan je me altijd contacten.
				</p>
				<div className='flex gap-4 justify-center mb-10'>
					<Link href='/projects'>
						<a className='text-xl text-blue underline'>Bekijk mijn projecten</a>
					</Link>
				</div>
			</div>
		</div>
	)
}

// Exports
export default Home
