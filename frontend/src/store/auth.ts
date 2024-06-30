/**
 * Recoil atom for auth state
 * @packageDocumentation
 * @module store/auth
 * @preferred
 * @see https://recoiljs.org/docs/api-reference/core/atom
 * @see https://recoiljs.org/docs/api-reference/core/selector
 */
import { atom } from 'recoil';

interface User {
  id: number;
  username: string; // email
}

interface AuthState {
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
