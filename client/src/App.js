import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [user, setUser] = useState();
  const [activity, setActivity] = useState("");

  const header = <h1>Leg Up</h1>;

  return (
    <div className="App">
      <Header header={header}/>
      <Router>
        <Routes>
          <Route
            exact path="/home" element={
              <Home activity={activity} setActivity={setActivity} /> }/>
        </Routes>
      </Router>
    </div>
  );
}
