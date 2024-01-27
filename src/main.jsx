import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './context/ContexProvider.jsx'
import Header from './components/Header.jsx'
import { BrowserRouter ,RouterProvider,createBrowserRouter  } from 'react-router-dom'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
const router= createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
            path: "/",
            element: <Home/>,
      },
      // {
      //   path: "/project",
      //       element: <Project />,
      // },
       {
        path: "/about",
            element: <About />,
      },
      // {
      //   path:"/contact",
      //   element:<Contact/>
      // },
      //  {
      //   path:"/invite",
      //   element:<Invitation/>
      // },
      // {
      //   path:"/brands",
      //   element:<Brands/>
      // }
    ],
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  
  
    <ContextProvider><RouterProvider router={router}><App /></RouterProvider></ContextProvider>

)
