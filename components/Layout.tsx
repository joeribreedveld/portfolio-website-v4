// Imports
import Head from "next/head"

// Props
type LayoutProps = {
	children: React.ReactNode
}

// Functions
export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<title>Joeri Breedveld | Full Stack Developer</title>
			</Head>
			<header>
				<p>Header</p>
			</header>
			<main>{children}</main>
			<footer>
				<p>Footer</p>
			</footer>
		</>
	)
}
