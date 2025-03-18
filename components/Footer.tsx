"use client";

import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: 15, // Optional rotation effect
    transition: { type: "spring", stiffness: 300 },
  },
};

const Footer = () => {
  return (
    <footer className="w-full bg-jwBackground py-6 px-10 flex justify-between items-center">
      {/* Left Side - Social Icons */}
      <div className="flex gap-4 text-3xl">
        <motion.a
          href="https://github.com/JeffreyWongg"
          target="_blank"
          rel="noopener noreferrer"
          className="text-jwBlue"
          variants={iconVariants}
          whileHover="hover"
        >
          <FiGithub />
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-jwPurple"
          variants={iconVariants}
          whileHover="hover"
        >
          <FiLinkedin />
        </motion.a>
        <motion.a
          href="mailto:your.email@example.com"
          className="text-jwPink"
          variants={iconVariants}
          whileHover="hover"
        >
          <FiMail />
        </motion.a>
      </div>

      {/* Right Side - Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center gap-2 bg-jwYellow text-black font-bold py-2 px-4 rounded-lg hover:bg-jwBlue transition"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
