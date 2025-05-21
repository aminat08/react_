import React from 'react'
import Mini from './Mini';
const BlogList = () => {
    const blog = [{ id: 1, title: "My First Blog", content: "This is the first blog post." },
    { id: 2, title: "Learning React", content: "React is a powerful library!" },
    { id: 3, title: "Routing in React", content: "React Router makes navigation easy." }]
    return (
        <div>
            {blog.map((d,index)=><Mini key={index} id={d.id} title={d.title} content={d.content} />)}
        </div>
    )
}

export default BlogList
