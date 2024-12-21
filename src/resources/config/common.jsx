import {
    GitHub,
    LinkedIn,
    HomeRounded,
    EmailRounded,
    BadgeRounded,
    ContactMailRounded,
    DescriptionRounded,
} from "@mui/icons-material";

export const HEADER_ITEMS = {
    navigation: [
        {
            icon: <BadgeRounded />,
            name: "experience",
            action: "experience",
        },
        {
            icon: <HomeRounded />,
            name: "projects",
            action: "projects",
        },
        {
            icon: <ContactMailRounded />,
            name: "contact",
            action: "contact",
        },
    ],
    miscellaneous: [
        {
            icon: <DescriptionRounded />,
            name: "resume",
            action: "resume",
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

export const CONTACT_INFO = {
    links: [
        {
            label: "github",
            link: "https://github.com/harmeet9013",
            icon: <GitHub />,
        },
        {
            label: "linkedin",
            link: "https://linkedin.com/in/harmeet9013/",
            icon: <LinkedIn />,
        },
        {
            label: "email",
            link: "mailto:hssaggu1313@gmail.com",
            icon: <EmailRounded />,
        },
    ],
};
