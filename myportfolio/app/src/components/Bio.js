import React from 'react';
import { useTheme } from '../utils/ThemeContext';

export default function Bio() {
    const { isNightMode } = useTheme(); // Corrected line
    return(
        <div className=''>
            <h2 className={` text-sm font-semibold ${isNightMode ? 'text-night' : 'text-day'} md:text-lg`}>This is your pilot from the flight deck</h2>
            
            <h1 className={`text-5xl font-bold ${isNightMode ? 'text-night' : 'text-day'} md:text-6xl`}>Duc Hoang</h1>

            <hr className={` w-56 mt-2 ${isNightMode? 'hr-night' : 'hr-day'} md:w-8/12`}/>

            <p className={` text-base font-semibold mt-6 ${isNightMode ? 'text-night-light' : 'text-day-light'}`}>Let me fly you to discover the potential of web-app, mobile-app and software.</p>
        </div>
    );
}