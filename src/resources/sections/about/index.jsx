import { Stack, Typography, Container } from "@mui/material";
//
import { SectionDivider } from "../../components";
import { useSettingsContext } from "../../settings";
import { ABOUT_SECTION_DATA, SECTIONS_IDS } from "../../config";

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
                {ABOUT_SECTION_DATA["title"]}
            </Typography>

            <SectionDivider />

            <Stack direction="row" spacing={4} component={Container}>
                {ABOUT_SECTION_DATA["icon"]}
                <Typography
                    variant="h5"
                    textAlign="left"
                    fontWeight={400}
                    align="justify"
                    pr={!isMobile && 20}
                >
                    {ABOUT_SECTION_DATA["description"]}
                </Typography>
            </Stack>
        </Stack>
    );
};
