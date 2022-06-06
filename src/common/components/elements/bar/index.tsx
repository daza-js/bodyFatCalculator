import { Box, Grid, Typography } from "@mui/material";
import React, { useCallback, useEffect, useMemo } from "react";
/* Importing the data from the utils file. */
import {
  metricsMen,
  metricsWomen,
  valueMaxBarFemale,
  valueMaxBarMale,
} from "../../../../constants";
/* Importing the useAppSelector hook from the hooks file. */
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { TypeMetrics } from "./types";
/* Importing the styled component fromt styles file. */
import {
  ContentCaption,
  RootBar,
  RootBox,
  RootCaption,
  RootContentBox,
  RootContentFlag,
  RootFlag,
} from "./styles";
import { sendAlert } from "../../../../redux/reducers/alert.slice";

export const Bar: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { bodyFatCalculator } = useAppSelector((state) => state);
  const {
    gender,
    bodyFatPercentage,
    calcBodyFatPercentage,
    bodyFatPercentageReal,
  } = bodyFatCalculator;

  const validateExcessBodyFat = useCallback(() => {
    if (gender === "male") {
      if (bodyFatPercentageReal > valueMaxBarMale) {
        dispatch(
          sendAlert({
            message: "Tu grasa corporal excede los límites de las métricas",
            status: "warning",
          })
        );
      }
    } else {
      if (bodyFatPercentageReal > valueMaxBarFemale) {
        dispatch(
          sendAlert({
            message: "Tu grasa corporal excede los límites de las métricas",
            status: "warning",
          })
        );
      }
    }
  }, [gender, bodyFatPercentageReal, dispatch]);

  useEffect(() => validateExcessBodyFat(), [validateExcessBodyFat]);

  const captionsMetrics = useMemo(() => {
    /* Returning the metricsMen or metricsWomen array depending on the gender. */
    const metrics: TypeMetrics = {
      male: metricsMen.map((item) => {
        const { value } = item;
        const result = (value * 100) / valueMaxBarMale;
        const resultLeft = parseFloat(result.toFixed(2));
        return {
          ...item,
          left: resultLeft,
        };
      }),
      female: metricsWomen.map((item) => {
        const { value } = item;
        const result = (value * 100) / valueMaxBarFemale;
        const resultLeft = parseFloat(result.toFixed(2));
        return {
          ...item,
          left: resultLeft,
        };
      }),
    };
    return metrics[gender];
  }, [gender]);

  return (
    <Box>
      {captionsMetrics && (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{
            minHeight: "80vh",
            paddingLeft: 80,
          }}
        >
          {calcBodyFatPercentage > 0 && (
            <Grid item style={{ width: "100%" }}>
              <Typography variant="h4" component="h4">
                Tu resultado: {bodyFatPercentage}%
              </Typography>
              <RootContentFlag>
                <RootFlag
                  percentage={calcBodyFatPercentage}
                  BFP={bodyFatPercentage}
                >
                  <Typography>{bodyFatPercentage}%</Typography>
                </RootFlag>
              </RootContentFlag>
              <RootBar captionsMetrics={captionsMetrics} />
              <RootCaption>
                {captionsMetrics &&
                  captionsMetrics.map((item) => (
                    <ContentCaption key={item.color} left={item.left}>
                      <RootContentBox>
                        <RootBox color={item.color} />
                      </RootContentBox>
                      <Typography variant="caption">
                        {item.subtitle1}
                      </Typography>
                      <Typography variant="caption">
                        {item.subtitle2}
                      </Typography>
                    </ContentCaption>
                  ))}
              </RootCaption>
            </Grid>
          )}
        </Grid>
      )}
    </Box>
  );
};
