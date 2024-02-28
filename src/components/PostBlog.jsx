import React, { useEffect, useState } from 'react'
import ContentCard from './ContentCard'
import service from '@/appwrite/config'
import { Query } from 'appwrite'
import { useUserContext } from '@/context/UserContext'
import spinner from "/spinner.gif"

function PostBlog() {
  const [postArr,setPostArr] = useState([])
  const [loading,setLoading] = useState(false)
  const {user} = useUserContext()
  useEffect(() => {
    let query = [Query.equal("userId",`${user.$id}`)]
    service.getPosts(query).then((e) => {
      setPostArr(e.documents)
      setLoading(true)
    })
  },[])
  return (
    <div>
        {
          loading ? <div className='w-full h-full px-4 flex justify-around flex-wrap'>
          {
            postArr.map((e) => <ContentCard value={e} key={e.$id}/>)
          }
          </div> : <div className='flex items-center justify-center h-[700px]'> <img src={spinner} alt="spinner" className='w-32' /></div>
        }
    </div>
  )
}

export default PostBlog