// Imports
import { Link, animateScroll as scroll } from "react-scroll";

// Functions
function About() {
  return (
    <>
      <section className="page-padding-x page-padding-y bg-white" id="about">
        <h2 className="font-bold text-2xl mb-6">Over mij</h2>
        <p className="mb-8 md:w-3/4 md:text-lg">
          Hallo mijn naam is Joeri Breedveld. Ik ben een Full Stack Developer en
          ik woon in Amsterdam. Ik programmeer sinds 2021 en ik studeer Software
          Development aan het Mediacollege Amsterdam. Ik vind het heel leuk om
          nieuwe dingen te leren. In mijn vrije tijd werk ik veel aan kleine
          projectjes. Ook volg ik veel tutorials op Youtube en leer ik meer over
          JavaScript. Ik ben altijd opzoek naar nieuwe uitdagingen.
        </p>
        <p className="mb-4 md:text-lg md:w-3/4">
          Ik ben erg leergierig en ik wil zo veel mogelijk leren over
          programmeren. Ik probeer elke dag iets nieuws te leren en ik vind het
          leuk om nieuwe dingen te ontdekken. Ik ben erg geïnteresseerd in het
          maken van websites en web applicaties. Ik weet nog niet precies wat ik
          later wil doen binnen programmeren, maar ik vind frontend en backend
          beide erg leuk.
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
