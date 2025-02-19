import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 🔹 React Router 추가
import useAuthStore from '../../store/useAuthStore';
import { useQuery } from '@tanstack/react-query';
import client from '../../api/instnace';

// 유저 프로필 컴포넌트
const UserProfile = ({ userName }: { userName: string }) => {
  return (
    <div className="flex w-full max-w-[335px] items-center justify-between">
      {/* 왼쪽 로고 및 텍스트 */}
      <div className="flex flex-col justify-between">
        <img src="/images/logo.png" alt="Logo" className="h-[40px] w-[55px]" />
        <div className="mt-3">
          <p className="text-[24px] leading-[28.8px] font-normal text-gray-900">안녕하세요</p>
          <p className="text-[24px] leading-[33.6px] font-semibold text-gray-900">{userName}님</p>
        </div>
      </div>
      {/* 프로필 이미지 및 마이페이지 버튼 */}
      <div className="flex flex-col items-center">
        <img
          src="/images/girl.png"
          alt="Profile"
          className="h-[100px] w-[100px] rounded-full border-[1.25px] border-gray-200"
        />
        <button className="mt-2 h-[33px] w-[100px] rounded-md bg-gray-100 px-4 py-1 text-[14px] text-gray-700 shadow">
          마이페이지
        </button>
      </div>
    </div>
  );
};

// 🔹 카드 공통 컴포넌트
const Card = ({ title, description, image, buttonText, buttonColor, titleColor }: any) => {
  return (
    <div className="w-[335px] rounded-lg border border-[#E5E5E5] bg-white p-6 shadow-md">
      <div className="flex items-start justify-between">
        <p className={`text-lg font-bold ${titleColor}`}>{title}</p>
        <img src={image} alt="Card Icon" className="h-12 w-12 opacity-90" />
      </div>
      <p className="mt-2 text-sm leading-relaxed text-gray-700">
        {description.split('\n').map((line: string, index: number) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
      <button className={`mt-4 w-full rounded-md py-3 text-white shadow-md transition ${buttonColor}`}>
        {buttonText}
      </button>
    </div>
  );
};

// 🔹 매칭 카드 공통 컴포넌트 (onClick 추가)
const MatchCard = ({ title, description, image, onClick }: any) => {
  return (
    <div
      className="w-full cursor-pointer rounded-lg bg-white p-3 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)]"
      onClick={onClick}
    >
      <div className="flex flex-col items-start justify-between">
        <p className="text-lg font-semibold text-gray-900">{title}</p>
        <p className="text-md mt-1 leading-snug text-gray-600">{description}</p>
        <img src={image} alt="Matching Icon" className="size-[45px] self-end" />
      </div>
    </div>
  );
};

// 🔹 메인 페이지 컴포넌트
const MainPage = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthStore();
  useEffect(() => {
    if (isLoggedIn !== 'ROLE_CENTER') {
      navigate('/');
    }
  }, []);

  // 에러핸들링 x
  const { data, isPending } = useQuery({
    queryKey: ['center'],
    queryFn: async () => {
      const response = await client.get('/center/essential');
      console.log(response);
      return response.data.data;
    },
  });

  if (isPending) {
    return null;
  }

  return (
    <div className="p-5">
      {/* 유저 프로필 */}
      <div className="mb-6 flex justify-between">
        <div>
          <div className="mb-3">
            <img src="src\assets\Union.png" alt="ONGI-LOGO" />
          </div>
          <h3 className="text-2xl text-gray-900">
            안녕하세요<div className="font-semibold">{`${data.centerName}님`}</div>
          </h3>
        </div>
        <div>
          <div className="mb-3 overflow-hidden rounded-full border border-gray-200">
            <img src="public/center.png" alt="caregiver-profile-image" />
          </div>

          {/* 라우트 경로 임의 설정 */}
          <button
            type="button"
            className="block w-full cursor-pointer rounded-lg bg-gray-100 py-1.5 text-center text-sm text-gray-900"
          >
            마이페이지
          </button>
        </div>
      </div>

      {/* 카드 컨테이너 */}
      <div className="space-y-5">
        <div className="rounded-lg p-4 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)]">
          <div className="mb-2 flex justify-between">
            <div>
              <p className="mb-0.5 text-[22px] font-semibold text-[#FEA65E]">어르신 등록 및 수정</p>
              <p className="text-sm text-gray-600">
                어르신에게 필요한 서비스 또는
                <br />
                수정사항을 입력해주세요!
              </p>
            </div>
            <div className="size-[60px]">
              <img src="src/assets/Note.png" alt="note-icon" />
            </div>
          </div>
          <Link to="/center/senior" className="block rounded-lg bg-[#FEA65E] py-2 text-center text-sm text-white">
            등록 및 수정하러 가기 &gt;
          </Link>
        </div>

        <div className="rounded-lg p-4 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)]">
          <div className="mb-2 flex justify-between">
            <div>
              <p className="mb-0.5 text-[22px] font-semibold text-[#497FE2]">
                어르신별 요양보호사
                <br /> 모집 요건 설정
              </p>
              <p className="text-sm text-gray-600">
                어르신별 요건을 설정하고 <br />
                등록해주세요!
              </p>
            </div>
            <div className="size-[60px]">
              <img src="src/assets/magnifying.png" alt="magnifying-icon" />
            </div>
          </div>
          <Link
            to="/caregiver/work-conditions/location"
            className="block rounded-lg bg-[#63A2FF] py-2 text-center text-sm text-white"
          >
            모집 여건 설정하러 가기 &gt;
          </Link>
        </div>
      </div>

      {/* 매칭 버튼 컨테이너 */}
      <div className="mx-auto mt-6 flex gap-3">
        <MatchCard
          title="매칭 진행하기"
          description="어르신에게 딱 맞는 요양보호사를 찾아드릴게요"
          image="/images/peopleheart.png"
          onClick={() => navigate('/center/matching')} // 🔹 클릭 시 matchingInfo로 이동
        />
        <MatchCard
          title="매칭 결과 확인하기"
          description="매칭을 넣은 결과를 한눈에 확인할 수 있어요"
          image="/images/card.png"
          onClick={() => navigate('/center/matching/result')} // 🔹 클릭 시 matchingFiltering로 이동
        />
      </div>
    </div>
  );
};

export default MainPage;
