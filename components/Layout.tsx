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
				<meta charSet='UTF-8' key='charset' />
				<meta name='viewport' content='width=device-width,initial-scale=1' key='viewport' />
				<meta name='description' content='Joeri Breedveld Full Stack Developer Portfolio Website' />
				<link rel='icon' href='/favicon.ico' />
				<title>Joeri Breedveld | Full Stack Developer</title>

				<meta property='og:url' content='https://joeribreedveld.com/' />
				<meta property='og:type' content='website' />
				<meta property='og:title' content='Joeri Breedveld | Full Stack Developer' />
				<meta property='og:description' content="Hello, I'm a full stack JavaScript web developer based in Amsterdam. Take a look at my experience and projects!" />
				<meta property='og:image' content='https://cdn.ttgtmedia.com/rms/onlineimages/code_g1019737194.jpg' />
				<meta name='twitter:card' content='summary_large_image' />
				<meta property='twitter:domain' content='joeribreedveld.com' />
				<meta property='twitter:url' content='https://joeribreedveld.com/' />
				<meta name='twitter:title' content='Joeri Breedveld | Full Stack Developer' />
				<meta name='twitter:description' content="Hello, I'm a full stack JavaScript web developer based in Amsterdam. Take a look at my experience and projects!" />
				<meta name='twitter:image' content='https://cdn.ttgtmedia.com/rms/onlineimages/code_g1019737194.jpg' />
			</Head>
			<header>
				<Navbar />
			</header>
			<main className='min-h-screen'>{children}</main>
			<footer className='page-padding-x py-8 bg-[#f6f6f6] text-[#424245] text-sm'>
				<Footer />
			</footer>
		</>
	)
}

// Exports
export default Layout
