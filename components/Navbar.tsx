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
			<nav className='fixed page-padding-x flex justify-between w-full py-3 items-center flex-col md:flex-row bg-gray-100 bg-white'>
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
								<a className={router.pathname == "/" ? "text-[#515154] hover:cursor-default" : "hover:text-[#515154]"}>Home</a>
							</Link>
						</li>
						<li
							onClick={() => {
								open == false ? setOpen(true) : setOpen(false)
							}}
							className='md:hidden'
						>
							<Link href='/about'>
								<a className={router.pathname == "/about" ? "text-[#515154] hover:cursor-default" : "hover:text-[#515154]"}>Over mij</a>
							</Link>
						</li>
						<li
							onClick={() => {
								open == false ? setOpen(true) : setOpen(false)
							}}
							className='md:hidden'
						>
							<Link href='/projects'>
								<a className={router.pathname == "/projects" ? "text-[#515154] hover:cursor-default" : "hover:text-[#515154]"}>Projecten</a>
							</Link>
						</li>
						<li
							onClick={() => {
								open == false ? setOpen(true) : setOpen(false)
							}}
							className='md:hidden'
						>
							<Link href='/contact'>
								<a className={router.pathname == "/contact" ? "text-[#515154] hover:cursor-default" : "text-[#515154]"}>Contact</a>
							</Link>
						</li>
					</ul>
				</section>

				<section className='hidden md:flex justify-between text-sm'>
					<ul className='flex navbar-gap items-center'>
						<li>
							<Link href='/'>
								<a className={router.pathname == "/" ? "text-[#515154] hover:cursor-default" : "text-[#515154]"}>Home</a>
							</Link>
						</li>
						<li>
							<Link href='/about'>
								<a className={router.pathname == "/about" ? "text-[#515154] hover:cursor-default" : "text-[#515154]"}>Over mij</a>
							</Link>
						</li>
						<li>
							<Link href='/projects'>
								<a className={router.pathname == "/projects" ? "text-[#515154] hover:cursor-default" : "text-[#515154]"}>Projecten</a>
							</Link>
						</li>
					</ul>
				</section>
				<Link href='/contact'>
					<a className={router.pathname == "/contact" ? "text-[#515154] hover:cursor-default hidden md:block text-sm" : "text-[#515154] hidden md:block text-sm"}>Contact</a>
				</Link>
			</nav>
		</>
	)
}

// Exports
export default Navbar
