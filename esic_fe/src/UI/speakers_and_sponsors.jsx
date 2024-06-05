import '../App.css'
import MarqueeDemo from './marquee_demo'
import BentoDemo from './bento_demo'

function Speakers_and_sponsors() {

  return (
    <div className=' bg-hero-50'>
      <div className=" px-14 pt-10">
        <h1 className='text-8xl grotesk bg-gradient-to-t from-[rgba(255,255,255,0.50)] to-white inline-block text-transparent bg-clip-text'>Speakers</h1>
        <div className="flex items-center">
          <hr className='w-20 border-t-2 border-[#006DD5] ' />
          <p className="poppins text-xl mx-3 my-1 text-[#006DD5]">View all Speakers</p>
          {/* <a href="#"><NorthEast className='p-1 bg-[#424e5f] rounded-full text-white mx-1' /></a> */}
        </div>
      </div>
      <MarqueeDemo />
      <div className=" px-14 pt-10">
        <h1 className='text-8xl grotesk bg-gradient-to-t from-[rgba(255,255,255,0.50)] to-white inline-block text-transparent bg-clip-text'>Sponsors</h1>
        <div className="flex items-center">
          <hr className='w-20 border-t-2 border-[#006DD5] ' />
          <p className="poppins text-xl mx-3 my-1 text-[#006DD5]">View all Sponsors</p>
          {/* <a href="#"><NorthEast className='p-1 bg-[#424e5f] rounded-full text-white mx-1' /></a> */}
        </div>
      </div>
      <BentoDemo/>
    </div>
  )
}

export default Speakers_and_sponsors