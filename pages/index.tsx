import { FAQ, OurBlog } from "@/components/Common";
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
  publishedAt: string;
  updatedAt: string;
  image: Image;
}


export const graphcms = new GraphQLClient(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cljaggjro2abl01ue45ggesph/master"
);

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
        description
        title
        updatedAt
      }
    }
  `;

  const { posts } = await graphcms.request<{ posts: Post[] }>(QUERY);

  return posts;
};

export async function getStaticProps() {
  const posts: Post[] = await getPosts();
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <>
      <Hero />
      <HowWeWork />
      <Features />
      <Testimonials />
      <FAQ />
      <Contact />
      <OurBlog data={posts} />
    </>
  );
}
