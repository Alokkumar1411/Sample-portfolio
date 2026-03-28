import React, { useState } from "react";
import { NAVIGATION_LINKS } from "../constants";
import { RiCloseLine, RiMenu3Line } from "@remixicon/react";

const Nav = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const togglemenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handlelinkclick = (e, href) => {
    e.preventDefault();

    const targetelement = document.querySelector(href);

    if (targetelement) {
      const offset = -85;
      const elementposition = targetelement.getBoundingClientRect().top;
      const offsetpostion = elementposition + window.scrollY + offset;

      window.scrollTo({
        top: offsetpostion,
        behavior: "smooth",
      });
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed right-0 left-0 lg:top-4 z-50">
      <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-full border border-white/30 py-2 backdrop-blur-lg lg:flex">
        <div className="flex items-center justify-between gap-8">
          
          <div>
            <a href="/">
              <span className="uppercase text-gray-300">Devik Stark</span>
            </a>
          </div>

          <div>
            <ul className="flex items-center gap-5">
              {NAVIGATION_LINKS.map((items, index) => (
                <li key={index}>
                  <a
                    href={items.href}
                    className="text-sm hover:text-stone-200"
                    onClick={(e) => handlelinkclick(e, items.href)}
                  >
                    {items.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <div className="py-2 backdrop-blur-md lg:hidden">
        <div className="flex items-center justify-between">
            <div>
                <a href="#">
                    <span className="pl-2 uppercase text-xl text-white">Devik stark</span>
                </a>
            </div>
            <div className="flex items-center">
                <button className="focus:outline-none lg:hidden " onClick={togglemenu} aria-label={isMobileMenuOpen ? "Close Menu":"Open Menu"}>
                    {isMobileMenuOpen ? (
                        <RiCloseLine className="m-2 h-6 w-5"/>
                    ) : (
                        <RiMenu3Line className="m-2 h-6 w-5"/>
                    )}
                </button>

            </div>
        </div>
        {isMobileMenuOpen && (
            <ul className="pl-4 text-xl backdrop-blur-lg my-4 flex flex-col gap-6">
                {NAVIGATION_LINKS.map((items, index) => (
                <li key={index}>
                  <a
                    href={items.href}
                    className="block text-lg w-full "
                    onClick={(e) => handlelinkclick(e, items.href)}
                  >
                    {items.label}
                  </a>
                </li>
              ))}
            </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;