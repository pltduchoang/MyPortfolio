// src/resume/page.js:
'use client';
import React, { useEffect, useState } from 'react';
import SocialIcons from '../components/SocialIcons';
import Background from "../components/Background";
import Bio from '../components/Bio';
import About from '../components/About';
import Education from '../components/Education';
import { useTheme } from '../utils/ThemeContext';
import Achievements from '../components/Achievements';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Page() {
    const { isNightMode, setIsNightMode } = useTheme(); // Corrected line
    const [hideContent, setHideContent] = useState(false);



    const handleDoneTransition = (e) => {
        if (e) {
            setHideContent(false);
        }
    };

    const handleBeginTransition = (e) => {
        if (e) {
            setHideContent(true);
        }
    };

    return (
        <main>
            <Background doneTransition={handleDoneTransition} beginTransition={handleBeginTransition}/>
            <button onClick={() => setIsNightMode(!isNightMode)}>Switch to Night Mode</button>
            <div className={` transition-all duration-500 ease-in-out ${hideContent? 'opacity-0' : 'opacity-100'}`}>
                <div>
                    <div className='w-80 p-6'>
                        <Bio/>
                    </div>
                    <div className='w-80 p-6'>
                        <SocialIcons />
                    </div>
                </div>
                <div className='w-full p-6'>
                    <About />
                </div>
                <div className='w-full p-6'>
                    <Education />
                </div>
                <div className='w-full p-6'>
                    <Achievements />
                </div>
                <div className='w-full p-6'>
                    <Skills />
                </div>
                <div className='w-full p-6'>
                    <Projects />
                </div>
            </div>
        </main>
    );
}
