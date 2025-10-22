import { BrowserRouter, Routes, Route } from "react-dom";
import Connections from "./components/Connections";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <div className="dark:bg-black dark:text-white min-h-screen">
            <Route path="/" element={<Home />} />
            <Route path="/connection" element={<Connections />} />
          </div>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
