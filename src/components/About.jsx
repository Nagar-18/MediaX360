import React from 'react'
import human from "../assets/human2.png"
import Header from './Header'
const About = () => {
   const url=window.location.pathname
  return (
       <>  
        {url=="/about"?<Header setDisplay={()=>{}}/>:<></>}
    
    <div className="overflow-hidden w-screen  sm:h-screen    flex justify-center bg-[#6d5a8888]  align-middle"
  >
    <div class="relative mx-auto  w-4/5 h-11/12
     rounded-lg  bg-[#5a818888]   p-0.5 shadow-lg">
    <div class=" p-3 flex justify-center   h-5/6   rounded-md">
        <div className='flex  ml-5 sm:ml-10 flex-col justify-evenly w-4/5 mt-8 sm:mt-14 '>
     
       <div className='flex justify-center flex-col  w-full'>
       <div className='w-full mb-1  flex justify-center'><h2 className='sm:text-5xl text-2xl font-semibold text-black  '>About us</h2></div> 
       <p className=' sm:text-2xl  w-full text-xs sm:mt-7 sm:mb-6  sm:mr-80 text-[#1b1f1d] font-semibold'>MediaX360 works to build strong and truthful
relationships between  
       brands, creators and the
consumers. Believing and standing with 
       the fact
that content creation is a full time job by itself,
and we have meticulously positioned ourselves to
be the ones “Empowering Creators, and Enabling
Brands” alike.</p> </div>
<div className='flex justify-center  flex-col w-full'><p className=' sm:text-2xl text-[#000000]  w-full text-xs sm:mt-0 sm:mr-80'>
We take pride in the content creators we associate
with, whose goals are aligned with ours - Quality
Content for all!</p></div>
    </div>
</div>
    
    
    </div>
    </div></>
    
  )
}

export default About
