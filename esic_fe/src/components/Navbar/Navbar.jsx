import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { options } from "@/constants/navbar";

export function Navbar() {
	const [menu, setMenu] = useState(false);

	const [navBackground, setNavBackground] = useState(false);

	const handleScroll = () => {
		const show = window.scrollY > 80;
		setNavBackground(show);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const showMenu = () => {
		setMenu((prev) => !prev);
	};
	const closeMenu = () => {
		setMenu(false);
	};

	return (
		<nav
			className={`${navBackground ? "bg-background-950" : ""
				} duration-30 text-secondary-900 w-screen z-30`}
		>
			<div
				className={`${menu ? "text-secondary-900 bg-background-950 w-screen" : ""
					}`}
			>
				<div className="flex place-content-between items-start md:items-center py-4 px-10">
					<div className="justify-self-start">
						<motion.div
							whileTap={{ scale: 0.93 }}
							initial={{ x: -60 }}
							animate={{ x: 0 }}
							transition={{ duration: 0.6 }}
						>
							<Link to="/" className="flex items-start ">
								<svg
									width="28"
									height="41"
									viewBox="0 0 28 41"
									fill="none"
									xmlns="http://www.w3.org2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M8.08186 8.08186H0V0H8.08186H19.9467V8.08186H8.08186ZM0.0576284 16.1636L8.08186 24.1878V24.2454H0.0576298V32.3273H8.13949V24.2457H19.9467V16.1639H8.11083V16.1636H0.0576284ZM19.9467 32.3274H8.08186V32.3274H0.0576284L8.08186 40.3517V40.4092H19.9467V32.3274ZM19.9474 8.05327L28.0006 6.77109e-05L19.9474 6.84149e-05L19.9474 8.05327ZM28.0006 16.1636L19.9474 24.2168L19.9474 16.1636L28.0006 16.1636ZM19.9474 40.3806L28.0006 32.3274H19.9474L19.9474 40.3806ZM0.0285912 8.082L8.08179 16.1352V8.082H0.0285912Z"
										fill="white"
										fill-opacity="0.7"
										className={`${navBackground ? "fill-white" : "fill-secondary-950"}`}
									/>
								</svg>
								<div className={`${navBackground ? "bg-background-950 text-white" : "text-secondary-950"} duration-30 flex flex-col px-2`}>
									<div className="font-bold">E-SUMMIT</div>
									<div className="text-xs">& Innovation Committee</div>
								</div>
							</Link>
						</motion.div>
					</div>
					<motion.ul
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}
						className="hidden md:flex"
					>
						{options.map((options) => (
							<motion.li
								whileTap={{ scale: 0.9 }}
								className={`${navBackground ? "text-white" : "text-secondary-950"} m-2 cursor-pointer text-xs hover:text-gray-800 duration-150 font-semibold`}
							>
								<NavLink
									to={options.to}
									className={({ isActive }) =>
										`${isActive ? "font-bold" : ""} p-2`
									}
								>
									{options.name}
								</NavLink>
							</motion.li>
						))}
					</motion.ul>
					<div className="w-[13%]"></div>
					{/* <motion.div initial={{y: -70}} animate={{y: 0}} transition={{ type: "spring", bounce:0.5 }}>
                        <motion.button whileTap={{scale: 0.75}} className="hidden md:block bg-gray-300 bg-opacity-35 rounded-full text-sm font-semibold text-white hover:bg-opacity-60 duration-300 pt-[3px] pb-[4px] px-1"><Link to="/login" className="p-3">LOGIN</Link></motion.button>
                    </motion.div> */}
					<div className="flex flex-col items-end md:hidden duration-200">
						<motion.button
							whileTap={{ scale: 0.95 }}
							whileHover={{ scale: 1.15 }}
							onClick={showMenu}
							className="flex md:hidden rounded-full"
						>
							<img
								src={`${menu
										? "https://freesvg.org/img/1544641784.png"
										: "https://www.pngmart.com/files/23/Menu-Icon-PNG-Transparent.png"
									}`}
								alt={`${menu ? "close-icon" : "menu-icon"}`}
								className={`${menu ? "size-6" : "size-7"}`}
							/>
						</motion.button>
						<motion.div layout>
							<ul className={menu ? "flex flex-col items-end " : "hidden"}>
								{options.map((options) => (
									<motion.li
										whileTap={{ scale: 0.9 }}
										className="m-4 cursor-pointer text-white text-xs hover:text-gray-300 duration-150"
									>
										<NavLink
											to={options.to}
											onClick={closeMenu}
											className={({ isActive }) =>
												`${isActive ? "font-bold" : ""} p-2`
											}
										>
											{options.name}
										</NavLink>
									</motion.li>
								))}
							</ul>
						</motion.div>
					</div>
				</div>
			</div>
		</nav>
	);
}
