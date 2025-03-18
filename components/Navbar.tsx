"use client";
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircle } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {};
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle smooth scrolling
  const handleScrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default anchor behavior

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Opaque Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full transition-all px-8 py-3 z-[1000000] bg-jwBackground `}
      >
        <div className="flex justify-between items-center">
          {/* Logo with smooth scroll to #hero */}
          <div>
            <a href="#hero" onClick={(e) => handleScrollTo("hero", e)}>
              <img
                src="./jeffrey-logo.png"
                alt="JAMHacks Logo"
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navbar Links & Resume Button */}
          <div className="hidden md:flex items-center space-x-6 text-2xl font-semibold font-afacad">
            <a
              onClick={(e) => handleScrollTo("about", e)}
              className="hover:text-white text-jwBlue cursor-pointer"
            >
              about
            </a>
            <a
              onClick={(e) => handleScrollTo("experience", e)}
              className="hover:text-white text-jwGreen cursor-pointer"
            >
              experience
            </a>
            <a
              onClick={(e) => handleScrollTo("projects", e)}
              className="hover:text-white text-jwPink cursor-pointer"
            >
              projects
            </a>
            {/* Resume Download Button */}
            <a
              href="/Jeffrey-Wong-Resume.pdf" // Path to the file in the public folder
              download="Jeffrey-Wong-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-jwPurple text-jwYellow px-3 py-0.5 rounded-lg hover:bg-white hover:text-jwPurple transition"
            >
              resume
            </a>
          </div>

          {/* Mobile Menu Button (Hamburger / Close) */}
          <button
            className="md:hidden text-jwBlue text-3xl z-50"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <IoCloseCircle /> : <GiHamburgerMenu />}
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

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 w-[40%] h-screen bg-jwBackground z-50 flex flex-col py-5 px-3 text-3xl font-semibold font-afacad shadow-lg transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <a
          onClick={(e) => {
            handleScrollTo("about", e);
            closeMenu();
          }}
          className="hover:text-white py-2 text-jwBlue cursor-pointer"
        >
          about
        </a>
        <a
          onClick={(e) => {
            handleScrollTo("experience", e);
            closeMenu();
          }}
          className="hover:text-white py-2 text-jwGreen cursor-pointer"
        >
          experience
        </a>
        <a
          onClick={(e) => {
            handleScrollTo("projects", e);
            closeMenu();
          }}
          className="hover:text-white py-2 text-jwPink cursor-pointer"
        >
          projects
        </a>

        {/* Resume Button for Mobile */}
        <a
          href="/Jeffrey-Wong-Resume.pdf" // Path to the file in the public folder
          download="Jeffrey-Wong-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 bg-jwPurple text-jwYellow text-center px-3 py-0.5 rounded-lg hover:bg-white hover:text-jwPurple transition"
        >
          resume
        </a>
      </div>
    </>
  );
};

export default Navbar;
