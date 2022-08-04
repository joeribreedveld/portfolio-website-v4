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
			<nav className='fixed page-padding-x flex justify-between w-full py-6 items-center flex-col md:flex-row border-b b-gray-700 bg-white'>
				<div className='flex justify-between w-full md:w-[unset]'>
					<h3 onClick={() => router.push("/")} className='hover:cursor-pointer border-black text-black text-xl'>
						JOERI <span className='text-blue'>BREEDVELD</span>
					</h3>
					<button
						onClick={() => {
							open == false ? setOpen(true) : setOpen(false)
						}}
						className='md:hidden'
					>
						<BiMenu size={24} />
					</button>
				</div>

				<section className={open == false ? "flex-col w-full pt-8 hidden" : "flex flex-col w-full md:w-[unset] pt-8"}>
					<ul className='flex gap-4 flex-col'>
						<li
							onClick={() => {
								open == false ? setOpen(true) : setOpen(false)
							}}
							className='md:hidden'
						>
							<Link href='/'>
								<a className={router.pathname == "/" ? "text-gray-500 hover:cursor-default" : "hover:text-gray-500"}>Home</a>
							</Link>
						</li>
						<li
							onClick={() => {
								open == false ? setOpen(true) : setOpen(false)
							}}
							className='md:hidden'
						>
							<Link href='/about'>
								<a className={router.pathname == "/about" ? "text-gray-500 hover:cursor-default" : "hover:text-gray-500"}>Over mij</a>
							</Link>
						</li>
						<li
							onClick={() => {
								open == false ? setOpen(true) : setOpen(false)
							}}
							className='md:hidden'
						>
							<Link href='/projects'>
								<a className={router.pathname == "/projects" ? "text-gray-500 hover:cursor-default" : "hover:text-gray-500"}>Projecten</a>
							</Link>
						</li>
						<li
							onClick={() => {
								open == false ? setOpen(true) : setOpen(false)
							}}
							className='md:hidden'
						>
							<Link href='/contact'>
								<a className={router.pathname == "/contact" ? "text-gray-500 hover:cursor-default" : "hover:text-gray-500"}>Contact</a>
							</Link>
						</li>
					</ul>
				</section>

				<section className='flex-col hidden md:flex'>
					<ul className='flex navbar-gap items-center'>
						<li>
							<Link href='/'>
								<a className={router.pathname == "/" ? "text-gray-500 hover:cursor-default" : "hover:text-gray-500"}>Home</a>
							</Link>
						</li>
						<li>
							<Link href='/about'>
								<a className={router.pathname == "/about" ? "text-gray-500 hover:cursor-default" : "hover:text-gray-500"}>Over mij</a>
							</Link>
						</li>
						<li>
							<Link href='/projects'>
								<a className={router.pathname == "/projects" ? "text-gray-500 hover:cursor-default" : "hover:text-gray-500"}>Projecten</a>
							</Link>
						</li>
						<li>
							<Link href='/contact'>
								<a className={router.pathname == "/contact" ? "text-gray-500 hover:cursor-default" : "hover:text-gray-500"}>Contact</a>
							</Link>
						</li>
					</ul>
				</section>
			</nav>
		</>
	)
}

// Exports
export default Navbar
