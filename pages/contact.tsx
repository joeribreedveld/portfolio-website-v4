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
					<a href='https://linkedin.com/in/joeribreedveld' target='_blank' rel='noreferrer'>
						LinkedIn
					</a>
				</li>
				<li className='flex items-center gap-2'>
					<FaArrowRight className='text-secondary' />
					<a href='https://github.com/duck1s' target='_blank' rel='noreferrer'>
						GitHub
					</a>
				</li>
				<li className='flex items-center gap-2'>
					<FaArrowRight className='text-secondary' />
					<a href='mailto:joeri.breedveld123@gmail.com' target='_blank' rel='noreferrer'>
						Email
					</a>
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
