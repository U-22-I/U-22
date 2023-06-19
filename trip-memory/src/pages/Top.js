import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Top = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.signOut();
    navigate('/login', { replace: true });
  };
  return (
    <div>
      <h1>ホームページ</h1>
      <button onClick={handleLogout}>ログアウト</button>
    </div>
  );
};

export default Top;
