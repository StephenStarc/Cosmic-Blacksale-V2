import clsx from "clsx";
import { useState, useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import Context from "../context/Context";
export default function Navbar() {


  const {Cart} = useContext(Context)


  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const genericHamburgerLine = `h-0.5 w-6 my-[3px] bg-black transition ease-in-out transform duration-300 lg:hidden`;
  return (
    <nav className="flex h-auto w-full items-center bg-white lg:min-h-18 lg:px-[5%] sticky top-0 z-50 border-b-2 border-border-primary">
      <div className="mx-auto size-full items-center justify-between lg:flex">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
        <Link to='/'>
        <h1 className=' text-3xl font-bold font-playfair text-black text-black-600 '>
          Cosmic <span className='bg-black text-white'>BlackSale</span>
          </h1>
          </Link>
          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div
              className={clsx(genericHamburgerLine, mobileMenuOpen && "translate-y-2 -rotate-45")}
            />
            <div className={clsx(genericHamburgerLine, mobileMenuOpen && "opacity-0")} />
            <div
              className={clsx(genericHamburgerLine, mobileMenuOpen && "-translate-y-2 rotate-45")}
            />
          </button>
        </div>
        <ul
          className={clsx(
            "h-dvh px-[5%] pt-4 lg:flex lg:h-auto lg:items-center lg:px-0 lg:pt-0",
            mobileMenuOpen ? "block" : "hidden",
          )}
        >
        <Link to='/addProduct' className="mr-3">
                  Add Items
                </Link>
                <Link to='/allproducts' className="mr-3">
                  All Products
                </Link>
                <Link to='/cart' className="flex gap-2 items-center justify-items-center"><FaCartShopping size={25}/> {Cart.products && Cart.products.length > 0 &&  <div className=" bg-red-500 text-white w-8 h-8 flex justify-center items-center rounded-full border-2 border-white">{Cart.products.length}</div>}</Link>
        </ul>
        
      </div>
    </nav>
  );
};

