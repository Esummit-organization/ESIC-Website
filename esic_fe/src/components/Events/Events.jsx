import React, { useState } from "react";
import Marquee from "./Events_Preview.jsx";
import { MarqueScroll } from "../Marque/Marque.jsx";
import { eventData } from "../../constants/EventsPreview.jsx"; // Importing eventData from the separate file

export function Events() {
  const [hover, setHover] = useState(false);

  // Function to handle hover state changes
  const handleHover = (isHovering) => {
    setHover(isHovering);
  };

  return (
    <div className="text-secondary-900 bg-[secondary-900] h-auto w-full flex flex-col items-center" style={{ overflowX: 'hidden' }}>
      <div className="flex flex-col w-full" style={{ 
        overflowX: 'hidden',
        backgroundImage: `url("EventsPreview.svg")`,
        backgroundSize: 'contain',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat'}}
      >
        <MarqueScroll className="bg-background-500" text={"Events. "} angle={0} />
        <div className="flex w-full flex-col mt-10 h-auto">
          <Marquee
            className="w-auto text-white mb-5"
            pauseOnHover={hover}
            reverse={true}
            repeat={3}
          >
            {eventData.map((event, index) => (
              <span
                key={index}
                className="mr-10 relative hover:scale-[110%]"
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
              >
                <img
                  src={event.image}
                  alt="Event Image"
                  className="h-40 w-[250px] rounded-3xl border border-white object-cover"
                />
                <p className="absolute bottom-5 left-1 font-bold">{event.name}</p>
                <img
                  src="/NE.svg"
                  alt="NE Icon"
                  className="absolute bottom-1 right-3 h-6 w-6 bg-white bg-opacity-20 rounded-full"
                />
              </span>
            ))}
          </Marquee>
        </div>
      </div>

      <div className="overflow-y-hidden mt-10" style={{ scrollSnapType: "x mandatory" }}>
        <Marquee
          className="w-full text-white"
          pauseOnHover={hover}
          reverse={true}
          repeat={3}
        >
          {eventData.map((event, index) => (
            <span
              key={index}
              className="mr-10 relative hover:scale-[110%]"
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
            >
              <img
                src={event.image}
                alt="Event Image"
                className="h-40 w-[250px] rounded-3xl border border-white object-cover"
              />
              <p className="absolute bottom-5 left-1 font-bold">{event.name}</p>
              <img
                src="/NE.svg"
                alt="NE Icon"
                className="absolute bottom-1 right-3 h-6 w-6 bg-white bg-opacity-20 rounded-full"
              />
            </span>
          ))}
        </Marquee>
      </div>

      <p className="flex justify-center text-[black] mt-10 text-xl"> View all events →</p>
      <MarqueScroll className="bg-background-500" text={"Speakers. "} angle={0} /> 
    </div>
  );
}
