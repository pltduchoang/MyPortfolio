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
    const [raiseButtonOne, setRaiseButtonOne] = useState(false);
    const [raiseButtonTwo, setRaiseButtonTwo] = useState(false);
    const [raiseButtonThree, setRaiseButtonThree] = useState(false);

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
                    setRaiseButtonTwo(false);
                    setRaiseButtonThree(false);
                    setScaleUp(true);
                    setTimeout(() => {
                        setRaiseButtonOne(true);
                    }, 700);
                }
                else {
                    setRaiseButtonOne(false);
                    setTimeout(() => {
                        setViewDemoOne(false);
                        setPushDownTwo(false);
                        setPushDownThree(false);
                        setScaleUp(false);
                    }, 200);
                }
                break;
            case 2:
                if(viewDemoTwo===false) {
                    setViewDemoTwo(true);
                    setViewDemoOne(false);
                    setViewDemoThree(false);
                    setPushDownTwo(false);
                    setPushDownThree(true);
                    setRaiseButtonOne(false);
                    setRaiseButtonThree(false);
                    setScaleUp(true);
                    setTimeout(() => {
                        setRaiseButtonTwo(true);
                    }
                    , 700);
                }
                else {
                    
                    setRaiseButtonTwo(false);
                    setTimeout(() => {
                        setViewDemoTwo(false);
                        setPushDownThree(false);
                        setScaleUp(false);
                    }, 200);
                }
                break;
            case 3:
                if(viewDemoThree===false) {
                    setViewDemoThree(true);
                    setViewDemoOne(false);
                    setViewDemoTwo(false);
                    setPushDownTwo(false);
                    setPushDownThree(false);
                    setRaiseButtonOne(false);
                    setRaiseButtonTwo(false);
                    setScaleUp(true);
                    setTimeout(() => {
                        setRaiseButtonThree(true);
                    }
                    , 700);
                }
                else {
                    setRaiseButtonThree(false);
                    setTimeout(() => {  
                        setViewDemoThree(false);
                        setScaleUp(false);
                    }, 200);
                    
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
    const [thirdThumbnailWidth, setThirdThumbnailWidth] = useState(0);

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
        if (thirdThumbnailRef.current) {
            setThirdThumbnailWidth(thirdThumbnailRef.current.clientWidth);
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
        transform: `translateY(${firstProjectHeight + 15}px)`,
        zIndex: -1,
    };
    const pushDownProjectTwo = {
        transform: `translateY(${firstThumbnailHeight +15}px)`,
    };
    const pushDownThumbnailStyleTwo = {
        transform: `translateY(${secondProjectHeight + 30}px)`,
        zIndex: -1,
    };
    const pushDownProjectThree = {
        transform: `translateY(${secondThumbnailHeight +30}px)`,
        paddingBottom: `40px`,
    };
    const pushDownThumbnailStyleThree = {
        transform: `translateY(${thirdProjectHeight + 15}px)`,
        zIndex: -1,
    };
    const scaleUpStyle = {
        paddingBottom: `${firstThumbnailHeight + 200}px`,
    };

    const dynamicWidth = {
        width: `${thirdThumbnailWidth - 50}px`,
        height: `${(thirdThumbnailWidth - 50) * 0.5625}px`,
    };

    return(
    <div className={`font-normal text-base pt-2 pb-56 ${isNightMode ? 'text-night-light' : 'text-day-light'}  px-6 lg:pl-10 lg:pr-14}`}
    style={scaleUp? scaleUpStyle :{}}>
        <h2 className={`font-semibold text-xl my-6 ${isNightMode ? 'text-night' : 'text-day'}`}>MY PROJECTS</h2>

        <div className={`relative project-section my-4 transition-all duration-500 ease-in-out hover:opacity-100 opacity-90 `}>
            <div className={`px-10 pt-10 relative ${isNightMode ? 'bg-stone-900' : 'bg-slate-200'}`}>
                <div className={``}
                style={{zIndex:1,...(viewDemoOne ? {zIndex:2} : {})}}
                ref={firstProjectRef}>
                    <h3 className={`font-semibold text-2xl mt-3 ${isNightMode ? 'text-night' : 'text-day'}`}>NGO Management</h3>
                    <h4 className={`font-semibold text-base mb-3 ${isNightMode ? 'text-night' : 'text-day'}`}>Full stack developer</h4>
                    <p className="text-base font-semibold">A management system for small and medium non-profit organization</p>
                    <ul className="list-disc list-inside my-3">
                        <li className="text-base font-semibold">Manage members, volunteers, and events</li>
                        <li className="text-base font-semibold">Mange event's attendees and volunteers</li>
                        <li className="text-base font-semibold">Schedule volunteers</li>
                    </ul>
                    <div className="flex flex-wrap">
                        {itemList1.map((item,index) => (
                            <div key={index} className={`rounded-full px-1 mr-1 mt-1 opacity-70 ${isNightMode? 'tag-night' : 'tag-day'}`}>
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
            <div className={`absolute top-0 left-0px-10 pb-10 ${isNightMode ?' bg-stone-900' : 'bg-slate-200'} flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${viewDemoOne ? 'opacity-100' : 'opacity-0'}`}
            style={{ zIndex:-1, ...(viewDemoOne ? pushDownThumbnailStyleOne : {}), ...(raiseButtonOne ? {zIndex:0} : {}) }}
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
                            <div className={`px-3 py-2 hover:scale-105 transition duration-200 ease-in-out ${isNightMode? 'tag-night': 'tag-day'}`}>
                                Github
                            </div>
                        </a>
                        <a 
                            href='https://webdev2project.vercel.app/specific-page/manage-users'
                            target="_blank"
                            rel="noopener noreferrer"
                            className='w-4/12 text-center'>
                            <div className={`px-3 py-2 hover:scale-105 transition duration-200 ease-in-out ${isNightMode? 'tag-night': 'tag-day'}`}>
                                Visit
                            </div>
                        </a>
                    </div>
                </div>
        </div>
        <div className={`relative project-section my-4 transition-all duration-500 ease-in-out hover:opacity-100 opacity-90 `}
        style={pushDownTwo? pushDownProjectTwo : {}}>
            <div className={`px-10 pt-10 ${isNightMode ?' bg-stone-900' : 'bg-slate-200'}`}>
                <div className={``}
                style={{ zIndex:1,...(viewDemoTwo ? {zIndex:2} : {})}}
                ref={secondProjectRef}>
                    <h3 className={`font-semibold text-2xl mt-3 ${isNightMode ? 'text-night' : 'text-day'}`}>Expense Tracking Mobile App - BillX</h3>
                    <h4 className={`font-semibold text-base mb-3 ${isNightMode ? 'text-night' : 'text-day'}`}>Full stack developer</h4>
                    <p className="text-base font-semibold">Tracking everyday's expense, designed for personal and small business, providing a financial insight.</p>
                    <ul className="list-disc list-inside my-3">
                        <li className="text-base font-semibold">Expense record, visual insight with charts</li>
                        <li className="text-base font-semibold">Instant sync with online database</li>
                        <li className="text-base font-semibold">Categories, accounts, savings, budget</li>
                        <li className="text-base font-semibold">10 years expense to assist tax filing, auditing</li>
                    </ul>
                    <div className="flex flex-wrap">
                        {itemList2.map((item,index) => (
                            <div key={index} className={`rounded-full px-1 mr-1 mt-1 opacity-70 ${isNightMode? 'tag-night' : 'tag-day'}`}>
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
            <div className={`absolute top-0 left-0px-10 pb-10 ${isNightMode ?' bg-stone-900' : 'bg-slate-200'} flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${viewDemoTwo ? ' opacity-100' : 'opacity-0'}`}
            style={{zIndex:-1, ...(viewDemoTwo ? pushDownThumbnailStyleTwo : {}), ...(raiseButtonTwo ? {zIndex:0} : {})}}
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
                            <div className={`px-3 py-2 hover:scale-105 transition duration-200 ease-in-out ${isNightMode? 'tag-night': 'tag-day'}`}>
                                Github
                            </div>
                        </a>
                        
                    </div>
                </div>
        </div>
        <div className={`relative project-section my-4 transition-all duration-500 ease-in-out hover:opacity-100 opacity-90 `}
        style={pushDownThree ? pushDownProjectThree : {}}>
            <div className={`px-10 pt-10 ${isNightMode ?' bg-stone-900' : 'bg-slate-200'}`}>
                <div className={``}
                style={{zIndex:1,...(viewDemoThree ? {zIndex:2} : {})}}
                ref={thirdProjectRef}>
                    <h3 className={`font-semibold text-2xl my-3 ${isNightMode ? 'text-night' : 'text-day'}`}>Grow Within Nutrition CRM System - Web development</h3>
                    <h4 className={`font-semibold text-base mb-3 ${isNightMode ? 'text-night' : 'text-day'}`}>Full stack developer</h4>
                    <p className="text-base font-semibold">Management system for Grow within Nutrition. A small business in Calgary.</p>
                    <ul className="list-disc list-inside my-3">
                        <li className="text-base font-semibold">Manage users</li>
                        <li className="text-base font-semibold">Selling services</li>
                        <li className="text-base font-semibold">Schedule session and assign staffs</li>
                        <li className="text-base font-semibold">Display information and advertising</li>
                    </ul>
                    <div className="flex flex-wrap">
                        {itemList3.map((item,index) => (
                            <div key={index} className={`rounded-full px-1 mr-1 mt-1 opacity-70 ${isNightMode? 'tag-night' : 'tag-day'}`}>
                                <p  className=" text-base">#{item}</p>
                            </div>
                        ))}
                    </div>
                    {viewDemoThree ? (
                        <div onClick={() => handleToggleDemo(3)}
                        className='hover:cursor-pointer mt-6'>
                            <p className='pb-10'>See less</p>
                        </div>
                    ) : (
                        <div onClick={() => handleToggleDemo(3)}
                        className='hover:cursor-pointer mt-6 '>
                            <p className='pb-10'>See more</p>
                        </div>
                    )}
                </div>
            </div>
            <div className={`w-full absolute top-0 left-0px-10 pb-10 ${isNightMode ?' bg-stone-900' : 'bg-slate-200'} flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${viewDemoThree ? ' opacity-100' : 'opacity-0'}`}
            style={{zIndex:-1, ...(viewDemoThree ? pushDownThumbnailStyleThree : {}), ...(raiseButtonThree ? {zIndex:0} : {})}}
            ref={thirdThumbnailRef}>
                    {/* <div className='flex flex-row justify-around thumbnail'>
                        <div className='relative w-8/12 p-4'>
                            <img className="" src="/project/laptop.png" alt="NGO Management" />
                            <div className="laptop-video p-3">
                                
                            </div>
                        </div>
                        <div className='w-4/12 md:pl-8 md:pr-10 md:pt-14 pl-6 pr-8 pt-10'>
                            <img className="" src='/project/phone.png' alt="NGO Management" />
                        </div>
                    </div>  */}
                    <div className='flex flex-row justify-around thumbnail'>
                        <div className='relative flex justify-center w-full p-4'>
                            <iframe style={dynamicWidth} src="https://www.youtube.com/embed/YJk56avuT9c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div> 
                    
                    <div className='flex flex-row w-full mt-2 justify-around mb-10'>
                        <a 
                            href=''
                            target="_blank"
                            rel="noopener noreferrer"
                            className='w-4/12 text-center'>
                            <div className={`px-3 py-2 hover:scale-100 transition duration-200 ease-in-out ${isNightMode? 'tag-night': 'tag-day'}`}>
                                In progress
                            </div>
                        </a>
                        <a 
                            href=''
                            target="_blank"
                            rel="noopener noreferrer"
                            className='w-4/12 text-center'>
                            <div className={`px-3 py-2 hover:scale-100 transition duration-200 ease-in-out ${isNightMode? 'tag-night': 'tag-day'}`}>
                                In progress
                            </div>
                        </a>
                    </div>
                </div>
        </div> 
        <div 
            className={`transition absolute top-0 left-0 w-full h-full duration-1000 ease-in ${isNightMode ? 'bg-black' : 'bg-white'} ${isFilterVisible ? ' opacity-60' : 'opacity-0'}`}
            style={{zIndex:-2}}
        />
    </div>
    );
}