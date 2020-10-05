import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Admin = (props) => {
    const logout = () => {
        localStorage.removeItem('token')
      }

      const [post, setPost] = useState({ title: "", content: ""})

    return (
        <div>
            <Link to='dashboard'>Dashboard</Link>
            {<a href='/' onClick={logout}>Logout</a>}
        </div>
    )
}

export default Admin