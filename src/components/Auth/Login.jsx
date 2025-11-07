import { useContext } from "react";
import { Authcontext } from "../../Context/Authcontext";

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
          <p className="text-center text-2xl font-bold ">
            Securely Connects your {selectedBank?.name} account{" "}
          </p>
          <input
            type="text"
            placeholder="Email"
            value={email}
            className="bg-white text-black px-3 h-10 border-4 border-blue-600"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white text-black px-3 h-10"
          />
        </div>
        <div className="mt-4">
          <p>VaultiQ uses encrypted connection.</p>
          <p>Your credentials are never stored</p>
        </div>
        <button className="bg-blue-700 px-5 py-2 font-bold rounded-3xl my-2">
          Connect Securely
        </button>
        <button>Cancel and go back</button>
        <div className="flex mb-9">
          <p>Bank-level security powered by </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
