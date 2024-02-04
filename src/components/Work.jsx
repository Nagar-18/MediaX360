import React from 'react'
import goal from "../assets/goal.png"

import video from "../assets/video.jpeg"
import creator from "../assets/creator.jpg"
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
      <div className='flex flex-col text-[#fff]  align-middle  sm:flex-row justify-around w-screen'>

      <div className='max-w-sm m-auto h-80 my-3  w-11/12 sm:w-1/2  border-2 hover:border-[#b750f6ef]  border-black  rounded-lg bg-gradient-to-tr from-rose-300 to-blue-300 p-0.5 shadow-lg'>
    <div className='flex justify-center a'><img className="rounded-t-lg  w-1/5 h-1/5" src={creator}  />
        
    </div>
    <div className="p-6 ">
        <a href="#">
            <h5 className='mb-2  font-semibold tracking-tight text-slate-900 '> Our dedicated team is committed to propelling your online presence to unprecedented levels, ensuring that your content captivates audiences and resonates across digital landscapes. Trust MediaX360 to be your catalyst for success in the ever-evolving world of social media. Elevate your digital journey with us!</h5>
        </a>
         
        
        
    </div>
</div>



<div className='max-w-sm m-auto h-80 my-3  w-11/12 sm:w-1/2 border-2 hover:border-[#29e4e1] border-black rounded-lg bg-gradient-to-tr from-rose-300 to-blue-300 p-0.5 shadow-lg'>
    <a><img className="rounded-t-lg w-full  h-4/5" src={video}  />
        
    </a>
    <div className="p-6">
        <a href="#">
            <h5 className='mb-2 text-2xl font-semibold tracking-tight text-slate-900'> Here Our Recent Work </h5>
        </a>
 
        
    </div>
</div>




      </div>
    </div></>
  )
}

export default Work
