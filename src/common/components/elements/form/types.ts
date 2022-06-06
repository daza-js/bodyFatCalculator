import { typeGender } from "../../../../redux/reducers/types";

export type TypesValuesForm = {
  gender: typeGender;
  height: number | string;
  weight: number | string;
  waist: number | string;
  neck: number | string;
  hip: number | string;
};

/* Setting the initial values of the form. */
export const initialValues: TypesValuesForm = {
  gender: "",
  height: "",
  weight: "",
  waist: "",
  neck: "",
  hip: "",
};
