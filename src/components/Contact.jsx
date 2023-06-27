import { GitHub, LinkedIn, Instagram } from "@mui/icons-material";
import "./css/contact.css";
import { useState } from "react";

export default function Contact({ darkMode, setDarkMode }) {
    const links = {
        1: {
            label: "GitHub",
            link: "https://github.com/harmeet9013",
            icon: <GitHub sx={{ marginY: "-4px", marginX: "4px" }} />,
        },
        2: {
            label: "LinkedIn",
            link: "https://linkedin.com/in/harmeet9013/",
            icon: <LinkedIn sx={{ marginY: "-4px", marginX: "4px" }} />,
        },
        3: {
            label: "Instagram",
            link: "https://instagram.com/elipsantaro",
            icon: <Instagram sx={{ marginY: "-4px", marginX: "4px" }} />,
        },
    };

    const renderLinks = () => {
        return Object.keys(links).map((key) => {
            const object = links[key];
            return (
                <a key={object.label} href={object.link} target="_blank">
                    <button
                        className={`contact-me-button ${
                            darkMode ? "dark" : "light"
                        }`}
                    >
                        {object.label} {object.icon}
                    </button>
                </a>
            );
        });
    };

    return (
        <div
            className={`contact-all-container ${darkMode ? "dark" : "light"}`}
            id="contact"
        >
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
