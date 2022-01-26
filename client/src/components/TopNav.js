import React from 'react'
import { Link } from 'react-router-dom'

export default function TopNav() {
    return(
        <nav>
            <Link to="/">Welcome</Link> | {' '}
            <Link to="/login">Login / Logout</Link> | {' '}
            <Link to="/home">Home</Link>
        </nav>
    )
}

