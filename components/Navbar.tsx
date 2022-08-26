// Imports
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { BiMenu } from "react-icons/bi"

// Functions
function Navbar() {
	const router = useRouter()
	const [open, setOpen] = useState(false)

	return (
		<>
			<nav className='bg-black text-white fixed w-screen page-padding-x py-4 flex justify-between items-center'>
				<img className='h-8' src='/img/jb-logo-white.png' alt='' />
				<ul className='flex gap-12'>
					<li>
						<a href='#'>Home</a>
					</li>
					<li>
						<a href='#'>Over mij</a>
					</li>
					<li>
						<a href='#'>Skills</a>
					</li>
					<li>
						<a href='#'>Projecten </a>
					</li>
					<li>
						<a href='#'>Werkervaring</a>
					</li>
					<li>
						<a href='#'>Contact</a>
					</li>
				</ul>
			</nav>
		</>
	)
}

// Exports
export default Navbar
