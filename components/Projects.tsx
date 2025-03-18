"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
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

const fadeIn = (direction: "left" | "right" | "up" | "down", delay: number) => {
  return {
    hidden: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: delay,
      },
    },
  };
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h3 className="font-afacad text-jwPink">MY WORK</h3>
      <h1 className="font-bebas text-8xl text-jwYellow">My Projects</h1>
      <div className="h-full w-full flex flex-wrap justify-center gap-6 px-6 mt-6">
        <ProjectCard
          src="./dementaid.png"
          title="DementAId"
          description="Web application with AI chatbot to help dementia patients"
          tech={["Python", "HTML", "CSS", "JavaScript"]}
          github="https://github.com/solicht88/DementiAId"
        />
        <ProjectCard
          src="./portfolio.png"
          title="This Portfolio!"
          description="My personal developer portfolio"
          tech={["TypeScript", "React", "Next.js", "TailwindCSS"]}
          github="https://github.com/JeffreyWongg/portfolio"
        />
        <ProjectCard
          src="./pid.png"
          title="PID Controller"
          description="A PID controller implementation with 3D parts"
          tech={["C++", "Arduino"]}
          github="https://github.com/JeffreyWongg/PID-Controller"
        />
      </div>
    </div>
  );
};

interface Props {
  src: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
}

const ProjectCard = ({ src, title, description, tech, github }: Props) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={fadeIn("up", 0.2)}
      className="relative overflow-hidden rounded-lg shadow-lg border w-fit flex flex-col items-center p-4 bg-black"
    >
      {/* Image Section (Always at Top) */}
      <img
        src={src}
        alt={title}
        className="w-[400px] sm:w-[300px] h-auto object-contain rounded-lg"
      />

      {/* Content Section (Text and Icons at Bottom) */}
      <div className="flex flex-col items-center text-center p-3">
        <h1 className="text-xl sm:text-lg font-bebas tracking-wide text-jwPink">
          {title}
        </h1>
        <p className="mt-1 font-afacad text-gray-300 text-sm sm:text-xs">
          {description}
        </p>
      </div>

      {/* Footer Section (Icons & GitHub Link) */}
      <div className="w-full flex justify-between items-center px-4 pb-2">
        {/* Tech Icons (Bottom Left) */}
        <div className="flex gap-2 text-lg sm:text-base">
          {tech.map((technology, index) => (
            <span key={index}>{getTechIcon(technology)}</span>
          ))}
        </div>

        {/* GitHub Button (Bottom Right) */}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <SiGithub className="text-3xl" />
        </a>
      </div>
    </motion.div>
  );
};

export default Projects;
