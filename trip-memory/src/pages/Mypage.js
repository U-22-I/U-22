import Header from "../components/Header";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Mypage = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.signOut();
    navigate("/", { replace: true });
    alert("ログアウトに成功しました。");
  };
  return (
    <div>
      <Header />
      <button onClick={handleLogout}>ログアウト</button>
      <Footer />
    </div>
  );
};

export default Mypage;
