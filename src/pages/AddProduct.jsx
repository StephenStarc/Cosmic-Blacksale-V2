import React, { useContext} from "react";

import {Input, Label, Textarea, Button } from "@relume_io/relume-ui";
import Context from "../context/Context";
import Layout from "../components/Layout";
export default function AddProduct(){

const contextData = useContext(Context)

const {addProduct, setProduct, product} = contextData

  const handleSubmit = (event) => {
    event.preventDefault();
    addProduct()
  };

  return (
    <Layout>
        
    <section className="px-[5%] py-16 md:py-24 lg:py-4">
      <div className="container grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:grid-flow-col lg:gap-x-20 lg:gap-y-16">
        <div>
          <div className="mb-6 md:mb-8">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">Add Product</h2>
            <p className="md:text-md">Add New rare items to elite Cosmic Collection</p>
          </div>
        </div>

        <form className="grid grid-cols-1 grid-rows-[auto_auto] gap-6" onSubmit={handleSubmit}>
            <div className="grid w-full items-center">
              <Label htmlFor="productName" className="mb-2">
                Product Name
              </Label>
              <Input
                type="text"
                id="productName"
                value={product.title}
                onChange={(e) => setProduct({...product, title:e.target.value})}
              />
            </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="grid w-full items-center">
              <Label htmlFor="price" className="mb-2">
                Price
              </Label>
              <Input
                type="text"
                id="price"
                value={product.price}
                onChange={(e) => setProduct({...product, price:e.target.value})}
              />
            </div>

            <div className="grid w-full items-center">
              <Label htmlFor="category" className="mb-2">
              Category
              </Label>
              <Input
                type="text"
                id="category"
                value={product.category}
                onChange={(e) => setProduct({...product, category:e.target.value})}
              />
            </div>
          </div>
          <div className="grid w-full items-center">
              <Label htmlFor="imgurl" className="mb-2">
                Image URL
              </Label>
              <Input
                type="text"
                id="imgurl"
                value={product.imageUrl}
                onChange={(e) => setProduct({...product, imageUrl:e.target.value})}
              />
            </div>
            <div className="grid w-full items-center">
            <Label htmlFor="description" className="mb-2">
            Short Description
            </Label>
            <Textarea
              id="descripition"
              placeholder="Type your message..."
              className="min-h-[11.25rem] overflow-auto"
              value={product.shortDescription}
              onChange={(e) => setProduct({...product, shortDescription:e.target.value})}
            />
          </div>
          <div className="grid w-full items-center">
            <Label htmlFor="description" className="mb-2">
           Long Description
            </Label>
            <Textarea
              id="descripition"
              placeholder="Type your message..."
              className="min-h-[11.25rem] overflow-auto"
              value={product.longDescription}
              onChange={(e) => setProduct({...product, longDescription:e.target.value})}
            />
          </div>

          <div>
            <Button
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
    </Layout>
  );
};
