import React from "react";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import arcade from "./images/icon-arcade.svg";
import advanced from "./images/icon-advanced.svg";
import pro from "./images/icon-pro.svg";

const SelectPlan = () => {
  const [monthly, setMonthly] = useState(true);

  const highlight = 2;
  return (
    <>
      <div className="p-8 flex w-[100%]">
        <Sidebar highlight={highlight} />
        <div className="  w-[70%] pl-16 pt-8">
          <h1 className="text-[3rem] font-bold text-[#022959]">
            Select your plan
          </h1>
          <p className=" text-[#9699AA] text-[1.5rem] font-thin pb-8">
            You have the option of monthly or yearly billing.
          </p>
          <div className="flex flex-col">
            <div className="flex">
              <div className="flex flex-col border pl-4 pr-16 pt-4 pb-4 rounded-md cursor-pointer mr-4 hover:border-blue-400">
                <img
                  className="  w-[5rem] h-[5rem] pb-[2rem]"
                  src={arcade}
                  alt="icon"
                ></img>
                <h2 className=" pl-2 text-[1rem] font-bold">Arcade</h2>
                {monthly ? (
                  <h3 className="pl-2 pb-4 text-[#9699AA]">$9/mo</h3>
                ) : (
                  <h3>$90/yr</h3>
                )}
              </div>
              <div className="flex flex-col border pl-4 pr-16 pt-4 pb-4 rounded-md cursor-pointer mr-4 hover:border-blue-400">
                <img
                  className=" w-[5rem] h-[5rem] pb-[2rem]"
                  src={advanced}
                  alt="icon"
                ></img>
                <h2 className=" pl-2 text-[1rem] font-bold">Advanced</h2>
                {monthly ? (
                  <h3 className=" pl-2 pb-4 text-[#9699AA]">$12/mo</h3>
                ) : (
                  <h3>$120/yr</h3>
                )}
              </div>
              <div className="flex flex-col border pl-4 pr-16 pt-4 pb-4 rounded-md cursor-pointer hover:border-blue-400">
                <img
                  className=" w-[5rem] h-[5rem] pb-[2rem]"
                  src={pro}
                  alt="icon"
                ></img>
                <h2 className=" pl-2 text-[1rem] font-bold">Pro</h2>
                {monthly ? (
                  <h3 className=" pl-2 pb-4 text-[#9699AA]">$15/mo</h3>
                ) : (
                  <h3>$150/yr</h3>
                )}
              </div>
            </div>
            <div className="flex justify-center items-center border w-[60%] mt-8 h-[3rem] bg-[#D6D9E6] rounded-lg">
              <h2 className=" pl-2 text-[1rem] font-bold pr-2">Monthly</h2>
              <div
                className={`relative rounded-full w-12 h-6 bg-black pr-2 ${
                  monthly ? "bg-green-500" : "bg-red-700"
                } cursor-pointer`}
              >
                <div
                  className={`absolute inset-0 w-5 h-5 transition-transform duration-300 ease-in-out transform bg-white rounded-full ${
                    monthly
                      ? "translate-x-1 translate-y-0.5"
                      : "translate-x-6 translate-y-0.5"
                  }`}
                ></div>
              </div>
              <h2 className=" pl-2 text-[1rem] font-bold">Yearly</h2>
            </div>
            <div className="flex justify-between  w-[70%] pt-16">
              <button className=" bg-white w-[8rem] h-[3rem] text-gray-400 rounded-md font-bold  ">
                Go back
              </button>
              <button className="bg-[#022959] w-[8rem] h-[3rem] text-white rounded-md font-bold ">
                next step
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectPlan;
