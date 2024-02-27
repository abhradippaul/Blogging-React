import React, { useEffect, useState } from 'react'
import ContentCard from './ContentCard'
import service from '@/appwrite/config'

function ContentSection() {
  const [postArr,setPostArr] = useState([])
  useEffect(() => {
    service.getPosts().then((e) => {
      console.log(e.documents)
      setPostArr(e.documents)
    })
  },[])
  return (
    <div className='min-h-dvh bg-slate-100 p-4 flex flex-wrap justify-around'>
      {
        postArr?.map((value) => {
        return <ContentCard value={value} key={value.$databaseId} />
        })
      }
      <ContentCard />
    </div>
  )
}

export default ContentSection