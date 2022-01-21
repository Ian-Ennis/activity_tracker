import "./App.css";
import User from "./components/User";

export default function App() {

  const header = <h1>Leg-Up</h1>

  return (
    <div className="App">
      <User header={header} />
    </div>
  );
}

