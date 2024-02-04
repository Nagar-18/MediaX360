import React, { useContext } from "react";
import themeContext from '../context/Contex';
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import  contact from "../assets/contact.webp"
import Header from "./Header";


 const Contact=()=> {
    
     const url=window.location.pathname
    
  return (
    <>
    {url=="/contact"?<Header setDisplay={()=>{}}/>:<></>}
     <section  
  className={` overflow-hidden rounded-lg bg-cover bg-no-repeat p-0 sm:p-12 text-center w-screen h-fit text-white font-sans font-semibold body-font relative`}
    style={{ backgroundImage:`url(${contact}) `}} >
      <div className="flex justify-center">  <h1 className="sm:text-3xl font-serif text-2xl font-medium title-font mb-4 text-rose-500">
             Contact Us
            </h1></div>
        <div style={{maxHeight:'100vh'}}  className="container flex flex-col sm:flex-row px-3  mx-auto">
             
               <div className="lg:w-1/2   w-full  md:w-2/3 mx-auto ">
                <div className="flex justify-center text-3xl mb-4">Get in touch !</div>
            <form action="https://getform.io/f/0ddd73f8-4dba-4a9a-b492-ea6161ba5172" method="POST">
            <div className="flex flex-wrap p-2">
              
              <h2>If you have any enquiries you can contact us on via the form below !!</h2>
              <div className=" flex sm:flex-col w-full">
              <div className="p-2 w-full">
                <div className="relative">
                    
                  <label for="name" className={`leading-7 text-sm text-white`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-900 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full ">
                <div className="relative">
                  <label
                    for="email"
                  className={`leading-7 text-sm text-white`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-900 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div></div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className={`leading-7 text-sm text-white'}`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-900 rounded border border-grey-800 focus:border-indigo-500 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-rose-500 border-0  py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-sm">
                 Submit
                </button>
              
              </div>
              
            </div>
            
         </form> </div>
         
          <div className="flex flex-col text-center justify-center w-full mt-2 mb-1">
              {/* <img className="h-1/2  w-4/6 m-auto" src={contact} alt="" /> */}
             <div className="flex flex-col sm:flex-row w-full justify-evenly">
                
                <div><h1 className=" sm:text-1xl"><EnvelopeIcon className=" inline  h-8  w-8 mx-3"/>Business Enquiry</h1><p className=" text-sm">buisness@mediax360.com</p></div>
              <div> <h1  className=" sm:text-1xl"><EnvelopeIcon className=" inline  h-8  w-8 mx-3"/>Career Enquiry</h1><p className=" text-sm">career@mediax360.com</p></div>
             </div>
              <div className="p-1 w-full pt-4 mt-2  border-gray-200 text-center">
                <a className="text-rose-500">hello@hirendramadhukar.com</a>
                <p><a className="text-rose-500">+91 7828311080</a></p>
                <p className="leading-normal my-2">
                  Pragati Nagar
                  ,
                  Indore, MP (India)
                </p>
               <span className="inline-flex justify-center  ">
                  <a className="text-red  cursor-pointer   hover:bg-green" href='https://www.facebook.com/hirendarmadhukar?mibextid=ZbWKwL' target='_blank' >
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-red-100 cursor-pointer   hover:bg-red-400" href='https://www.instagram.com/mediax_360?igsh=Nmt1ZzJoNHdoNnNx' target='_blank'>
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-red cursor-pointer   hover:bg-red-400" href='https://www.instagram.com/hirendramadhukar?igsh=MWJ5bjgyaGQwd3ZpdQ==' target='_blank'>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-red-100 cursor-pointer bg-white  hover:bg-red-100" href='https://www.linkedin.com/in/hirendra-madhukar-5b2185238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank'>
       <svg xmlns="http://www.w3.org/2000/svg" x="5px" y="5px" width="20" height="20" viewBox="0 0 50 50">
<path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
</svg>        </a>
                </span>
              </div>
          </div>
      </div>
       
      </section>
      </>
  );
}
export default Contact;