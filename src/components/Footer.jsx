import React from "react";
import { Facebook, Instagram, X, LinkedIn, YouTube } from "@relume_io/relume-ui";

export default function Footer(props){
  const {footerText,footerLinks, socialMediaLinks } = {
    ...Footer4Defaults,
    ...props,
  };

  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 items-center justify-center justify-items-center gap-x-[4vw] gap-y-12 pb-12 md:pb-18 lg:grid-cols-[0.50fr_1fr_0.25fr] lg:justify-between lg:gap-y-4 lg:pb-20">
          <div className="lg:justify-self-start">
          <h1 className=' text-3xl font-bold font-playfair text-black text-black-600 '>
          Cosmic <span className='bg-black text-white'>BlackSale</span>
          </h1>
          </div>
                  <a
                    href='/'
                    className="ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
                  >
                    Github
                  </a>

          <div className="flex items-start justify-start justify-items-center gap-x-3 lg:justify-self-end">
            {socialMediaLinks.map((link, index) => (
              <a
                key={`${link.title}-${index}`}
                href={link.url}
                className="ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col-reverse items-center justify-center justify-items-center pt-6 text-sm md:flex-row md:gap-x-6 md:pt-8">
          <p className="mt-8 md:mt-0">{footerText}</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] items-center justify-center justify-items-center gap-x-0 gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            {footerLinks.map((link, index) => (
              <li
                key={`${link.title}-${index}`}
                className="underline decoration-black underline-offset-1 "
              >
                <a
                  href={link?.url}
                  className="ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
                >
                  {link?.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

const Footer4Defaults = {

  socialMediaLinks: [
    { title: "Facebook", url: "#", icon: <Facebook /> },
    { title: "Instagram", url: "#", icon: <Instagram /> },
    { title: "X", url: "#", icon: <X /> },
    { title: "LinkedIn", url: "#", icon: <LinkedIn /> },
    { title: "Youtube", url: "#", icon: <YouTube /> },
  ],
  footerText: "© 2024 Cosmic BlackSale. All rights reserved.",
  footerLinks: [
    { title: "Privacy Policy", url: "#" },
    { title: "Terms of Service", url: "#" },
    { title: "Cookies Settings", url: "#" },
  ],
};
