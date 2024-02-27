import React, { useEffect, useState } from "react";
import service from "@/appwrite/config";
import { Link } from "react-router-dom";
function ContentCard({value}) {
  const [filePreview,setFilePreview] = useState("")
  useEffect(() => {
    const data = service.getFilePreview(`${value.featuredImage}`)
    // console.log(data)
    setFilePreview(data.href)
  },[])
  // console.log(value)
  return (
    <Link to={`/v1/posts/${value?.$id}`} className="bg-white h-96 w-56 rounded-md shadow-md p-4 flex items-center justify-around flex-col m-4">
      <img loading="lazy" className="h-[40%] w-full object-cover" src={filePreview} alt="image" />
      <p>
        {value.content}
      </p>
      <div className="w-full">
        <h1 className="text-right"> - {value.title}</h1>
      </div>
    </Link>
  );
}

export default ContentCard;
