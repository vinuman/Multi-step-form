import React from "react";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [numberValid, setNumberValid] = useState(true);
  const navigate = useNavigate();

  const handleBtnClick = () => {
    if (name.trim() === "" || email.trim() === "" || number.trim() === "") {
      name.trim() === "" ? setNameValid(false) : setNameValid(true);
      email.trim() === "" ? setEmailValid(false) : setEmailValid(true);
      number.trim() === "" ? setNumberValid(false) : setNumberValid(true);
    } else {
      navigate("/selectplan");
    }
  };

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
              <div className="flex justify-between ">
                <label className=" pb-1 " htmlFor="name">
                  Name
                </label>
                {!nameValid ? (
                  <p className="text-red-600 text-[0.8rem]">
                    This field is required
                  </p>
                ) : (
                  ""
                )}
              </div>
              <input
                onChange={(e) => setName(e.target.value)}
                className=" outline outline-gray-300 rounded-md h-[3rem] p-4"
                type="text"
                placeholder="e.g. Stephen King"
                value={name}
              ></input>
            </div>
            <div className="flex flex-col  pb-8 w-[80%] max-w-[35rem]">
              <div className="flex justify-between ">
                <label className=" pb-1 " htmlFor="email">
                  Email address
                </label>
                {!emailValid ? (
                  <p className="text-red-600 text-[0.8rem]">
                    Please enter a valid email id
                  </p>
                ) : (
                  ""
                )}
              </div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className=" outline outline-gray-300 rounded-md h-[3rem] p-4"
                type="text"
                placeholder="e.g. stephenking@lorem.com"
                value={email}
              ></input>
            </div>
            <div className="flex flex-col  pb-8 w-[80%] max-w-[35rem]">
              <div className="flex justify-between">
                <label className=" pb-1" htmlFor="name">
                  Phone Number
                </label>
                {!numberValid ? (
                  <p className="text-red-600 text-[0.8rem]">
                    This field is required
                  </p>
                ) : (
                  ""
                )}
              </div>
              <input
                onChange={(e) => setNumber(e.target.value)}
                className=" outline outline-gray-300 rounded-md h-[3rem] p-4"
                type="text"
                placeholder="e.g. +1 234 567 890"
                value={number}
              ></input>
            </div>
          </form>
          <button
            onClick={handleBtnClick}
            className="bg-[#022959] w-[8rem] h-[3rem] text-white rounded-md font-bold ml-[30rem] mt-8"
          >
            next step
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
