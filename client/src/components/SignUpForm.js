import React, { useState } from 'react'

export default function SignUpForm ({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  function handleSubmit (e) {
    e.preventDefault()
    setErrors([])
    setIsLoading(true)
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        username,
        password
      })
    }).then(r => {
      setIsLoading(false)
      if (r.ok) {
        r.json().then(user => onLogin(user))
      } else {
        r.json().then(err => setErrors(err.errors))
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='email'>Email</label>
      <input
        type='text'
        id='email'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
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
      <button type='submit'>{isLoading ? 'Loading...' : 'Sign Up'}</button>
    </form>
  )
}
