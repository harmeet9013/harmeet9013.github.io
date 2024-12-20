import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
//
import { settingsContext } from "./settings-provider";

export const SettingsProvider = ({ children }) => {
    const isMobile = useMediaQuery("(max-width: 900px)");
    const systemTheme = useMediaQuery("(prefers-color-scheme: dark)")
        ? true
        : false;

    const [darkMode, setDarkMode] = useState(systemTheme);
    const [openResumeDialog, setOpenResumeDialog] = useState(false);

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

    return (
        <settingsContext.Provider
            value={{
                darkMode,
                isMobile,
                setDarkMode,
                systemTheme,
                openResumeDialog,
                setOpenResumeDialog,
            }}
        >
            {children}
        </settingsContext.Provider>
    );
};
