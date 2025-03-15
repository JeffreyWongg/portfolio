"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { events } from "../app/timeline"; // Correct import path if necessary
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

const skills = [
  { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
  { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "Arduino", icon: <SiArduino className="text-[#00979D]" /> },
  { name: "C#", icon: <SiSharp className="text-[#68217A]" /> },
  { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
  { name: "C", icon: <SiC className="text-[#A8B9CC]" /> },
  { name: "SQLite", icon: <SiSqlite className="text-[#003B57]" /> },
  { name: "HTML", icon: <SiHtml5 className="text-[#E34F26]" /> },
  { name: "CSS", icon: <SiCss3 className="text-[#1572B6]" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-[#38B2AC]" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
  },
  { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
  { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
  { name: "GitHub", icon: <SiGithub className="text-black dark:text-white" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
];

const About: React.FC = () => {
  return (
    <div className="px-8">
      {/* About Me Section */}
      <ScrollSection>
        <div id="about" className="flex flex-col justify-center items-center text-center h-screen">
          <h3 className="font-afacad text-gray-400">WHO IS JEFFREY?</h3>
          <h1 className="font-bebas text-8xl text-jwYellow">About Me</h1>
          <div className="font-afacad text-gray-400 text-xl max-w-2xl space-y-4 h-screen">
            <p>
              Hello! I am Jeffrey Wong, a current grade 12 living in Ontario,
              Canada. I have a passion for software and programming, therefore I
              am an incoming Software Engineering student at the University of
              Waterloo!
            </p>
            <p>
              I pride myself as a life-long learner who is eager to learn about
              anything STEM-related! Aside from STEM, I enjoy playing
              basketball, playing trivia, and gaming.
            </p>
          </div>
        </div>
      </ScrollSection>

      {/* Skills Section */}
      <ScrollSection delay={0.3}>
        <div className="flex flex-col justify-center items-center py-10">
          <h3 className="font-afacad text-gray-400">MY TECHSTACK</h3>
          <h1 className="font-bebas text-8xl text-jwYellow">Skills</h1>

          {/* Skills Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-6 text-5xl mt-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                {skill.icon}
                <span className="text-sm font-afacad">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* Timeline Section */}
      <div id="experience" className="timeline flex flex-col items-center justify-center mt-12">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-afacad text-gray-400"
        >
          MY EXPERIENCE PATHWAY
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-bebas text-8xl text-jwYellow"
        >
          EXPERIENCES
        </motion.h1>

        <div className="flex flex-col gap-y-3 my-4">
          <Circle />
          {events.map((event, index) => (
            <TimelineEvent key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ScrollSection = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay }}
    >
      {children}
    </motion.div>
  );
};

const Circle = () => {
  return <div className="rounded-full w-4 h-4 bg-jwBlue mx-auto"></div>;
};

const Pillar = () => {
  return (
    <div className="rounded-t-full rounded-b-full w-2 h-full bg-jwBlue mx-auto"></div>
  );
};

const TimelineEvent: React.FC<{ event: any; index: number }> = ({
  event,
  index,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: event.direction === "left" ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto">
        {event.direction === "left" ? (
          <EventCard
            heading={event.heading}
            subHeading={event.subHeading}
            description={event.description}
            date={event.date}
          />
        ) : (
          <div></div>
        )}

        <Pillar />

        {event.direction === "right" ? (
          <EventCard
            heading={event.heading}
            subHeading={event.subHeading}
            description={event.description}
            date={event.date}
          />
        ) : (
          <div></div>
        )}
      </div>
      {index < events.length - 1 && <Circle />}
    </motion.div>
  );
};

interface EventCardProps {
  heading: string;
  subHeading: string;
  description: string;
  date: string;
}

const EventCard: React.FC<EventCardProps> = ({
  heading,
  subHeading,
  description,
  date,
}) => {
  return (
    <div className="flex flex-col gap-y-2 border shadow-md rounded-xl p-4">
      <div className="font-afacad font-bold text-lg border-b">{heading}</div>
      <div className="font-afacad font-bold text-sm">{subHeading}</div>
      <div className="font-afacad text-sm">{description}</div>
      <div className="font-afacad font-bold text-sm">{date}</div>
    </div>
  );
};

export default About;
