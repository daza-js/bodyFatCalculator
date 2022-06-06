import React from "react";

export type typeGender = "male" | "female" | "";

export type StateGender = {
  gender: typeGender;
  bodyFatPercentageReal: number;
  bodyFatPercentage: number;
  calcBodyFatPercentage: number;
};

/* Creating a constant called initialStateGender and assigning it to an object with the properties of
gender, bodyFatPercentage, and calcBodyFatPercentage. */
export const initialStateBody: StateGender = {
  gender: "",
  bodyFatPercentageReal: 0,
  bodyFatPercentage: 0,
  calcBodyFatPercentage: 0,
};


export type TypesAlerts = {
  id?: string;
  status?: "info" | "success" | "warning" | "error";
  message: string | React.ReactNode;
};

export type TypeInitial = {
  alert?: TypesAlerts;
};

export const initialStateAlert: TypeInitial = {
  alert: undefined
};