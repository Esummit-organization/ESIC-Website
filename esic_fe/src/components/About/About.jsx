import React, { useState, useEffect } from "react";
import "./About.css";
import {content} from '../../constants/about'
//  import bg from '../../../public/images'
export  function About() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bulbStyle =
  windowWidth <= 768
    ? {}
    : windowWidth <= 1050
      ? { height: "15rem", width: "12rem" }
      : { height: "25rem", width: "20rem", marginTop: "-50px" };

  const logoStyle =
    windowWidth < 768
      ? {
          
        }
      : { height: "12rem", width: "12rem" };

  return (
    <div className="main  ">
      <div className="flex flex-col justify-center items-center h-full bg-background-150">
        <div className="md:text-center pl-6 text-4xl mt-10 font-bold text-secondary-600 grotesk">What is E-Summit?</div>
        <div className="md:mt-5 md:mr-[25px] md:text-lg flex flex-col items-center mt-5">
          <p className="md:text-lg text-gray-800 md:w-[49rem] w-[320px] md:text-center md:p-5 sm:p-0 pl-3 poppins">
          {content[0].description}
          </p>
          <div className="mt-20 flex justify-center">
            <div className="md:w-[480px] md:h-[300px] h-fit relative m-auto">
              <div className="md:w-[480px] md:h-[300px] md:mb-0 mb-10">
                <iframe 
                  className="md:absolute md:top-0 md:left-0 md:w-full md:h-full w-[280px] h-[200px] rounded-lg shadow-lg transition-transform transform hover:scale-105 "
                  src={`https://www.youtube.com/embed/jva0G7211l4?autoplay=1&rel=0&showinfo=0&modestbranding=1`}
                  title="E-Summit 2024"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                >
                </iframe>
              </div>
              <img
                src="/images/Bulb1.png"
                alt="Bulb"
                className="bulb-image w-full h-full md:block hidden top-0 "
                style={{
                  ...bulbStyle,
                  zIndex: 1,
                  borderWidth: "0",
                  boxShadow: "none",
                  marginTop: '-130px'
                }}
              />
              <img
                src="/images/logo.png"
                alt="logo"
                className="logo md:block hidden absolute top-[55%] right-[90%] max-w-[100%] mt-4 z-1  "
                style={{ ...logoStyle, zIndex: 1, boxShadow: "none" }}
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

