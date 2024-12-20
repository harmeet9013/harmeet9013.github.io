import {
    TaskRounded,
    NotesRounded,
    CloudRounded,
    GamesRounded,
    ArticleRounded,
    NoteAltRounded,
    AndroidRounded,
    MusicNoteRounded,
} from "@mui/icons-material";
//
import { STATIC_URLS } from "./urls";

export const PROJECTS = {
    mern: [
        {
            title: "things unsaid",
            desc: "dedicate words to someone, with or without telling who you are",
            link: STATIC_URLS["things_unsaid"],
            background: "/projects/things-unsaid.png",
            tech: ["NextJS", "ReactJS", "MongoDB"],
            icon: <NoteAltRounded fontSize="large" />,
        },
        {
            title: "blogs",
            desc: "a simple blogging website.",
            link: STATIC_URLS["blogs"],
            background: "/projects/blogs.png",
            tech: ["NextJS", "ReactJS", "ExpressJS", "MongoDB"],
            icon: <ArticleRounded fontSize="large" />,
        },
        {
            title: "taskbox",
            desc: "you got something to do? note it down here.",
            link: STATIC_URLS["taskbox"],
            background: "/projects/taskbox.png",
            tech: ["NextJS", "ReactJS", "MongoDB"],
            icon: <TaskRounded fontSize="large" />,
        },
    ],
    frontend: [
        {
            title: "keeper",
            desc: "taskbox but no database",
            link: STATIC_URLS["keeper"],
            background: "/projects/keeper.png",
            tech: ["ReactJS"],
            icon: <NotesRounded fontSize="large" />,
        },
        {
            title: "weather",
            desc: "if only you could use your phone for this. niche idea.",
            link: STATIC_URLS["weather"],
            background: "/projects/weather.png",
            tech: ["ReactJS"],
            icon: <CloudRounded fontSize="large" />,
        },
        {
            title: "simon game",
            desc: "everyone loves a game.",
            link: STATIC_URLS["simon_game"],
            background: "/projects/simon.png",
            tech: ["ReactJS"],
            icon: <GamesRounded fontSize="large" />,
        },
    ],
    hobbies: [
        {
            label: "vancel music",
            desc: "i am a huge nerd for EDM music. as much as i love listening to it, i love making music as a hobby. that's why i started vancelmusic in 2019 which showcases some of my own creations.",
            link: STATIC_URLS["vancel"],
            icon: <MusicNoteRounded color="primary" fontSize="large" />,
        },
        {
            label: "algorithms UI designer",
            desc: "participated in a group project that involved me creating the UI for the android app. the app is public on play store.",
            link: STATIC_URLS["algorithms"],
            icon: <AndroidRounded color="primary" fontSize="large" />,
        },
        {
            label: "detoxassist UI designer",
            desc: "participated, again with the same, to create UI for another app which tracks your daily, 7 days and monthly along with average phone unlocks. app is under review.",
            link: STATIC_URLS["detox_assist"],
            icon: <AndroidRounded color="primary" fontSize="large" />,
        },
    ],
};
