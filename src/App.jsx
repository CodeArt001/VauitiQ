import { BrowserRouter, Routes, Route } from "react-router-dom";
import Connections from "./components/Connections";
import Home from "./components/Home";
import Login from "./components/Auth/Login";

function App() {
  return (
    <>
      <div className="dark:bg-black dark:text-white min-h-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/connection/:userId" element={<Connections />} />
            <Route path="/login/:userId" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
