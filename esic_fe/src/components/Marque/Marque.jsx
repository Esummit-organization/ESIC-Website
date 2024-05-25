import React from "react";
import { InfiniteMovingComponent } from "@/UI/infinite_horizontal_moving";

export function MarqueScroll({ text, angle, className }) {
  return (
    <div className={`box-border relative overflow-hidden w-full h-14 whitespace-nowrap transform rotate-${angle} ${className}`}>
      <InfiniteMovingComponent text={text} />
    </div>
  );
}
