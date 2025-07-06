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
import { useSettingsContext } from "../../settings";
import { AnimatedContent, SectionDivider } from "../../components";
import { EXPERIENCE_SECTION_DATA, SECTIONS_IDS } from "../../config";

export const Experience = () => {
    const muiTheme = useTheme();
    const { isMobile } = useSettingsContext();

    return (
        <AnimatedContent>
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
                    sx={{
                        p: 0,
                        pt: 4,
                        [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 0,
                        },
                    }}
                >
                    {EXPERIENCE_SECTION_DATA["companies"]?.map(
                        (item, index) => (
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
                                        gap={2}
                                        justifyContent="center"
                                        alignItems="flex-start"
                                    >
                                        <Stack
                                            gap={2}
                                            direction="row"
                                            alignItems="center"
                                        >
                                            <Box
                                                component="img"
                                                alt={item?.name}
                                                src={item["logo"]}
                                                sx={{
                                                    objectFit: "cover",
                                                    width: muiTheme.spacing(
                                                        isMobile ? 16 : 20
                                                    ),
                                                    height: muiTheme.spacing(
                                                        10
                                                    ),
                                                    borderRadius:
                                                        muiTheme.spacing(1),
                                                    border: `2px dashed ${muiTheme.palette.divider}`,
                                                    boxShadow:
                                                        muiTheme.shadows[3],
                                                }}
                                            />

                                            <Stack gap={0}>
                                                {item["position"] && (
                                                    <Typography
                                                        variant={
                                                            isMobile
                                                                ? "h6"
                                                                : "h5"
                                                        }
                                                        color="primary"
                                                        fontWeight={600}
                                                        letterSpacing={1}
                                                    >
                                                        {item["position"]}
                                                    </Typography>
                                                )}

                                                <Typography
                                                    variant={
                                                        isMobile
                                                            ? "body1"
                                                            : "h6"
                                                    }
                                                    // color="tertiary"
                                                    fontWeight={400}
                                                >
                                                    {item["name"]}
                                                </Typography>

                                                <Typography
                                                    variant="body1"
                                                    fontWeight={300}
                                                    color="secondary"
                                                >
                                                    {item["duration"]["from"]}{" "}
                                                    <Typography
                                                        variant="inline"
                                                        fontWeight={600}
                                                        px={1}
                                                    >
                                                        {" "}
                                                        -
                                                    </Typography>{" "}
                                                    {item["duration"]["to"]}
                                                </Typography>
                                            </Stack>
                                        </Stack>

                                        <Stack
                                            gap={1}
                                            direction="row"
                                            flexWrap="wrap"
                                        >
                                            {item["tech_stack"]?.map(
                                                (tech, tech_index) => (
                                                    <Chip
                                                        key={tech_index}
                                                        label={tech}
                                                        sx={{
                                                            ...muiTheme
                                                                .typography
                                                                .body2,
                                                            fontWeight: 500,
                                                            color: muiTheme
                                                                .palette
                                                                .tertiary
                                                                .contrastText,
                                                            background: alpha(
                                                                muiTheme.palette
                                                                    .tertiary
                                                                    .light,
                                                                0.7
                                                            ),
                                                        }}
                                                    />
                                                )
                                            )}
                                        </Stack>

                                        <Typography
                                            variant="h6"
                                            fontWeight={300}
                                        >
                                            {item["description"]}
                                        </Typography>
                                    </Stack>
                                </TimelineContent>
                            </TimelineItem>
                        )
                    )}
                </Timeline>
            </Stack>
        </AnimatedContent>
    );
};
