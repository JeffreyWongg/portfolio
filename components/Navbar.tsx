"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true); // Show navbar when scrolled down
      } else {
        setIsVisible(true); // Hide when at top
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Opaque Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full transition-all px-8 py-3 z-[1000000] bg-jwBackground ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full"
        }`}
      >
        <div className="flex justify-between">
          {/* Logo */}
          <div>
            <a href="/#hero">
              <img
                src="./jeffrey-logo.png"
                alt="JAMHacks Logo"
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navbar Links */}
          <div className="hidden md:flex space-x-6 text-2xl font-semibold font-afacad text-jwBlue">
            <a href="/#about" className="hover:text-white">
              about
            </a>
            <a href="/#experience" className="hover:text-white">
              experience
            </a>
            <a href="/#projects" className="hover:text-white">
              projects
            </a>
            <a href="/#contact" className="hover:text-white">
              contact
            </a>
          </div>

          {/* Mobile Menu Button (Hamburger / Close) */}
          <button
            className="md:hidden text-jwBlue text-3xl z-50"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <img
                src="./close-menu.svg"
                alt="Close Menu"
                className="h-7 w-auto"
              />
            ) : (
              <img
                src="./hamburger-menu.svg"
                alt="Hamburger Menu"
                className="h-7 w-auto"
              />
            )}
          </button>
        </div>
      </nav>

      {/* Glossy Background Overlay */}
      {isMenuOpen && (
        <div
          className="fixed top-16 left-0 w-screen h-screen bg-black/40 backdrop-blur-lg z-40"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Menu (Slide-in Effect) */}
      <div
        className={`fixed top-16 left-0 w-[40%] h-screen bg-darkPurple z-50 flex flex-col py-5 px-3 text-3xl font-bebas text-jwBlue shadow-lg transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <a href="/#about" className="hover:text-white py-2" onClick={closeMenu}>
          About
        </a>
        <a
          href="/#experience"
          className="hover:text-white py-2"
          onClick={closeMenu}
        >
          Experience
        </a>
        <a href="/#projects" className="hover:text-white py-2" onClick={closeMenu}>
          Projects
        </a>
        <a href="/#contact" className="hover:text-white py-2" onClick={closeMenu}>
          Contact
        </a>
      </div>
    </>
  );
};

export default Navbar;
