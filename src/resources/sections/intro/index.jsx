import {
    FolderRounded,
    OpenInNewRounded,
    ContactPageRounded,
} from "@mui/icons-material";
import { useState } from "react";
import { Box, Fade, Link, Stack, Button, Typography } from "@mui/material";
//
import { scrollToSection } from "../../utils";
import { useSettingsContext } from "../../settings";
import {
    STATIC_URLS,
    SECTIONS_IDS,
    COMMON_IMAGES,
    BACKGROUND_IMAGES,
} from "../../config";

export const BackgroundIntro = () => {
    const { darkMode, isMobile, setOpenResumeDialog } = useSettingsContext();

    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <Fade in={imageLoaded}>
            <Stack
                id={SECTIONS_IDS["intro"]}
                direction={isMobile ? "column" : "row"}
                sx={(theme) => ({
                    position: "relative",
                    zIndex: 0,
                    rowGap: "1rem",
                    height: "100svh",
                    cursor: "default",
                    columnGap: "2rem",
                    overflow: "hidden",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: theme.transitions.create(),
                    padding: isMobile ? "8svh 2rem 0 2rem" : "0 5rem 0 5rem",
                })}
            >
                <Box
                    component="img"
                    src={BACKGROUND_IMAGES[darkMode ? "dark" : "light"]}
                    onLoad={() => setImageLoaded(true)}
                    sx={(theme) => ({
                        top: 0,
                        left: 0,
                        zoom: 20,
                        width: 1,
                        height: 1,
                        zIndex: 0,
                        filter: "blur(0.8px)",
                        overflow: "hidden",
                        objectFit: "cover",
                        position: "absolute",
                        pointerEvents: "none",
                        backgroundPosition: "center",
                        transition: theme.transitions.create(),
                        animation: `rotate_image ${40000}ms linear infinite`,
                    })}
                />

                <Box
                    component="img"
                    src={COMMON_IMAGES["avatar"]}
                    alt="avatar-img"
                    sx={(theme) => ({
                        zIndex: 1,
                        maxWidth: "400px",
                        maxHeight: "400px",
                        pointerEvents: "none",
                        transition: theme.transitions.create(),
                        borderRadius: isMobile ? 20 : 30,
                        width: isMobile ? "30svh" : "50svh",
                        height: isMobile ? "30svh" : "50svh",
                        border: `${theme.spacing(1.5)} solid ${
                            theme.palette.primary.main
                        }`,
                    })}
                />

                <Stack
                    spacing={1}
                    alignItems="center"
                    textAlign="center"
                    justifyContent="center"
                    zIndex={1}
                >
                    {/* <Typography variant="h6">hello there </Typography> */}
                    <Typography
                        variant={isMobile ? "h4" : "h2"}
                        color="primary"
                    >
                        i'm <strong>harmeet singh</strong>
                    </Typography>
                    <Typography variant={isMobile ? "body1" : "h6"}>
                        a <strong>MERN stack developer,</strong>
                        <br />
                        intermediate in frontend, backend. <br />
                        <Link
                            underline="hover"
                            onClick={() => window.open(STATIC_URLS["blogs"])}
                            sx={{
                                cursor: "pointer",
                            }}
                        >
                            here's an example{" "}
                            <OpenInNewRounded
                                color="secondary"
                                sx={(theme) => ({
                                    fontSize: theme.spacing(2.5),
                                    ml: 0.5,
                                    my: -0.4,
                                })}
                            />
                        </Link>
                    </Typography>
                    <Stack spacing={2} direction={isMobile ? "column" : "row"}>
                        <Button
                            color="secondary"
                            variant="outlined"
                            onClick={() => {
                                scrollToSection("contact");
                            }}
                            startIcon={<ContactPageRounded color="primary" />}
                        >
                            contact
                        </Button>
                        <Button
                            color="secondary"
                            variant="contained"
                            onClick={() => {
                                setOpenResumeDialog(true);
                            }}
                            startIcon={<FolderRounded />}
                        >
                            resume
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Fade>
    );
};
