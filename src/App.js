import "./index.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Login from "./components/Account/Login";
import Signup from "./components/Account/Signup";
import Home from "./components/Home";
import Resources from "./components/Resources"

export default function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false)

  console.log('current user:', currentUser)

  return (
    <div className="App">
      <NavigationBar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <header className="header">
        <h1>Leg-Up Activity Tracker</h1>
      </header>
      <Routes>
        <Route path="/" element={<Signup setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser} />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser} /> } />
        <Route path="/home" element={<Home currentUser={currentUser}/>} />
        <Route path="/resources" element={<Resources currentUser={currentUser}/>} />
      </Routes>
    </div>
  );
}
