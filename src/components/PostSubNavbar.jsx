import React from 'react'
import { Link } from 'react-router-dom'

function PostSubNavbar() {
  return (
    <div className='h-[5dvh] bg-white px-4 flex items-center justify-end '>
        <Link to="/post/blog" className='text-xl bg-green-500 text-white flex items-center justify-center p-1 rounded-md cursor-pointer hover:bg-green-600'>
        <i className="fa-solid fa-plus "></i> <h1 className='px-2'>Add Post</h1>
        </Link>
    </div>
  )
}

export default PostSubNavbar