import { FAQ, OurBlog, ProjectsIntro } from "@/components/Common";
import {
  Contact,
  Features,
  Hero,
  HowWeWork,
  Testimonials,
} from "@/components/HomePage";
import { Post, Project, getPosts, getProjects } from "@/graphcms";
import Head from "next/head";

export async function getStaticProps() {
  const posts: Post[] = await getPosts();
  const projects: Project[] = await getProjects();
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
      <Head>
        <title> Finsweet | Home Page</title>
        <meta name="description" content="Finsweet website" />
        <meta property="og:description" content="Finsweet website" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Finsweet" />
        <meta name="twitter:description" content="Finsweet website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
      </Head>
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
