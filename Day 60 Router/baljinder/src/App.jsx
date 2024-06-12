import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
function App()
{
  const router = createBrowserRouter([
    {
      path: "/",
      element:<><Navbar/><Home/></> ,
    },
    {
      path: "/about",
      element:<><Navbar/><About/></> ,
    },
    {
      path: "/contact",
      element:<><Navbar/><Contact/></> ,
    },
  ]);  
  return(
    <>
    <h1>Hello</h1>
     <RouterProvider router={router} />
    </>
  )
 
}
export default App