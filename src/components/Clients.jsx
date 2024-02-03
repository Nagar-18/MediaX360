import React from 'react'
import goal from "../assets/goal.png"
import bulb from "../assets/bulb.png"
import eye from "../assets/eye.png"
import video from "../assets/video.jpeg"
import animate from "../assets/animate.jpeg"
import Header from './Header'
const Clients = () => {
  return (
    <>
   <h2 className='flex sm:flex-row  justify-center text-3xl sm:text-5xl py-5 h-fit  font-bold w-screen text-[#8f9ba9bc]  bg-black'>From Our Clients</h2>
    <div  className='flex flex-col sm:flex-row justify-evenly h-fit  w-screen text-[#fff] bg-black '>
     
     <div className='m-5 h-96 '>
        {/* <div >Creators</div> */}
        <div className='text-2xl w-full mx-auto ' ><h3 >Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.</h3></div>
          <div  className='flex  justify-center text-pink-500  mb-5 mt-10 sm:mb-3'>- Margarita Perez, Stipple Unlimited</div> 
     </div>
      <div className='m-5'>
        {/* <div className='text-2xl' >Brands</div>  */}
        <div className='text-2xl w-full mx-auto '><h3>Boost your product and service's credibility by adding testimonials from your clients.



People love recommendations so feedback from others who've tried it is invaluable.</h3></div>
          <div  className='flex  justify-center text-pink-500  mb-5 mt-10 sm:mb-3'>  - Matt Zhangyee, Tully & Drive</div> 
     </div>
      <div className='m-5'>
        {/* <div className='text-2xl' >Brands</div> */}
        <div className='text-2xl w-full mx-auto '><h3>Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.</h3></div>
          <div  className='flex  justify-center text-pink-500  mb-5 mt-10 sm:mb-3'> - Powell Finwood, FIb & Joe</div> 
     </div>
    </div></>
  )
}

export default Clients
