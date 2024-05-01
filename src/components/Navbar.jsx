import clsx from "clsx";
import { useState } from "react";
import { SolidChevronDown, Button } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const {buttons } = {
    ...Navbar1Defaults,
    ...props,
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const genericHamburgerLine = `h-0.5 w-6 my-[3px] bg-black transition ease-in-out transform duration-300 lg:hidden`;
  return (
    <nav className="flex h-auto w-full items-center border-b border-border-primary bg-white lg:min-h-18 lg:px-[5%]">
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
          <div className="mt-6 flex flex-col items-center gap-4 lg:ml-4 lg:mt-0 lg:flex-row">
            {buttons.map((button, index) => (
              <Button
                key={`${button.title}-${index}
              `}
                className="w-full"
                variant={button.variant}
                size={button.size}
              >
                {button.title}
              </Button>
            ))}
          </div>
        </ul>
      </div>
    </nav>
  );
};

const NavItemDropdown = ({ title, subLinks }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div>
      <button
        className="flex w-full items-center justify-between gap-2 py-3 text-left text-md ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2 lg:flex-none lg:justify-start lg:px-4 lg:py-2 lg:text-base"
        onClick={() => setDropdownOpen((prev) => !prev)}
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <span>{title}</span>
        <AnimatePresence>
          <motion.div
            animate={dropdownOpen ? "rotated" : "initial"}
            variants={{
              rotated: { rotate: 180 },
              initial: { rotate: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            <SolidChevronDown className="size-4" />
          </motion.div>
        </AnimatePresence>
      </button>
      {dropdownOpen && (
        <AnimatePresence>
          <motion.ul
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: {
                opacity: "var(--opacity-from, 100%)",
                y: "var(--slide-from, 25%)",
              },
              visible: {
                opacity: 1,
                y: "var(--slide-to, 0%)",
              },
            }}
            transition={{ duration: 0.3, type: "spring", bounce: 0 }}
            className="border-border-primary bg-white [--slide-from:0%] lg:absolute lg:h-auto lg:border lg:p-2 lg:[--opacity-from:0%] lg:[--slide-from:25%]"
          >
            {subLinks.map((subLink, index) => (
              <li
                key={`${subLink.title}-${index}`}
                className="relative mx-auto whitespace-nowrap py-3 pl-[5%] text-left align-top text-md lg:px-4 lg:py-2 lg:text-base"
              >
                <a
                  href={subLink.url}
                  className="ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
                >
                  {subLink.title}
                </a>
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
      )}
    </div>
  );

};

const Navbar1Defaults = {
  buttons: [
    {
      title: "Button",
      variant: "secondary",
      size: "sm",
    },
    {
      title: "Button",
      size: "sm",
    },
  ],
};

