import {
    Timeline,
    TimelineDot,
    TimelineItem,
    TimelineContent,
    TimelineSeparator,
    TimelineConnector,
    timelineItemClasses,
} from "@mui/lab";
import {
    Box,
    Chip,
    alpha,
    Stack,
    useTheme,
    Container,
    Typography,
} from "@mui/material";
//
import { SectionDivider } from "../../components";
import { useSettingsContext } from "../../settings";
import { EXPERIENCE_SECTION_DATA, SECTIONS_IDS } from "../../config";

export const Experience = () => {
    const muiTheme = useTheme();
    const { isMobile } = useSettingsContext();

    return (
        <Stack
            id={SECTIONS_IDS["experience"]}
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
                {EXPERIENCE_SECTION_DATA["title"]}
            </Typography>

            <SectionDivider />

            <Stack direction="row" spacing={4} component={Container}>
                {EXPERIENCE_SECTION_DATA["icon"]}
                <Typography
                    variant="h5"
                    textAlign="left"
                    fontWeight={400}
                    align="justify"
                    pr={!isMobile && 20}
                >
                    {EXPERIENCE_SECTION_DATA["description"]}
                </Typography>
            </Stack>

            <Timeline
                position="alternate"
                sx={{
                    pt: 4,
                    [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                    },
                }}
            >
                {EXPERIENCE_SECTION_DATA["companies"]?.map((item, index) => (
                    <TimelineItem key={index}>
                        <TimelineSeparator>
                            <TimelineDot color="secondary" />

                            <TimelineConnector
                                sx={{
                                    width: muiTheme.spacing(0.5),
                                    background: alpha(
                                        muiTheme.palette.primary.main,
                                        0.4
                                    ),
                                }}
                            />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Stack
                                justifyContent="center"
                                alignItems="flex-start"
                                gap={2}
                            >
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    gap={2}
                                >
                                    <Box
                                        component="img"
                                        src={item["logo"]}
                                        sx={{
                                            objectFit: "cover",
                                            width: muiTheme.spacing(
                                                isMobile ? 13 : 20
                                            ),
                                            borderRadius: muiTheme.spacing(1),
                                            border: `2px dashed ${muiTheme.palette.divider}`,
                                        }}
                                    />

                                    <Stack gap={0}>
                                        <Typography
                                            variant="h4"
                                            color="primary"
                                            fontWeight={600}
                                            letterSpacing={1}
                                        >
                                            {item["name"]}
                                        </Typography>

                                        <Typography
                                            variant="body1"
                                            fontWeight={600}
                                            color="secondary"
                                        >
                                            {item["duration"]["from"]}{" "}
                                            <Typography
                                                variant="inline"
                                                fontWeight={400}
                                            >
                                                {" "}
                                                to
                                            </Typography>{" "}
                                            {item["duration"]["to"]}
                                        </Typography>
                                    </Stack>
                                </Stack>

                                <Stack gap={1} direction="row" flexWrap="wrap">
                                    {item["tech_stack"]?.map(
                                        (tech, tech_index) => (
                                            <Chip
                                                key={tech_index}
                                                label={tech}
                                                sx={{
                                                    ...muiTheme.typography
                                                        .body2,
                                                    fontWeight: 500,
                                                }}
                                            />
                                        )
                                    )}
                                </Stack>

                                <Typography variant="h6" fontWeight={500}>
                                    {item["description"]}
                                </Typography>
                            </Stack>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </Stack>
    );
};
