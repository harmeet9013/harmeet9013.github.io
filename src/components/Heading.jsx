import { useState } from "react";
import DownloadResume from "./DownloadResume";
import "./css/heading.css";
import { SwipeableDrawer, Divider } from "@mui/material";
import {
    Home,
    Download,
    ContactMail,
    Favorite,
    Article,
    Menu,
    Close,
    GitHub,
} from "@mui/icons-material";

export default function Heading() {
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
        if (action === "blog") {
            window.open("https://harmeet9013.github.io/blogger", "_blank");
        } else if (action === "projects") {
            window.location.href = "#projects";
        } else if (action === "resume") {
            handleClickOpen();
        } else if (action === "contact") {
            window.location.href = "#contact";
        } else if (action === "hobbies") {
            window.location.href = "#hobbies";
        } else if (action === "source") {
            window.open(
                "https://github.com/harmeet9013/harmeet9013.github.io",
                "_blank"
            );
        }
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
            icon: <ContactMail sx={{ marginY: "-6px" }} />,
            name: "Contact",
            action: "contact",
        },
        {
            icon: <GitHub sx={{ marginY: "-6px" }} />,
            name: "Source Code",
            action: "source",
        },
    ];

    return (
        <div id="home">
            <div className="header-container">
                <p className="header-welcome">welcome</p>
                <Menu className="menu-button" onClick={handleMenuOpen} />
                <SwipeableDrawer
                    anchor="right"
                    open={isMobileMenuOpen}
                    onClose={handleMenuClose}
                    onOpen={handleMenuOpen}
                    className="mobile-menu-container"
                >
                    <div className="mobile-menu">
                        <Close
                            className="close-icon-button"
                            onClick={handleMenuClose}
                        />
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
                                <Divider />
                            </div>
                        ))}
                    </div>
                </SwipeableDrawer>
                <ul className="header-navbar" id="header-navbar">
                    <a href="https://harmeet9013/github.io/blogger">Blog</a>
                    <a href="#projects">Projects</a>
                    {/* <a onClick={handleClickOpen}>Download Resume</a> */}
                    {/* <DownloadResume
                        showPrompt={showPrompt}
                        setShowPrompt={setShowPrompt}
                    /> */}

                    <a href="#hobbies">Hobbies</a>
                    <a href="#contact">Contact</a>
                    <a
                        href="https://github.com/harmeet9013/harmeet9013.github.io"
                        target="_blank"
                    >
                        Source Code
                    </a>
                </ul>
            </div>
        </div>
    );
}

// {
//     icon: <Download sx={{ marginY: "-6px" }} />,
//     name: "Download Resume",
//     action: "resume",
// },
