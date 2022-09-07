// Imports
import { useRouter } from "next/router"
import { useState } from "react"
import { BiMenu } from "react-icons/bi"
import { Link, animateScroll as scroll } from "react-scroll"

// Functions
function Navbar() {
	const router = useRouter()
	const [open, setOpen] = useState(false)

	return (
		<>
			<nav className='bg-black text-white fixed w-screen page-padding-x py-4 flex justify-between items-center'>
				{/* Navbar */}
				<div className='hidden xl:flex justify-between w-full items-center'>
					<img onClick={() => router.push("/")} className='h-8 hover:cursor-pointer' src='/img/jb-logo-white.png' alt='Logo' />
					<ul className='flex gap-12'>
						<li className='hover:cursor-pointer hover:text-slate-300'>
							<Link activeClass='text-slate-400' to='hero' spy={true} smooth={true} offset={-70} duration={500}>
								<p>Home</p>
							</Link>
						</li>
						<li className='hover:cursor-pointer hover:text-slate-300'>
							<Link activeClass='text-slate-400' to='about' spy={true} smooth={true} offset={-70} duration={500}>
								<p>Over mij</p>
							</Link>
						</li>
						<li className='hover:cursor-pointer hover:text-slate-300'>
							<Link activeClass='text-slate-400' to='skills' spy={true} smooth={true} offset={-70} duration={500}>
								<p>Skills</p>
							</Link>
						</li>
						<li className='hover:cursor-pointer hover:text-slate-300'>
							<Link activeClass='text-slate-400' to='projects' spy={true} smooth={true} offset={-70} duration={500}>
								<p>Projecten</p>
							</Link>
						</li>
						<li className='hover:cursor-pointer hover:text-slate-300'>
							<Link activeClass='text-slate-400' to='experience' spy={true} smooth={true} offset={-70} duration={500}>
								<p>Werkervaring</p>
							</Link>
						</li>
						<li className='hover:cursor-pointer hover:text-slate-300'>
							<Link activeClass='text-slate-400' to='contact' spy={true} smooth={true} offset={-70} duration={500}>
								<p>Contact</p>
							</Link>
						</li>
					</ul>
				</div>
				{/* Mobile Navbar */}
				<div className='xl:hidden w-full'>
					<div className='flex w-full justify-between'>
						<img
							onClick={() => {
								setOpen(false)
								router.push("/")
							}}
							className='h-8 hover:cursor-pointer'
							src='/img/jb-logo-white.png'
							alt=''
						/>
						<button onClick={() => setOpen(!open)}>
							<BiMenu size={24} />
						</button>
					</div>

					<ul className={open ? "flex flex-col py-4 mt-4 w-full" : "hidden"}>
						<Link onClick={() => setOpen(false)} activeClass='text-slate-400' to='hero' spy={true} smooth={true} offset={-70} duration={500}>
							<li className='hover:cursor-pointer w-full bg-red p-4 hover:bg-primary'>
								<p className='w-full h-full'>Home</p>
							</li>
						</Link>
						<Link onClick={() => setOpen(false)} activeClass='text-slate-400' to='about' spy={true} smooth={true} offset={-70} duration={500}>
							<li className='hover:cursor-pointer w-full bg-red p-4 hover:bg-primary'>
								<p className='w-full h-full'>Over mij</p>
							</li>
						</Link>
						<Link onClick={() => setOpen(false)} activeClass='text-slate-400' to='skills' spy={true} smooth={true} offset={-70} duration={500}>
							<li className='hover:cursor-pointer w-full bg-red p-4 hover:bg-primary'>
								<p className='w-full h-full'>Skills</p>
							</li>
						</Link>
						<Link onClick={() => setOpen(false)} activeClass='text-slate-400' to='projects' spy={true} smooth={true} offset={-70} duration={500}>
							<li className='hover:cursor-pointer w-full bg-red p-4 hover:bg-primary'>
								<p className='w-full h-full'>Projecten</p>
							</li>
						</Link>
						<Link onClick={() => setOpen(false)} activeClass='text-slate-400' to='experience' spy={true} smooth={true} offset={-70} duration={500}>
							<li className='hover:cursor-pointer w-full bg-red p-4 hover:bg-primary'>
								<p className='w-full h-full'>Werkervaring</p>
							</li>
						</Link>
						<Link onClick={() => setOpen(false)} activeClass='text-slate-400' to='contact' spy={true} smooth={true} offset={-70} duration={500}>
							<li className='hover:cursor-pointer w-full bg-red p-4 hover:bg-primary'>
								<p className='w-full h-full'>Contact</p>
							</li>
						</Link>
					</ul>
				</div>
			</nav>
		</>
	)
}

// Exports
export default Navbar
