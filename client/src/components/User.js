import React from 'react'

export default function User( {header, handleClick} ) {
    return(
        <div>
            {header}
            <h3>Please Sign in or Create an Account</h3>
            <form>
                <input type="text"></input> Username
                <input type="text"></input> Password
            </form>
            <button onClick={handleClick}>Log in</button>
            <button>Create Account</button>
        </div>
    )
}