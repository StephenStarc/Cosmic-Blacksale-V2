import React, { useState } from "react";
import { Button } from "@relume_io/relume-ui";
import Layout from "../components/Layout";
import { useContext } from "react";
import Context from "../context/Context";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
export default function ProductDetail(){


    const {allProducts, addToCart} = useContext(Context)
    const {id} = useParams()
    const product = allProducts.find((p)=>p.id === id)
    
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])

  return (
    <Layout>
    <header className="px-[5%] py-16 md:py-24 lg:py-10">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
        <div>
            <img src={product.imageUrl} className="w-10/12 object-cover" alt={product.title} />
          </div>
          <div>
            <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-6xl lg:text-7xl">{product.title}</h2>
            <div className="mb-4 flex items-center">
                    <p className="mr-4 bg-background-secondary px-2 py-1 text-md font-semibold">
                      {product.category}
                    </p>
                  </div>
            <p className="md:text-md">{product.longDescription}</p>
            <h3 className=" text-lg  font-bold md:text-xl md:mt-2">{`Price : $${product.price}`}</h3>
            <div className="mt-6 flex gap-x-4 md:mt-2">
                <Button variant='primary' 
                    className="mt-3 hover:bg-white hover:text-black" onClick={()=>addToCart(product)}>
                Add to Cart
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    </header>
    </Layout>
  );
};


