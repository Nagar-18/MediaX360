import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './context/ContexProvider.jsx'
import Header from './components/Header.jsx'
import { BrowserRouter ,RouterProvider,createBrowserRouter  } from 'react-router-dom'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import Service from './components/Service.jsx'
import Brands from './components/Brands.jsx'
import Work from './components/Work.jsx'
const router= createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
            path: "/",
            element: <Home/>,
      },
      {
        path: "/service",
            element: <Service />,
      },
       {
        path: "/about",
            element: <About />,
      },
      {
        path:"/work",
        element:<Work/>
      },
       {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/brand",
        element:<Brands/>
      }
    ],
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  
  
    <ContextProvider><RouterProvider router={router}><App /></RouterProvider></ContextProvider>

)
