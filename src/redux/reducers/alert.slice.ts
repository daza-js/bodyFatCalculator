import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { initialStateAlert, TypesAlerts } from "./types";

export const alertsSlice = createSlice({
  name: "alert",
  initialState: initialStateAlert,
  reducers: {
    sendAlert: (state, action: PayloadAction<TypesAlerts>) => {
      state.alert = {
        id: nanoid(),
        ...action.payload,
      };
    },
    closeAlert: (state, action: PayloadAction<TypesAlerts["id"]>) => {
      if (action.payload === state.alert?.id) state.alert = undefined;
    },
  },
});

export const { sendAlert, closeAlert } = alertsSlice.actions;

export default alertsSlice.reducer;
