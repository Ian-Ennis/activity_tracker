import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Header( {header} ) {
    const navigate = useNavigate()

    return(
        <header className="header">
            {header}
        </header>
    )
}