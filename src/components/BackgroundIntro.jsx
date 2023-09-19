import { useConfirm } from "material-ui-confirm";
import { ContactPage, Folder, OpenInNewRounded } from "@mui/icons-material";
import {
    Box,
    Button,
    Grow,
    Link,
    Stack,
    Typography,
    styled,
} from "@mui/material";

import avatar from "./assets/projects-pics/avatar.jpg";
import bgDark from "./assets/projects-pics/bg-dark.jpg";
import bgLight from "./assets/projects-pics/bg-light.jpg";

export default function BackgroundIntro(props) {
    const confirmDialog = useConfirm();

    const CustomButton = styled(Button)(({ theme }) => ({
        textTransform: "none",
        transition: theme.transitions.create(),
        backgroundColor: theme.palette.background.high,
        color: theme.palette.secondary.main,
        fontSize: theme.typography.subtitle1.fontSize,
        fontWeight: 600,
        borderRadius: 50,
        padding: "15px 30px",
        "&:hover": {
            backgroundColor: theme.palette.primary.container.main,
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

    return (
        <Stack
            id="home"
            spacing={props.isMobile ? 4 : 6}
            direction={props.isMobile ? "column" : "row"}
            sx={(theme) => ({
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                height: "100svh",
                padding: props.isMobile ? "0 2rem 0 2rem" : "0 5rem 0 5rem",
                cursor: "default",
                transition: theme.transitions.create(),
            })}
        >
            <Box
                component="img"
                src={props.darkMode ? bgDark : bgLight}
                sx={(theme) => ({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    backgroundPosition: "center",
                    opacity: props.isMobile ? "0.2" : "0.5",
                    zIndex: "-1",
                    transition: theme.transitions.create(),
                })}
            />

            <Grow in={true}>
                <Box
                    component="img"
                    src={avatar}
                    alt="avatar-img"
                    sx={(theme) => ({
                        width: props.isMobile ? "30vh" : "400px",
                        height: props.isMobile ? "30vh" : "400px",
                        borderRadius: props.isMobile ? 20 : 30,
                        transition: theme.transitions.create(),
                        border: `10px solid ${theme.palette.primary.main}`,
                    })}
                />
            </Grow>

            <Grow in={true}>
                <Stack
                    direction="column"
                    spacing={2}
                    sx={(theme) => ({
                        alignItems: "center",
                        justifyContent: "center",
                        transition: theme.transitions.create(),
                    })}
                >
                    <Typography variant="h6">hello there </Typography>
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
