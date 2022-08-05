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
			<nav className='fixed page-padding-x flex justify-between w-full h-12 items-center flex-col md:flex-row bg-[#F0F0F0CC] backdrop-blur-2xl'>
				<div className='flex justify-between w-full md:w-[unset]'>
					<h3 onClick={() => router.push("/")} className='hover:cursor-pointer border-black text-black text-xl'>
						Joeri Breedveld
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
								<a className={router.pathname == "/" ? "text-[#161617] hover:cursor-default" : "hover:text-black"}>Home</a>
							</Link>
						</li>
						<li
							onClick={() => {
								open == false ? setOpen(true) : setOpen(false)
							}}
							className='md:hidden'
						>
							<Link href='/about'>
								<a className={router.pathname == "/about" ? "text-[#161617] hover:cursor-default" : "hover:text-black"}>Over mij</a>
							</Link>
						</li>
						<li
							onClick={() => {
								open == false ? setOpen(true) : setOpen(false)
							}}
							className='md:hidden'
						>
							<Link href='/projects'>
								<a className={router.pathname == "/projects" ? "text-[#161617] hover:cursor-default" : "hover:text-black"}>Projecten</a>
							</Link>
						</li>
						<li
							onClick={() => {
								open == false ? setOpen(true) : setOpen(false)
							}}
							className='md:hidden'
						>
							<Link href='/contact'>
								<a className={router.pathname == "/contact" ? "text-[#161617] hover:cursor-default" : "text-[#161617]"}>Contact</a>
							</Link>
						</li>
					</ul>
				</section>

				<section className='hidden md:flex justify-between text-sm'>
					<ul className='flex navbar-gap items-center'>
						<li>
							<Link href='/'>
								<a className={router.pathname == "/" ? "hover:cursor-default text-[#00000080]" : "text-[#161617] hover:text-[#00000080]"}>Home</a>
							</Link>
						</li>
						<li>
							<Link href='/about'>
								<a className={router.pathname == "/about" ? "hover:cursor-default text-[#00000080]" : "text-[#161617] hover:text-[#00000080]"}>Over mij</a>
							</Link>
						</li>
						<li>
							<Link href='/projects'>
								<a className={router.pathname == "/projects" ? "hover:cursor-default text-[#00000080]" : "text-[#161617] hover:text-[#00000080]"}>Projecten</a>
							</Link>
						</li>
					</ul>
				</section>
				<Link href='/contact'>
					<a className={router.pathname == "/contact" ? "text-[#00000080] hover:cursor-default hidden md:block text-sm" : "text-[#161617] hidden md:block text-sm hover:text-[#00000080]"}>
						Contact
					</a>
				</Link>
			</nav>
		</>
	)
}

// Exports
export default Navbar
