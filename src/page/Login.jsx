import authService from "@/appwrite/auth";
import { useUserContext } from "@/context/UserContext";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import spinner from "/spinner.gif"

function Login() {
  const {setUser,setStatus} = useUserContext()
  const navigate = useNavigate()
  const [loginDetails,setLoginDetails] = useState({})
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState("")
  return (
    <div className=" bg-slate-200">
      <div className="min-h-[90dvh] flex items-center justify-evenly flex-col">
        <h1 className="text-4xl">
          <span className="text-green-500">Login</span> Form
        </h1>
        <form className="w-[90%] min-h-[300px] rounded-md max-w-[500px] bg-white flex items-center flex-col justify-around p-6" onSubmit={(e) => {
          e.preventDefault()
          setLoading(false)
          authService.login(loginDetails).then(() => {
            authService.getCurrentUser().then((data) => {
              console.log(data)
              setUser(data)
              setStatus(true)
              navigate("/")
            })
          }).catch((err) => {
            setError(err.message)
          }).finally(() => {
            setLoading(true)
          })
        }}>
          <div className="w-full flex items-center justify-between text-lg">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              id="email"
              required
              onChange={(e) => {
                setLoginDetails({
                  ...loginDetails,
                  email : e.target.value
                })

              }}
              className="bg-slate-100 w-[80%] outline-none rounded-sm px-2 py-1"
            />
          </div>
          <div className="w-full flex items-center justify-between text-lg">
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              id="password"
              required
              onChange={(e) => {
                setLoginDetails({
                  ...loginDetails,
                  password : e.target.value
                })
              }}
              className="bg-slate-100 w-[80%] outline-none rounded-sm px-2 py-1"
            />
          </div>
          {error ? <h1 className="text-red-700">{error}</h1> : <h1></h1>}
          <button className="text-xl bg-green-500 text-white w-1/2 py-2 rounded-md hover:bg-green-600 flex items-center justify-center" onClick={() => {
            
          }}>
            {loading? "Submit" : <img className="h-8" src={spinner} />}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
