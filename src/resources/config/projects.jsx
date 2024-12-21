import {
    WebRounded,
    HomeRounded,
    TaskRounded,
    NotesRounded,
    CloudRounded,
    GamesRounded,
    NoteAltRounded,
    AndroidRounded,
    ViewQuiltRounded,
    MusicNoteRounded,
    HistoryEduRounded,
} from "@mui/icons-material";
//
import { STATIC_URLS } from "./urls";
import { PROJECT_IMAGES } from "./images";

const PROJECTS = {
    mern: [
        {
            title: "things unsaid",
            desc: "dedicate words to someone, with or without telling who you are",
            link: STATIC_URLS["things_unsaid"],
            background: PROJECT_IMAGES["things_unsaid"],
            tech: ["NextJS", "ReactJS", "MongoDB"],
            icon: <NoteAltRounded fontSize="large" />,
        },
        {
            title: "blogs",
            desc: "a simple blogging website.",
            link: STATIC_URLS["blogs"],
            background: PROJECT_IMAGES["blogs"],
            tech: ["NextJS", "ReactJS", "ExpressJS", "MongoDB"],
            icon: <HistoryEduRounded fontSize="large" />,
        },
        {
            title: "taskbox",
            desc: "you got something to do? note it down here.",
            link: STATIC_URLS["taskbox"],
            background: PROJECT_IMAGES["taskbox"],
            tech: ["NextJS", "ReactJS", "MongoDB"],
            icon: <TaskRounded fontSize="large" />,
        },
    ],
    frontend: [
        {
            title: "keeper",
            desc: "taskbox but no database",
            link: STATIC_URLS["keeper"],
            background: PROJECT_IMAGES["keeper"],
            tech: ["ReactJS"],
            icon: <NotesRounded fontSize="large" />,
        },
        {
            title: "weather",
            desc: "if only you could use your phone for this. niche idea.",
            link: STATIC_URLS["weather"],
            background: PROJECT_IMAGES["weather"],
            tech: ["ReactJS"],
            icon: <CloudRounded fontSize="large" />,
        },
        {
            title: "simon game",
            desc: "everyone loves a game.",
            link: STATIC_URLS["simon_game"],
            background: PROJECT_IMAGES["simon"],
            tech: ["ReactJS"],
            icon: <GamesRounded fontSize="large" />,
        },
    ],
};

export const PROJECTS_SECTION_DATA = {
    title: "projects",
    icon: <HomeRounded fontSize="large" color="primary" />,
    description: (
        <>
            projects that i have created over the course of my professional
            experience. <br />
            projects are hosted on vercel and github pages and their source code
            is also publicly available.
        </>
    ),
    projects: [
        {
            key: "mern",
            title: (
                <>
                    <ViewQuiltRounded fontSize="large" /> MERN Stack
                </>
            ),
            data: PROJECTS["mern"],
        },
        {
            key: "frontend",
            title: (
                <>
                    <WebRounded fontSize="large" /> Frontend
                </>
            ),
            data: PROJECTS["frontend"],
        },
    ],
};
