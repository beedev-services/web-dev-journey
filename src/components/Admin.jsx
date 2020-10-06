import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Admin = (props) => {
    const logout = () => {
        localStorage.removeItem('token')
      }

      const [post, setPost] = useState({ title: "", content: ""})

    return (
        <div className='private-route'>
            <nav>
                <Link to='dashboard'>Dashboard</Link>
                {<a href='/' onClick={logout}>Logout</a>}
            </nav>
            <form className='add-post'>
                <label>Title:</label>
                <input id='title' name='title' type='text' placeholder='Post Title' />
                <label>Content:</label>
                <input id='content' name='content' type='text' placeholder='Post Content' />
                <label>Date:</label>
                <input id='date' name='date' type='text' placeholder='Date' /><label>Title:</label>
                <input id='category_id' name='category' type='text' placeholder='Category' />
            </form>
        </div>
    )
}

export default Admin