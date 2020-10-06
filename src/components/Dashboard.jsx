import React, { useEffect, useState } from 'react'
import axios from 'axios'
import axiosWithAuth from '../auth/axiosWithAuth'
import { Link } from 'react-router-dom'
import Post from './Post'
import User from './User'

export default function Dashboard() {
    const logout = () => {
        localStorage.removeItem('token')
      }
      const [posts, setPosts] = useState([])
      const [users, setUsers] = useState([])

    useEffect(() => {
        axios
        .get('https://beedev-blog-api.herokuapp.com/api/posts')
        .then(res => setPosts(res.data))
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axiosWithAuth()
        .get('https://beedev-blog-api.herokuapp.com/api/users/1')
        .then(res => setUsers(res.data))
        .catch(err => console.log(err))
    }, [])

    return (
        <div className='private-route'>
            <nav>
                <Link to='admin'>Admin</Link>
                {<a href='/' onClick={logout}>Logout</a>}
            </nav>
            <div>
                <ul>
                    {users.map((user) => {
                        return (<User key={user.id} user={user}></User>)
                    })}
                </ul>
            </div>
            <div>
                <ul>
                    {posts.map((post) => {
                        return (<Post key={post.id} post={post}></Post>)
                    })}
                </ul>
            </div>
        </div>
    )
}