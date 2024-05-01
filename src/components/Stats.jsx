import React from "react";

export default function Stats(props){
  const { heading, description, image, stats } = {
    ...Stats4Defaults,
    ...props,
  };

  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col items-start">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <h3 className="text-4xl font-bold leading-[1.2] text-text-alternative md:text-5xl lg:text-6xl">
            {heading}
          </h3>
          <p className="text-text-alternative md:text-md">{description}</p>
        </div>

        <div className="grid w-full grid-cols-1 items-start justify-start gap-y-8 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          {stats.map((stat, index) => (
            <div key={index} className="w-full border-l-2 border-border-alternative pl-8">
              <p className="mb-2 text-10xl font-bold leading-[1.3] text-text-alternative md:text-[4rem] lg:text-[5rem]">
                {stat.percentage}
              </p>
              <h3 className="text-md font-bold leading-[1.4] text-text-alternative md:text-xl">
                {stat.heading}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 -z-10">
      <video autoPlay loop muted className="size-full object-cover"><source src={image.src} type="video/mp4" /> </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
};

const Stats4Defaults = {
  heading: "Long heading is what you see here in this feature section",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  image: {
    src: "/207007.mp4",
    alt: "Placeholder image",
  },
  stats: [
    { percentage: "30%", heading: "Short heading goes here" },
    { percentage: "30%", heading: "Short heading goes here" },
    { percentage: "30%", heading: "Short heading goes here" },
  ],
};

