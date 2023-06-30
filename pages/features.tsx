import { Benefits, FAQ } from "@/components/Common";
import { Hero, Features } from "@/components/FeaturesPage";
import Head from "next/head";

export default function FeaturesPage() {
  return (
    <>
      <Head>
        <title> Finsweet | Features</title>
        <meta name="description" content="Finsweet website" />
        <meta property="og:description" content="Finsweet website" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Finsweet" />
        <meta name="twitter:description" content="Finsweet website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Hero />
      <Benefits logoPos="top" />
      <Features />
      <FAQ />
    </>
  );
}
