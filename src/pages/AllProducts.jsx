import React from "react";
import { Button, ChevronRight } from "@relume_io/relume-ui";
import { useContext } from "react";
import Context from "../context/Context";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { useEffect } from "react";


export default function AllProducts(){

  const contextData = useContext(Context)
const {allProducts} = contextData
  
useEffect(()=>{
  window.scrollTo(0, 0);
},[])

    return (
      <Layout>
      <section className="px-[5%] py-16 md:py-5 lg:py-4">
        <div className="container">
          <div className="mb-4 grid grid-cols-1 items-start justify-start gap-y-8 md:mb-4 md:grid-cols-[1fr_max-content] md:items-end md:justify-between md:gap-x-12 md:gap-y-4 lg:mb-6 lg:gap-x-20">
            <div className="w-full max-w-lg">
              <h1 className="mb-3 text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl">All Products</h1>
              <p className="md:text-md">Explore our complete collection of one-of-a-kind treasures from across the cosmos. From mystical artifacts to futuristic gadgets, each item in our inventory promises to ignite your imagination and add a touch of wonder to your world.</p>
            </div>
            <div className="hidden flex-wrap items-center justify-end md:block">
              <Button variant='secondary'>
                All products
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
            {allProducts.map((product, index) => (
              <div
                key={product.id}
                className="flex size-full flex-col items-center justify-start border border-border-primary rounded ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
              >
                <div className="relative w-full overflow-hidden pt-[90%] overflow-hidden ">
                  <Link to={`/productInfo/${product.id}`}>
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="absolute inset-0 size-full object-cover"
                  />
                  </Link>
                </div>
                <div className="flex w-full flex-1 flex-col justify-between px-4 py-6 md:p-4">
                  <div className="mb-4 flex items-center">
                    <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                      {product.category}
                    </p>
                  </div>
  
                  <div className="flex w-full flex-col items-start justify-start">
                  <Link to={`/productInfo/${product.id}`}>
                    <h2 className="mb-2 text-xl  font-bold md:text-2xl">{product.title}</h2>
                  </Link>
                    <p className="mb-4">{product.shortDescription}</p>
                    
                  </div>
                  <h3 className=" text-lg  font-bold md:text-xl">{`Price : $${product.price}`}</h3>
                  <Button variant='secondary' 
                    className="mt-3 hover:bg-black hover:text-white">
                Add to Cart
              </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </Layout>
    );
  };
