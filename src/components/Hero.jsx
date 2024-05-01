import { Button } from "@relume_io/relume-ui";

export default function Hero (props){
  const { heading, description, buttons, images, images2 } = {
    ...Header76Defaults,
    ...props,
  };
  return (
    <header className="grid grid-cols-1 gap-y-16 pt-16 md:grid-flow-row md:pt-24 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0">
      <div className="mx-[5%] max-w-[40rem] justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{heading}</h1>
        <p className="md:text-md">{description}</p>
        <div className="mt-6 flex gap-x-4 md:mt-8">
          {buttons.map((button, index) => (
            <Button
              key={`${button.title}-${index}`}
              variant={button.variant}
              size={button.size}
              iconRight={button.iconRight}
              iconLeft={button.iconLeft}
            >
              {button.title}
            </Button>
          ))}
        </div>
      </div>
      <div className="h-[30rem] overflow-hidden pl-[5vw] pr-[5vw] md:h-[40rem] lg:h-screen lg:pl-0">
        <div className="grid w-full grid-cols-2 gap-x-4">
          <div className="-mt-[120%] grid size-full animate-loop-vertically columns-2 grid-cols-1 gap-4 self-center">
            {images.map((image, index) => (
              <div key={`${image.src}-${index}`} className="grid size-full grid-cols-1 gap-4">
                <div className="relative w-full pt-[120%]">
                  <img
                    className="absolute inset-0 size-full object-cover"
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="grid size-full animate-loop-vertically grid-cols-1 gap-4">
            {images2.map((image, index) => (
              <div key={`${image.src}-${index}`} className="grid size-full grid-cols-1 gap-4">
                <div className="relative w-full pt-[120%]">
                  <img
                    className="absolute inset-0 size-full object-cover"
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

const Header76Defaults = {
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
  images: [
    {
      src: '/1.jpg',
      alt: "Placeholder image 1",
    },
    {
      src: "/2.jpg",
      alt: "Placeholder image 2",
    },
    {
      src: "/3.png",
      alt: "Placeholder image 3",
    },
    {
      src: "/4.png",
      alt: "Placeholder image 4",
    },
    {
      src: "/5.png",
      alt: "Placeholder image 5",
    },
    {
      src: "/6.png",
      alt: "Placeholder image 6",
    },
  ],
  images2: [
    {
      src: '/5.png',
      alt: "Placeholder image 1",
    },
    {
      src: "/4.png",
      alt: "Placeholder image 2",
    },
    {
      src: "/6.png",
      alt: "Placeholder image 3",
    },
    {
      src: "/1.jpg",
      alt: "Placeholder image 4",
    },
    {
      src: "/2.jpg",
      alt: "Placeholder image 5",
    },
    {
      src: "/3.png",
      alt: "Placeholder image 6",
    },
  ],
};

