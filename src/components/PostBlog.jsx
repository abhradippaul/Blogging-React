import React, { useEffect, useState } from 'react'
import ContentCard from './ContentCard'
import service from '@/appwrite/config'
import { Query } from 'appwrite'
import { useUserContext } from '@/context/UserContext'

function PostBlog() {
  const [postArr,setPostArr] = useState([])
  const {user} = useUserContext()
  useEffect(() => {
    let query = [Query.equal("userId",`${user.$id}`)]
    service.getPosts(query).then((e) => {
      setPostArr(e.documents)
    })
  },[])
  return (
    <div className='w-full h-full px-4 flex justify-around flex-wrap'>
        {
          postArr.map((e) => <ContentCard key={e.$id}/>)
        }
    </div>
  )
}

export default PostBlog