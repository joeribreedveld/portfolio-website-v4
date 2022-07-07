// Imports
import Link from "next/link"

// Functions
function Footer() {
	return (
		<>
			<section className='flex gap-8 md:gap-32 pb-8 flex-col md:flex-row'>
				<section>
					<h4 className='font-bold pb-4'>Contact</h4>
					<ul className='flex gap-4 flex-col'>
						<li>
							<a href='https://linkedin.com/in/joeribreedveld' target='_blank' rel='noreferrer'>
								LinkedIn
							</a>
						</li>
						<li>
							<a href='https://github.com/duck1s' target='_blank' rel='noreferrer'>
								GitHub
							</a>
						</li>
						<li>
							<a href='mailto:joeri.breedveld123@gmail.com' target='_blank' rel='noreferrer'>
								Email
							</a>
						</li>
					</ul>
				</section>
				<section>
					<h4 className='font-bold pb-4'>Navigatie</h4>
					<ul className='flex gap-4 flex-col'>
						<li>
							<Link href='/'>
								<a>Home</a>
							</Link>
						</li>
						<li>
							<Link href='/about'>
								<a>Over mij</a>
							</Link>
						</li>
						<li>
							<Link href='/projects'>
								<a>Projecten</a>
							</Link>
						</li>
						<li>
							<Link href='/contact'>
								<a>Contact</a>
							</Link>
						</li>
					</ul>
				</section>
			</section>
			<section className='flex justify-between border-t pt-8 border-gray-400 flex-col md:flex-row'>
				<p>Made by Joeri Breedveld</p>
				<p>joeri.breedveld123@gmail.com</p>
			</section>
		</>
	)
}

// Exports
export default Footer
