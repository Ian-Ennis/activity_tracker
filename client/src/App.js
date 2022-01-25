import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";

export default function App() {
  const [user, setUser] = useState();
  const [activity, setActivity] = useState("");

  const header = <h1>Leg Up</h1>;

  return (
    <div className="App">
      <Header header={header} />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login onLogin={setUser}/>} />
          <Route path="/home" element={<Home activity={activity} setActivity={setActivity}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// npm install react-router-dom
