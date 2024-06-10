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
      <div className="flex flex-row items-center gap-2 bg-gradient-to-br from-[#060d14] to-[#102132]  p-6 rounded-3xl h-full justify-end relative">
        <img className="w-3/5 absolute bottom-0 left-[-90px]" alt="" src={img} />
        <div className="flex flex-col items-end justify-between">
          <div className="flex flex-col items-end">
            <figcaption className="text-3xl font-medium text-white dark:text-white p-1 antonio">
              {name}
            </figcaption>
            <p className="text-xs font-medium text-[#56ACFF] dark:text-white/40 p-1 poppins">{position}</p>
          </div>
          <div className="mt-6 flex items-center h-4">
            <p className="text-sm text-white poppins mr-2">View Details</p>
            <a href='#'><div className='flex items-center justify-center rounded-full bg-gray-800'><IconArrowUpRight color='white' size={20}/></div></a>
          </div>
        </div>
      </div>

    </figure>
  );
};

export function Speakers() {
    return (
        <div className="bg-gradient-to-br to-background-900 from-hero-50 dark:from-background">
            <div className=" px-14 pt-10">
            <h1 className='text-5xl lg:text-8xl text-white grotesk bg-gradient-to-t from-gray-900 to-gray-50 inline-block text-transparent bg-clip-text'>Speakers</h1>
            <div className="flex items-center">
            <hr className='w-20 border-t-2 border-[#006DD5] ' />
            <p className="poppins lg:text-xl mx-3 my-1 text-[#006DD5]">View all Speakers</p>
            <a href='#'><div className='flex items-center justify-center rounded-full bg-gray-800'><IconArrowUpRight color='white' size={20}/></div></a>
            </div>
            </div>
            
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-3">

            <div className="pointer-events-none absolute inset-y-0 left-0 w-screen "></div>
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


 