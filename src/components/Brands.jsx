import React from 'react'
import v0 from "../assets/brand.mp4"
import hb from "../assets/ns.jpg"
import ns from "../assets/hb.jpg"
import Header from './Header'
import "./index.css"
import Scroll from './Scroll'

const items=[
  {
    imgsrc:ns,
    insta:"https://www.instagram.com/thelost_trader?igsh=MWRsdTQ4cWlncHhhaA==",
    name:"Nishant Shrivastava",
    about:"Passionate creator explors the intersections of trading, business and self-growth."
  },
    {
    imgsrc:hb,
    insta:"https://www.instagram.com/thelost_trader?igsh=MWRsdTQ4cWlncHhhaA==",
    name:"Harsh Baghel",
    about:"Passionate content creator exploring the intricacies of finance and business ."
  }
]
const Brands = () => {
   const url=window.location.pathname
  return (
    <> {url=="/brand"?<Header setDisplay={()=>{}}/>:<></>}
    <div style={{maxHeight:"150vh"}}  className='flex pb-10 flex-col sm:flex-row justify-around h-fit w-screen text-[#080808] bg-[#5a818888] '>
     
     <div className='sm:m-5  sm:w-1/2 m-14 h-96 '>
        <div className=' w-full my-10 mt-10 '><div className='flex text-3xl font-semibold text-black  justify-center'>Creators</div></div>
   
<Scroll items={items}/>

          {/* <div  className='flex  justify-center   mb-5 mt-10 sm:mb-3'>  <a target='_blank' href="#" className="inline-flex items-center justify-center px-2 mx-2 py-2 text-sm font-medium text-center text-white  rounded-lg  border-2 border-red-400 bg-pink-500 hover:bg-transparent hover:text-black">
        Know More  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg></a></div>  */}
     </div>
      <div className='sm:m-5   m-14'>
        <div className=' my-10  mx-auto  mt-10 ' ><div className='flex text-3xl font-semibold text-black  justify-center'>Brands</div></div>
        <div className='w-full  h-full  pt-8'>  <video src={v0}
            
            autoplay="{true}" loop muted 
            className=" z-20 top-0  w-full  h-11/12  overflow-hidden object-fill  
            bg-blend-darken "> 
        </video> </div>
         
     </div>
    </div></>
  )
}

export default Brands
