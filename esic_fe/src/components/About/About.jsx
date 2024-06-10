import React, { useState, useEffect } from 'react';
import './About.css'; 

export default function About() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const bulbStyle = windowWidth < 768 ? 
        { height: '10rem', width: '10rem', marginTop: '50px' ,position:'absolute',marginLeft:'4rem', transform: 'rotate(-20deg)'} : 
        { height: '28rem', width: '20rem', marginTop: '-50px' };

    const logoStyle = windowWidth < 768 ? 
        { height: '8rem', width: '8rem',position:'absolute', left:'-0.5%',marginTop:'90px' } : 
        { height: '12rem', width: '12rem' };

    const paragraphStyle = windowWidth < 768 ? 
        { width: '100%' } :
        { width: '50rem' };

    return (
        <div>
            <div className="flex flex-col justify-center items-center h-full bg-ffe7ba" style={{ backgroundColor:'#FFDDB1' }}>
                <div className="text-center text-4xl mt-10 font-bold" style={{ color:'#931612' }}>What is E summit ?</div>
                <div className="mt-5 p-6" style={{  backgroundColor: '#FFDDB1', boxShadow: 'none' }}>
                    <p  className="text-lg text-gray-800" style={paragraphStyle}>
                    E-Summit is a three-day event, initiated by the E-Cell. The summit seeks to facilitate interaction among 
                    industrialists, funding agencies, seasoned and upcoming entrepreneurs, academia, and students of the participating
                     institutes. E-Summit '24 will include a gamut of activities such as entrepreneurial guest lectures, workshops, 
                     panel discussions with experts, a startup internship fair, and opportunities to connect with investors.
                    </p>
                    <div className="mt-20 flex justify-center">
                        <div className="relative" style={{ width: '480px', height: '300px' }}>
                            <iframe
                            style={{borderRadius:'30px'}}
                                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
                                src={`https://www.youtube.com/embed/jva0G7211l4?autoplay=1&rel=0&showinfo=0&modestbranding=1`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <img src="/images/Bulb1.png" alt="Bulb" className="bulb-image absolute w-full h-full" style={{ ...bulbStyle, zIndex: 1, borderWidth: '0', boxShadow: 'none' }} />
                        <img src="/images/logo.png" alt="logo" className='logo' style={{ ...logoStyle, zIndex: 1, boxShadow: 'none' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}
