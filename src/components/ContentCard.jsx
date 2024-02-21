import React from "react";
import iphone from "../../public/iphone.png";
function ContentCard() {
  return (
    <div className="bg-white h-96 w-56 rounded-md shadow-md p-4 flex items-center justify-around flex-col">
      <img className="h-[40%] w-full object-cover" src={iphone} alt="image" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit
        quaerat perspiciatis corporis pariatur doloribus aliquid, qui tenetur
        dolorem nihil!
      </p>
      <div className="w-full">
        <h1 className="text-right"> - Abhradip Paul</h1>
      </div>
    </div>
  );
}

export default ContentCard;
