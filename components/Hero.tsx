"use client";

import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import { EarthCanvas } from "./canvas";
import Emoji from "react-emoji-render";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, staggerChildren: 0.2 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const iconVariants = {
  hover: { scale: 1.2, transition: { type: "spring", stiffness: 300 } },
};

const Hero = () => {
  return (
    <div>
      <div
        id="hero"
        className="flex flex-col items-center md:flex-row justify-between h-screen py-24 md:py-3 md:px-12 lg:px-16 xl:px-40 2xl:px-52"
      >
        <div className="flex">
          <motion.div
            className="rounded-t-full rounded-b-full w-2 min-h-96 bg-jwBlue "
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
              <Emoji text=":wave:" /> my name is
            </motion.h2>

            <motion.h1
              className="py-3 text-9xl md:text-9xl lg:text-title font-bebas text-jwYellow leading-tightest"
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

        <div className="flex justify-center items-center w-72 h-72 md:w-96 md:h-96 lg:w-[65%] lg:h-[65%] xl:h-[80%] xl:w-[80%]">
          <EarthCanvas />
        </div>
      </div>
    </div>
  );
};

export default Hero;
