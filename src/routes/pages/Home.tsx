import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/useAuthStore';
import { getCookie } from '../../utils/cookie';

const Home = () => {
  const { isLoggedIn, logout } = useAuthStore();
  const token = getCookie('accessToken');

  const navigate = useNavigate();
  useEffect(() => {
    if (token === undefined) {
      logout();
      return;
    } else if (isLoggedIn === 'ROLE_CAREGIVER') {
      navigate(`/caregiver`);
    } else if (isLoggedIn === 'ROLE_CENTER') {
      navigate('/center');
    }
  }, []);

  const LinkStyle = 'flex w-full items-center gap-2 rounded-xl';
  const ButtonDesc = 'mb-2 text-xl font-medium text-gray-950';
  return (
    <main className="flex min-h-[100svh] flex-col justify-between">
      <div className="mt-20 text-center">
        <h1>
          <img src="public/Logo_text.png" alt="로고" />
        </h1>
      </div>
      <div className="space-y-4 p-5">
        {/* 요양보호사용 */}
        <Link to="/login?q=caregiver" className={`${LinkStyle} bg-[#FFF5EA]`}>
          <div>
            <img src="public/caregiver.png" alt="요양보호사 이미지" />
          </div>
          <div className="text-left">
            <p className={ButtonDesc}>구직자용 로그인</p>
            <span className="text-gray-500">요양보호사, 사회복지사, 간호조무사</span>
          </div>
        </Link>

        {/* 관리자용 */}
        <Link to="/login?q=center" className={`${LinkStyle} bg-[#EEF6FF]`}>
          <div>
            <img src="public/center.png" alt="요양보호사 이미지" />
          </div>
          <div className="text-left">
            <p className={ButtonDesc}>구인자용 로그인</p>
            <span className="text-gray-500">요양기관 관리자</span>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Home;
