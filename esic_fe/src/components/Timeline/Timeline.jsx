import React from 'react';
import Titlle from './title';
import timelineimg from '@/assets/timelineassets/frame.svg';
import { eventnames } from '@/constants/timelineconstants';
import union1 from "@/assets/timelineassets/union-1.svg";
import arrow from "../../assets/timelineassets/arrow.png";


export function Timeline() {
  return (

    <div className="w-full relative [background:linear-gradient(180deg,_#1c0f00_50%,_#000_81.64%)] py-14">
        <div className=" pl-8  mb-14 flex flex-row   items-start justify-start gap-5">
            <h1 className=" font-bold grotesk text-white text-[70px] sm:text-[30px]  ">
                Timeline
            </h1>
            <img
                className="h-[75px] w-[75px] lg:h-[68px] lg:w-[68px] md:h-[60px] md:w-[60px] sm:h-[40px] sm:w-[40px] sm:mt-[20px] relative  "
                loading="lazy"
                alt=""
                src={timelineimg}
            />
        </div>
          
        <Titlle
            day="01"
            heading="Let the Entrepreneurship Spark ignite"
            date="4th Feb,2025"
            edays={eventnames[0].day1}
        />
        <Titlle
            day="02"
            heading="Will you survive in the market?"
            date="5th Feb,2025"
            edays={eventnames[0].day2}
        />
        <Titlle
            day="03"
            heading="May the unicorn always be in the sky"
            date="6th Feb,2025"
            edays={eventnames[0].day3}
        />

        <section className="flex flex-row  mr-[20px] mb-[10px] justify-center self-center">
            <div className="h-[550.5px]  w-[900.6px] lg:w-[850px] md:h-[350px] relative">
                <img
                  className="absolute w-full h-full z-[1]"
                  alt=""
                  src={arrow}
                />
            </div>
        </section>
            
        <div className=" flex flex-row  justify-center self-center py-11  box-border gap-8 max-w-full">
            <img 
                className=" h-[170px] w-[116.4px] md:h-[120px] md:w-[100px] mt-3 relative" 
                alt="" 
                src={union1} 
            />
            <div className="relative flex flex-col text-31xl lg:text-[40px] md:text-[30px]  text-tomato-100 grotesk ">
                <h1 className="relative font-normal  ">
                    <p className="w-[800px] lg:w-[500px] md:w-[400px] grotesk font-semibold text-start">And we will all be back next year !</p>
                </h1>
                <h3 className='text-5xl lg:text-xl md:text-[13px] '>
                    <p className='text-white w-[800px] poppins text-start'>with a bigger and much better <span className='text-tomato-100'>E-Summit</span> for you all!</p>
                </h3>                 
            </div>
        </div>          
    </div>    
  );
}
