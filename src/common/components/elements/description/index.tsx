import { Box, Typography } from "@mui/material";
import React from "react";

export const Description: React.FunctionComponent = () => {
  return (
    <Box my={3}>
      <Typography variant="body2" component="p">
        El método de la Marina de Estados Unidos (US Navy Method) ofrece una
        manera sencilla de calcular un aproximado del porcentaje del tejido en
        el cuerpo de una persona.
        <br />
        <br />
        Los valores requeridos por la formula son los siguientes:
      </Typography>
    </Box>
  );
};
