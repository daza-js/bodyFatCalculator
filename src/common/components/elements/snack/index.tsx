import React from "react";
import { SnackbarProvider, SnackbarKey } from "notistack";
import { Button, Typography } from "@mui/material";
import { useAppDispatch } from "../../../hooks";
import { closeAlert } from "../../../../redux/reducers/alert.slice";

export const SnackProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const dispatch = useAppDispatch();
  const notistackRef = React.createRef<SnackbarProvider>();
  const onClickDismiss = (key?: SnackbarKey) => {
    notistackRef.current?.closeSnackbar(key);
    dispatch(closeAlert(key?.toString()));
  };
  return (
    <SnackbarProvider
      ref={notistackRef}
      maxSnack={4}
      dense
      preventDuplicate
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      style={{
        fontSize: 15,
        fontWeight: 700,
      }}
      action={(key) => (
        <Button onClick={() => onClickDismiss(key)}>
          <Typography
            variant="caption"
            style={{
              fontWeight: 300,
              fontSize: 12,
              color: "#FFF",
            }}
          >
            Cerrar
          </Typography>
        </Button>
      )}
    >
      {children}
    </SnackbarProvider>
  );
};
