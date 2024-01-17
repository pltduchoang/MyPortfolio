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
import MenuVertical from '../components/MenuVertical';

export default function Page() {
    const { isNightMode, setIsNightMode, visibleSections } = useTheme(); // Corrected line
    const [hideContent, setHideContent] = useState(true);
    const [flyMessage, setFlyMessage] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setHideContent(false);
        }, 3000);
        setTimeout(() => {
            setFlyMessage(true);
        }, 500);
        setTimeout(() => {
            setFlyMessage(false);
        }, 3000);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setFlyMessage(true);
        }, 600);
        setTimeout(() => {
            setFlyMessage(false);
        }, 4500);
    }, [isNightMode]);


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

    const location = ['Shirakawa-go, Japan']

    return (
        <main>

            <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-transparent'
            style={{zIndex:-1}}>
                <h1 className={`text-5xl font-serif text-white transition-all duration-500 ease-in-out opacity-0 ${flyMessage ? 'opacity-100 translate-x-1 -translate-y-1' : ''}`}>{location[0]}</h1>
            </div>

            <Background doneTransition={handleDoneTransition} beginTransition={handleBeginTransition}/>
            <div className=''>
                <Menu />
            </div>
            <div className={` transition-all duration-500 ease-in-out pt-24 ${hideContent? 'opacity-0' : 'opacity-100'} lg:flex lg:relative lg:justify-end`}>
                <div id='bio' className={`section mb-20 hidden ${visibleSections['bio'] ? 'visible' : ''} lg:w-5/12 lg:h-screen lg:flex lg:flex-col lg:fixed lg:top-26 lg:left-16`}>
                    <div className='w-80 pt-8 px-6 md:w-1/2 lg:w-11/12'>
                        <Bio/>
                    </div>
                    <div className='ml-6 mt-16 mb-32' style={{zIndex:2}}>
                        <MenuVertical />
                    </div>
                    <div className='w-80 pt-8 px-6'>
                        <SocialIcons />
                    </div>
                </div>
                <div id='bio' className={`mb-20 ${visibleSections['bio'] ? 'visible' : ''} lg:w-6/12 lg:h-screen lg:flex-col lg:hidden`}>
                    <div className=' w-96 pt-8 px-6 md:w-1/2 lg:hidden'>
                        <Bio/>
                    </div>
                    <div className='w-80 pt-8 px-6 lg:hidden'>
                        <SocialIcons />
                    </div>
                </div>
                <div className='lg:w-6/12'>
                    <div className={`section w-full pt-8 px-6 lg:pr-20 ${visibleSections['education'] ? 'visible' : ''}`} id='education' >
                        <About />
                    </div>
                    <div className={`section w-full pt-8 px-6 lg:pr-20 ${visibleSections['education'] ? 'visible' : ''}`} id='education' >
                        <Education />
                    </div>
                    <div className={`section w-full pt-8 px-6 lg:pr-20 ${visibleSections['achievements'] ? 'visible' : ''}`} id='achievements'>
                        <Achievements />
                    </div>
                    <div className={`section w-full pt-8 px-6 lg:pr-20 ${visibleSections['skills'] ? 'visible' : ''}`} id='skills'>
                        <Skills />
                    </div>
                    <div className={`section w-full pt-8 px-6 lg:pr-20 ${visibleSections['projects'] ? 'visible' : ''}`} id='projects'>
                        <Projects />
                    </div>
                </div>
            </div>
        </main>
    );
}
