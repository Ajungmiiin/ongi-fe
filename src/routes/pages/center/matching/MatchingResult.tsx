import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SeniorCard from '../../../../components/center/senior/SeniorCard';

const MatchingResult = () => {
  const navigate = useNavigate();

  return (
    <section className="flex min-h-[100svh] flex-col justify-between p-5">
      <div>
        <header className="relative mb-8 py-4">
          <button onClick={() => navigate('/center')} className="absolute top-0 bottom-0 left-0 cursor-pointer">
            <img src="public/arrow.png" alt="뒤로가기" />
          </button>
          <h3 className="text-center text-2xl font-semibold">매칭 결과 조회</h3>
        </header>

        <ul className="space-y-4">
          <li className="w-full rounded-lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)]">
            <div className="flex flex-col justify-between p-4">
              <div className="mb-3 flex w-full items-center justify-between">
                <p className="text-xl font-semibold">{`김OO 어르신`}</p>
                <span className="rounded-lg bg-[#FFF8E3] px-2 text-sm text-[#FFA60C]">승인 대기중</span>
              </div>

              <div className="mb-3">
                <div className="grid grid-cols-2 text-base">
                  <span className="text-gray-800">근무요일</span>
                  <p>월요일 ~ 토요일</p>
                </div>
                <div className="grid grid-cols-2">
                  <span className="text-gray-800">근무시간</span>
                  <p>09:00 ~ 18:00</p>
                </div>
                <div className="grid grid-cols-2">
                  <span className="text-gray-800">케어항목</span>
                  <p>식사보조, 배변보조</p>
                </div>
                <div className="grid grid-cols-2">
                  <span className="text-gray-800">시급</span>
                  <p>13000원</p>
                </div>
              </div>

              <Link
                to={'/center/matching/condition'}
                className="bg-primary-400 block cursor-pointer rounded-lg py-2 text-center text-white"
              >
                상세 내용 확인
              </Link>
            </div>
          </li>
          <li className="w-full rounded-lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)]">
            <div className="flex flex-col justify-between p-4">
              <div className="mb-3 flex w-full items-center justify-between">
                <p className="text-xl font-semibold">{`김OO 어르신`}</p>
                <span className="bg-primry-100 text-primary-400 rounded-lg px-2 text-sm">매칭 조율중</span>
              </div>

              <div className="mb-3">
                <div className="grid grid-cols-2 text-base">
                  <span className="text-gray-800">근무요일</span>
                  <p>월요일 ~ 토요일</p>
                </div>
                <div className="grid grid-cols-2">
                  <span className="text-gray-800">근무시간</span>
                  <p>09:00 ~ 18:00</p>
                </div>
                <div className="grid grid-cols-2">
                  <span className="text-gray-800">케어항목</span>
                  <p>식사보조, 배변보조</p>
                </div>
                <div className="grid grid-cols-2">
                  <span className="text-gray-800">시급</span>
                  <p>13000원</p>
                </div>
              </div>

              <Link
                to={'/center/matching/condition/coordinate'}
                className="bg-primary-400 block cursor-pointer rounded-lg py-2 text-center text-white"
              >
                상세 내용 확인
              </Link>
            </div>
          </li>
          <li className="w-full rounded-lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)]">
            <div className="flex flex-col justify-between p-4">
              <div className="mb-3 flex w-full items-center justify-between">
                <p className="text-xl font-semibold">{`김OO 어르신`}</p>
                <span className="rounded-lg bg-[#DDE7FF] px-2 text-sm text-[#6792FF]">매칭 완료</span>
              </div>

              <div className="mb-3">
                <div className="grid grid-cols-2 text-base">
                  <span className="text-gray-800">근무요일</span>
                  <p>월요일 ~ 토요일</p>
                </div>
                <div className="grid grid-cols-2">
                  <span className="text-gray-800">근무시간</span>
                  <p>09:00 ~ 18:00</p>
                </div>
                <div className="grid grid-cols-2">
                  <span className="text-gray-800">케어항목</span>
                  <p>식사보조, 배변보조</p>
                </div>
                <div className="grid grid-cols-2">
                  <span className="text-gray-800">시급</span>
                  <p>13000원</p>
                </div>
              </div>

              <Link
                to={'/center/matching/condition'}
                className="bg-primary-400 block cursor-pointer rounded-lg py-2 text-center text-white"
              >
                상세 내용 확인
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MatchingResult;
