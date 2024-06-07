import React from "react";
import { WidthIcon } from '@radix-ui/react-icons'
import { IconArrowUpRight } from "@tabler/icons-react";
import { BentoCard, BentoGrid } from "@/UI/bento_grid_sponsors";
import {
    BellIcon,
    CalendarIcon,
    FileTextIcon,
    GlobeIcon,
    InputIcon,
} from "@radix-ui/react-icons";
import { features } from "@/constants/sponsors";
import Sponsors_revealSVG from "@/assets/svgs/sponsors_reveal.svg"


export function Sponsors() {
    return (
        
        <div className="bg-gradient-to-br to-background-900 from-hero-50 dark:from-background"> 
        <div className=" px-14 pt-10">
        <h1 style={{WebkitBackgroundClip: 'text'}} className='text-5xl sm:text-8xl text-white grotesk bg-gradient-to-t from-gray-800 to-white text-transparent bg-clip-text'>Sponsors</h1>
        <div className="flex items-center">
          <hr className='w-20 border-t-2 border-[#006DD5] ' />
          <p className="poppins text-xl mx-3 my-1 text-[#006DD5]">View all Sponsors</p>
          <a href='#'><div className='flex items-center justify-center rounded-full bg-gray-800'><IconArrowUpRight color='white' size={20}/></div></a>
        </div>
      </div>

        <div className="relative flex w-full justify-center">
            <BentoGrid className="grid-rows-1 lg:grid-rows-3 px-10 py-10 ">
                {features.map((feature) => (
                    <BentoCard key={feature.name} {...feature} />
                ))}
            </BentoGrid>

            <div>
            <img src={Sponsors_revealSVG} alt="Example" className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" />
           </div> 

            <div className="flex items-center absolute bottom-20"> 
            <a href='#' className="flex justify-centre ">
            <p className="mr-1 text-3xl text-white">View All Sponsors</p>
            <div className='flex justify-center rounded-full'><IconArrowUpRight color='white' size={40}/></div>
            </a>
            </div>
        </div>
      
        </div>
    );
    }
