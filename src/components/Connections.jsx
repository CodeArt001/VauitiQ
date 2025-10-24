import React from "react";
import marked from "../assets/images/mark.png";
import capital from "../assets/images/capital-one.png";
import chaseB from "../assets/images/chase.png";
import fargo from "../assets/images/wells.png";
import Ame from "../assets/images/bank-of-america.png";
import bank from "../assets/images/citigroup.png";
import Td from "../assets/images/TD.png";
import pnc from "../assets/images/pnc-bank.png";
import Other from "../assets/images/others.png";
import { useParams } from "react-router-dom";

const Connections = () => {
  const { userId } = useParams();
  const Banks = [
    { id: 1, name: "Capital One", img: capital },
    { id: 2, name: "Chase Bank", img: chaseB },
    { id: 3, name: "Wells Fargo", img: fargo },
    { id: 4, name: "Bank of America", img: Ame },
    { id: 5, name: "Citigroup", img: bank },
    { id: 6, name: "TD Bank", img: Td },
    { id: 7, name: "PNC Bank", img: pnc },
    { id: 8, name: "Other", img: Other },
  ];
  const [selectedBank, setSelectedBank] = React.useState(null);
  const [isCustomBank, setIsCustomBank] = React.useState(false);
  const [customBankName, setCustomBankName] = React.useState("");

  const handleClickBank = (bank) => {
    if (bank.name === "Other") {
      setIsCustomBank(true);
      // setSelectedBank(null);
      setCustomBankName("");
    } else {
      setSelectedBank(bank);
      setIsCustomBank(false);
      setCustomBankName("");
    }
  };

  const handleCustomBank = () => {
    if (customBankName.trim() !== "") {
      setSelectedBank({ name: customBankName, img: Other });
      setIsCustomBank(false);
    }
  };

  return (
    <div>
      {/* <span>{userId}</span> */}
      <div className="flex flex-col  items-center justify-center lg:w-[40%] w-[90%] mx-auto">
        <img src={marked} alt="" className="size-52" />
        <p className="text-2xl font-bold">Connect Your Bank</p>
        <p className="text-center">
          VaultiQ uses encrypted APIs to connect to your bank bank safely. You
          will be redirected to select your bank.
        </p>
        {!isCustomBank && (
          <div className="grid grid-cols-2 grid-rows-2 gap-5 justify-center items-center my-6">
            {Banks.map((items) => (
              <div
                key={items.id}
                className={`bg-gray-500 rounded-3xl p-6 flex justify-center items-center w-[15rem] h-[8rem] ${
                  selectedBank === items.id ? "border-4 border-blue-500" : ""
                }`}
                onClick={() => handleClickBank(items)}
              >
                <img src={items.img} alt="" className="w-[10rem]" />
              </div>
            ))}
          </div>
        )}
        {isCustomBank && (
          <div className="flex flex-col items-center mt-6 w-full">
            <p className="mb-3 text-lg font-semibold">
              Add your bank (not listed above)
            </p>
            <div className="flex gap-4 justify-center items-center">
              <input
                type="text"
                placeholder="Enter your bank name"
                className="border-2 border-gray-300 rounded-2xl p-2 w-[20rem]"
                value={customBankName}
                onChange={(e) => setCustomBankName(e.target.value)}
              />
              <button
                className="bg-blue-700 px-6 py-2 rounded-3xl text-white hover:bg-blue-500"
                onClick={handleCustomBank}
              >
                Add
              </button>
              <button
                className="bg-gray-400 px-4 py-2 rounded-3xl text-white hover:bg-gray-500"
                onClick={() => {
                  setIsCustomBank(false);
                  setCustomBankName("");
                }}
              >
                {" "}
                cancel
              </button>
            </div>
          </div>
        )}
        <button
          disabled={isCustomBank}
          className={`mt-8 px-8 py-2 rounded-3xl text-3xl w-[80%] mb-6 ${
            isCustomBank
              ? "bg-blue-700 opacity-50 cursor-not-allowed"
              : "bg-blue-700 hover:bg-blue-500"
          }`}
        >
          Continue
        </button>

        {selectedBank && (
          <div className="flex flex-col items-center mt-8">
            <img
              src={selectedBank.img}
              alt={selectedBank.name}
              className="w-[8rem]"
            />
            <p className="mt-2 text-xl font-semibold">{selectedBank.name}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Connections;
