import React from 'react'
import { MenuOutlined } from '@ant-design/icons'
import Vector from '../assets/Vector.png'
import Vector_2 from '../assets/Vector_2.png'
const Header = () => {
  return (
    <div className='w-screen h-[60px]'>
      <div className='max-w-[1200px] h-full flex justify-between m-auto items-center px-6'>
        <div className='h-full flex items-center'>
            <div className='bg-black h-full w-[30px] rounded-b-full text-white flex justify-center items-center'>
                <img src = {Vector_2} alt='Icon'></img>
            </div>
            <img src = {Vector} className='ml-1 cursor-pointer' alt='Brand Name'></img>
        </div>
        <div className='w-5 cursor-pointer'>
            <MenuOutlined />
        </div>
      </div>
    </div>
  )
}

export default Header
