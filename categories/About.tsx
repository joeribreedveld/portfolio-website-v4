// Imports
import { Link, animateScroll as scroll } from "react-scroll";

// Functions
function About() {
  return (
    <>
      <section className="page-padding-x page-padding-y bg-white" id="about">
        <h2 className="font-bold text-2xl mb-6">Over mij</h2>
        <p className="mb-8 md:w-3/4 md:text-lg">
          Hallo mijn naam is Joeri Breedveld. Ik ben een Junior Full Stack
          Developer en ik woon in Amsterdam. Ik programmeer sinds 2021 en ik
          studeer Software Development aan Mediacollege Amsterdam. Ik vind het
          heel leuk om nieuwe dingen te leren. In mijn vrije tijd werk ik veel
          aan Next.js en andere skills om beter te worden in het maken van leuke
          projecten.
        </p>
        <p className="mb-4 md:text-lg md:w-3/4">
          Ik ben erg leergierig en wil graag meer leren over backend
          development. Ik probeer dagelijks te werken aan frontend en backend
          roadmaps. Voordat ik veel met backend ga doen wil ik eerst goed kunnen
          werken met een paar frontend frameworks zodat ik goed weet hoe de
          backend kan worden gebruikt in de frontend.
        </p>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <p className="text-primary underline hover:cursor-pointer hover:text-secondary">
            Bekijk mijn projecten
          </p>
        </Link>
      </section>
    </>
  );
}

// Exports
export default About;
