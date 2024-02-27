import { useUserContext } from "@/context/UserContext";
import React from "react";

function UserInfo() {
  const { user } = useUserContext();
  console.log(user);
  return (
    <div className="min-h-dvh max-w-7xl flex items-center justify-center">
      <div className="w-[90%] mx-auto my-8 max-w-[500px] bg-white flex items-center justify-center flex-col rounded-md">
        <div className="flex items-center justify-between w-full px-4 py-2 text-xl">
          <h1>Full Name : </h1>
          <h1>{user.name}</h1>
        </div>
        <div className="flex items-center justify-between w-full px-4 py-2 text-xl">
          <h1>Email : </h1>
          <h1>{user.email}</h1>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
