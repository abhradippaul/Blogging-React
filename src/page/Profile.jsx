import UserInfo from '@/components/UserInfo'
import { useUserContext } from '@/context/UserContext'
import React from 'react'

function Profile() {
    const {status} = useUserContext()
  return (
    <div className='bg-slate-300 min-h-dvh'>
        {
            status ? <UserInfo /> : <div>Please login</div>
        }
    </div>
  )
}

export default Profile