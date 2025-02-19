import { useQuery } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';
import client from '../../../../api/instnace';

import SeniorCard from '../../../../components/center/senior/SeniorCard';

const SeniorInfoPage = () => {
  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ['senior'],
    queryFn: async () => {
      const response = await client.get('/senior');
      return response.data.data;
    },
  });

  if (!data) return null;
  console.log(data);
  return (
    <section className="flex min-h-[100svh] flex-col justify-between p-5">
      <header className="relative py-4">
        <button onClick={() => navigate('/center')} className="absolute top-0 bottom-0 left-0">
          <img src="public/arrow.png" alt="뒤로가기" />
        </button>
        <h3 className="text-center text-2xl font-semibold">어르신 등록 및 수정</h3>
      </header>

      <div className="py-4 text-gray-900">
        <div className="flex justify-between">
          <p className="mb-5">센터에 등록된 어르신 현황</p>
          <Link to="/center/senior/register/basic-info" className="text-primary-500">
            어르신 등록하기
          </Link>
        </div>

        <ul className="flex flex-col gap-4">
          {data.map((senior: any) => (
            <SeniorCard
              name={senior.name}
              id={`${senior.name} ${senior.birthDate}`}
              careCondition={senior.careCondition}
              gradeType={senior.gradeType}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SeniorInfoPage;
