import React, { useState } from "react";
import Marquee from "../Marquee/marquee.tsx";

export function Events() {
  const [hover, setHover] = useState(false);

  // Function to handle hover state changes
  const handleHover = (isHovering) => {
    setHover(isHovering);
  };

  return (
    <div className="text-secondary-900 bg-hero-50 h-screen w-full flex flex-col items-center">
      <p className="text-7xl text-white mb-4">Events</p>
      <div className="flex w-full flex-col mt-20 mb-20 h-auto">
        <Marquee
          className="w-auto text-white mb-5"
          pauseOnHover={hover} // Set pauseOnHover dynamically
          reverse={true}
          repeat={1}
        >
          {/* Apply hover functionality to each span */}
          <span
            className="mr-10 relative hover:scale-[110%]"
            onMouseEnter={() => handleHover(true)} // Set hover to true on mouse enter
            onMouseLeave={() => handleHover(false)} // Set hover to false on mouse leave
          >
            <img
              src="https://s28126.pcdn.co/blogs/ask-experian/wp-content/uploads/what-are-different-types-of-stocks.jpg.optimal.jpg"
              alt="Placeholder Image"
              className="h-40 w-[250px] rounded-3xl border border-white object-cover"
            />
            <p className="absolute bottom-5 left-1 font-bold">Stonks</p>
            <img
              src="/NE.svg"
              alt="NE Icon"
              className="absolute bottom-1 right-3 h-6 w-6 bg-white bg-opacity-20 rounded-full"
            />
          </span>
          <span
            className="mr-10 relative hover:scale-[110%]"
            onMouseEnter={() => handleHover(true)} // Set hover to true on mouse enter
            onMouseLeave={() => handleHover(false)} // Set hover to false on mouse leave
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU0yxF-Rqvu80gyxu1ohTic4U4bTMcuITF5g&s"
              alt="Another Placeholder Image"
              className="h-40 w-[250px] rounded-3xl border border-white object-cover"
            />
            <p className="absolute bottom-5 left-1 font-bold">Hacking</p>
            <img
              src="/NE.svg"
              alt="NE Icon"
              className="absolute bottom-1 right-3 h-6 w-6 bg-white bg-opacity-20 rounded-full"
            />
          </span>
        </Marquee>
        <Marquee
          className="w-full text-white mt-20"
          pauseOnHover={hover}
          reverse={true}
          repeat={1}
        >
          <span
            className="mr-10 relative hover:scale-[110%]"
            onMouseEnter={() => handleHover(true)} // Set hover to true on mouse enter
            onMouseLeave={() => handleHover(false)} // Set hover to false on mouse leave
          >
            <img
              src="https://c4.wallpaperflare.com/wallpaper/270/151/624/breaking-bad-actors-bryan-cranston-walter-white-men-with-glasses-2992x4016-animals-horses-hd-art-wallpaper-preview.jpg"
              alt="Walter White"
              className="h-40 w-[250px] rounded-3xl border border-white object-cover"
            />
            <p className="absolute bottom-5 left-1 font-bold">Motivation</p>
            <img
              src="/NE.svg"
              alt="NE Icon"
              className="absolute bottom-1 right-3 h-6 w-6 bg-white bg-opacity-20 rounded-full"
            />
          </span>
          <span
            className="mr-10 relative hover:scale-[110%]"
            onMouseEnter={() => handleHover(true)} // Set hover to true on mouse enter
            onMouseLeave={() => handleHover(false)} // Set hover to false on mouse leave
          >
            <img
              src="https://www.indiafilings.com/learn/wp-content/uploads/2023/01/shutterstock_1043242525-1.jpg"
              alt="Another Placeholder Image"
              className="h-40 w-[250px] rounded-3xl border border-white object-cover "
            />
            <p className="absolute bottom-5 left-1 font-bold">Start Up</p>
            <img
              src="/NE.svg"
              alt="NE Icon"
              className="absolute bottom-1 right-3 h-6 w-6 bg-white bg-opacity-20 rounded-full"
            />
          </span>
        </Marquee>
      </div>
      <p className="flex justify-center text-[#FFFFFF] mt-10 font-bold text-xl"> View all events →</p>
    </div>
  );
}
