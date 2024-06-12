import React from 'react';
import { useTextColor } from './Context';

const Navbar = () => {
    const{textColor} =useTextColor()
  return (
   <h1 style={{color:textColor}}>Home Page</h1>
  );
};

export default Navbar;
