import React from "react";
import connect from "../assets/images/connect2.png";
import capital from "../assets/images/capital-one.jpg";
import chaseB from "../assets/images/chase.png";
import fargo from "../assets/images/wells.png";
import Ame from "../assets/images/bank-of-america.png";
import CITI from "../assets/images/citigroup.png";
import Td from "../assets/images/TD.png";
import pnc from "../assets/images/pnc-bank.png";
import Other from "../assets/images/others.png";

const Connections = () => {
  const Banks = [
    { id: 1, img: capital },
    { id: 2, img: chaseB },
    { id: 3, img: fargo },
    { id: 4, img: Ame },
    { id: 5, img: CITI },
    { id: 6, img: Td },
    { id: 6, img: pnc },
    { id: 7, img: Other },
  ];
  return (
    <div>
      <div className="flex flex-col items-center justify-center lg:w-[40%] w-[90%] mx-auto">
        <img src={connect} alt="" className="size-52" />
        <p className="text-2xl font-bold">Connect Your Bank</p>
        <p className="text-center">
          VaultiQ uses encrypted APIs to connect to your bank bank safely. You
          will be redirected to select your bank.
        </p>
        <div className="grid grid-cols-2 grid-rows-2 gap-5 justify-center items-center my-6">
          {Banks.map((items) => (
            <div
              key={items.id}
              className="bg-gray-700 rounded-3xl p-6  flex justify-center items-center w-[15rem] h-[8rem]"
            >
              <img src={items.img} alt="" className="w-[10rem]" />
            </div>
          ))}
        </div>
        <button className="bg-blue-700 px-8 py-2 rounded-3xl text-3xl w-[80%] hover:bg-blue-500 mb-6">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Connections;
