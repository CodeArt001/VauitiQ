import { BrowserRouter, Routes, Route } from "react-router-dom";
import Connections from "./components/Connections";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div className="dark:bg-black dark:text-white min-h-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/connection/:userId" element={<Connections />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
