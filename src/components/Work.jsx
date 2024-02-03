import React from 'react'
import goal from "../assets/goal.png"

import video from "../assets/video.jpeg"
import animate from "../assets/animate.jpeg"
import Header from './Header'
const Work = () => {
   const url=window.location.pathname
  return (
    <>{url=="/work"?<Header setDisplay={()=>{}}/>:<></>}
   <div style={{maxHeight:"218vh"}}  className='flex flex-col  h-fit  w-screen bg-black justify-between'>
      <div className='flex flex-col  sm:flex-row justify-between w-screen overflow-hidden'>
        <div className='  text-3xl sm:text-5xl flex mt-10 justify-center text-[#d9d9dc] font-extrabold sm:w-1/2'>OUR WORK</div>
        <div className=' text-1xl flex justify-center text-[#d9d9dc] font-semibold m-10 font-mono sm:w-1/2 '>For creators, collaborating with brands can provide them with opportunities for exposure, increased revenue, and growth in their audience. It allows them to monetize their content and potentially reach a wider audience through brand partnership</div>
      </div>
      <div className='flex flex-col text-[#fff]  align-middle  sm:flex-row justify-evenly w-screen'>

      <div className='max-w-sm m-auto h-72 my-3  w-64 sm:w-80  border-2 hover:border-[#b750f6ef]  border-black  rounded-lg bg-gradient-to-tr from-rose-300 to-blue-300 p-0.5 shadow-lg'>
    <a><img className="rounded-t-lg w-full h-4/5" src={goal}  />
        
    </a>
    <div className="p-6 ">
        <a href="#">
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-slate-900 '>Strategy Development</h5>
        </a>
         
        
        
    </div>
</div>



<div className='max-w-sm m-auto h-72 my-3  w-64 sm:w-80 border-2 hover:border-[#29e4e1] border-black rounded-lg bg-gradient-to-tr from-rose-300 to-blue-300 p-0.5 shadow-lg'>
    <a><img className="rounded-t-lg w-full  h-4/5" src={video}  />
        
    </a>
    <div className="p-6">
        <a href="#">
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-slate-900'>Video Production</h5>
        </a>
 
        
    </div>
</div>

<div className='max-w-sm m-auto  h-72  my-3  w-64 sm:w-80    border-2 hover:border-red-600  border-black  rounded-lg bg-gradient-to-tr from-rose-300 to-blue-300 p-0.5 shadow-lg'>
    <a><img className="rounded-t-lg w-full object-cover h-4/5" src={animate}  />
        
    </a>
    <div className="p-6">
        <a href="#">
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-slate-900'>Animation</h5>
        </a>
        </div>
        
    </div>


      </div>
    </div></>
  )
}

export default Work
