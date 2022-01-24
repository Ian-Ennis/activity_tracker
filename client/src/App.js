import { useState } from 'react'
import User from './components/User'
import Home from './components/Home'

export default function App () {
  const [user, setUser] = useState();
  const [activity, setActivity] = useState('');

  const header = <h1>Leg Up</h1>
  
  return (
    <div className='App'>
      <User header={header} />
      <Home header={header} activity={activity} setActivity={setActivity}/>
    </div>
  )
}
