import React from 'react'
import BlogList from './BlogList'
import { Link } from 'react-router-dom'
const Mini = ({id,title}) => {
  return (
    <div className="p-4 border rounded-md shadow mb-4">
       
        <Link to={`/post/${id}`}  className="text-pink-500 underline"> 
        <h3>{title}</h3></Link>
    </div>
  )
}

export default Mini