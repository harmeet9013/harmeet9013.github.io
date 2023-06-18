import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "./css/hobbies.css";

export default function Hobbies() {
    const mySideProjects = {
        VancelMusic: {
            label: "Vancel Music",
            desc: "I am a huge nerd for EDM music. As much as I love listening to it, I love making music as a hobby. That's why I started VancelMusic in 2019 which showcases some of my own creations.",
            link: "https://youtube.com/vancelmusic",
        },
        Algorithms: {
            label: "Algorithms UI Designer",
            desc: "Participated in a group project that involved me creating the UI for the android app. The app is public on Play Store.",
            link: "https://bit.ly/3NyEpg7",
        },
        DetoxAssist: {
            label: "DetoxAssist UI Designer",
            desc: "Participated, again with the same, to create UI for another app which tracks your daily, 7 days and monthly along with average phone unlocks. App is under review.",
            link: "/",
        },
    };

    const renderSideProjects = () => {
        return Object.keys(mySideProjects).map((key) => {
            const project = mySideProjects[key];
            return (
                <div className="sideproject-container" key={key}>
                    <p className="sideproject-title">
                        <strong>{project.label}</strong>
                    </p>
                    <p className="sideproject-desc">{project.desc}</p>
                    <a href={project.link} target="_blank">
                        <button className="sideproject-button">
                            Visit {key}
                            <OpenInNewIcon
                                sx={{
                                    marginY: "-7px",
                                    marginX: "7px",
                                }}
                            />
                        </button>
                    </a>
                </div>
            );
        });
    };

    return (
        <div className="hobbies-panel-container" id="hobbies">
            <h1>
                My Hobbies...
                <br />
                <i>yes i have them</i>
            </h1>
            <div className="sideproject-all-container">
                {renderSideProjects()}
            </div>
        </div>
    );
}
