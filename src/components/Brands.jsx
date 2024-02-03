import React from 'react'
import goal from "../assets/goal.png"
import bulb from "../assets/bulb.png"
import eye from "../assets/eye.png"
import video from "../assets/video.jpeg"
import animate from "../assets/animate.jpeg"
import Header from './Header'
const Brands = () => {
   const url=window.location.pathname
  return (
    <> {url=="/brand"?<Header setDisplay={()=>{}}/>:<></>}
    <div style={{maxHeight:"58rem"}}  className='flex flex-col sm:flex-row justify-around h-fit  w-screen text-[#080808] bg-[#6767] '>
     
     <div className='m-5 h-96 '>
        <div className='text-2xl w-full mx-auto '>Creators</div>
        <div ><img className='h-80' src={animate} alt="" /></div>
          <div  className='flex  justify-center   mb-5 mt-10 sm:mb-3'>  <a target='_blank' href="#" className="inline-flex items-center justify-center px-2 mx-2 py-2 text-sm font-medium text-center text-white  rounded-lg  border-2 border-red-400 bg-pink-500 hover:bg-transparent hover:text-black">
        Know More  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg></a></div> 
     </div>
      <div className='m-5'>
        <div className='text-2xl' >Brands</div>
        <div><img  className='h-80' src={animate} alt="" /></div>
          <div  className='flex  justify-center   mb-5 mt-10 sm:mb-3'>  <a target='_blank' href="#" className="inline-flex items-center justify-center px-2 mx-2 py-2 text-sm font-medium text-center text-white  rounded-lg  border-2 border-red-400 bg-pink-500 hover:bg-transparent hover:text-black">
        Know More  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg></a></div> 
     </div>
    </div></>
  )
}

export default Brands
