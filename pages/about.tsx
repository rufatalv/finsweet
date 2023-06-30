import {
  Hero,
  Mission,
  OurTeam,
  Process,
  WhoWeAre,
} from "@/components/AboutPage";
import { Benefits } from "@/components/Common";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title> Finsweet | About Us</title>
        <meta name="description" content="Finsweet website" />
        <meta property="og:description" content="Finsweet website" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Finsweet" />
        <meta name="twitter:description" content="Finsweet website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Hero />
      <WhoWeAre />
      <Process />
      <Mission />
      <Benefits logoPos="bottom" />
      <OurTeam />
    </>
  );
}
