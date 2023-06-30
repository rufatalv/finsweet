import { OurBlog } from "@/components/Common";
import { Post, getPosts } from "@/graphcms";
import moment from "moment";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
  const posts: Post[] = await getPosts(false);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

interface BlogProps {
  posts: Post[];
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
  const featuredPost = posts.filter((post) => post.featuredPost === true)[0];
  return (
    <>
      <Head>
        <title> Finsweet | Blog</title>
        <meta name="description" content="Finsweet website" />
        <meta property="og:description" content="Finsweet website" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Finsweet" />
        <meta name="twitter:description" content="Finsweet website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="container flex flex-col items-center text-center px-4 lg:px-0 py-12 md:py-24 lg:py-32">
        <h1 className="text-3xl md:text-[32px] lg:text-5xl mx-auto text-center font-semibold text-darkblue max-w-4xl">
          {featuredPost.title}
        </h1>
        <div className="text-darkblue mt-4 text-base flex flex-col md:flex-row gap-1 font-medium">
          <h4 className="opacity-80">{featuredPost.author} </h4>
          <h4 className="opacity-100 flex gap-1">
            Posted on
            <span>{moment(featuredPost.createdAt).format("Do MMMM YYYY")}</span>
          </h4>
        </div>
        <div className="w-full h-[477px] mt-8">
          <Image
            alt="poster"
            src={featuredPost.image.url}
            className="w-full h-full object-cover"
            width={1280}
            height={900}
          />
        </div>
        <p className="mt-12 text-darkblue opacity-70 max-w-3xl lg:leading-7">
          {featuredPost.description}
        </p>
        <Link
          className="mt-4 text-royalblue text-center"
          href={`/blog/${featuredPost.slug}`}
        >
          Read More
        </Link>
      </div>
      <OurBlog data={posts} isMain={true} />
    </>
  );
};

export default Blog;
