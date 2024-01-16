import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useTheme } from '../utils/ThemeContext';

export default function Background({beginTransition,doneTransition}) {
    // State hooks for each layer
    const [layer1, setLayer1] = useState(true);
    const [layer2, setLayer2] = useState(true);
    const [layer3, setLayer3] = useState(true);
    const [layer4, setLayer4] = useState(true);
    const [layer5, setLayer5] = useState(true);
    const [layer6, setLayer6] = useState(true);

    const nightImagesIndex = [6, 7, 8, 9, 10, 11];
    const dayImagesIndex = [0, 1, 2, 3, 4, 5];

    const [currentBackground, setCurrentBackground] = useState(5);
    const [isCurrentBackgroundVisible, setIsCurrentBackgroundVisible] = useState(true);
    const [isFilterVisible, setIsFilterVisible] = useState(true);

    const {isNightMode} = useTheme();

useEffect(() => {
        if (isNightMode && currentBackground === 11) {
            return;
        }
        if (!isNightMode && currentBackground === 5) {
            return;
        }
        // Function to reset all layers to visible
        const resetLayers = () => {
            setLayer1(true);
            setLayer2(true);
            setLayer3(true);
            setLayer4(true);
            setLayer5(true);
            setLayer6(true);
        };

        // Function to initiate the transition
        const startTransition = () => {
            let index = 0;
            setIsFilterVisible(false)
            beginTransition(true); // Prepare layers for the next mode
            const interval = setInterval(() => {
                if (index < setLayerStates.length - 1) { // Change here
                    setLayerStates[index](false); // Set layer opacity to 0
                    index++;
                } else {
                    clearInterval(interval);
                    setTimeout(() => { // Add a timeout
                        setCurrentBackground(isNightMode ? 11 : 5); // Set the final background
                        setIsCurrentBackgroundVisible(true); // Show the final background
                        setIsFilterVisible(true)
                        resetLayers();
                        doneTransition(true); // Prepare layers for the next mode
                    }, 400);
                     // Adjust this duration as needed
                }
            }, 600);
        };

        if ((isNightMode && currentBackground !== 11) || (!isNightMode && currentBackground !== 5)) {
            setTimeout(() => {
                setIsCurrentBackgroundVisible(false); // Hide the current top background
                startTransition();
            }, 500); // Adjust this duration as needed
        }
    }, [isNightMode]);


    const loadBackground = (index) => {
        const imageFolder = 'shirakawago';
        const imageNames = [
            '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg',
            '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg',
            '11.jpg', '12.jpg',
        ];
    
        if (index >= 0 && index < imageNames.length) {
            return `/background/${imageFolder}/${imageNames[index]}`;
        } else {
            return ''; // Return a default image path or just an empty string
        }
    };

    // Array of layer states and their setters
    const layerStates = [layer1, layer2, layer3, layer4, layer5, layer6];
    const setLayerStates = [setLayer1, setLayer2, setLayer3, setLayer4, setLayer5, setLayer6];

    return (
        <div className=''>
            <div 
                className={`transition fixed top-0 left-0 min-h-screen min-w-full duration-1000 ease-in ${isNightMode ? 'bg-black' : ' bg-white'} ${isFilterVisible ? ' opacity-90' : 'opacity-0'}`}
                style={{zIndex:-1}}
            />
            <img
                src={loadBackground(currentBackground)}
                alt="Background"
                quality={100}
                className={`transition min-h-screen min-w-full object-cover fixed top-0 left-0 duration-400 ease-out ${isCurrentBackgroundVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{zIndex: -2}}
            />
            {layerStates.map((layerVisible, index) => (
                <div key={index} >
                    <img
                        src={loadBackground(isNightMode ? nightImagesIndex[index] : dayImagesIndex[index])}
                        alt={`Layer ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        className={`transition min-h-screen min-w-full object-cover fixed top-0 left-0 duration-500 ease-in ${layerVisible ? 'opacity-100' : 'opacity-0'}`}
                        style={{ zIndex: -3 - index }}
                    />
                </div>
            ))}
        </div>
    );
}
