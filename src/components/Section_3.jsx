import React from 'react'
import Section_3_image from '../assets/Section_3.png'
import quote from '../assets/quote.svg'
import { Rate } from 'antd'
const Section_3 = () => {
  return (
    <div className='w-screen lg:h-screen bg-voilet'>
      <div className='max-w-[1280px] bg-white lg:rounded-[50px] m-auto flex flex-col lg:flex-row items-center justify-between p-6 gap-10'>
        <div className='lg:w-[640px] flex justify-center items-center'>
            <div className='lg:w-[480px] flex flex-col gap-9'>
                <div>
                    <img src={quote} alt='' />
                </div>
                <div className='font-kanit font-semibold text-2xl leading-7 lg:leading-[33px]'>
                    “Numerique PPC service is light years ahead of the competition because of their intelligent, specialized and courteous account managers.”
                </div>
                <div>
                    <div className='font-sans text-base font-bold uppercase'>
                        Director of Marketing
                    </div>
                    <div className='font-kanit font-medium text-base'>
                        Zarra Home
                    </div>

                </div>
            </div>

        </div>
        <div className=''>
            <img src={Section_3_image} alt="" />
            <div className='h-[97px] flex justify-center items-center'>
                <div className='w-[512px] flex justify-between items-center'>
                    <div>
                        <Rate disabled defaultValue={5} />
                        <div className='font-kanit font-semibold text-base'>
                            5000+ Client reviews
                        </div>
                    </div>
                    <div className='uppercase font-sans font-bold text-xs border-b-2 border-black'>
                        view all reviews
                    </div>

                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Section_3
