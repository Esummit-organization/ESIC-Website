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
    <div className="bg-[#FFE7B9] h-[full] w-full flex flex-col items-center" style={{ overflowX: 'hidden' }}>
      <div className="flex flex-col w-full h-[200px]">
        <img src="EventsPreview.svg" alt="" className="h-[470px]" />
      </div>
      <MarqueScroll className="bg-background-500 mb-[25px]" text={"Events. "} angle={0} />
        <div className="flex w-full flex-col h-auto mt-[100px]">
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
      

      <div className="overflow-y-hidden mt-10 bg-" style={{ scrollSnapType: "x mandatory" }}>
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
      <div className="cursor-pointer hover:font-bold">
      <p className="flex justify-center text-[black] mt-5 text-xl">View all events →</p>
      </div>
      {/*<MarqueScroll className="bg-background-500" text={"Speakers. "} angle={0} /> */}
    </div>
  );
}
