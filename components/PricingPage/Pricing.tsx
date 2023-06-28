import PricingCard from "./PricingCard";

const links = [
  { title: "All limited links", gray: false },
  { title: "Own analytics platform", gray: false },
  { title: "Chat support", gray: true },
  { title: "Optimize hashtags", gray: true },
  { title: "Unlimited users", gray: true },
];

export default function Pricing() {
  return (
    <div className="container px-4 lg:px-0 py-12 md:py-24 lg:py-32">
      <div className="flex gap-4 flex-col justify-center text-center items-center">
        <h1 className="text-darkblue text-4xl lg:text-5xl font-semibold leading-10">
          Our Pricing Plans
        </h1>
        <div className="max-w-[562px] opacity-70 text-center text-gray-800 text-sm leading-6 md:text-[16px] font-medium md:leading-7">
          When you’re ready to go beyond prototyping in Figma, Webflow is ready
          to help you bring your designs to life — without coding them.
        </div>
      </div>
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <PricingCard links={links} best={false} />
        <PricingCard links={links} best={true} />
        <PricingCard links={links} best={false} />
      </div>
    </div>
  );
}
