import React from "react";

import "./hero.css";
import Plx from "react-plx";
export function Hero() {
	const parrallaxDivStyle =
		"absolute left-0 top-0   w-full flex justify-center items-end h-[100vh] lg:h-[120vh] ";
	const parallaxImageStyle = "  mx-auto max-h-[100vh] hover:scale-1.2";
	const backgroundStyle = "w-full mx-auto h-[100vh] lg:h-[140vh]";
	return (
		<div className="hero-section-div  relative  w-full h-[100vh] lg:h-[120vh] bg-background-500 hide-scrollbar z-[5] overflow-hidden ">
			<Plx
				parallaxData={[
					{
						start: 0,
						end: 700,
						easing: "ease-in",
						properties: [
							{
								startValue: 1,
								endValue: 1,
								property: "scale",
							},
						],
					},
				]}
			>
				<img className={backgroundStyle} src="hero/1.png" alt="foreground" />
			</Plx>
			<Plx
				parallaxData={[
					{
						start: 0,
						end: 700,
						easing: "ease-in",
						properties: [
							{
								startValue: 1,
								endValue: 2.5,
								property: "scale",
							},
						],
					},
				]}
				className={parrallaxDivStyle}
			>
				<img
					style={{ aspectRatio: 1.15 }}
					className={parallaxImageStyle}
					src="hero/2.png"
					alt="foreground"
				/>
			</Plx>
			<Plx
				parallaxData={[
					{
						start: 0,
						end: 700,
						easing: "ease-in",
						properties: [
							{
								startValue: 1,
								endValue: 1.8,
								property: "scale",
							},
						],
					},
				]}
				className={parrallaxDivStyle}
			>
				<img
					style={{ aspectRatio: 1.15 }}
					className={parallaxImageStyle}
					src="hero/3.png"
					alt="foreground"
				/>
			</Plx>
			<Plx
				parallaxData={[
					{
						start: 0,
						end: 700,
						easing: "ease-in",
						properties: [
							{
								startValue: 1,
								endValue: 1.5,
								property: "scale",
							},
						],
					},
				]}
				className={parrallaxDivStyle}
			>
				<img
					style={{ aspectRatio: 1.15 }}
					className={parallaxImageStyle}
					src="hero/4.png"
					alt="foreground"
				/>
			</Plx>
			<Plx
				parallaxData={[
					{
						start: 0,
						end: 700,
						easing: "ease-in",
						properties: [
							{
								startValue: 1,
								endValue: 1.2,
								property: "scale",
							},
						],
					},
				]}
				className={parrallaxDivStyle}
			>
				<img
					style={{ maxWidth: "100%", width: "100%" }}
					className={parallaxImageStyle}
					src="hero/5.png"
					alt="foreground"
				/>
			</Plx>
			<Plx
				parallaxData={[
					{
						start: 0,
						end: 700,
						easing: "ease-in",
						properties: [
							{
								startValue: 1,
								endValue: 1.6,
								property: "scale",
							},
						],
					},
				]}
				className={parrallaxDivStyle}
			>
				<img
					style={{ aspectRatio: 1.15 }}
					className={parallaxImageStyle}
					src="hero/6.png"
					alt="foreground"
				/>
			</Plx>
			<Plx
				parallaxData={[
					{
						start: 0,
						end: 700,
						easing: "ease-in",
						properties: [
							{
								startValue: 1,
								endValue: 1,
								property: "scale",
							},
						],
					},
				]}
			>
				<img src="hero/7.png" alt="foreground" className={backgroundStyle} />
			</Plx>
		</div>
	);
}
