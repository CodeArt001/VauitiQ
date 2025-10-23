import React from "react";
import logo from "../assets/images/Logo-1.png";
import { Link, useNavigate } from "react-router-dom";
// import Connections from "./Connections";

const Home = () => {
  const navigate = useNavigate();
  const handleContinue = (id) => {
    navigate(`/connection/${id}`);
  };
  return (
    <div>
      <div className="flex flex-col items-center py-[4%] lg:w-[40%] w-[90%] m-auto mx-auto h-screen overflow-y-hidden">
        <img
          style={{ mixBlendMode: "screen" }}
          src={logo}
          alt=""
          className=""
        />
        <p className="lg:text-6xl md:text-5xl text-4xl font-bold mt-3">
          Welcome to VaultiQ
        </p>
        <p className="font-bold lg:text-2xl">Smart Control Stronger flow</p>
        <p className="text-center mt-2 lg:text-sm text-xs">
          Get instant insights into your spending, income, and hidden money
          leaks all in one secure dashboard
        </p>
        <div onClick={() => handleContinue("bank")} className="mt-3 w-full">
          <button className="rounded-2xl bg-blue-600 lg:text-[1.4rem]  py-2 mt-3 p-6 w-full hover:bg-blue-500">
            Connect My Bank
          </button>

          <button className="rounded-2xl bg-blue-900 lg:text-[1.4rem]  py-2 mt-3 w-full hover:bg-blue-200 hover:text-black">
            Continue Without Linking
          </button>
        </div>
        <div className="mt-2 text-center">
          <p>VaultiQ Never Stores Your Banking Credentials </p>
          <p>Your Data Stays Encrypted and Private</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
