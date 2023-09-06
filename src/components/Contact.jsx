import {
    GitHub,
    LinkedIn,
    EmailRounded,
    ContactMailRounded,
    FavoriteRounded,
} from "@mui/icons-material";
import { Stack, Typography, Button, styled, Container } from "@mui/material";

export default function Contact(props) {
    const CustomButton = styled(Button)(({ theme }) => ({
        width: props.isMobile ? "100%" : "12rem",
        textTransform: "none",
        transition: theme.transitions.create(),
        backgroundColor: theme.palette.background.high,
        color: theme.palette.secondary.main,
        fontSize: theme.typography.subtitle1.fontSize,
        fontWeight: 600,
        borderRadius: 50,
        padding: "15px 30px",
        "&:hover": {
            backgroundColor: theme.palette.primary.container.main,
        },
    }));

    const links = {
        1: {
            label: "GitHub",
            link: "https://github.com/harmeet9013",
            icon: (
                <GitHub
                    color="primary"
                    sx={{ marginY: "-4px", marginX: "4px" }}
                />
            ),
        },
        2: {
            label: "LinkedIn",
            link: "https://linkedin.com/in/harmeet9013/",
            icon: (
                <LinkedIn
                    color="primary"
                    sx={{ marginY: "-4px", marginX: "4px" }}
                />
            ),
        },
        3: {
            label: "Email",
            link: "mailto:hssaggu1313@gmail.com",
            icon: (
                <EmailRounded
                    color="primary"
                    sx={{ marginY: "-4px", marginX: "4px" }}
                />
            ),
        },
    };

    const renderLinks = () => {
        return Object.keys(links).map((key) => {
            const object = links[key];
            return (
                <CustomButton
                    key={object.label}
                    href={object.link}
                    target="_blank"
                    startIcon={object.icon}
                >
                    {object.label}
                </CustomButton>
            );
        });
    };

    return (
        <Stack
            id="contact"
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
                fontWeight={500}
            >
                Contact
            </Typography>

            <props.MyDivider />

            <Stack
                direction="row"
                spacing={4}
                justifyContent="space-between"
                alignItems="space-between"
            >
                <Stack direction="row" spacing={4}>
                    <ContactMailRounded color="primary" />

                    <Typography
                        variant={props.isMobile ? "body1" : "h5"}
                        paddingRight={!props.isMobile && 20}
                    >
                        You can get in touch with me through various mediums.
                        <br />I promise I will get back to you at my earliest!
                    </Typography>
                </Stack>
            </Stack>

            <Stack
                direction="column"
                spacing={4}
                justifyContent={props.isMobile ? "center" : "flex-end"}
                alignItems={props.isMobile ? "center" : "flex-end"}
            >
                {renderLinks()}
            </Stack>

            <Typography variant="overline">
                Created with love.{" "}
                <FavoriteRounded fontSize="20" color="primary" />
            </Typography>
        </Stack>
    );
}
