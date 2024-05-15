import React from "react";
import { Button, ChevronRight } from "@relume_io/relume-ui";
import { Link } from "react-router-dom";

export default function Card() {
  const {products } = {
    ...TopProducts,
  };

  return (
    <section className="px-[5%] mt-16">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-start gap-y-8 md:mb-18 md:grid-cols-[1fr_max-content] md:items-end md:justify-between md:gap-x-12 md:gap-y-4 lg:mb-20 lg:gap-x-20">
          <div className="w-full max-w-lg">
            <h1 className="mb-3 text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl">Unparalleled Treasures</h1>
            <p className="md:text-md">Discover our selection of top-tier, one-of-a-kind treasures, where rarity meets excellence, offering the most exquisite and unique products you won't find anywhere else.</p>
          </div>
          <div className="hidden flex-wrap items-center justify-end md:block">
            <Link to='/allproducts'>
            <Button variant='primary' className="mt-3 hover:bg-white hover:text-black">
              All products
        </Button>
        </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          {products.map((p) => (
            <div
              className="flex size-full flex-col items-center justify-start border border-border-primary ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
            key={p.id} >
              <div className="relative w-full overflow-hidden pt-[77%]">
              <Link to={`/productInfo/${p.id}`}>
                <img
                  src={p.imageUrl}
                  alt={p.title}
                  className="absolute inset-0 size-full object-cover"
                />
                </Link>
              </div>
              <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6">
                <div className="mb-4 flex items-center">
                  <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                    {p.category}
                  </p>
                </div>

                <div className="flex w-full flex-col items-start justify-start">
                <Link to={`/productInfo/${p.id}`}>
                  <h2 className="mb-2 text-xl font-bold md:text-2xl">{p.title}</h2>
                  </Link>
                  <p>{p.shortDescription}</p>
                  <Button variant='secondary' 
                    className="mt-3 hover:bg-black hover:text-white">
                Add to Cart
              </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button
          className="mt-12 md:hidden"
        >
          Button
        </Button>
      </div>
    </section>
  );
};

const TopProducts = {
  products: [
    {
      title: "Queen Stephie's Royal Blush Bracelet",
      id:"Td5Uv0YmFcnSdfDguw7g",
      imageUrl: "https://i.ibb.co/25r4kxK/preview-17.webp",
      category: "Sacred Relics/Royal Jewelry",
      shortDescription:"Queen Stephie's Royal Blush Bracelet, adorned with pink diamonds and pearls, exudes regal elegance, fit for a queen.",
    },
    {
      title: "Infernal Masterpiece",
      id:"s0h1Bz1UKp51SnrjSTZP",
      imageUrl: "https://i.ibb.co/DtWwWDz/Madness-e18947b4-ca0d-4806-8c6f-f716535cc424.png",
      category: "Demonic Art/Dark Art",
      shortDescription:"The Infernal Masterpiece, a stunning depiction of darkness and beauty, mesmerizes with its haunting imagery, embodying the essence of infernal allure.",
    },
    {
      title: "Shadowwing Foal",
      id:"974GdceQD9N6uppxN7Oy",
      imageUrl: "https://i.ibb.co/yBXNRz0/Demon-horse-but-f5aa2764-9ed8-4fe7-bd42-a8fd101db2e3.png",
      category: "Mythical Creatures/Beasts",
      shortDescription:"The Shadowwing Foal, with its adorable appearance, features bat wings and tiny horns, blending the innocence of youth with an eerie charm.",
    },
  ],
};
