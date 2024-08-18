import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./features/counter/counterSlice";
import { settingReducer } from "./features/setting/settingSlice";

export const store = configureStore({
  reducer: {
    setting: settingReducer,
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
