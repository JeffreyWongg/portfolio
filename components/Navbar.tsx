"use client";
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircle } from "react-icons/io5";

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
      setIsVisible(true);
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
        className={`fixed top-0 left-0 w-full transition-all px-8 py-3 z-[1000000] bg-jwBackground 
        }`}
      >
        <div className="flex justify-between items-center">
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

          {/* Desktop Navbar Links & Resume Button */}
          <div className="hidden md:flex items-center space-x-6 text-2xl font-semibold font-afacad">
            <a href="/#about" className="hover:text-white text-jwBlue">
              about
            </a>
            <a href="/#experience" className="hover:text-white text-jwGreen">
              experience
            </a>
            <a href="/#projects" className="hover:text-white text-jwPink">
              projects
            </a>
            {/* Resume Download Button */}
            <a
              href="/Jeffrey_Resume.pdf" // Path to your resume in public/
              download="Jeffrey_Resume.pdf"
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
          href="/#about"
          className="hover:text-white py-2 text-jwBlue"
          onClick={closeMenu}
        >
          about
        </a>
        <a
          href="/#experience"
          className="hover:text-white py-2 text-jwGreen"
          onClick={closeMenu}
        >
          experience
        </a>
        <a
          href="/#projects"
          className="hover:text-white py-2 text-jwPink"
          onClick={closeMenu}
        >
          projects
        </a>

        {/* Resume Button for Mobile */}
        <a
          href="/Jeffrey_Resume.pdf"
          download="Jeffrey_Resume.pdf"
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
