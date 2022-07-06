// Imports
import Head from "next/head"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

// Props
type LayoutProps = {
	children: React.ReactNode
}

// Functions
function Layout({ children }: LayoutProps) {
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<title>Joeri Breedveld | Full Stack Developer</title>
			</Head>
			<header>
				<Navbar />
			</header>
			<main className='min-h-screen'>{children}</main>
			<footer className='page-padding-x py-8 bg-gray-700 text-white'>
				<Footer />
			</footer>
		</>
	)
}

// Exports
export default Layout
