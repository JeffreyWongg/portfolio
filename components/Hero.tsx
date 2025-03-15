"use client";

import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, staggerChildren: 0.2 } 
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const iconVariants = {
  hover: { scale: 1.2, transition: { type: "spring", stiffness: 300 } }
};

const Hero = () => {
  return (
    <div id="hero" className="flex items-center h-screen px-8 py-3">
      <motion.div
        className="rounded-t-full rounded-b-full w-2 min-h-96 bg-jwBlue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      <motion.main 
        className="px-5 text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          className="text-4xl font-semibold font-afacad text-jwGreen"
          variants={textVariants}
        >
          My name is
        </motion.h2>
        
        <motion.h1 
          className="py-3 text-title font-bebas text-jwYellow leading-tightest"
          variants={textVariants}
        >
          Jeffrey <br /> Wong
        </motion.h1>
        
        <motion.div className="flex gap-5 text-4xl">
          <motion.a
            href="https://github.com/JeffreyWongg"
            target="_blank"
            className="text-jwBlue"
            variants={iconVariants}
            whileHover="hover"
          >
            <FiGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/jeffrey-wong-bb1173261/"
            target="_blank"
            className="text-jwPurple"
            variants={iconVariants}
            whileHover="hover"
          >
            <FiLinkedin />
          </motion.a>
          <motion.a
            href="mailto:jeffrey.wong.businessmail@gmail.com"
            target="_blank"
            className="text-jwPink"
            variants={iconVariants}
            whileHover="hover"
          >
            <FiMail />
          </motion.a>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default Hero;
