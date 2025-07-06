import { Typography } from "@mui/material";
import { PersonRounded } from "@mui/icons-material";

export const ABOUT_SECTION_DATA = {
    title: "about",
    icon: <PersonRounded fontSize="large" color="primary" />,
    description: (
        <>
            <b>Full Stack Developer</b> with
            <ul>
                <Typography
                    variant="inline"
                    component="li"
                    color="tertiary"
                    fontWeight={600}
                >
                    over 2 years of experience building
                </Typography>
            </ul>
            and optimizing web applications using the{" "}
            <b>MERN stack and Java Spring Boot.</b>
            <br />
            <ul>
                <li>
                    Skilled in{" "}
                    <b>
                        React, Next.js, Node.js, MongoDB, and building RESTful
                        APIs with Spring Boot.
                    </b>
                </li>
                <li>
                    Also have working knowledge of{" "}
                    <b>
                        Python, Django, C++, Laravel, and PHP Blade Templating.
                    </b>
                </li>
                <li>
                    Proven ability to deliver high-quality, scalable solutions
                    with clean architecture, strong performance, and SEO best
                    practices.
                </li>
            </ul>
        </>
    ),
};
