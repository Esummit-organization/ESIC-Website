import React from "react";
import frame1 from "@/assets/timelineassets/frame-1.svg"
import frame2 from "@/assets/timelineassets/frame-2.svg"
import frame27 from "@/assets/timelineassets/frame-27.svg"

const EventTitles = ({ time, location, title, registerLink}) => {
  
  return (
    <a href={registerLink}>
    <div className={" xs:w-[100px] md:w-[580px] lg:w-[810px] md:max-w-full bg-gray-100 box-border flex flex-row md:items-end md:justify-between items-center justify-center mx-auto sm:pt-[19px] sm:pb-[27px] py-[23px] lg:pr-[57px] sm:pr-[40px] pr-[15px] sm:ml-[0] ml-[-30px] sm:pl-[34px] pl-[15px] gap-[20px] text-left lg:text-3xl sm:text-2xl text-xl text-gray-300 antonio sm:border-l-[4px] border-l-2 border-solid border-firebrick"}>
      <div className="xl:w-[630px] lg:w-[500px] md:w-[350px] sm:w-[230px] w-[150px] flex flex-col items-start justify-start md:gap-[29px] sm:gap-5 gap-3 max-w-full">
        <div
          className=" tracking-[0.08em] leading-[122%] font-bold "
        >
          {title}
        </div>
        
        <div className=" flex flex-col md:flex-row items-start justify-start lg:gap-[39px] md:gap-5 sm:gap-2 gap-1 lg:text-lg sm:text-[16px] text-[12px] text-tomato-200 ">
          <div className="flex flex-row items-start justify-start lg:gap-3 gap-2">
            <img
                className="lg:w-6 lg:h-6 sm:w-5 sm:h-5 w-4 h-4 overflow-hidden shrink-0 z-[1]"
                alt=""
                src={frame1}
            />
            <div className="flex-1 lg:tracking-[0.1em] sm:tracking-[0.01em] leading-[122%] w-[210px]">
              {time}
            </div>
          </div>

          <div className=" flex flex-row items-start justify-start lg:gap-3 gap-2">
            <img
                className="lg:w-6 lg:h-6 sm:w-5 sm:h-5 w-4 h-4 overflow-hidden shrink-0 z-[1]"
                alt=""
                src={frame2}
            />
            <div className="flex-1 lg:tracking-[0.12em] sm:tracking-[0.01em] leading-[122%]  ">
              {location}
            </div>
          </div>
        </div>
      </div>
      
      <div  className="lg:w-[178px] md:w-[130px] w-[48px] md:flex md:flex-col items-start justify-between pt-0 px-0 mb-3 box-border ">
        <button className="w-full [border:none] rounded-[58px] bg-gray-400 md:pt-[15px]  pt-3 pb-4 pl-4 lg:pl-7 md:pl-5  flex flex-row gap-1 relative">
          <div className="lg:text-lg sm:text-base text-[12px] tracking-[0.09em] leading-[150.24%] text-white poppins md:block hidden">
            Register
          </div>
          
          <img
              className="lg:w-6 lg:h-6 w-4 h-4 lg:mt-0 mt-1 "
              alt="arrow"
              src={frame27}
          />
        </button>
      </div>
      
    </div>
    </a>
  );
};

export default EventTitles;
