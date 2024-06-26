import React from 'react'
import EventTitles from './Cards';
import frame3 from "@/assets/timelineassets/frame-3.svg"
import frame27 from "@/assets/timelineassets/frame-27.svg"
import LeftAlignedTimeline from "@/UI/timeline-line"
import timeline from "../../assets/timelineassets/timeline.png"


const Titlle = ({
    day,
    heading,
    date,
    edays
}) => {
  return (<>
  <div className="sm:pl-6 pl-10">
    <div className="flex flex-col text-firebrick ">
      <div className="flex flex-row sm:gap-10 gap-5 items-start justify-start lg:text-[50px] md:text-[35px] sm:text-[30px] text-[20px]">
        <p className="[text-shadow:1px_0_0_#ff472e,_0_1px_0_#ff472e,_-1px_0_0_#ff472e,_0_-1px_0_#ff472e] mt-2 grotesk">{day}</p>
        <h1 className=" antonio relative sm:top-0 top-[5px] font-bold ">
          {heading}
        </h1>
      </div>
  
      <div className=" flex flex-row lg:gap-12 md:gap-9 sm:gap-7 gap-5 flex-wrap items-start justify-start  lg:text-[37px] sm:text-[28px] text-[18px]">
        <h1 className="  text-lightpink mt-1 sm:ml-[-5px] ml-[-6px] font-normal grotesk">
          day
        </h1>      
        <div className="whitespace-nowrap text-lightpink font-semibold  antonio ">
          {date}
        </div>
      </div>
    </div>
  </div>

  <div className=" flex flex-row  items-center justify-center">
    
    <div className="flex flex-col  items-start justify-start px-0 pb-0 ">
      <div className='flex flex-row '>
        <LeftAlignedTimeline/>

          <div className=" relative md:mt-[90px] mt-[55px] flex flex-col items-start justify-start gap-[9px] max-w-full antonio">
              
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

</>
  )
}

export default Titlle;