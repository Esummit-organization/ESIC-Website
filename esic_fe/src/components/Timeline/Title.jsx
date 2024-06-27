import React from 'react'
import EventTitles from './Cards';
import frame3 from "@/assets/timelineassets/frame-3.svg"
import frame27 from "@/assets/timelineassets/frame-27.svg"
import LeftAlignedTimeline from "@/UI/timeline-line"
import timeline from "../../assets/timelineassets/timeline.png"


const Title = ({
    day,
    heading,
    date,
    edays
}) => {

  const dayStyle={
    WebkitTextStroke: `0.5px #FF472E`,
    color: `transparent`,
    fontWeight: "bold",
    fontStretch: "expanded",
    letterSpacing: "0.1em",

  }

  return (<>
  <div className="sm:pl-6 pl-10">
<div className="flex flex-col space-y-4 lg:space-y-6">
  <div className="flex flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-10">
  <p className="mt-2 text-[20px] sm:text-[24px] md:text-[30px] lg:text-[40px] xl:text-[50px] grotesk flex flex-col items-center justify-center">
    <span className='' style={dayStyle}>
      {day}
    </span>
    <span className="text-lightpink mt-1 text-[16px] sm:text-[20px] md:text-[24px] lg:text-[30px] xl:text-[37px] font-normal grotesk">
      day
    </span>
  </p>
  <h1 className="text-firebrick antonio relative text-[24px] sm:text-[30px] md:text-[36px] lg:text-[48px] xl:text-[60px] font-bold flex flex-col">
    <span>
      {heading}
    </span>
    <span className="whitespace-nowrap text-lightpink font-semibold text-[16px] sm:text-[20px] md:text-[24px] lg:text-[30px] xl:text-[37px] antonio">
      {date}
    </span>
  </h1>
</div>



</div>


  </div>

  <div className=" flex flex-row items-center justify-center">
    
    <div className="flex flex-col md:items-start md:justify-start mx-auto px-0 pb-0">
      <div className='flex flex-row md:gap-0 gap-1'>
        <LeftAlignedTimeline/>

          <div className="w-fit md:mt-[90px] mt-[55px] flex flex-col md:items-start md:justify-start items-center gap-[9px] max-w-full antonio">
              
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

export default Title;