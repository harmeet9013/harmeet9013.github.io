import { BadgeRounded } from "@mui/icons-material";
//
import { EXPERIENCE_IMAGES } from "./images";

export const EXPERIENCE_SECTION_DATA = {
    title: "experience",
    icon: <BadgeRounded fontSize="large" color="primary" />,
    description: (
        <>companies i have worked with so far in my professional experience.</>
    ),
    companies: [
        {
            name: "Eleva8e Digital",
            logo: EXPERIENCE_IMAGES["eleva8e"],
            duration: {
                from: "sept 2023",
                to: "jan 2025",
            },
            tech_stack: [
                "NextJS",
                "ReactJS",
                "ExpressJS",
                "MongoDB",
                "JQuery",
                "AngularJS",
                "VueJS",
                "Laravel",
                "WordPress",
            ],
            description: (
                <>
                    successfully contributed and delivered various cms and crm
                    projects along with an ecommerce platform.
                    <br />
                    in addition, also managed and collaborated with other team
                    members across various web frameworks and libraries.
                </>
            ),
        },
    ],
};
