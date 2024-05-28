import React, { useRef, useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = React.forwardRef((props, ref) => {
  const [selectedTab, setSelectedTab] = useState("All");
  const [autoSlideEnabled, setAutoSlideEnabled] = useState(true);
  const getTabClassName = (tabName) => {
    return selectedTab === tabName ? "selected-tab" : "";
  };
  let teamData = {
    All: [
      {
        role: "Stocks",
        image: "https://s28126.pcdn.co/blogs/ask-experian/wp-content/uploads/what-are-different-types-of-stocks.jpg.optimal.jpg",
      },
      {
        role: "Hackathon",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU0yxF-Rqvu80gyxu1ohTic4U4bTMcuITF5g&s",
      },
      {
        role: "Startup",
        image: "https://www.indiafilings.com/learn/wp-content/uploads/2023/01/shutterstock_1043242525-1.jpg",
      },
      {
        role: "Motivation",
        image: "https://c4.wallpaperflare.com/wallpaper/270/151/624/breaking-bad-actors-bryan-cranston-walter-white-men-with-glasses-2992x4016-animals-horses-hd-art-wallpaper-preview.jpg",
      },
      {
        role: "Investment",
        image: "https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2022/11/06/209144-investment-ians.jpg?itok=WbVvCvL5",
      },
    ],
  };

  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    const scrollAmount = 100; // Adjust as needed
    if (carouselRef.current) {
      const container = carouselRef.current;
      if (direction === "left") {
        container.scrollDown -= scrollAmount;
      } else if (direction === "right") {
        container.scrollDown += scrollAmount;
      }
    }
  };

  // Function to start automatic sliding
  const startAutoSlide = () => {
    // Enable auto slide
    setAutoSlideEnabled(true);
  };

  // Effect to handle automatic sliding
  useEffect(() => {
    let intervalId;
    if (autoSlideEnabled) {
      intervalId = setInterval(() => {
        // Scroll right automatically
        scrollCarousel("right");
      }, 20000); // Adjust interval time as needed
    }
    // Clear interval when component unmounts or auto slide is disabled
    return () => clearInterval(intervalId);
  }, [autoSlideEnabled]); // Re-run effect when auto slide state changes

  return (
    <div ref={ref} className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex justify-center items-center gap-10 p-10 relative">
        <div
          style={{ scrollSnapType: "x mandatory" }}
          className={`carousel carousel-center w-auto flex overflow-y-hidden ${
            teamData["All"].length < 2 ? "justify-center" : ""
          } items-center p-4 space-x-[20px] bg-black rounded-box`}
          ref={carouselRef}
        >
          {teamData[selectedTab].map((elem, index) => (
            <div
              className="carousel-item h-2/3 w-auto"
              style={{ scrollSnapAlign: "start" }}
              key={index}
            >
              <div className="h-auto w-auto bg-[#110725] rounded-[35px] border-1 border-[#A79FFF] flex flex-col items-center justify-center transform transition-transform hover:scale-110">
                <div className="h-60 w-80 relative">
                  <img src={elem.image} alt={elem.role} className="h-full w-full object-cover rounded-[35px]" />
                </div>
                <div className="text-xl font-semibold flex text-white">{elem.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Carousel;
