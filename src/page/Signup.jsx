import React, { useState } from "react";

function Signup() {
  const [user, setUser] = useState({});
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  console.log(user)
  return (
    <div className="bg-slate-200">
      <div className="max-w-7xl min-h-[90dvh] m-auto flex items-center justify-center">
        <form
          className="min-h-[400px] w-[90%] max-w-[700px] shadow-lg rounded-md bg-slate-100 px-6 py-2 flex flex-col items-center justify-around"
          onSubmit={(e) => {
            e.preventDefault()
            console.log(name)
            setUser({
                name,
                email,
                password
            })
          }}
        >
          <div className="text-lg flex items-center justify-between w-full">
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              id="name"
              className="border-none outline-none rounded-sm px-2 py-1 w-[80%]"
              required
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
          </div>
          <div className="text-lg flex items-center justify-between w-full">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              className="border-none outline-none rounded-sm px-2 py-1 w-[80%]"
              required
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </div>
          <div className="text-lg flex items-center justify-between w-full">
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              id="password"
              className="border-none outline-none rounded-sm px-2 py-1 w-[80%]"
              required
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
          </div>
          <button className="bg-green-500 text-white rounded-md w-1/2 text-xl py-3 hover:bg-green-600">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
