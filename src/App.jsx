import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Login from "./page/Login";
import Signup from "./page/Signup";
import { UserContextProvider } from "./context/UserContext";
import { useState } from "react";
import { useEffect } from "react";
import authService from "./appwrite/auth";

function App() {
  const [user, setUser] = useState({});
  const [status,setStatus] = useState(false)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((data) => {
        setUser({
          name : "test"
        });
        // console.log(data);
      })
      .finally(() => setLoading(false));
      setStatus(false)
  }, []);

  return loading ? (
    <div>Loading......</div>
  ) : (
    <UserContextProvider value={{ user, setUser,status,setStatus }}>
      <div className="bg-slate-100">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
