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
    <div className={` bg-gray-100 box-border flex flex-row items-end justify-between pt-[19px] pb-[27px] pr-[57px] pl-[34px] max-w-full gap-[20px] text-left text-11xl  text-gray-300 antonio border-l-[4px] border-solid border-firebrick lg:pr-7 lg:box-border ${className}`}>
      <div className="w-[630px] lg:w-[560px] md:w-[200px] flex flex-col items-start justify-start gap-[29px] md:gap-[22px] max-w-full">
        <b
          className=" relative tracking-[0.08em] leading-[122%] font-bold lg:text-6xl-1 md:text-[22px]"
          style={startupExpoStyle}
        >
          {startupExpo}
        </b>
        
        <div className=" flex flex-row md:flex-col lg:gap-2 items-start justify-start gap-[39px] text-xl lg:text-lg text-tomato-200  md:gap-1">
          <div className="w-[214px] flex flex-row items-start justify-start gap-[12px]">
            <img
                className="w-6 h-6 md:w-4 md:h-4 relative overflow-hidden shrink-0 z-[1]"
                alt=""
                src={frame1}
            />
            <div className="flex-1 relative tracking-[0.1em] md:tracking-[0.01em] leading-[122%] mq450:text-base mq450:leading-[20px]">
              2:30 PM to 4:30 PM
            </div>
          </div>

          <div className=" flex flex-row items-start justify-start gap-[11px]">
            <img
                className="w-6 h-6 md:w-4 md:h-4 relative overflow-hidden shrink-0 z-[1]"
                alt=""
                src={frame2}
            />
            <div className="flex-1 relative tracking-[0.12em] md:tracking-[0.01em] leading-[122%] inline-block [text-shadow:0px_0px_134.72px_#000] min-w-[157px] z-[1] mq450:text-base mq450:leading-[20px]">
              Old sports complex, Nitk
            </div>
          </div>
        </div>
      </div>

      <div className="w-[178px]  md:w-[150px] flex flex-col items-start justify-between pt-0 px-0 mb-3 box-border">
        <button className="w-full cursor-pointer [border:none] rounded-[58px] bg-gray-400 pt-[15px] pb-3.5 pl-7 flex flex-row gap-2 relative">
          <div className="text-xl lg:text-[18px] md:text-[14px] tracking-[0.09em] leading-[150.24%] text-white poppins">
            Register
          </div>
          
          <img
              className="w-6 h-6 md:w-4 md:h-4 mt-1 "
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
