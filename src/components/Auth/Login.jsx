import { useContext } from "react";
import { Authcontext } from "../../Context/Authcontext";

const Login = () => {
  const { email, setEmail, password, setPassword, selectedBank } =
    useContext(Authcontext);
  return (
    <div className="py-14">
      <div className="px-10  lg:w-[40%] w-[90%]  m-auto mx-auto  overflow-y-hidden text-white flex items-center justify-center bg-gray-700 rounded-4xl h-[20rem] ">
        <p>{selectedBank}</p>
        <div className=" flex flex-col gap-5 w-full ">
          <p className="text-center text-3xl font-bold">
            Securely Connects your {selectedBank} account{" "}
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
      </div>
    </div>
  );
};

export default Login;
