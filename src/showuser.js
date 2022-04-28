import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ShowUser = (props) => {
    const { id } = props.match.params
    const [ userDetails, setUserDetails ] = useState({})
    const [ userPosts, setUserPosts ] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                setUserDetails(response.data)
            })
            .catch((err) => {
                alert(err.message)
            })

            axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((response) => {
                setUserPosts(response.data)
            })
            .catch((err) => {
                alert(err.message)
            })
    },[])

    return (
        <div>
            { Object.keys(userDetails).length > 0 && <h1> USERNAME : { userDetails.name.toUpperCase() }</h1>}
            <h1>Post Written By User </h1>
            <ul>
                {
                    userPosts.map((userPost) => {
                        return <li key={ userPost.id }> <Link to={`/post/${userPost.id}`}> {userPost.title} </Link> </li>
                    })
                }
            </ul>
        </div>
    )
}

export default ShowUser