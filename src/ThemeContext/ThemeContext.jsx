import { children, createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext('light');

export const ThemeProvider = ({ children }) =>{

    const [darkMode, setdarkMode] = useState(localStorage.getItem('theme') === "dark");

useEffect(() =>{
    if(darkMode){
document.documentElement.classList.add('dark');
localStorage.setItem('theme', 'dark');
    }
    else{
document.documentElement.classList.remove('dark');
localStorage.setItem('theme', 'light');
    }
}, [darkMode])

    return(
        <ThemeContext.Provider value={{darkMode,setdarkMode}}>
             {children}
        </ThemeContext.Provider>
    )
}

export const useDarkMode = () => useContext(ThemeContext)