import React from 'react'
import Section_1_image from '../assets/Section_1.png'
const Section_1 = () => {
  return (
    <div className='w-screen lg:h-screen bg-voilet p-6'>
      <div className='max-w-[1280px] h-full lg:m-auto flex justify-between items-center flex-col lg:flex-row gap-9 my-16'>
            <div className='lg:w-1/2 lg:max-w-[613px]'>
                <img src={Section_1_image}></img>
            </div>
            <div className='lg:w-[511px] flex flex-col gap-[20px]'>
                <div className='font-sans font-bold text-3xl lg:text-[40px] leading-7 lg:leading-10 lg:w-[447px]'>
                    Combining search engine marketing with conversion rate optimization (CRO)
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='font-kanit font-light text-base leading-6'>
                    The secret to a successful SEM campaign is much more than just making your website appear on Google. Other SEM agencies in Singapore would just set your ads to appear on Google, and leave it there. These campaigns are not performing up to its optimal level. 
                    </div>
                    <div className='font-kanit font-light text-base leading-6'>
                    The secret to achieving optimal SEM results lies in the ability to get as many people as possible to call/contact you after they click on your ad and land on your website. For example, your current SEM ads are getting 2% conversion rate on your landing page. That means out of 100 people that visit your page, 2 people contact you.
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Section_1
