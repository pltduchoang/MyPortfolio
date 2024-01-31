import React from 'react';
import { useTheme } from '../utils/ThemeContext';

export default function Skills() {
    const { isNightMode } = useTheme(); // Corrected line

    const skills = [
        { name: 'React', icon: '/png/react.png' },
        { name: 'JavaScript', icon: '/png/javascript.png' },
        { name: 'TypeScript', icon: '/png/typescript.png' },
        { name: 'Next.js', icon: '/png/nextjs.png' },
        { name: 'Bootstrap', icon: '/png/bootstrap.png' },
        { name: 'Tailwind', icon: '/png/tailwindcss.png' },
        { name: 'CSharp', icon: '/png/csharp.png' },
        { name: 'DotNet', icon: '/png/dotnet.png' },
        { name: 'ASP.NET', icon: '/png/aspnet.png' },
        { name: 'Java', icon: '/png/java.png' },
        { name: 'Python', icon: '/png/python.png' },
        { name: 'SQL', icon: '/png/sql.png' },
        // { name: 'Firebase', icon: '/png/firebase.png' },
    ];

    return (
        <div className='w-full'>
            <h2 className={`text-2xl font-bold  ${isNightMode ? 'text-night' : 'text-day'}`}>SKILLS</h2>
            <div className="w-full flex flex-wrap justify-center py-6">
                {skills.map(skill => (
                    <div key={skill.name} className={`skill-item max-w-28 m-3 flex flex-col justify-center items-center ${isNightMode ? 'skill-hover-night' : 'skill-hover'}`}>
                        <div className={`skill-icon`}>
                            <img 
                                src={skill.icon} 
                                alt={skill.name} 
                                className={`w-10/12 h-auto ${isNightMode ? 'filter-night' : 'filter-day'}`}
                            />
                        </div>
                        <p className={`text-base text-center font-bold skill-text w-1/2 mt-2 ${isNightMode ? 'text-night-light' : 'text-day-light'}`}>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}