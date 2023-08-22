import React from "react";
import Sidebar from "./components/Sidebar";
import logo from "./images/icon-thank-you.svg";

const ThankYou = () => {
  const highlight = 4;
  return (
    <>
      <div className="p-8 flex w-[100%]">
        <Sidebar highlight={highlight} />
        <div className="flex flex-col  items-center justify-center w-[50%] ml-8">
          <img className="w-[5rem] h-[5rem] mb-4" src={logo} alt="logo"></img>
          <h1 className="text-[#022959] text-[2rem] font-extrabold">
            Thank you
          </h1>
          <p className="text-[#9699AA] text-[1rem] text-center w-[80%]">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
