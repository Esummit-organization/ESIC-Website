// import React, { useState } from "react";
// import Marquee from "./Events_Preview.jsx";
// import { MarqueScroll } from "../Marque/Marque.jsx";
// import { eventData } from "../../constants/EventsPreview.jsx"; 


// export function Events() {
//   const [hover, setHover] = useState(false);

//   // Function to handle hover state changes
//   const handleHover = (isHovering) => {
//     setHover(isHovering);
//   };

//   return (
//     <div className="h-full w-full flex flex-col items-center mt-20" style={{ overflowX: 'hidden' }}>
//   <div className="relative w-full h-[470px] overflow-hidden">
//     <img 
//       src="EventsPreview.svg" 
//       alt="" 
//       className="absolute inset-0 w-full h-full object-contain rotating"
//     />
//     <div className="absolute inset-0 flex items-center justify-center">
//       <div>
//         <h1 
//           style={{ WebkitBackgroundClip: 'text' }} 
//           className="text-[40px] md:text-[56px] text-[#292929] roobert-bold flex items-center justify-center mb-20 mt-20"
//         >
//           Events
//         </h1>
//       </div>
//     </div>
//   </div>

//   <div className="w-full relative flex justify-center rounded-[50px]">
//     <div className="w-full flex flex-wrap justify-center bg-transparent mt-[-8vw] xs:mt-[-20vw] sm:mt-[-20vw] mb-[-10vw] xs:mb-[-20vw] sm:mb-[-20vw]">
//       <div className="relative flex w-[45%] z-10 overflow-hidden sm:w-full xs:w-full h-[23vw] xs:h-[62vw] sm:h-[62vw] bg-auto bg-no-repeat bg-center rounded-[20px] m-[1vw] xs:my-[4vw] sm:my-[4vw] xs:mx-2 sm:mx-2 xs:justify-between sm:justify-center hover:scale-[1.08] transition-all ease">
//         <img className="absolute w-full h-[28vw] xs:h-[62vw] sm:h-[62vw] z-10 rounded-[20px]" src="card.png" alt="Event"/>
//         <div className="cardss bg-contain rounded-[20px] w-full z-20">
//           <div className="w-[65%] h-full flex justify-center">
//             <div className="flex flex-col w-[80%]">
//               <div className="h-[50%] flex flex-col justify-stretch">
//                 <h1 className="head text-[2.2vw] sm:text-[5.5vw] xs:text-[1.184rem] font-[400] font-gilroy-medium mb-[0.7rem] text-white">Ideastorm</h1>
//                 <p className="para font-gilroy-medium text-[0.9vw] sm:text-[2.7vw] xs:text-[2.7vw] text-white">
//                   Premier case building and pitching competition at E-summit'24, now tailored for school students to kickstart their entrepreneurial ambitions.
//                 </p>
//               </div>
//               <div className="flex flex-row justify-between items-center h-[20%]">
//                 <a className="link text-[0.9vw] xs:text-[3.2vw] sm:text-[3.5vw] flex items-center text-white" href="https://www.google.com/amp/s/unstop.com/competitions/ideastorm-e-summit24-iit-roorkee-850671/amp" target="_blank" rel="noopener noreferrer">
//                   Apply Now 
//                   <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium w-[2vw] sm:w-[3vw] xs:w-[3vw]" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowOutwardIcon">
//                     <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
//                   </svg>
//                 </a>
//                 <a id="downloadLink" href="director adobe"></a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//   )
// }

// import React from "react";
// import { eventData } from "../../constants/EventsPreview.jsx";

// const EventCard = ({ event }) => (
//   <div className="relative flex sm:w-[90%] sm:h-[62vw] bg-auto bg-no-repeat bg-center rounded-[20px] sm:my-[4vw] sm:mx-auto hover:scale-[1.08] transition-all ease overflow-hidden">
//     <img className="absolute object-cover z-10 rounded-[20px]" src="card.png" alt="Event Background"/>
//     <div className="cardss bg-contain rounded-[20px] w-full z-20 p-6 flex items-center">
//       <div className="w-[65%]">
//         <h1 className="head text-[2.2vw] sm:text-[5.5vw] font-[400] font-gilroy-medium mb-4 text-white">{event.name}</h1>
//         <p className="para font-gilroy-medium text-[0.9vw] sm:text-[2.7vw] text-white mb-4">
//           {event.description}
//         </p>
//         <a 
//           className="link text-[0.9vw] sm:text-[3.5vw] flex items-center text-white hover:underline" 
//           href={event.link} 
//           target="_blank" 
//           rel="noopener noreferrer"
//         >
//           Apply Now 
//           <svg className="w-[2vw] sm:w-[3vw] ml-2" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
//             <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z" fill="currentColor"></path>
//           </svg>
//         </a>
//       </div>
//     </div>
//   </div>
// );

// export function Events() {
//   return (
//     <div className="w-full flex flex-col items-center mt-20" style={{ overflowX: 'hidden' }}>
//       <div className="relative w-full h-[470px] overflow-hidden mb-[-8vw] sm:mb-[-20vw]">
//         <img 
//           src="EventsPreview.svg" 
//           alt="Events Preview" 
//           className="absolute inset-0 w-full h-full object-contain rotating"
//         />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <h1 
//             style={{ WebkitBackgroundClip: 'text' }} 
//             className="text-[40px] md:text-[56px] text-[#292929] roobert-bold"
//           >
//             Events
//           </h1>
//         </div>
//       </div>

//       <div className="w-full max-w-9xl px-4 sm:px-6 lg:px-8 mt-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {eventData.map((event, index) => (
//             <EventCard key={index} event={event} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { eventData } from "../../constants/EventsPreview.jsx";

const EventCard = ({ event }) => (
  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out">
    <img 
      src="card.png" 
      alt="" 
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 p-6 flex flex-col md:justify-center justify-between poppins">
      <div>
        <h2 className="text-white text-2xl font-bold mb-2">{event.name}</h2>
        <p className="text-white md:text-sm mb-4 text-left text-xs w-[120px] md:w-full">{event.description}</p>
      </div>
      <a 
        href={event.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-white text-sm font-medium hover:underline"
      >
        Apply Now
        <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  </div>
);

export function Events() {
  return (
    <div className="w-full bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="relative w-full h-[470px] overflow-hidden mb-[-8vw] sm:mb-[-20vw]">
       <img 
          src="EventsPreview.svg" 
          alt="Events Preview" 
          className="absolute inset-0 w-full h-full object-contain rotating"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 
            style={{ WebkitBackgroundClip: 'text' }} 
            className="text-[40px] md:text-[56px] text-[#292929] roobert-bold"
          >
            Events
          </h1>
        </div>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:mt-[300px]">
          {eventData.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>

      </div>
    </div>
  );
}
