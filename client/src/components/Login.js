import { useState } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

export default function Login ({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true)

  return (
    <div>
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
            <button onClick={() => setShowLogin(true)}>Login</button>
          </p>
        </div>
      )}
    </div>
  )
}
