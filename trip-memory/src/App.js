import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import './styles/Global.css'
import Login from "./pages/Login" 
import Mypage from "./pages/Mypage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/mypage" element={ <Mypage /> } />
      </Routes>
    </div>
  );
}

export default App;