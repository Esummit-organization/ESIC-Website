import React from "react";
import { InfiniteMovingComponent } from "@/UI/infinite_horizontal_moving";

export function MarqueScroll({ text, angle, className }) {

  const marqueStyle = {
    transform: `rotate(${angle}deg)`,
  };
  
  
  return (
    <div className={`box-border relative overflow-hidden w-full h-14 whitespace-nowrap transform ${className}`} 
      style={marqueStyle}>
     
      <InfiniteMovingComponent text={text} />
    </div>
  );

}
