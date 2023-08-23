import React from "react";
import Sidebar from "./components/Sidebar";
import arcadeImage from "./images/icon-arcade.svg";
import advancedImage from "./images/icon-advanced.svg";
import proImage from "./images/icon-pro.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectedPlan } from "./features/selectSlice";
import { monthOrYear, cardSelection } from "./features/selectSlice";
import { useNavigate } from "react-router";

const SelectPlan = () => {
  const plan = useSelector(selectedPlan);

  const dispatch = useDispatch();

  const handleArcade = () => {
    dispatch(cardSelection({ arcade: true, advanced: false, pro: false }));
  };

  const handleAdvanced = () => {
    dispatch(cardSelection({ arcade: false, advanced: true, pro: false }));
  };
  const handlePro = () => {
    dispatch(cardSelection({ arcade: false, advanced: false, pro: true }));
  };

  const navigate = useNavigate();

  const handleNextBtn = () => {
    navigate("/addons");
  };

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
              <div
                onClick={handleArcade}
                className={`flex flex-col border pl-4 pr-16 pt-4 pb-4 rounded-md cursor-pointer mr-4 hover:border-blue-400 ${
                  plan.arcade ? "bg-[#F8F9FF] border-[#483EFF]" : ""
                }`}
              >
                <img
                  className="  w-[5rem] h-[5rem] pb-[2rem]"
                  src={arcadeImage}
                  alt="icon"
                ></img>
                <h2 className=" pl-2 text-[1rem] font-bold">Arcade</h2>
                {plan.monthly ? (
                  <h3 className="pl-2 pb-4 text-[#9699AA]">$9/mo</h3>
                ) : (
                  <h3 className="pl-2 pb-4 text-[#9699AA]">$90/yr</h3>
                )}
              </div>
              <div
                onClick={handleAdvanced}
                className={`flex flex-col border pl-4 pr-16 pt-4 pb-4 rounded-md cursor-pointer mr-4 hover:border-blue-400 ${
                  plan.advanced ? "bg-[#F8F9FF] border-[#483EFF]" : ""
                }`}
              >
                <img
                  className=" w-[5rem] h-[5rem] pb-[2rem]"
                  src={advancedImage}
                  alt="icon"
                ></img>
                <h2 className=" pl-2 text-[1rem] font-bold">Advanced</h2>
                {plan.monthly ? (
                  <h3 className=" pl-2 pb-4 text-[#9699AA]">$12/mo</h3>
                ) : (
                  <h3 className="pl-2 pb-4 text-[#9699AA]">$120/yr</h3>
                )}
              </div>
              <div
                onClick={handlePro}
                className={`flex flex-col border pl-4 pr-16 pt-4 pb-4 rounded-md cursor-pointer mr-4 hover:border-blue-400 ${
                  plan.pro ? "bg-[#F8F9FF] border-[#483EFF]" : ""
                }`}
              >
                <img
                  className=" w-[5rem] h-[5rem] pb-[2rem]"
                  src={proImage}
                  alt="icon"
                ></img>
                <h2 className=" pl-2 text-[1rem] font-bold">Pro</h2>
                {plan.monthly ? (
                  <h3 className=" pl-2 pb-4 text-[#9699AA]">$15/mo</h3>
                ) : (
                  <h3 className="pl-2 pb-4 text-[#9699AA]">$150/yr</h3>
                )}
              </div>
            </div>
            <div
              onClick={() => dispatch(monthOrYear())}
              className="flex justify-center items-center border w-[60%] mt-8 h-[3rem] bg-[#D6D9E6] rounded-lg"
            >
              <h2 className=" pl-2 text-[1rem] font-bold pr-2">Monthly</h2>
              <div
                className={`relative rounded-full w-12 h-6 bg-black pr-2 ${
                  plan.monthly ? "bg-[#022959]" : "bg-[#022959]"
                } cursor-pointer`}
              >
                <div
                  className={`absolute inset-0 w-5 h-5 transition-transform duration-300 ease-in-out transform bg-white rounded-full ${
                    plan.monthly
                      ? "translate-x-1 translate-y-0.5"
                      : "translate-x-6 translate-y-0.5"
                  }`}
                ></div>
              </div>
              <h2 className=" pl-2 text-[1rem] font-bold">Yearly</h2>
            </div>
            <div className="flex justify-between  w-[70%] pt-16">
              <button
                onClick={() => navigate(-1)}
                className=" bg-white w-[8rem] h-[3rem] text-gray-400 rounded-md font-bold  "
              >
                Go back
              </button>
              <button
                onClick={handleNextBtn}
                className="bg-[#022959] w-[8rem] h-[3rem] text-white rounded-md font-bold "
              >
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
