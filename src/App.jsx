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

    const material3Theme = createTheme({
        palette: {
            mode: darkMode ? "dark" : "light",
            ...(darkMode
                ? {
                      primary: {
                          main: "#7ad0ff",
                          on: "#003549",
                          container: {
                              main: "#004c68",
                              on: "#c3e8ff",
                          },
                          fixed: {
                              main: "#c3e8ff",
                              dim: "#7ad0ff",
                              on: "#001e2c",
                              onvar: "#004c68",
                          },
                      },
                      secondary: {
                          main: "#b5c9d7",
                          on: "#003549",
                          container: {
                              main: "#364955",
                              on: "#d1e5f4",
                          },
                          fixed: {
                              main: "#d1e5f4",
                              dim: "#b5c9d7",
                              on: "#0a1e28",
                              onvar: "#364955",
                          },
                      },
                      tertiary: {
                          main: "#cac1ea",
                          on: "#322c4c",
                          container: {
                              main: "#484264",
                              on: "#e6deff",
                          },
                          fixed: {
                              main: "#e6deff",
                              dim: "#1c1736",
                              on: "#1c1736",
                              onvar: "#633b48",
                          },
                      },

                      background: {
                          default: "#090c0c",
                          low: "#191c1e",
                          med: "#1d2022",
                          high: "#282a2c",
                          highest: "#333537",
                          header: "#090c0cf5",
                      },

                      divider: "#41484d",
                      dividervar: "#8a9297",
                      backdrop: "#000000da",
                  }
                : {
                      primary: {
                          main: "#00668a",
                          on: "#ffffff",
                          container: {
                              main: "#c3e8ff",
                              on: "#001e2c",
                          },
                          fixed: {
                              main: "#c3e8ff",
                              dim: "#7ad0ff",
                              on: "#001e2c",
                              onvar: "#004c68",
                          },
                      },
                      secondary: {
                          main: "#4e616d",
                          on: "#ffffff",
                          container: {
                              main: "#d1e5f4",
                              on: "#0a1e28",
                          },
                          fixed: {
                              main: "#d1e5f4",
                              dim: "#b5c9d7",
                              on: "#0a1e28",
                              onvar: "#364955",
                          },
                      },
                      tertiary: {
                          main: "#605a7d",
                          on: "#ffffff",
                          container: {
                              main: "#e6deff",
                              on: "#1c1736",
                          },
                          fixed: {
                              main: "#e6deff",
                              dim: "#1c1736",
                              on: "#1c1736",
                              onvar: "#633b48",
                          },
                      },

                      background: {
                          default: "#ffffff",
                          low: "#f3f3f6",
                          med: "#edeef0",
                          high: "#e7e8ea",
                          highest: "#e1e2e5",
                          header: "#fffffff5",
                      },

                      divider: "#c0c7cd",
                      dividervar: "#71787d",
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
