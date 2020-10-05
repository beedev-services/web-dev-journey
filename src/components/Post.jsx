import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { axiosWithAuth } from '../auth/axiosWithAuth'

export default function Post(props) {
    const [post, setPost] = useState({})

    useEffect(() => {
        setPost(props.post)
    }, [props.post])

    return (
        <div>
            <p>{post.title}</p>
            <p>{post.content}</p>
            <p>{post.category_id}</p>
            <p>{post.users_id}</p>
        </div>
    )
}