import React, { createContext, useContext, useState }from 'react'


const TextColorContext= createContext();

export const TextColorProvider=({children})=>{
  const[textColor,setTextColor]=useState('blue');

  const changeTextColor=(color) =>{
    setTextColor(color)
  }
  return(
    <TextColorContext.Provider value={{textColor,changeTextColor}}>
      {children}
    </TextColorContext.Provider>
  )
}
export const useTextColor=() =>{
  return useContext(TextColorContext)
}