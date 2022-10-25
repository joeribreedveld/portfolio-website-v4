// Imports
import type { GetStaticProps, NextPage } from "next";
import projects from "../../public/json/projects.json";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";

// Functions
const Project: NextPage = ({ project }: any) => {
  return (
    <>
      <div className="bg-white min-h-[100vh] page-padding-x page-padding-y">
        <Link href="/#projects">
          <p className="block mb-8 underline text-primary hover:text-secondary hover:cursor-pointer">
            Ga terug
          </p>
        </Link>
        <img
          src={project.img}
          alt="Project image"
          className="object-cover h-96 w-full rounded-lg mb-8 shadow-lg"
        />
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
        <p className="mb-6 font-bold text-slate-500">{project.date}</p>
        <ul className="mb-8 flex gap-6 items-center">
          {project.github ? (
            <li>
              <a
                className=""
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <FiGithub
                  size={24}
                  className="hover:text-primary transition ease-in-out duration-200"
                />
              </a>
            </li>
          ) : (
            ""
          )}
          {project.live ? (
            <li>
              <a
                className=""
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                <FiExternalLink
                  size={24}
                  className="hover:text-primary transition ease-in-out duration-200"
                />
              </a>
            </li>
          ) : (
            ""
          )}
        </ul>

        <p>{project.description}</p>
      </div>
    </>
  );
};

// getStaticPaths
export async function getStaticPaths() {
  const paths = projects.map((project) => {
    return { params: { slug: project.slug } };
  });

  return {
    paths,
    fallback: false,
  };
}

// getStaticProps
export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const project = projects.filter((project) => project.slug === params.slug);

  return {
    props: {
      project: project[0],
    },
  };
};

// Exports
export default Project;
