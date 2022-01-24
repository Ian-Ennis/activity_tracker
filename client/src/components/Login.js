import { useState } from 'react'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

export default function Login ({ header, onLogin }) {
  const [showLogin, setShowLogin] = useState(true)

  return (
    <div>
      {header}
      {showLogin ? (
        <div>
          <LoginForm onLogin={onLogin} />
          <br />
          <p>
            Need an account? &nbsp;
            <button onClick={() => setShowLogin(false)}>Create Account</button>
          </p>
        </div>
      ) : (
        <div>
          <SignUpForm onLogin={onLogin} />
          <br />
          <p>
            Have an account already? &nbsp;
            <button onClick={() => setShowLogin(true)}>Login In</button>
          </p>
        </div>
      )}
    </div>
  )
}
