import { useTheme } from '../utils/ThemeContext';


export default function Projects () {
    const { isNightMode } = useTheme(); // Corrected line
    return(
    <div className={`font-normal text-base my-2 ${isNightMode ? 'text-night-light' : 'text-day-light'}`}>
        <h2 className={`font-semibold text-xl my-6 ${isNightMode ? 'text-night' : 'text-day'}`}>MY PROJECTS</h2>

        <div className="project-section my-4">
            <h3 className={`font-semibold text-base mt-3 ${isNightMode ? 'text-night' : 'text-day'}`}>Project Title</h3>
            <p className="text-base font-semibold">Short description of the project. Detailing the purpose and functionality.</p>
            <p className="text-base font-semibold italic">React, Node.js, etc.</p>

            <div className="thumbnail mt-2">
                <video className="w-full" src="/path/to/project-video.mp4" autoPlay loop muted />
            </div>
        </div>
        <div className="project-section my-4">
            <h3 className={`font-semibold text-base mt-3 ${isNightMode ? 'text-night' : 'text-day'}`}>Project Title</h3>
            <p className="text-base font-semibold">Short description of the project. Detailing the purpose and functionality.</p>
            <p className="text-base font-semibold italic">React, Node.js, etc.</p>

            <div className="thumbnail mt-2">
                <video className="w-full" src="/path/to/project-video.mp4" autoPlay loop muted />
            </div>
        </div>
        <div className="project-section my-4">
            <h3 className={`font-semibold text-base mt-3 ${isNightMode ? 'text-night' : 'text-day'}`}>Project Title</h3>
            <p className="text-base font-semibold">Short description of the project. Detailing the purpose and functionality.</p>
            <p className="text-base font-semibold italic">React, Node.js, etc.</p>

            <div className="thumbnail mt-2">
                <video className="w-full" src="/path/to/project-video.mp4" autoPlay loop muted />
            </div>
        </div>

    </div>
    );
}