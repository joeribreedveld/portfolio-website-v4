// Imports
import projects from "../public/json/projects.json";

// Functions
function Projects() {
  const customSort = (a: any, b: any) => {
    a = a.date.toString();
    b = b.date.toString();
    a = a.split("-");
    b = b.split("-");
    const dateA = new Date(a[1], a[0], 1);
    const dateB = new Date(b[1], b[0], 1);
    if (dateA > dateB) {
      return -1;
    }
    if (dateA < dateB) {
      return 1;
    }
    return 0;
  };

  const projectsData = projects.sort(customSort);

  const projectList = projectsData.map((project) => {
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
          Dit is een lijst van mijn projecten. Je kan per project een
          uitgebreide pagina bekijken met meer informatie. De projecten zijn
          gesorteerd op datum van nieuwe naar oud.
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
