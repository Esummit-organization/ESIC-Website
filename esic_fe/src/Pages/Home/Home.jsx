import React from "react";
import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
import { Speakers } from "@/components/Speakers/Speakers";
import { Sponsors } from "@/components/Sponsors/Sponsors";
import { Timeline } from "@/components/Timeline/Timeline";
import { Events } from "@/components/Events/Events";
import { FAQ } from "@/components/FAQ/FAQ";
import { GetTickets } from "@/components/GetTickets/GetTickets";

export function Home() {
    return (
        <div>
            <Hero />
            <About />
            <Events />
            <Speakers />
            <Sponsors />
            <FAQ />
            {/* <GetTickets /> */}
            <Timeline />
        </div>
    );
    }
