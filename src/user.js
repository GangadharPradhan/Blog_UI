import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const User = ( props ) => {
    const [ users, setUser ] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setUser(response.data)
            })
            .catch((err) => {
                alert(err.message)
            })
    },[])

    return (
        <div>
            {
                users.length > 0 && <h1> USERS LIST - {users.length} </h1>
            }
            <div>
                <ul>
                    {
                        users.map((user)=> {
                            return <li key={ user.id}><Link to={`user/${user.id}`}> { user.name } </Link></li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default User
