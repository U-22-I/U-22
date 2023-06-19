import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import './styles/Global.css'
import Login from "./pages/Login" 
import Mypage from "./pages/Mypage";
import SignUp from "./pages/SignUp";
import { AuthProvider } from "./context/AuthContext";
import Top from "./pages/Top";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/mypage" element={ <Mypage /> } />
          <Route path="/signup" element={ <SignUp /> } />
          <Route path="/top" element={ <Top /> } />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;