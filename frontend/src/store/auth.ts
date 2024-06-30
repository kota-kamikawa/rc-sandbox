/**
 * Recoil atom for auth state
 * @packageDocumentation
 * @module store/auth
 * @preferred
 * @see https://recoiljs.org/docs/api-reference/core/atom
 * @see https://recoiljs.org/docs/api-reference/core/selector
 */
import { atom, selector } from 'recoil';

export interface User {
  id: number;
  username: string; // email
}

export interface AuthState {
  token: string | null;
  user: User | null;
}

export const authState = atom<AuthState>({
  key: 'authState',
  default: {
    token: null,
    user: null,
  },
});

export const userState = atom<User | null>({
  key: 'userState',
  default: null,
});

export const authTokenState = selector({
  key: 'authTokenState',
  get: ({ get }) => {
    const { token } = get(authState);
    return token !== null;
  },
});
