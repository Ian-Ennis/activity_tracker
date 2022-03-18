import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import Activities from "./components/Activities";
import Resources from "./components/Resources"

export default function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className="App">
      <NavigationBar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <Header />
      <Routes>
        <Route path="/" element={<Signup setLoggedIn={setLoggedIn} />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} /> } />
        <Route path="/activities" element={<Activities currentUser={currentUser}/>} />
        <Route path="/resources" element={<Resources currentUser={currentUser}/>} />
      </Routes>
    </div>
  );
}
