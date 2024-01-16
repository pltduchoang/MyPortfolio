import { useTheme } from "../utils/ThemeContext";

export default function About () {
    const { isNightMode } = useTheme(); // Corrected line
    return (
        <div>
            <h2 className={`font-semibold text-xl my-2 ${isNightMode ? 'text-night' : 'text-day'}`}>ABOUT</h2>
            <p className={` font-medium text-base my-4 ${isNightMode ? 'text-night-light' : 'text-day-light'}`}>
                2020, it marked 10 years of my safe and efficient flying record. The world then stopped flying, and so did I. I decided to pick up my younger self's dream and become a software developer.
            </p>
            <p className={` font-medium text-base my-4 ${isNightMode ? 'text-night-light' : 'text-day-light'}`}>
                2023, I showed my family and friends the first expenses tracking app feeling as excited as my first flight. It wasn't a perfect app by any means, but it worked splendidly tracking our business expense.
            </p>
            <p className={` font-medium text-base my-4 ${isNightMode ? 'text-night-light' : 'text-day-light'}`}>
                As a new grad Software Developer, I am eager to find new destination in the IT industry, and I take joy in building web-app, mobile-app and software. Away from keyboard, I enjoy hiking through the Rockies, playing golf, or annoying my family with my piano.
            </p>
        </div>
    );
}