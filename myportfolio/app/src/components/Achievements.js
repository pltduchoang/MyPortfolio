
import { useTheme } from "../utils/ThemeContext";

export default function Achievements () {
    const { isNightMode } = useTheme(); // Corrected line
    return (
        <div className={`font-normal text-base my-2 ${isNightMode ? 'text-night-light' : 'text-day-light'}`}>
            <h2 className={`font-semibold text-xl my-6 ${isNightMode ? 'text-night' : 'text-day'}`}>ACHIEVEMENTS</h2>
            <div className="achievement-section mb-8  md:flex md:flex-row">
                <p className="hidden md:inline-block md:w-4/12">2023</p>
                <div className="md:flex md:flex-col">
                    <h3 className={`font-semibold text-base ${isNightMode ? 'text-night' : 'text-day'}`}>Jason Lang Scholarship</h3>
                    <p className="text-base md:hidden">2023</p>
                    <p className="text-base">For student achieving outstanding learning record</p>
                </div>
            </div>
            <div className="achievement-section mb-8 md:flex md:flex-row">
                <p className="hidden md:inline-block md:w-4/12">2024</p>
                <div className="md:flex md:flex-col">
                    <h3 className={`font-semibold text-base ${isNightMode ? 'text-night' : 'text-day'}`}>GPA 3.9</h3>
                    <p className="text-base md:hidden">2024</p>
                    <p className="text-base">Consistent academic performance</p>
                </div>
            </div>
        </div>
    );
}