import { MusicNoteRounded, AndroidRounded } from "@mui/icons-material";
//
import { STATIC_URLS } from "./urls";

export const HOBBIES_SECTION_DATA = {
    title: "hobbies",
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
