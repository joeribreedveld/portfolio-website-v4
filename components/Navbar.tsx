// Imports
import Link from "next/link"
import { useRouter } from "next/router"

// Functions
function Navbar() {
	const router = useRouter()

	return (
		<>
			<nav>
				<h3>Joeri Breedveld</h3>
				<ul>
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
					<button onClick={() => router.push("/contact")}>
						<a>Contact</a>
					</button>
				</ul>
			</nav>
		</>
	)
}

// Exports
export default Navbar
