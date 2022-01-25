import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

export default function App() {
  const [user, setUser] = useState();
  const [activity, setActivity] = useState("");

  const header = <h1>Leg Up</h1>;

  return (
    <div className="App">
      <Header header={header} />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home">
          <Home activity={activity} setActivity={setActivity} />
        </Route>
      </Switch>
    </div>
  );
}

// npm install react-router-dom
