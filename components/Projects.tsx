import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h3 className="font-afacad text-gray-400">MY WORK</h3>
      <h1 className="font-bebas text-8xl text-jwYellow">My Projects</h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard src="" title="DementAId" description="fsdfdsfds" />
        <ProjectCard src="" title="DementAId" description="fsdfdsfds" />
        <ProjectCard src="" title="DementAId" description="fsdfdsfds" />
      </div>
    </div>
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
        className="w-full object-contain"
      />
      <div className="relative p-4">
        <h1 className="text-2xl font-bebas text-jwGreen">{title}</h1>
        <p className="mt-2 font-afacad text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default Projects;
