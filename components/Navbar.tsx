// Imports
import Link from "next/link"
import { useRouter } from "next/router"

// Functions
function Navbar() {
	const router = useRouter()

	return (
		<>
			<nav className='fixed page-padding-x flex justify-between w-full py-6 items-center bg-white'>
				<h3 onClick={() => router.push("/")} className='hover:cursor-pointer border-black'>
					Joeri Breedveld
				</h3>
				<ul className='flex navbar-gap items-center'>
					<li>
						<Link href='/'>
							<a className={router.pathname == "/" ? "text-gray-400 hover:cursor-default" : ""}>Home</a>
						</Link>
					</li>
					<li>
						<Link href='/about'>
							<a className={router.pathname == "/about" ? "text-gray-400 hover:cursor-default" : ""}>Over mij</a>
						</Link>
					</li>
					<li>
						<Link href='/projects'>
							<a className={router.pathname == "/projects" ? "text-gray-400 hover:cursor-default" : ""}>Projecten</a>
						</Link>
					</li>
					<li>
						<Link href='/contact'>
							<a className={router.pathname == "/contact" ? "text-gray-400 hover:cursor-default" : ""}>Contact</a>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}

// Exports
export default Navbar
