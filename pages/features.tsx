import { Benefits, FAQ } from "@/components/Common";
import { Hero, Features } from "@/components/FeaturesPage";

export default function FeaturesPage() {
  return (
    <>
      <Hero />
      <Benefits logoPos="top" />
      <Features />
      <FAQ />
    </>
  );
}
