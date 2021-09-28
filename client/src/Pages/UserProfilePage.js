import React from 'react'
import { Link, useParams } from 'react-router-dom'

import UserProfile from '../components/UserProfile/UserProfile'

const UserProfilePage = () =>{
  const {userId} = useParams()
  return(
    <div>
      <h2>UserProfilePage</h2>
      <UserProfile userId= {userId} />
      {/* <Link to= {`/user/${userId}/edit`} >Edit</Link> */}
    </div>
  )
}

export default UserProfilePage;