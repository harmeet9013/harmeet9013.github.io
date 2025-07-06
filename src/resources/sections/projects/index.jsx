import {
    Box,
    Card,
    Chip,
    alpha,
    Stack,
    useTheme,
    Container,
    Typography,
} from "@mui/material";
import { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
//
import { useSettingsContext } from "../../settings";
import { PROJECTS_SECTION_DATA, SECTIONS_IDS } from "../../config";
import {
    AnimatedContent,
    SectionDivider,
    SpotlightCard,
} from "../../components";

export const Projects = () => {
    const muiTheme = useTheme();
    const { isMobile } = useSettingsContext();

    const swiperOptions = {
        slidesPerView: 1.025,
        loop: true,
        spaceBetween: 50,
        modules: [Autoplay, Pagination, Navigation],
        pagination: {
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 60,
            },
        },
    };

    const renderProject = (projects) => {
        return (
            <Box
                sx={{
                    width: 1,
                }}
            >
                <Swiper {...swiperOptions}>
                    {projects?.map((project, index) => (
                        <SwiperSlide key={index}>
                            <Stack
                                my={1}
                                mb={6}
                                width={1}
                                borderRadius={5}
                                overflow="hidden"
                                component="a"
                                href={project.link}
                                target="_blank"
                                sx={(theme) => ({
                                    transition: theme.transitions.create(),
                                    cursor: "pointer",
                                    border: `${theme.spacing(
                                        0.5
                                    )} solid ${alpha(
                                        theme.palette.divider,
                                        0
                                    )}`,

                                    height: theme.spacing(35),
                                    "&:hover": {
                                        boxShadow: theme.shadows[1],
                                    },
                                })}
                            >
                                <SpotlightCard
                                    className="custom-spotlight-card"
                                    spotlightColor={alpha(
                                        muiTheme.palette.tertiary.main,
                                        0.5
                                    )}
                                >
                                    <Stack
                                        p={2}
                                        spacing={2}
                                        height={0.9}
                                        textAlign="center"
                                        alignItems="center"
                                        position="relative"
                                        justifyContent="center"
                                    >
                                        <Box
                                            component="img"
                                            alt={project?.title}
                                            src={project?.background}
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
                                            {project?.icon} {project?.title}
                                        </Typography>

                                        <Stack
                                            gap={1}
                                            flexWrap="wrap"
                                            direction="row"
                                            justifyContent="center"
                                        >
                                            {project?.tech?.map(
                                                (item, techIndex) => (
                                                    <Chip
                                                        label={item}
                                                        color="tertiary"
                                                        key={techIndex}
                                                    />
                                                )
                                            )}
                                        </Stack>

                                        <Typography
                                            variant="h6"
                                            color="text.primary"
                                            fontWeight={400}
                                        >
                                            {project?.desc}
                                        </Typography>
                                    </Stack>
                                </SpotlightCard>
                            </Stack>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        );
    };

    const renderAllProjects = (project) => {
        return (
            <Card variant="outlined">
                <Stack width={1} p={{ xs: 1, md: 3 }} spacing={4}>
                    <Typography
                        p={2}
                        gap={1}
                        variant="h4"
                        align="center"
                        display="flex"
                        fontWeight={600}
                        color="tertiary"
                        borderRadius={5}
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
        <AnimatedContent>
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
                    <Fragment key={item?.key}>
                        {renderAllProjects(item)}
                    </Fragment>
                ))}
            </Stack>
        </AnimatedContent>
    );
};
