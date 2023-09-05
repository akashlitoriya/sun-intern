import React from 'react'
import Section_2_image from '../assets/Section_2.png'
const Section_2 = () => {
  return (
    <div className='w-screen lg:h-screen bg-voilet p-6'>
      <div className='max-w-[1280px] h-full lg:m-auto flex flex-col-reverse lg:flex-row justify-between items-center my-16'> 
        <div className='lg:w-[511px] flex flex-col gap-5'>
            <div className='font-sans text-2xl leading-7 lg:text-[40px] lg:leading-[40px] font-bold'>
                Real certified Google Ads professionals
            </div>
            <div className='font-kanit text-base lg:text-2xl leading-6 lg:w-[479px] font-light'>
                Get a team of certified Google Adwords / SEM specialists who have a minimum of 2 years experience managing various SEM campaigns locally. We help you create the perfect combination of strategy and implementation to ensure we achieve your goals.
            </div>
        </div>
        <div>
            <img src={Section_2_image}></img>
        </div>
      </div>
    </div>
  )
}

export default Section_2
