import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { Action } from "redux";
import rootReducer, { RootState } from "../reducers";
import { ThunkAction } from "redux-thunk";
// import { env } from "../config";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
  preloadedState: { ...rootReducer },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch();
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

export default store;
