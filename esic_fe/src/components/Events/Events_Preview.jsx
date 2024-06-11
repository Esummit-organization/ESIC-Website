import React from "react";
import { cn } from "@/lib/utils.js"; // Assuming `cn` is a utility function for classNames

const styles = `
  @keyframes marquee {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(calc(-100%));
    }
  }
  .animate-marquee {
    animation: marquee var(--duration) linear infinite;
    animation-fill-mode: both;
  }
  .paused {
    animation-play-state: paused !important;
  }
  /* Media query for screen sizes less than md */
  @media (max-width: 768px) {
    .animate-marquee {
      animation: marquee-sm var(--duration) linear infinite;
      animation-fill-mode: both;
    }
  }
  @keyframes marquee-sm {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(calc(-100% - var(--gap)));
    }
  }
  
  @keyframes marquee-vertical {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(calc(-100%));
    }
  }
  .animate-marquee-vertical {
    animation: marquee-vertical var(--duration) linear infinite;
    animation-fill-mode: both;
  }
`;

function Marquee({
  className,
  reverse,
  pauseOnHover = true,
  children,
  vertical = false,
  repeat = 2,
  ...props
}) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:20s] [--gap:1rem]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}

      <style>{styles}</style>
    </div>
  );
}

export default Marquee;