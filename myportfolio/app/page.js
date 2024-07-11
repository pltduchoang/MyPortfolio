// src/resume/page.js:
"use client";
import React, { useEffect, useState } from "react";
import SocialIcons from "./src/components/SocialIcons";
import Background from "./src/components/Background";
import Bio from "./src/components/Bio";
import About from "./src/components/About";
import Education from "./src/components/Education";
import { useTheme } from "./src/utils/ThemeContext";
import Achievements from "./src/components/Achievements";
import Projects from "./src/components/Projects";
import Skills from "./src/components/Skills";
import Menu from "./src/components/Menu";
import MenuVertical from "./src/components/MenuVertical";
import Modal from "./src/components/Modal";

export default function Page() {
  const {
    isNightMode,
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
    setDestinationName,
  } = useTheme(); // Corrected line
  const [hideContent, setHideContent] = useState(true);
  const [flyMessage, setFlyMessage] = useState(false);
  const [showDestinationList, setShowDestinationList] = useState(false);
  const [renderList, setRenderList] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(800);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    setTimeout(() => {
      setHideContent(false);
    }, 1300);
    setTimeout(() => {
      setFlyMessage(true);
    }, 200);
    setTimeout(() => {
      setFlyMessage(false);
    }, 1000);
  }, []);

  useEffect(() => {
    setHideContent(true);
    setTimeout(() => {
      setHideContent(false);
    }, 1500);
    setTimeout(() => {
      setFlyMessage(true);
    }, 300);
    setTimeout(() => {
      setFlyMessage(false);
    }, 1500);
  }, [currentDestination]);

  useEffect(() => {
    setTimeout(() => {
      setFlyMessage(true);
    }, 600);
    setTimeout(() => {
      setFlyMessage(false);
    }, 4500);
  }, [isNightMode]);

  useEffect(() => {
    console.log("destmenu", isDestinationMenuVisible);
  }, [isDestinationMenuVisible]);
  const handleDoneTransition = (e) => {
    if (e) {
      setHideContent(false);
    }
  };

  const updateDivHeights = () => {
    if (window.innerWidth) {
      setScreenWidth(window.innerWidth);
    }
  };

  //update screensize eventlistner
  useEffect(() => {
    updateDivHeights();
    window.addEventListener("resize", updateDivHeights);
    return () => {
      window.removeEventListener("resize", updateDivHeights);
    };
  }, []);

  const handleBeginTransition = (e) => {
    if (e) {
      setHideContent(true);
    }
  };

  useEffect(() => {
    if (isDestinationMenuVisible) {
      setTimeout(() => {
        setShowDestinationList(true);
      }, 200);
      setTimeout(() => {
        setRenderList(true);
      }, 700);
    } else {
      setRenderList(false);
      setShowDestinationList(false);
    }
  }, [isDestinationMenuVisible]);

  const handleShowBackground = () => {
    if (!hideContent) {
      setHideContent(true);
      setFlyMessage(true);
    } else {
      setHideContent(false);
      setFlyMessage(false);
    }
  };

  const [showContact, setShowContact] = useState(false);
  const [showContactList, setShowContactList] = useState(false);
  const handleShowContact = () => {
    if (!showContact) {
      setIsDestinationMenuVisible(false);
      setShowContact(true);
      setTimeout(() => {
        setShowContactList(true);
      }, 350);
    } else {
      setShowContactList(false);
      setShowContact(false);
    }
  };
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/pltduchoang",
      svg: (
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
        </svg>
      ),
    },
    // {
    //   name: 'Instagram',
    //   url: 'https://www.instagram.com/matrixboy10/',
    //   svg: (
    //     <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    //       <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
    //     </svg>      ),
    // },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/hoanganhduc/",
      svg: (
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
        </svg>
      ),
    },
    {
      name: "Gmail",
      url: "mailto:plt.duchoang@gmail.com",
      svg: (
        <svg
          className="mt-1"
          fill="none"
          width="70"
          height="70"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M25.49,30H4.5A3.35,3.35,0,0,1,2,29a3.35,3.35,0,0,1-1-2.48V5.5A3.35,3.35,0,0,1,2,3,3.35,3.35,0,0,1,4.5,2h21A3.35,3.35,0,0,1,28,3,3.35,3.35,0,0,1,29,5.5v21A3.52,3.52,0,0,1,25.49,30Zm-3-7.17a2.93,2.93,0,0,0,1.71-.37,1.41,1.41,0,0,0,.49-1.22V10.36a1.55,1.55,0,0,0-.47-1.13,1.51,1.51,0,0,0-1.13-.47H6.83a1.55,1.55,0,0,0-1.13.47,1.53,1.53,0,0,0-.47,1.12V21.24a1.53,1.53,0,0,0,.47,1.12,1.55,1.55,0,0,0,1.13.47Zm-14.7-.76V13.14l6.46,4.45Zm14.14.37H8l6.63-4.63a.6.6,0,0,0,.34.16,1,1,0,0,0,.33-.16Zm-7-8.15L8,9.16H21.9Zm7.14,7.78-6.46-4.48,6.46-4.45Z" />
        </svg>
      ),
    },
  ];

  const destinations = [
    { name: "Shirakawa-go, Japan", folder: "shirakawa-go" },
    { name: "Amalfi, Italy", folder: "amalfi" },
    { name: "Berne, Switzerland", folder: "berne" },
    { name: "Guanajuato, Mexico", folder: "guanajuato" },
    { name: "Hallstatt, Austria", folder: "hallstatt" },
    { name: "Rideau Canal, Canada", folder: "rideaucanal" },
    { name: "Vatican City, Italy", folder: "vatican" },
    { name: "Wulingyuan, China", folder: "wulingyuan" },
    { name: "Dolomite Mountains, Italy", folder: "dolomites" },
    { name: "Oporto, Portugal", folder: "porto" },
    { name: "Yosemite, USA", folder: "yosemite" },
  ];

  //scroll to bottom
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight;
      if (isBottom) {
        // User has scrolled to the bottom of the page
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="w-screen">
      <div
        className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-transparent"
        style={{ zIndex: -1 }}
      >
        <h1
          className={`text-5xl font-serif text-white transition-all duration-300 ease-in-out opacity-0 ${
            flyMessage ? "opacity-80 translate-x-1 -translate-y-1" : ""
          }`}
        >
          {destinationName}
        </h1>
        <h4
          className={`absolute bottom-0 text-base font-serif text-white transition-all duration-300 ease-in-out opacity-0 ${
            flyMessage ? "opacity-80 translate-x-1 -translate-y-1" : ""
          }`}
        >
          Photos by SONY Alpha Clock
        </h4>
      </div>
      <div
        className={`fixed top-3 left-6 lg:left-24 rounded-full transition-all duration-700 ease-in-out bg-slate-700 w-9 h-9 ${
          isNightMode ? "menu-bg-night" : "menu-bg-day"
        }  ${isDestinationMenuVisible ? "destMenuShow" : "destMenuHidden"}`}
        style={{ zIndex: 1 }}
      ></div>
      <div
        className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-transparent flex-col ${
          showDestinationList ? "" : "hidden"
        }`}
        style={{ zIndex: 1 }}
      >
        <h2
          className={`text-xl md:text-3xl font-extrabold font-serif -translate-y-10 ${
            isNightMode ? " text-night" : "text-day"
          }`}
        >
          Which destination is on your mind?
        </h2>
        {destinations.map((destination, index) => (
          <div
            key={index}
            className={`m-2 flex justify-center items-center bg-transparent transition duration-500 ease-in-out hover:scale-105 hover:text-white ${
              isNightMode ? "text-night" : "text-day"
            } ${showDestinationList ? "opacity-100" : "opacity-0"}`}
          >
            <button
              onClick={() => {
                setCurrentDestination(destination.folder);
                setDestinationName(destination.name);
                setIsDestinationMenuVisible(false);
              }}
            >
              <h1 className="text-xl font-serif inline-block">
                {destination.name}
              </h1>
            </button>
          </div>
        ))}
      </div>

      <Background
        doneTransition={handleDoneTransition}
        beginTransition={handleBeginTransition}
      />
      <div
        className={`${
          hideContent ? "scale-0" : ""
        } transition-all duration-300 ease-in-out`}
        style={{ zIndex: 2 }}
      >
        <Menu />
      </div>
      <div
        className={` transition-all duration-500 ease-in-out pt-24 ${
          hideContent ? "opacity-0" : "opacity-100"
        } lg:flex lg:relative lg:justify-end`}
      >
        <div className="hidden lg:w-6/12 lg:flex lg:flex-col lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:justify-center lg:items-center">
          <div id="bio" className={`p-10 relative lg:w-9/12 xl:w-7/12`}>
            <div className="w-80 md:w-1/2 lg:w-10/12 relative">
              <Bio />
            </div>
            <div className="ml-6 my-16" style={{ zIndex: 2 }}>
              <MenuVertical />
            </div>
            <div className="w-80 -translate-x-6">
              <SocialIcons />
            </div>
            <div
              className={`transition absolute top-0 left-0 w-full h-full duration-1000 ease-in ${
                isNightMode ? "bg-black" : "bg-white"
              } ${isFilterVisible ? " opacity-90" : "opacity-0"}`}
              style={{ zIndex: -1 }}
            />
          </div>
        </div>
        <div
          id="bio"
          className={`absolute top-0 left-0 mb-20 flex flex-col w-full h-screen justify-center items-center ${
            visibleSections["bio"] ? "visible" : ""
          } lg:w-6/12 lg:h-screen lg:hidden`}
        >
          <div className="relative justify-center w-80 p-6 md:w-96">
            <div className="">
              <Bio />
            </div>
            <div className="mt-10">
              <SocialIcons />
            </div>
            <div
              className={`transition absolute top-0 left-0 w-full h-full duration-1000 ease-in ${
                isNightMode ? "bg-black" : "bg-white"
              } ${isFilterVisible ? " opacity-90" : "opacity-0"}`}
              style={{ zIndex: -1 }}
            />
          </div>
        </div>
        <div className="absolute top-full lg:pl-10 lg:w-6/12 lg:absolute lg:top-0 ">
          <div
            className={`relative section w-full pt-8 px-6 lg:pl-10 lg:pr-14 ${
              visibleSections["about"] ? "visible" : ""
            }`}
            id="about"
          >
            <div className="lg:mt-24">
              <About />
            </div>
            <div
              className={`transition absolute top-0 left-0 w-full h-full duration-1000 ease-in ${
                isNightMode ? "bg-black" : "bg-white"
              } ${isFilterVisible ? " opacity-90" : "opacity-0"}`}
              style={{ zIndex: -1 }}
            />
          </div>
          <div
            className={`relative section w-full pt-8 px-6 lg:pl-10 lg:pr-14  ${
              visibleSections["education"] ? "visible" : ""
            }`}
            id="education"
          >
            <Education />
            <Achievements />
            <div
              className={`transition absolute top-0 left-0 w-full h-full duration-1000 ease-in ${
                isNightMode ? "bg-black" : "bg-white"
              } ${isFilterVisible ? " opacity-90" : "opacity-0"}`}
              style={{ zIndex: -1 }}
            />
          </div>
          {/* <div className={`relative section w-full pt-8 px-6 lg:pl-10 lg:pr-14 ${visibleSections['achievements'] ? 'visible' : ''}`} id='achievements'>
                        <Achievements />
                        <div 
                            className={`transition absolute top-0 left-0 w-full h-full duration-1000 ease-in ${isNightMode ? 'bg-black' : 'bg-white'} ${isFilterVisible ? ' opacity-90' : 'opacity-0'}`}
                            style={{zIndex:-1}}
                        />
                    </div> */}
          <div
            className={` relative section w-full pt-8 px-6 lg:pl-10 lg:pr-14 ${
              visibleSections["skills"] ? "visible" : ""
            }`}
            id="skills"
          >
            <Skills />
            <div
              className={`transition absolute top-0 left-0 w-full h-full duration-1000 ease-in ${
                isNightMode ? "bg-black" : "bg-white"
              } ${isFilterVisible ? " opacity-60" : "opacity-0"}`}
              style={{ zIndex: -1 }}
            />
          </div>
          <div
            className={`section w-full pt-8  ${
              visibleSections["projects"] ? "visible" : ""
            }`}
            id="projects"
          >
            <Projects handleToggleModal={handleToggleModal} />
          </div>
        </div>
      </div>

      <div
        className={`flex flex-row w-full justify-between px-6 fixed bottom-3 transition-all duration-700 ease-in-out ${
          isNightMode ? "menu-text-night" : "menu-text-day"
        } ${isFilterVisible ? "" : "translate-y-24"} lg:pl-24 lg:pr-16`}
      >
        <div
          className={`p-2 rounded-full flex justify-between items-center opacity-100 transition duration-300 ease-in-out hover:cursor-pointer hover:scale-105 hover:opacity-100 ${
            isNightMode ? "item-night text-night" : "item-day text-day"
          } ${isDestinationMenuVisible ? "hidden" : ""} ${
            showContactList ? " scale-0" : ""
          }`}
          style={showContactList ? { zIndex: 3 } : { zIndex: 2 }}
          onClick={handleShowBackground}
        >
          <svg
            fill={`${isNightMode ? "#214177" : "#82a6cb"}`}
            stroke={`${isNightMode ? "#214177" : "#82a6cb"}`}
            strokeWidth="0"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 20h18a1 1 0 0 0 .864-1.504l-7-12c-.359-.615-1.369-.613-1.729 0L9.866 12.1l-1.02-1.632A.998.998 0 0 0 8 10h-.001a1 1 0 0 0-.847.47l-5 8A1 1 0 0 0 3 20zM14 8.985 19.259 18h-5.704l-2.486-3.987L14 8.985zm-5.999 3.9L11.197 18H4.805l3.196-5.115zM6 8c1.654 0 3-1.346 3-3S7.654 2 6 2 3 3.346 3 5s1.346 3 3 3zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        </div>

        <div
          className={` p-2 rounded-full flex justify-between items-center opacity-100 transition duration-300 ease-in-out hover:cursor-pointer hover:scale-105 hover:opacity-100 ${
            isNightMode ? "item-night text-night" : "item-day text-day"
          } ${isDestinationMenuVisible ? "hidden" : ""} ${
            hideContent ? "scale-0" : ""
          }`}
          style={showContactList ? { zIndex: 3 } : { zIndex: 2 }}
          onClick={handleShowContact}
        >
          <svg
            fill={`${isNightMode ? "#214177" : "#82a6cb"}`}
            stroke={`${isNightMode ? "#214177" : "#82a6cb"}`}
            strokeWidth="0.3"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
            />
          </svg>
        </div>
        <div
          className={`fixed bottom-10 right-6 lg:right-16 rounded-full transition-all duration-700 ease-in-out bg-slate-700 w-9 h-9 ${
            isNightMode ? "menu-bg-night" : "menu-bg-day"
          }  ${showContact ? "destMenuShow" : "destMenuHidden"}`}
          style={{ zIndex: 1 }}
        ></div>
        <div
          className={`fixed top-0 left-0 w-full h-full flex items-center bg-transparent flex-col pr-4 ${
            showContactList ? "" : "hidden"
          }`}
          style={{ zIndex: 1 }}
        >
          <div className="flex flex-row w-full md:w-8/12 lg:w-6/12 h-full justify-evenly items-center">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:scale-105 transition duration-300 ease-in-out ${
                  isNightMode ? "social-icon-night" : "social-icon"
                }`}
              >
                {link.svg}
              </a>
            ))}
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleToggleModal}>
        <div className="w-full xl:w-9/12">
          <iframe
            width={screenWidth > 1024 ? screenWidth * 0.6 : screenWidth * 0.8}
            height={
              screenWidth > 1024
                ? screenWidth * 0.6 * 0.5625
                : screenWidth * 0.8 * 0.5625
            }
            src="https://www.youtube.com/embed/YJk56avuT9c"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </main>
  );
}
