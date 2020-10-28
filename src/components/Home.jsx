import React, { useEffect, useState } from 'react'
import axios from 'axios'
import axiosWithAuth from '../auth/axiosWithAuth'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Post from './Post'


useEffect(() => {
    axios
        .post('https://beedev-blog-api.herokuapp.com/api/posts')
        .then(res => {
        console.log("Form -> res", res.data)
        setPost([...post, res.data])
        setServerError(null)
        })
        .catch(err => { 
        setServerError("There is an error!")
        }) 
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


export default Home