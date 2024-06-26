import React from 'react'
import EventTitles from './cards';
import line from "@/assets/timelineassets/line-20.svg"
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
  <div className="pl-40 ">
    <div className="flex flex-col text-firebrick ">
      <div className="flex flex-row gap-10 flex-wrap items-start justify-start text-[55px] lg:text-[50px] md:text-[28px] sm:text-[16px] ">
        <p className="[text-shadow:1px_0_0_#ff472e,_0_1px_0_#ff472e,_-1px_0_0_#ff472e,_0_-1px_0_#ff472e] mt-2 grotesk">{day}</p>
        <h1 className="whitespace-nowrap antonio font-bold antonio">
          {heading}
        </h1>
      </div>
  
      <div className=" flex flex-row gap-12 flex-wrap items-start justify-start  text-[37px]">
        <h1 className="  text-lightpink  font-normal  md:text-[25px] sm:text-[15px] grotesk">
          day
        </h1>      
        <div className="whitespace-nowrap text-lightpink font-semibold  antonio  md:text-[28px] sm:text-[15px]">
          {date}
        </div>
      </div>
    </div>
  </div>

  <div className=" flex flex-row  items-center justify-center">
    <img
      className="h-[900px] w-0 relative object-cover "
      alt=""
      src={timeline}
    />
    <div className="flex flex-col  items-start justify-start px-0 pb-0 mb-[-110px] pt-12">
      <div className='flex flex-row '>
        <LeftAlignedTimeline/>

          <div className=" relative mt-[90px]  flex flex-col items-start justify-start gap-[9px] max-w-full antonio">
              
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
