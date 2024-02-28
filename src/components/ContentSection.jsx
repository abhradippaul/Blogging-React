import React, { useEffect, useState } from "react";
import ContentCard from "./ContentCard";
import service from "@/appwrite/config";
import spinner from "/spinner.gif";

function ContentSection() {
  const [postArr, setPostArr] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    service.getPosts([]).then((e) => {
      setPostArr(e.documents);
      setLoading(true)
    });
  }, []);
  return (
    <div>
      {loading ? <div className="min-h-dvh bg-slate-100 p-4 flex flex-wrap justify-around">
        {postArr?.map((value) => {
          return <ContentCard value={value} key={value.$id} />;
        })}
      </div> : <div className='flex items-center justify-center h-[700px]'> <img src={spinner} alt="spinner" className='w-32' /></div>}
    </div>
  );
}

export default ContentSection;
