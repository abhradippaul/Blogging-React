import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Login from "./page/Login";


function App() {
  return (
    <div>
      <div className="bg-slate-100">
        <Navbar />
        
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
