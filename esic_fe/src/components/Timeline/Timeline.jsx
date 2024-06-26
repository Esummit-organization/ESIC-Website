import React from 'react';
import Titlle from './Title';
import timelineimg from '@/assets/timelineassets/frame.svg';
import { eventnames } from '@/constants/timelineconstants';
import union1 from "@/assets/timelineassets/union-1.svg";
import arrow from "../../assets/timelineassets/arrow.png";


export function Timeline() {
  return (

    <div className="w-full relative [background:linear-gradient(180deg,_#1c0f00_50%,_#000_81.64%)] py-14">
        <div className=" pl-8  mb-14 flex flex-row   items-start justify-start gap-5">
            <h1 className=" font-bold grotesk text-white text-6xl ">
                Timeline
            </h1>
            <img
                className="h-[75px] w-[75px] top-[-20px] relative  "
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

        <section className="flex flex-row justify-center self-center">
            <div className="h-[500.5px] w-[910.6px]  relative">
                <img
                  className="absolute w-full h-full z-[1]"
                  alt=""
                  src={arrow}
                />
            </div>
        </section>
            
        <div className="flex flex-row justify-center items-center pl-32 py-11  gap-8 ">
            <img 
                className=" h-[170px]  w-[116.4px]" 
                alt="" 
                src={union1} 
            />
            <div className=" flex flex-col text-[40px] gap-4 text-tomato-100 grotesk ">
                <h1 className=" font-normal  ">
                    <p className="w-[700px] grotesk font-semibold text-start">And we will all be back next year !</p>
                </h1>
                <h3 className='text-2xl'>
                    <p className='text-white w-[800px] poppins text-start'>with a bigger and much better <span className='text-tomato-100'>E-Summit</span> for you all!</p>
                </h3>                 
            </div>
        </div>          
    </div>    
  );
}