'use client';
import { useTheme } from '../utils/ThemeContext';
import { useEffect, useState, useRef } from 'react';


export default function Projects (){
    const { isNightMode,
        setIsNightMode,
        visibleSections,
        setSectionVisibility,
        isFilterVisible,
        setIsFilterVisible,
        isDestinationMenuVisible,
        setIsDestinationMenuVisible,
        currentDestination,
        setCurrentDestination,
        destinationName,
        setDestinationName } = useTheme(); // Corrected line
    const [viewDemoOne, setViewDemoOne] = useState(false);
    const [viewDemoTwo, setViewDemoTwo] = useState(false);
    const [viewDemoThree, setViewDemoThree] = useState(false);

    const [pushDownTwo, setPushDownTwo] = useState(false);
    const [pushDownThree, setPushDownThree] = useState(false);

    const [scaleUp, setScaleUp] = useState(false);

    const   itemList1 = ['Next.js','TailwindCSS' , 'Firebase', 'OAuth']
    const   itemList2 = ['React', 'React Native', 'Firebase', 'Android']
    const   itemList3 = ['Next.js','TailwindCSS','React', 'MySQL','JS']


    const handleToggleDemo = (i) => {
        switch(i) {
            case 1:
                if(viewDemoOne===false) {
                    setViewDemoOne(true);
                    setViewDemoTwo(false);
                    setViewDemoThree(false);
                    setPushDownTwo(true);
                    setPushDownThree(true);
                    setScaleUp(true);
                }
                else {
                    setViewDemoOne(false);
                    setPushDownTwo(false);
                    setPushDownThree(false);
                    setScaleUp(false);
                }
                break;
            case 2:
                if(viewDemoTwo===false) {
                    setViewDemoTwo(true);
                    setViewDemoOne(false);
                    setViewDemoThree(false);
                    setPushDownTwo(false);
                    setPushDownThree(true);
                    setScaleUp(true);
                }
                else {
                    setViewDemoTwo(false);
                    setPushDownThree(false);
                    setScaleUp(false);
                }
                break;
            case 3:
                if(viewDemoThree===false) {
                    setViewDemoThree(true);
                    setViewDemoOne(false);
                    setViewDemoTwo(false);
                    setPushDownTwo(false);
                    setPushDownThree(false);
                    setScaleUp(true);
                }
                else {
                    setViewDemoThree(false);
                    setScaleUp(false);
                }
                break;
            default:
                return;
            }

        };

    const firstProjectRef = useRef(null);
    const firstThumbnailRef = useRef(null);

    const secondProjectRef = useRef(null);
    const secondThumbnailRef = useRef(null);

    const thirdProjectRef = useRef(null);
    const thirdThumbnailRef = useRef(null);


    const [firstProjectHeight, setFirstProjectHeight] = useState(0);
    const [firstThumbnailHeight, setFirstThumbnailHeight] = useState(0);
    
    
    const [secondProjectHeight, setSecondProjectHeight] = useState(0);
    const [secondThumbnailHeight, setSecondThumbnailHeight] = useState(0);

    const [thirdProjectHeight, setThirdProjectHeight] = useState(0);
    const [thirdThumbnailHeight, setThirdThumbnailHeight] = useState(0);

    const updateDivHeights = () => {
        if (firstProjectRef.current) {
            setFirstProjectHeight(firstProjectRef.current.clientHeight);
        }
        if (firstThumbnailRef.current) {
            setFirstThumbnailHeight(firstThumbnailRef.current.clientHeight);
        }
        if (secondProjectRef.current) {
            setSecondProjectHeight(secondProjectRef.current.clientHeight);
        }
        if (secondThumbnailRef.current) {
            setSecondThumbnailHeight(secondThumbnailRef.current.clientHeight);
        }
        if (thirdProjectRef.current) {
            setThirdProjectHeight(thirdProjectRef.current.clientHeight);
        }
        if (thirdThumbnailRef.current) {
            setThirdThumbnailHeight(thirdThumbnailRef.current.clientHeight);
        }
    };

    useEffect(() => {
        updateDivHeights();
        window.addEventListener('resize', updateDivHeights);
    
        return () => {
          window.removeEventListener('resize', updateDivHeights);
        };
      }, []);

    const pushDownThumbnailStyleOne = {
        transform: `translateY(${firstProjectHeight + 10}px)`,
    };
    const pushDownProjectTwo = {
        transform: `translateY(${firstThumbnailHeight}px)`,
    };
    const pushDownThumbnailStyleTwo = {
        transform: `translateY(${secondProjectHeight + 10}px)`,
    };
    const pushDownProjectThree = {
        transform: `translateY(${secondThumbnailHeight}px)`,
    };
    const pushDownThumbnailStyleThree = {
        transform: `translateY(${thirdProjectHeight + 10}px)`,
    };
    const scaleUpStyle = {
        paddingBottom: `${firstThumbnailHeight + 50}px`,
    };

    return(
    <div className={`font-normal text-base py-2 ${isNightMode ? 'text-night-light' : 'text-day-light'}  px-6 lg:pl-10 lg:pr-14}`}
    style={scaleUp? scaleUpStyle :{}}>
        <h2 className={`font-semibold text-xl my-6 ${isNightMode ? 'text-night' : 'text-day'}`}>MY PROJECTS</h2>

        <div className={`relative project-section my-4 transition-all duration-500 ease-in-out hover:opacity-100 opacity-90 `}>
            <div className={`px-10 pt-10 relative ${isNightMode ? 'bg-stone-700' : 'bg-slate-200'}`}>
                <div className={``}
                style={{zIndex:1}}
                ref={firstProjectRef}>
                    <h3 className={`font-semibold text-2xl my-3 ${isNightMode ? 'text-night' : 'text-day'}`}>NGO Management - Solo Project</h3>
                    <p className="text-base font-semibold">A management system for small and medium non-profit organization</p>
                    <ul className="list-disc list-inside my-3">
                        <li className="text-base font-semibold">Manage members, volunteers, and events</li>
                        <li className="text-base font-semibold">Mange event's attendees and volunteers</li>
                        <li className="text-base font-semibold">Schedule volunteers</li>
                    </ul>
                    <div className="flex flex-wrap">
                        {itemList1.map((item) => (
                            <div className={`rounded-full px-1 mr-1 mt-1 opacity-70 ${isNightMode? 'tag-night' : 'tag-day'}`}>
                                <p className=" text-base">#{item}</p>
                            </div>
                        ))}
                    </div>
                    {viewDemoOne ? (
                        <div onClick={() => handleToggleDemo(1)}
                        className='hover:cursor-pointer mt-6'>
                            <p className='pb-10'>See less</p>
                        </div>
                    ) : (
                        <div onClick={() => handleToggleDemo(1)}
                        className='hover:cursor-pointer mt-6 '>
                            <p className='pb-10'>See more</p>
                        </div>
                    )}
                </div>
                
            </div>
            <div className={`absolute top-0 left-0px-10 pb-10 ${isNightMode ? 'bg-stone-700' : 'bg-slate-200'} flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${viewDemoOne ? 'opacity-100' : 'opacity-0'}`}
            style={{ zIndex: -1, ...(viewDemoOne ? pushDownThumbnailStyleOne : {}) }}
            ref={firstThumbnailRef}>
                    <div className='w-full'>
                        <div className='flex flex-row justify-around thumbnail'>
                            <div className='relative w-8/12 p-4'>
                                <img className="" src="/project/laptop.png" alt="NGO Management" />
                                <div className="laptop-video p-3">
                                    <video className="" src="/project/ngo/NGOVideoDemo2.mp4" autoPlay loop muted />
                                </div>
                            </div>
                            <div className='w-4/12 md:pl-8 md:pr-10 md:pt-14 pl-6 pr-8 pt-10'>
                                <img className="" src='/project/ngo/phone.png' alt="NGO Management" />
                            </div>
                        </div> 
                    </div>  
                    <div className='flex flex-row w-full mt-2 justify-around'>
                        <a 
                            href='https://github.com/pltduchoang/webdev2project.git'
                            target="_blank"
                            rel="noopener noreferrer"
                            className='w-4/12 text-center'>
                            <div className={`px-3 py-2 hover:scale-110 transition duration-200 ease-in-out ${isNightMode? 'tag-night': 'tag-day'}`}>
                                Github
                            </div>
                        </a>
                        <a 
                            href='https://webdev2project.vercel.app/specific-page/manage-users'
                            target="_blank"
                            rel="noopener noreferrer"
                            className='w-4/12 text-center'>
                            <div className={`px-3 py-2 hover:scale-110 transition duration-200 ease-in-out ${isNightMode? 'tag-night': 'tag-day'}`}>
                                Visit
                            </div>
                        </a>
                    </div>
                </div>
        </div>
        <div className={`relative project-section my-4 transition-all duration-500 ease-in-out hover:opacity-100 opacity-90 `}
        style={pushDownTwo? pushDownProjectTwo : {}}>
            <div className={`px-10 pt-10 ${isNightMode ? 'bg-stone-700' : 'bg-slate-200'}`}>
                <div className={``}
                style={{ zIndex: 1}}
                ref={secondProjectRef}>
                    <h3 className={`font-semibold text-2xl my-3 ${isNightMode ? 'text-night' : 'text-day'}`}>Expense Tracking Mobile App - BillX - Solo Project</h3>
                    <p className="text-base font-semibold">Tracking everyday's expense, designed for personal and small business, providing a financial insight.</p>
                    <ul className="list-disc list-inside my-3">
                        <li className="text-base font-semibold">Store expense record, provide insight visually with charts</li>
                        <li className="text-base font-semibold">Instant sync with online database</li>
                        <li className="text-base font-semibold">Expense group in categories, accounts, savings, budget</li>
                        <li className="text-base font-semibold">Store up to 10 years expense to assist tax filing</li>
                    </ul>
                    <div className="flex flex-wrap">
                        {itemList2.map((item) => (
                            <div className={`rounded-full px-1 mr-1 mt-1 opacity-70 ${isNightMode? 'tag-night' : 'tag-day'}`}>
                                <p className=" text-base">#{item}</p>
                            </div>
                        ))}
                    </div>
                    {viewDemoTwo ? (
                        <div onClick={() => handleToggleDemo(2)}
                        className='hover:cursor-pointer mt-6'>
                            <p className='pb-10'>See less</p>
                        </div>
                    ) : (
                        <div onClick={() => handleToggleDemo(2)}
                        className='hover:cursor-pointer mt-6 '>
                            <p className='pb-10'>See more</p>
                        </div>
                    )}
                </div>
            </div>
            <div className={`absolute top-0 left-0px-10 pb-10 ${isNightMode ? 'bg-stone-700' : 'bg-slate-200'} flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${viewDemoTwo ? ' opacity-100' : 'opacity-0'}`}
            style={{zIndex:-1, ...(viewDemoTwo ? pushDownThumbnailStyleTwo : {})}}
            ref={secondThumbnailRef}>
                    <div className='flex flex-row justify-around p-4'>
                        {/* <div className='relative w-3/12 pt-10'>
                            <img className="" src="/project/phone.png" alt="BillX" />
                            <div className="phone-video">
                                <video className="" src="/project/billx/billxVideo.mp4" autoPlay loop muted />
                            </div>
                        </div> */}
                        <div className='w-3/12 pt-10'>
                            <img className="" src='/project/billx/billx1.png' alt="BillX" />
                        </div>
                        <div className='w-3/12 pt-10'>
                            <img className="" src='/project/billx/billx4.png' alt="BillX" />
                        </div>
                        <div className='w-3/12 pt-10'>
                            <img className="" src='/project/billx/billx2.png' alt="BillX" />
                        </div>
                        <div className='w-3/12 pt-10'>
                            <img className="" src='/project/billx/billx3.png' alt="BillX" />
                        </div>
                        
                        
                    </div>
                    
                    <div className='flex flex-row w-full mt-2 justify-around'>
                        <a 
                            href='https://github.com/pltduchoang/billXenhanced.git'
                            target="_blank"
                            rel="noopener noreferrer"
                            className='w-4/12 text-center'>
                            <div className={`px-3 py-2 hover:scale-110 transition duration-200 ease-in-out ${isNightMode? 'tag-night': 'tag-day'}`}>
                                Github
                            </div>
                        </a>
                        
                    </div>
                </div>
        </div>
        <div className={`relative project-section my-4 transition-all duration-500 ease-in-out hover:opacity-100 opacity-90 `}
        style={pushDownThree ? pushDownProjectThree : {}}>
            <div className={`px-10 pt-10 ${isNightMode ? 'bg-stone-700' : 'bg-slate-200'}`}>
                <div className={``}
                style={{zIndex:1}}
                ref={thirdProjectRef}>
                    <h3 className={`font-semibold text-2xl my-3 ${isNightMode ? 'text-night' : 'text-day'}`}>Grow with Nutrition management webapp - Team project</h3>
                    <p className="text-base font-semibold">Short description of the project. Detailing the purpose and functionality.</p>
                    <ul className="list-disc list-inside my-3">
                        <li className="text-base font-semibold">Manage users</li>
                        <li className="text-base font-semibold">Selling services</li>
                        <li className="text-base font-semibold">Schedule session and assign staffs</li>
                        <li className="text-base font-semibold">Display information and advertising</li>
                    </ul>
                    <div className="flex flex-wrap">
                        {itemList3.map((item) => (
                            <div className={`rounded-full px-1 mr-1 mt-1 opacity-70 ${isNightMode? 'tag-night' : 'tag-day'}`}>
                                <p className=" text-base">#{item}</p>
                            </div>
                        ))}
                    </div>
                    {viewDemoThree ? (
                        <div onClick={() => handleToggleDemo(3)}
                        className='hover:cursor-pointer mt-6'>
                            <p>See less</p>
                        </div>
                    ) : (
                        <div onClick={() => handleToggleDemo(3)}
                        className='hover:cursor-pointer mt-6 '>
                            <p className='pb-10'>See more</p>
                        </div>
                    )}
                </div>
            </div>
            <div className={`absolute top-0 left-0px-10 pb-10 ${isNightMode ? 'bg-stone-700' : 'bg-slate-200'} flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${viewDemoThree ? ' opacity-100' : 'opacity-0'}`}
            style={{zIndex:-1, ...(viewDemoThree ? pushDownThumbnailStyleThree : {})}}
            ref={thirdThumbnailRef}>
                    <div className='flex flex-row justify-around thumbnail'>
                        <div className='relative w-8/12 p-4'>
                            <img className="" src="/project/laptop.png" alt="NGO Management" />
                            <div className="laptop-video p-3">
                                
                            </div>
                        </div>
                        <div className='w-4/12 md:pl-8 md:pr-10 md:pt-14 pl-6 pr-8 pt-10'>
                            <img className="" src='/project/phone.png' alt="NGO Management" />
                        </div>
                    </div> 
                    
                    <div className='flex flex-row w-full mt-2 justify-around mb-10'>
                        <a 
                            href=''
                            target="_blank"
                            rel="noopener noreferrer"
                            className='w-4/12 text-center'>
                            <div className={`px-3 py-2 hover:scale-110 transition duration-200 ease-in-out ${isNightMode? 'tag-night': 'tag-day'}`}>
                                In progress
                            </div>
                        </a>
                        <a 
                            href=''
                            target="_blank"
                            rel="noopener noreferrer"
                            className='w-4/12 text-center'>
                            <div className={`px-3 py-2 hover:scale-110 transition duration-200 ease-in-out ${isNightMode? 'tag-night': 'tag-day'}`}>
                                In progress
                            </div>
                        </a>
                    </div>
                </div>
        </div> 
        <div 
            className={`transition absolute top-0 left-0 w-full h-full duration-1000 ease-in ${isNightMode ? 'bg-black' : 'bg-white'} ${isFilterVisible ? ' opacity-60' : 'opacity-0'}`}
            style={{zIndex:-1}}
        />
    </div>
    );
}