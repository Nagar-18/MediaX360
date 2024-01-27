import React from 'react'
import neon from "../assets/neon.jpg"
import Header from './Header'
const Home = () => {
  return (
    <div   className="overflow-hidden bg-cover bg-no-repeat h-screen flex flex-col z-0  align-middle"
 style={{ backgroundImage:`url(${neon}) `, backgroundSize:"100vw 100vh"}} >
    
    <Header/>
    <div className='flex h-4/6  flex-col  w-4/5  sm:mt-32 ml-10 mr-80 mt-40 sm:mx-60 '>
       <p className=' sm:text-5xl text-2xl gap-10 sm:mr-80 text-white'>Creating Smart And
        Engaging videos that 
      deliver the right content.</p>
        
      
    </div>
    <div  className='flex w-full justify-center my-3 '>  <a target='_blank' href="#" className="inline-flex items-center justify-center px-2 mx-2 py-2 text-sm font-medium text-center text-white  rounded-lg  border-2 border-cyan-400 hover:bg-pink-500">
         View Our Work  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg></a></div> 
    </div>
     
  )
}

export default Home
