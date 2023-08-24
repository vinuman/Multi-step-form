import React from "react";
import Sidebar from "./components/Sidebar";
import { useNavigate } from "react-router-dom";
import { selectedAddOns } from "./features/addSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggleOne, toggleTwo, toggleThree } from "./features/addSlice";

const AddOns = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const activeAddOns = useSelector(selectedAddOns);
  const highlight = 3;

  const handleOnline = () => {
    dispatch(toggleOne(!activeAddOns.online_services));
  };
  const handleStorage = () => {
    dispatch(toggleTwo(!activeAddOns.large_storage));
  };

  const handleCustom = () => {
    dispatch(toggleThree(!activeAddOns.custom_profle));
  };

  return (
    <>
      <div className=" p-8 flex w-[100%]">
        <Sidebar highlight={highlight} />
        <div className="  w-[70%] pl-16 pt-8">
          <h1 className="text-[3rem] font-bold text-[#022959]">Pick add-ons</h1>
          <p className=" text-[#9699AA] text-[1.5rem] font-thin pb-8">
            Add-ons help enhance your gaming experience.
          </p>
          <div className=" flex flex-col">
            {/*  First div */}

            <div
              onClick={handleOnline}
              className={`${
                activeAddOns.online_services
                  ? "bg-[#F8F9FF] border-[#483EFF]"
                  : "border-gray-300"
              } flex border  w-[70%] h-[6rem] rounded-md items-center p-4 hover:border-[#483EFF] cursor-pointer mb-4`}
            >
              <input
                checked={activeAddOns.online_services ? true : false}
                type="checkbox"
                id="1"
                className="w-[1.2rem] h-[1.2rem] cursor-pointer rounded-md mr-8"
              />
              <div className=" flex flex-col  w-[50%]">
                <h2 className="font-bold text-[1rem]">Online Service</h2>
                <p className="text-[#9699AA] font-light">
                  Access to multiplayer games
                </p>
              </div>
              <p className="text-[#483EFF] pl-24">+$10/yr</p>
            </div>

            {/* First div ends */}

            {/* Second Div */}
            <div
              onClick={handleStorage}
              className={`${
                activeAddOns.large_storage
                  ? "bg-[#F8F9FF] border-[#483EFF]"
                  : "border-gray-300"
              } flex border  w-[70%] h-[6rem] rounded-md items-center p-4 hover:border-[#483EFF] cursor-pointer mb-4`}
            >
              <input
                checked={activeAddOns.large_storage ? true : false}
                type="checkbox"
                id="2"
                className="w-[1.2rem] h-[1.2rem] cursor-pointer rounded-md mr-8"
              />
              <div className=" flex flex-col  w-[50%]">
                <h2 className="font-bold text-[1rem]">Larger storage</h2>
                <p className="text-[#9699AA] font-light">
                  Extra 1TB of cloud save
                </p>
              </div>
              <p className="text-[#483EFF] pl-24">+$20/yr</p>
            </div>

            {/*  Second div ends */}

            {/* Third Div */}
            <div
              onClick={handleCustom}
              className={`${
                activeAddOns.custom_profle
                  ? "bg-[#F8F9FF] border-[#483EFF]"
                  : "border-gray-300"
              } flex border  w-[70%] h-[6rem] rounded-md items-center p-4 hover:border-[#483EFF] cursor-pointer mb-4`}
            >
              <input
                checked={activeAddOns.custom_profle ? true : false}
                type="checkbox"
                id="3"
                className="w-[1.2rem] h-[1.2rem] cursor-pointer rounded-md mr-8"
              />
              <div className=" flex flex-col  w-[50%]">
                <h2 className="font-bold text-[1rem]">Customizable profile</h2>
                <p className="text-[#9699AA] font-light">
                  Custom theme on your profile
                </p>
              </div>
              <p className="text-[#483EFF] pl-24">+$20/yr</p>
            </div>
            {/* Third Div Ends */}
            <div className="flex justify-between  w-[70%] pt-16">
              <button
                onClick={() => navigate("/selectplan")}
                className=" bg-white w-[8rem] h-[3rem] text-gray-400 rounded-md font-bold hover:text-[#022959] "
              >
                Go back
              </button>
              <button
                onClick={() => navigate("/finish")}
                className="bg-[#022959] w-[8rem] h-[3rem] text-white rounded-md font-bold hover:bg-[#928CFF]"
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

export default AddOns;
