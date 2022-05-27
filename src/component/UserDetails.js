import React from 'react'
import {useParams} from 'react-router-dom';

function UserDetails() {
//  const param=useParams();
 const {userid}=useParams()
//  const userid1=param.userid;
//  userid used in app.js to extract the route parameter(url parameter)
  return (
    <div>Details of user {userid}</div>
  )
}

export default UserDetails