import ProjectsComponent from "@/components/ProjectsPage/ProjectsComponent";
import { GraphQLClient, gql } from "graphql-request";
import Link from "next/link";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
interface Image {
  url: string;
}

interface Project {
  title: string;
  category: string;
  description: string;
  heroDescription: string;
  shortDescription: string;
  image: Image;
  slug: string;
  client: string;
  createdAt: string;
  service: string;
  deliverable: string;
  keywords: string;
}

export const graphcms = new GraphQLClient(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cljaggjro2abl01ue45ggesph/master"
);

const getProjects = async (): Promise<Project[]> => {
  const QUERY = gql`
    query {
      projects {
        title
        category
        description
        heroDescription
        slug
        shortDescription
        image {
          url
        }
        client
        service
        createdAt
        deliverable
        keywords
        content {
          html
        }
      }
    }
  `;

  const { projects } = await graphcms.request<{ projects: Project[] }>(QUERY);

  return projects;
};

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
