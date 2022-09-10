import { configureStore } from "@reduxjs/toolkit";
import cartSlice, { getTotals } from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

//useSelector, useDispatch 를 hook으로 만들어 type을 component마다 import하는 행위를 줄임
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
