import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { axiosWithAuth } from '../auth/axiosWithAuth'

export default function Post(props) {
    const [post, setPost] = useState({})

    useEffect(() => {
        setPost(props.post)
    }, [props.post])

    return (
        <div className='post-wrapper'>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    )
}