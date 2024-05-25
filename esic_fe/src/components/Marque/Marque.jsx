import { InfiniteMovingComponent } from "@/UI/infinite_horizontal_moving";
import { transform } from "framer-motion";
import React from "react";

export function MarqueScroll({text,angle,color}){
    return (
      <div className="bg-background-500 box-border relative overflow-hidden w-full h-14 whitespace-nowrap" style={{transform: `rotate(${angle}deg)`, backgroundColor: `${color}`}}>

         <InfiniteMovingComponent
        text={text}
        />
        
      </div>

      
        
    );
}
