import React from 'react'
import { useParams } from 'react-router-dom';
import BlogList from './BlogList';
const Post = () => {
  const blog = [
  { id: 1, title: "My First Blog", content: "This is the first blog post." },
  { id: 2, title: "Learning React", content: "React is a powerful library!" },
  { id: 3, title: "Routing in React", content: "React Router makes navigation easy." }
];

    const {id} = useParams();
    const post = blog.find((p)=>p.id === parseInt(id));
    if(!post) return <p>post not found</p>
  return (
    <div>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
    </div>
  )
}

export default Post