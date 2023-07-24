import { useState } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { cyan, deepPurple, lime, orange } from "@mui/material/colors";
import BackgroundIntro from "./components/BackgroundIntro";
import Contact from "./components/Contact";
import Heading from "./components/Heading";
import Hobbies from "./components/Hobbies";
import MoreAboutMe from "./components/MoreAboutMe";
import Projects from "./components/Projects";

export default function App() {
    const [darkMode, setDarkMode] = useState(true);

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
        },
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
        },
    });

    const customTheme = darkMode ? darkTheme : lightTheme;

    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <Heading darkMode={darkMode} setDarkMode={setDarkMode} />
            <BackgroundIntro darkMode={darkMode} />
            <MoreAboutMe />
            <Projects />
            <Hobbies />
            <Contact />
        </ThemeProvider>
    );
}
