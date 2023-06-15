import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home"

function App() {
  return (
    <div className="App">
      <h1>Trip-Memory</h1>
      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>
    </div>
  );
}

export default App;