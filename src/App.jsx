import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Login from "./page/Login";
import Signup from "./page/Signup";
import { UserContextProvider } from "./context/UserContext";
import { useState, useEffect } from "react";
import authService from "./appwrite/auth";
import Post from "./page/Post";
import Blog from "./components/Blog";
import Profile from "./page/Profile";

function App() {
  const [user, setUser] = useState({});
  const [status,setStatus] = useState(false)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((data) => {
        setUser(data);
        setStatus(true)
        // console.log(data);
      }).catch(() => {
          setUser({})
          setStatus(false)
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
        <Route path="/post" element={<Post />} />
        <Route path="/post/blog" element={<Blog />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
