// Imports
import type { NextPage } from "next"
import { FaArrowRight } from "react-icons/fa"

// Functions
const Contact: NextPage = () => {
	return (
		<div className='page-padding-x page-padding-y'>
			<h2 className='text-2xl font-bold pb-2 text-primary'>Contact</h2>
			<p className='text-gray-500 pb-4'>Neem contact met mij op!</p>
			<ul className='flex flex-col gap-2 pb-8'>
				<li className='flex items-center gap-2'>
					<FaArrowRight className='text-secondary' />
					LinkedIn
				</li>
				<li className='flex items-center gap-2'>
					<FaArrowRight className='text-secondary' />
					GitHub
				</li>
				<li className='flex items-center gap-2'>
					<FaArrowRight className='text-secondary' />
					Email
				</li>
			</ul>
			<ul className='flex flex-col gap-2'>
				<li>joeri.breedveld123@gmail.com</li>
				<li>Amsterdam, Nederland</li>
			</ul>
		</div>
	)
}

// Exports
export default Contact
