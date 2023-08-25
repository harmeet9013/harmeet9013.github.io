import { PersonRounded } from "@mui/icons-material";
import { Stack, Typography, Container } from "@mui/material";

export default function MoreAboutMe(props) {
    return (
        <Stack
            id="aboutMe"
            direction="column"
            component={Container}
            spacing={4}
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
                color="primary"
                textAlign="left"
                fontWeight={500}
            >
                About
            </Typography>

            <props.MyDivider />

            <Stack direction="row" spacing={4} component={Container}>
                <PersonRounded fontSize="large" color="primary" />
                <Typography
                    variant={props.isMobile ? "body1" : "h5"}
                    textAlign="left"
                    paddingRight={!props.isMobile && 20}
                >
                    As a fresher MERN stack developer, I am enthusiastic about
                    leveraging my skills in web development to contribute to
                    innovative projects and enhance my knowledge in a dynamic
                    work environment.
                </Typography>
            </Stack>
        </Stack>
    );
}
