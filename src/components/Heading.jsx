import {
    Button,
    styled,
    Stack,
    Divider,
    Slide,
    Typography,
    Container,
    IconButton,
    Menu,
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
    CloseRounded,
} from "@mui/icons-material";
import Cookies from "js-cookie";
import { useConfirm } from "material-ui-confirm";
import { Fragment, useState, useEffect } from "react";

import ScrollToTop from "./ScrollToTop";

export default function Heading(props) {
    const confirmDialog = useConfirm();

    // state hooks
    const [showHeader, setShowHeader] = useState(true);
    const [showScrollTop, setShowScrollTop] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [menuOpen, setMenuOpen] = useState(null);

    const navigateActions = [
        {
            icon: <HomeRounded color="primary" />,
            name: "Projects",
            action: "projects",
        },
        {
            icon: <FavoriteRounded color="primary" />,
            name: "Hobbies",
            action: "hobbies",
        },
        {
            icon: <ContactMailRounded color="primary" />,
            name: "Contact",
            action: "contact",
        },
    ];

    const otherActions = [
        {
            icon: <DownloadRounded color="primary" />,
            name: "Resume download",
            action: "resume",
        },
        {
            icon: <GitHub color="primary" />,
            name: "Source code",
            action: "code",
        },
    ];

    // customized navbar button of MUI
    const NavbarButton = styled(Button)(({ theme }) => ({
        textTransform: "none",
        fontSize: theme.typography.body1.fontSize,
        fontWeight: 500,
        color: theme.palette.secondary.main,
        borderRadius: 50,
        padding: props.isMobile ? "10px 5px" : "8px 20px",
        transition: theme.transitions.create(),
        letterSpacing: 2,
        backgroundColor: "transparent",
        "&:hover": {
            backgroundColor: theme.palette.primary.container.main,
        },
    }));

    const MyMenuItem = styled(Button)(({ theme }) => ({
        textTransform: "none",
        transition: theme.transitions.create(),
        fontSize: theme.typography.subtitle1.fontSize,
        padding: "1.2rem 1.5rem",
        fontWeight: 500,
        borderRadius: 50,
        width: "14rem",
        justifyContent: "flex-start",
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.background.low,
        "&:hover": {
            backgroundColor: theme.palette.primary.container.main,
        },
    }));

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const yOffset = -30; // Offset to adjust the final position if needed
            const y =
                section.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    const handleThemeChange = () => {
        const theme = !props.darkMode;

        theme ? Cookies.set("theme", "dark") : Cookies.set("theme", "light");
        props.setDarkMode(theme);
    };

    const renderMenu = () => {
        // this function handles the click event
        const handleActionClick = (action) => {
            const actionsMap = {
                projects: () => scrollToSection("projects"),
                contact: () => scrollToSection("contact"),
                hobbies: () => scrollToSection("hobbies"),
                resume: () => {
                    confirmDialog({
                        title: "Resume Download",
                        content:
                            "Resume is hosted on google drive. Take you there now?",
                    })
                        .then(() =>
                            window.open("https://bit.ly/harmeet9013-resume")
                        )
                        .catch(() => {
                            //
                        });
                },
                code: () =>
                    window.open(
                        "https://github.com/harmeet9013/harmeet9013.github.io"
                    ),
            };
            setMenuOpen(false);
            actionsMap[action]();
        };

        return (
            <Fragment>
                <IconButton
                    onClick={(e) => setMenuOpen(e.currentTarget)}
                    sx={(theme) => ({
                        transition: theme.transitions.create(),
                        transform: Boolean(menuOpen)
                            ? "rotate(90deg)"
                            : "rotate(0deg)",
                        "&:hover": {
                            backgroundColor:
                                theme.palette.primary.container.main,
                        },
                    })}
                >
                    {Boolean(menuOpen) ? (
                        <CloseRounded color="primary" fontSize="large" />
                    ) : (
                        <MenuRounded color="primary" fontSize="large" />
                    )}
                </IconButton>

                <Menu
                    open={Boolean(menuOpen)}
                    anchorEl={menuOpen}
                    onClose={() => setMenuOpen(null)}
                    disableScrollLock
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    slotProps={{
                        paper: {
                            elevation: 0,
                            sx: (theme) => ({
                                backgroundColor:
                                    theme.palette.background.header,
                                backdropFilter: "blur(10px)",
                                border: `2px solid ${theme.palette.divider}`,
                                borderRadius: 10,
                                marginTop: 3,
                                display: "flex",
                                flexDirection: "column",
                                padding: "0.8rem 1rem",
                                zIndex: 50,
                            }),
                        },
                    }}
                >
                    <Stack
                        direction={props.isMobile ? "column" : "row"}
                        spacing={2}
                    >
                        <Stack direction="column" spacing={2}>
                            <Typography
                                variant="h5"
                                textAlign="center"
                                fontWeight={500}
                                color="primary"
                                sx={{
                                    cursor: "default",
                                }}
                            >
                                Navigation
                            </Typography>

                            <Divider flexItem />

                            {navigateActions.map((action) => (
                                <MyMenuItem
                                    key={action.name}
                                    onClick={() =>
                                        handleActionClick(action.action)
                                    }
                                    startIcon={action.icon}
                                    size="large"
                                >
                                    {action.name}
                                </MyMenuItem>
                            ))}
                        </Stack>

                        <Stack direction="column" spacing={2}>
                            <Typography
                                variant="h5"
                                textAlign="center"
                                fontWeight={500}
                                color="primary"
                                sx={{
                                    cursor: "default",
                                }}
                            >
                                Miscellaneous
                            </Typography>

                            <Divider flexItem />

                            {otherActions.map((action) => (
                                <MyMenuItem
                                    key={action.name}
                                    onClick={() =>
                                        handleActionClick(action.action)
                                    }
                                    startIcon={action.icon}
                                    size="large"
                                >
                                    {action.name}
                                </MyMenuItem>
                            ))}

                            <MyMenuItem
                                onClick={handleThemeChange}
                                startIcon={
                                    props.darkMode ? (
                                        <DarkModeRounded color="primary" />
                                    ) : (
                                        <LightModeRounded color="primary" />
                                    )
                                }
                                color="primary"
                            >
                                {props.darkMode ? "Dark mode" : "Light mode"}
                            </MyMenuItem>
                        </Stack>
                    </Stack>
                </Menu>
            </Fragment>
        );
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

            setMenuOpen(false);
        };

        // listen and remove scroll events
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    // rendering of the component
    return (
        <Stack
            component={Container}
            justifyContent="flex-start"
            alignItems="center"
        >
            <Slide direction="down" in={showHeader}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={(theme) => ({
                        transition: `${theme.transitions.create()} !important`,
                        borderLeft:
                            !props.isMobile &&
                            `2px solid ${theme.palette.divider}`,
                        borderRight:
                            !props.isMobile &&
                            `2px solid ${theme.palette.divider}`,
                        borderBottom: `2px solid ${theme.palette.divider}`,
                        backgroundColor: theme.palette.background.header,
                        backdropFilter: "blur(10px)",
                        padding: props.isMobile ? "0.4rem" : "0.4rem 1rem",
                        width: props.isMobile ? "100%" : "40rem",
                        borderRadius: props.isMobile ? "0" : "0 0 30px 30px",
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
                            fontSize: props.isMobile
                                ? theme.typography.h5.fontSize
                                : theme.typography.h4.fontSize,
                            textTransform: "uppercase",
                            fontWeight: 600,
                            letterSpacing: props.isMobile ? 2 : 5,
                            padding: "0px 20px",
                            backgroundColor: "transparent",
                            background: `linear-gradient(to right, ${theme.palette.tertiary.container.on}, ${theme.palette.primary.main})`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            "&:hover": {
                                backgroundColor: "transparent",
                            },
                        })}
                    >
                        Portfolio
                    </NavbarButton>

                    <Stack direction="row" spacing={1}>
                        <NavbarButton
                            onClick={() =>
                                window.open(
                                    "https://harmeet9013-blogs.vercel.app"
                                )
                            }
                            startIcon={<ArticleRounded color="primary" />}
                        >
                            Blog
                        </NavbarButton>

                        <Divider
                            orientation="vertical"
                            variant="middle"
                            flexItem
                        />

                        {renderMenu()}
                    </Stack>
                </Stack>
            </Slide>

            <ScrollToTop
                showScrollTop={showScrollTop}
                isMobile={props.isMobile}
            />
        </Stack>
    );
}
