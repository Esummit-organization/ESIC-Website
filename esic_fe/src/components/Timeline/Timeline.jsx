import React from 'react';
import Title from './title';
import timelineimg from '@/assets/timelineassets/frame.svg';
import { eventnames } from '@/constants/timelineconstants';
import union1 from "@/assets/timelineassets/union-1.svg";
import union2 from "@/assets/timelineassets/union-2.svg";
import vector41 from "@/assets/timelineassets/vector-41.svg";
import vector42 from "@/assets/timelineassets/vector-42.svg";

console.log(eventnames[0].day1);

export function Timeline() {
  return (
    <>
      <div className="w-full relative [background:linear-gradient(180deg,_#1c0f00_50%,_#000_81.64%)] overflow-hidden flex flex-col items-start justify-start pt-[-0px] px-0 pb-0 box-border gap-[37.5px] leading-[normal] tracking-[normal] mq825:gap-[19px] sm:gap-[10px] xs:gap-[5px]">
        <section className="self-stretch flex flex-row items-start justify-end pt-0 px-10 pb-[93.5px] box-border max-w-full text-left text-51xl text-white font-sharp-grotesk-medium-25 lg:pb-[26px] lg:box-border mq450:pb-5 mq450:box-border mq1425:pb-10 mq1425:box-border sm:pb-3 sm:box-border xs:pb-2 xs:box-border">
          <div className="w-[1402px] flex flex-col items-start justify-start gap-[29px] max-w-full">
            <div className="flex flex-row items-start justify-start py-0 px-[19px] box-border max-w-full">
              <div className="flex flex-row items-start justify-start py-0 pr-[33px] pl-0 box-border [row-gap:20px] max-w-full mq825:flex-wrap sm:flex-wrap xs:flex-wrap">
                <div className="w-[401px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-full">
                  <h1 className="mb-[150px] pt-[40px] pl-[140px] w-[509px] h-[109px] relative text-inherit font-medium font-inherit inline-block shrink-0 [debug_commit:69da668] max-w-[127%] z-[1] mq450:text-23xl mq825:text-37xl sm:text-21xl xs:text-18xl">
                    Timeline
                  </h1>
                </div>
                <img
                  className="h-[75px] ml-[15px] mt-[47px] w-[75px] relative overflow-hidden shrink-0 [debug_commit:69da668]"
                  loading="lazy"
                  alt=""
                  src={timelineimg}
                />
              </div>
            </div>
            <Title
              day="01"
              heading="Let the Entrepreneurship Spark ignite"
              date="4th Feb,2025"
              edays={eventnames[0].day1}
            />
            <Title
              day="02"
              heading="Will you survive in the market?"
              date="5th Feb,2025"
              edays={eventnames[0].day2}
            />
            <Title
              day="03"
              heading="May the unicorn always be in the sky"
              date="6th Feb,2025"
              edays={eventnames[0].day3}
            />
            <section className="w-[1397.1px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <div className="h-[518.5px] w-[1076.6px] relative max-w-full">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                  alt=""
                  src={vector41}
                />
                <img
                  className="absolute top-[481px] left-[503.5px] w-[71.5px] h-[37.5px] z-[2]"
                  loading="lazy"
                  alt=""
                  src={vector42}
                />
              </div>
            </section>
            <section className="self-stretch flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border gap-[102px] max-w-full mq450:gap-[25px] mq825:gap-[51px] sm:gap-[20px] xs:gap-[10px]">
              <div className="w-[684.6px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <img className="ml-[500px] h-[180px] w-[116.4px] relative" alt="" src={union1} />
                <div className="relative flex flex-col items-center justify-start max-w-full text-31xl text-tomato-100 font-sharp-grotesk-medium-25">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[78px] pl-[201px] box-border max-w-full">
                    <h1 className="ml-[-130px] h-72 w-[1000px] relative text-inherit font-normal font-inherit inline-block shrink-0 max-w-[121%] z-[3] mq450:text-11xl mq825:text-21xl sm:text-18xl xs:text-15xl">
                      <p className="m-0 w-[1000px]">And we will all be back</p>
                      <p className="m-0">next year!</p>
                    </h1>
                  </div>
                  <h3 className="ml-[60px] w-[1187px] h-[46px] mb-[20px] mt-[-150px] relative text-[25px] font-normal font-poppins text-center inline-block shrink-0 max-w-full z-[4] text-white mq450:text-lg mq825:text-5xl sm:text-3xl xs:text-2xl">
                    <span>with a bigger and much better </span>
                    <span className="text-tomato-100">E-summit</span>
                    <span> for you all!</span>
                  </h3>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
}