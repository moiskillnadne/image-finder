import { removeUser, saveUser } from '../modules/Authentication/state/slice';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';

const LOCAL_STORAGE_USER_KEY = 'user';

export const useAuth = () => {
  const user = useAppSelector(state => state.user.name);

  const dispatch = useAppDispatch();
  const setUser = (payload: string) => {
    dispatch(saveUser(payload));
    localStorage.setItem(LOCAL_STORAGE_USER_KEY, payload);
  };
  const clearUser = () => {
    dispatch(removeUser());
    localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
  };

  return {
    user,
    setUser,
    clearUser,
  };
};
