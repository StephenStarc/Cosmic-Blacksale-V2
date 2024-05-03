import React from "react";
import { Star } from "@relume_io/relume-ui";

export default function Testimonial(props){
  const { heading, description, testimonials } = {
    ...Testimonial18Defaults,
    ...props,
  };

  return (
    <section className="px-[5%] py-10  ">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="columns-1 gap-x-8 md:columns-2 lg:columns-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.testimonial}-${index}`}
              className="mb-8 inline-block w-full border border-border-primary p-6 md:p-8"
            >
              <div className="mb-5 md:mb-6">
                <div className="mb-6 flex">
                  {Array(testimonial.numberOfStars)
                    .fill(null)
                    .map((_, starIndex) => (
                      <Star key={starIndex} className="mr-1 size-6" />
                    ))}
                </div>
                <blockquote className={`before:content-['"'] after:content-['"'] md:text-md`}>
                  {testimonial.testimonial}
                </blockquote>
              </div>
              <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                <img
                  src={testimonial.avatar.src}
                  alt={testimonial.avatar.alt}
                  className="mb-4 mr-0 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p>
                    {testimonial.companyName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonial18Defaults = {
  heading: "Otherworldly Praise",
  description: "Delve into the testimonials from beings across galaxies who have experienced the wonders of Multiverse Dollar Emporium. From angels to demons, witches to warriors, discover their tales of enchantment and empowerment through the treasures they've acquired.",
  testimonials: [
    {
      testimonial:
        `Xarnian"Xul'zor Xaraxax Emporium k'var zorak z'thul zorag xaxax! Xol'zir krakthu'zor glix zilax z'zorak z'krakthu xaxa. X'zilak xol'zir zorak glaxax krakthu'zor glix xaxax!`,
      avatar: {
        src: "https://i.ibb.co/L62PWcF/A-demon-hunt-77a7b5b1-6c06-4333-9bb8-3b778395db5b.png",
        alt: "Testimonial avatar 1",
      },
      name: "Z'Kranth",
      companyName: "Centaurus A",
      numberOfStars: 5,
    },
    {
      testimonial:
        "乇りﾉ丂の刀 乃ひﾚ乃 尺乇ｲ尺の ᄃﾚのひり 乃尺乇ﾑり 乇ᄃんの ｱﾑ尺ズ, ん乇ﾚ√乇ｲﾉᄃﾑ 丂ｲひﾶｱｲのW刀 ｲﾑﾉﾘﾑズﾉ ｲﾑﾒﾉり乇尺ﾶﾘ 90'丂 ᄃ尺の刀ひｲ +1 ズﾉ刀ｷのﾚズ. 丂ﾉ刀ムﾚ乇-の尺ﾉムﾉ刀 ᄃのｷｷ乇乇 乇刀刀ひﾉ 丂んﾑﾶﾑ刀 ｲﾑﾉﾘﾑズﾉ √ﾑｱ乇 りﾉﾘ ｲのｲ乇 乃ﾑム り尺ﾉ刀ズﾉ刀ム √ﾉ刀乇ムﾑ尺 ᄃ尺の刀ひｲ ﾑりﾑｱｲのム乇刀 丂ゐひﾉり ｷﾑ刀刀ﾘ ｱﾑᄃズ √ﾑｱの尺Wﾑ尺乇.",
      avatar: {
        src: "https://i.ibb.co/6NF7cwr/out-1-4.png",
        alt: "Testimonial avatar 2",
      },
      name: "ｲﾑﾉﾘﾑズﾉ ｲﾑ乇尺ﾶﾘ",
      companyName: "尺ﾶ尺ﾚ乃 乇",
      numberOfStars: 5,
    },
    {
      testimonial:
        "The artifacts I've acquired from cosmic blackSale have left even us demons in awe. The power imbued within them resonates with the darkest depths of the Abyss, granting us newfound strength and influence. Truly, this emporium is a haven for those who seek to harness the forces of darkness.",
      avatar: {
        src: "https://i.ibb.co/dWDG8G1/out-1-11.png",
        alt: "Testimonial avatar 3",
      },
      name: "Azazel",
      companyName: "Malebolge",
      numberOfStars: 5,
    },
    {
      testimonial:
        "Groth'nak zlax! Zrotox Thrallbux Emporium rothlax zaxthor zrog'blax! Zor'thanax bluk'trax vrothgax, zrotox zrulthor krax'blax zothor! Zlax'kronax zroth'kranax thrul'thor grax'blax zrothor krax! krulthor zrax'blax. Zrotox Thrallbux Emporium thrax'krulthor grax'blax zrothor, zrulthor krax zrax'blax krax'korthan zroth'kranax kroth'zorax krax! Bluk'trax zaxthor.",
      avatar: {
        src: "https://i.ibb.co/tLvHdzS/out-0-1.png",
        alt: "Testimonial avatar 1",
      },
      name: "ZLORTHRAK",
      position: "Tisdfske",
      companyName: "Company name",
      numberOfStars: 5,
    },
    {
      testimonial:
        "I recently purchased a Multiverse Mystery Portal from the Cosmic BlackSale, and I couldn't be happier with my experience! Opening the virtual cosmic box was so exciting, and the surprise item inside was beyond my expectations. What impressed me most was how reliable the service was; my order arrived promptly, and the item was exactly as described.",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/144702766?v=4",
        alt: "Testimonial avatar 2",
      },
      name: "Stephen Starc",
      companyName: "Milky way Galaxy",
      numberOfStars: 5,
    },
    {
      testimonial:
        "Cosmic Blacksale is a treasure trove of mystical delights! The items I've procured from there have enhanced my spells and rituals beyond measure. Each artifact holds a unique energy that resonates with the ancient powers of the earth, making it a must-visit for any discerning witch.",
      avatar: {
        src: "https://i.ibb.co/PYkjQwz/crazy-wizard-hypebeast-5628eb.jpg",
        alt: "Testimonial avatar 3",
      },
      name: "Morgana",
      companyName: "Shadowwood Coven",
      numberOfStars: 5,
    },
  ],
};

