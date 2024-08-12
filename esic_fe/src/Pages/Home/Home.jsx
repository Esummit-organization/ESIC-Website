import React from "react";
import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
import { Speakers } from "@/components/Speakers/Speakers";
import { Sponsors } from "@/components/Sponsors/Sponsors";
import { Timeline } from "@/components/Timeline/Timeline";
import { Events } from "@/components/Events/Events";
import { FAQ } from "@/components/FAQ/FAQ";
import { GetTickets } from "@/components/GetTickets/GetTickets";
import { MarqueScroll } from "@/components/Marque/Marque";

export function Home() {
    return (
        <div className=" bg-background-150">
            <Hero />
            <img
                className="mx-auto md:max-w-[50%] md:w-[50%] hover:scale-1.2"
                src="startup.svg"
                alt="foreground"
            />
            <About />


            <MarqueScroll
				text={"Entrepreneurship . Innovation . Technology "}
				angle={-2}
				className=" bg-background-500 mt-20"
			></MarqueScroll>


            <Events />
            <Speakers />
            <Sponsors />
            {/* <Timeline /> */}
            <FAQ />
            {/* <GetTickets /> */}
        </div>
    );
    }
