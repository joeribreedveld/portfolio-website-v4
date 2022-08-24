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
			<nav className='bg-black text-white fixed w-screen page-padding-x py-3'>
				<p>test</p>
			</nav>
		</>
	)
}

// Exports
export default Navbar
