import { useState } from 'react'
import Header from './components/Header';
import Login from './components/Login'
import Home from './components/Home';


export default function App () {
  const [user, setUser] = useState();
  const [activity, setActivity] = useState('');

  const header = <h1>Leg Up</h1>

  return (
    <div>
      <Header header={header} />
      <Login onLogin={setUser} />
      <Home header={header} setActivity={setActivity}/>
    </div>
  )
}
