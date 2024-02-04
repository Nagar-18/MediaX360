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
    <div  className='flex flex-col sm:flex-row justify-evenly h-fit pb-10  w-screen text-[#fff] bg-black '>
     
    
      <div className='m-5'>
        {/* <div className='text-2xl' >Brands</div>  */}
        <div className='text-2xl w-full mx-auto '><h3>its offers unparalleled collaboration with influencers and delivers top-notch, creatively designed ads for startups. Highly recommended..</h3></div>
          <div  className='flex  justify-center text-pink-500  mb-5 mt-10 sm:mb-3'>  - Aman Mehta</div> 
     </div>
      <div className='m-5'>
        {/* <div className='text-2xl' >Brands</div> */}
        <div className='text-2xl w-full mx-auto '><h3>MediaX360 has been instrumental in boosting my Instagram growth. Their services are top-notch, and the results speak for themselves. Highly recommended!" </h3></div>
          <div  className='flex  justify-center text-pink-500  mb-5 mt-10 sm:mb-3'>- Yash Malhotra</div> 
     </div>
      <div className='m-5  '>
        {/* <div >Creators</div> */}
        <div className='text-2xl w-full mx-auto ' ><h3 >Delivers the best influencer content ad production. Exceptional quality, strategic brilliance</h3></div>
          <div  className='flex  justify-center text-pink-500  mb-5 mt-10 sm:mb-3'>- Mayank Teja</div> 
     </div>
    </div></>
  )
}

export default Clients
