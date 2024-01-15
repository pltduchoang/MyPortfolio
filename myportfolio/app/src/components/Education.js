import { useTheme } from "../utils/ThemeContext";

export default function Education () {
    const { isNightMode } = useTheme(); // Corrected line
    return (
<div className={`font-normal text-base my-2 ${isNightMode ? 'text-night-light' : 'text-day-light'}`}>
    <h2 className={`font-semibold text-xl my-6 ${isNightMode ? 'text-night' : 'text-day'}`}>EDUCATION</h2>

    <div className="education-section">
        <h3 className={`font-semibold text-base mt-3 mb-1 ${isNightMode ? 'text-night' : 'text-day'}`}>Software Development Diploma</h3>
        <p className="text-base font-semibold">2022 - 2024</p>
        <p className="text-base font-semibold">Southern Alberta Institution of Technology (SAIT)</p>


        <h3 className={`font-semibold text-base mt-3 ${isNightMode ? 'text-night' : 'text-day'}`}>Google IT Support Professional Certificate</h3>
        <p className="text-base font-semibold">September 2022</p>


        <h3 className={`font-semibold text-base mt-3 ${isNightMode ? 'text-night' : 'text-day'}`}>Junior IT Analyst Program</h3>
        <p className="text-base font-semibold">2022 - 2022</p>
        <p className="text-base font-semibold">NPower Canada</p>

    </div>
</div>
    );
}