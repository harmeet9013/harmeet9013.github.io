import avatar from "./assets/avatar.jpg";

export default function BackgroundIntro() {
    return (
        <div className="background-container">
            <div className="background-image" />
            <div className="frontpanel">
                <img src={avatar} alt="avatar-img" className="front-avatar" />
                <div>
                    <div>
                        <p>HELLO</p>
                        <p className="name-text">
                            I'm <strong>Harmeet Singh</strong>
                        </p>
                    </div>
                    <p>
                        A hardworking web designer proficient in ReactJS,
                        Node.js, Express.js, HTML5 and CSS.
                    </p>
                </div>
            </div>
        </div>
    );
}
