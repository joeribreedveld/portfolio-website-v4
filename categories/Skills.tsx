// Imports
import skills from "../public/json/skills.json";
import Link from "next/link";

// Functions
function Skills() {
  const skillList = skills.map((skill) => {
    return (
      <>
        <li
          key={skill.id}
          className="bg-white rounded p-8 items-center flex flex-col justify-center text-center"
        >
          <img
            src={skill.img}
            alt="Skill image icon"
            className="h-12 mb-4 object-fill"
          />
          <p>{skill.name}</p>
        </li>
      </>
    );
  });

  return (
    <>
      <section className="page-padding-x page-padding-y bg-gray" id="skills">
        <h2 className="font-bold text-2xl mb-4">Mijn skills</h2>
        <p className="pb-10">
          Dit is een lijst van technologiën waar ik mee kan werken.
        </p>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {skillList}
        </ul>
        <Link href="https://github.com/joeribreedveld">
          <a
            target="_blank"
            rel="noreferrer"
            className="button text-white bg-tertiary hover:bg-primary active:bg-secondary"
          >
            Mijn GitHub
          </a>
        </Link>
      </section>
    </>
  );
}

// Exports
export default Skills;
