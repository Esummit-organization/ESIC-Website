import React, { useMemo } from "react";
import PropTypes from "prop-types";
import frame1 from "@/assets/timelineassets/frame-1.svg";
import frame2 from "@/assets/timelineassets/frame-2.svg";

const EventTitles = ({ className = "", startupExpo, emptyRegisterInner, propMargin }) => {
  const startupExpoStyle = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  return (
    <div
      className={`self-stretch bg-gray-100 box-border flex flex-row items-end justify-between pt-[19px] pb-[27px] pr-[57px] pl-[34px] max-w-full gap-[20px] text-left text-11xl text-gray-300 font-poppins border-l-[4px] border-solid border-firebrick lg:flex-wrap lg:pr-7 lg:box-border ${className}`}
    >
      <div className="h-[138px] w-[1126px] relative bg-gray-100 box-border hidden max-w-full border-l-[4px] border-solid border-firebrick" />
      <div className="w-[630px] flex flex-col items-start justify-start gap-[29px] max-w-full">
        <b
          className="w-[414px] relative tracking-[0.12em] leading-[122%] font-[400] inline-block [text-shadow:0px_0px_134.72px_#000] max-w-full z-[1] mq450:text-lg mq450:leading-[22px] mq825:text-5xl mq825:leading-[29px] sm:text-3xl sm:leading-[25px] xs:text-2xl xs:leading-[20px]"
          style={startupExpoStyle}
        >
          {startupExpo}
        </b>
        <div className="self-stretch flex flex-row items-start justify-start gap-[39px] text-xl text-tomato-200 mq825:flex-wrap mq825:gap-[19px] sm:flex-wrap sm:gap-[15px] xs:flex-wrap xs:gap-[10px]">
          <div className="w-[214px] flex flex-row items-start justify-start gap-[12px] sm:w-[180px] xs:w-[150px]">
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                alt=""
                src={frame1}
              />
            </div>
            <div className="flex-1 relative tracking-[0.12em] leading-[122%] [text-shadow:0px_0px_134.72px_#000] z-[1] mq450:text-base mq450:leading-[20px] sm:text-sm sm:leading-[18px] xs:text-xs xs:leading-[15px]">
              2:30 PM to 4:30 PM
            </div>
          </div>
          <div className="flex-1 flex flex-row items-start justify-start gap-[11px] min-w-[180px] mq450:flex-wrap sm:min-w-[150px] xs:min-w-[120px]">
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                alt=""
                src={frame2}
              />
            </div>
            <div className="flex-1 relative tracking-[0.12em] leading-[122%] inline-block [text-shadow:0px_0px_134.72px_#000] min-w-[157px] z-[1] mq450:text-base mq450:leading-[20px] sm:text-sm sm:leading-[18px] xs:text-xs xs:leading-[15px]">
              Old sports complex, Nitk
            </div>
          </div>
        </div>
      </div>
      <div className="w-[178px] flex flex-col items-start justify-end pt-0 px-0 pb-3 box-border sm:w-[150px] xs:w-[120px]">
        <button className="cursor-pointer [border:none] pt-[15px] px-1 pb-3.5 bg-[transparent] self-stretch flex flex-row items-start justify-start relative">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[58px] bg-gray-400 z-[1]" />
          <div className="w-[137px] relative text-xl tracking-[0.09em] leading-[150.24%] font-gilroy-semibold text-white text-center inline-block shrink-0 z-[2] mq450:text-base mq450:leading-[24px] sm:text-sm sm:leading-[18px] xs:text-xs xs:leading-[15px]">
            Register
          </div>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 ml-[-15px]">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0 z-[3]"
              alt=""
              src={emptyRegisterInner}
            />
          </div>
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