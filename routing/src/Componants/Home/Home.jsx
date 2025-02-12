import React from 'react'
import  img1 from'../../assets/images/avataaars.svg'
export default function Home() {
  return (
    <>
      
      <img src={img1} className='w-1/4 mx-auto p-6' alt="" />

        
        
      <h1 className='uppercase text-white font-bold text-4xl'>start framework</h1>
      <div className="flex items-center justify-center my-4 ">
      <span className="border-t w-20 mx-4 text-white"></span>
      <i className="fa-solid fa-star text-white"></i>
      <span className="border-t w-20 mx-4 text-white "></span>
      </div>
      <p className=' text-white'>Graphic Artist - Web Designer - Illustrator</p>
    </>
  )
}
