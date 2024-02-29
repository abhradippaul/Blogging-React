import service from '@/appwrite/config'
import { useUserContext } from '@/context/UserContext'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EditBlog from './EditBlog'

function ContentInfoCard() {
    const {id} = useParams()
    // console.log(id)
    let [data,setData] = useState()
    useEffect(() => {
        service.getPost(id).then((e) => {
            // console.log(e)
            const featuredImage = service.getFilePreview(e.featuredImage)
            setData({
                ...e,
                imageUrl : featuredImage
            })
        })
    },[])
    const { status } = useUserContext();
    return data && (
      <div className="min-h-dvh bg-slate-100">
        <div className="max-w-7xl mx-auto py-16">
          {status ? (
            <div>
              <EditBlog data={data} />
            </div>
          ) : (
            <div className="text-center text-xl min-h-dvh flex items-center justify-center border">Please login</div>
          )}
        </div>
      </div>
    );
}

export default ContentInfoCard