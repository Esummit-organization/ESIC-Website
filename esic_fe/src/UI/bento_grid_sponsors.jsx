import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import React from 'react';


const titleSponserStyles = "col-span-3 lg:col-span-2"

const BentoGrid = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "grid w-[47rem] auto-rows-[22rem] grid-cols-3 gap-10",
        className,
      )}
    >
      {children}
    </div>
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
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-sponsor-50",
      // light styles
      "bg-gradient-to-br from-[#060d14] to-[#102132] [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      "h-[12rem]",
      className,
    )}
  >
    <div>{background}</div>
    <div className={`pointer-events-none z-10 flex transform-gpu gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10 items-center ${className == titleSponserStyles ? `flex-row` : `flex-col`}`}>
      <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="antonio text-[2.1rem] font-semibold text-gray-300 dark:text-gray-200">
        {name}
      </h3>
      <p className="max-w-lg text-sponsor-50 text-xl">{description}</p>
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

