// Imports
import projects from "../public/json/projects.json";

// Functions
function Projects() {
  const projectList = projects.map((project) => {
    return (
      <>
        <li key={project.id}>
          <img
            src={project.img}
            alt="Project image"
            className="object-cover h-48 w-full rounded-lg mb-4 shadow-lg"
          />
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <h4 className="mb-2 text-secondary font-bold">{project.date}</h4>
          <p className="mb-4">{project.intro}</p>
          <a
            href={"/projects/" + project.slug}
            className="text-primary underline hover:text-secondary"
          >
            Meer informatie
          </a>
        </li>
      </>
    );
  });

  return (
    <>
      <section className="page-padding-x page-padding-y bg-white" id="projects">
        <h2 className="font-bold text-2xl mb-4">Mijn projecten</h2>
        <p className="pb-10 md:w-1/2">
          Dit is een lijst van projecten die ik heb gemaakt. Je kan per project
          een uitgebreide pagina bekijken met meer informatie. Onderaan de
          pagina staan de meest recente projecten.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-16">
          {projectList}
        </ul>
      </section>
    </>
  );
}

// Exports
export default Projects;
