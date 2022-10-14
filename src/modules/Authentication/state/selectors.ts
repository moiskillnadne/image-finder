import { RootState } from './../../../state/store';

export const usernameSelector = (state: RootState) => state.user.name;
