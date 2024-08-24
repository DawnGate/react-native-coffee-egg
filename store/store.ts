import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./features/counter/counterSlice";
import { settingReducer } from "./features/setting/settingSlice";
import { orderReducer } from "./features/order/orderSlice";

export const store = configureStore({
  reducer: {
    setting: settingReducer,
    counter: counterReducer,
    order: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
