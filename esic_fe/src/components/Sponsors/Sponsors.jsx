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

// bg-gradient-to-br to-background-900 from-hero-50
export function Sponsors() {
    return (

        <div className=" dark:from-background">
            <div className="px-4 md:px-14 pt-10 flex justify-center items-center">
              <h1 className='text-[40px] md:text-[56px] text-[#292929] roobert-bold flex items-center justify-center text-center mb-20 mt-20'>Sponsors</h1>
              <img
                className=" md:max-w-[100px] md:w-[50px] md:flex hidden hover:scale-1.2"
                src="sponsor.svg"
                alt="foreground"
            />
            </div>
            <div className="relative w-full flex justify-center">
                <div>
                    <BentoGrid className="grid-rows-1 md:grid-rows-3  py-10 ">
                        {features.map((feature) => (
                            <BentoCard key={feature.name} {...feature} />
                        ))}
                    </BentoGrid>
                </div>


                <div>
                    <img src={Sponsors_revealSVG} alt="Example" className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" />
                </div>

                <div className="flex items-center absolute bottom-10">
                    <a href='#' className="flex justify-centre ">
                        <p className="mr-1 text-2xl md:text-3xl font-light text-gray-500">View All Sponsors</p>
                        <div className='flex justify-center rounded-full'><IconArrowUpRight  color='gray' size={40} /></div>
                    </a>
                </div>
            </div>

        </div>
    );
    }
