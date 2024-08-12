import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import React from 'react';

const titleSponserStyles = "col-span-3 lg:col-span-2 sm:col-span-2"

const BentoGrid = ({
  children,
  className,
}) => {
  return (
    <>
      <div
        className={cn(
          "grid lg:w-[60rem] lg:auto-rows-[22rem] lg:grid-cols-3 gap-10",
          className,
        )}
      >
        {children}
      </div>
      <div className="w-full h-20"></div>
    </>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}) => (
  // bg-gradient-to-br from-[#060d14] to-[#102132]
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-3xl items-center ",
      // light styles
      // background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
      // background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);
      // background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);

      // background-image: radial-gradient( circle 860px at 11.8% 33.5%,  rgba(240,30,92,1) 0%, rgba(244,49,74,1) 30.5%, rgba(249,75,37,1) 56.1%, rgba(250,88,19,1) 75.6%, rgba(253,102,2,1) 100.2% );
      // bg-gradient-to-tr to-[#231557]  from-[#FF1361] 
      " bg-card-bg",
      // "bg-gradient-to-tl from-[#891101] to-[#010002]  [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      "h-[18rem]",
      className,
    )}
  >
    {/* <div>{background}</div> */}
    <div className={`pointer-events-none z-10 flex transform-gpu gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10 items-center ${className == titleSponserStyles ? `flex-col sm:flex-row justify-center items-center` : `flex-col`}`}>
      <Icon className={`${className == titleSponserStyles ? `h-20 w-20 sm:mr-2` : `h-20 w-20`} "origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75"`} />
      <div className={`${className == titleSponserStyles ? `text-center sm:text-left` : `text-center`}`}>
        <h3 className={`"antonio ${className == titleSponserStyles ? `text-[3.5rem] sm:text-[6.8rem]` : `text-[3.5rem]`} font-semibold text-gray-300 dark:text-gray-200"`}>
          {name}
        </h3>
        <p className={`max-w-lg text-white ${className == titleSponserStyles ? `text-[1.5rem] sm:text-[2.5rem]` : `text-[1.5rem]`}`}>{description}</p>
      </div>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
        <a href={href} className="text-gray-200">
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };

