import { FAQ, OurBlog, ProjectsIntro } from "@/components/Common";
import {
  Contact,
  Features,
  Hero,
  HowWeWork,
  Testimonials,
} from "@/components/HomePage";
import { GraphQLClient, gql } from "graphql-request";

interface Image {
  url: string;
}

interface Post {
  title: string;
  createdAt: string;
  slug: string;
  id: number;
  description: string;
  shortDescription: string;
  publishedAt: string;
  updatedAt: string;
  image: Image;
  FeaturedPost: boolean;
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
        deliverable
        keywords
        content {
          html
        }
      }
    }
  `;

  const { projects } = await graphcms.request<{ projects: Project[] }>(QUERY);

  return projects.slice(0, 3);
};
const getPosts = async (): Promise<Post[]> => {
  const QUERY = gql`
    query {
      posts {
        createdAt
        id
        publishedAt
        image {
          url
        }
        slug
        shortDescription
        description
        title
        updatedAt
        featuredPost
      }
    }
  `;

  const { posts } = await graphcms.request<{ posts: Post[] }>(QUERY);

  return posts.slice(0, 4);
};

export async function getStaticProps() {
  const posts: Post[] = await getPosts();
  const projects = await getProjects();
  return {
    props: {
      posts,
      projects,
    },
    revalidate: 10,
  };
}

export default function Home({
  posts,
  projects,
}: {
  posts: Post[];
  projects: Project[];
}) {
  return (
    <>
      <Hero />
      <HowWeWork />
      <ProjectsIntro data={projects} />
      <Features />
      <Testimonials />
      <FAQ />
      <Contact />
      <OurBlog isMain={false} data={posts} />
    </>
  );
}
