// Imports
import { Link, animateScroll as scroll } from "react-scroll";

// Functions
function About() {
  return (
    <>
      <section className="bg-white page-padding-x page-padding-y" id="about">
        <h2 className="mb-6 text-2xl font-bold">Over mij</h2>
        <p className="mb-8 md:w-3/4 md:text-lg">
          Hallo, mijn naam is Joeri Breedveld, ik ben 18 jaar oud en woon in
          Amsterdam. Ik programmeer sinds 2021 en ik studeer Software
          Development aan het Mediacollege Amsterdam. In mijn vrije tijd werk ik
          veel aan kleine projecten. Ook volg ik veel tutorials op Youtube en
          leer ik meer over programmeren. Ik ben een doorzetter; ik ga door met
          zoeken totdat ik de oplossing heb gevonden en ik maak elke dag tijd
          vrij om iets nieuws te leren. Ook werk ik erg gestructureerd.
        </p>
        <p className="mb-8 md:text-lg md:w-3/4">
          Ik ben geïnteresseerd in het maken van websites en web applicaties. Ik
          weet nog niet precies wat ik later wil doen als developer, maar ik
          vind frontend en backend beide interessant. Mijn ambitie is om een
          zowel frontend als backend goed te beheersen. Naast mijn code skills
          wil ik ook werken aan soft skills, zoals werken in een Scrum team en
          kijk ik er naar uit om mee te kunnen werken aan projecten die
          belangrijk zijn voor klanten.
        </p>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <p className="text-white button bg-tertiary hover:bg-primary active:bg-secondary">
            Mijn projecten
          </p>
        </Link>
      </section>
    </>
  );
}

// Exports
export default About;
