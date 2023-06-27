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
            <BackgroundIntro darkMode={darkMode} />
            <MoreAboutMe darkMode={darkMode} />
            <Projects darkMode={darkMode} />
            <Hobbies darkMode={darkMode} />
            <Contact darkMode={darkMode} />
        </div>
    );
}
