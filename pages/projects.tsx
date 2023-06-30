import ProjectsComponent from "@/components/ProjectsPage/ProjectsComponent";
import Link from "next/link";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Project, getProjects } from "@/graphcms";
import Head from "next/head";

export async function getStaticProps() {
  const projects = await getProjects();
  return {
    props: {
      projects,
    },
    revalidate: 10,
  };
}

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <>
      <Head>
        <title> Finsweet | Projects</title>
        <meta name="description" content="Finsweet website" />
        <meta property="og:description" content="Finsweet website" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Finsweet" />
        <meta name="twitter:description" content="Finsweet website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="bg-grey">
        <div className="container flex flex-col px-4 lg:px-0 items-center py-24">
          <h4 className="text-base text-darkblue font-medium text-center mb-3">
            What we created
          </h4>
          <h2 className="text-darkblue text-2xl leading-8 md:text-[32px] md:leading-10 lg:leading-[64px] lg:text-5xl font-semibold text-center mb-6 max-w-[620px]">
            Our Work Portfolio
          </h2>
          <p className="mx-auto max-w-[730px] text-center">
            We help teams create great digital products by providing them with
            tools and technology to make the design-to-code process universally
            accessible.
          </p>
          <div className="flex gap-7 mt-8 text-darkblue">
            <Link href={"#"}>
              <FaFacebook size={16} />
            </Link>
            <Link href={"#"}>
              <FaTwitter size={16} />
            </Link>
            <Link href={"#"}>
              <FaInstagram size={16} />
            </Link>
            <Link href={"#"}>
              <FaLinkedin size={16} />
            </Link>
          </div>
        </div>
      </div>

      <ProjectsComponent data={projects} />
    </>
  );
}
