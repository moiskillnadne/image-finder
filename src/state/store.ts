import { configureStore } from '@reduxjs/toolkit';

function createApplicationStore() {
  const store = configureStore({
    reducer: {},
  });

  return {
    ...store,
  };
}

const store = createApplicationStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
