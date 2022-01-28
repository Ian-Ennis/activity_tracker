import { useState } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

export default function Login ({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true)

  return (
    <div className="sign_login">
      {showLogin ? (
        <div className="login">
          <LoginForm onLogin={onLogin} />
          <br />
          <p id="create_account">
            Need an account? &nbsp;
            <button onClick={() => setShowLogin(false)}>Create Account</button>
          </p>
        </div>
      ) : (
        <div className="signin">
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
