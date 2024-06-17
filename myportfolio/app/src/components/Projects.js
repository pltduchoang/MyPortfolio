'use client';
import { useTheme } from '../utils/ThemeContext';
import { useEffect, useState, useRef } from 'react';
import Modal from './Modal';


const ProjectShowcase = ({ project, isNightMode, expand, handleExpand, handleModal , children }) => {
    const fixedCard = useRef(null);
    const demoRef = useRef(null);

    const [cardHeight, setCardHeight] = useState(0);
    const [demoHeight, setDemoHeight] = useState(0);
    const [raiseButton, setRaiseButton] = useState(false);

    const updateHeights = () => {
        if (fixedCard.current) {
            setCardHeight(fixedCard.current.clientHeight);
        }
        if (demoRef.current) {
            setDemoHeight(demoRef.current.clientHeight);
        }
    }

    useEffect(() => {
        updateHeights();
        window.addEventListener('resize', updateHeights);
        if (expand === project.id) {
            setTimeout(() => {
                setRaiseButton(true);
            }, 700);
        } else {
            setRaiseButton(false);
        }
        return () => {
            window.removeEventListener('resize', updateHeights);
        };
    }, [expand]);

    const pushDownThumbnailStyle = {
        transform: `translateY(${cardHeight + 40}px)`,
        zIndex: -1,
        opacity: 1,
    };

    const expandStyle = {
        marginBottom: `${demoHeight}px`,
    };

    return (
        <div className={`relative project-section my-4 transition-all duration-500 ease-in-out hover:opacity-100 opacity-90 `}>
            <div className={`px-10 pt-10 relative ${isNightMode ? 'bg-stone-900' : 'bg-slate-200'}`}>
                <div className={``}
                style={{zIndex:1,...(project.id === expand ? {zIndex:2} : {})}}
                ref={fixedCard}
                >
                    <h3 className={`font-semibold text-2xl mt-3 ${isNightMode ? 'text-night' : 'text-day'}`}>{project.title}</h3>
                    <h4 className={`font-semibold text-base mb-3 ${isNightMode ? 'text-night' : 'text-day'}`}>{project.role}</h4>
                    <p className="text-base font-semibold">{project.description}</p>
                    <ul className="list-disc list-inside my-3">
                        {project.features && project.features.map((feature, index) => (
                            <li key={index} className="text-base font-semibold">{feature}</li>
                        ))}
                    </ul>
                    <div className="flex flex-wrap">
                        {project.techStack.map((item,index) => (
                            <div key={index} className={`rounded-full px-1 mr-1 mt-1 opacity-70 ${isNightMode? 'tag-night' : 'tag-day'}`}>
                                <p className=" text-base">#{item}</p>
                            </div>
                        ))}
                    </div>
                    {project.id === expand ? (
                        <div onClick={() => handleExpand(project.id)}
                        className='hover:cursor-pointer mt-6'>
                            <p className='pb-10'>See less</p>
                        </div>
                    ) : (
                        <div onClick={() => handleExpand(project.id)}
                        className='hover:cursor-pointer mt-6 '>
                            <p className='pb-10'>See more</p>
                        </div>
                    )}
                </div>
                
            </div>
            <div className={`absolute top-0 left-0px-10 w-full pb-10 ${isNightMode ?' bg-stone-900' : 'bg-slate-200'} flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${project.id === expand ? 'opacity-100' : 'opacity-0'}`}
            style={{ zIndex: -1, ...(project.id === expand ? pushDownThumbnailStyle : { opacity: 0 }), ...(raiseButton ? { zIndex: 0 } : { zIndex: -1})}}
            ref={demoRef}>
                {children}
            </div>
            <div className={`h-[0px] transition-all duration-500 ease-in-out`}
            style={{...(project.id === expand ? expandStyle : {})}}>
            </div>
        </div>
    )
}

export default function Projects ({handleToggleModal}){
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
    // const [viewDemoOne, setViewDemoOne] = useState(false);
    // const [viewDemoTwo, setViewDemoTwo] = useState(false);
    // const [viewDemoThree, setViewDemoThree] = useState(false);
    // const [viewDemoFour, setViewDemoFour] = useState(false);

    // const [pushDownTwo, setPushDownTwo] = useState(false);
    // const [pushDownThree, setPushDownThree] = useState(false);
    // const [pushDownFour, setPushDownFour] = useState(false);

    // const [scaleUp, setScaleUp] = useState(false);
    // const [raiseButtonOne, setRaiseButtonOne] = useState(false);
    // const [raiseButtonTwo, setRaiseButtonTwo] = useState(false);
    // const [raiseButtonThree, setRaiseButtonThree] = useState(false);
    // const [raiseButtonFour, setRaiseButtonFour] = useState(false);

    // const itemList1 = ['Next.js','TailwindCSS' , 'Firebase', 'OAuth']
    // const itemList2 = ['React', 'React Native', 'Firebase', 'Android']
    // const itemList3 = ['Next.js','TailwindCSS','React', 'MySQL','JS']
    // const itemList4 = ['React', 'Firebase', 'Android', 'Next-auth', 'OAuth']

    // const [modalIsOpen, setModalIsOpen] = useState(false);

    // const handleToggleDemo = (i) => {
    //     switch(i) {
    //         case 1:
    //             if(viewDemoOne===false) {
    //                 setViewDemoOne(true);
    //                 setViewDemoTwo(false);
    //                 setViewDemoThree(false);
    //                 setViewDemoFour(false);
    //                 setPushDownTwo(true);
    //                 setPushDownThree(false);
    //                 setPushDownFour(false);
    //                 setRaiseButtonTwo(false);
    //                 setRaiseButtonThree(false);
    //                 setRaiseButtonFour(false);
    //                 // setScaleUp(true);
    //                 setTimeout(() => {
    //                     setRaiseButtonOne(true);
    //                 }, 700);
    //             }
    //             else {
    //                 setRaiseButtonOne(false);
    //                 setTimeout(() => {
    //                     setViewDemoOne(false);
    //                     setPushDownTwo(false);
    //                     setPushDownThree(false);
    //                     setPushDownFour(false);
    //                     setScaleUp(false);
    //                 }, 200);
    //             }
    //             break;
    //         case 2:
    //             if(viewDemoTwo===false) {
    //                 setViewDemoTwo(true);
    //                 setViewDemoOne(false);
    //                 setViewDemoThree(false);
    //                 setViewDemoFour(false);
    //                 setPushDownTwo(false);
    //                 setPushDownThree(true);
    //                 setPushDownFour(false);
    //                 setRaiseButtonOne(false);
    //                 setRaiseButtonThree(false);
    //                 setRaiseButtonFour(false);
    //                 // setScaleUp(true);
    //                 setTimeout(() => {
    //                     setRaiseButtonTwo(true);
    //                 }
    //                 , 700);
    //             }
    //             else {
                    
    //                 setRaiseButtonTwo(false);
    //                 setTimeout(() => {
    //                     setViewDemoTwo(false);
    //                     setPushDownThree(false);
    //                     setPushDownFour(false);
    //                     setScaleUp(false);
    //                 }, 200);
    //             }
    //             break;
    //         case 3:
    //             if(viewDemoThree===false) {
    //                 setViewDemoThree(true);
    //                 setViewDemoOne(false);
    //                 setViewDemoTwo(false);
    //                 setViewDemoFour(false);
    //                 setPushDownTwo(false);
    //                 setPushDownThree(false);
    //                 setPushDownFour(true);
    //                 setRaiseButtonOne(false);
    //                 setRaiseButtonTwo(false);
    //                 setRaiseButtonFour(false);
    //                 // setScaleUp(true);
    //                 setTimeout(() => {
    //                     setRaiseButtonThree(true);
    //                 }
    //                 , 700);
    //             }
    //             else {
    //                 setRaiseButtonThree(false);
    //                 setTimeout(() => {  
    //                     setViewDemoThree(false);
    //                     setPushDownFour(false);
    //                     setScaleUp(false);
    //                 }, 200);
                    
    //             }
    //             break;
    //         case 4:
    //             if(viewDemoFour===false) {
    //                 setViewDemoFour(true);
    //                 setViewDemoOne(false);
    //                 setViewDemoTwo(false);
    //                 setViewDemoThree(false);
    //                 setPushDownTwo(false);
    //                 setPushDownThree(false);
    //                 setPushDownFour(false);
    //                 setRaiseButtonOne(false);
    //                 setRaiseButtonTwo(false);
    //                 setRaiseButtonThree(false);
    //                 setScaleUp(true);
    //                 setTimeout(() => {
    //                     setRaiseButtonFour(true);
    //                 }
    //                 , 700);
    //             }
    //             else {
    //                 setRaiseButtonFour(false);
    //                 setTimeout(() => {  
    //                     setViewDemoFour(false);
    //                     setScaleUp(false);
    //                 }, 200);
    //             }
    //             break;
    //         default:
    //             return;
    //         }

    //     };

    // const firstThumbnailRef = useRef(null);
    // const firstProjectRef = useRef(null);

    // const secondThumbnailRef = useRef(null);
    // const secondProjectRef = useRef(null);


    // const thirdThumbnailRef = useRef(null);
    // const thirdProjectRef = useRef(null);

    // const fourthThumbnailRef = useRef(null);
    // const fourthProjectRef = useRef(null);

    // const [firstProjectHeight, setFirstProjectHeight] = useState(0);
    // const [firstThumbnailHeight, setFirstThumbnailHeight] = useState(0);
    
    // const [secondProjectHeight, setSecondProjectHeight] = useState(0);
    // const [secondThumbnailHeight, setSecondThumbnailHeight] = useState(0);

    // const [thirdProjectHeight, setThirdProjectHeight] = useState(0);
    // const [thirdThumbnailHeight, setThirdThumbnailHeight] = useState(0);
    // const [thirdThumbnailWidth, setThirdThumbnailWidth] = useState(0);

    // const [fourthProjectHeight, setFourthProjectHeight] = useState(0);
    // const [fourthThumbnailHeight, setFourthThumbnailHeight] = useState(0);

    // const updateDivHeights = () => {
    //     if (firstProjectRef.current) {
    //         setFirstProjectHeight(firstProjectRef.current.clientHeight);
    //     }
    //     if (firstThumbnailRef.current) {
    //         setFirstThumbnailHeight(firstThumbnailRef.current.clientHeight);
    //     }
    //     if (secondProjectRef.current) {
    //         setSecondProjectHeight(secondProjectRef.current.clientHeight);
    //     }
    //     if (secondThumbnailRef.current) {
    //         setSecondThumbnailHeight(secondThumbnailRef.current.clientHeight);
    //     }
    //     if (thirdProjectRef.current) {
    //         setThirdProjectHeight(thirdProjectRef.current.clientHeight);
    //     }
    //     if (thirdThumbnailRef.current) {
    //         setThirdThumbnailHeight(thirdThumbnailRef.current.clientHeight);
    //     }
    //     if (thirdThumbnailRef.current) {
    //         setThirdThumbnailWidth(thirdThumbnailRef.current.clientWidth);
    //     }
    //     if (fourthProjectRef.current) {
    //         setFourthProjectHeight(fourthProjectRef.current.clientHeight);
    //     }
    //     if (fourthThumbnailRef.current) {
    //         setFourthThumbnailHeight(fourthThumbnailRef.current.clientHeight);
    //     }
    // };



    // useEffect(() => {
    //     updateDivHeights();
    //     window.addEventListener('resize', updateDivHeights);
    
    //     return () => {
    //       window.removeEventListener('resize', updateDivHeights);
    //     };
    //   }, []);

    // const pushDownThumbnailStyleOne = {
    //     transform: `translateY(${firstProjectHeight + 15}px)`,
    //     zIndex: -1,
    // };
    // const pushDownProjectTwo = {
    //     paddingTop: `${firstThumbnailHeight}px`,
    // };
    // const pushDownThumbnailStyleTwo = {
    //     transform: `translateY(${secondProjectHeight + 30}px)`,
    //     zIndex: -1,
    // };
    // const pushDownProjectThree = {
    //     paddingTop: `${secondThumbnailHeight}px`,
    // };
    // const pushDownThumbnailStyleThree = {
    //     transform: `translateY(${thirdProjectHeight + 15}px)`,
    //     zIndex: -1,
    // };
    // const pushDownProjectFour = {
    //     paddingTop: `${thirdThumbnailHeight}px`,
    // };
    // const pushDownThumbnailStyleFour = {
    //     transform: `translateY(${fourthProjectHeight + 15}px)`,
    //     zIndex: -1,
    // };
    // const scaleUpStyle = {
    //     paddingBottom: `${100}px`,
    // };
    // const dynamicWidth = {
    //     width: `${thirdThumbnailWidth - 50}px`,
    //     height: `${(thirdThumbnailWidth - 50) * 0.5625}px`,
    // };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [expand, setExpand] = useState(null);

    const handleExpand = (id) => {
        if(expand === id) {
            setExpand(null);
        } else {
            setExpand(id);
        }

    }

    useEffect(() => {
        console.log(isModalOpen);
    }, [isModalOpen]);

    const projectList = [
        {
            id: 1,
            title: 'NGO Management',
            role: 'Full stack developer',
            description: 'A management system for small and medium non-profit organization',
            techStack: ['Next.js','TailwindCSS' , 'Firebase', 'OAuth'],
            features: ['Manage members, volunteers, and events', 'Mange event\'s attendees and volunteers', 'Schedule volunteers'],
        },
        {
            id: 2,
            title: 'Expense Tracking Mobile App - BillX',
            role: 'Full stack developer',
            description: 'Tracking everyday\'s expense, designed for personal and small business, providing a financial insight.',
            techStack: ['React', 'React Native', 'Firebase', 'Android'],
            features: ['Expense record, visual insight with charts', 'Instant sync with online database', 'Categories, accounts, savings, budget', '10 years expense to assist tax filing, auditing'],
        },
        {
            id: 3,
            title: 'Grow Within Nutrition CRM System - Web development',
            role: 'Full stack developer',
            description: 'Management system for Grow within Nutrition. A small business in Calgary.',
            techStack: ['Next.js','TailwindCSS','React', 'MySQL','JS'],
            features: ['Manage users', 'Selling services', 'Schedule session and assign staffs', 'Display information and advertising'],
        },
        {
            id: 4,
            title: 'Premium Artificial Lifts Ltd.',
            role: 'Full stack developer',
            description: 'Web application for Premium Artificial Lifts, a small business in Calgary',
            techStack: ['React', 'Firebase', 'Android', 'Next-auth', 'OAuth'],
            features: ['Enhance visual recognition', 'Responsive display', 'Authentication', 'Upload, host and download file'],
        },

    ];




    return(
    <div className={`font-normal text-base pt-2 pb-10 ${isNightMode ? 'text-night-light' : 'text-day-light'}  px-6 lg:pl-10 lg:pr-14}`}>
        <h2 className={`font-semibold text-xl my-6 ${isNightMode ? 'text-night' : 'text-day'}`}>MY PROJECTS</h2>

        {/* <div className={`relative project-section my-4 transition-all duration-500 ease-in-out hover:opacity-100 opacity-90 `}>
            <div className={`px-10 pt-10 relative ${isNightMode ? 'bg-stone-900' : 'bg-slate-200'}`}>
                <div className={``}
                style={{zIndex:1,...(viewDemoOne ? {zIndex:2} : {})}}
                ref={firstProjectRef}
                >
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
                            href='https://webdev2project.vercel.app/'
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

        <div
            className='h-[0px] transition-all duration-500 ease-in-out'
            style={pushDownTwo? pushDownProjectTwo : {}}>
        </div>
        <div className={`relative project-section my-4 transition-all duration-500 ease-in-out hover:opacity-100 opacity-90 `}>
            <div className={`px-10 pt-10 ${isNightMode ?' bg-stone-900' : 'bg-slate-200'}`}>
                <div className={``}
                style={{ zIndex:1,...(viewDemoTwo ? {zIndex:2} : {})}}
                ref={secondProjectRef}
                >
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
                        <div className='w-3/12 mt-10 hover:scale-[115%] transition-all ease-in-out duration-300'>
                            <img className="" src='/project/billx/billx1.png' alt="BillX" />
                        </div>
                        <div className='w-3/12 mt-10 hover:scale-[115%] transition-all ease-in-out duration-300'>
                            <img className="" src='/project/billx/billx4.png' alt="BillX" />
                        </div>
                        <div className='w-3/12 mt-10 hover:scale-[115%] transition-all ease-in-out duration-300'>
                            <img className="" src='/project/billx/billx2.png' alt="BillX" />
                        </div>
                        <div className='w-3/12 mt-10 hover:scale-[115%] transition-all ease-in-out duration-300'>
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
        <div
            className='h-[0px] transition-all duration-500 ease-in-out'
            style={pushDownThree? pushDownProjectThree : {}}>
        </div>
        <div className={`relative project-section my-4 transition-all duration-500 ease-in-out hover:opacity-100 opacity-90 `}>
            <div className={`px-10 pt-10 ${isNightMode ?' bg-stone-900' : 'bg-slate-200'}`}>
                <div className={``}
                style={{zIndex:1,...(viewDemoThree ? {zIndex:2} : {})}}
                ref={thirdProjectRef}
                >
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
            style={{zIndex:-1, ...(viewDemoThree ? pushDownThumbnailStyleThree : {}), ...(raiseButtonThree ? {zIndex:3} : {})}}
            ref={thirdThumbnailRef}>
                    <div className='flex flex-row justify-around thumbnail'>
                        <div className='relative flex justify-center w-full p-4'>
                            <iframe style={dynamicWidth} src="https://www.youtube.com/embed/YJk56avuT9c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div> 
                    
                    <div className='flex flex-row w-full mt-2 justify-around'>
                        <a 
                            href='https://github.com/pltduchoang/GWNTemporary/tree/main/frontend'
                            target="_blank"
                            rel="noopener noreferrer"
                            className='w-4/12 text-center'>
                            <div className={`px-3 py-2 hover:scale-105 transition duration-200 ease-in-out ${isNightMode? 'tag-night': 'tag-day'}`}>
                                Github
                            </div>
                        </a>
                        <a 
                            href='https://gwn-temporary.vercel.app/'
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
        <div
            className='h-[0px] transition-all duration-500 ease-in-out'
            style={pushDownFour? pushDownProjectFour : {}}>
        </div>
        <div className={`relative project-section my-4 transition-all duration-500 ease-in-out hover:opacity-100 opacity-90 `}
        style={pushDownFour ? pushDownProjectFour : {}}>
            <div className={`px-10 pt-10 ${isNightMode ?' bg-stone-900' : 'bg-slate-200'}`}>
                <div className={``}
                style={{zIndex:1,...(viewDemoFour ? {zIndex:2} : {})}}
                ref={fourthProjectRef}
                >
                    <h3 className={`font-semibold text-2xl my-3 ${isNightMode ? 'text-night' : 'text-day'}`}>Premium Artificial Lifts Ltd.</h3>
                    <h4 className={`font-semibold text-base mb-3 ${isNightMode ? 'text-night' : 'text-day'}`}>Full stack developer</h4>
                    <p className="text-base font-semibold">Web application for Premium Artificial Lifts, a small business in Calgary</p>
                    <ul className="list-disc list-inside my-3">
                        <li className="text-base font-semibold">Enhance visual recognition</li>
                        <li className="text-base font-semibold">Responsive display</li>
                        <li className="text-base font-semibold">Authentication</li>
                        <li className="text-base font-semibold">Upload, host and download file</li>
                    </ul>
                    <div className="flex flex-wrap">
                        {itemList4.map((item,index) => (
                            <div key={index} className={`rounded-full px-1 mr-1 mt-1 opacity-70 ${isNightMode? 'tag-night' : 'tag-day'}`}>
                                <p  className=" text-base">#{item}</p>
                            </div>
                        ))}
                    </div>
                    {viewDemoFour ? (
                        <div onClick={() => handleToggleDemo(4)}
                        className='hover:cursor-pointer mt-6'>
                            <p className='pb-10'>See less</p>
                        </div>
                    ) : (
                        <div onClick={() => handleToggleDemo(4)}
                        className='hover:cursor-pointer mt-6 '>
                            <p className='pb-10'>See more</p>
                        </div>
                    )}
                </div>
            </div>
            <div className={`w-full absolute top-0 left-0px-10 pb-10 ${isNightMode ?' bg-stone-900' : 'bg-slate-200'} flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${viewDemoFour ? ' opacity-100' : 'opacity-0'}`}
            style={{zIndex:-1, ...(viewDemoFour ? pushDownThumbnailStyleFour : {}), ...(raiseButtonFour ? {zIndex:0} : {})}}
            ref={fourthThumbnailRef}>
                    <div className='flex flex-row justify-around p-4'>    
                    </div>
                    
                    <div className='flex flex-row w-full mt-2 justify-around'>
                        <button 
                            href=''
                            tbuttonrget="_blank"
                            rel="noopener noreferrer"
                            className='w-4/12 text-center'
                            disabled="true">
                            <div className={`px-3 py-2 hover:scale-105 transition duration-200 ease-in-out ${isNightMode? 'tag-night': 'tag-day'}`}>
                                In Progress
                            </div>
                        </button>
                    </div>
                </div>
        </div> */}
        <div>
            {projectList.map((project, index) => (
                <ProjectShowcase
                    key={project.id}
                    project={project}
                    isNightMode={isNightMode}
                    expand={expand}
                    handleExpand={handleExpand}
                >
                    {project.id === 1 && (
                        <div className='w-full'>
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
                                    href='https://webdev2project.vercel.app/'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='w-4/12 text-center'>
                                    <div className={`px-3 py-2 hover:scale-105 transition duration-200 ease-in-out ${isNightMode? 'tag-night': 'tag-day'}`}>
                                        Visit
                                    </div>
                                </a>
                            </div>
                        </div>
                    )}
                    {project.id === 2 && (
                        <div className='w-full'>
                            <div className='flex flex-row justify-around p-4'>
                                <div className='w-3/12 mt-10 hover:scale-[115%] transition-all ease-in-out duration-300'>
                                    <img className="" src='/project/billx/billx1.png' alt="BillX" />
                                </div>
                                <div className='w-3/12 mt-10 hover:scale-[115%] transition-all ease-in-out duration-300'>
                                    <img className="" src='/project/billx/billx4.png' alt="BillX" />
                                </div>
                                <div className='w-3/12 mt-10 hover:scale-[115%] transition-all ease-in-out duration-300'>
                                    <img className="" src='/project/billx/billx2.png' alt="BillX" />
                                </div>
                                <div className='w-3/12 mt-10 hover:scale-[115%] transition-all ease-in-out duration-300'>
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
                    )}
                    {project.id === 3 && (
                        <div className='w-full'>
                            <div className=' justify-around thumbnail'>
                                <div className='w-full px-10 hover:cursor-pointer'
                                onClick={handleToggleModal}>
                                    <img className="w-full rounded-lg shadow-lg" src='/project/gwn-video.png' alt="Grow Within Nutrition" />
                                </div>

                            </div> 
                            
                            <div className='flex flex-row w-full mt-2 justify-around'>
                                <a 
                                    href='https://github.com/pltduchoang/GWNTemporary/tree/main/frontend'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='w-4/12 text-center'>
                                    <div className={`px-3 py-2 hover:scale-105 transition duration-200 ease-in-out ${isNightMode? 'tag-night': 'tag-day'}`}>
                                        Github
                                    </div>
                                </a>
                                <a 
                                    href='https://gwn-temporary.vercel.app/'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='w-4/12 text-center'>
                                    <div className={`px-3 py-2 hover:scale-105 transition duration-200 ease-in-out ${isNightMode? 'tag-night': 'tag-day'}`}>
                                        Visit
                                    </div>
                                </a>
                            </div>
                        </div>
                    )}
                    {project.id === 4 && (
                        <div className='w-full'>
                            <div className='flex flex-row mt-2 justify-around'>
                                <button 
                                    href=''
                                    tbuttonrget="_blank"
                                    rel="noopener noreferrer"
                                    className='w-4/12 text-center'
                                    disabled={true}>
                                    <div className={`px-3 py-2 hover:scale-105 transition duration-200 ease-in-out ${isNightMode? 'tag-night': 'tag-day'}`}>
                                        In Progress
                                    </div>
                                </button>
                            </div>
                        </div>
                    )}
                </ProjectShowcase>
            ))
            }

        </div>
        <div 
            className={`transition absolute top-0 left-0 w-full h-full duration-1000 ease-in ${isNightMode ? 'bg-black' : 'bg-white'} ${isFilterVisible ? ' opacity-60' : 'opacity-0'}`}
            style={{zIndex:-2}}
        />
    </div>
    );
}