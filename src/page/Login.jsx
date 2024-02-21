import React from "react";

function Login() {
  return (
    <div className=" bg-slate-200">
      <div className="min-h-[90dvh] flex items-center justify-evenly flex-col">
        <h1 className="text-4xl">
          <span className="text-green-500">Login</span> Form
        </h1>
        <div className="w-[90%] min-h-[300px] rounded-md max-w-[500px] bg-white flex items-center flex-col justify-around p-6">
          <div className="w-full flex items-center justify-between text-lg">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              id="email"
              className="bg-slate-100 w-[80%] outline-none rounded-sm px-2 py-1"
            />
          </div>
          <div className="w-full flex items-center justify-between text-lg">
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              id="password"
              className="bg-slate-100 w-[80%] outline-none rounded-sm px-2 py-1"
            />
          </div>
          <button className="text-xl bg-green-500 text-white w-1/2 py-2 rounded-md hover:bg-green-600">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
