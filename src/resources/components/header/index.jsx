import {
    Box,
    Menu,
    Stack,
    Slide,
    Button,
    Divider,
    Container,
    Typography,
    IconButton,
} from "@mui/material";
import {
    MenuRounded,
    CloseRounded,
    HistoryEduRounded,
    DarkModeRounded,
    LightModeRounded,
} from "@mui/icons-material";
import Cookies from "js-cookie";
import { alpha } from "@mui/material";
import { useState, useEffect } from "react";
//
import { ScrollToTop } from "../scroll-top";
import { scrollToSection } from "../../utils";
import { useSettingsContext } from "../../settings";
import { HEADER_ITEMS, SECTIONS_IDS, STATIC_URLS } from "../../config";

export const Header = () => {
    const { darkMode, setDarkMode, isMobile, setOpenResumeDialog } =
        useSettingsContext();

    // state hooks
    const [menuOpen, setMenuOpen] = useState(null);
    const [showHeader, setShowHeader] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [showScrollTop, setShowScrollTop] = useState(false);

    const handleThemeChange = () => {
        const theme = !darkMode;

        theme ? Cookies.set("theme", "dark") : Cookies.set("theme", "light");
        setDarkMode(theme);
    };

    const handleActionClick = (action) => {
        const actionsMap = {
            projects: () => scrollToSection(SECTIONS_IDS["projects"]),
            contact: () => scrollToSection(SECTIONS_IDS["contact"]),
            experience: () => scrollToSection(SECTIONS_IDS["experience"]),
            resume: () => setOpenResumeDialog(true),
            code: () => window.open(STATIC_URLS["code"]),
        };
        actionsMap[action]();
        setMenuOpen(false);
    };

    const RenderMenu = () => {
        return (
            <Menu
                open={!!menuOpen}
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
                            backgroundColor: theme.palette.background.default,
                            border: `2px solid ${theme.palette.divider}`,
                            // borderRadius: 10,
                            minWidth: theme.spacing(30),
                            marginTop: 3,
                            padding: theme.spacing(1, 2),
                            zIndex: theme.zIndex.appBar,
                        }),
                    },
                }}
            >
                <Stack direction={isMobile ? "column" : "row"} spacing={2}>
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
                            navigation
                        </Typography>

                        <Divider flexItem />

                        {HEADER_ITEMS["navigation"].map((action) => (
                            <Button
                                key={action.name}
                                onClick={() => handleActionClick(action.action)}
                                startIcon={action.icon}
                                variant="contained"
                                sx={{
                                    justifyContent: "flex-start",
                                }}
                            >
                                {action.name}
                            </Button>
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
                            miscellaneous
                        </Typography>

                        <Divider flexItem />

                        {HEADER_ITEMS["miscellaneous"].map((action) => (
                            <Button
                                key={action.name}
                                onClick={() => handleActionClick(action.action)}
                                startIcon={action.icon}
                                variant="outlined"
                                sx={{
                                    justifyContent: "flex-start",
                                    textDecoration: "underline",
                                }}
                            >
                                {action.name}
                            </Button>
                        ))}

                        <Button
                            variant="contained"
                            aria-label="theme-button"
                            onClick={handleThemeChange}
                            startIcon={
                                darkMode ? (
                                    <DarkModeRounded />
                                ) : (
                                    <LightModeRounded />
                                )
                            }
                            sx={{
                                justifyContent: "flex-start",
                            }}
                        >
                            {darkMode ? "Dark mode" : "Light mode"}
                        </Button>
                    </Stack>
                </Stack>
            </Menu>
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

    return (
        <>
            <Slide direction="down" in={true}>
                <Box
                    component="header"
                    sx={(theme) => ({
                        transition: `${theme.transitions.create()} !important`,
                        backgroundColor:
                            // !showScrollTop
                            //     ? "transparent"
                            //     :
                            alpha(theme.palette.background.default, 0.7),

                        backdropFilter: `blur(${
                            !showScrollTop ? 0 : theme.spacing(2)
                        })`,
                        padding: isMobile
                            ? theme.spacing(2, 0)
                            : theme.spacing(2, 0),
                        width: 1,
                        position: "fixed",
                        overflow: "hidden",
                        zIndex: theme.zIndex.appBar,
                    })}
                >
                    <Container maxWidth="xl">
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Button
                                onClick={() => {
                                    scrollToSection(SECTIONS_IDS["intro"]);
                                }}
                                sx={(theme) => ({
                                    py: 0,
                                    px: 1,
                                    fontWeight: 600,
                                    textTransform: "none",
                                    fontFamily: "Creattion",
                                    letterSpacing: isMobile ? 5 : 5,
                                    fontSize: isMobile
                                        ? theme.typography.h4.fontSize
                                        : theme.typography.h2.fontSize,
                                    ":hover": {
                                        fontWeight: 600,
                                    },
                                })}
                            >
                                harmeet singh
                            </Button>

                            <Stack
                                direction="row"
                                alignItems="center"
                                spacing={isMobile ? 1 : 0}
                            >
                                {!isMobile && (
                                    <>
                                        {HEADER_ITEMS["navigation"].map(
                                            (action) => (
                                                <Button
                                                    size="large"
                                                    key={action.name}
                                                    startIcon={action.icon}
                                                    onClick={() =>
                                                        handleActionClick(
                                                            action.action
                                                        )
                                                    }
                                                    sx={{
                                                        px: 2,
                                                    }}
                                                >
                                                    {action.name}
                                                </Button>
                                            )
                                        )}

                                        {HEADER_ITEMS["miscellaneous"].map(
                                            (action) => (
                                                <Button
                                                    size="large"
                                                    key={action.name}
                                                    startIcon={action.icon}
                                                    onClick={() =>
                                                        handleActionClick(
                                                            action.action
                                                        )
                                                    }
                                                    sx={{
                                                        px: 2,
                                                        textDecoration:
                                                            "underline",
                                                    }}
                                                >
                                                    {action.name}
                                                </Button>
                                            )
                                        )}
                                    </>
                                )}

                                <Button
                                    size="large"
                                    startIcon={<HistoryEduRounded />}
                                    onClick={() =>
                                        window.open(STATIC_URLS["blogs"])
                                    }
                                    sx={{
                                        textDecoration: "underline",
                                        px: 2,
                                    }}
                                >
                                    blog
                                </Button>

                                {isMobile ? (
                                    <>
                                        <Divider
                                            orientation="vertical"
                                            variant="middle"
                                            flexItem
                                        />

                                        <IconButton
                                            color="primary"
                                            onClick={(e) =>
                                                setMenuOpen(e.currentTarget)
                                            }
                                            sx={(theme) => ({
                                                transition:
                                                    theme.transitions.create([
                                                        "transform",
                                                        "background-color",
                                                    ]),
                                                transform: !!menuOpen
                                                    ? "rotate(90deg)"
                                                    : "rotate(0deg)",
                                            })}
                                        >
                                            {!!menuOpen ? (
                                                <CloseRounded fontSize="large" />
                                            ) : (
                                                <MenuRounded fontSize="large" />
                                            )}
                                        </IconButton>

                                        {RenderMenu()}
                                    </>
                                ) : (
                                    <IconButton
                                        color="primary"
                                        onClick={handleThemeChange}
                                    >
                                        {darkMode ? (
                                            <DarkModeRounded />
                                        ) : (
                                            <LightModeRounded />
                                        )}
                                    </IconButton>
                                )}
                            </Stack>
                        </Stack>
                    </Container>
                </Box>
            </Slide>

            <ScrollToTop showScrollTop={showScrollTop} />
        </>
    );
};
