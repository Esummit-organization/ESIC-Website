import React from "react";
import { InfiniteMovingComponent } from "@/UI/infinite_horizontal_moving";

export function MarqueScroll({text}) {
    return (
        <div className="text-secondary-900">

            Use the InfiniteMovingComponent to create a Marque Scroll

            {/* this is how you use the InfiniteMovingComponent
            <InfiniteMovingComponent text={"some text here that the MarqueScroll component takes in"}/> */}
                
            Other sections would use this component to create a Marque Scroll
            they will pass in the items text only for now

            {/* This is a sample of how others would use this component as 
            <MarqueScroll text={"some text here"} /> */}

            You will have to modify stuff in the InfiniteMovingComponent to make it work for you

            the design has to be changed to fit the design of the website you are working on

        </div>
    );
    }
