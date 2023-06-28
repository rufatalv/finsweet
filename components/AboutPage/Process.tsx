export default function Process() {
  return (
    <div className="container px-4 lg:px-0 flex mb-12 md:mb-24 lg:mb-32 flex-col gap-16">
      <h1 className="text-darkblue text-3xl md:text-[32px] lg:text-5xl font-semibold text-center">
        The process we follow
      </h1>
      <div className="grid gap-4 md:gap-10 lg:gap-14 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <div className="flex border-[1px] border-darkblue/20 sm:border-none rounded-lg sm:rounded-none p-4 sm:p-0 flex-col gap-8">
          <div className="flex items-center w-full gap-6">
            <div className="w-6 h-6 flex rounded-full bg-royalblue"></div>
            <div className="border-t-2 border-royalblue border-dashed opacity-40 w-8/12"></div>
          </div>
          <div className="gap-2 flex flex-col">
            <h1 className="text-darkblue font-medium text-base sm:text-xl md:text-2xl">
              Planning
            </h1>
            <p className="text-darkblue text-sm md:text-base opacity-70">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </p>
          </div>
        </div>
        <div className="flex border-[1px] border-darkblue/20 sm:border-none rounded-lg sm:rounded-none p-4 sm:p-0 flex-col gap-8">
          <div className="flex items-center w-full gap-6">
            <div className="w-6 h-6 flex rounded-full bg-royalblue"></div>
            <div className="border-t-2 border-royalblue border-dashed opacity-40 w-8/12"></div>
          </div>
          <div className="gap-2 flex flex-col">
            <h1 className="text-darkblue font-medium text-base sm:text-xl md:text-2xl">
              Conception
            </h1>
            <p className="text-darkblue text-sm md:text-base opacity-70">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </p>
          </div>
        </div>
        <div className="flex border-[1px] border-darkblue/20 sm:border-none rounded-lg sm:rounded-none p-4 sm:p-0 flex-col gap-8">
          <div className="flex items-center w-full gap-6">
            <div className="w-6 h-6 flex rounded-full bg-royalblue"></div>
            <div className="border-t-2 border-royalblue border-dashed opacity-40 w-8/12"></div>
          </div>
          <div className="gap-2 flex flex-col">
            <h1 className="text-darkblue font-medium text-base sm:text-xl md:text-2xl">
              Design
            </h1>
            <p className="text-darkblue text-sm md:text-base opacity-70">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </p>
          </div>
        </div>
        <div className="flex border-[1px] border-darkblue/20 sm:border-none rounded-lg sm:rounded-none p-4 sm:p-0 flex-col gap-8">
          <div className="flex items-center w-full gap-6">
            <div className="w-6 h-6 flex rounded-full bg-royalblue"></div>
            <div className="border-t-2 border-royalblue border-dashed opacity-40 w-8/12"></div>
          </div>
          <div className="gap-2 flex flex-col">
            <h1 className="text-darkblue font-medium text-base sm:text-xl md:text-2xl">
              Development
            </h1>
            <p className="text-darkblue text-sm md:text-base opacity-70">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
