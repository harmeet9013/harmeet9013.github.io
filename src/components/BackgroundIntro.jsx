import { useConfirm } from "material-ui-confirm";
import { ContactPage, Folder, OpenInNewRounded } from "@mui/icons-material";
import {
    Box,
    Button,
    Fade,
    Grow,
    Link,
    Stack,
    Typography,
    styled,
} from "@mui/material";

import avatar from "./assets/projects-pics/avatar.jpg";
import bgDark from "./assets/projects-pics/bg-dark.jpg";
import bgLight from "./assets/projects-pics/bg-light.jpg";
import { useState } from "react";
import { useTheme } from "@emotion/react";

export default function BackgroundIntro(props) {
    const theme = useTheme();
    const confirmDialog = useConfirm();

    const [imageLoaded, setImageLoaded] = useState(false);

    const isLightMode = theme.palette.mode === "light";

    const CustomButton = styled(Button)(({ theme }) => ({
        textTransform: "none",
        transition: theme.transitions.create(),
        backgroundColor: theme.palette.background.high,
        color: theme.palette.secondary.main,
        fontSize: theme.typography.subtitle1.fontSize,
        fontWeight: 600,
        borderRadius: theme.spacing(2),
        padding: "15px 30px",
        "&:hover": {
            borderRadius: theme.spacing(4),
            backgroundColor: theme.palette.primary.container.main,
        },
    }));

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const yOffset = -80;
            const y =
                section.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <Stack
            id="home"
            direction={props.isMobile ? "column" : "row"}
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
                padding: props.isMobile ? "8svh 2rem 0 2rem" : "0 5rem 0 5rem",
            })}
        >
            <Fade
                in={imageLoaded}
                timeout={{ enter: 500 }}
                style={{
                    opacity: props.isMobile ? "0.5" : isLightMode ? "1" : "0.5",
                }}
            >
                <Box
                    component="img"
                    src={props.darkMode ? bgDark : bgLight}
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
                        backgroundPosition: "center",
                        transition: theme.transitions.create(),
                        animation: `rotate_image ${40000}ms linear infinite`,
                    })}
                />
            </Fade>

            <Grow in={true} timeout={{ enter: 300 }}>
                <Box
                    component="img"
                    src={avatar}
                    alt="avatar-img"
                    sx={(theme) => ({
                        zIndex: 1,
                        maxWidth: "400px",
                        maxHeight: "400px",
                        transition: theme.transitions.create(),
                        borderRadius: props.isMobile ? 20 : 30,
                        width: props.isMobile ? "30svh" : "50svh",
                        height: props.isMobile ? "30svh" : "50svh",
                        border: `10px solid ${theme.palette.primary.main}`,
                    })}
                />
            </Grow>

            <Grow
                in={true}
                timeout={{ enter: 500 }}
                style={{ transitionDelay: 200 }}
            >
                <Stack
                    spacing={1}
                    sx={(theme) => ({
                        zIndex: 1,
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: theme.transitions.create(),
                    })}
                >
                    {/* <Typography variant="h6">hello there </Typography> */}
                    <Typography
                        variant={props.isMobile ? "h4" : "h2"}
                        sx={(theme) => ({
                            color: theme.palette.primary.main,
                        })}
                    >
                        I'm <strong>Harmeet Singh</strong>
                    </Typography>
                    <Typography variant={props.isMobile ? "body1" : "h6"}>
                        A <strong>MERN Stack Developer.</strong>
                        <br />I create websites, both frontend and backend.{" "}
                        <br />
                        <Link
                            underline="hover"
                            onClick={() =>
                                window.open(
                                    "https://harmeet9013-blogs.vercel.app"
                                )
                            }
                            sx={{
                                cursor: "pointer",
                            }}
                        >
                            Just like this one{" "}
                            <OpenInNewRounded
                                fontSize="10"
                                color="secondary"
                                sx={{
                                    my: -0.4,
                                }}
                            />
                        </Link>
                    </Typography>
                    <Stack
                        spacing={2}
                        direction={props.isMobile ? "column" : "row"}
                    >
                        <CustomButton
                            color="secondary"
                            onClick={() => {
                                scrollToSection("contact");
                            }}
                            startIcon={<ContactPage color="primary" />}
                        >
                            Contact Me!
                        </CustomButton>
                        <CustomButton
                            color="secondary"
                            onClick={() => {
                                confirmDialog({
                                    title: "Resume Download",
                                    content: "This will open Google Drive",
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
                            startIcon={<Folder color="primary" />}
                        >
                            Download Resume
                        </CustomButton>
                    </Stack>
                </Stack>
            </Grow>
        </Stack>
    );
}
