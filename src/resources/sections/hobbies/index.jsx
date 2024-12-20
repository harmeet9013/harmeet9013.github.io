import {
    Card,
    Stack,
    Button,
    Divider,
    Container,
    Typography,
} from "@mui/material";
import { OpenInNewRounded } from "@mui/icons-material";
//
import { SectionDivider } from "../../components";
import { useSettingsContext } from "../../settings";
import { PROJECTS, SECTIONS_IDS } from "../../config";

export const Hobbies = () => {
    const { isMobile } = useSettingsContext();

    const renderSideProjects = () => {
        return PROJECTS["hobbies"]?.map((project, key) => (
            <Card
                key={key}
                variant="outlined"
                sx={(theme) => ({
                    transition: theme.transitions.create(),
                    ...(isMobile
                        ? {
                              width: 1,
                          }
                        : {
                              maxWidth: theme.spacing(80),
                          }),
                    // textAlign: isMobile ? "center" : "left",
                    // maxWidth: isMobile ? "100%" : "45rem",
                    // minWidth: isMobile ? "100%" : "90%",
                })}
            >
                <Stack direction="column" p={4} py={5} spacing={2}>
                    <Typography
                        gap={1}
                        variant="h4"
                        display="flex"
                        color="tertiary"
                        fontWeight={500}
                        alignItems="center"
                    >
                        {project.icon}
                        {project.label}
                    </Typography>

                    <Divider variant="middle" flexItem />

                    <Typography
                        variant={isMobile ? "body1" : "h6"}
                        textAlign="justify"
                        color="secondary"
                    >
                        {project.desc}
                    </Typography>

                    <Button
                        variant="outlined"
                        href={project.link}
                        target="_blank"
                        endIcon={<OpenInNewRounded />}
                    >
                        {project.label}
                    </Button>
                </Stack>
            </Card>
        ));
    };

    return (
        <Stack
            spacing={4}
            component={Container}
            alignItems="flex-start"
            id={SECTIONS_IDS["hobbies"]}
            justifyContent="space-between"
            direction={isMobile ? "column" : "row"}
            width={1}
            sx={(theme) => ({
                transition: theme.transitions.create(),
                padding: theme.spacing(10, isMobile ? 3 : 5),
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
                hobbies
                <SectionDivider mt={4} />
            </Typography>

            <Stack direction="column" spacing={isMobile ? 4 : 8}>
                {renderSideProjects()}
            </Stack>
        </Stack>
    );
};
