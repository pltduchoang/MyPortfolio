import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../utils/ThemeContext';

const sections = ['bio' , 'skills', 'projects'];

export default function MenuVertical() {
    const [activeSection, setActiveSection] = useState('');
    const [isTop, setIsTop] = useState(true);
    const menuRef = useRef(null);
    const { isNightMode, setIsNightMode, setSectionVisibility } = useTheme();

    const scrollToSection = (sectionId) => {
        if (sectionId === 'bio') {
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

    return (
        <div>
            <div className='flex flex-col items-start pl-6  transition duration-300 ease-in-out'>
                        {sections.map(section => (
                            <div key={section} className='relative hover:w-36 hover:cursor-pointer transition-all duration-300 ease-in-out overflow-hidden hover-parent'
                            onClick={() => scrollToSection(section)}>
                                <hr className={`inline-block w-full mt-2 ${isNightMode? 'hr-night' : 'hr-day'} `}/>
                                <p
                                
                                className={` ${activeSection === section ? '' : ''} ${isNightMode ? 'text-night' : 'text-day'}`}
                                    >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                                </p>
                                <svg fill={`${isNightMode?'#bdd8f1':'#214177'}`} viewBox="0 0 56 56" width='30' height='30' xmlns="http://www.w3.org/2000/svg" className='absolute top-5 -left-8 transition-all duration-300 ease-in'><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><path d="M 54.4141 28 C 54.3906 25.2578 50.6639 23.2656 46.1874 23.2656 L 36.7421 23.2656 C 35.4296 23.2656 34.9374 23.0547 34.1640 22.1641 L 18.4140 4.9844 C 17.9218 4.4219 17.3124 4.1406 16.6093 4.1406 L 13.8905 4.1406 C 13.2812 4.1406 12.9296 4.6797 13.2343 5.3359 L 21.3437 23.2656 L 9.4374 24.6250 L 5.1952 16.8437 C 4.8905 16.2578 4.3749 16 3.6015 16 L 2.5937 16 C 1.9843 16 1.5859 16.3984 1.5859 17.0078 L 1.5859 38.9922 C 1.5859 39.6016 1.9843 39.9766 2.5937 39.9766 L 3.6015 39.9766 C 4.3749 39.9766 4.8905 39.7188 5.1952 39.1563 L 9.4374 31.3750 L 21.3437 32.7344 L 13.2343 50.6641 C 12.9296 51.2968 13.2812 51.8594 13.8905 51.8594 L 16.6093 51.8594 C 17.3124 51.8594 17.9218 51.5547 18.4140 51.0156 L 34.1640 33.8125 C 34.9374 32.9453 35.4296 32.7344 36.7421 32.7344 L 46.1874 32.7344 C 50.6639 32.7344 54.3906 30.7188 54.4141 28 Z"></path></g></svg>
                            </div>
                        ))}
            </div>
        </div>
    );
}
