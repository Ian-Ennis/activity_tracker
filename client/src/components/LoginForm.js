import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const API = 'http://localhost:3000/api/v1';

export default function LoginForm ({ onLogin }) {
  const [loginUser, setLoginUser] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const navigate = useNavigate()

  function handleSubmit (e) {
    e.preventDefault();

    const loginData = {
      user: { username: loginUser, password: loginPassword }
    };

    function onLoggedIn() {
      // console.log('LOGGED IN:', json.jwt);
      // localStorage.setItem('jwt', json.jwt);
      navigate('/home')
    }

    fetch(`${API}/login`, {
      method: 'POST',
      headers: {
        Accepts: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
    .then((res) => res.json())
    .then((json) => localStorage.setItem('jwt', json.jwt));

    setLoginUser('');
    setLoginPassword('')
    onLoggedIn()
  }

  return (
    <div>
      {localStorage.getItem('jwt') ? (
        <button
        onClick={() => {
          localStorage.setItem('jwt', '');
          navigate('/')
        }}
        >
          Logout
        </button>
  ) : (
    <>
    <form onSubmit={handleSubmit} >
      <label htmlFor='username'>Username</label>
      <input
        type='text'
        id='username'
        value={loginUser}
        onChange={e => setLoginUser(e.target.value)}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        id='password'
        value={loginPassword}
        onChange={e => setLoginPassword(e.target.value)}
      />
      <button type='submit'>Login</button>
    </form>
    </>
    )}
    </div>
  )
}
