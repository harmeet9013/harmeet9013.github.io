import { Stack, Typography, useMediaQuery, Divider } from "@mui/material";

export default function MoreAboutMe() {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
    return (
        <Stack
            id="aboutMe"
            direction="column"
            spacing={2}
            sx={{
                textAlign: "center",
                transition: "all 500ms ease",
                padding: isMobile ? "10%" : "5% 30% 5% 30%",
                width: "100%",
                cursor: "default",
            }}
        >
            <Typography variant={isMobile ? "h3" : "h2"}>
                <strong>About Me</strong>
            </Typography>
            <Divider variant="middle" flexItem />
            <Typography
                variant={isMobile ? "body1" : "h5"}
                sx={{ textAlign: "justify" }}
            >
                Highly motivated and dedicated web developer seeking an
                opportunity to kickstart my career in the industry. Proficient
                in utilizing the React.js framework and JSX language to create
                dynamic and user-friendly websites. Just like this one.
            </Typography>
        </Stack>
    );
}
