
import { cn } from "@/lib/utils";
import Marquee from "./marquee_speakers";
//import NorthEastIcon from '@mui/icons-material/NorthEast';

const reviews = [
  {
    name: "Sundar Pichai",
    position: "CEO Google",
    url: "https://en.wikipedia.org/wiki/Sundar_Pichai",
    img: "https://purepng.com/public/uploads/large/purepng.com-thinking-manthinking-manpersongentle-men-thinkingthinking-brain-1421526976458gpxqy.png",
  },
  {
    name: "Ashneer Grover",
    position: "BharatPe",
    url: "https://in.linkedin.com/in/ashneer",
    img: "https://purepng.com/public/uploads/large/purepng.com-thinking-manthinking-manpersongentle-men-thinkingthinking-brain-1421526976458gpxqy.png",
  },
  {
    name: "Elon Musk",
    position: "Ceo Tesla",
    url: "https://en.wikipedia.org/wiki/Elon_Musk",
    img: "https://purepng.com/public/uploads/large/purepng.com-thinking-manthinking-manpersongentle-men-thinkingthinking-brain-1421526976458gpxqy.png",
  },
  {
    name: "Aman Gupta",
    position: "CMO Boat",
    url: "https://in.linkedin.com/in/aman-gupta-7217a515",
    img: "https://purepng.com/public/uploads/large/purepng.com-thinking-manthinking-manpersongentle-men-thinkingthinking-brain-1421526976458gpxqy.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, position, url }) => {
  return (
    <figure
      className={cn(
        "relative cursor-pointer p-4 h-48 w-80 ml-20",
      )}
    >
      <div className="flex flex-row items-center gap-2 bg-gradient-to-br from-[#060d14] to-[#102132]  p-6 rounded-3xl h-full justify-end relative">
        <img className="w-3/5 absolute bottom-0 left-[-90px]" alt="" src={img} />
        <div className="flex flex-col items-end justify-between">
          <div className="flex flex-col items-end">
            <figcaption className="text-3xl font-medium text-white dark:text-white p-1 antonio">
              {name}
            </figcaption>
            <p className="text-xs font-medium text-[#56ACFF] dark:text-white/40 p-1 poppins">{position}</p>
          </div>
          <div className="mt-6 flex items-center h-4">
            <p className="text-sm text-white poppins">View Details</p>
            {/* <a href={url}><NorthEastIcon className='p-1 bg-[#424e5f] rounded-full text-white mx-1' /></a> */}
          </div>
        </div>
      </div>

    </figure>
  );
};

export default function MarqueeDemo() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-3">

      <div className="pointer-events-none absolute inset-y-0 left-0 w-screen "></div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.position} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s] mt-5">
        {secondRow.map((review) => (
          <ReviewCard key={review.position} {...review} />
        ))}
      </Marquee>
    </div>
  )
}


