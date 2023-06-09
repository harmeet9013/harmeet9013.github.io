import { useState } from "react";
import { Link } from "react-router-dom";
import DownloadResume from "./DownloadResume";
import "./css/heading.css";
import { SwipeableDrawer, Dialog } from "@mui/material";
import {
    Home,
    Download,
    ContactMail,
    Favorite,
    Article,
    Menu,
    GitHub,
    Close,
    DarkMode,
    LightMode,
} from "@mui/icons-material";

export default function Heading({ darkMode, setDarkMode }) {
    const [showPrompt, setShowPrompt] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleClickOpen = () => {
        setShowPrompt(true);
        setIsMobileMenuOpen(false);
    };

    const handleMenuOpen = () => {
        setIsMobileMenuOpen(true);
    };

    const handleMenuClose = () => {
        setIsMobileMenuOpen(false);
    };

    const handleActionClick = (action) => {
        const actionsMap = {
            blog: () =>
                window.open("https://harmeet9013.github.io/blogger", "_blank"),
            projects: () => (window.location.href = "#projects"),
            resume: () => handleClickOpen(),
            contact: () => (window.location.href = "#contact"),
            hobbies: () => (window.location.href = "#hobbies"),
            source: () =>
                window.open(
                    "https://github.com/harmeet9013/harmeet9013.github.io",
                    "_blank"
                ),
        };
        actionsMap[action]();
        handleMenuClose();
    };

    const actions = [
        {
            icon: <Article sx={{ marginY: "-6px" }} />,
            name: "Blog",
            action: "blog",
        },
        {
            icon: <Home sx={{ marginY: "-6px" }} />,
            name: "Projects",
            action: "projects",
        },
        {
            icon: <Favorite sx={{ marginY: "-6px" }} />,
            name: "Hobbies",
            action: "hobbies",
        },
        {
            icon: <Download sx={{ marginY: "-6px" }} />,
            name: "Resume",
            action: "resume",
        },
        {
            icon: <ContactMail sx={{ marginY: "-6px" }} />,
            name: "Contact",
            action: "contact",
        },
        {
            icon: <GitHub sx={{ marginY: "-6px" }} />,
            name: "Source",
            action: "source",
        },
    ];

    return (
        <div id="home">
            <div className={`header-container ${darkMode ? "dark" : "light"}`}>
                <a
                    href="#home"
                    className={`header-welcome ${darkMode ? "dark" : "light"}`}
                >
                    welcome
                </a>

                {/* This is for mobile screens */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "auto auto",
                        alignItems: "center",
                        margin: "0px",
                        gap: "30px",
                    }}
                >
                    <a
                        onClick={() => {
                            setDarkMode(!darkMode);
                        }}
                        className={`navbar-button-mobile ${
                            darkMode ? "dark" : "light"
                        }`}
                    >
                        {darkMode ? (
                            <DarkMode sx={{ marginY: "-7px" }} />
                        ) : (
                            <LightMode sx={{ marginY: "-7px" }} />
                        )}
                    </a>
                    <a>
                        <Menu
                            className={`menu-button ${
                                darkMode ? "dark" : "light"
                            }`}
                            onClick={handleMenuOpen}
                        />
                    </a>
                </div>

                <SwipeableDrawer
                    anchor="right"
                    open={isMobileMenuOpen}
                    onClose={handleMenuClose}
                    onOpen={handleMenuOpen}
                    className="mobile-menu-container"
                >
                    <div className="mobile-menu">
                        {actions.map((action) => (
                            <div
                                key={action.name}
                                className="mobile-menu-buttons"
                            >
                                <a
                                    onClick={() =>
                                        handleActionClick(action.action)
                                    }
                                >
                                    {action.icon} {action.name}
                                </a>
                            </div>
                        ))}
                    </div>
                    <Close
                        className="close-icon-button"
                        onClick={handleMenuClose}
                    />
                </SwipeableDrawer>

                {/* This is for desktop screens */}
                <ul className={`header-navbar `} id="header-navbar">
                    {actions.map((action) => (
                        <a
                            key={action.name}
                            onClick={() => handleActionClick(action.action)}
                            className={`navbar-button ${
                                darkMode ? "dark" : "light"
                            }`}
                        >
                            {action.icon} {action.name}
                        </a>
                    ))}
                    <a
                        onClick={() => {
                            setDarkMode(!darkMode);
                        }}
                        className={`navbar-button ${
                            darkMode ? "dark" : "light"
                        }`}
                    >
                        {darkMode ? (
                            <DarkMode sx={{ marginY: "-6px" }} />
                        ) : (
                            <LightMode sx={{ marginY: "-6px" }} />
                        )}
                        {darkMode ? " Dark Mode" : " Light Mode"}
                    </a>
                    <Dialog open={showPrompt}>
                        <DownloadResume
                            showPrompt={showPrompt}
                            setShowPrompt={setShowPrompt}
                            darkMode={darkMode}
                        />
                    </Dialog>
                </ul>
            </div>
        </div>
    );
}
