import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IUserState {
  name: string
}

const initialState = {
  name: "",
} as IUserState

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    removeUser: state => {
      state.name = ""
    },
  },
})

export const { saveUser, removeUser } = userSlice.actions

export default userSlice
