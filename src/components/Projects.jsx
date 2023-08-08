import {
    Box,
    Container,
    Divider,
    Stack,
    Typography,
    styled,
    useMediaQuery,
} from "@mui/material";

import simonBackground from "./assets/projects-pics/simon.png";
import keeperBackground from "./assets/projects-pics/keeper.png";
import weatherBackground from "./assets/projects-pics/weather.png";
import blogsBackground from "./assets/projects-pics/blogs.png";

export default function Projects() {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
    const myProjects = {
        simon: {
            label: "SIMON GAME",
            desc: "The infamous Simon Game. Built from the ground up in ReactJS.",
            link: "https://harmeet9013.github.io/simon-game",
            bg: simonBackground,
        },
        keeper: {
            label: "KEEPER",
            desc: "A simple and elegant note keeping web app. Built in ReactJS.",
            link: "https://harmeet9013.github.io/keeper",
            bg: keeperBackground,
        },
        weather: {
            label: "WEATHER",
            desc: "Current forecast using the OpenWeatherMap API. Built in ReactJS.",
            link: "https://harmeet9013.github.io/weather-app",
            bg: weatherBackground,
        },
    };

    const ProjectStack = styled(Stack)(({ theme }) => ({
        position: "relative",
        borderRadius: "15px",
        overflow: "hidden",
        height: "200px",
        cursor: "pointer",
        border: `5px solid ${theme.palette.text.primary}`,
        transition: "transform 0.2s ease-out",
        "&:hover": {
            transform: "scale(1.05)",
        },
    }));

    const ProjectImage = styled(Box)(({ theme }) => ({
        position: "absolute",
        top: 0,
        left: 0,
        width: "inherit",
        height: "inherit",
        objectFit: "cover",
        filter: "blur(5px)",
        zIndex: "0",
        transition: "all 0.2s ease-out",
        transform: "scale(1.1)",
    }));

    const ProjectOverlay = styled(Box)(({ theme }) => ({
        position: "absolute",
        top: -50,
        left: 0,
        width: "100%",
        height: "150%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        transition: "all 0.3s ease-out",
    }));

    const renderProjects = () => {
        return (
            <Stack
                direction="column"
                spacing={isMobile ? 4 : 8}
                justifyContent="center"
                alignItems="center"
                component={Container}
            >
                <ProjectStack
                    onClick={() => {
                        window.open(
                            "https://harmeet9013.github.io/blogs",
                            "_blank"
                        );
                    }}
                    component={Container}
                    direction="column"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        height: "300px",
                    }}
                >
                    <ProjectImage component="img" src={blogsBackground} />

                    <ProjectOverlay />

                    <Typography
                        variant="h3"
                        sx={{
                            color: "white",
                            zIndex: "5",
                            letterSpacing: "2px",
                        }}
                    >
                        <strong>BLOGS</strong>
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: "white",
                            zIndex: "5",
                        }}
                    >
                        Blog website built using MERN Stack with User
                        Authentication and more.
                    </Typography>
                </ProjectStack>

                <Stack
                    direction={isMobile ? "column" : "row"}
                    spacing={4}
                    justifyContent="center"
                    alignItems="center"
                >
                    {Object.keys(myProjects).map((key) => {
                        const project = myProjects[key];
                        return (
                            // individual component of the project
                            <ProjectStack
                                key={project.label}
                                onClick={() => {
                                    window.open(project.link, "_blank");
                                }}
                                component={Container}
                                direction="column"
                                spacing={2}
                                justifyContent="center"
                                alignItems="center"
                            >
                                <ProjectImage
                                    component="img"
                                    src={project.bg}
                                />

                                <ProjectOverlay />

                                <Typography
                                    variant="h5"
                                    sx={{
                                        color: "white",
                                        zIndex: "5",
                                        letterSpacing: "2px",
                                    }}
                                >
                                    <strong>{project.label}</strong>
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: "white",
                                        zIndex: "5",
                                    }}
                                >
                                    {project.desc}
                                </Typography>
                            </ProjectStack>
                        );
                    })}
                </Stack>
            </Stack>
        );
    };
    return (
        <Stack
            direction="column"
            spacing={4}
            id="projects"
            justifyContent="center"
            alignItems="center"
            sx={{
                bgcolor: (theme) => theme.palette.action.hover,
                textAlign: "center",
                transition: "all 500ms ease",
                padding: isMobile ? "10%" : "5% 20% 5% 20%",
                width: "100%",
                cursor: "default",
                zIndex: "-1",
            }}
        >
            {/* title */}
            <Typography
                variant={isMobile ? "h3" : "h2"}
                sx={{
                    color: (theme) => theme.palette.accent.primary,
                }}
            >
                <strong>My Projects</strong>
            </Typography>

            {/* desc */}
            <Typography
                variant={isMobile ? "body1" : "h5"}
                sx={{ textAlign: "center" }}
            >
                These are the projects that are{" "}
                <strong>built from the ground up by me.</strong>
                <br />
                All of their source codes are available on my{" "}
                <strong>GitHub profile.</strong>
            </Typography>

            <Divider variant="middle" flexItem sx={{ paddingTop: "50px" }} />

            {/* second dec */}
            <Typography variant="h6">
                <i>Click on any project to visit it.</i>
            </Typography>

            {/* projects */}
            {renderProjects()}
        </Stack>
    );
}
