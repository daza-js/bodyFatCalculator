import { combineReducers } from "redux";
import bodyFatCalculator from "./bodyFatCalc.slice";
import alerts from "./alert.slice";
const rootReducers = combineReducers({ bodyFatCalculator, alerts });
export type RootState = ReturnType<typeof rootReducers>;
export default rootReducers;
