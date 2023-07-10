import simonBackground from "./assets/projects-pics/simon.png";
import keeperBackground from "./assets/projects-pics/keeper.png";
import weatherBackground from "./assets/projects-pics/weather.png";
import blogs from "./assets/projects-pics/blogs.png";
import "./css/projects.css";
import { Card, CardContent, CardMedia } from "@mui/material";

export default function Projects({ darkMode }) {
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
        return Object.keys(myProjects).map((key) => {
            const project = myProjects[key];
            return (
                <a
                    href={project.link}
                    target="_blank"
                    key={key}
                    style={{
                        display: "block",
                    }}
                >
                    <div
                        className={`project-container ${
                            darkMode ? "dark" : "light"
                        }`}
                        style={{
                            backgroundImage: `url(${project.bg})`,
                            cursor: "pointer",
                        }}
                    >
                        <p className="project-heading-text">
                            <strong>{project.label}</strong>
                        </p>
                        <p className="project-desc-text">{project.desc}</p>
                    </div>
                </a>
            );
        });
    };
    return (
        <div
            className={`projects-main-container ${darkMode ? "dark" : "light"}`}
            id="projects"
        >
            <h1 className="myprojects-text">My Projects</h1>
            <p className="small-desc-projects">
                These are the projects that are{" "}
                <strong>built from the ground up by me.</strong>
                <br />
                All of their source codes are available on my{" "}
                <strong>GitHub profile.</strong>
                <br />
                Click on any project to visit it.
            </p>
            <div className="projects-container">{renderProjects()}</div>
            <p className="myprojects-text">
                <strong>Upcoming...</strong>
            </p>
            <Card sx={{ transform: "scale(0.9)" }}>
                <CardMedia
                    sx={{ height: "600px" }}
                    image={blogs}
                    title="Blogs Project"
                />
                <CardContent>
                    <p className="small-desc-projects">
                        Full Stack blog website complete with database
                        management, back-end and front-end. <br />
                        Built using ReactJS, NodeJS, ExpressJS, MongoDB.
                    </p>
                </CardContent>
            </Card>

            {/* <img
                src={blogs}
                alt="Blogs Project"
                className="upcoming-project-image"
            /> */}
        </div>
    );
}
