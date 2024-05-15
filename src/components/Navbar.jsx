import clsx from "clsx";
import { useState } from "react";
import { SolidChevronDown, Button } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
export default function Navbar() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const genericHamburgerLine = `h-0.5 w-6 my-[3px] bg-black transition ease-in-out transform duration-300 lg:hidden`;
  return (
    <nav className="flex h-auto w-full items-center bg-white lg:min-h-18 lg:px-[5%]">
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
        <Link to='/addProduct'>
                  Add Items
                </Link>
                <Link to='/allproducts'>
                  All Products
                </Link>
        </ul>
        <Link to='/cart'><FaCartShopping /></Link>
      </div>
    </nav>
  );
};

