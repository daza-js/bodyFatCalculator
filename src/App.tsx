import { useCallback, useEffect } from "react";
import { useSnackbar } from "notistack";
import {
  CssBaseline,
  ThemeProvider,
  Container,
  Grid,
  Box,
} from "@mui/material";
/* Importing the Layout component from the layout.tsx file. */
import Layout from "./common/components/layout";
/* Importing the theme from the utils folder. */
import { theme } from "./utils";
/* Importing the components from the elements folder. */
import {
  Bar,
  Description,
  FormBodyFatCalculator,
  Title,
} from "./common/components/elements";
/* Importing the useAppSelector hook from the hooks.tsx file. */
import { useAppSelector } from "./common/hooks";

function App() {
  const { alerts } = useAppSelector((state) => state);
  const { alert } = alerts;
  const { enqueueSnackbar } = useSnackbar();
  const viewAlert = useCallback(() => {
    if (alert)
      enqueueSnackbar(alert.message, {
        key: alert.id,
        variant: alert.status,
        autoHideDuration: 6000,
        transitionDuration: { enter: 400, exit: 400 },
        // anchorOrigin: { vertical: "top", horizontal: "right" },
      });
  }, [alert, enqueueSnackbar]);

  useEffect(() => viewAlert(), [viewAlert]);
  return (
    <ThemeProvider theme={theme()}>
      <CssBaseline />
      <Layout>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item sm={12} md={5} lg={6}>
              <Box>
                <Title />
                <Description />
                <FormBodyFatCalculator />
              </Box>
            </Grid>
            <Grid item sm={12} md={7} lg={6}>
              <Bar />
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
