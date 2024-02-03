import React from 'react'
import v0 from "../assets/stretagic.mp4"
import v1 from "../assets/vproduction.mp4"
import v2 from "../assets/animation.mp4"
import Header from './Header'
const Service = () => {
   const url=window.location.pathname
  return (
    <> {url=="/service"?<Header setDisplay={()=>{}}/>:<></>}
    <div style={{maxHeight:"242vh"}}  className='flex flex-col h-fit  w-screen bg-slate-700 justify-between'>
      <div className='flex flex-col  sm:flex-row justify-between w-screen overflow-hidden'>
        <div className=' text-3xl sm:text-5xl flex mt-10 justify-center text-[#d9d9dc] font-extrabold sm:w-1/2'>OUR SERVICES</div>
        <div className=' text-1xl flex justify-center text-[#d9d9dc] font-semibold m-10 font-mono sm:w-1/2 '>Catalyzing Creator Growth! Elevate your brand with us—unlock limitless potential. We connect creators with premium brands, fostering collaborations that redefine advertising. Our expert services seamlessly orchestrate ad production, ensuring brands and creators thrive together. Experience excellence – where innovation meets impact</div>
      </div>
      <div className='flex flex-col text-[#fff]  align-middle  sm:flex-row justify-evenly w-screen'>

      <div className='max-w-sm m-auto h-80 my-3  w-64 sm:w-80  border-2 hover:border-[#b750f6ef]  border-black  rounded-lg bg-gradient-to-tr from-slate-600 to-blue-300 p-0.5 shadow-lg'>
   
       <video src={v0}
            
            autoplay="{true}" loop muted 
            className=" z-20 top-0  w-full  h-1/2  overflow-hidden object-fill  
            bg-blend-darken "> 
        </video> 
    <div className="p-6 ">
        <a href="#">
            <h5 className='mb-2 text-1xl font-bold tracking-tight text-slate-900 '>Strategy Development</h5>
        </a>
         <p>Planning</p>
          <p>Analyst</p>
           <p>Research</p>
            <p>Management</p>
           
        
        
    </div>
</div>



<div className='max-w-sm m-auto h-80 my-3 w-64  sm:w-80  border-2 hover:border-[#29e4e1] border-black rounded-lg bg-gradient-to-tr from-slate-600 to-blue-300 p-0.5 shadow-lg'>
     <video src={v1}
            
            autoplay="{true}" loop muted 
            className=" z-20 top-0  w-full  h-1/2  overflow-hidden object-fill  
            bg-blend-darken "> 
        </video> 
    <div className="p-6">
        <a href="#">
            <h5 className='mb-2 text-1xl font-bold tracking-tight text-slate-900'>Video Production</h5>
        </a>
          <p>

Shorts

</p>
           <p>Ads

</p>
            <p>Long Video

</p>
            
        <p>Video Shoot</p>
        
        
    </div>
</div>

<div className='max-w-sm m-auto  h-80  my-3 w-64 sm:w-80    border-2 hover:border-red-600  border-black  rounded-lg bg-gradient-to-tr from-slate-600 to-blue-300 p-0.5 shadow-lg'>
    <video src={v2}
            
            autoplay="{true}" loop muted 
            className=" z-20 top-0  w-full  h-1/2  overflow-hidden object-fill  
            bg-blend-darken "> 
        </video> 
    <div className="p-6">
        <a href="#">
            <h5 className='mb-2 text-1xl font-bold tracking-tight text-slate-900'>Animation</h5>
        </a>
        <p>Video Editing</p>
        <p>Product Photo</p>
          <p>Animation Creation</p>
           
           <p>All Type of Editing</p></div>
        
    </div>


      </div>
    </div></>
  )
}

export default Service
