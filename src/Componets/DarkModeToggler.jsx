import React from 'react';
import { useDarkMode } from '../ThemeContext/ThemeContext';

const DarkModeToggler = () => {
    
    const {darkMode,setdarkMode} = useDarkMode();
    return (
        <div className='lg:mr-4 '>
            <button 
            onClick={()=> setdarkMode(!darkMode)}
            className="btn btn-neutral btn-outline 
            text-xs px-2 py-1   
            sm:text-sm sm:px-3 sm:py-1.5  
            md:text-base md:px-4 md:py-2">
               { darkMode ? "☀️":"🌙"}
            </button>
        </div>
    );
};

export default DarkModeToggler;