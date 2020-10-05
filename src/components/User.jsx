import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { axiosWithAuth } from '../auth/axiosWithAuth'

export default function User(props) {
    const [user, setUser] = useState({})

    useEffect(() => {
        setUser(props.user)
    }, [props.user])

    return (
        <div>
            <p>{user.fullName}</p>
            <p>{user.username}</p>
        </div>
    )
}