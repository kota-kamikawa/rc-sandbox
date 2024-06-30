import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useRecoilValue } from 'recoil';

import { authState } from '../store/auth';

export const Route = createFileRoute('/home')({
  component: Home,
});

function Home() {
  const auth = useRecoilValue(authState);
  const navigate = useNavigate();

  // 本当はbeforeLoadedを使いたかったが、RecoilのuseRecoilValueは非同期で、beforeLoadedの段階では更新後の値が取れないため、ここでチェック
  // やり方わかったら修正する
  if (auth.token === null) {
    navigate({
      to: '/login',
    });
  }

  return (
    <>
      <>
        <h1>Home</h1>
        <p>ようこそ、{auth.user!.username} さん</p>
      </>
    </>
  );
}
