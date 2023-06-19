import avatar from "./assets/projects-pics/avatar.jpg";
import "./css/intro.css";

export default function BackgroundIntro() {
    return (
        <div className="background-container">
            <div className="background-image" />
            <div className="frontpanel">
                <img src={avatar} alt="avatar-img" className="front-avatar" />
                <div className="container-text-button">
                    <p>HELLO</p>
                    <p className="name-text">
                        I'm <strong>Harmeet Singh</strong>
                    </p>

                    <p>
                        A hardworking web designer proficient in ReactJS,
                        Node.js, Express.js, HTML5 and CSS.
                    </p>
                    <a href="#contact" className="general-button">
                        Contact Me!
                    </a>
                </div>
            </div>
        </div>
    );
}
