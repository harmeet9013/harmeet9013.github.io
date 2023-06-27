import avatar from "./assets/projects-pics/avatar.jpg";
import "./css/intro.css";

export default function BackgroundIntro({ darkMode }) {
    return (
        <div className={`background-container ${darkMode ? "dark" : "light"}`}>
            <div
                className={`background-image ${darkMode ? "dark" : "light"}`}
            />
            <div className="frontpanel">
                <img
                    src={avatar}
                    alt="avatar-img"
                    className={`front-avatar ${darkMode ? "dark" : "light"}`}
                />
                <div className="container-text-button">
                    <p
                        className={`general-text ${
                            darkMode ? "dark" : "light"
                        }`}
                    >
                        HELLO
                    </p>
                    <p className={`name-text ${darkMode ? "dark" : "light"}`}>
                        I'm <strong>Harmeet Singh</strong>
                    </p>

                    <p
                        className={`general-text ${
                            darkMode ? "dark" : "light"
                        }`}
                    >
                        A web designer proficient in ReactJS, Node.js,
                        Express.js, HTML5 and CSS.
                    </p>
                    <a
                        href="#contact"
                        className={`general-button ${
                            darkMode ? "dark" : "light"
                        }`}
                    >
                        Contact Me!
                    </a>
                </div>
            </div>
        </div>
    );
}
