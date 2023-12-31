import React from "react";
import sidebarimage from "../images/bg-sidebar-desktop.svg";

const Sidebar = ({ highlight }) => {
  return (
    <>
      <div className="w-[100%]  lg:w-[30%] h-[90vh] rounded-md relative">
        <img
          className=" min-w-full h-[90vh] hidden lg:block"
          src={sidebarimage}
          alt="background image"
        ></img>

        <div className="absolute flex lg:flex-col top-[5%] left-[15%]">
          {/* div ONE */}
          <div className="flex justify-around items-center  w-[280px] mb-[3rem]">
            <div
              className={`w-[3rem] h-[3rem] text-[1.5rem] rounded-full border border-white flex justify-center items-center  font-ubuntu ${
                highlight === 1 ? "bg-[#BEE2FD] text-[black]" : "text-white"
              }`}
            >
              1
            </div>
            <div className="flex flex-col  w-[70%] ">
              <p className=" font-ubuntu text-[#ABBCFF] text-[1rem] uppercase">
                Step 1
              </p>
              <h2 className=" font-ubuntu font-bold text-white text-[1.2rem] uppercase tracking-widest">
                Your Info
              </h2>
            </div>
          </div>
          {/* div TWO */}
          <div className="flex justify-around items-center  w-[280px] mb-[3rem]">
            <div
              className={`w-[3rem] h-[3rem] text-[1.5rem] rounded-full border border-white flex justify-center items-center  font-ubuntu ${
                highlight === 2 ? "bg-[#BEE2FD] text-[black]" : "text-white"
              }`}
            >
              2
            </div>
            <div className="flex flex-col  w-[70%]">
              <p className=" font-ubuntu text-[#ABBCFF] text-[1rem] uppercase">
                Step 2
              </p>
              <h2 className=" font-ubuntu font-bold text-white text-[1.2rem] uppercase tracking-widest">
                Select Plan
              </h2>
            </div>
          </div>
          {/* div THREE */}
          <div className="flex justify-around items-center  w-[280px] mb-[3rem]">
            <div
              className={`w-[3rem] h-[3rem] text-[1.5rem] rounded-full border border-white flex justify-center items-center  font-ubuntu ${
                highlight === 3 ? "bg-[#BEE2FD] text-[black]" : "text-white"
              }`}
            >
              3
            </div>
            <div className="flex flex-col  w-[70%]">
              <p className=" font-ubuntu text-[#ABBCFF] text-[1rem] uppercase">
                Step 3
              </p>
              <h2 className=" font-ubuntu font-bold text-white text-[1.2rem] uppercase tracking-widest">
                Add-ons
              </h2>
            </div>
          </div>
          {/* div FOUR */}
          <div className="flex justify-around items-center  w-[280px] mb-[3rem]">
            <div
              className={`w-[3rem] h-[3rem] text-[1.5rem] rounded-full border border-white flex justify-center items-center  font-ubuntu ${
                highlight === 4 ? "bg-[#BEE2FD] text-[black]" : "text-white"
              }`}
            >
              4
            </div>
            <div className="flex flex-col  w-[70%]">
              <p className=" font-ubuntu text-[#ABBCFF] text-[1rem] uppercase">
                Step 4
              </p>
              <h2 className=" font-ubuntu font-bold text-white text-[1.2rem] uppercase tracking-widest">
                Summary
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
