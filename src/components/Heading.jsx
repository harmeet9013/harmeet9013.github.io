import { Fragment, useState, useEffect } from "react";
import DownloadResume from "./DownloadResume";
import {
    Dialog,
    Button,
    styled,
    Stack,
    Divider,
    useMediaQuery,
    Paper,
    Drawer,
} from "@mui/material";
import {
    Home,
    Download,
    ContactMail,
    Favorite,
    Article,
    Menu,
    GitHub,
    DarkMode,
    LightMode,
} from "@mui/icons-material";

export default function Heading({ darkMode, setDarkMode }) {
    // state hooks
    const [showPrompt, setShowPrompt] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isTop, setIsTop] = useState(true);
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

    // this constant holds the various navbar actions for user
    // unified in a single array of objects for small code
    const actions = [
        {
            icon: <Article color="icon" sx={{ marginY: "-6px" }} />,
            name: "Blog",
            action: "blog",
        },
        {
            icon: <Home color="icon" sx={{ marginY: "-6px" }} />,
            name: "Projects",
            action: "projects",
        },
        {
            icon: <Favorite color="icon" sx={{ marginY: "-6px" }} />,
            name: "Hobbies",
            action: "hobbies",
        },
        {
            icon: <ContactMail color="icon" sx={{ marginY: "-6px" }} />,
            name: "Contact",
            action: "contact",
        },
    ];

    // customized navbar button of MUI
    const NavbarButton = styled(Button)(({ theme }) => ({
        fontWeight: "600",
        backgroundColor: "rgba(0, 0, 0, 0)",
        color: theme.palette.text.primary,
        borderRadius: "25px",
        padding: "15px 20px",
        transition: "all 150ms ease",
        letterSpacing: "2px",
        "&:hover": {
            backgroundColor: theme.palette.action.hover,
        },
    }));

    // this function handles the click event
    const handleActionClick = (action) => {
        const actionsMap = {
            blog: () =>
                window.open("https://harmeet9013.github.io/blogs", "_blank"),
            projects: () => (window.location.href = "#projects"),
            resume: () => {
                setShowPrompt(true);
                setIsMobileMenuOpen(false);
            },
            contact: () => (window.location.href = "#contact"),
            hobbies: () => (window.location.href = "#hobbies"),
        };
        actionsMap[action]();
        setMenuOpen(false);
    };

    // this useEffect handles the scrollevent
    useEffect(() => {
        const handleScroll = () => {
            setIsTop(window.scrollY < 400);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // rendering of the component
    return (
        <Paper
            elevation={isTop ? 0 : 3}
            sx={{
                bgcolor: isTop
                    ? "transparent"
                    : (theme) => theme.palette.background.default,
                display: "flex",
                flexDirection: "row",
                width: "100%",
                flexWrap: "wrap",
                padding: "0px 0px",
                borderRadius: "0px",
                position: "fixed",
                overflow: "hidden",
                gap: "0px",
                justifyContent: "space-around",
                alignItems: "center",
                zIndex: 5,
                transition: "all 200ms ease",
            }}
        >
            {/* Header name */}
            <NavbarButton
                href="#home"
                sx={{
                    fontSize: isMobile ? "25px" : "40px",
                    letterSpacing: isMobile ? "2px" : "8px",
                    "&:hover": {
                        backgroundColor: "rgba(0,0,0,0)",
                    },
                }}
            >
                <i>portfolio</i>
            </NavbarButton>

            {isMobile ? (
                // this is rendered for smaller screens
                <Fragment>
                    {/* color mode and menu button */}
                    <Stack direction="row" spacing={0}>
                        <NavbarButton
                            onClick={() => {
                                setDarkMode(!darkMode);
                            }}
                            sx={{ transform: "scale(1.2)" }}
                        >
                            {darkMode ? (
                                <DarkMode
                                    color="icon"
                                    sx={{ marginY: "-7px" }}
                                />
                            ) : (
                                <LightMode
                                    color="icon"
                                    sx={{ marginY: "-7px" }}
                                />
                            )}
                        </NavbarButton>
                        <NavbarButton
                            onClick={() => {
                                setMenuOpen(true);
                            }}
                            sx={{ transform: "scale(1.2)" }}
                        >
                            <Menu color="icon" />
                        </NavbarButton>
                    </Stack>

                    {/* Drawer component */}
                    <Drawer
                        anchor="right"
                        open={menuOpen}
                        onOpen={() => {
                            setMenuOpen(true);
                        }}
                        onClose={() => {
                            setMenuOpen(false);
                        }}
                    >
                        <Stack
                            direction="column"
                            spacing={0}
                            sx={{
                                mt: "25vh",
                            }}
                        >
                            {actions.map((action) => (
                                <Fragment key={action.name}>
                                    <NavbarButton
                                        onClick={() =>
                                            handleActionClick(action.action)
                                        }
                                        startIcon={action.icon}
                                        size="large"
                                        sx={{
                                            margin: "5px 10px",
                                            borderRadius: "10px",
                                            width: "20vh",
                                            justifyContent: "flex-end",
                                        }}
                                    >
                                        {action.name}
                                    </NavbarButton>
                                    <Divider variant="middle" flexItem />
                                </Fragment>
                            ))}
                            {/* Resume download button */}
                            <NavbarButton
                                onClick={() => {
                                    setShowPrompt(true);
                                    setMenuOpen(false);
                                }}
                                size="large"
                                sx={{
                                    margin: "5px 10px",
                                    borderRadius: "10px",
                                    width: "20vh",
                                    justifyContent: "flex-end",
                                }}
                                startIcon={
                                    <Download
                                        color="icon"
                                        sx={{ marginY: "-6px" }}
                                    />
                                }
                            >
                                Resume
                            </NavbarButton>
                        </Stack>
                    </Drawer>
                </Fragment>
            ) : (
                // for desktop
                <Stack direction="row" spacing={1}>
                    <Stack direction="row" spacing={2}>
                        {actions.map((action) => (
                            <NavbarButton
                                key={action.name}
                                onClick={() => handleActionClick(action.action)}
                                startIcon={action.icon}
                                size="large"
                            >
                                {action.name}
                            </NavbarButton>
                        ))}
                    </Stack>

                    <Divider
                        variant="middle"
                        orientation="vertical"
                        flexItem
                        sx={{ bgcolor: (theme) => theme.palette.divider }}
                    />

                    {/* mini buttons (dark mode, github etc) */}
                    <Stack direction="row" spacing={1}>
                        {/* download resume button */}
                        <NavbarButton
                            onClick={() => {
                                setShowPrompt(true);
                            }}
                            size="large"
                        >
                            <Download color="icon" sx={{ marginY: "-6px" }} />
                        </NavbarButton>

                        {/* source code button */}
                        <NavbarButton
                            onClick={() =>
                                window.open(
                                    "https://github.com/harmeet9013/harmeet9013.github.io",
                                    "_blank"
                                )
                            }
                            size="large"
                        >
                            <GitHub color="icon" sx={{ marginY: "-6px" }} />
                        </NavbarButton>

                        {/* color mode button */}

                        <NavbarButton
                            onClick={() => {
                                setDarkMode(!darkMode);
                            }}
                            size="large"
                        >
                            {darkMode ? (
                                <DarkMode
                                    color="icon"
                                    sx={{ marginY: "-6px" }}
                                />
                            ) : (
                                <LightMode
                                    color="icon"
                                    sx={{ marginY: "-6px" }}
                                />
                            )}
                        </NavbarButton>
                    </Stack>
                </Stack>
            )}

            {/* dialog component */}
            <Dialog open={showPrompt}>
                <DownloadResume
                    showPrompt={showPrompt}
                    setShowPrompt={setShowPrompt}
                />
            </Dialog>
        </Paper>
    );
}
