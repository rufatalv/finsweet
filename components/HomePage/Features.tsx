import { FeaturesCard } from "./FeaturesCard";
import { FaCircleCheck, FaPeopleGroup, FaPenRuler } from "react-icons/fa6";
export default function Features() {
  return (
    <div className="bg-grey">
      <div className="container flex flex-col px-4 lg:px-0 items-center py-32">
        <h4 className="text-base text-darkblue font-medium text-center mb-3">
          Features
        </h4>
        <h2 className="text-darkblue text-[32px] leading-10 lg:leading-[64px] lg:text-5xl font-semibold text-center mb-12 max-w-[620px]">
          Design that solves problems, one product at a time
        </h2>
        <div className="flex gap-6 justify-center flex-wrap">
          <FeaturesCard
            heading="Uses Client First"
            text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
            key={Math.random()}
          >
            <FaPeopleGroup className="text-royalblue" size={32} />
          </FeaturesCard>
          <FeaturesCard
            heading="Uses Client First"
            text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
            key={Math.random()}
          >
            <FaCircleCheck className="text-royalblue" size={32} />
          </FeaturesCard>
          <FeaturesCard
            heading="Uses Client First"
            text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
            key={Math.random()}
          >
            <FaPenRuler className="text-royalblue" size={32} />
          </FeaturesCard>
          <FeaturesCard
            heading="24/7 Support"
            text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
            key={Math.random()}
          >
            <FaPenRuler className="text-royalblue" size={32} />
          </FeaturesCard>
          <FeaturesCard
            heading="Quick Delivery"
            text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
            key={Math.random()}
          >
            <FaPenRuler className="text-royalblue" size={32} />
          </FeaturesCard>
          <FeaturesCard
            heading="Hands-on approach"
            text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
            key={Math.random()}
          >
            <FaPenRuler className="text-royalblue" size={32} />
          </FeaturesCard>
        </div>
      </div>
    </div>
  );
}
