import { PersonRounded } from "@mui/icons-material";
import { Stack, Typography, Container } from "@mui/material";
//
import { SECTIONS_IDS } from "../../config";
import { SectionDivider } from "../../components";
import { useSettingsContext } from "../../settings";

export const About = () => {
    const { isMobile } = useSettingsContext();

    return (
        <Stack
            id={SECTIONS_IDS["about"]}
            direction="column"
            component={Container}
            spacing={4}
            sx={(theme) => ({
                transition: theme.transitions.create(),
                padding: theme.spacing(10, isMobile ? 3 : 5),
                width: 1,
                cursor: "default",
            })}
        >
            <Typography
                variant="h2"
                color="primary"
                textAlign="left"
                letterSpacing={2}
                fontWeight={600}
            >
                about
            </Typography>

            <SectionDivider />

            <Stack direction="row" spacing={4} component={Container}>
                <PersonRounded fontSize="large" color="primary" />
                <Typography
                    variant="h5"
                    textAlign="left"
                    fontWeight={400}
                    align="justify"
                    pr={!isMobile && 20}
                >
                    as an{" "}
                    <ul>
                        <Typography
                            variant="inline"
                            component="li"
                            color="tertiary"
                            fontWeight={600}
                        >
                            intermediate MERN stack developer with over an year
                            of experience
                        </Typography>
                    </ul>
                    across multiple frameworks and libraries, i am enthusiastic
                    about leveraging my skills in web development to contribute
                    to innovative projects and enhance my knowledge in a dynamic
                    work environment.
                </Typography>
            </Stack>
        </Stack>
    );
};
