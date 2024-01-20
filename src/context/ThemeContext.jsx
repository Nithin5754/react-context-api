
import { createContext,useContext, useEffect, useState } from "react";

const intialStore={
  themeColor:'light',
  lightTheme:()=>{},
  darkTheme:()=>{}
}


export const ThemeContext=createContext(intialStore)



// export const ThemeProvider=ThemeContext.Provider


export const ThemeProvider=({children})=>{
  const [themeColor,setTheme]=useState('light')
  console.log(themeColor);


  const darkTheme=()=>{
    setTheme('dark')
  }
  const lightTheme=()=>{
    setTheme('light')
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove('lisght','dark')
    document.querySelector('html').classList.add(themeColor)
  },[themeColor])
  return(
    <ThemeContext.Provider  value={{themeColor,lightTheme,darkTheme}}>
     {children}
    </ThemeContext.Provider>
  )
}


export default function useTheme(){
  return useContext(ThemeContext)
}




