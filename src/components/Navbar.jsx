import React from "react";

function Navbar() {
  return (
    <div className="max-w-7xl m-auto">
      <div className="h-[10dvh] flex items-center justify-between p-4">
        <div>
          <h1 className="font-semibold text-xl">Abhradip's Blog</h1>
        </div>
        <div className="w-[40%] hidden font-semibold text-xl md:block">
          <ul className="flex items-center justify-around">
            <li>HOME</li>
            <li>PROFILE</li>
            <li>POST</li>
          </ul>
        </div>
        <div className="h-full w-[50%] max-w-60 flex items-center justify-center">
          {false ? (
            <h1>Welcome</h1>
          ) : (
            <div className="h-full w-full flex items-center justify-between">
              {" "}
              <button className="text-lg bg-white px-2 py-1 border rounded-md sm:px-4 sm:py-2 sm:text-xl">
                Login
              </button>
              <button
                className="text-lg bg-green-600 px-2 py-1 text-white border rounded-md
        sm:px-4 sm:py-2 sm:text-xl"
              >
                SignUp
              </button>{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;