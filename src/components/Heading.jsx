import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import DownloadResume from "./DownloadResume";

export default function Heading() {
    const [showPrompt, setShowPrompt] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClickOpen = () => {
        setShowPrompt(true);
    };

    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div id="home">
            <div className="header-container">
                <h1 className="header-welcome">welcome</h1>
                <ul className="header-navbar" id="header-navbar">
                    <a href="#Home">Home</a>
                    <a href="https://harmeet9013/github.io/blogger">Blog</a>

                    <a href="#projects">Projects</a>

                    <a onClick={handleClickOpen}>Download Resume</a>
                    <DownloadResume
                        showPrompt={showPrompt}
                        setShowPrompt={setShowPrompt}
                    />

                    <a href="#contact">Contact</a>

                    <a href="#hobbies">Hobbies</a>

                    <IconButton className="menu-icon" onClick={handleMenu}>
                        <MenuIcon />
                    </IconButton>
                </ul>
            </div>
        </div>
    );
}
