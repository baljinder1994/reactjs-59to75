import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { TextColorProvider } from './Context';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
const App = () => {
  const router=createBrowserRouter([
   
    {
      path:'/',
      element:    <><Navbar/><Home/></>
    },
    {
      path:'/about',
      element:    <><Navbar/><About/></>
    },
    
  ])
  return (
   
      <TextColorProvider>
        <div>
          
         <RouterProvider router={router} />
        </div>
        </TextColorProvider>
     
    
  );
};

export default App;
