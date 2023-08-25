import { useEffect, useState } from "react";
import {
    Box,
    createTheme,
    CssBaseline,
    Divider,
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
        backgroundColor: theme.palette.divider,
        height: 10,
        borderRadius: 40,
        borderBottomWidth: 10,
        width: 100,
    }));

    const myTheme = createTheme({
        palette: darkMode
            ? {
                  // darkmode
                  mode: "dark",

                  primary: {
                      main: "#5bdbbe",
                      container: "#00382d",
                  },
                  secondary: {
                      main: "#b1ccc3",
                      container: "#1d352e",
                  },
                  tertiary: {
                      main: "#5bdbbe",
                      container: "#00382d",
                  },

                  background: {
                      main: "#e1e3e0",
                      default: "#000000",
                  },
                  surface: {
                      main: "#e1e3e0",
                      default: "#191c1b",
                      variant: "#3f4945",
                  },

                  outline: "#89938f",
                  header: "#191c1bea",
                  hover: "#191c1bda",
                  divider: "#89938f",

                  containers: {
                      primary: {
                          main: "#7af8d9",
                          container: "#005143",
                      },
                      secondary: {
                          main: "#334b44",
                          container: "#cde8df",
                      },
                      tertiary: {
                          main: "#005143",
                          container: "#7af8da",
                      },
                  },

                  backdrop: "#000000bf",
              }
            : {
                  // light mode
                  mode: "light",

                  primary: {
                      main: "#006b59",
                      container: "#ffffff",
                  },
                  secondary: {
                      main: "#4b635c",
                      container: "#ffffff",
                  },
                  tertiary: {
                      main: "#006b59",
                      container: "#ffffff",
                  },

                  background: {
                      main: "#191c1b",
                      default: "#fafdfa",
                  },
                  surface: {
                      main: "#191c1b",
                      default: "#fafdfa",
                      variant: "#dbe5e0",
                  },

                  outline: "#6f7975",
                  header: "#fafdfaea",
                  divider: "#6f7975",
                  hover: "#fafdfada",

                  containers: {
                      primary: {
                          main: "#002019",
                          container: "#7af8d9",
                      },
                      secondary: {
                          main: "#cde8df",
                          container: "#07201a",
                      },
                      tertiary: {
                          main: "#7af8da",
                          container: "#00201a",
                      },
                  },

                  backdrop: "#000000bf",
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

    return (
        <ThemeProvider theme={myTheme}>
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
                                backgroundColor:
                                    theme.palette.background.default,
                                padding: "20px 0px",
                            }),
                        },
                    },
                    titleProps: {
                        textAlign: "center",
                        fontSize: "2rem",
                        color: "secondary",
                        fontWeight: 500,
                    },
                    contentProps: {
                        sx: {
                            textAlign: "center",
                            fontSize: "1rem",
                        },
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
                                    theme.palette.containers.tertiary.main,
                                padding: "8px 20px",
                                "&:hover": {
                                    backgroundColor:
                                        theme.palette.primary.container,
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
