import { useState } from 'react';

import { useSetRecoilState } from 'recoil';

import { authState, userState } from '../store/auth';

interface LoginFormState {
  email: string;
  password: string;
}

const useLoginForm = () => {
  const [form, setForm] = useState<LoginFormState>({ email: '', password: '' });
  const setUser = useSetRecoilState(userState);
  const setAuth = useSetRecoilState(authState);

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 仮の認証ロジック（将来的にはAPI呼び出しに置き換え）
    // const result = await fetch('http://localhost:3001/login', {});
    const result = {
      token: 'dummy_token',
      user: {
        id: 1,
        username: form.email,
        // その他のユーザー情報はおいおい追加
      },
    };

    if (!result) {
      alert('ログイン失敗');
      return;
    }

    const user = {
      id: result.user.id,
      username: result.user.username,
      // その他のユーザー情報はおいおい追加
    };
    setUser(user);
    setAuth(result);
    alert('ログイン成功');
  };

  const logout = () => {
    setUser(null);
    setAuth({ token: null, user: null });
  };

  return {
    form,
    inputChange,
    login,
    logout,
  };
};

export default useLoginForm;
