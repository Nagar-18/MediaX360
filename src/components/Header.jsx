
   import { Fragment, useContext, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon,InboxIcon,MoonIcon,SunIcon } from '@heroicons/react/24/outline'
import themeContext from '../context/Contex'
import { Link } from 'react-router-dom'
import mediax from '../assets/media.png'
const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'About Us', href: '/about', current: false },
    { name: 'Services', href: '/project', current: false },
    { name: 'Creators & Brands', href: '/invite', current: false },
  { name: 'Work', href: '/brands', current: false },
  // { name: 'Channels', href: '/', current: false },

  { name: 'ContactUs', href: '/contact', current: false },
   

]

function classNames(...classes) {

 
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
   const {mode,setMode} =useContext(themeContext);
 const [value,setValue]=useState("grey-900");
 
const handleSubmit=()=>{
  if(mode)
  {
    setValue("gray-900");
    
  }
  else{
    setValue("teal-900");
  }
  setMode(!mode);
}
  return (
    <div className={` mb-0 bg-transparent text-white`}>

    
    <Disclosure as="nav" className={` mb-1  border-red-50`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex flex-col h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex flex-col items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative z-10 inline-flex items-center justify-center rounded-md p-1 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1  items-center justify-center ">
                
                <div className="hidden sm:ml-6  sm:block">
                  <div className={`flex w-full space-x-4 text-${!mode?'white':'black'}`}>
                   <div>   <img  className=" hover:scale-150 transition duration-500 cursor-pointer object-cover w-20 h-10 border-0 rounded"
                        src={mediax} alt="#" /></div>
                        <div>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-pink-900 text-white' : `text-gray-${!mode?'100':'900'} hover:bg-rose-500 hover:text-white`,
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}</div>
                  </div>
                </div>
              </div>
          
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1  px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </div>
  )
}