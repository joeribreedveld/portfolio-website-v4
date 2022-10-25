// Imports
import type { GetStaticProps, NextPage } from "next";
import experiences from "../../public/json/experiences.json";
import { useRouter } from "next/router";
import Link from "next/link";

// Functions
const Experience: NextPage = ({ experience }: any) => {
  console.log(experience);
  return (
    <>
      <div className="bg-white min-h-[100vh] page-padding-x page-padding-y">
        <Link href="/#experience">
          <p className="block mb-8 underline text-primary hover:text-secondary hover:cursor-pointer">
            Ga terug
          </p>
        </Link>
        <img
          src={experience.img}
          alt="experience image"
          className="object-cover h-96 w-full rounded-lg mb-8 shadow-lg"
        />
        <h3 className="text-2xl font-bold mb-4">{experience.title}</h3>
        <p className="mb-4 font-bold text-slate-500">{experience.time}</p>
        <a
          className="mb-8 text-primary underline hover:text-secondary"
          href={experience.link}
          target="_blank"
        >
          Link naar website
        </a>
        <p className="mt-6">{experience.description}</p>
      </div>
    </>
  );
};

// getStaticPaths
export async function getStaticPaths() {
  const paths = experiences.map((experience) => {
    return { params: { slug: experience.slug } };
  });

  return {
    paths,
    fallback: false,
  };
}

// getStaticProps
export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const experience = experiences.filter(
    (experience) => experience.slug === params.slug
  );

  return {
    props: {
      experience: experience[0],
    },
  };
};

// Exports
export default Experience;
