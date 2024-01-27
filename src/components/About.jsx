import React from 'react'
import about from "../assets/about.jpg"
import Header from './Header'
const About = () => {
  return (
     <div   className="overflow-hidden bg-cover bg-no-repeat h-screen flex flex-col   align-middle"
 style={{ backgroundImage:`url(${about}) `, backgroundSize:"100vw 100vh"}} >
    
    <Header/>
    <div className='flex h-4/6  flex-col w-full  mr-9  sm:mt-24 mt-24  sm:mx-44 '>
       <p className=' sm:text-2xl  m-16 sm:mr-80 text-white'>MediaX360 works to build strong and truthful
relationships between  
       brands, creators and the
consumers. Believing and standing with 
       the fact
that content creation is a full time job by itself,
and we have meticulously positioned ourselves to
be the ones “Empowering Creators, and Enabling
Brands” alike.
We take pride in the content creators we associate
with, whose goals are aligned with ours - Quality
Content for all!</p>
        
      
    </div>
    <div  className='flex w-full justify-center '>  <a target='_blank' href="#" className="inline-flex items-center justify-center px-2 mx-2 py-2 text-sm font-medium text-center text-white  rounded-lg  border-2 border-cyan-400 hover:bg-pink-500">
        Know More  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg></a></div> 
    </div>
  )
}

export default About
