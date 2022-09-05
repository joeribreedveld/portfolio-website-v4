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
				{/* Navbar */}
				<div className='hidden xl:block xl:flex justify-between w-full items-center'>
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
				</div>
				{/* Mobile Navbar */}
				<div className='xl:hidden w-full'>
					<div className='flex w-full justify-between'>
						<img className='h-8' src='/img/jb-logo-white.png' alt='' />
						<button onClick={() => setOpen(!open)}>
							<BiMenu size={24} />
						</button>
					</div>

					<ul className={open ? "flex flex-col py-4 mt-4 w-full" : "hidden"}>
						<li className='w-full bg-red p-4 hover:bg-primary'>
							<a href='#'>Home</a>
						</li>
						<li className='w-full bg-red p-4 hover:bg-primary'>
							<a href='#'>Over mij</a>
						</li>
						<li className='w-full bg-red p-4 hover:bg-primary'>
							<a href='#'>Skills</a>
						</li>
						<li className='w-full bg-red p-4 hover:bg-primary'>
							<a href='#'>Projecten </a>
						</li>
						<li className='w-full bg-red p-4 hover:bg-primary'>
							<a href='#'>Werkervaring</a>
						</li>
						<li className='w-full bg-red p-4 hover:bg-primary'>
							<a href='#'>Contact</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	)
}

// Exports
export default Navbar
