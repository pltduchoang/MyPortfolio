import React from 'react';
import { useTheme } from '../utils/ThemeContext';

export default function Skills() {
    const { isNightMode } = useTheme(); // Corrected line
    return (
        <div className='w-full'>
            <h2 className={`text-2xl font-bold mb-4 ${isNightMode ? 'text-night' : 'text-day'}`}>Skills</h2>
            <div className="w-full flex flex-wrap justify-center">
                
            </div>
        </div>
    );
}