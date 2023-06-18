import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "./css/contact.css";

export default function Contact() {
    const links = {
        1: { label: "GitHub", link: "https://github.com/harmeet9013" },
        2: {
            label: "LinkedIn",
            link: "https://linkedin.com/in/harmeet9013/",
        },
        3: { label: "Instagram", link: "https://instagram.com/elipsantaro" },
    };

    const renderLinks = () => {
        return Object.keys(links).map((key) => {
            const object = links[key];
            return (
                <a key={object.label} href={object.link} target="_blank">
                    <button className="contact-me-button">
                        Visit {object.label}{" "}
                        <OpenInNewIcon
                            sx={{
                                marginY: "-7px",
                                marginX: "7px",
                            }}
                        />
                    </button>
                </a>
            );
        });
    };

    return (
        <div className="contact-all-container" id="contact">
            <p className="contactme-text">Contact Me...</p>
            <div className="contact-me-container">
                <p>
                    Clicking on any buttons from the following will take you to
                    their respective pages.
                </p>
                <div className="contact-me-grid-buttons">{renderLinks()}</div>
            </div>
        </div>
    );
}
