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
				role: "Pikachu",
				image:
					"",
			},
            {
				role: "Charmander",
				image:
					"",
			},
            {
				role: "Totodile",
				image:
					"",
			},
            {
				role: "Chikorita",
				image:
					"",
			},
            {
				role: "Chimchar",
				image:
					"",
			},
            {
				role: "Treeco",
				image:
					"",
			},
			{
				role: "Turtwig",
				image:
					"",
			},
			{
				role: "Bulbasaur",
				image:
					"",
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
		setAutoSlideEnabled(trues);
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
							className="carousel-item h-2/3 w-auto "
							style={{ scrollSnapAlign: "start" }}
							key={index}
						>
							<div className="h-auto w-auto bg-[#110725] rounded-[35px] border-1 border-[#A79FFF] flex flex-col items-center justify-center ">
								<div className="h-60 w-60 relative"></div>
								<div className=" text-xl font-semibold">{elem.image}</div>
								<div className=" text-lg text-[white] ">{elem.role}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
});

export default Carousel;