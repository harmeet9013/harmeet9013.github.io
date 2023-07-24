import { GitHub, LinkedIn, Instagram } from "@mui/icons-material";
import {
    Paper,
    Stack,
    Typography,
    Button,
    styled,
    useMediaQuery,
    Divider,
} from "@mui/material";

export default function Contact() {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

    const CustomButton = styled(Button)(({ theme }) => ({
        transition: "all 500ms ease",
        backgroundColor: theme.palette.action.selected,
        color: theme.palette.text.primary,
        fontSize: "16px",
        borderRadius: "15px",
        padding: "15px 20px",
        width: "100%",
        "&:hover": {
            backgroundColor: theme.palette.action.hover,
        },
    }));

    const links = {
        1: {
            label: "GitHub",
            link: "https://github.com/harmeet9013",
            icon: (
                <GitHub color="icon" sx={{ marginY: "-4px", marginX: "4px" }} />
            ),
        },
        2: {
            label: "LinkedIn",
            link: "https://linkedin.com/in/harmeet9013/",
            icon: (
                <LinkedIn
                    color="icon"
                    sx={{ marginY: "-4px", marginX: "4px" }}
                />
            ),
        },
        3: {
            label: "Instagram",
            link: "https://instagram.com/elipsantaro",
            icon: (
                <Instagram
                    color="icon"
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
                    endIcon={object.icon}
                    sx={{
                        transition: "all 0.1s ease",
                        "&:hover": {
                            transform: "scale(1.04)",
                        },
                    }}
                >
                    {object.label}
                </CustomButton>
            );
        });
    };

    return (
        <Paper
            elevation={1}
            id="contact"
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "50px",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                transition: "all 500ms ease",
                padding: isMobile ? "10%" : "5% 25% 1% 25%",
                width: "100%",
                cursor: "default",
            }}
        >
            <Typography
                variant={isMobile ? "h3" : "h2"}
                sx={{
                    color: (theme) => theme.palette.accent.primary,
                }}
            >
                <strong>Contact Me</strong>
            </Typography>
            <Divider variant="middle" flexItem />
            <Stack
                direction={isMobile ? "column" : "row"}
                spacing={isMobile ? 4 : 8}
            >
                <Typography variant={isMobile ? "body1" : "h5"}>
                    Clicking on any buttons from the following
                    <br />
                    will take you to their respective pages.
                </Typography>
                <Stack direction="column" spacing={4}>
                    {renderLinks()}
                </Stack>
            </Stack>
            <Typography variant="overline">
                Created with love. &#128158;
            </Typography>
        </Paper>
    );
}
