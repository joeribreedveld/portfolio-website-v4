// Imports
import type { NextPage } from "next"
import { FaArrowRight } from "react-icons/fa"

// Functions
const Projects: NextPage = () => {
	return (
		<div className='page-padding-x page-padding-y'>
			<h2 className='text-2xl font-bold pb-8 text-primary'>Projecten</h2>
			<ul className='flex flex-col gap-8'>
				<li className='flex flex-col gap-2'>
					<h4 className='text-xl font-bold text-secondary'>oorsprongsdocumenten.nl</h4>
					<p>Ik werk aan een MERN ecommerce website met een support artikel systeem.</p>
					<ul className=''>
						<li className='flex items-center gap-2'>
							<FaArrowRight className='text-tertiary' /> Next.js
						</li>
						<li className='flex items-center gap-2'>
							<FaArrowRight className='text-tertiary' /> Node.js
						</li>
						<li className='flex items-center gap-2'>
							<FaArrowRight className='text-tertiary' /> MERN
						</li>
						<li className='flex items-center gap-2'>
							<FaArrowRight className='text-tertiary' /> TailwindCSS
						</li>
					</ul>
					<p className='text-quaternary font-bold'>June 2022 - Now</p>
					<a href='#' className='text-quinary underline'>
						Meer informatie
					</a>
				</li>
				<li className='flex flex-col gap-2'>
					<h4 className='text-xl font-bold text-secondary'>joeribreedveld.com</h4>
					<p>Ik werk aan een MERN ecommerce website met een support artikel systeem.</p>
					<ul className=''>
						<li className='flex items-center gap-2'>
							<FaArrowRight className='text-tertiary' /> Next.js
						</li>
						<li className='flex items-center gap-2'>
							<FaArrowRight className='text-tertiary' /> TailwindCSS
						</li>
					</ul>
					<p className='text-quaternary font-bold'>Juli 2022 - Now</p>
					<a href='#' className='text-quinary underline'>
						Meer informatie
					</a>
				</li>
			</ul>
		</div>
	)
}

// Exports
export default Projects
