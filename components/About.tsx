import React from "react";

interface AboutProps {
    events: Event[];
  }
  
  const About: React.FC<AboutProps> = ({ events }) => {
  return (
    <div>
      <h1>skills</h1>
      {/* timeline */}
      <div className="flex flex-col gap-y-3 w-full my-4">
            <Circle />
            {events.map(event, key) => {
                <Fragment key={key}>
                    <div className="grid grid-cols-[1fr-auto-1fr] gap-x-2 items-center mx-auto">
                        {event.direction === "left" ? (
                            <EventCard heading={event.heading} subHeading={event.subHeading}/>
                        )}
                    </div>
                </Fragment>
            }}
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
