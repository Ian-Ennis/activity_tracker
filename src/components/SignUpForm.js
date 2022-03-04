import React, { useState } from 'react'
const API = 'http://localhost:3000/api/v1'

export default function SignUpForm ({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  function handleSubmit (e) {
    e.preventDefault()

    fetch(`${API}/users`, {
      method: 'POST',
      headers: {
        Accepts: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: { username, email, password } })
    })
      .then(res => res.json())
      .then(json => console.log('Got Some', json))
    setUsername('')
    setEmail('')
    setPassword('')
  }

  return (
    <form onSubmit={handleSubmit} >
      <label htmlFor='username'>Username</label>
      <input
        type='text'
        id='username'
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        id='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <label htmlFor='email'>Email</label>
      <input
        type='text'
        id='email'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button type='submit'>Register</button>
    </form>
  )
}
