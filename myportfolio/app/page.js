// src/resume/page.js:
'use client';
import React, { useEffect, useState } from 'react';
import SocialIcons from './src/components/SocialIcons';
import Background from "./src/components/Background";
import Bio from './src/components/Bio';
import About from './src/components/About';
import Education from './src/components/Education';
import { useTheme } from './src/utils/ThemeContext';
import Achievements from './src/components/Achievements';
import Projects from './src/components/Projects';
import Skills from './src/components/Skills';
import Menu from './src/components/Menu';
import MenuVertical from './src/components/MenuVertical';

export default function Page() {
    const { isNightMode,
        setIsNightMode,
        visibleSections,
        setSectionVisibility,
        isFilterVisible,
        setIsFilterVisible,
        isDestinationMenuVisible,
        setIsDestinationMenuVisible,
        currentDestination,
        setCurrentDestination,
        destinationName,
        setDestinationName
        } = useTheme(); // Corrected line
    const [hideContent, setHideContent] = useState(true);
    const [flyMessage, setFlyMessage] = useState(false);
    const [showDestinationList, setShowDestinationList] = useState(false);
    const [renderList, setRenderList] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setHideContent(false);
        }, 1300);
        setTimeout(() => {
            setFlyMessage(true);
        }, 200);
        setTimeout(() => {
            setFlyMessage(false);
        }, 1000);
    }, []);

    useEffect(() => {
        setHideContent(true);
        setTimeout(() => {
            setHideContent(false);
        }, 1500);
        setTimeout(() => {
            setFlyMessage(true);
        }, 300);
        setTimeout(() => {
            setFlyMessage(false);
        }, 1500);
    }, [currentDestination]);



    useEffect(() => {
        setTimeout(() => {
            setFlyMessage(true);
        }, 600);
        setTimeout(() => {
            setFlyMessage(false);
        }, 4500);
    }, [isNightMode]);


    useEffect(() => {
        console.log('destmenu', isDestinationMenuVisible)
    }, [isDestinationMenuVisible])
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

    useEffect(() => {
        if (isDestinationMenuVisible) {
            setTimeout(() => {
                setShowDestinationList(true);
            },200);
            setTimeout(() => {
                setRenderList(true);
            },700);
        } else {
            setRenderList(false);
            setShowDestinationList(false);
        }
    }, [isDestinationMenuVisible]);


    const destinations = [
        { name: 'Shirakawa-go, Japan', folder: 'shirakawa-go' },
        { name: 'Amalfi, Italy', folder: 'amalfi' },
        { name: 'Berne, Switzerland', folder: 'berne' },
        { name: 'Guanajuato, Mexico', folder: 'guanajuato' },
        { name: 'Hallstatt, Austria', folder: 'hallstatt' },
        { name: 'Rideau Canal, Canada', folder: 'rideaucanal' },
        { name: 'Vatican City, Italy', folder: 'vatican' },
        { name: 'Wulingyuan, China', folder: 'wulingyuan'},
        { name: 'Dolomite Mountains, Italy', folder: 'dolomites' },
        { name: 'Oporto, Portugal', folder: 'porto' },
        { name: 'Yosemite, USA', folder: 'yosemite' },
    ];
    



    return (
        <main className=''>
            <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-transparent'
            style={{zIndex:-1}}>
                <h1 className={`text-5xl font-serif text-white transition-all duration-300 ease-in-out opacity-0 ${flyMessage ? 'opacity-80 translate-x-1 -translate-y-1' : ''}`}>{destinationName}</h1>
            </div>
            <div className={`fixed top-3 left-6 lg:left-24 rounded-full transition-all duration-700 ease-in-out bg-slate-700 w-9 h-9 ${isNightMode? 'menu-bg-night' : 'menu-bg-day'}  ${isDestinationMenuVisible? 'destMenuShow' : 'destMenuHidden'}`}
            style={{zIndex:1}}>
            
            </div>
            <div className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-transparent flex-col ${showDestinationList ? '' : 'hidden'}`}
            style={{ zIndex: 1 }}>
                <h2 className={`text-xl md:text-3xl font-extrabold font-serif -translate-y-10 ${isNightMode? ' text-night' : 'text-day'}`}>Which destination is on your mind?</h2>
                {destinations.map((destination, index) => (
                    <div key={index} className={`m-2 flex justify-center items-center bg-transparent transition duration-500 ease-in-out hover:scale-105 hover:text-white ${isNightMode? 'text-night' : 'text-day'} ${showDestinationList? 'opacity-100' : 'opacity-0'}`}>
                        <button onClick={() => {
                            setCurrentDestination(destination.folder);
                            setDestinationName(destination.name);
                            setIsDestinationMenuVisible(false);
                        }}>
                            <h1 className='text-xl font-serif inline-block'>{destination.name}</h1>
                        </button>
                    </div>
                ))}
            </div>

            <Background doneTransition={handleDoneTransition} beginTransition={handleBeginTransition}/>
            <div className=''
            style={{zIndex:2}}>
                <Menu />
            </div>
            <div className={` transition-all duration-500 ease-in-out pt-24 ${hideContent? 'opacity-0' : 'opacity-100'} lg:flex lg:relative lg:justify-end`}>
                <div className='hidden lg:w-6/12 lg:flex lg:flex-col lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:justify-center lg:items-center'>
                    <div id='bio' className={`p-10 relative lg:w-9/12 xl:w-7/12`}>
                        <div className='w-80 md:w-1/2 lg:w-10/12 relative'>
                            <Bio/>
                        </div>
                        <div className='ml-6 my-16' style={{zIndex:2}}>
                            <MenuVertical />
                        </div>
                        <div className='w-80 -translate-x-6'>
                            <SocialIcons />
                        </div>
                        <div 
                            className={`transition absolute top-0 left-0 w-full h-full duration-1000 ease-in ${isNightMode ? 'bg-black' : 'bg-white'} ${isFilterVisible ? ' opacity-90' : 'opacity-0'}`}
                            style={{zIndex:-1}}
                        />
                    </div>
                </div>
                <div id='bio' className={`absolute top-0 left-0 mb-20 flex flex-col w-full h-screen justify-center items-center ${visibleSections['bio'] ? 'visible' : ''} lg:w-6/12 lg:h-screen lg:hidden`}

                >
                    <div className='relative justify-center w-80 p-6 md:w-96'
                    >
                        <div className=''>
                            <Bio/>  
                        </div>
                        <div className='mt-10'>
                            <SocialIcons />
                        </div>
                        <div 
                            className={`transition absolute top-0 left-0 w-full h-full duration-1000 ease-in ${isNightMode ? 'bg-black' : 'bg-white'} ${isFilterVisible ? ' opacity-90' : 'opacity-0'}`}
                            style={{zIndex:-1}}
                        />
                    </div>
                </div>
                <div className='absolute top-full lg:pl-10 lg:w-6/12 lg:absolute lg:top-0 '>
                    <div className={`relative section w-full pt-8 px-6 lg:pl-10 lg:pr-14 ${visibleSections['education'] ? 'visible' : ''}`} id='education' >
                        <div className='lg:mt-24'>
                            <About />
                        </div>
                        <div 
                            className={`transition absolute top-0 left-0 w-full h-full duration-1000 ease-in ${isNightMode ? 'bg-black' : 'bg-white'} ${isFilterVisible ? ' opacity-90' : 'opacity-0'}`}
                            style={{zIndex:-1}}
                        />
                    </div>
                    <div className={`relative section w-full pt-8 px-6 lg:pl-10 lg:pr-14  ${visibleSections['education'] ? 'visible' : ''}`} id='' >
                        <Education />
                        <Achievements />
                        <div 
                            className={`transition absolute top-0 left-0 w-full h-full duration-1000 ease-in ${isNightMode ? 'bg-black' : 'bg-white'} ${isFilterVisible ? ' opacity-90' : 'opacity-0'}`}
                            style={{zIndex:-1}}
                        />
                    </div>
                    {/* <div className={`relative section w-full pt-8 px-6 lg:pl-10 lg:pr-14 ${visibleSections['achievements'] ? 'visible' : ''}`} id='achievements'>
                        <Achievements />
                        <div 
                            className={`transition absolute top-0 left-0 w-full h-full duration-1000 ease-in ${isNightMode ? 'bg-black' : 'bg-white'} ${isFilterVisible ? ' opacity-90' : 'opacity-0'}`}
                            style={{zIndex:-1}}
                        />
                    </div> */}
                    <div className={` relative section w-full pt-8 px-6 lg:pl-10 lg:pr-14 ${visibleSections['skills'] ? 'visible' : ''}`} id='skills'>
                        <Skills />
                        <div 
                            className={`transition absolute top-0 left-0 w-full h-full duration-1000 ease-in ${isNightMode ? 'bg-black' : 'bg-white'} ${isFilterVisible ? ' opacity-60' : 'opacity-0'}`}
                            style={{zIndex:-1}}
                        />
                    </div>
                    <div className={`section w-full pt-8  ${visibleSections['projects'] ? 'visible' : ''}`} id='projects'>
                        <Projects/>
                        
                    </div>
                </div>
            </div>
            <div className={` fixed bottom-6 right-6 p-2 rounded-full flex justify-center items-center opacity-60 transition duration-300 ease-in-out hover:cursor-pointer hover:scale-105 hover:opacity-100 ${isNightMode? 'item-night text-night' : 'item-day text-day'} lg:right-16`}
            style={{zIndex:2}}
            onClick={()=>{
                setHideContent(!hideContent);
                setFlyMessage(!flyMessage);
            }}

            >
                <svg fill={`${isNightMode? '#214177' : '#82a6cb'}`} width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 20h18a1 1 0 0 0 .864-1.504l-7-12c-.359-.615-1.369-.613-1.729 0L9.866 12.1l-1.02-1.632A.998.998 0 0 0 8 10h-.001a1 1 0 0 0-.847.47l-5 8A1 1 0 0 0 3 20zM14 8.985 19.259 18h-5.704l-2.486-3.987L14 8.985zm-5.999 3.9L11.197 18H4.805l3.196-5.115zM6 8c1.654 0 3-1.346 3-3S7.654 2 6 2 3 3.346 3 5s1.346 3 3 3zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>
            </div>

        </main>
    );
}
