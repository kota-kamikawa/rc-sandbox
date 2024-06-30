import { RecoilRoot, useRecoilValue } from 'recoil';

import { authState } from '../store/auth';
import { Home } from './pages/Home';
import { Welcome } from './pages/Welcome';

function App() {
  const auth = useRecoilValue(authState);

  return (
    <>
      <RecoilRoot>{auth.token !== null ? <Home /> : <Welcome />}</RecoilRoot>
    </>
  );
}

export default App;
