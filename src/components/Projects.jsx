import { Box, Container, Stack, Typography, styled } from "@mui/material";

import blogsBackground from "./assets/projects-pics/blogs.png";
import simonBackground from "./assets/projects-pics/simon.png";
import keeperBackground from "./assets/projects-pics/keeper.png";
import weatherBackground from "./assets/projects-pics/weather.png";
import {
    ArticleRounded,
    CloudRounded,
    GamesRounded,
    HomeRounded,
    NotesRounded,
} from "@mui/icons-material";

export default function Projects(props) {
    const myProjects = {
        simon: {
            icon: (
                <GamesRounded
                    fontSize="large"
                    sx={{
                        my: -0.8,
                    }}
                />
            ),
            label: "Simon Game",
            desc: "The infamous Simon Game. Built from the ground up in ReactJS.",
            link: "https://harmeet9013.github.io/simon-game",
            bg: simonBackground,
        },
        keeper: {
            icon: (
                <NotesRounded
                    fontSize="large"
                    sx={{
                        my: -0.8,
                    }}
                />
            ),
            label: "Keeper",
            desc: "A simple and elegant note keeping web app. Built in ReactJS.",
            link: "https://harmeet9013.github.io/keeper",
            bg: keeperBackground,
        },
        weather: {
            icon: (
                <CloudRounded
                    fontSize="large"
                    sx={{
                        my: -0.8,
                    }}
                />
            ),
            label: "Weather",
            desc: "Current forecast using the OpenWeatherMap API. Built in ReactJS.",
            link: "https://harmeet9013.github.io/weather-app",
            bg: weatherBackground,
        },
    };

    const ProjectStack = styled(Stack)(({ theme }) => ({
        transition: theme.transitions.create(),
        position: "relative",
        textAlign: "center",
        borderRadius: 50,
        overflow: "hidden",
        height: "300px",
        cursor: "pointer",
        border: `5px solid ${theme.palette.containers.tertiary.container}`,
        boxShadow: theme.shadows[4],
        "&:hover": {
            transform: "translateY(-0.2rem)",
            boxShadow: theme.shadows[10],
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
        transition: theme.transitions.create(),
        transform: "scale(1.1)",
    }));

    const ProjectOverlay = styled(Box)(({ theme }) => ({
        position: "absolute",
        top: -50,
        left: 0,
        width: "100%",
        height: "150%",
        backgroundColor: theme.palette.hover,
        transition: theme.transitions.create(),
    }));

    const renderProjects = () => {
        return (
            <Stack
                direction="column"
                spacing={props.isMobile ? 4 : 8}
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
                >
                    <ProjectImage component="img" src={blogsBackground} />

                    <ProjectOverlay />

                    <Typography
                        variant={props.isMobile ? "h4" : "h3"}
                        zIndex={5}
                        letterSpacing={2}
                        color="primary"
                        fontWeight={600}
                    >
                        <ArticleRounded
                            fontSize="large"
                            sx={{
                                my: props.isMobile ? -0.8 : -0.5,
                            }}
                        />{" "}
                        Blogs
                    </Typography>
                    <Typography variant="h6" zIndex={5}>
                        Blog website built using MERN Stack with User
                        Authentication and more.
                    </Typography>
                </ProjectStack>

                <Stack
                    direction={props.isMobile ? "column" : "row"}
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
                                    variant="h4"
                                    fontWeight={600}
                                    zIndex={5}
                                    letterSpacing={2}
                                    color="primary"
                                >
                                    {project.icon} {project.label}
                                </Typography>
                                <Typography variant="h6" zIndex={5}>
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
            component={Container}
            id="projects"
            sx={(theme) => ({
                transition: theme.transitions.create(),
                padding: props.isMobile
                    ? "5rem 1rem 5rem 1rem "
                    : "5rem 0 5rem 0",
                width: "100%",
                cursor: "default",
                zIndex: "-1",
            })}
        >
            {/* title */}
            <Typography
                variant={props.isMobile ? "h3" : "h2"}
                color="primary"
                textAlign="left"
                fontWeight={500}
            >
                Projects
            </Typography>

            <props.MyDivider />

            {/* desc */}
            <Stack direction="row" spacing={4} component={Container}>
                <HomeRounded fontSize="large" color="primary" />

                <Typography
                    variant={props.isMobile ? "body1" : "h5"}
                    textAlign="left"
                    paddingRight={!props.isMobile && 20}
                >
                    These are the projects that I have built throughout this
                    year. Most (if not all) of my work is hosted live through
                    Github Pages.
                </Typography>
            </Stack>

            {/* second dec */}
            <Typography variant="h6" textAlign="center">
                Click on any project to visit it.
            </Typography>

            {/* projects */}
            {renderProjects()}
        </Stack>
    );
}
