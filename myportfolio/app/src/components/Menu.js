import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../utils/ThemeContext';

const sections = ['bio','education' ,'achievements', 'skills', 'projects'];

export default function Menu() {
    const [activeSection, setActiveSection] = useState('');
    const [isTop, setIsTop] = useState(true);
    const menuRef = useRef(null);
    const { isNightMode, setSectionVisibility } = useTheme();

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
        }, { threshold: 0.2 });

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
            <div ref={menuRef} className={`transition-all duration-500 ease-in-out fixed -top-10 left-0 w-full flex justify-between px-6 h-20 ${isNightMode? 'menu-bg-night':'menu-bg-day' }  ${isTop ? 'translate-y-7' : ''}`}>
            
            </div>
            <div className={`flex flex-row w-full justify-between p-6 fixed -top-4 transition-all duration-500 ease-in-out ${isNightMode? 'menu-text-night' : 'menu-text-day'} ${isTop ? 'translate-y-4' : ''}`}>
                    <button >Home</button>
                        <div className='flex items-center'>
                            {sections.map(section => (
                                <button
                                    key={section}
                                    onClick={() => scrollToSection(section)}
                                    className={`px-1 ${activeSection === section ? '' : ''}`}
                                >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
