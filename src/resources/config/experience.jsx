import { BadgeRounded } from "@mui/icons-material";
//
import { EXPERIENCE_IMAGES, SKILLS_IMAGES } from "./images";

export const EXPERIENCE_SECTION_DATA = {
    title: "experience",
    icon: <BadgeRounded fontSize="large" color="primary" />,
    description: (
        <>company(s) i have worked with so far in my professional experience.</>
    ),
    companies: [
        {
            name: "Eleva8e Digital",
            position: "Full Stack Developer",
            logo: EXPERIENCE_IMAGES["eleva8e"],
            duration: {
                from: "sept 2023",
                to: "july 2025",
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
                <ul>
                    <li>
                        Developed and maintained <b>full-stack applications</b>{" "}
                        including CRMs, e-commerce platforms,
                        <br />
                        and SEO tools using{" "}
                        <b>React.js, Next.js, Node.js, and MongoDB.</b>
                    </li>
                    <li>
                        Optimized web performance and{" "}
                        <b>SEO using server-side rendering (SSR)</b>
                        <br />
                        and <b>dynamic meta generation in Next.js.</b>
                    </li>
                    <li>
                        Built internal JS libraries to{" "}
                        <b>accelerate development</b> across frontend and
                        backend.
                    </li>
                    <li>
                        Integrated <b>REST and GraphQL APIs</b>, Strapi, and
                        Contentful for CMS-driven content
                    </li>
                    <li>
                        Handled deployment tasks via <b>Git, SSH, PM2,</b> and
                        implemented cron jobs.
                    </li>
                    <li>
                        Developed browser-based editors, utilities, and
                        interactive frontend tools.
                    </li>
                </ul>
            ),
        },
        {
            name: "Freelance",
            position: "Full Stack Developer",
            logo: EXPERIENCE_IMAGES["freelance"],
            duration: {
                from: "march 2022",
                to: "august 2023",
            },
            tech_stack: ["NextJS", "ReactJS", "ExpressJS", "MongoDB", "JQuery"],
            description: (
                <ul>
                    <li>
                        Delivered custom full-stack solutions such as portfolio
                        sites, dashboards, and admin panels.
                    </li>
                    <li>
                        Worked with clients independently from design to
                        deployment.
                    </li>
                    <li>
                        Tech stack included MERN, Tailwind CSS, JWT, and
                        reusable component libraries.
                    </li>
                </ul>
            ),
        },
    ],
};

export const SKILLS = [
    {
        text: "NextJS",
        image: SKILLS_IMAGES["nextjs"],
    },
    {
        text: "ReactJS",
        image: SKILLS_IMAGES["react"],
    },
    {
        text: "ExpressJS",
        image: SKILLS_IMAGES["express"],
    },
    {
        text: "Spring Boot",
        image: SKILLS_IMAGES["spring_boot"],
    },
    {
        text: "Laravel",
        image: SKILLS_IMAGES["laravel"],
    },
    {
        text: "Python",
        image: SKILLS_IMAGES["python"],
    },
    {
        text: "C++",
        image: SKILLS_IMAGES["cpp"],
    },
    {
        text: "MongoDB",
        image: SKILLS_IMAGES["mongo"],
    },
    {
        text: "MySQL",
        image: SKILLS_IMAGES["sql"],
    },
];
