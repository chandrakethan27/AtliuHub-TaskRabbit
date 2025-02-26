// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './slices/taskSlice'

const store = configureStore({
  reducer: {
        taskReducer: taskReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;