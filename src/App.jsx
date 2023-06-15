import BackgroundIntro from "./components/BackgroundIntro";
import Contact from "./components/Contact";
import FrontPanel from "./components/Heading";
import Hobbies from "./components/Hobbies";
import MoreAboutMe from "./components/MoreAboutMe";
import Projects from "./components/Projects";

export default function App() {
    return (
        <div>
            <FrontPanel />
            <BackgroundIntro />
            <MoreAboutMe />
            <Projects />
            <Hobbies />
            <Contact />
        </div>
    );
}
