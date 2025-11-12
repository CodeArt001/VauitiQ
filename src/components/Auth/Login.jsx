import { useContext } from "react";
import { Authcontext } from "../../Context/Authcontext";
import padlock from "../../assets/images/middle.png";

const Login = () => {
  const { email, setEmail, password, setPassword, selectedBank } =
    useContext(Authcontext);
  return (
    <div className="py-14">
      <div className="px-10 flex-col lg:w-[40%] w-[90%] m-auto mx-auto overflow-y-hidden text-white flex items-center justify-center bg-gray-800 rounded-4xl h-auto ">
        <div>
          <p className="text-3xl font-bold">
            {selectedBank?.img && (
              <img
                src={selectedBank.img}
                alt={selectedBank.name}
                className="w-40 h-40 object-contain mt-9"
              />
            )}
          </p>
        </div>
        <div className=" flex flex-col gap-5 w-full ">
          <p className="text-center text-3xl font-bold ">
            Securely Connects your {selectedBank?.name} account to Vault{" "}
          </p>
          <input
            type="text"
            placeholder="Email"
            value={email}
            className="bg-gray-500 text-black px-3 h-10 "
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password/Passcode"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-500 text-black px-3 h-10"
          />
        </div>
        <div className="mt-4 tracking-wider">
          <p>VaultiQ uses encrypted connection.</p>
          <p>Your credentials are never stored</p>
        </div>
        <button className="bg-blue-700 px-5 py-2 font-bold rounded-3xl my-2 w-full hover:bg-blue-500">
          Connect Securely
        </button>
        <button className="cursor-pointer ">Cancel and go back</button>
        <div className="flex mb-9 items-center">
          <img src={padlock} alt="" className="w-16 h-10" />
          <p>Bank-level security powered by </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
