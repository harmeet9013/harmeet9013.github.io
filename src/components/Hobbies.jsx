import { OpenInNew, MusicNote, Android } from "@mui/icons-material";
import {
    Button,
    Divider,
    Paper,
    Stack,
    Typography,
    styled,
    useMediaQuery,
} from "@mui/material";

export default function Hobbies() {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

    const CustomButton = styled(Button)(({ theme }) => ({
        transition: "all 500ms ease",
        backgroundColor: theme.palette.action.selected,
        color: theme.palette.accent.secondary,
        fontSize: "16px",
        borderRadius: "15px",
        padding: "15px 20px",
        width: "100%",
        "&:hover": {
            backgroundColor: theme.palette.action.hover,
        },
    }));

    const mySideProjects = {
        VancelMusic: {
            label: "Vancel Music",
            desc: "I am a huge nerd for EDM music. As much as I love listening to it, I love making music as a hobby. That's why I started VancelMusic in 2019 which showcases some of my own creations.",
            link: "https://youtube.com/vancelmusic",
            icon: <MusicNote />,
        },
        Algorithms: {
            label: "Algorithms UI Designer",
            desc: "Participated in a group project that involved me creating the UI for the android app. The app is public on Play Store.",
            link: "https://bit.ly/3NyEpg7",
            icon: <Android />,
        },
        DetoxAssist: {
            label: "DetoxAssist UI Designer",
            desc: "Participated, again with the same, to create UI for another app which tracks your daily, 7 days and monthly along with average phone unlocks. App is under review.",
            link: "/",
            icon: <Android />,
        },
    };

    const renderSideProjects = () => {
        return Object.keys(mySideProjects).map((key) => {
            const project = mySideProjects[key];
            return (
                <Paper
                    elevation={4}
                    key={key}
                    sx={{
                        transition: "all 500ms ease",
                        borderRadius: "15px",
                        padding: isMobile ? "20px" : "50px",
                        textAlign: isMobile ? "center" : "left",
                        width: isMobile ? "100%" : "80vh",
                    }}
                >
                    <Stack direction="column" spacing={2}>
                        <Typography
                            variant={isMobile ? "h5" : "h3"}
                            sx={{
                                color: (theme) =>
                                    theme.palette.accent.secondary,
                            }}
                        >
                            <strong>{project.label}</strong>
                        </Typography>
                        <Divider variant="middle" flexItem />
                        <Typography
                            variant={isMobile ? "body1" : "h6"}
                            sx={{ textAlign: "justify" }}
                        >
                            {project.desc}
                        </Typography>

                        <CustomButton
                            href={project.link}
                            target="_blank"
                            startIcon={project.icon}
                            endIcon={<OpenInNew />}
                            sx={{
                                width: isMobile ? "100%" : "40%",
                                transition: "all 0.1s ease",
                                "&:hover": {
                                    transform: "scale(1.04)",
                                },
                            }}
                        >
                            {key}
                        </CustomButton>
                    </Stack>
                </Paper>
            );
        });
    };

    return (
        <Stack
            direction={isMobile ? "column" : "row"}
            spacing={isMobile ? 4 : 8}
            id="hobbies"
            sx={{
                textAlign: "center",
                transition: "all 500ms ease",
                padding: isMobile ? "10%" : "5% 20% 5% 20%",
                width: "100%",
                cursor: "default",
                color: (theme) => theme.palette.accent.primary,
            }}
        >
            <Typography
                variant={isMobile ? "h3" : "h2"}
                sx={{ paddingTop: isMobile ? "0px" : "40px" }}
            >
                <strong>My Hobbies</strong>
            </Typography>
            <Stack direction="column" spacing={isMobile ? 4 : 8}>
                {renderSideProjects()}
            </Stack>
        </Stack>
    );
}
