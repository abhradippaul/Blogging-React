import service from "@/appwrite/config";
import { useUserContext } from "@/context/UserContext";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Blog() {
  const { user, status } = useUserContext();
  const [formInfo, setFormInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  if (status) {
    return (
      <div className="bg-slate-200 min-h-dvh border max-w-7xl m-auto">
        <form
          action=""
          className="w-90% max-w-[600px] bg-white mx-auto my-16 px-8 py-4 rounded-md flex items-center flex-col"
          onSubmit={async (e) => {
            e.preventDefault();
            setLoading(false);
            const imageData = await service.uploadFile(
              document.getElementById("image").files[0]
            );
            service.createPost({
              ...formInfo,
              userId: `${user.$id}`,
              featuredImage: `${imageData.$id}`,
              userName : user.name
            });
            setLoading(true);
            navigate("/post");
            setFormInfo({});
          }}
        >
          <div className="w-full flex items-center justify-between text-xl my-4">
            <label htmlFor="title">Title : </label>
            <input
              type="text"
              id="title"
              required
              value={formInfo.title}
              onChange={(e) => {
                setFormInfo({
                  ...formInfo,
                  title: e.target.value,
                  slug: e.target.value.replaceAll(" ", "-"),
                });
              }}
              className="bg-slate-200 border-none outline-none w-[70%] p-1"
            />
          </div>
          <div className="w-full flex items-center justify-between text-xl my-4">
            <label htmlFor="slug">Slug : </label>
            <input
              type="text"
              id="slug"
              required
              value={formInfo.slug}
              onChange={(e) => {
                setFormInfo({
                  ...formInfo,
                  slug: e.target.value,
                });
              }}
              className="bg-slate-200 border-none outline-none w-[70%] p-1"
            />
          </div>
          <div className="w-full flex items-center justify-between text-xl my-4">
            <label htmlFor="content">Content : </label>
            <textarea
              type="text"
              rows={10}
              cols={50}
              onChange={(e) => {
                setFormInfo({
                  ...formInfo,
                  content: e.target.value,
                });
              }}
              required
              id="content"
              className="bg-slate-200 border-none outline-none w-[70%] p-1 resize-none"
            />
          </div>

          <div className="w-full flex items-center justify-between text-xl my-4">
            <input type="file" id="image" required />
          </div>
          <button className="bg-green-500 w-1/2 text-xl text-white px-4 py-1 rounded-md hover:bg-green-600">
            {loading ? "Submit" : "Loading...."}
          </button>
        </form>
      </div>
    );
  } else {
    return <div>Please login</div>;
  }
}

export default Blog;
