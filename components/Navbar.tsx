// Imports
import Link from "next/link"
import { useRouter } from "next/router"

// Functions
function Navbar() {
	const router = useRouter()

	return (
		<>
			<nav className='fixed page-padding-x flex justify-between w-full py-8'>
				<h3 className='text-xl font-bold'>Joeri Breedveld</h3>
				<ul className='flex navbar-gap items-center'>
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
					<button onClick={() => router.push("/contact")} className='border border-black px-6 py-2'>
						<a>Contact</a>
					</button>
				</ul>
			</nav>
		</>
	)
}

// Exports
export default Navbar
