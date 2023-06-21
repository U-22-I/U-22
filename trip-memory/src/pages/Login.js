import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      navigate('/Mypage'); // ログイン成功時に /top にリダイレクト
    } catch (error) {
      console.log(error);
      // ログインエラーの処理を追加する場合はここに記述
    }
  };

  return (
    <div>
      <h1>ログイン</h1>
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
        <div>
          ユーザ登録は<Link to={'/signup'}>こちら</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;