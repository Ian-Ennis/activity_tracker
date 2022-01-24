import { useState } from 'react'
import User from './components/User'
import Login from './components/Login'

export default function App () {
  const [user, setUser] = useState();

  if (!user) return <Login onLogin={setUser} />;
  
  const header = <h1>Leg Up</h1>

  return (
    <div className='App'>
      <Login header={header} />
    </div>
  )
}