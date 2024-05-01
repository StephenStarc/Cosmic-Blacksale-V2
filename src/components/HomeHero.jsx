"use client";

import { Button, Input } from "@relume_io/relume-ui";

export default function HomeHeader(props){
    const { heading, description, button, inputPlaceholder, image, termsAndConditions } = {
      ...Header6Defaults,
      ...props,
    };
    return (
      <header className="relative px-[5%]">
        <div className="container">
          <div className="flex max-h-[60rem] min-h-svh items-center py-14 md:py-24 lg:py-28">
            <div className="max-w-md">
              <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
                {heading}
              </h1>
              <p className="text-base text-text-alternative md:text-md">{description}</p>
              <div className="mb-0 mt-6 max-w-sm md:mt-8">
                <div className="mb-4 grid grid-cols-1 items-center gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-y-4 md:mt-8">
                  <Input type="email" placeholder={inputPlaceholder} className="input" />
                  <Button
                    variant={button.variant}
                    size={button.size}
                    iconRight={button.iconRight}
                    iconLeft={button.iconLeft}
                    className="bg-white hover:bg-black text-black hover:text-white"
                  >
                    {button.title}
                  </Button>
                </div>
                {termsAndConditions && (
                  <p className="text-xs text-text-alternative">
                    <span className="after:content-['_']">{termsAndConditions.text}</span>
                    <a
                      href={termsAndConditions.url}
                      className="text-text-alternative underline ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
                    >
                      {termsAndConditions.linkText}
                    </a>
                    .
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10">
          {/* <img src={image.src} className="size-full object-cover" alt={image.alt} /> */}
          <video autoPlay loop muted className="size-full object-cover"><source src={image.src} type="video/mp4" /> </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </header>
    );
  };
  
  const Header6Defaults = {
    heading: "Explore the Universe's Best Deals",
    description:
      "Dive into a cosmic shopping experience like no other, where you can find anything from galaxies to gadgets. Discover stellar deals and unearth the wonders of the cosmos, right at your fingertips.",
    inputPlaceholder: "Enter your email",
    button: { title: "Sign Up" },
    termsAndConditions: {
      text: "By clicking Sign Up you're confirming that you agree with ",
      linkText: "Intergalactic Terms and Conditions",
      url: "#",
    },
    image: {
      src: "/207007.mp4",
      alt: "Placeholder image",
    },
  };
  
  