import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../utils/ThemeContext';

const sections = ['bio','education' ,'achievements', 'skills', 'projects'];

export default function MenuVertical() {
    const [activeSection, setActiveSection] = useState('');
    const [isTop, setIsTop] = useState(true);
    const menuRef = useRef(null);
    const { isNightMode, setIsNightMode, setSectionVisibility } = useTheme();

    const scrollToSection = (sectionId) => {
        
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
                            <div key={section} className='hover:w-1/3 transition-all duration-300 ease-in-out'>
                                <hr className={`inline-block w-full mt-2 ${isNightMode? 'hr-night' : 'hr-day'} `}/>
                                <button
                                
                                onClick={() => scrollToSection(section)}
                                className={` ${activeSection === section ? '' : ''} ${isNightMode ? 'text-night' : 'text-day'}`}
                                    >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                                </button>
                            </div>
                        ))}
            </div>
        </div>
    );
}
