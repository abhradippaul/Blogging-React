import { useUserContext } from "@/context/UserContext";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const { status } = useUserContext();
  return (
    <div className="max-w-7xl m-auto">
      <div className="h-[10dvh] flex items-center justify-between p-4">
        <div>
          <h1 className="font-semibold text-xl">Abhradip's Blog</h1>
        </div>
        <div className="w-[40%] hidden font-semibold text-xl md:block">
          <ul className="flex items-center justify-around">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>PROFILE</li>
            <li>POST</li>
          </ul>
        </div>
        <div className="h-full w-[50%] max-w-60 flex items-center justify-center">
          {status ? (
            <div>
              <h1>Welcome</h1>
              <button>Logout</button>
            </div>
          ) : (
            <div className="h-full w-full flex items-center justify-between">
              {" "}
              <Link to="/login">
                <button className="text-lg bg-white px-2 py-1 border rounded-md sm:px-4 sm:py-2 sm:text-xl hover:bg-slate-50">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button
                  className="text-lg bg-green-600 px-2 py-1 text-white border rounded-md
        sm:px-4 sm:py-2 sm:text-xl"
                >
                  SignUp
                </button>{" "}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
