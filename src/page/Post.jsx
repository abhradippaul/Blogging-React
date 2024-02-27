import PostBlog from "@/components/PostBlog";
import PostSubNavbar from "@/components/PostSubNavbar";
import { useUserContext } from "@/context/UserContext";
import React from "react";

function Post() {
  const { status } = useUserContext();
  return (
    <div className="min-h-dvh bg-slate-100">
      <div className="max-w-7xl m-auto">
        {status ? (
          <div>
            {" "}
            <PostSubNavbar />
            <PostBlog />{" "}
          </div>
        ) : (
          <div className="text-center text-xl min-h-dvh flex items-center justify-center border">Please login</div>
        )}
      </div>
    </div>
  );
}

export default Post;
