import {
    Avatar,
    Box,
    Button,
    Stack,
    Typography,
    useMediaQuery,
    styled,
    Container,
} from "@mui/material";
import avatar from "./assets/projects-pics/avatar.jpg";
import bgLight from "./assets/projects-pics/bg-light.jpg";
import bgDark from "./assets/projects-pics/bg-dark.jpg";
import { Fragment } from "react";
import { ContactPage, Folder } from "@mui/icons-material";

export default function BackgroundIntro({ darkMode, setShowPrompt }) {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

    const CustomButton = styled(Button)(({ theme }) => ({
        transition: "all 500ms ease",
        backgroundColor: theme.palette.action.selected,
        color: theme.palette.text.primary,
        fontSize: "16px",
        borderRadius: "15px",
        padding: "15px 20px",
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

    return (
        <Fragment>
            <Stack
                id="home"
                spacing={6}
                direction={isMobile ? "column" : "row"}
                style={{
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    padding: isMobile ? "0 5% 0 5%" : "0 20% 0 20%",
                    cursor: "default",
                    transition: "all 500ms ease",
                }}
            >
                <Box
                    component="div"
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${darkMode ? bgDark : bgLight})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: isMobile ? "0.2" : "0.7",
                        zIndex: "-1",
                        transition: "all 0.2s ease",
                    }}
                />
                <Avatar
                    src={avatar}
                    alt="avatar-img"
                    sx={{
                        width: isMobile ? "30vh" : "400px",
                        height: isMobile ? "30vh" : "400px",
                        transition: "all 500ms ease",
                        border: (theme) =>
                            `10px solid ${theme.palette.accent.secondary}`,
                    }}
                />
                <Stack
                    direction="column"
                    spacing={2}
                    sx={{
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 50ms ease",
                    }}
                >
                    <Typography variant="h6">hello there </Typography>
                    <Typography
                        variant={isMobile ? "h4" : "h2"}
                        sx={{
                            color: (theme) => theme.palette.accent.secondary,
                        }}
                    >
                        I'm <strong>Harmeet Singh</strong>
                    </Typography>
                    <Typography variant={isMobile ? "body1" : "h6"}>
                        A <strong>MERN Stack Developer.</strong>
                        <br />I create websites, professionally and for fun.{" "}
                        <br />
                        Just like this one!
                    </Typography>
                    <Stack spacing={2} direction="row">
                        <CustomButton
                            sx={{
                                color: (theme) => theme.palette.accent.primary,
                            }}
                            onClick={() => {
                                scrollToSection("contact");
                            }}
                            startIcon={<ContactPage />}
                        >
                            Contact Me!
                        </CustomButton>
                        <CustomButton
                            sx={{
                                color: (theme) => theme.palette.accent.primary,
                            }}
                            onClick={() => {
                                setShowPrompt(true);
                            }}
                            startIcon={<Folder />}
                        >
                            Download Resume
                        </CustomButton>
                    </Stack>
                </Stack>
            </Stack>
        </Fragment>
    );
}
