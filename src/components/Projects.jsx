import {
    ArrowBackIosNewRounded,
    ArrowForwardIosRounded,
    ArticleRounded,
    CloudRounded,
    GamesRounded,
    HomeRounded,
    NotesRounded,
    TaskRounded,
    Twitter,
    ViewQuiltRounded,
    WebRounded,
} from "@mui/icons-material";
import { Fragment } from "react";
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
import taskboxBackground from "./assets/projects-pics/taskbox.png";

export default function Projects(props) {
    const mernProjects = [
        {
            title: "Blogs",
            desc: "My personal blog built from the ground up uitlizing the MERN stack with beautiful interface and many features!",
            link: "https://harmeet9013-blogs.vercel.app",
            background: blogsBackground,
            icon: (
                <ArticleRounded
                    fontSize="large"
                    sx={{
                        my: props.isMobile ? -0.8 : -0.5,
                    }}
                />
            ),
        },
        {
            title: "TaskBox",
            desc: "Personalized full stack to-do task manager with runtime database, beautiful design and more!",
            link: "https://harmeet9013-taskbox.vercel.app",
            background: taskboxBackground,
            icon: (
                <TaskRounded
                    fontSize="large"
                    sx={{
                        my: props.isMobile ? -0.8 : -0.5,
                    }}
                />
            ),
        },
    ];

    const frontendProjects = [
        {
            title: "Keeper",
            desc: "A simple and elegant note keeping web app. Built in ReactJS.",
            link: "https://harmeet9013.github.io/keeper",
            background: keeperBackground,
            icon: (
                <NotesRounded
                    fontSize="large"
                    sx={{
                        my: -0.8,
                    }}
                />
            ),
        },
        {
            title: "Weather",
            desc: "Current forecast using the OpenWeatherMap API. Built in ReactJS.",
            link: "https://harmeet9013.github.io/weather-app",
            background: weatherBackground,
            icon: (
                <CloudRounded
                    fontSize="large"
                    sx={{
                        my: -0.8,
                    }}
                />
            ),
        },
        {
            title: "Simon Game",
            desc: "The infamous Simon Game. Built from the ground up in ReactJS.",
            link: "https://harmeet9013.github.io/simon-game",
            background: simonBackground,
            icon: (
                <GamesRounded
                    fontSize="large"
                    sx={{
                        my: -0.8,
                    }}
                />
            ),
        },
    ];

    const ProjectStack = styled(Stack)(({ theme }) => ({
        transition: theme.transitions.create(),
        position: "relative",
        textAlign: "center",
        borderRadius: 50,
        overflow: "hidden",
        width: props.isMobile ? "100%" : 500,
        padding: "2rem",
        cursor: "pointer",
        border: `5px solid ${theme.palette.dividervar}`,
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
        opacity: 0.1,
    }));

    const renderProject = (projects) => {
        return (
            <Stack
                direction={props.isMobile ? "column" : "row"}
                flexWrap="wrap"
                columnGap={5}
                rowGap={5}
            >
                {projects.map((project, index) => (
                    <ProjectStack
                        key={index}
                        onClick={() => window.open(project.link)}
                        component={Container}
                        direction="column"
                        spacing={2}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <ProjectImage
                            component="img"
                            src={project.background}
                        />

                        <Typography
                            variant={props.isMobile ? "h4" : "h3"}
                            zIndex={5}
                            letterSpacing={2}
                            color={(theme) => theme.palette.secondary.main}
                            fontWeight={600}
                        >
                            {project.icon} {project.title}
                        </Typography>

                        <Typography variant="h6">{project.desc}</Typography>
                    </ProjectStack>
                ))}
            </Stack>
        );
    };

    const renderAllProjects = (projectsName) => {
        return (
            <Stack
                spacing={4}
                sx={(theme) => ({
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 10,
                    padding: props.isMobile ? "2rem 1.5rem" : 5,
                    backgroundColor: theme.palette.background.low,
                    justifyContent: props.isMobile && "center",
                    alignItems: props.isMobile && "center",
                })}
            >
                {projectsName === "mern" ? (
                    <Fragment>
                        <Typography
                            variant="h4"
                            color={(theme) =>
                                theme.palette.secondary.container.on
                            }
                            align="center"
                            fontWeight={600}
                            sx={(theme) => ({
                                backgroundColor:
                                    theme.palette.secondary.container.main,
                                borderRadius: 10,
                                padding: 2,
                                width: props.isMobile ? "100%" : 300,
                            })}
                        >
                            <ViewQuiltRounded
                                fontSize="large"
                                sx={{
                                    my: -0.8,
                                }}
                            />{" "}
                            MERN Stack
                        </Typography>

                        {renderProject(mernProjects)}
                    </Fragment>
                ) : (
                    <Fragment>
                        <Typography
                            variant="h4"
                            color={(theme) =>
                                theme.palette.secondary.container.on
                            }
                            align="center"
                            fontWeight={600}
                            sx={(theme) => ({
                                backgroundColor:
                                    theme.palette.secondary.container.main,
                                borderRadius: 10,
                                padding: 2,
                                width: props.isMobile ? "100%" : 300,
                            })}
                        >
                            <WebRounded
                                fontSize="large"
                                sx={{
                                    my: -0.8,
                                }}
                            />{" "}
                            Front End
                        </Typography>

                        {renderProject(frontendProjects)}
                    </Fragment>
                )}
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
                    year. <br /> All of the projects are hosted through Vercel
                    or GitHub pages.
                </Typography>
            </Stack>

            {/* projects */}
            {renderAllProjects("mern")}

            {renderAllProjects("frontend")}

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
                <Typography
                    color={(theme) => theme.palette.primary.container.on}
                    variant="h4"
                    fontWeight={500}
                >
                    <Twitter color="primary" /> Twitter-Clone
                </Typography>
                {renderCarousel()}
            </Stack>
        </Stack>
    );
}
