import {
    OpenInNewRounded,
    MusicNoteRounded,
    CelebrationRounded,
    AndroidRounded,
} from "@mui/icons-material";
import {
    Button,
    Container,
    Divider,
    Stack,
    Typography,
    styled,
} from "@mui/material";

export default function Hobbies(props) {
    const CustomButton = styled(Button)(({ theme }) => ({
        textTransform: "none",
        transition: theme.transitions.create(),
        backgroundColor: theme.palette.containers.tertiary.main,
        color: theme.palette.primary.main,
        fontSize: "16px",
        fontWeight: 600,
        borderRadius: 50,
        padding: "15px 30px",
        boxShadow: theme.shadows[2],
        "&:hover": {
            backgroundColor: theme.palette.containers.tertiary.main,
            boxShadow: theme.shadows[4],
            transform: "translateY(-0.2rem)",
        },
    }));

    const mySideProjects = {
        VancelMusic: {
            label: "Vancel Music",
            desc: "I am a huge nerd for EDM music. As much as I love listening to it, I love making music as a hobby. That's why I started VancelMusic in 2019 which showcases some of my own creations.",
            link: "https://youtube.com/vancelmusic",
            icon: <MusicNoteRounded color="primary" fontSize="large" />,
        },
        Algorithms: {
            label: "Algorithms UI Designer",
            desc: "Participated in a group project that involved me creating the UI for the android app. The app is public on Play Store.",
            link: "https://bit.ly/3NyEpg7",
            icon: <AndroidRounded color="primary" fontSize="large" />,
        },
        DetoxAssist: {
            label: "DetoxAssist UI Designer",
            desc: "Participated, again with the same, to create UI for another app which tracks your daily, 7 days and monthly along with average phone unlocks. App is under review.",
            link: "/",
            icon: <AndroidRounded color="primary" fontSize="large" />,
        },
    };

    const renderSideProjects = () => {
        return Object.keys(mySideProjects).map((key) => {
            const project = mySideProjects[key];
            return (
                <Stack
                    key={key}
                    sx={(theme) => ({
                        backgroundColor: theme.palette.surface.variant,
                        transition: theme.transitions.create(),
                        borderRadius: props.isMobile ? 15 : 20,
                        padding: props.isMobile ? "40px 20px" : "50px",
                        textAlign: props.isMobile ? "center" : "left",
                        width: props.isMobile ? "100%" : "45rem",
                    })}
                >
                    <Stack direction="column" spacing={2}>
                        <Typography
                            variant="h4"
                            color="secondary"
                            fontWeight={500}
                        >
                            {project.label}
                        </Typography>
                        <Divider variant="middle" flexItem />
                        <Stack direction="row" spacing={2}>
                            {project.icon}
                            <Typography
                                variant={props.isMobile ? "body1" : "h6"}
                                textAlign="justify"
                            >
                                {project.desc}
                            </Typography>
                        </Stack>

                        <CustomButton
                            href={project.link}
                            target="_blank"
                            endIcon={<OpenInNewRounded />}
                        >
                            {key}
                        </CustomButton>
                    </Stack>
                </Stack>
            );
        });
    };

    return (
        <Stack
            direction={props.isMobile ? "column" : "row"}
            id="hobbies"
            component={Container}
            spacing={6}
            justifyContent="space-between"
            alignItems="flex-start"
            sx={(theme) => ({
                transition: theme.transitions.create(),
                padding: props.isMobile
                    ? "5rem 1rem 5rem 1rem "
                    : "5rem 0 5rem 0",
                width: "100%",
                cursor: "default",
            })}
        >
            <Typography
                variant={props.isMobile ? "h3" : "h2"}
                paddingTop={props.isMobile ? "0px" : "40px"}
                fontWeight={500}
                color="primary"
            >
                <CelebrationRounded fontSize="large" /> Hobbies
                <props.MyDivider marginTop={4} />
            </Typography>

            <Stack direction="column" spacing={props.isMobile ? 4 : 8}>
                {renderSideProjects()}
            </Stack>
        </Stack>
    );
}
