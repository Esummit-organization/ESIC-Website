import React, { useMemo } from "react";
import PropTypes from "prop-types";
import frame1 from "@/assets/timelineassets/frame-1.svg"
import frame2 from "@/assets/timelineassets/frame-2.svg"

const EventTitles = ({ className = "", startupExpo, emptyRegisterInner, propMargin }) => {
  const startupExpoStyle = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  return (
    <div className={` bg-gray-100 box-border flex flex-row items-end justify-between pt-[19px] pb-[27px] pr-[57px] pl-[34px] max-w-full gap-[20px] text-left text-3xl  text-gray-300 antonio border-l-[4px] border-solid border-firebrick ${className}`}>
      <div className="w-[630px]  flex flex-col items-start justify-start gap-[29px] max-w-full">
        <b
          className=" relative tracking-[0.08em] leading-[122%] font-bold "
          style={startupExpoStyle}
        >
          {startupExpo}
        </b>
        
        <div className=" flex flex-row items-start justify-start gap-[39px] text-lg text-tomato-200  md:gap-1">
          <div className="w-[214px] flex flex-row items-start justify-start gap-[12px]">
            <img
                className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                alt=""
                src={frame1}
            />
            <div className="flex-1 relative tracking-[0.1em] leading-[122%]">
              2:30 PM to 4:30 PM
            </div>
          </div>

          <div className=" flex flex-row items-start justify-start gap-[11px]">
            <img
                className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                alt=""
                src={frame2}
            />
            <div className="flex-1 relative tracking-[0.12em] leading-[122%]  ">
              Old sports complex, Nitk
            </div>
          </div>
        </div>
      </div>

      <div className="w-[178px]  flex flex-col items-start justify-between pt-0 px-0 mb-3 box-border">
        <button className="w-full cursor-pointer [border:none] rounded-[58px] bg-gray-400 pt-[15px] pb-3.5 pl-7 flex flex-row gap-2 relative">
          <div className="text-lg  tracking-[0.09em] leading-[150.24%] text-white poppins">
            Register
          </div>
          
          <img
              className="w-6 h-6 mt-1 "
              alt="arrow"
              src={emptyRegisterInner}
          />
        </button>
      </div>
    </div>
  );
};

EventTitles.propTypes = {
  className: PropTypes.string,
  startupExpo: PropTypes.string,
  emptyRegisterInner: PropTypes.string,
  propMargin: PropTypes.any,
};

export default EventTitles;