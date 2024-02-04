import React from 'react'

import v0 from "../assets/v1.mp4"
const Past2 = () => {
  return (
     <div style={{maxHeight:"58rem"}}  className='flex  flex-col sm:flex-row justify-around h-100svh  w-screen text-[#d9d9dc] bg-[#b5c5c8c7] '>
     
     <div className='m-5 h-96 w-1/2 flex flex-col justify-center align-middle self-center  '>
      
         <div className='text-2xl  w-44  mx-auto text-black '>STIPPLE UNLIMITED STRATEGY AND PRODUCTION</div>
          <div  className=' w-44  text-black mx-auto  mb-5 mt-10 sm:mb-3'> We present a short synopsis of your  work And we Narrate it in a way that keeps the viewer wanting to know more.


             </div> 
     </div>
   

<div className='m-auto  h-4/5  my-3 w-4/5   z-10   border-2 hover:border-red-600  border-black  rounded-lg bg-gradient-to-tr from-slate-600 to-blue-300 p-0.5 shadow-lg'>
    
     <video src={v0}
            
            autoplay="{true}" loop muted 
            className=" z-20 top-0    overflow-hidden object-fill  
            bg-blend-darken "> 
        </video> 
        
    </div>


      </div>
  )
}

export default Past2
