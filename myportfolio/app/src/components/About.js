import { useTheme } from "../utils/ThemeContext";

export default function About () {
    const { isNightMode } = useTheme(); // Corrected line
    return (
        <div>
            <h2 className={`font-semibold text-base my-2 ${isNightMode ? 'text-night' : 'text-day'}`}>MY STORY</h2>
            <p className={` font-semibold text-base my-4 ${isNightMode ? 'text-night-light' : 'text-day-light'}`}>
                2010, my first take-off, I would never forget the feeling of accelerating down the runway, seeing the horizon rushing towards me, and the sky swallowed me whole. It began my 10 years of safe and efficient flying record, my small pride. 2020, with my last landing at a small airport in India, a new chapter began, I would become a software developer, something my younger self always wanted to do. 
            </p>
            <p className={` font-semibold text-base my-4 ${isNightMode ? 'text-night-light' : 'text-day-light'}`}>
            2023, I showed my family and friends the first app, with the same excitement as the day I took off into the sky for the first time. It wasn't a perfect app by any means, but it worked splendidly tracking our business expense. As a new grad Software Developer, I am eager to find new destination in the IT industry, and I take joy in building web-app, mobile-app and software. 
            </p>
            <p className={` font-semibold text-base my-4 ${isNightMode ? 'text-night-light' : 'text-day-light'}`}>
            Away from keyboard, I enjoy hiking through the Rockies, playing golf, dominating the neighbor kids in basketball, and sometimes, I'm a pianist myself.
            </p>
        </div>
    );
}