import React from 'react'
import esic_logo from '../../assets/esic_logo.png'

function Loading() {
  return (
    <div className=' bg-gradient-to-br from-white via-gray-300 to-white bg-center h-screen text-white flex justify-center items-center'>
      <div className='relative h-80 w-80 rounded-full bg-gradient-to-b from-white via-gray-300 to-gray-400  shadow-white shadow-inner'>
        
        {/* Spin animation block */}
        <div className=' absolute rounded-full h-80 w-80 border-b-8 border-r-8 border-white animate-spin shadow-lg shadow-white duration-1000 blur-sm' >
        </div>

        {/* Content block */}
        <div className=' w-80 h-80 text-center flex flex-col justify-center items-center'>
            <img className='w-20 h-28 my-3' src={esic_logo} alt='E-SUMMIT Logo'/>
            <p className='text-gray-800 font-sans font-bold text-3xl py-2'>E-SUMMIT</p>
            <p className='text-gray-700 font-sans font-normal text-lg'>& Innovation<br/>Committee</p>
        </div>
       
      </div>
    </div>
  )
}

export default Loading