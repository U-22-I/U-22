import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home"
import Login from "./pages/Login"

function App() {
  return (
    <div className="App">
      <h1>Trip-Memory</h1>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
      </Routes>
    </div>
  );
}

export default App;