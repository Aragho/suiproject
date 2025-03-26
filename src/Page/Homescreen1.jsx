import React from "react";
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
const Homescreen1 = () => {
    const sections = [
        {
          title: "Add Money",
          description: "Get more from your account",
          image:coin
        },
        {
          title: "Create a debit card",
          description: "Get more from your account",
          image:card
        },
        {
          title: "Earn ₦ 2,00 for inviting friends to FastEGO ",
          description: "Get more from your account",
          image:free
        },
      ];
  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-12 py-6">
      {/* Top Section */}
      <div className="relative w-full max-w-5xl min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] bg-gradient-to-l from-[#18A0FB] to-[#0A3A5A] rounded-tl-3xl rounded-tr-3xl shadow-lg p-6">
        
        {/* Header */}
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

        {/* Balance Section */}
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

        {/* Bottom Bar */}
        <div className="absolute bottom-0 w-full max-w-[90%] md:max-w-[80%] lg:max-w-[95%] mx-auto h-14 md:h-16 lg:h-20 bg-[#3D87E6] rounded-tl-2xl rounded-tr-2xl overflow-hidden flex justify-between items-center px-6">
          <h1 className="text-white text-[20px] font-medium">FastEGO</h1>
          <div className="w-96 h-44 bg-[#3D4364] rounded-full absolute -top-10 right-0 translate-x-1/2"></div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-12 flex flex-col items-center">
        {/* Icons Section */}
        <div className="flex gap-8 md:gap-12">
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

  <div className="mt-3">
  {sections.map((section, index) => (
    <div key={index} className="w-full">
      {/* Section Box */}
      <div className="h-28  text-white flex items-center justify-between px-4 rounded-lg shadow-md">
        <div className="flex items-center gap-4">
          {/* Circular Image Container */}
          <div className="w-[80px] h-[80px] bg-[#F1F5F9] rounded-full flex justify-center items-center">
            <img src={section.image} alt={section.title} className="w-[60%] h-[60%] object-contain" />
          </div>

          {/* Text Content */}
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

        {/* Arrow Icon */}
        <MdNavigateNext className="text-2xl text-[#7D7C93]" />
      </div>

      {/* Separator Line (Except after the last item) */}
      {index < sections.length - 1 && <div className="w-full h-1 bg-gray-100 my-6"></div>}
    </div>
  ))}
</div>
</div>

     
    </div>
  );
};

export default Homescreen1;
