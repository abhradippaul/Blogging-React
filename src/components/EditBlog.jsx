import service from "@/appwrite/config";
import { useUserContext } from "@/context/UserContext";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import spinner from "/spinner.gif";

function EditBlog({ data }) {
  const { user } = useUserContext();
  const [card, setCard] = useState({});
  const [userPermission, setUserPermission] = useState(false);
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setUserPermission(user.$id === data.userId ? true : false);
    setCard(data);
  }, []);
  return (
    <div className="w-[90%] bg-slate-50 max-w-[500px] rounded-md shadow-md mx-auto flex flex-col items-center justify-around">
      <form action="" className="w-full">
        <div className="w-full flex items-center justify-center m-4">
          <img className="w-1/2 object-cover" src={card.imageUrl} alt="" />
        </div>
        <div className="flex items-center justify-between px-4 py-2 text-xl my-4">
          <label htmlFor="title">Title : </label>
          <input
            type="text"
            className="w-[70%] rounded-md outline-none border-none p-1 text-center"
            onChange={(e) => {
              setCard({
                ...card,
                title: e.target.value,
              });
            }}
            value={card.title}
            disabled={!edit}
          />
        </div>
        <div className="flex justify-between px-4 py-2 text-xl my-4">
          <label htmlFor="title">Content : </label>
          <textarea
            type="text"
            className="w-[70%] rounded-md outline-none border-none p-1 resize-none text-center"
            rows={10}
            cols={50}
            onChange={(e) => {
              setCard({
                ...card,
                content: e.target.value,
              });
            }}
            value={card.content}
            disabled={!edit}
          />
        </div>
      </form>
      <div className="w-full flex p-4 items-center justify-between">
        {userPermission ? (
          <div className="w-full flex items-center justify-between">
            <button
              className="text-xl bg-green-500 text-white w-[40%] rounded-md py-2"
              onClick={() => {
                setEdit((prev) => !prev);
              }}
            >
              Edit
            </button>
            <button
              onClick={(e) => {
                setLoading(true);
                e.preventDefault();
                if (edit) {
                  service
                    .updatePost(card.$id, {
                      title: card.title,
                      content: card.content,
                    })
                    .then(() => {
                      setLoading(false);
                      navigate("/");
                    });
                } else {
                  service.deletePost(card.$id).then(() => {
                    service.deleteFile(card.featuredImage).then(() => {
                      setLoading(false);
                      navigate("/");
                    });
                  });
                }
              }}
              className="text-xl bg-white w-[40%] rounded-md py-2 flex items-center justify-center"
            >
              {!loading ? (
                edit ? (
                  "Submit"
                ) : (
                  "Delete"
                )
              ) : (
                <img className="h-8" src={spinner} />
              )}
            </button>
          </div>
        ) : (
          <div>Created By : {user.name}</div>
        )}
      </div>
    </div>
  );
}

export default EditBlog;
