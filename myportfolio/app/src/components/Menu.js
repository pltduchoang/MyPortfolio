import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../utils/ThemeContext';

const sections = ['bio','education' ,'achievements', 'skills', 'projects'];

export default function Menu() {
    const [activeSection, setActiveSection] = useState('');
    const [isTop, setIsTop] = useState(true);
    const menuRef = useRef(null);
    const { isNightMode, setIsNightMode, setSectionVisibility, isFilterVisible, isDestinationMenuVisible, setIsDestinationMenuVisible} = useTheme();
    const [disableButton, setDisableButton] = useState(false);

    const scrollToSection = (sectionId) => {
        if(sectionId === 'bio') {
            window.scrollTo(
                {
                    top: 0,
                    behavior: 'smooth'
                }
                );
            return;
        }
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    };
    

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                setSectionVisibility(entry.target.id, entry.isIntersecting);
            });
        }, { threshold: 0.3 });

        sections.forEach(section => {
            observer.observe(document.getElementById(section));
        });

        const handleScroll = () => {
            const show = window.scrollY > 10;
            if (show) {
                setIsTop(false);
            } else {
                setIsTop(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };


    }, []);


    const disableNightMode = () => {
        setDisableButton(true);
        setIsNightMode(!isNightMode);
        if (isDestinationMenuVisible) {
            setIsDestinationMenuVisible(false);
        }
        setTimeout(() => {
            setDisableButton(false);
        }, 4000);
    }

    const handleDestination = () => {
        setIsDestinationMenuVisible(!isDestinationMenuVisible);
    }

    return (
        <div>

            <div ref={menuRef} className={`transition-all duration-700 ease-in-out fixed left-0 w-full flex justify-between px-6 h-16 ${isNightMode? 'menu-bg-night':'menu-bg-day' }  ${isTop ? '-translate-y-16' : ''} lg:opacity-0 `}>
            
            </div>
            <div className={`flex flex-row w-full justify-between p-6 fixed -top-3 transition-all duration-700 ease-in-out ${isNightMode? 'menu-text-night' : 'menu-text-day'} ${isTop ? '' : ''} ${isFilterVisible? '' :'-translate-y-24'} lg:pl-24 lg:pr-16`}>
                    {isNightMode? 
                    (<button onClick={handleDestination}
                    style={{zIndex:2}}>
                        <div className={`relative w-9 h-9 rounded-full flex flex-row justify-center items-center overflow-hidden hover:cursor-pointer ${isNightMode? 'item-night' : 'item-day'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.00 24.00" fill="#214177"  width='28' height='28' style={{paddingTop:1}} stroke-linecap="round" stroke-linejoin="round"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path> </g></svg>
                                
                        </div>
                    </button>
                    )
                    :
                    (<button onClick={handleDestination}
                    style={{zIndex:2}}>
                        <div className={` w-9 h-9 rounded-full flex flex-row justify-center items-center relative overflow-hidden hover:cursor-pointer ${isNightMode? 'item-night' : 'item-day'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.00 24.00" fill="#82A6CB"  width='28' height='28' style={{paddingTop:1}} stroke-linecap="round" stroke-linejoin="round"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path> </g></svg>
                        </div>
                    </button>)}
                    <div className='flex items-center transition duration-300 ease-in-out lg:-translate-y-20'>
                        {sections.map(section => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className={`px-1 transition-all duration-700 ease-in-out ${activeSection === section ? '' : ''} ${isTop? '-translate-y-24' : ''}`}
                                    >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </button>
                        ))}
                    </div>
                    <button onClick={disableNightMode}
                    disabled={disableButton}>
                        <div className={` w-9 h-9 rounded-full flex flex-row justify-center items-center relative overflow-hidden hover:cursor-pointer ${isNightMode? 'item-night' : 'item-day'}`}>
                            <div className={`absolute top-0 left-0 flex flex-row h-9 w-20 transition-all duration-500 ease-in-out ${isNightMode? '-translate-x-8' : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{padding:3}}><path d="M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13" fill='#82A6CB'/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='30' height='30' style={{marginTop:3}}><path d="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z" fill='#214177'/></svg>
                            </div>
                        </div>
                    </button>
            </div>
        </div>
    );
}
