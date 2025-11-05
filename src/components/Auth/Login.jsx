import { useContext } from "react";
import { Authcontext } from "../../Context/Authcontext";

const Login = () => {
  const { email, setEmail, password, setPassword, bank } =
    useContext(Authcontext);
  return (
    <div className="py-[4%] lg:w-[40%] w-[90%] m-auto mx-auto h-screen overflow-y-hidden">
      <div>
        <p>Securely Connects your {bank} account </p>
        <input type="text" placeholder="Email" value={email} className="" />
        <input type="text" placeholder="Password" value={password} />
      </div>
    </div>
  );
};

export default Login;
