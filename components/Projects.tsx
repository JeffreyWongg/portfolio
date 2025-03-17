import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  SiPython,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiArduino,
  SiCplusplus,
  SiC,
  SiSharp,
  SiSqlite,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiFigma,
  SiGithub,
  SiMongodb,
  SiGit,
} from "react-icons/si";

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
      <div
        id="projects"
        className="flex flex-col items-center justify-center py-20"
      >
        <h3 className="font-afacad text-gray-400">MY WORK</h3>
        <h1 className="font-bebas text-8xl text-jwYellow">My Projects</h1>
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
          <ProjectCard
            src="./jeffrey-logo.png"
            title="DementAId"
            description="fsdfdsfds"
            tech={["Python", "HTML", "CSS", "JavaScript"]} 
          />
          <ProjectCard
            src="./jeffrey-logo.png"
            title="This Portfolio!"
            description="fsdfdsfds"
            tech={["TypeScript", "React", "Next.js", "TailwindCSS"]} 
          />
          <ProjectCard
            src="./jeffrey-logo.png"
            title="PID Controller"
            description="fsdfdsfds"
            tech={["C++", "Arduino"]} 
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
  tech: string[]; // Change tech to an array of strings
}

const ProjectCard = ({ src, title, description, tech }: Props) => {
  // Map the tech string to the correct icon
  const getTechIcon = (tech: string) => {
    switch (tech) {
      case "React":
        return <SiReact className="text-4xl text-blue-600" />;
      case "TypeScript":
        return <SiTypescript className="text-4xl text-blue-600" />;
      case "JavaScript":
        return <SiJavascript className="text-4xl text-yellow-500" />;
      case "Python":
        return <SiPython className="text-4xl text-[#3776AB]" />;
      case "Arduino":
        return <SiArduino className="text-4xl text-yellow-600" />;
      case "C++":
        return <SiCplusplus className="text-4xl text-blue-600" />;
      case "C":
        return <SiC className="text-4xl text-gray-400" />;
      case "C#":
        return <SiSharp className="text-4xl text-blue-600" />;
      case "SQLite":
        return <SiSqlite className="text-4xl text-green-500" />;
      case "HTML":
        return <SiHtml5 className="text-4xl text-orange-500" />;
      case "CSS":
        return <SiCss3 className="text-4xl text-blue-500" />;
      case "TailwindCSS":
        return <SiTailwindcss className="text-4xl text-cyan-400" />;
      case "Next.js":
        return <SiNextdotjs className="text-4xl text-gray-400" />;
      case "Node.js":
        return <SiNodedotjs className="text-4xl text-green-600" />;
      case "Figma":
        return <SiFigma className="text-4xl text-gray-400" />;
      case "GitHub":
        return <SiGithub className="text-4xl text-gray-400" />;
      case "MongoDB":
        return <SiMongodb className="text-4xl text-green-500" />;
      case "Git":
        return <SiGit className="text-4xl text-orange-500" />;
      default:
        return null;
    }
  };

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
        <div className="mt-2 flex gap-2">
          {tech.map((technology, index) => (
            <span key={index}>{getTechIcon(technology)}</span> // Display all icons
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
