import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import ActivityForms from "./components/ActivityForms";
import NavigationBar from "./components/NavigationBar";

export default function App() {
  const [user, setUser] = useState();

  const header = <h1>IAN'S APP</h1>;

  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Header header={header} />} />
        <Route path="/login" element={<Login onLogin={setUser} />} />
        <Route path="/activity_forms" element={<ActivityForms header={header} />} />
      </Routes>
    </div>
  );
}
