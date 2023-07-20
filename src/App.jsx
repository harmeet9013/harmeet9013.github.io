import { useState } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
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
            mode: darkMode ? "dark" : "light",
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
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

export const gillSans =
    '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif';
