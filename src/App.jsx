import { BrowserRouter, Routes, Route } from "react-router-dom";
import Connections from "./components/Connections";
import Home from "./components/Home";
import Login from "./components/Auth/Login";
import { AuthProvider } from "./Context/Authcontext";

function App() {
  return (
    <>
      <div className="dark:bg-black dark:text-white min-h-screen">
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/connection/:userId" element={<Connections />} />
              <Route path="/login/:userId" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
