// Imports
import type { NextPage } from "next"
import { FaArrowRight } from "react-icons/fa"

// Functions
const Contact: NextPage = () => {
	return (
		<div className='page-padding-x page-padding-y flex flex-col items-center text-center'>
			<h2 className='text-4xl font-bold pb-8 text-primary'>Contact</h2>
			<p className='text-gray-500 pb-6 text-xl'>Neem contact met mij op!</p>
			<ul className='flex flex-col gap-2 pb-16 items-center'>
				<li className='flex items-center gap-2 text-blue underline text-xl'>
					<a href='https://linkedin.com/in/joeribreedveld' target='_blank' rel='noreferrer'>
						LinkedIn
					</a>
				</li>
				<li className='flex items-center gap-2 text-blue underline text-xl'>
					<a href='https://github.com/duck1s' target='_blank' rel='noreferrer'>
						GitHub
					</a>
				</li>
				<li className='flex items-center gap-2 text-blue underline text-xl'>
					<a href='mailto:joeri.breedveld123@gmail.com' target='_blank' rel='noreferrer'>
						Email
					</a>
				</li>
			</ul>
			<ul className='flex flex-col gap-2 text-slate-500'>
				<li>joeri.breedveld123@gmail.com</li>
				<li>Amsterdam, Nederland</li>
			</ul>
		</div>
	)
}

// Exports
export default Contact
