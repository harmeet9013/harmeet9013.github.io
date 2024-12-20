import {
    GitHub,
    HomeRounded,
    DownloadRounded,
    FavoriteRounded,
    ContactMailRounded,
} from "@mui/icons-material";

export const HEADER_ITEMS = {
    navigation: [
        {
            icon: <HomeRounded />,
            name: "projects",
            action: "projects",
        },
        {
            icon: <FavoriteRounded />,
            name: "hobbies",
            action: "hobbies",
        },
        {
            icon: <ContactMailRounded />,
            name: "contact",
            action: "contact",
        },
    ],
    miscellaneous: [
        {
            icon: <DownloadRounded />,
            name: "resume",
            action: "resume",
        },
        {
            icon: <GitHub />,
            name: "source code",
            action: "code",
        },
    ],
};

export const SECTIONS_IDS = {
    intro: "home",
    about: "about",
    projects: "projects",
    experience: "experience",
    hobbies: "hobbies",
    contact: "contact",
};
