import { Hero, Mission, OurTeam, Process, WhoWeAre } from "@/components/AboutPage";
import { Benefits } from "@/components/Common";

export default function About() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Process />
      <Mission />
      <Benefits logoPos="bottom" />
      <OurTeam />
    </>
  );
}
