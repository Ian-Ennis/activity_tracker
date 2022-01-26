import { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Login from './components/Login'
import Main from './components/Main'
import NavBar from './components/NavBar'

export default function App () {
  const [user, setUser] = useState()
  const [activity, setActivity] = useState()

  const header = <h1>Leg Up</h1>

  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Header header={header} />
        </Route>
        <Route exact path='/login'>
          <Login onLogin={setUser} />
        </Route>
        <Route exact path='/main'>
          <Main activity={activity} setActivity={setActivity} />
        </Route>
      </Switch>
    </div>
  )
}
