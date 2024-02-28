import service from "@/appwrite/config";
import { useUserContext } from "@/context/UserContext";
import React, { useEffect, useState } from "react";

function EditBlog({ data }) {
    const {user} = useUserContext()
  const [card, setCard] = useState({});
  const [userPermission,setUserPermission] = useState(false)
  const [edit, setEdit] = useState(false);
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    // console.log(data);
    setUserPermission(user.$id===data.userId ? true : false)
    setCard(data);
  }, []);
  return (
    <div className="border border-red-600 w-[90%] max-w-[500px] mx-auto flex flex-col items-center justify-around">
      <form action="" className="w-full" >
        <div className="w-full flex items-center justify-center m-4">
            <img className="w-1/2 object-cover" src={card.featuredImage} alt="" />
        </div>
        <div className="flex items-center justify-between px-4 py-2 text-xl my-4">
          <label htmlFor="title">Title : </label>
          <input
            type="text"
            className="w-[70%] rounded-md outline-none border-none p-1 text-center"
            onChange={(e) => {
                setCard({
                    ...card,
                    title : e.target.value
                })
            }}
            value={card.title}
            disabled = {!edit}
          />
        </div>
        <div className="flex items-center justify-between px-4 py-2 text-xl my-4">
          <label htmlFor="title">Content : </label>
          <textarea
            type="text"
            className="w-[70%] rounded-md outline-none border-none p-1 resize-none text-center" 
            rows={10} 
            cols={50}
            onChange={(e) => {
                setCard({
                    ...card,
                    content : e.target.value
                })
            }}
            value={card.content}
            disabled = {!edit}
          />
        </div>
      </form>
      <div className="w-full flex p-4 items-center justify-between">
      {
        userPermission ? <button className="text-xl bg-green-500 text-white w-[40%] rounded-md py-2" onClick={() => {
            setEdit(prev => !prev)
        }}>Edit</button> : <div></div>
      }
      {
        edit ? <button onClick={(e) => {
            setLoading(true)
            e.preventDefault()
            service.updatePost(card.$id,{
                title : card.title,
                content : card.content
            })
            console.log(card)
          }} className="text-xl bg-white w-[40%] rounded-md py-2">{loading ? "Submit":"Loading...."}</button> : <div></div>
      }
      </div>
    </div>
  );
}

export default EditBlog;
