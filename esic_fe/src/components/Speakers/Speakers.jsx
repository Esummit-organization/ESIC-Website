import React from "react";

export function Speakers() {
    return (
        <div className="bg-gradient-to-br to-background-900 from-hero-50 dark:from-background">
            <div className="px-4 md:px-14 pt-10">
            <h1 className='text-[40px] md:text-8xl text-white grotesk bg-gradient-to-t from-gray-800 to-white text-transparent bg-clip-text'>Speakers</h1>
            <div className="flex items-center">
            <hr className='w-20 border-t-2 border-[#006DD5] ' />
            <p className="poppins text-[11px] md:text-xl ml-1 mr-1 md:mx-3 my-1 text-[#006DD5]">View all Speakers</p>
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
