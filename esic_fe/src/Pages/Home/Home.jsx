import React from "react";
import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
import { Speakers } from "@/components/Speakers/Speakers";
import { Sponsors } from "@/components/Sponsors/Sponsors";

export function Home() {
    return (
        <div>
            <Hero />
            <About />
            <Speakers />
            <Sponsors />
        </div>
    );
    }
