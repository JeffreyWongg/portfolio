import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { Variants } from "framer-motion";

const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
): Variants => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const Projects = () => {
  return (
    <>
      <div id="projects" className="flex flex-col items-center justify-center py-20">
        <h3 className="font-afacad text-gray-400">MY WORK</h3>
        <h1 className="font-bebas text-8xl text-jwYellow">My Projects</h1>
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
          <ProjectCard
            src="./jeffrey-logo.png"
            title="DementAId"
            description="fsdfdsfds"
          />
          <ProjectCard
            src="./jeffrey-logo.png"
            title="DementAId"
            description="fsdfdsfds"
          />
          <ProjectCard
            src="./jeffrey-logo.png"
            title="DementAId"
            description="fsdfdsfds"
          />
        </div>
      </div>
    </>
  );
};

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border ">
      <img
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-36 object-contain"
      />
      <div className="relative p-4">
        <h1 className="text-2xl font-bebas text-jwGreen">{title}</h1>
        <p className="mt-2 font-afacad text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default Projects;
