import { useEffect, useState } from "react";
import {
    Box,
    createTheme,
    CssBaseline,
    Divider,
    responsiveFontSizes,
    styled,
    ThemeProvider,
    useMediaQuery,
} from "@mui/material";
import Cookies from "js-cookie";
import { ConfirmProvider } from "material-ui-confirm";
import { CancelRounded, CheckCircleRounded } from "@mui/icons-material";

import Contact from "./components/Contact";
import Heading from "./components/Heading";
import Hobbies from "./components/Hobbies";
import Projects from "./components/Projects";
import MoreAboutMe from "./components/MoreAboutMe";
import BackgroundIntro from "./components/BackgroundIntro";

export default function App() {
    const isMobile = useMediaQuery("(max-width: 900px)");
    const systemTheme = useMediaQuery("(prefers-color-scheme: dark)")
        ? true
        : false;

    const [darkMode, setDarkMode] = useState(systemTheme);

    useEffect(() => {
        const theme = Cookies.get("theme");

        if (theme === "dark") {
            setDarkMode(true);
        } else if (theme === "light") {
            setDarkMode(false);
        } else {
            setDarkMode(systemTheme);
        }
    }, [systemTheme]);

    const MyDivider = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.tertiary.main,
        height: 10,
        borderRadius: 40,
        borderBottomWidth: 10,
        width: 100,
    }));

    let material3Theme = createTheme({
        palette: {
            mode: darkMode ? "dark" : "light",
            ...(darkMode
                ? {
                      primary: {
                          main: "#ffb690",
                          on: "#542100",
                          container: {
                              main: "#783200",
                              on: "#ffdbca",
                          },
                          fixed: {
                              main: "#ffdbca",
                              dim: "#ffb690",
                              on: "#331100",
                              onvar: "#783200",
                          },
                      },
                      secondary: {
                          main: "#e6beab",
                          on: "#542100",
                          container: {
                              main: "#5c4132",
                              on: "#ffdbca",
                          },
                          fixed: {
                              main: "#ffdbca",
                              dim: "#e6beab",
                              on: "#2b160a",
                              onvar: "#5c4132",
                          },
                      },
                      tertiary: {
                          main: "#cec891",
                          on: "#343108",
                          container: {
                              main: "#4b481d",
                              on: "#ebe4aa",
                          },
                          fixed: {
                              main: "#ebe4aa",
                              dim: "#cec891",
                              on: "#1e1c00",
                              onvar: "#633b48",
                          },
                      },

                      background: {
                          default: "#080604",
                          low: "#171310",
                          med: "#241e1b",
                          high: "#2f2926",
                          highest: "#3a3330",
                      },

                      divider: "#52443d",
                      dividervar: "#a08d84",
                      backdrop: "#000000da",
                  }
                : {
                      primary: {
                          main: "#9b4505",
                          on: "#ffffff",
                          container: {
                              main: "#ffdbca",
                              on: "#331100",
                          },
                          fixed: {
                              main: "#ffdbca",
                              dim: "#ffb690",
                              on: "#331100",
                              onvar: "#783200",
                          },
                      },
                      secondary: {
                          main: "#765848",
                          on: "#ffffff",
                          container: {
                              main: "#ffdbca",
                              on: "#2b160a",
                          },
                          fixed: {
                              main: "#ffdbca",
                              dim: "#e6beab",
                              on: "#2b160a",
                              onvar: "#5c4132",
                          },
                      },
                      tertiary: {
                          main: "#646032",
                          on: "#ffffff",
                          container: {
                              main: "#ebe4aa",
                              on: "#1e1c00",
                          },
                          fixed: {
                              main: "#ebe4aa",
                              dim: "#cec891",
                              on: "#1e1c00",
                              onvar: "#4b481d",
                          },
                      },

                      background: {
                          default: "#ffffff",
                          low: "#fef1ec",
                          med: "#f8ebe6",
                          high: "#f2e6e1",
                          highest: "#ece0db",
                      },

                      divider: "#d7c2b9",
                      dividervar: "#85746b",
                      backdrop: "#000000da",
                  }),
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    "html *": {
                        fontFamily: "work sans",
                        transition: "background-color 0.4s ease",
                    },
                },
            },
        },
        typography: {
            fontFamily: "work sans",
        },
    });

    material3Theme = responsiveFontSizes(material3Theme);

    return (
        <ThemeProvider theme={material3Theme}>
            <ConfirmProvider
                defaultOptions={{
                    confirmationButtonProps: {
                        startIcon: <CheckCircleRounded color="primary" />,
                    },
                    cancellationButtonProps: {
                        startIcon: <CancelRounded color="primary" />,
                    },
                    cancellationText: "No",
                    confirmationText: "Yes",
                    dialogProps: {
                        maxWidth: "xs",
                        slotProps: {
                            backdrop: {
                                sx: (theme) => ({
                                    backgroundColor: theme.palette.backdrop,
                                }),
                            },
                        },
                        disableScrollLock: true,
                        PaperProps: {
                            elevation: 0,
                            sx: (theme) => ({
                                cursor: "default",
                                borderRadius: 10,
                                backgroundColor: theme.palette.background.low,
                                padding: "20px 0px 20px 0",
                            }),
                        },
                    },
                    titleProps: {
                        fontSize: (theme) => theme.typography.h4.fontSize,
                        fontWeight: 500,
                        textAlign: "center",
                        color: (theme) => theme.palette.primary.main,
                    },
                    contentProps: {
                        sx: (theme) => ({
                            ...theme.typography.body1,
                            textAlign: "center",
                        }),
                    },
                    dialogActionsProps: {
                        sx: {
                            justifyContent: "center",
                            alignItems: "center",
                            ".MuiButton-root": (theme) => ({
                                textTransform: "none",
                                fontSize: "1rem",
                                borderRadius: 50,
                                backgroundColor:
                                    theme.palette.background.highest,
                                padding: "8px 20px",
                                "&:hover": {
                                    backgroundColor:
                                        theme.palette.secondary.container.main,
                                },
                            }),
                        },
                    },
                }}
            >
                <CssBaseline enableColorScheme />

                <Heading
                    darkMode={darkMode}
                    isMobile={isMobile}
                    setDarkMode={setDarkMode}
                />

                <BackgroundIntro darkMode={darkMode} isMobile={isMobile} />

                <Divider />

                <MoreAboutMe isMobile={isMobile} MyDivider={MyDivider} />

                <Divider />

                <Projects isMobile={isMobile} MyDivider={MyDivider} />

                <Divider />

                <Hobbies isMobile={isMobile} MyDivider={MyDivider} />

                <Divider />

                <Contact isMobile={isMobile} MyDivider={MyDivider} />
            </ConfirmProvider>
        </ThemeProvider>
    );
}
