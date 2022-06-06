import { createTheme, ThemeOptions } from "@mui/material";
import { pxToRem, responsiveFontSizes } from "./tools";

/**
 * It creates a theme object with a dark palette, a primary color, and a font family. It also overrides
 * the default styles of the MuiOutlinedInput and MuiButton components.
 * @returns A function that returns a theme object.
 */
export function theme() {
  const primary = "#8667F0";
  const FONT_PRIMARY = 'Public Sans, sans-serif';
  const themeOptions: ThemeOptions = {
    palette: {
      mode: "dark",
      primary: {
        main: primary,
      },
    },
    typography: {
      fontFamily: FONT_PRIMARY,
      fontWeightRegular: 400,
      fontWeightMedium: 600,
      fontWeightBold: 700,
      h4: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(20),
        ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
      },
      body2: {
        lineHeight: 22 / 14,
        fontSize: pxToRem(14),
        color: "#b3b3b3",
      },
      caption: {
        lineHeight: 1.5,
        fontSize: pxToRem(12),
      },
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-notchedOutline": {
              borderRadius: 50,
              height: 50,
              top: 2,
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 50,
          },
          text: {
            padding: 10
          }
        },
      },
    },
  };
  return createTheme(themeOptions);
}
