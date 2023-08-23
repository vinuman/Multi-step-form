import React from "react";
import Sidebar from "./components/Sidebar";
import { useNavigate } from "react-router-dom";

const FinishUp = () => {
  const navigate = useNavigate();
  const highlight = 4;
  return (
    <>
      <div className="p-8 flex w-[100%]">
        <Sidebar highlight={highlight} />
        <div className="  w-[70%] pl-16 pt-8">
          <h1 className="text-[3rem] font-bold text-[#022959]">Finishing up</h1>
          <p className=" text-[#9699AA] text-[1.5rem] font-thin pb-8">
            Double-check everything looks OK before confirming.
          </p>
          <div className=" flex flex-col">
            {/* First Div */}
            <div className="flex w-[70%] h-[7rem] rounded-md p-4 justify-between items-center bg-[#F8F9FF] border-b-2">
              <div className="flex flex-col">
                <h2 className="font-bold text-[#022959] text-[1rem]">
                  Arcade Monthly
                </h2>
                <p className="text-[#9699AA] underline cursor-pointer">
                  Change
                </p>
              </div>
              <h2 className="font-bold text-[#022959] text-[1rem]">$9/mo</h2>
            </div>

            {/* FIrs Div Ends*/}

            {/* Second Div */}
            <div className="flex w-[70%] h-[7rem] rounded-md p-4 justify-between items-center bg-[#F8F9FF] border-b-2">
              <div className="flex flex-col">
                <p className="text-[#9699AA] text-[1.1rem]">Online services</p>
                <p className="text-[#9699AA] text-[1.1rem]">Larger Storage</p>
                <p className="text-[#9699AA] text-[1.1rem]">
                  Customizable profile
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-[#9699AA] text-[1.1rem]">+$1/mo</p>
                <p className="text-[#9699AA] text-[1.1rem]">+$2/mo</p>
                <p className="text-[#9699AA] text-[1.1rem]">+$2/mo</p>
              </div>
            </div>
            {/* Second Div ENDS */}
            {/* Total div */}
            <div className="w-[70%] flex p-4 justify-between mt-4">
              <p className="text-[#9699AA] font-[1.6rem]">Total (per month)</p>
              <h1 className="text-[#483EFF] text-[1.6rem] font-extrabold">
                +$12/mo
              </h1>
            </div>
            {/* Total div ends */}
            <div className="flex justify-between  w-[70%] pt-16">
              <button
                onClick={() => navigate("/addons")}
                className=" bg-white w-[8rem] h-[3rem] text-gray-400 rounded-md font-bold  "
              >
                Go back
              </button>
              <button className="bg-[#483EFF] w-[8rem] h-[3rem] text-white rounded-md font-bold ">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinishUp;
