import {
  Typography,
  Box,
  Stack,
  TextField,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import React from "react";
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
/* Importing the initial values of the form. */
import { initialValues } from "./types";
/* A custom hook that returns the dispatch function from the redux store. */
import { useAppDispatch } from "../../../hooks";
/* Importing the actions from the reducer. */
import {
  changeGender,
  clearBodyData,
  saveBodyData,
} from "../../../../redux/reducers/bodyFatCalc.slice";
/* A function that checks if a number is negative. */
import { isNegative } from "../../../../utils";
import { sendAlert } from "../../../../redux/reducers/alert.slice";

export const FormBodyFatCalculator: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const formSchema = Yup.object().shape({
    gender: Yup.string().required("Se requiere el género"),
    height: Yup.number()
      .required("Se requiere la altura")
      .min(2, "Debe ser un mínimo de 2"),
    weight: Yup.number()
      .required("Se requiere el peso")
      .typeError("Debe ser un número")
      .min(2, "Debe ser un mínimo de 2"),
    waist: Yup.number()
      .required("Se requiere la medida de la cintura")
      .typeError("Debe ser un número")
      .min(2, "Debe ser un mínimo de 2"),
    neck: Yup.number()
      .required("Se requiere la medida del cuello")
      .typeError("Debe ser un número")
      .min(2, "Debe ser un mínimo de 2"),
    hip: Yup.number().when("gender", {
      is: (value: string) => value === "female",
      then: Yup.number()
        .required("Se require la medida de la cadera")
        .typeError("Debe ser un número")
        .min(2, "Debe ser un mínimo de 2"),
    }),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: formSchema,
    onSubmit: (values) => {
      const { gender, height, waist, hip, neck } = values;
      const result = applyAlgorithmBFP();

      /* Checking if the result is negative. If it is, it clears the data. */
      if (!isNegative(parseFloat(result.toFixed(1)))) {
        const bodyFatPercentage = parseFloat(result.toFixed(1));
        dispatch(saveBodyData(bodyFatPercentage));
      } else {
        dispatch(
          sendAlert({
            message: (
              <p>
                Para que el algoritmo pueda calcular su grasa corporal debe <br />
                agregar la información real según las metricas
              </p>
            ),
            status: "error",
          })
        );
        dispatch(clearBodyData());
      }

      function applyAlgorithmBFP(): number {
        let result = 0;
        /* The algorithm to calculate the body fat percentage. */
        if (gender === "male") {
          result =
            495 /
              (1.0324 -
                0.19077 *
                  Math.log10(
                    parseFloat(waist.toString()) - parseFloat(neck.toString())
                  ) +
                0.15456 * Math.log10(parseFloat(height.toString()))) -
            450;
        } else {
          result =
            495 /
              (1.29579 -
                0.35004 *
                  Math.log10(
                    parseFloat(waist.toString()) +
                      parseFloat(hip.toString()) -
                      parseFloat(neck.toString())
                  ) +
                0.221 * Math.log10(parseFloat(height.toString()))) -
            450;
        }
        return result;
      }
    },
  });

  const {
    errors,
    touched,
    values,
    handleSubmit,
    getFieldProps,
    setFieldValue,
  } = formik;

  function clearSetInputs() {
    setFieldValue("height", "");
    setFieldValue("weight", "");
    setFieldValue("waist", "");
    setFieldValue("neck", "");
    setFieldValue("hip", "");
  }

  const handleSelectedGender = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(clearBodyData());
    clearSetInputs();
    setFieldValue("gender", event.currentTarget.value);
    dispatch(
      changeGender(event.currentTarget.value === "female" ? "female" : "male")
    );
  };

  const handleReset = () => {
    clearSetInputs();
    dispatch(clearBodyData());
  };

  return (
    <Box pt={2}>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <FormControl>
              <label htmlFor="gender">Género</label>
              <RadioGroup
                row
                aria-labelledby="gender"
                value={values.gender}
                onChange={handleSelectedGender}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Hombre"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Mujer"
                />
              </RadioGroup>
              {Boolean(touched.gender && errors.gender) && (
                <Typography variant="caption" color="#f44336">
                  {touched.gender && errors.gender}
                </Typography>
              )}
            </FormControl>
            <FormControl>
              <label htmlFor="height">Altura (cm)</label>
              <TextField
                fullWidth
                autoComplete="height"
                type="text"
                {...getFieldProps("height")}
                error={Boolean(touched.height && errors.height)}
                helperText={touched.height && errors.height}
              />
            </FormControl>
            <FormControl>
              <label htmlFor="weight">Peso (kg)</label>
              <TextField
                fullWidth
                autoComplete="weight"
                type="text"
                {...getFieldProps("weight")}
                error={Boolean(touched.weight && errors.weight)}
                helperText={touched.weight && errors.weight}
              />
            </FormControl>
            <FormControl>
              <label htmlFor="waist">Cintura (cm)</label>
              <TextField
                fullWidth
                autoComplete="waist"
                type="text"
                {...getFieldProps("waist")}
                error={Boolean(touched.waist && errors.waist)}
                helperText={touched.waist && errors.waist}
              />
            </FormControl>
            <FormControl>
              <label htmlFor="neck">Cuello (cm)</label>
              <TextField
                fullWidth
                autoComplete="neck"
                type="text"
                {...getFieldProps("neck")}
                error={Boolean(touched.neck && errors.neck)}
                helperText={touched.neck && errors.neck}
              />
            </FormControl>
            {values.gender === "female" && (
              <FormControl>
                <label htmlFor="hip">Cadera (cm)</label>
                <TextField
                  fullWidth
                  autoComplete="hip"
                  type="text"
                  {...getFieldProps("hip")}
                  error={Boolean(touched.hip && errors.hip)}
                  helperText={touched.hip && errors.hip}
                />
              </FormControl>
            )}
          </Stack>
          <Box pt={2}>
            <Button variant="contained" color="primary" type="submit">
              Calcular
            </Button>{" "}
            <Button variant="text" type="reset" onClick={handleReset}>
              <Typography variant="caption" color="white">
                Limpiar
              </Typography>
            </Button>
          </Box>
        </Form>
      </FormikProvider>
    </Box>
  );
};
