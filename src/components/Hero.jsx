import React from 'react'
import Hero_image from '../assets/Hero_image.png'
import { ArrowRightOutlined } from '@ant-design/icons'
const Hero = () => {
  return (
    <div className='w-screen lg:h-screen bg-voilet flex items-center px-6'>
      <div className='max-w-[1280px] w-full flex flex-col md:flex-row lg:m-auto justify-between gap-6 my-16'>
        <div className='flex flex-col gap-5'>
          <div className='font-sans font-semibold text-lg'>
            MARKETING SOLUTIONS
          </div>
          <div className='font-bold font-sans capitalize text-4xl lg:text-7xl'>
            Social Media<br></br> Marketing
          </div>
          <div className='w-[350px] lg:w-[440px] text-xl font-kanit font-bold leading-6 font-normal '>
          Struggling to find PPC experts who really
understand your business and can actually drive
long term results? Our world-class marketers
would love to help your business thrive!
          </div>
          <div className='pt-[13px] pl-[29px] pb-[13px] pr-[29px] w-[204px] cursor-pointer text-xs rounded-[18px] font-bold font-sans bg-black text-white text-center'>
            GET A FREE AUDIT <ArrowRightOutlined />
          </div>
        </div>
        <div className='flex justify-center'>
          <img src={Hero_image} alt="Hero Image" className='w-[350px] lg:w-[460px]'/>
        </div>
      </div>
      
    </div>
  )
}

export default Hero
