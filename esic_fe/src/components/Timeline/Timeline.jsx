import React from 'react';
import Titlle from './Title';
import timelineimg from '@/assets/timelineassets/frame.svg';
import { eventnames } from '@/constants/timelineconstants';
import union1 from "@/assets/timelineassets/union-1.svg";
import arrow from "../../assets/timelineassets/arrow.png";


export function Timeline() {

  return (

    <div className="w-full relative [background:linear-gradient(180deg,_#1c0f00_50%,_#000_81.64%)] py-14">
        <div className=" lg:pl-8 pl-6 mb-14 flex flex-row items-start justify-start gap-5">
            <h1 className=" lg:font-bold grotesk text-white lg:text-6xl sm:text-5xl text-4xl">
                Timeline
            </h1>
            <img
                className="lg:h-[75px] lg:w-[75px] sm:h-14 sm:w-14 h-10 w-10 lg:top-[-20px] sm:top-[-10px] relative  "
                loading="lazy"
                alt=""
                src={timelineimg}
            />
        </div>
        <div className='flex flex-col justify-start items-start xl:ml-40 lg:ml-24 md:ml-10 sm:ml-4 ml-0'> 
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
    </div> 
        <section className="flex flex-row justify-start items-start">
            <div className="lg:h-[500.5px] lg:w-[800.6px] md:w-[650px] md:h-[400px] xl:ml-40 lg:ml-24 md:ml-10 sm:ml-4 sm:w-[475px] w-[330px] h-[250px] sm:h-72  left-[54px] relative">
                <img
                  className="absolute w-full h-full z-[1]"
                  alt=""
                  src={arrow}
                />
            </div>
        </section>
            
        <div className="flex flex-row justify-center items-center lg:pl-32 pl-2 py-11 lg:gap-8 gap-4">
            <img 
                className=" lg:h-[170px] lg:w-[116.4px] md:h-[130px] md:w-[80px] sm:h-[90px] sm:w-[50px] h-[70px] w-[40px]" 
                alt="esic-logo" 
                src={union1} 
            />
            <div className=" flex flex-col lg:text-[45px] md:text-3xl sm:text-2xl text-lg lg:gap-2 md:gap-4 sm:gap-1 gap-0 text-tomato-100 grotesk ">
                <h1 className=" font-normal  ">
                    <p className="lg:w-[700px] md:w-[450px] sm:w-[400px] w-[300px] md:leading-normal  leading-snug grotesk font-semibold ">And we will all be back next year !</p>
                </h1>
                <h3 className='lg:text-2xl md:text-lg sm:text-sm text-[10px]'>
                    <p className='text-white poppins '>with a bigger and much better <span className='text-tomato-100'>E-Summit</span> for you all!</p>
                </h3>                 
            </div>
        </div>          
    </div>    
  );
}