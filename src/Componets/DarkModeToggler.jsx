import React from 'react';
import { useDarkMode } from '../ThemeContext/ThemeContext';

const DarkModeToggler = () => {
    
    const {darkMode,setdarkMode} = useDarkMode();
    return (
        <div className='mr-4'>
            <button 
            onClick={()=> setdarkMode(!darkMode)}
            className="btn btn-neutral btn-outline">
               { darkMode ? " ☀️   Light Mode":" 🌙 Dark Mode"}
                </button>
        </div>
    );
};

export default DarkModeToggler;