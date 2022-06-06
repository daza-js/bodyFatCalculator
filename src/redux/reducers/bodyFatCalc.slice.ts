import { createSlice, PayloadAction } from "@reduxjs/toolkit";
/* Importing the values from the utils.ts file. */
import { valueMaxBarFemale, valueMaxBarMale } from "../../constants";
/* Importing the types from the types.ts file. */
import { initialStateBody, typeGender } from "./types";

export const bodyFatCalculatorSlice = createSlice({
  name: "bodyFatCalculator",
  initialState: initialStateBody,
  reducers: {
    changeGender(state, action: PayloadAction<typeGender>) {
      state.gender = action.payload;
    },
    saveBodyData(state, action: PayloadAction<number>) {
      const { payload } = action;
      let bodyFatPercentage = payload;
      let calcPercentage = 0;
      if (state.gender === "male") {
        if (payload > valueMaxBarMale) {
          bodyFatPercentage = valueMaxBarMale;
        }
        calcPercentage = (bodyFatPercentage * 100) / valueMaxBarMale;
      } else {
        if (payload > valueMaxBarFemale) {
          bodyFatPercentage = valueMaxBarFemale;
        }
        calcPercentage = (bodyFatPercentage * 100) / valueMaxBarFemale;
      }
      state.bodyFatPercentage = bodyFatPercentage;
      const percentage = parseFloat(calcPercentage.toFixed(1));
      state.calcBodyFatPercentage = percentage;
      state.bodyFatPercentageReal = payload;
    },
    clearBodyData(state) {
      state.bodyFatPercentage = 0;
      state.calcBodyFatPercentage = 0;
    },
  },
});

export const { changeGender, saveBodyData, clearBodyData } =
  bodyFatCalculatorSlice.actions;

export default bodyFatCalculatorSlice.reducer;
