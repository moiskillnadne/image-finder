import { createSlice } from '@reduxjs/toolkit';

interface IUserState {
  name: string;
}

const initialState = {
  name: '',
} as IUserState;

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: {},
});

export default userSlice;
