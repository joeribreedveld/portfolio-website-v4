// Imports
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Props
type LayoutProps = {
  children: React.ReactNode;
};

// Functions
function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <meta
          name="description"
          content="Joeri Breedveld Full Stack Developer Portfolio Website"
        />
        <link rel="icon" href="/favicon.ico" />
        <title>Joeri Breedveld | Full Stack Developer</title>

        <meta property="og:url" content="https://joeribreedveld.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Joeri Breedveld | Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Hallo, ik ben een full stack developer en ik woon in Amsterdam. Ik vind het leuk om nieuwe dingen te leren en sta altijd open voor uitdagingen."
        />
        <meta property="og:image" content="../public/img/metaimg.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="joeribreedveld.com" />
        <meta property="twitter:url" content="https://joeribreedveld.com/" />
        <meta
          name="twitter:title"
          content="Joeri Breedveld | Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Hallo, ik ben een full stack developer en ik woon in Amsterdam. Ik vind het leuk om nieuwe dingen te leren en sta altijd open voor uitdagingen."
        />
        <meta name="twitter:image" content="../public/img/metaimg.jpg" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen">{children}</main>
      <footer className="bg-black py-3 page-padding-x text-white flex justify-center items-center">
        <Footer />
      </footer>
    </>
  );
}

// Exports
export default Layout;
