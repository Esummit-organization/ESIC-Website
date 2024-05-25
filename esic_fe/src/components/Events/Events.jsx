import React from "react";
import Carousel from "./Carousel";
import "./Carousel.css";
export function Events() {
    return (
        <div className="text-secondary-900 bg-hero-50 h-auto w-auto outerdiv">
            <p className="flex justify-center text-7xl text-white">Events</p>
            <Carousel/>
            <Carousel/>
        </div>
    );
    }
