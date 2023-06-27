import { useState } from "react";
import BackgroundIntro from "./components/BackgroundIntro";
import Contact from "./components/Contact";
import Heading from "./components/Heading";
import Hobbies from "./components/Hobbies";
import MoreAboutMe from "./components/MoreAboutMe";
import Projects from "./components/Projects";

export default function App() {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div>
            <Heading darkMode={darkMode} setDarkMode={setDarkMode} />
            <BackgroundIntro darkMode={darkMode} setDarkMode={setDarkMode} />
            <MoreAboutMe darkMode={darkMode} setDarkMode={setDarkMode} />
            <Projects darkMode={darkMode} setDarkMode={setDarkMode} />
            <Hobbies darkMode={darkMode} setDarkMode={setDarkMode} />
            <Contact darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
    );
}
