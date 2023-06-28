import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import "../styles/Login.css";
import Video from "../components/Video";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      navigate("/Mypage");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <div className="form">
        <h1>ログイン</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>メールアドレス</label>
            <input name="email" type="email" placeholder="email" />
          </div>
          <div>
            <label>パスワード</label>
            <input name="password" type="password" placeholder="password" />
          </div>
          <div>
            <button>ログイン</button>
          </div>
          <div className="login-link">
            ユーザ登録は<Link to={"/signup"}>こちら</Link>
          </div>
        </form>
      </div>
      <Video />
    </div>
  );
};

export default Login;
