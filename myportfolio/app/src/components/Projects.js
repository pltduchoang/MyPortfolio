import { useTheme } from '../utils/ThemeContext';


export default function Projects () {
    const { isNightMode } = useTheme(); // Corrected line
    return(
    <div className={`font-normal text-base my-2 ${isNightMode ? 'text-night-light' : 'text-day-light'}`}>
        <h2 className={`font-semibold text-xl my-6 ${isNightMode ? 'text-night' : 'text-day'}`}>MY PROJECTS</h2>

        <div className="relative project-section my-4 transition-all duration-200 ease-in-out hover:translate-x-1 hover:-translate-y-1">
            <div className='p-6 ' style={{zIndex:1}}>
                <h3 className={`font-semibold text-base mt-3 ${isNightMode ? 'text-night' : 'text-day'}`}>Project Title</h3>
                <p className="text-base font-semibold">Short description of the project. Detailing the purpose and functionality.</p>
                <p className="text-base font-semibold italic">React, Node.js, etc.</p>

                <div className="thumbnail mt-2">
                    <video className="w-full" src="/path/to/project-video.mp4" autoPlay loop muted />
                </div>
            </div>
            <div className='absolute top-0 w-full h-full bg-slate-400 opacity-50 transition-all duration-200 ease-in-out hover:-translate-x-2 hover:translate-y-2' style={{zIndex:0}}>

            </div>
        </div>
        <div className="relative project-section my-4 transition-all duration-200 ease-in-out hover:translate-x-1 hover:-translate-y-1">
            <div className='p-6 ' style={{zIndex:1}}>
                <h3 className={`font-semibold text-base mt-3 ${isNightMode ? 'text-night' : 'text-day'}`}>Project Title</h3>
                <p className="text-base font-semibold">Short description of the project. Detailing the purpose and functionality.</p>
                <p className="text-base font-semibold italic">React, Node.js, etc.</p>

                <div className="thumbnail mt-2">
                    <video className="w-full" src="/path/to/project-video.mp4" autoPlay loop muted />
                </div>
            </div>
            <div className='absolute top-0 w-full h-full bg-slate-400 opacity-50 transition-all duration-200 ease-in-out hover:-translate-x-2 hover:translate-y-2' style={{zIndex:0}}>

            </div>
        </div>
        <div className="relative project-section my-4 transition-all duration-200 ease-in-out hover:translate-x-1 hover:-translate-y-1">
            <div className='p-6 ' style={{zIndex:1}}>
                <h3 className={`font-semibold text-base mt-3 ${isNightMode ? 'text-night' : 'text-day'}`}>Project Title</h3>
                <p className="text-base font-semibold">Short description of the project. Detailing the purpose and functionality.</p>
                <p className="text-base font-semibold italic">React, Node.js, etc.</p>

                <div className="thumbnail mt-2">
                    <video className="w-full" src="/path/to/project-video.mp4" autoPlay loop muted />
                </div>
            </div>
            <div className='absolute top-0 w-full h-full bg-slate-400 opacity-50 transition-all duration-200 ease-in-out hover:-translate-x-2 hover:translate-y-2' style={{zIndex:0}}>

            </div>
        </div>

    </div>
    );
}