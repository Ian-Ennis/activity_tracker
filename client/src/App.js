import { useState } from 'react'
import User from './components/User'

export default function App () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const header = <h1>Welcome!</h1>

  return (
    <div className='App'>
      <User header={header} />
    </div>
  )
}