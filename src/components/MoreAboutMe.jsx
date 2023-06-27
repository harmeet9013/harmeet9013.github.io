import "./css/aboutme.css";

export default function MoreAboutMe({ darkMode }) {
    return (
        <div
            id="aboutMe"
            className={`about-me-container ${darkMode ? "dark" : "light"}`}
        >
            <div className="about-me-text">
                <h1>About Me</h1>
                <p>
                    Highly motivated and dedicated web developer seeking an
                    opportunity to kickstart my career in the industry.
                    Proficient in utilizing the React.js framework and JSX
                    language to create dynamic and user-friendly websites.
                    <br />
                    Just like this one.
                </p>
            </div>
        </div>
    );
}
