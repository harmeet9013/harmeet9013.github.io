import {
    ArrowBackIosNewRounded,
    ArrowForwardIosRounded,
    ArticleRounded,
    CloudRounded,
    GamesRounded,
    HomeRounded,
    NotesRounded,
    Twitter,
} from "@mui/icons-material";
import Carousel from "react-material-ui-carousel";
import { Box, Container, Stack, Typography, styled } from "@mui/material";

import blogsBackground from "./assets/projects-pics/blogs.png";
import simonBackground from "./assets/projects-pics/simon.png";
import keeperBackground from "./assets/projects-pics/keeper.png";
import twitter1 from "./assets/projects-pics/twitter-clone-1.png";
import twitter2 from "./assets/projects-pics/twitter-clone-2.png";
import twitter3 from "./assets/projects-pics/twitter-clone-3.png";
import twitter4 from "./assets/projects-pics/twitter-clone-4.png";
import twitter5 from "./assets/projects-pics/twitter-clone-5.png";
import weatherBackground from "./assets/projects-pics/weather.png";

export default function Projects(props) {
    const myProjects = {
        simon: {
            icon: (
                <GamesRounded
                    color="primary"
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
                    color="primary"
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
                    color="primary"
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
        border: `5px solid ${theme.palette.secondary.container.main}`,
        boxShadow: theme.shadows[0],
        "&:hover": {
            transform: "translateY(-0.2rem)",
            boxShadow: theme.shadows[2],
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
        backgroundColor: theme.palette.background.header,
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
                        window.open("https://harmeet9013-blogs.vercel.app");
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
                        color={(theme) => theme.palette.tertiary.container.on}
                        fontWeight={600}
                    >
                        <ArticleRounded
                            fontSize="large"
                            color="primary"
                            sx={{
                                my: props.isMobile ? -0.8 : -0.5,
                            }}
                        />{" "}
                        Blogs
                    </Typography>
                    <Typography
                        variant="h6"
                        zIndex={5}
                        color={(theme) => theme.palette.secondary.container.on}
                    >
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
                                    color={(theme) =>
                                        theme.palette.tertiary.container.on
                                    }
                                >
                                    {project.icon} {project.label}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    zIndex={5}
                                    color={(theme) =>
                                        theme.palette.secondary.container.on
                                    }
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

    const renderCarousel = () => {
        const images = [twitter1, twitter2, twitter3, twitter4, twitter5];

        return (
            <Carousel
                NextIcon={
                    <ArrowForwardIosRounded
                        fontSize="large"
                        color="tertiary"
                        sx={{
                            padding: 0.8,
                        }}
                    />
                }
                PrevIcon={
                    <ArrowBackIosNewRounded
                        fontSize="large"
                        color="tertiary"
                        sx={{
                            padding: 0.8,
                        }}
                    />
                }
                animation="fade"
                interval={8000}
                navButtonsAlwaysVisible
                sx={(theme) => ({
                    width: props.isMobile ? "100%" : "90%",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: props.isMobile ? 10 : 20,
                })}
                navButtonsProps={{
                    sx: (theme) => ({
                        backgroundColor: theme.palette.secondary.container.main,
                    }),
                }}
                indicatorIconButtonProps={{
                    sx: (theme) => ({
                        color: theme.palette.background.highest,
                    }),
                }}
                activeIndicatorIconButtonProps={{
                    sx: (theme) => ({
                        color: theme.palette.primary.main,
                    }),
                }}
            >
                {images.map((Image) => {
                    return (
                        <Box
                            component="img"
                            src={Image}
                            sx={(theme) => ({
                                width: "100%",
                                height: props.isMobile ? "20rem" : "100%",
                                objectFit: "cover",
                                borderRadius: props.isMobile ? 10 : 20,
                            })}
                        />
                    );
                })}
            </Carousel>
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

            <props.MyDivider
                sx={(theme) => ({
                    width: "100%",
                    background: `linear-gradient(90deg, ${theme.palette.tertiary.container.main}, ${theme.palette.primary.container.main})`,
                })}
            />

            <Typography
                variant={props.isMobile ? "h3" : "h2"}
                color="primary"
                textAlign="left"
                fontWeight={500}
            >
                Upcoming
            </Typography>

            <props.MyDivider />

            <Stack justifyContent="center" alignItems="center" spacing={4}>
                <Typography color="secondary" variant="h4" fontWeight={500}>
                    <Twitter color="primary" /> Twitter-Clone
                </Typography>
                {renderCarousel()}
            </Stack>
        </Stack>
    );
}
