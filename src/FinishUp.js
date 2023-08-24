import React from "react";
import Sidebar from "./components/Sidebar";
import { useNavigate } from "react-router-dom";
import { selectedPlan } from "./features/selectSlice";
import { selectedAddOns } from "./features/addSlice";
import { useSelector } from "react-redux";

const FinishUp = () => {
  const navigate = useNavigate();
  const plan = useSelector(selectedPlan);
  const addOns = useSelector(selectedAddOns);
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
                  {plan.arcade ? "Arcade" : plan.advanced ? "Advenced" : "Pro"}{" "}
                  {plan.monthly ? "(monthly)" : "(yearly)"}
                </h2>
                <p
                  onClick={() => navigate("/selectplan")}
                  className="text-[#9699AA] underline cursor-pointer font-bold hover:text-[#483EFF]"
                >
                  Change
                </p>
              </div>
              <h2 className="font-bold text-[#022959] text-[1rem]">
                {plan.monthly && plan.arcade
                  ? "$9/mo"
                  : plan.monthly && plan.advanced
                  ? "$12/mo"
                  : plan.monthly && plan.pro
                  ? "$15/mo"
                  : !plan.monthly && plan.arcade
                  ? "$90/yr"
                  : !plan.monthly && plan.advanced
                  ? "$120/yr"
                  : "$150/yr"}
              </h2>
            </div>

            {/* FIrs Div Ends*/}

            {/* Second Div */}
            <div className="flex w-[70%] h-[7rem] rounded-md p-4 justify-between items-center bg-[#F8F9FF] border-b-2">
              <div className="flex flex-col">
                {addOns.online_services ? (
                  <p className="text-[#9699AA] text-[1.1rem]">
                    Online services
                  </p>
                ) : (
                  ""
                )}

                {addOns.large_storage ? (
                  <p className="text-[#9699AA] text-[1.1rem]">Larger Storage</p>
                ) : (
                  ""
                )}
                {addOns.custom_profle ? (
                  <p className="text-[#9699AA] text-[1.1rem]">
                    Customizable profile
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="flex flex-col">
                {addOns.online_services && plan.monthly ? (
                  <p className=" text-[#022959]">+$1/mn</p>
                ) : addOns.online_services && !plan.monthly ? (
                  <p className=" text-[#022959]">+$10/yr</p>
                ) : (
                  ""
                )}
                {addOns.large_storage && plan.monthly ? (
                  <p className=" text-[#022959]">+$2/mn</p>
                ) : addOns.large_storage && !plan.monthly ? (
                  <p className=" text-[#022959]">+$20/yr</p>
                ) : (
                  ""
                )}
                {addOns.custom_profle && plan.monthly ? (
                  <p className=" text-[#022959]">+$2/mn</p>
                ) : addOns.custom_profle && !plan.monthly ? (
                  <p className=" text-[#022959]">+$20/yr</p>
                ) : (
                  ""
                )}
              </div>
            </div>
            {/* Second Div ENDS */}
            {/* Total div */}
            <div className="w-[70%] flex p-4 justify-between mt-4">
              <p className="text-[#9699AA] font-[1.6rem]">
                Total (per {plan.monthly ? "month" : "year"})
              </p>
              <h1 className="text-[#483EFF] text-[1.6rem] font-extrabold">
                {plan.monthly && plan.arcade
                  ? "$9/mo"
                  : plan.monthly && plan.advanced
                  ? "$12/mo"
                  : plan.monthly && plan.pro
                  ? "$15/mo"
                  : !plan.monthly && plan.arcade
                  ? "$90/yr"
                  : !plan.monthly && plan.advanced
                  ? "$120/yr"
                  : "$150/yr"}
              </h1>
            </div>
            {/* Total div ends */}
            <div className="flex justify-between  w-[70%] pt-16">
              <button
                onClick={() => navigate("/addons")}
                className=" bg-white w-[8rem] h-[3rem] text-gray-400 rounded-md font-bold hover:text-[#022959] "
              >
                Go back
              </button>
              <button
                onClick={() => navigate("/thanks")}
                className="bg-[#483EFF] w-[8rem] h-[3rem] text-white rounded-md font-bold hover:bg-[#928CFF]"
              >
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
