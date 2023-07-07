import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/Global.css";
import Login from "./pages/Login";
import Mypage from "./pages/Mypage";
import SignUp from "./pages/SignUp";
import { AuthProvider } from "./context/AuthContext";
import Top from "./pages/Top";
import Inquiry from "./pages/Inquiry";
import Mission from "./pages/Mission";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <AuthProvider>
      <RecoilRoot>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/top" element={<Top />} />
            <Route path="/inquiry" element={<Inquiry />} />
            <Route path="/mission" element={<Mission />} />
          </Routes>
        </div>
      </RecoilRoot>
    </AuthProvider>
  );
}

export default App;
