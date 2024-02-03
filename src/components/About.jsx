import React from 'react'
import human from "../assets/human2.png"
import Header from './Header'
const About = () => {
   const url=window.location.pathname
  return (
       <>  
        {url=="/about"?<Header setDisplay={()=>{}}/>:<></>}
     {/* <div className="overflow-hidden w-screen bg-cover bg-no-repeat sm:h-screen    flex justify-around  bg-[#c79bcc] align-middle"
  ><div className='flex h-4/6 ml-5 sm:ml-10 flex-col justify-evenly w-4/5 mt-8 sm:mt-14 '>
     <h2 className='sm:text-5xl mb-2 text-2xl  sm:ml-72 w-full'>About us</h2>
       <div className='flex justify-center flex-col  w-full'>
       <p className=' sm:text-2xl  w-full text-xs sm:mt-7 sm:mb-6  sm:mr-80 text-black'>MediaX360 works to build strong and truthful
relationships between  
       brands, creators and the
consumers. Believing and standing with 
       the fact
that content creation is a full time job by itself,
and we have meticulously positioned ourselves to
be the ones “Empowering Creators, and Enabling
Brands” alike.</p> </div>
<div className='flex justify-center  flex-col w-full'><p className=' sm:text-2xl   w-full text-xs sm:mt-0 sm:mr-80 text-black'>
We take pride in the content creators we associate
with, whose goals are aligned with ours - Quality
Content for all!</p></div>
        
      <div  className='flex  justify-center   mb-5 mt-10 sm:mb-3'>  <a target='_blank' href="#" className="inline-flex items-center justify-center px-2 mx-2 py-2 text-sm font-medium text-center text-white  rounded-lg  border-2 border-red-400 bg-pink-500 hover:bg-transparent hover:text-black">
        Know More  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg></a></div> 
   
  
    </div>
     <div className=' overflow-hidden  bg-transparent w-1/3  mt-14 ' >
       <img src={human} className='bg-transparent  h-3/5  ' alt="" />
    </div>
    
    </div> */}
    <div className="overflow-hidden w-screen  sm:h-screen    flex justify-center  bg-slate-700 align-middle"
  >
    <div class="relative mx-auto  w-4/5 h-11/12
     rounded-lg bg-gradient-to-tr from-slate-600 to-blue-300  p-0.5 shadow-lg">
    <div class=" p-3 flex justify-center   h-5/6   rounded-md">
        <div className='flex  ml-5 sm:ml-10 flex-col justify-evenly w-4/5 mt-8 sm:mt-14 '>
     
       <div className='flex justify-center flex-col  w-full'>
       <div className='w-full mb-1  flex justify-center'><h2 className='sm:text-5xl text-2xl  '>About us</h2></div> 
       <p className=' sm:text-2xl  w-full text-xs sm:mt-7 sm:mb-6  sm:mr-80 text-black'>MediaX360 works to build strong and truthful
relationships between  
       brands, creators and the
consumers. Believing and standing with 
       the fact
that content creation is a full time job by itself,
and we have meticulously positioned ourselves to
be the ones “Empowering Creators, and Enabling
Brands” alike.</p> </div>
<div className='flex justify-center  flex-col w-full'><p className=' sm:text-2xl   w-full text-xs sm:mt-0 sm:mr-80 text-black'>
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
