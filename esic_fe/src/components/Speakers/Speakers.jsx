import React from "react";
import { IconArrowUpRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import Marquee from "@/UI/marquee_speakers";
import { reviews } from "@/constants/speakers"

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, position, url }) => {
  return (
    <figure
      className={cn(
        "relative cursor-pointer p-4 h-48 w-80 ml-20",
      )}
    >
      <div className="flex flex-row items-center gap-2 bg-gradient-to-br from-[#F9DBAF] to-[#E7AE8C] p-6 rounded-3xl h-full justify-end relative">
        <img className="w-3/5 absolute bottom-0 left-[-90px]" alt="" src={img}/>
        <div className="flex flex-col items-end justify-between">
          <div className="flex flex-col items-end">
            <figcaption className="text-3xl font-medium text-[#18120E] dark:text-white p-1 antonio">
              {name}
            </figcaption>
            <p className="text-xs font-medium text-[#891101] dark:text-white/40 p-1 poppins">{position}</p>
          </div>
          <div className="mt-6 flex items-center h-4">
            <p className="text-sm text-[#18120E] poppins mr-2">View Details</p>
            <a href='#'><div className='flex items-center justify-center rounded-full bg-[#EDC5A9] p-2'><IconArrowUpRight color='#900000' size={20}/></div></a>
          </div>
        </div>
      </div>

    </figure>
  );
};
// bg-gradient-to-bl to-hero-50 from-background-900

// bg-gradient-to-t from-gray-800 to-white text-transparent bg-clip-text


export function Speakers() {
    return (
        <div className=" dark:from-background">
            <div className="px-4 md:px-14 pt-10 flex justify-center items-center">
              <h1 className='text-[40px] md:text-[56px] text-[#292929] roobert-bold flex items-center justify-center text-center mb-20 mt-20'>Speakers & Judges</h1>
              <img
                className=" md:max-w-[100px] md:w-[50px] md:flex hidden hover:scale-1.2"
                src="speakers.svg"
                alt="foreground"
            />
            </div>
            
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-3">

            <div className="pointer-events-none absolute inset-y-0 left-0 w-screen"></div>
             <Marquee pauseOnHover className="[--duration:20s]">
                 {firstRow.map((review) => (
                 <ReviewCard key={review.position} {...review} />
                ))}
             </Marquee>
             <Marquee reverse pauseOnHover className="[--duration:20s] mt-5">
                 {secondRow.map((review) => (
              <ReviewCard key={review.position} {...review} />
             ))}
            </Marquee>
             </div>
        </div>
    );
    }
