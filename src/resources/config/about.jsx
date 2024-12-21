import { Typography } from "@mui/material";
import { PersonRounded } from "@mui/icons-material";

export const ABOUT_SECTION_DATA = {
    title: "about",
    icon: <PersonRounded fontSize="large" color="primary" />,
    description: (
        <>
            as an{" "}
            <ul>
                <Typography
                    variant="inline"
                    component="li"
                    color="tertiary"
                    fontWeight={600}
                >
                    intermediate MERN stack developer with over an year of
                    experience
                </Typography>
            </ul>
            across multiple frameworks and libraries, i am enthusiastic about
            leveraging my skills in web development to contribute to innovative
            projects and enhance my knowledge in a dynamic work environment.
        </>
    ),
};
