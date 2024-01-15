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
import Menu from '../components/Menu';

export default function Page() {
    const { isNightMode, setIsNightMode, visibleSections } = useTheme(); // Corrected line
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
            <Menu />
            <div className={` transition-all duration-500 ease-in-out pt-14 ${hideContent? 'opacity-0' : 'opacity-100'}`}>
                <div id='bio' className={`section ${visibleSections['bio'] ? 'visible' : ''}`}>
                    <div className='w-80 pt-8 px-6'>
                        <Bio/>
                    </div>
                    <div className='w-80 pt-8 px-6'>
                        <SocialIcons />
                    </div>
                    <div className={`w-full pt-8 px-6`} >
                        <About />
                    </div>
                    
                </div>
                <div className={`section w-full pt-8 px-6 ${visibleSections['education'] ? 'visible' : ''}`} id='education' >
                    <Education />
                </div>
                <div className={`section w-full pt-8 px-6 ${visibleSections['achievements'] ? 'visible' : ''}`} id='achievements'>
                    <Achievements />
                </div>
                <div className={`section w-full pt-8 px-6 ${visibleSections['skills'] ? 'visible' : ''}`} id='skills'>
                    <Skills />
                </div>
                <div className={`section w-full pt-8 px-6 ${visibleSections['projects'] ? 'visible' : ''}`} id='projects'>
                    <Projects />
                </div>
            </div>
        </main>
    );
}
