import { Fragment, useState, useEffect } from "react";
import {
    Button,
    styled,
    Stack,
    Divider,
    Drawer,
    Slide,
    Typography,
} from "@mui/material";
import {
    DownloadRounded,
    MenuRounded,
    GitHub,
    LightModeRounded,
    DarkModeRounded,
    ArticleRounded,
    HomeRounded,
    FavoriteRounded,
    ContactMailRounded,
} from "@mui/icons-material";
import ScrollToTop from "./ScrollToTop";
import { useConfirm } from "material-ui-confirm";
import Cookies from "js-cookie";

export default function Heading(props) {
    const confirmDialog = useConfirm();
    // state hooks

    const [menuOpen, setMenuOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [showScrollTop, setShowScrollTop] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    // this constant holds the various navbar actions for user
    // unified in a single array of objects for small code
    const actions = [
        {
            icon: <ArticleRounded sx={{ marginY: "-6px" }} />,
            name: "Blog",
            action: "blog",
        },
        {
            icon: <HomeRounded sx={{ marginY: "-6px" }} />,
            name: "Projects",
            action: "projects",
        },
        {
            icon: <FavoriteRounded sx={{ marginY: "-6px" }} />,
            name: "Hobbies",
            action: "hobbies",
        },
        {
            icon: <ContactMailRounded sx={{ marginY: "-6px" }} />,
            name: "Contact",
            action: "contact",
        },
    ];

    // customized navbar button of MUI
    const NavbarButton = styled(Button)(({ theme }) => ({
        textTransform: "none",
        fontWeight: "500",
        color: theme.palette.primary.main,
        borderRadius: 50,
        padding: props.isMobile ? "10px 5px" : "8px 20px",
        transition: theme.transitions.create(),
        letterSpacing: 2,
        backgroundColor: "transparent",
        "&:hover": {
            backgroundColor: theme.palette.containers.secondary.main,
            boxShadow: theme.shadows[2],
        },
    }));

    const MobileDrawerItem = styled(NavbarButton)(({ theme }) => ({
        backgroundColor: theme.palette.containers.tertiary.main,
        borderRadius: "30px 0px 0px 30px",
        paddingRight: 20,
        width: "20vh",
        justifyContent: "flex-end",
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
                confirmDialog({
                    title: "Resume Download",
                    content: "This will open Google Drive",
                })
                    .then(() =>
                        window.open("https://bit.ly/harmeet9013-resume")
                    )
                    .catch(() => {
                        /* */
                    });
                setIsMobileMenuOpen(false);
            },
            contact: () => scrollToSection("contact"),
            hobbies: () => scrollToSection("hobbies"),
        };
        actionsMap[action]();
        setMenuOpen(false);
    };

    const handleThemeChange = () => {
        const theme = !props.darkMode;

        theme ? Cookies.set("theme", "dark") : Cookies.set("theme", "light");
        props.setDarkMode(theme);
    };

    useEffect(() => {
        const handleScroll = () => {
            // for the header
            const currentScrollPos = window.scrollY;
            setShowHeader(
                currentScrollPos < 100 || prevScrollPos > currentScrollPos
            );
            setPrevScrollPos(currentScrollPos);

            // for the fab
            setShowScrollTop(currentScrollPos > 400);
        };

        // listen and remove scroll events
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    // rendering of the component
    return (
        <Fragment>
            <Slide direction="down" in={showHeader}>
                <Stack
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    sx={(theme) => ({
                        transition: `${theme.transitions.create()} !important`,
                        borderBottom: `1px solid ${theme.palette.divider}`,
                        backgroundColor: theme.palette.header,
                        backdropFilter: "blur(10px)",
                        width: "100%",
                        position: "fixed",
                        overflow: "hidden",
                        zIndex: 50,
                    })}
                >
                    {/* Header name */}
                    <NavbarButton
                        onClick={() => {
                            scrollToSection("home");
                        }}
                        sx={(theme) => ({
                            fontSize: props.isMobile ? "30px" : "40px",
                            fontWeight: 600,
                            letterSpacing: props.isMobile ? "3px" : "8px",
                            padding: props.isMobile ? "10px" : "2px 20px",
                            color: theme.palette.background.main,
                            backgroundColor: "transparent",
                            "&:hover": {
                                backgroundColor: "transparent",
                                boxShadow: "none",
                            },
                            background: (theme) =>
                                `linear-gradient(to left, ${theme.palette.background.main}, ${theme.palette.primary.main})`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        })}
                    >
                        Portfolio
                    </NavbarButton>

                    {props.isMobile ? (
                        // this is rendered for smaller screens
                        <Fragment>
                            {/* color mode and menu button */}
                            <Stack direction="row" spacing={0}>
                                <NavbarButton onClick={handleThemeChange}>
                                    {props.darkMode ? (
                                        <DarkModeRounded
                                            fontSize="medium"
                                            color="primary"
                                        />
                                    ) : (
                                        <LightModeRounded
                                            fontSize="medium"
                                            color="primary"
                                        />
                                    )}
                                </NavbarButton>
                                <NavbarButton
                                    onClick={() => {
                                        setMenuOpen(true);
                                    }}
                                >
                                    <MenuRounded
                                        fontSize="medium"
                                        color="primary"
                                    />
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
                                            theme.palette.surface.variant,
                                    },
                                }}
                                ModalProps={{
                                    slotProps: {
                                        backdrop: {
                                            sx: (theme) => ({
                                                backgroundColor:
                                                    theme.palette.backdrop,
                                            }),
                                        },
                                    },
                                }}
                            >
                                <Stack
                                    spacing={2}
                                    marginLeft={2}
                                    marginTop="24vh"
                                >
                                    <Typography
                                        variant="h4"
                                        textAlign="center"
                                        fontWeight={500}
                                        letterSpacing={5}
                                        color={(theme) =>
                                            theme.palette.secondary.main
                                        }
                                    >
                                        Menu
                                    </Typography>

                                    {actions.map((action) => (
                                        <Fragment key={action.name}>
                                            <MobileDrawerItem
                                                onClick={() =>
                                                    handleActionClick(
                                                        action.action
                                                    )
                                                }
                                                startIcon={action.icon}
                                            >
                                                {action.name}
                                            </MobileDrawerItem>
                                        </Fragment>
                                    ))}
                                    {/* Resume download button */}
                                    <MobileDrawerItem
                                        onClick={() => {
                                            confirmDialog({
                                                title: "Resume Download",
                                                content:
                                                    "This will open Google Drive",
                                            })
                                                .then(() =>
                                                    window.open(
                                                        "https://bit.ly/harmeet9013-resume"
                                                    )
                                                )
                                                .catch(() => {
                                                    /* */
                                                });
                                            setMenuOpen(false);
                                        }}
                                        startIcon={
                                            <DownloadRounded
                                                sx={{ marginY: "-6px" }}
                                            />
                                        }
                                    >
                                        Resume
                                    </MobileDrawerItem>
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
                                sx={{
                                    bgcolor: (theme) => theme.palette.divider,
                                }}
                            />

                            {/* mini buttons (dark mode, github etc) */}
                            <Stack direction="row" spacing={1}>
                                {/* download resume button */}
                                <NavbarButton
                                    onClick={() => {
                                        confirmDialog({
                                            title: "Resume Download",
                                            content:
                                                "This will open Google Drive",
                                        })
                                            .then(() =>
                                                window.open(
                                                    "https://bit.ly/harmeet9013-resume"
                                                )
                                            )
                                            .catch(() => {
                                                /* */
                                            });
                                    }}
                                    size="large"
                                >
                                    <DownloadRounded sx={{ marginY: "-6px" }} />
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
                                    <GitHub sx={{ marginY: "-6px" }} />
                                </NavbarButton>

                                {/* color mode button */}

                                <NavbarButton
                                    onClick={handleThemeChange}
                                    size="large"
                                >
                                    {props.darkMode ? (
                                        <DarkModeRounded
                                            sx={{ marginY: "-6px" }}
                                        />
                                    ) : (
                                        <LightModeRounded
                                            sx={{ marginY: "-6px" }}
                                        />
                                    )}
                                </NavbarButton>
                            </Stack>
                        </Stack>
                    )}
                </Stack>
            </Slide>
            {/* scroll to top button */}
            <ScrollToTop showScrollTop={showScrollTop} />
        </Fragment>
    );
}
