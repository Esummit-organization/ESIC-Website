import React, { useState } from "react";
import Marquee from "./Marquee/marquee.tsx";

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
      backgroundImage: `url("image1.svg")`,
      backgroundSize: 'contain',
      backgroundPosition: 'top',
      backgroundRepeat: 'no-repeat'}}
    >
        <Marquee className="text-black bg-[#FFA732] w-full transform font-Antonio md:rotate-[0deg] mt-[10px] text-3xl font-bold" pauseOnHover={false} repeat={20} duration={10}>
        <span className="text-black">Events  •</span><span className="text-[#FFA732]"style={{ textShadow: '0 0 5px #8E0000, 0 0 2px #8E0000' }}>Events  •</span>
        </Marquee>
        <div className="flex w-full flex-col mt-10 h-auto">
          <Marquee
            className="w-auto text-white mb-5"
            pauseOnHover={hover}
            reverse={true}
            repeat={3}
          >
          <span
              className="mr-10 relative hover:scale-[110%]"
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
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
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
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
          <span
              className="mr-10 relative hover:scale-[110%]"
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
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
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
            >
              <img
                src="https://www.indiafilings.com/learn/wp-content/uploads/2023/01/shutterstock_1043242525-1.jpg"
                alt="Another Placeholder Image"
                className="h-40 w-[250px] rounded-3xl border border-white object-cover"
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
      </div>
      
        <div className="overflow-y-hidden mt-10" style={{ scrollSnapType: "x mandatory" }}>
          <Marquee
            className="w-full text-white"
            pauseOnHover={hover}
            reverse={true}
            repeat={3}
          >
            <span
              className="mr-10 relative hover:scale-[110%]"
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
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
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
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
            <span
              className="mr-10 relative hover:scale-[110%]"
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
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
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
            >
              <img
                src="https://www.indiafilings.com/learn/wp-content/uploads/2023/01/shutterstock_1043242525-1.jpg"
                alt="Another Placeholder Image"
                className="h-40 w-[250px] rounded-3xl border border-white object-cover"
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
      <p className="flex justify-center text-[black] mt-10 text-xl"> View all events →</p>
      <Marquee className="text-black bg-[#FFA732] w-full transform font-Antonio md:rotate-[0deg] mt-[10px] text-3xl font-bold" pauseOnHover={false} repeat={20} duration={10}>
        <span className="text-black">Speakers  •</span><span className="text-[#FFA732]"style={{ textShadow: '0 0 5px #8E0000, 0 0 2px #8E0000' }}>Speakers  •</span>
      </Marquee>
    </div>
  );
}
