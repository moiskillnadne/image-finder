import { configureStore } from "@reduxjs/toolkit"
import userSlice from "../modules/Authentication/state/slice"
import finderSlice from "../modules/Finder/state/slice"

function createApplicationStore() {
  const store = configureStore({
    reducer: {
      user: userSlice.reducer,
      finder: finderSlice.reducer,
    },
  })

  return {
    ...store,
  }
}

const store = createApplicationStore()

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
