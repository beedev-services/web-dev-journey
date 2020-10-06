import React, { useEffect, useState } from 'react'
import axios from 'axios'
import axiosWithAuth from '../auth/axiosWithAuth'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Post from './Post'


function Home() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get('https://beedev-blog-api.herokuapp.com/api/posts')
        .then(res => setPosts(res.data))
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>Welcome to the blog</h1>
            <ul>
                {posts.map((post) => {
                    return (<Post key={post.id} post={post}></Post>)
                })}
            </ul>
        </div>
    )
}

export default Home