import React from 'react'
import Vector from '../assets/Vector.png'
const NumericSection = () => {
  return (
    <div className='w-screen bg-voilet p-6'>
      <div className='max-w-[1280px] m-auto flex justify-center items-center flex-col'>
        <img src={Vector} alt='Numerical Icon'/>
        <div className='font-sans font-bold text-3xl lg:text-5xl text-center leading-7 lg:leading-[52px] lg:w-[728px]'>
            How our paid search marketing service can help grow your revenue
        </div>
      </div>
    </div>
  )
}

export default NumericSection
