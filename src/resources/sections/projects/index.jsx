import {
    Box,
    Card,
    Chip,
    Grid2,
    Stack,
    useTheme,
    Container,
    Typography,
} from "@mui/material";
//
import { SectionDivider } from "../../components";
import { useSettingsContext } from "../../settings";
import { PROJECTS_SECTION_DATA, SECTIONS_IDS } from "../../config";
import { Fragment } from "react";

export const Projects = () => {
    const muiTheme = useTheme();
    const { isMobile } = useSettingsContext();

    const renderProject = (projects) => {
        return (
            <Grid2
                container
                spacing={4}
                alignItems="stretch"
                justifyContent="center"
            >
                {projects.map((project, index) => (
                    <Grid2 size={{ xs: 12, md: 6 }} key={index} display="flex">
                        <Stack
                            p={2}
                            width={1}
                            spacing={2}
                            borderRadius={5}
                            overflow="hidden"
                            direction="column"
                            textAlign="center"
                            alignItems="center"
                            position="relative"
                            justifyContent="center"
                            onClick={() => window.open(project.link)}
                            sx={(theme) => ({
                                transition: theme.transitions.create(),
                                cursor: "pointer",
                                border: `${theme.spacing(0.5)} solid ${
                                    theme.palette.divider
                                }`,
                                "&:hover": {
                                    transform: "translateY(-0.2rem)",
                                    boxShadow: theme.shadows[2],
                                    border: `${theme.spacing(0.5)} solid ${
                                        theme.palette.primary.main
                                    }`,
                                },
                            })}
                        >
                            <Box
                                component="img"
                                src={project.background}
                                sx={{
                                    pointerEvents: "none",
                                    position: "absolute",
                                    objectFit: "cover",
                                    width: 1,
                                    height: 1,
                                    opacity: 0.1,
                                }}
                            />

                            <Typography
                                gap={1}
                                zIndex={5}
                                display="flex"
                                color="primary"
                                fontWeight={600}
                                letterSpacing={2}
                                alignItems="center"
                                variant={isMobile ? "h3" : "h3"}
                            >
                                {project.icon} {project.title}
                            </Typography>

                            <Stack
                                gap={1}
                                flexWrap="wrap"
                                direction="row"
                                justifyContent="center"
                            >
                                {project?.tech?.map((item, techIndex) => (
                                    <Chip
                                        label={item}
                                        color="primary"
                                        key={techIndex}
                                    />
                                ))}
                            </Stack>

                            <Typography variant="h6" fontWeight={400}>
                                {project.desc}
                            </Typography>
                        </Stack>
                    </Grid2>
                ))}
            </Grid2>
        );
    };

    const renderAllProjects = (project) => {
        return (
            <Card variant="outlined">
                <Stack width={1} p={4} spacing={4}>
                    <Typography
                        p={2}
                        gap={1}
                        variant="h4"
                        align="center"
                        display="flex"
                        fontWeight={600}
                        color="tertiary"
                        borderRadius={10}
                        alignItems="center"
                        justifyContent="center"
                        bgcolor="background.default"
                        border={`2px solid ${muiTheme.palette.divider}`}
                    >
                        {project["title"]}
                    </Typography>

                    {renderProject(project["data"])}
                </Stack>
            </Card>
        );
    };

    return (
        <Stack
            width={1}
            spacing={4}
            direction="column"
            component={Container}
            id={SECTIONS_IDS["projects"]}
            sx={(theme) => ({
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
                {PROJECTS_SECTION_DATA["title"]}
            </Typography>

            <SectionDivider />

            <Stack direction="row" spacing={4} component={Container}>
                {PROJECTS_SECTION_DATA["icon"]}

                <Typography
                    variant="h5"
                    textAlign="left"
                    fontWeight={400}
                    align="justify"
                    pr={!isMobile && 20}
                >
                    {PROJECTS_SECTION_DATA["description"]}
                </Typography>
            </Stack>

            {PROJECTS_SECTION_DATA["projects"]?.map((item) => (
                <Fragment key={item?.key}>{renderAllProjects(item)}</Fragment>
            ))}
        </Stack>
    );
};
