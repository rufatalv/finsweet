import { FAQ } from "@/components/Common";
import { Pricing } from "@/components/PricingPage";
import Head from "next/head";

export default function PricingPage() {
  return (
    <>
      <Head>
        <title> Finsweet | Pricing</title>
        <meta name="description" content="Finsweet website" />
        <meta property="og:description" content="Finsweet website" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Finsweet" />
        <meta name="twitter:description" content="Finsweet website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Pricing />
      <FAQ />
    </>
  );
}
