// about.tsx (Your React component)
import React from "react";
import { events } from "../app/timeline"; // Correct the import path as needed

const About: React.FC = () => {
  return (
    <div>
      <h1>Skills</h1>
      <div className="timeline flex flex-col items-center justify-center">
        <h2>My Timeline</h2>
        <div className="flex flex-col gap-y-3 my-4">
          <Circle />
          {events.map((event, index) => (
            <div key={index}>
              <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto">
                {event.direction === "left" ? (
                  <EventCard
                    heading={event.heading}
                    subHeading={event.subHeading}
                  />
                ) : (
                  <div></div>
                )}

                <Pillar />

                {event.direction === "right" ? (
                  <EventCard
                    heading={event.heading}
                    subHeading={event.subHeading}
                  />
                ) : (
                  <div></div>
                )}
              </div>
              {index < events.length - 1 && <Circle />}
            </div>
          ))}
        </div>
      </div>
    </div>
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

interface EventCardProps {
  heading: string;
  subHeading: string;
}

const EventCard: React.FC<EventCardProps> = ({ heading, subHeading }) => {
  return (
    <div className="flex flex-col gap-y-2 border shadow-md rounded-xl p-4">
      <div className="font-afacad font-bold text-lg border-b">{heading}</div>
      <div className="font-afacad font-bold text-sm border-b">{subHeading}</div>
    </div>
  );
};

export default About;
