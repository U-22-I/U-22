import Header from '../components/Header';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Mypage = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.signOut();
    navigate('/login', { replace: true });
    alert('ログアウトに成功しました。')
  };
  return (
    <div>
      <Header />
      <button onClick={handleLogout}>ログアウト</button>
    </div>
  );
};

export default Mypage;
