import { gql } from "graphql-request";
import Image from "next/image";
import Head from "next/head";
import { GetStaticPropsContext } from "next";
import moment from "moment";
import { Post, graphcms } from "@/graphcms";

const QUERY = gql`
  query ($slug: String!) {
    post(where: { slug: $slug }) {
      createdAt
      id
      author
      publishedAt
      shortDescription
      image {
        url
      }
      content {
        html
      }
      featuredPost
      slug
      description
      title
      updatedAt
    }
  }
`;

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const slug = params?.slug as string;
  const data = await graphcms.request<{ post: Post }>(QUERY, { slug });
  const post = data.post;

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

export const getSluglist = async () => {
  const query = gql`
    query Slugs {
      posts {
        slug
      }
    }
  `;

  const result = await graphcms.request<{ posts: { slug: string }[] }>(query);

  return result;
};

export async function getStaticPaths() {
  const { posts } = await getSluglist();
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: "blocking",
  };
}

interface PostPageProps {
  post: Post;
}

export default function PostPage({ post }: PostPageProps) {
  return (
    <>
      <Head>
        <title> Finsweet | {post.title}</title>
        <meta name="description" content="Finsweet website" />
        <meta property="og:description" content="Finsweet website" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content='Finsweet' />
        <meta name="twitter:description" content="Finsweet website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="container flex flex-col items-center px-4 lg:px-0 py-12 md:py-24 lg:py-32">
        <h1 className="text-3xl md:text-[32px] lg:text-5xl mx-auto text-center font-semibold text-darkblue max-w-4xl">
          {post.title}
        </h1>
        <div className="text-darkblue mt-4 text-base flex flex-col text-center md:flex-row gap-1 font-medium">
          <h4 className="opacity-80">{post.author} </h4>
          <h4 className="opacity-100 flex gap-1">
            Posted on
            <span>{moment(post.createdAt).format("Do MMMM YYYY")}</span>
          </h4>
        </div>
        <div className="w-full h-[477px] mt-8">
          <Image
            alt="poster"
            src={post.image.url}
            className="w-full h-full object-cover"
            width={500}
            height={300}
          />
        </div>
        <div
          className="mt-8 md:mt-16 lg:mt-20 max-w-[840px] prose prose-stone prose-text-start prose-h3:text-2xl md:prose-h3:text-[32px] lg:prose-h3:text-[38px] prose-p:text-base prose-p:text-darkblue prose-p:text-opacity-75 lg:prose-p:leading-7 prose-img:w-full"
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        ></div>
      </div>
    </>
  );
}
