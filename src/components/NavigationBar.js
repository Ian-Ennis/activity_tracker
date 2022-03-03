import React from 'react'
import { Link } from 'react-router-dom'

export default function TopNav() {
    return(
        <nav>
            <Link to="/login">Login</Link> | {' '}
            <Link to="/activity_forms">Activity Tracker</Link> | {' '}
            <Link to="/resources">Resources</Link>
        </nav>
    )
}

