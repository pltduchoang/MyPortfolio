
import { useTheme } from "../utils/ThemeContext";

export default function Achievements () {
    const { isNightMode } = useTheme(); // Corrected line
    return (
        <div className={`font-normal text-base my-2 ${isNightMode ? 'text-night-light' : 'text-day-light'}`}>
            <h2 className={`font-semibold text-xl my-6 ${isNightMode ? 'text-night' : 'text-day'}`}>ACHIEVEMENTS</h2>
            <div className="achievement-section">
                <h3 className={`font-semibold text-base mt-3 ${isNightMode ? 'text-night' : 'text-day'}`}>Jason Lang Scholarship</h3>
                <p className="text-base font-semibold">For student achieving outstanding learning record</p>

                <h3 className={`font-semibold text-base mt-3 ${isNightMode ? 'text-night' : 'text-day'}`}>GPA 3.9</h3>
                <p className="text-base font-semibold">Demonstrating consistent academic excellence in my coursework.</p>
            </div>
        </div>
    );
}