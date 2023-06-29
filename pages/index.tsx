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
  shortDescription: string;
  publishedAt: string;
  updatedAt: string;
  image: Image;
  FeaturedPost: boolean;
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
      <OurBlog isMain={false} data={posts} />
    </>
  );
}
