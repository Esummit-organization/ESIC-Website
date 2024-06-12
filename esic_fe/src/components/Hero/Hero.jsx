import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./hero.css";
export function Hero() {
	return (
		<div className="  w-full bg-background-150 h-[100vh] hide-scrollbar">
			<Parallax
				pages={2}
				style={{ top: "0", left: "0" }}
				className="hide-scrollbar"
			>
				<ParallaxLayer offset={0} speed={0.25}>
					<div className="flex justify-center items-end  h-[100vh]">
						<img className=" w-full  h-full  " src="hero/1.png" alt="" />{" "}
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={-0.01}>
					<div className="flex justify-center items-end  h-[100vh]">
						<img
							style={{ aspectRatio: 1.15 }}
							className="w-full  max-h-[100vh] h-auto max-w-[100vh] "
							src="hero/2.png"
							alt=""
						/>{" "}
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={-0.05}>
					<div className="flex justify-center items-end  h-[100vh]">
						<img
							style={{ aspectRatio: 1.15 }}
							className="w-full  max-h-[100vh] h-auto max-w-[100vh] "
							src="hero/3.png"
							alt=""
						/>{" "}
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.5}>
					<div className="flex justify-center items-end  h-[100vh]">
						<img
							style={{ aspectRatio: 1.15 }}
							className="w-full  max-h-[100vh] h-auto max-w-[100vh]"
							src="hero/4.png"
							alt=""
						/>{" "}
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.35}>
					<div className="flex justify-center items-end  h-[100vh]">
						<img className="w-full max-h-[87vh] " src="hero/5.png" alt="" />{" "}
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.5}>
					<div className="flex justify-center items-end  h-[100vh] w-full ">
						<img
							style={{ aspectRatio: 1.15 }}
							className="w-full max-h-[100vh] max-w-[100vh]"
							src="hero/6.png"
							alt=""
						/>{" "}
					</div>
				</ParallaxLayer>
				{/* <ParallaxLayer offset={0} speed={0.5}>
					<div className="flex justify-center items-end  h-[100vh] w-full relative ">
						<div className="absolute bottom-0 left-0 w-[110%] h-[80px] bg-background-500 rotate-2 border border-2 border-solid border-[#000000]">
							<p className="w-full  h-full flex items-center text-3xl text-[#000000] tracking-widest justify-center items-end text-nowrap">
								Startups • Networking • Enterprunership • Startups • Networking
								• Enterprunership • Networking • Enterprunership • Startups •
								Networking • Enterprunership
							</p>
						</div>
					</div>
				</ParallaxLayer> */}
				<ParallaxLayer offset={0} speed={0.5}>
					<div className="flex justify-center items-end  h-[100vh] w-full ">
						<img className="h-[100vh] w-full  " src="hero/7.png" alt="" />{" "}
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={1} speed={0.35}>
					<div className="flex justify-center items-end  h-[100vh] w-full  relative">
						<div className="absolute top-[-280px] left-0 w-[110%] h-[80px] bg-background-500 rotate-2 border-2 border-solid border-[#000000]">
							<p className="grotesk w-full  h-full flex items-center text-3xl text-[#000000] tracking-widest justify-center text-nowrap">
								Startups • Networking • Enterprunership • Startups • Networking
								• Enterprunership • Networking • Enterprunership • Startups •
								Networking • Enterprunership
							</p>
						</div>
					</div>
				</ParallaxLayer>

				<ParallaxLayer offset={1} speed={0}>
					<div className="flex justify-center items-center h-[100vh] w-full  relative flex-col gap-[40px]">
						<p className="grotesk text-4xl text-[#870000] font-semibold">
							What is E-Summit ?
						</p>
						<p className="poppins max-w-[700px] text-center text-[#000000] text-lg">
							{" "}
							E-Summit is a three day event, started as an initiative of the
							E-Cell. The Summit seeks to facilitate interaction among
							industrialists, funding agencies, seasoned and upcoming
							entrepreneurs, academia and students of the participating
							institutes. E-Summit’24 will include a gamut of activities such as
							entrepreneurial guest lectures, workshops and panel discussions
							with experts, startup internship fair and investors{" "}
						</p>

						<div
							style={{ aspectRatio: "9/5" }}
							className="w-full  max-w-[600px] mx-[20px] bg-background-800 mt-[60px]"
						></div>
					</div>
				</ParallaxLayer>
			</Parallax>
		</div>
	);
}
