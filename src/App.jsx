import { useState } from "react";
import { createTheme, CssBaseline, Dialog, ThemeProvider } from "@mui/material";
import { cyan, deepPurple, lime, orange } from "@mui/material/colors";
import BackgroundIntro from "./components/BackgroundIntro";
import Contact from "./components/Contact";
import Heading from "./components/Heading";
import Hobbies from "./components/Hobbies";
import MoreAboutMe from "./components/MoreAboutMe";
import Projects from "./components/Projects";
import DownloadResume from "./components/DownloadResume";

export default function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [showPrompt, setShowPrompt] = useState(false);

    const CustomCssBaseline = {
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
    };

    const darkTheme = createTheme({
        palette: {
            mode: "dark",
            accent: {
                primary: "#FFE4A7",
                secondary: lime[200],
            },
            icon: {
                main: orange[300],
            },
            backdrop: "rgba(0, 0, 0, 0.6)",
            background: {
                drawer: "rgba(0, 0, 0, 0.7)",
            },
        },
        ...CustomCssBaseline,
    });

    const lightTheme = createTheme({
        palette: {
            mode: "light",
            accent: {
                primary: "#0D1282",
                secondary: cyan[900],
            },
            icon: {
                main: deepPurple[800],
            },
            backdrop: "rgba(0, 0, 0, 0.6)",
            background: {
                drawer: "rgba(255, 255, 255, 0.8)",
            },
        },
        ...CustomCssBaseline,
    });

    const customTheme = darkMode ? darkTheme : lightTheme;

    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline />
            {/* dialog component */}
            <Dialog open={showPrompt}>
                <DownloadResume
                    showPrompt={showPrompt}
                    setShowPrompt={setShowPrompt}
                />
            </Dialog>
            <Heading
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                setShowPrompt={setShowPrompt}
            />
            <BackgroundIntro
                darkMode={darkMode}
                setShowPrompt={setShowPrompt}
            />
            <MoreAboutMe />
            <Projects />
            <Hobbies />
            <Contact />
        </ThemeProvider>
    );
}
