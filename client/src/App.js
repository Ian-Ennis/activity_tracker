import { useState } from 'react'
import Header from './components/Header';
import Login from './components/Login'

export default function App () {
  const [user, setUser] = useState();

  const header = <h1>Leg Up</h1>

  // if (!user) return

  return (
    <div>
      <Header header={header} />
      <Login onLogin={setUser} />
    </div>
  )
}
