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
             
               <div className="lg:w-1/2   w-64  md:w-2/3 mx-auto ">
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
                
                <div><h1 className=" sm:text-1xl"><EnvelopeIcon className=" inline  h-8  w-8 mx-3"/>Business Enquiry</h1><p className=" text-sm">buisness@hirendramadhukar.com</p></div>
              <div> <h1  className=" sm:text-1xl"><EnvelopeIcon className=" inline  h-8  w-8 mx-3"/>Career Enquiry</h1><p className=" text-sm">Career@hirendramadhukar.com</p></div>
             </div>
              <div className="p-1 w-full pt-4 mt-2  border-gray-200 text-center">
                <a className="text-rose-500">hello@hirendramadhukar.com</a>
                <p><a className="text-rose-500">+91 7828311080</a></p>
                <p className="leading-normal my-2">
                  Pragati Nagar
                  ,
                  Indore, MP (India)
                </p>
                <span className="inline-flex justify-evenly w-1/2">
                  <a className="text-white">
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
                  <a className="ml-4 text-white">
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
                  <a className="ml-4 text-white">
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
                  <a className="ml-4 text-white">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
          </div>
      </div>
       
      </section>
      </>
  );
}
export default Contact;