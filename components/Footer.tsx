// Imports
import Link from "next/link"

// Functions
function Footer() {
	return (
		<>
			<section className='flex gap-32 pb-8'>
				<section>
					<h4 className='font-bold pb-4'>Contact</h4>
					<ul className='flex gap-4 flex-col'>
						<li>
							<a href='https://linkedin.com/in/joeribreedveld' target='_blank'>
								LinkedIn
							</a>
						</li>
						<li>
							<a href='https://github.com/duck1s' target='_blank'>
								GitHub
							</a>
						</li>
						<li>
							<a href='mailto:joeri.breedveld123@gmail.com' target='_blank'>
								Email
							</a>
						</li>
					</ul>
				</section>
				<section>
					<h4 className='font-bold pb-4'>Navigation</h4>
					<ul className='flex gap-4 flex-col'>
						<li>
							<Link href='/'>
								<a>Home</a>
							</Link>
						</li>
						<li>
							<Link href='/about'>
								<a>About</a>
							</Link>
						</li>
						<li>
							<Link href='/projects'>
								<a>Projects</a>
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
			<section className='flex justify-between border-t pt-8 border-gray-400'>
				<p>Made by Joeri Breedveld</p>
				<p>joeri.breedveld123@gmail.com</p>
			</section>
		</>
	)
}

// Exports
export default Footer
