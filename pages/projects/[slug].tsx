import { Button } from "@/components/Common";
import { Project, graphcms } from "@/graphcms";
import { gql } from "graphql-request";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

interface ProjectCaseProps {
  project: Project;
}

const QUERY = gql`
  query ($slug: String!) {
    project(where: { slug: $slug }) {
      createdAt
      id
      publishedAt
      shortDescription
      image {
        url
      }
      content {
        html
      }
      slug
      client
      service
      deliverable
      description
      title
      updatedAt
      keywords
    }
  }
`;

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const slug = params?.slug as string;
  const data = await graphcms.request<{ project: Project }>(QUERY, { slug });
  const project = data.project;

  return {
    props: {
      project,
    },
    revalidate: 10,
  };
}

export const getSluglist = async () => {
  const query = gql`
    query Slugs {
      projects {
        slug
      }
    }
  `;

  const result = await graphcms.request<{ projects: { slug: string }[] }>(
    query
  );

  return result;
};

export async function getStaticPaths() {
  const { projects } = await getSluglist();
  return {
    paths: projects.map((project) => ({ params: { slug: project.slug } })),
    fallback: "blocking",
  };
}

export default function ProjectCase({ project }: ProjectCaseProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title> Finsweet | {project.title}</title>
        <meta name="description" content="Finsweet website" />
        <meta property="og:description" content="Finsweet website" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Finsweet" />
        <meta name="twitter:description" content="Finsweet website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="max-w-[1064px] mx-auto py-12 md:py-24 lg:py-32 px-4 xl:px-0">
        <h4 className="text-darkblue font-medium">
          Web design and development
        </h4>
        <h1 className="text-3xl md:text-[32px] max-w-2xl mb-2 lg:mb-4 lg:leading-[64px] mt-1.5 lg:mt-3 lg:text-5xl text-darkblue font-semibold">
          Finsweet Design case studies
        </h1>
        <p className="max-w-[820px] mb-4 md:mb-8 lg:mb-12 text-darkblue font-medium text-sm lg:text-base opacity-70 lg:leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse.
        </p>
        <Image
          src={project.image.url}
          alt="Image"
          className="w-full h-full object-cover mb-6 md:mb-8 lg:mb-12"
          width={1280}
          height={700}
        />
        <ul className="grid grid-cols-1 gap-4 md:flex md:justify-between py-4 md:py-6 lg:py-8 border-b mb-24 border-darkblue border-opacity-30">
          <li className="flex flex-col gap-1">
            <p className="text-darkblue opacity-80 font-medium">Client</p>
            <h4 className="text-darkblue text-lg md:text-xl lg:text-2xl font-medium">
              {project.client}
            </h4>
          </li>
          <li className="flex flex-col gap-1">
            <p className="text-darkblue opacity-80 font-medium">Service</p>
            <h4 className="text-darkblue text-lg md:text-xl lg:text-2xl font-medium">
              {project.service}
            </h4>
          </li>
          <li className="flex flex-col gap-1">
            <p className="text-darkblue opacity-80 font-medium">Deliverable</p>
            <h4 className="text-darkblue text-lg md:text-xl lg:text-2xl font-medium">
              {project.deliverable}
            </h4>
          </li>
        </ul>
        <div
          className="w-full max-w-[840px] mx-auto mb-8 md:mb-16 lg:mb-28 prose prose-stone prose-text-start prose-headings:text-darkblue prose-h3:text-2xl md:prose-h3:text-[32px] lg:prose-h3:text-[38px] prose-p:text-sm prose-li:text-sm md:prose-li:text-base md:prose-p:text-base prose-p:text-darkblue prose-p:text-opacity-75 lg:prose-p:leading-7 prose-img:w-full"
          dangerouslySetInnerHTML={{ __html: project.content.html }}
        ></div>
        <ul className="py-6 border-t mb-8 md:mb-16 lg:mb-28 border-b items-center border-darkblue border-opacity-20 grid grid-cols-2 gap-4 lg:flex lg:justify-between">
          <li className="text-royalblue col-span-2 text-xl lg:text-2xl font-medium">
            Keywords
          </li>
          {project.keywords.map((keyword: String, idx: number) => (
            <li
              className="text-darkblue opacity-70 font-medium text-base lg:text-lg"
              key={idx}
            >
              {keyword}
            </li>
          ))}
        </ul>
        <div className="max-w-[845px] flex flex-col w-full mx-auto">
          <h1 className="text-darkblue text-3xl md:text-[32px] lg:leading-[64px] font-semibold text-center w-full mx-auto lg:text-5xl">
            Let&#39;s build something great together
          </h1>
          <p className="max-w-[625px] mx-auto mt-5 mb-10 text-center text-darkblue opacity-70 font-medium lg:leading-7">
            Nullam vitae purus at tortor mattis dapibus. Morbi purus est,
            ultricies nec dolor sit amet, scelerisque cursus purus.
          </p>
          <Button
            styles="bg-yellow text-darkblue hover:bg-darkblue hover:text-white mx-auto"
            onClick={() => router.push("/contacts")}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </>
  );
}
