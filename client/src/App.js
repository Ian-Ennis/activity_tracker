import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import Login from "./components/Login";
import ActivityForms from "./components/ActivityForms";
import Resources from "./components/Resources"

export default function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login onLogin={setUser} />} />
        <Route path="/activity_forms" element={<ActivityForms />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </div>
  );
}
