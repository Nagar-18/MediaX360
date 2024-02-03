import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from './components/Header'
import themeContext from './context/Contex'
import Home from './components/Home'
import About from './components/About'
import { Outlet } from 'react-router-dom'

function App() {
  
 const {mode} =useContext(themeContext);
 const [value,setValue]=useState("  bg-gray-900 ");
 useEffect(()=>{
  if(!mode)
  { 
      setValue(" bg-gray-900 ")
  }
  else
  {
    setValue("bg-teal-900")
  }
  
 },[mode])
  return (
  <>
  {/* <Header/> */}
  <Outlet/>
  
  </>
  )
}

export default App
