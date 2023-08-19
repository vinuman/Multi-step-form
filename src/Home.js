import React from "react";
import Sidebar from "./components/Sidebar";

const Home = () => {
  const highlight = 1;
  return (
    <>
      <div className=" p-8 flex w-[100%]">
        <Sidebar highlight={highlight} />
        <div className="  w-[70%] pl-16 pt-8">
          <h1 className="text-[3rem] font-bold text-[#022959]">
            Personal info
          </h1>
          <p className=" text-[#9699AA] text-[1.5rem] font-thin pb-8">
            Please provide your name, email address, and phone number.
          </p>
          <form>
            <div className="flex flex-col  pb-8 w-[80%] max-w-[35rem]">
              <label className=" pb-1 " htmlFor="name">
                Name
              </label>
              <input
                className=" outline outline-gray-300 rounded-md h-[3rem] p-4"
                type="text"
                placeholder="e.g. Stephen King"
              ></input>
            </div>
            <div className="flex flex-col  pb-8 w-[80%] max-w-[35rem]">
              <label className=" pb-1" htmlFor="name">
                Email Address
              </label>
              <input
                className=" outline outline-gray-300 rounded-md h-[3rem] p-4"
                type="text"
                placeholder="e.g. stephenking@lorem.com"
              ></input>
            </div>
            <div className="flex flex-col  pb-8 w-[80%] max-w-[35rem]">
              <label className=" pb-1" htmlFor="name">
                Phone Number
              </label>
              <input
                className=" outline outline-gray-300 rounded-md h-[3rem] p-4"
                type="text"
                placeholder="e.g. +1 234 567 890"
              ></input>
            </div>
          </form>
          <button className="bg-[#022959] w-[8rem] h-[3rem] text-white rounded-md font-bold ml-[30rem] mt-8">
            next step
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
