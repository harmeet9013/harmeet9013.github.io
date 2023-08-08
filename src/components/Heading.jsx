import { Fragment, useState, useEffect } from "react";
import DownloadResume from "./DownloadResume";
import {
    Dialog,
    Button,
    styled,
    Stack,
    Divider,
    useMediaQuery,
    Drawer,
    Container,
    Fab,
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
    ArrowUpward,
} from "@mui/icons-material";

export default function Heading({ darkMode, setDarkMode, setShowPrompt }) {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

    // state hooks

    const [menuOpen, setMenuOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

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

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const yOffset = -80; // Offset to adjust the final position if needed
            const y =
                section.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    // this function handles the click event
    const handleActionClick = (action) => {
        const actionsMap = {
            blog: () =>
                window.open("https://harmeet9013.github.io/blogs", "_blank"),
            projects: () => scrollToSection("projects"),
            resume: () => {
                setShowPrompt(true);
                setIsMobileMenuOpen(false);
            },
            contact: () => scrollToSection("contact"),
            hobbies: () => scrollToSection("hobbies"),
        };
        actionsMap[action]();
        setMenuOpen(false);
    };

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setShowHeader(
            currentScrollPos < 100 || prevScrollPos > currentScrollPos
        );
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    // rendering of the component
    return (
        <Fragment>
            <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                sx={{
                    bgcolor: "transparent",
                    borderBottom: (theme) =>
                        `1px solid ${theme.palette.action.disabled}`,
                    backdropFilter: "blur(5px)",
                    width: "100%",
                    position: "fixed",
                    overflow: "hidden",
                    zIndex: 50,
                    transition: "all 0.3s ease-out",
                    transform: showHeader
                        ? "translateY(0px)"
                        : "translateY(-100px)",
                }}
            >
                {/* Header name */}
                <NavbarButton
                    onClick={() => {
                        scrollToSection("home");
                    }}
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
                            onClose={() => {
                                setMenuOpen(false);
                            }}
                            elevation={0}
                            PaperProps={{
                                sx: {
                                    backgroundColor: (theme) =>
                                        theme.palette.background.drawer,
                                    backdropFilter: "blur(5px)",
                                },
                            }}
                            ModalProps={{
                                slotProps: {
                                    backdrop: {
                                        sx: {
                                            backgroundColor: (theme) =>
                                                theme.palette.backdrop,
                                        },
                                    },
                                },
                            }}
                        >
                            <Container
                                sx={{
                                    mt: "25vh",
                                    backgroundColor: "transparent",
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
                            </Container>
                        </Drawer>
                    </Fragment>
                ) : (
                    // for desktop
                    <Stack direction="row" spacing={1}>
                        <Stack direction="row" spacing={2}>
                            {actions.map((action) => (
                                <NavbarButton
                                    key={action.name}
                                    onClick={() =>
                                        handleActionClick(action.action)
                                    }
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
                                <Download
                                    color="icon"
                                    sx={{ marginY: "-6px" }}
                                />
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
            </Stack>
            {/* scroll to top button */}
            <Fab
                sx={{
                    position: "fixed",
                    bottom: 25,
                    right: 25,
                    backgroundColor: (theme) =>
                        theme.palette.background.default,
                    transition:
                        "transform 0.3s ease-out, background-color 0.2s ease",
                    transform: showHeader
                        ? "translateY(100px)"
                        : "translateY(0px)",
                    "&:hover": {
                        backgroundColor: (theme) => theme.palette.action.hover,
                    },
                }}
                onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                }}
            >
                <ArrowUpward color="icon" />{" "}
            </Fab>
        </Fragment>
    );
}
