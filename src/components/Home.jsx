import React from 'react'
import v0 from "../assets/v0.mp4"
import home from "../assets/home0.jpg"
import About from './About'
import Header from './Header'
import Contact from './Contact'

import Service from './Service'
import Work from './Work'
import Brands from './Brands'
import { useState } from 'react'
import Clients from './Clients'
import Past1 from './Past1'
import Past2 from './Past2'
const Home = () => {

  const [display,setDisplay] =useState("add");
  console.log(display)
  return (
     <>
    <div   className="overflow-hidden bg-cover  bg-no-repeat sm:h-screen h-1/2 flex flex-col bg-black   align-middle"
 >
   
   
     <video src={v0}
            
            autoplay="{true}" loop muted 
            className="absolute z-0 top-0 left-0 right-0 w-full h-1/2 sm:h-full overflow-hidden object-fill  
            bg-blend-darken "> 
        </video> 
     <Header setDisplay={setDisplay} />
    <div className='flex  safelist justify-center  sm:justify-end  z-20 mt-20   translate-x-4   duration-700  '>
       <p
   className={` ${display==="remove"?"":"hidden"} sm:text-3xl sm:w-1/3 w-4/5 mt-30 text-2xl gap-10   sm:mr-8 text-white`}>Creating Smart And
        Engaging videos that 
      deliver the right content.</p>
        

    </div>
    <div  className='flex w-full sm:justify-end justify-center mt-5  sm:-ml-20 z-20 '>  <a target='_blank' href="#" className="inline-flex items-center justify-center px-2 mx-2 py-2 text-sm font-medium text-center text-white  rounded-lg  border-2 border-cyan-400 hover:bg-pink-500">
         View Our Work  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg></a>
            <a target='_blank' href="#" className="inline-flex items-center justify-center px-2 mx-2 py-2 text-sm font-medium text-center text-white  rounded-lg  border-2 border-cyan-400 hover:bg-pink-500">
         Enqiurey Box <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg></a></div> 
            
            </div> 
         
         <div className='w-screen z-30  flex  flex-col sm:flex-row align-middle pt-2 sm:pt-28 sm:justify-around justify-center h-100svh bg-gradient-to-r from-red-200 via-red-300 to-yellow-200'>
          <div  className='sm:w-2/3 flex -mt-8   justify-center spin 1s linear infinite  sm:justify-items-start'>  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" id="Capa_1" x="0px" y="0px" width="220px" height="220px" viewBox="0 0 1200 1200" enable-background="new 0 0 1200 1200" xml:space="preserve">
<g>
	<path fill="#008B89" d="M1070.763,422.437c-4.484,0.4-8.083,3.976-8.953,8.903l-0.085,0.499l0.043,0.512   c11.426,106.084,7.687,325.687-6.438,378.989c-14.363,54.196-33.815,96.485-140.56,106.976   c-109.092,10.752-584.284,6.93-633.882,1.792l-1.491-0.161c-50.167-5.165-134.144-13.802-145.823-167.755   c-5.129-87.16-1.587-286.756,8.271-343.818c10.282-59.711,35.046-121.368,140.757-125.964   c119.879-5.207,216.722-7.632,304.76-7.632c105.67,0,206.314,3.464,326.453,11.237c5.424,0.183,9.234-1.616,11.286-4.919   c1.531-2.481,1.631-5.496,0.239-8.068c-1.87-3.486-6.03-5.565-11.259-5.699c-211.886-13.703-377.365-14.645-632.286-3.591   c-119.661,5.229-147.482,78.348-158.354,141.467c-10.723,62.107-13.205,268.266-8.496,348.245   c12.874,169.659,110.23,179.687,162.541,185.07l1.44,0.148c26.901,2.796,174.875,5.158,323.13,5.158   c155.289,0,269.919-2.516,314.528-6.908c107.728-10.611,138.213-50.638,156.778-120.798   c14.813-55.819,18.904-274.964,7.112-384.717C1079.237,425.114,1074.627,422.106,1070.763,422.437z"/>
	<path fill="#008B89" d="M492.55,751.476l285.076-154.425L492.55,450.568V751.476z M737.612,597.487l-226.39,122.626v-238.95   L737.612,597.487z"/>
</g>
</svg></div>
  <div className='text-2xl sm:text-5xl  ml-2 mb-10 sm:w-2/3 flex  justify-center '> WHERE CREATORS AND BRANDS COLLIDE FOR EXPLOSIVE GROWTH!</div>
         </div>
         <div className='w-screen z-20  overflow-hidden bg-cover bg-no-repeat  h-28 sm:h-96 bg-orange-900'
          style={{ backgroundImage:`url(${home}) `, backgroundSize:"100vw"}} >
            
         </div>


    
    <About/>
    
     <Work/>
    <Service/>
   <Past1/>
   <Past2/>
    <Brands/>
    <Clients/>
    <Contact/>
   </> 
  )
}

export default Home
