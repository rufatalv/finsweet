import { FAQ } from "@/components/Common";
import Head from "next/head";

export default function faq() {
  return (
    <>
      <Head>
        <title> Finsweet | FAQ</title>
        <meta name="description" content="Finsweet website" />
        <meta property="og:description" content="Finsweet website" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Finsweet" />
        <meta name="twitter:description" content="Finsweet website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
      </Head>
      <FAQ />
    </>
  );
}
