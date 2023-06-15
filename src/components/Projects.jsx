import simonBackground from "./assets/projects-pics/simon.png";
import keeperBackground from "./assets/projects-pics/keeper.png";
import weatherBackground from "./assets/projects-pics/weather.png";

export default function Projects() {
    const myProjects = {
        simon: {
            label: "SIMON GAME",
            desc: "Infamous Simon Game. Built in ReactJS.",
            link: "/simon-game",
            bg: simonBackground,
        },
        keeper: {
            label: "KEEPER",
            desc: "Simple and elegant note keeping. Built in ReactJS.",
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
                        className="project-container"
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
        <div className="projects-main-container" id="projects">
            <h1 className="myprojects-text">My Projects...</h1>
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
        </div>
    );
}