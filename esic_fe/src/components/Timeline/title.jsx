import React from 'react'
import EventTitles from './cards';
import line from "@/assets/timelineassets/line-20.svg"
import frame3 from "@/assets/timelineassets/frame-3.svg"
import frame27 from "@/assets/timelineassets/frame-27.svg"
import LeftAlignedTimeline from "@/UI/timeline-line"



const Titlle = ({
    day,
    heading,
    date,
    className="",
    edays
}) => {
  return (<>
  
      <div className={`main-container scale-down no-overflow-x ${className}` }></div>
    <div className="self-stretch flex flex-row items-start justify-start mt-[-290px] pb-[19.6px] pr-0.5 pl-1.5 box-border max-w-full  text-firebrick">
   
    <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[26px] max-w-full">
      <div className="pl-[150px] w-[181px] flex flex-col items-start justify-start pt-2.5 px-0  box-border">
        <div className=" mb-[-90px]  self-stretch h-[67px] relative inline-block shrink-0 [text-shadow:1px_0_0_#ff472e,_0_1px_0_#ff472e,_-1px_0_0_#ff472e,_0_-1px_0_#ff472e] mq450:text-23xl mq825:text-37xl">
          <p className="text-[60px] pt-[100px]">{day}</p>
        </div>
      </div>
      <div className="flex-1  flex flex-row items-start justify-start min-w-[1500px] max-w-full text-left font-antonio lg:min-w-full">
        <h1 className="ml-[230px] pt-[80px] mb-[-150px] flex-1 relative text-inherit font-bold font-inherit inline-block max-w-full text-[55px] ">
          {" "}
          {heading}
        </h1>
      </div>
    </div>
  </div>
  <div className="w-[1262px]  flex flex-row items-start justify-start py-0 px-1.5 box-border max-w-full text-21xl">
    <div className="flex-1 flex pt-[-100px] flex-col items-start justify-start  max-w-full">
      <div className="w-[451px] flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px]">
        <h1 className="pl-[150px] pt-[90px]  w-[181px]  text-lightpink relative text-inherit font-normal font-inherit inline-block shrink-0 mq450:text-5xl mq825:text-13xl">
          day
        </h1>
        <div className="whitespace-nowrap pl-[150px] pb-[-50px] pt-[100px] ml-[10px] flex-1 flex flex-col items-start justify-start pt-[10.6px]   box-border min-w-[30px]  font-antonio ">
          <div className=" self-stretch relative  text-lightpink leading-[30.4px] font-semibold z-[1] text-[30px]">
            {date}
          </div>
        </div>
      </div>
      
      <div className="self-stretch flex flex-row items-start justify-end max-w-full">
        <div className="w-[1165px] flex flex-row items-start justify-start gap-[39px] max-w-full mq825:gap-[19px]">

            
          <img
            className="h-[902px] w-0 relative object-contain"
            alt=""
            src={line}
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-[px] px-0 pb-0 box-border max-w-[calc(100%_-_39px)] mq450:pt-5 mq450:box-border mq825:pt-7 mq825:box-border">
           <div className='self-stretch  flex flex-row'>
            <LeftAlignedTimeline/>
            <div className="mr-[200px] self-stretch flex flex-col items-start justify-start gap-[9.3px] max-w-full">
              
              <EventTitles
                startupExpo={edays.name1}
                emptyRegisterInner={frame3}
                propMargin="unset"
              />
              <EventTitles
                startupExpo={edays.name2}
                emptyRegisterInner={frame3}
                propMargin="0"
              />
              <EventTitles
                startupExpo={edays.name3}
                emptyRegisterInner={frame3}
                propMargin="unset"
              />
              <EventTitles
                startupExpo={edays.name4}
                emptyRegisterInner={frame27}
                propMargin="unset"
              />
              <EventTitles
                startupExpo={edays.name5}
                emptyRegisterInner={frame27}
                propMargin="unset"
              />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  </>
  )
}

export default Titlle;
