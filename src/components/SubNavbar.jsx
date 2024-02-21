import React from "react";

function SubNavbar() {
  return (
    <div className="bg-white h-[5dvh] max-w-7xl m-auto flex items-center text-lg justify-between p-2 border">
      <div className="flex items-center justify-center font-semibold">
        <h1 className="mx-2 cursor-pointer">Educational</h1>
        <h1 className="mx-2 cursor-pointer">Gaming</h1>
        <h1 className="mx-2 cursor-pointer">Scifi</h1>
      </div>
      <div className="mx-2">
        <i class="fa-solid fa-magnifying-glass mx-2 cursor-pointer"></i>
        <input type="text" placeholder="Search" className=" rounded-sm outline-none p-1 "/>
      </div>
    </div>
  );
}

export default SubNavbar;
