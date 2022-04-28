import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Post = (props) => {
    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then( (response) => {
                const data = response.data
                setPosts(data)
            })
            .catch(( err ) => {
                alert(err.message)
            })
    },[])
    return (
        <div>
            <h1> Total Posts - { posts.length } </h1>
            <ul>
                {
                    posts.map((post) => {
                        return <li key={ post.id }> <Link to={`/post/${post.id}`}>{post.title}</Link> </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Post