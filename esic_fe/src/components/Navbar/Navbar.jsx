import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
    
    const [navbar,setnavbar] = useState(false);
    const [menu,setmenu] = useState(false)
    
    const showmenu = () =>{
        setmenu((prev) => !prev)
    }
    const changebg = () =>{
        if (window.scrollY >= 100){
            setnavbar(true)
        } else{
            setnavbar(false)
        }
    }
    window.addEventListener('scroll',changebg);

        return (
        <nav className={navbar ? "text-secondary-900 bg-background-950 w-screen fixed duration-700" : "text-secondary-900 bg-transparent w-screen fixed duration-500"}>
            <div className={menu ? "text-secondary-900 bg-background-950 w-screen fixed" :"" }>
                <div className="flex justify-between items-start md:items-center py-4 px-10">
                    <div className="justify-self-start">
                        <div className="flex items-start ">
                            <svg width="28" height="41" viewBox="0 0 28 41" fill="none" xmlns="http://www.w3.org2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.08186 8.08186H0V0H8.08186H19.9467V8.08186H8.08186ZM0.0576284 16.1636L8.08186 24.1878V24.2454H0.0576298V32.3273H8.13949V24.2457H19.9467V16.1639H8.11083V16.1636H0.0576284ZM19.9467 32.3274H8.08186V32.3274H0.0576284L8.08186 40.3517V40.4092H19.9467V32.3274ZM19.9474 8.05327L28.0006 6.77109e-05L19.9474 6.84149e-05L19.9474 8.05327ZM28.0006 16.1636L19.9474 24.2168L19.9474 16.1636L28.0006 16.1636ZM19.9474 40.3806L28.0006 32.3274H19.9474L19.9474 40.3806ZM0.0285912 8.082L8.08179 16.1352V8.082H0.0285912Z" fill="white" fill-opacity="0.7"/>
                            </svg>
                            <div className="flex bg-[url('/New Picture.png')] flex-col px-2">
                                <div className="text-white font-bold">E-SUMMIT</div>
                                <div className="text-white text-xs">& Innovation Committee</div>
                            </div>
                        </div>
                    </div>
                    <ul className="hidden md:flex ">
                        <li className="p-4 cursor-pointer text-white text-xs">EVENTS</li>
                        <li className="p-4 cursor-pointer text-white text-xs">CALENDER</li>
                        <li className="p-4 cursor-pointer text-white text-xs">NEWSLETTER</li>
                        <li className="p-4 cursor-pointer text-white text-xs">BLOG</li>
                    </ul>
                    <button className="hidden md:block bg-gray-300 bg-opacity-35 rounded-full font- text-sm text-white pt-[3px] pb-[4px] p-4">LOGIN</button>
                    <div className="flex flex-col items-end md:hidden duration-200">
                        <button onClick={showmenu} className="flex md:hidden"><img src={menu ?"https://freesvg.org/img/1544641784.png":"https://www.pngmart.com/files/23/Menu-Icon-PNG-Transparent.png"} alt="" className={menu ?"size-6":"size-7"} /></button>
                        <ul className={menu ? "flex flex-col items-end " :"hidden "}>
                            <li className="p-4 cursor-pointer text-white text-xs">EVENTS</li>
                            <li className="p-4 cursor-pointer text-white text-xs">CALENDER</li>
                            <li className="p-4 cursor-pointer text-white text-xs">NEWSLETTER</li>
                            <li className="p-4 cursor-pointer text-white text-xs">BLOG</li>
                            <li className="p-4 cursor-pointer text-white text-xs">LOGIN</li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
    }
