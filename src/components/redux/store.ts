// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import dataHome from "./slicedata";
export const store = configureStore({
  reducer: {
    data: dataHome,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
