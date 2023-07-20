import simonBackground from "./assets/projects-pics/simon.png";
import keeperBackground from "./assets/projects-pics/keeper.png";
import weatherBackground from "./assets/projects-pics/weather.png";
import blogs from "./assets/projects-pics/blogs.png";
import { useState } from "react";
import {
    Box,
    Divider,
    Paper,
    Stack,
    Typography,
    useMediaQuery,
} from "@mui/material";

export default function Projects() {
    const [imageError, setImageError] = useState(false);
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
    const myProjects = {
        simon: {
            label: "SIMON GAME",
            desc: "The infamous Simon Game. Built from the ground up in ReactJS.",
            link: "/simon-game",
            bg: simonBackground,
        },
        keeper: {
            label: "KEEPER",
            desc: "A simple and elegant note keeping web app. Built in ReactJS.",
            link: "/keeper",
            bg: keeperBackground,
        },
        weather: {
            label: "WEATHER",
            desc: "Current forecast using the OpenWeatherMap API. Built in ReactJS.",
            link: "/weather-app",
            bg: weatherBackground,
        },
    };

    const renderProjects = () => {
        return (
            <Stack
                direction={isMobile ? "column" : "row"}
                spacing={isMobile ? 4 : 8}
            >
                {Object.keys(myProjects).map((key) => {
                    const project = myProjects[key];
                    return (
                        // individual component of the project
                        <Stack
                            sx={{
                                cursor: "pointer",
                                borderRadius: "15px",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "100px",
                                width: "100%",
                                transition: "all 100ms ease",
                                position: "relative",
                                overflow: "hidden",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                },
                            }}
                            onClick={() => {
                                window.open(project.link, "_blank");
                            }}
                        >
                            {/* this is the background component */}
                            <Paper
                                elevation={10}
                                component="div"
                                sx={{
                                    position: "absolute",
                                    backgroundImage: `url(${project.bg})`,
                                    border: (theme) =>
                                        `5px solid ${theme.palette.text.primary}`,
                                    borderRadius: "15px",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    transition: "all 200ms ease",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                }}
                            />

                            {/* this is the overlay component */}
                            <Stack
                                sx={{
                                    position: "absolute",
                                    justifyContent: "center",
                                    bgcolor: "rgba(0,0,0,0.2)",
                                    height: "100%",
                                    width: "100%",
                                    padding: "40px",
                                    transition: "all 200ms ease",
                                    "&:hover": {
                                        bgcolor: "rgba(0,0,0,0.5)",
                                    },
                                }}
                            >
                                {/* the text of the project */}
                                <Typography
                                    variant="h5"
                                    sx={{
                                        color: "white",
                                        zIndex: "1",
                                    }}
                                >
                                    <strong>{project.label}</strong>
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: "white",
                                    }}
                                >
                                    {project.desc}
                                </Typography>
                            </Stack>
                        </Stack>
                    );
                })}
            </Stack>
        );
    };
    return (
        <Stack
            direction="column"
            spacing={4}
            id="projects"
            sx={{
                bgcolor: (theme) => theme.palette.action.hover,
                textAlign: "center",
                transition: "all 500ms ease",
                padding: isMobile ? "10%" : "5% 20% 5% 20%",
                width: "100%",
                cursor: "default",
            }}
        >
            {/* title */}
            <Typography variant={isMobile ? "h3" : "h2"}>
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

            <Divider variant="middle" flexItem />

            {/* upcoming title */}
            <Typography
                variant={isMobile ? "h3" : "h2"}
                sx={{ paddingTop: "50px" }}
            >
                <strong>Upcoming...</strong>
            </Typography>

            {/* upcoming component */}
            <Paper
                elevation={10}
                sx={{
                    borderRadius: "15px",
                    padding: "5%",
                    transition: "all 500ms ease",
                }}
            >
                {imageError ? (
                    <Typography variant="h6">
                        There was problem loading this image.
                    </Typography>
                ) : (
                    <Box
                        component="img"
                        src={blogs}
                        onError={() => {
                            setTimeout(() => {
                                setImageError(true);
                            }, 500);
                        }}
                        alt="blogs-upcoming"
                        sx={{
                            borderRadius: "15px",
                            width: "100%",
                            transition: "all 500ms ease",
                        }}
                    />
                )}

                <Typography
                    variant={isMobile ? "body1" : "h5"}
                    sx={{ textAlign: "center" }}
                >
                    Full Stack blog website complete with database management,
                    back-end and front-end. <br />
                    <strong>
                        Built using ReactJS, NodeJS, ExpressJS, MongoDB.
                    </strong>
                </Typography>
            </Paper>
        </Stack>
    );
}
