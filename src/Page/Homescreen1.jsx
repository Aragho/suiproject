


import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiHide } from "react-icons/bi";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { PiCreditCard } from "react-icons/pi";
import { BsSend } from "react-icons/bs";
import { MdNavigateNext } from "react-icons/md";
import coin from "../assets/coins.png";
import card from "../assets/card.png";
import free from "../assets/free.png";
import { IoCall } from "react-icons/io5";
import { IoIosFootball } from "react-icons/io";
import { RiArrowUpDownLine } from "react-icons/ri";
import { FaClockRotateLeft } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { BsBarChartFill } from "react-icons/bs";
import { FiGrid } from "react-icons/fi";


const Homescreen1 = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const itemsRef = useRef([]);
  const containerRef = useRef(null);
  useEffect(() => {
    const updatePosition = () => {
      if (activeIndex !== null && 
          itemsRef.current[activeIndex] && 
          containerRef.current) {
        
        const item = itemsRef.current[activeIndex];
        const container = containerRef.current;
        
        const itemRect = item.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        
        const position = itemRect.left - containerRect.left + (itemRect.width / 2) - 25;
        setIndicatorPosition(position);
      }
    };

    updatePosition();
    
  
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [activeIndex]);

  const sections = [
    {
      title: "Add Money",
      description: "Get more from your account",
      image: coin
    },
    {
      title: "Create a debit card",
      description: "Get more from your account",
      image: card
    },
    {
      title: "Earn ₦2,000 for inviting friends to FastEGO",
      description: "Get more from your account",
      image: free
    },
  ];

  const access = [
    { title: "Airtime", icon: <IoCall className="text-[#facc50]" /> },
    { title: "Betting", icon: <IoIosFootball className="text-[#22c9eb]" /> },
    { title: "Data Bundle", icon: <RiArrowUpDownLine className="text-[#4ad286]" /> },
  ];

  const footer = [
    { title: "Home", icon: <GoHomeFill /> },
    { title: "Send", icon: <BsSend /> },
    { title: "Invest", icon: <BsBarChartFill /> },
    { title: "Cards", icon: <PiCreditCard /> },
    { title: "More", icon: <FiGrid /> },
  ];

  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-6 w-full max-w-screen-xl mx-auto">
      <div className="relative w-full max-w-5xl min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] bg-gradient-to-l from-[#22A1F7] to-[#002F73] rounded-tl-3xl rounded-tr-3xl shadow-lg p-6">
    
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <FaRegUserCircle className="text-2xl" />
            <div>
              <h1 className="text-lg font-semibold leading-[120%] tracking-[-2%]">
                Hi, Mystery Miracle
              </h1>
              <h3 className="text-sm font-light">Welcome, let's start making payments</h3>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <BiHide className="text-2xl cursor-pointer" />
            <IoMdNotificationsOutline className="text-2xl cursor-pointer" />
          </div>
        </div>

        <div className="text-white mt-6">
          <h2 className="font-thin leading-[150%] tracking-[-2%]">Total Balance</h2>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">₦0.00</h1>
            <button aria-label="More options" className="w-12 h-12 shadow-md rounded-full flex items-center justify-center">
  <HiDotsHorizontal className="text-2xl" />
</button>

          </div>
          <h4 className="font-thin leading-[150%] tracking-[-2%]">Last updated 2 min ago.</h4>
        </div>

    
        <div className="absolute bottom-0 w-full max-w-[90%] md:max-w-[80%] lg:max-w-[95%] mx-auto h-14 md:h-16 lg:h-20 bg-[#3D87E6] rounded-tl-2xl rounded-tr-2xl overflow-hidden flex justify-between items-center px-6">
          <h1 className="text-white text-[20px] font-medium">FastEGO</h1>
          <div className="w-96 h-44 bg-[#3D4364] rounded-full absolute -top-10 right-16 translate-x-[50%]  ">
  <img src={logo} alt="Logo" className="w-16 h-40 object-contain ml-44" />
</div>

        </div>
      </div>

     
      <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col items-center">
      <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          <div className="flex flex-col items-center">
          <button className="w-[80px] h-[80px] bg-[#F1F5F9] rounded-full flex justify-center items-center text-[#235697]">
  <IoMdAddCircleOutline className="text-3xl md:text-4xl" />
</button>

            <h1 className="mt-2 text-sm font-medium text-gray-700">Add Money</h1>
          </div>
          <div className="flex flex-col items-center">
            <button className="w-[80px] h-[80px] bg-[#F1F5F9] rounded-full flex justify-center items-center text-[#235697]">
              <PiCreditCard className="text-3xl md:text-4xl" />
            </button>
            <h1 className="mt-2 text-sm font-medium text-gray-700">My Cards</h1>
          </div>
          <div className="flex flex-col items-center">
            <button className="w-[80px] h-[80px] bg-[#F1F5F9] rounded-full flex justify-center items-center text-[#235697]">
              <BsSend className="text-3xl md:text-4xl" />
            </button>
            <h1 className="mt-2 text-sm font-medium text-gray-700">Transfer</h1>
          </div>
        </div>
      </div>
      <h1 className="w-full h-1 bg-gray-100 mt-10"></h1>
      <div className="self-start text-left w-full">
  <h1 className="text-[#3A3C4C] text-xl font-semibold tracking-[-2%] leading-[120%] mt-3">
    Get Started
  </h1>

  <div className="mt-3 space-y-4 sm:space-y-6">
  {sections.map((section, index) => (
    <div key={index} className="w-full">
   
     <div className="min-h-28 py-4 text-white flex items-center justify-between px-4 rounded-lg shadow-md">
        <div className="flex items-center gap-4">
         
          <div className="w-[80px] h-[80px] bg-[#F1F5F9] rounded-full flex justify-center items-center">
            <img src={section.image} alt={section.title} className="w-[60%] h-[60%] object-contain" />
          </div>

         
          <div className="max-w-[200px] sm:max-w-none">
            <h1 className="text-lg font-semibold tracking-[-2%] truncate text-[#3B3D4B]">
              {index === 2 ? (
                <>
                  Earn ₦2,000 for inviting friends to{" "}
                  <span className="inline sm:hidden">F...</span>
                  <span className="hidden sm:inline">FastEGO</span>
                </>
              ) : (
                section.title
              )}
            </h1>
            <p className="text-sm text-[#7D7C93] ">{section.description}</p>
          </div>
        </div>

       
        <MdNavigateNext className="text-2xl text-[#7D7C93]" />
      </div>

      {index < sections.length - 1 && <div className="w-full h-px bg-gray-100"></div>}
    </div>
  ))}
</div>
<p className="mt-6 text-[#3A3C4C] font-semibold text-lg">Quick access</p>

<div className="flex grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-5">
  {access.map((item, index) => (
    <div key={index} className="flex items-center">
      
      <div className="w-full max-w-[120px] sm:max-w-[160px] md:max-w-[180px] h-10 bg-[#F1F5F9] rounded-lg flex  justify-center items-center px-3 gap-2">
        {item.icon}
        <h1 className="text-xs sm:text-sm md:text-base text-[#3B3D4B] whitespace-nowrap">{item.title}</h1>
      </div>
    </div>
  ))}
</div>
<p className="mt-6 text-[#3A3C4C] font-semibold text-lg">
   TODAY
 </p>
 <div className="flex items-center mt-3 gap-4">
 
   <div className="w-[60px] h-[60px] bg-[#F1F5F9] rounded-full flex justify-center items-center">
     <FaClockRotateLeft className="text-[#235697] text-2xl" />
   </div>    


   <p className="text-[#7D7C93]">You haven't made any transactions yet</p>
 </div>
 <div className="relative w-full flex flex-col mt-6 px-2 sm:px-4">
        <div className="absolute -top-1 left-0 right-0 w-full h-[3px] bg-gray-300 rounded-full">
          <div
            className="absolute h-[3px] bg-[#18A0FB] rounded-full transition-all duration-300"
            style={{
              width: "50px",
              left: activeIndex !== null ? `${indicatorPosition}px` : "0px",
              opacity: activeIndex !== null ? 1 : 0,
              transform: activeIndex !== null ? 'translateX(0)' : 'translateX(-25px)'
            }}
          ></div>
        </div>

        <div 
          ref={containerRef}
          className="grid grid-cols-5 gap-1 sm:gap-2 text-[#7D7C93] relative"
        >
          {footer.map((item, index) => (
            <div
              key={index}
              ref={el => itemsRef.current[index] = el}
              className="flex flex-col items-center cursor-pointer relative group px-1 sm:px-2 py-2"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <h1 className={`transition-all duration-300 ${
                activeIndex === index
                  ? "bg-gradient-to-l from-[#18A0FB] to-[#0A3A5A] bg-clip-text text-transparent"
                  : "text-[#7D7C93]"
              } text-xl sm:text-2xl font-bold`}>
                {item.icon}
              </h1>
              <h1 className={`transition-all duration-300 mt-1 text-xs sm:text-sm font-medium ${
                activeIndex === index
                  ? "bg-gradient-to-l from-[#18A0FB] to-[#0A3A5A] text-transparent bg-clip-text"
                  : "text-[#7D7C93]"
              }`}>
                {item.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
      
    


</div>

     
    </div>
  );
};

export default Homescreen1;