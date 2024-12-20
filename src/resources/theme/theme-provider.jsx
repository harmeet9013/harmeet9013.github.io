import {
    createTheme,
    CssBaseline,
    responsiveFontSizes,
    ThemeProvider as MuiThemeProvider,
} from "@mui/material";
//
import { useSettingsContext } from "../settings";
import { deepOrange, orange, red } from "@mui/material/colors";
import palette from "./palette";

export const ThemeProvider = ({ children }) => {
    const { darkMode } = useSettingsContext();

    let muiTheme = createTheme({
        palette: {
            ...palette(darkMode ? "dark" : "light"),
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    "html *": {
                        fontFamily: "Outfit",
                        transition: "background-color 0.4s ease",
                    },
                },
            },
        },
        typography: {
            fontFamily: "Outfit",
        },
        shape: {
            borderRadius: 4,
        },
    });

    muiTheme.components = {
        MuiDialog: {
            defaultProps: {
                PaperProps: {
                    elevation: 0,
                },
                maxWidth: "sm",
                fullWidth: true,
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderWidth: 2,
                    borderRadius: 0,
                    boxShadow: "none",
                    textTransform: "none",
                    ...muiTheme.typography.body1,
                    fontWeight: 500,
                    transition: muiTheme.transitions.create(
                        [
                            "border-radius",
                            "background-color",
                            "padding",
                            "font-weight",
                        ],
                        {
                            duration: muiTheme.transitions.duration.shortest,
                        }
                    ),
                    padding: muiTheme.spacing(1.5, 3),
                    ":hover": {
                        boxShadow: "none",
                        fontWeight: 500,
                        borderRadius: muiTheme.spacing(3),
                    },
                },
                sizeLarge: {
                    ...muiTheme.typography.h6,
                    fontWeight: 500,
                    ":hover": {
                        fontWeight: 500,
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: muiTheme.spacing(4),
                    borderWidth: 2,
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    ...muiTheme.typography.body1,
                },
            },
        },
    };

    muiTheme = responsiveFontSizes(muiTheme);

    return (
        <MuiThemeProvider theme={muiTheme}>
            <CssBaseline enableColorScheme /> {children}
        </MuiThemeProvider>
    );
};
