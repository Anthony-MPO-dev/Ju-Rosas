import React from 'react'

const Hero = ({heading, message, buttonName}: { heading: string, message: string, buttonName: string }) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0  bg-black/70 z-[2]' />

      <div className='flex right-0 items-center justify-center text-center flex-col p-5 text-white z-[2]  mt-[-10rem]'>
          <h2 className='text-5xl font-bold'>{heading}</h2>
          <p className='py-5 text-sm'>{message}</p>
          <button className='px-8 py-2 border'>{buttonName}</button>
      </div>
    </div>
  )
}

export default Hero