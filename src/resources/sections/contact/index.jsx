import {
    GitHub,
    LinkedIn,
    EmailRounded,
    FavoriteRounded,
    ContactMailRounded,
} from "@mui/icons-material";
import { Stack, Typography, Button, styled, Container } from "@mui/material";
import { SectionDivider } from "../../components";
import { useSettingsContext } from "../../settings";
import { SECTIONS_IDS } from "../../config";

export const Contact = () => {
    const { isMobile } = useSettingsContext();

    const links = {
        1: {
            label: "github",
            link: "https://github.com/harmeet9013",
            icon: <GitHub />,
        },
        2: {
            label: "linkedin",
            link: "https://linkedin.com/in/harmeet9013/",
            icon: <LinkedIn />,
        },
        3: {
            label: "email",
            link: "mailto:hssaggu1313@gmail.com",
            icon: <EmailRounded />,
        },
    };

    const renderLinks = () => {
        return Object.keys(links).map((key) => {
            const object = links[key];
            return (
                <Button
                    variant="contained"
                    key={object.label}
                    href={object.link}
                    target="_blank"
                    startIcon={object.icon}
                >
                    {object.label}
                </Button>
            );
        });
    };

    return (
        <Stack
            width={1}
            spacing={4}
            component={Container}
            id={SECTIONS_IDS["contact"]}
            sx={(theme) => ({
                transition: theme.transitions.create(),
                padding: theme.spacing(10, isMobile ? 3 : 5),
                cursor: "default",
            })}
        >
            <Typography
                variant={isMobile ? "h3" : "h2"}
                color="primary"
                fontWeight={500}
            >
                contact
            </Typography>

            <SectionDivider />

            <Stack
                direction="row"
                spacing={4}
                justifyContent="space-between"
                alignItems="space-between"
            >
                <Stack direction="row" spacing={4}>
                    <ContactMailRounded color="primary" />

                    <Typography
                        variant={isMobile ? "body1" : "h5"}
                        paddingRight={!isMobile && 20}
                    >
                        you can get in touch with me through various mediums.
                        <br />i promise i will get back to you at my earliest.
                    </Typography>
                </Stack>
            </Stack>

            <Stack
                spacing={2}
                direction="row"
                alignItems={isMobile ? "center" : "flex-end"}
                justifyContent={isMobile ? "center" : "flex-end"}
            >
                {renderLinks()}
            </Stack>

            <Typography
                variant="body1"
                alignItems="center"
                gap={1}
                display="flex"
            >
                created with love{" "}
                <FavoriteRounded fontSize="20" color="primary" /> by
                <Typography
                    variant="inline"
                    sx={(theme) => ({
                        ...theme.typography.h2,
                        textTransform: "none",
                        fontFamily: "Creattion",
                        fontWeight: 600,
                        ml: 2,
                    })}
                >
                    Harmeet Singh
                </Typography>
            </Typography>
        </Stack>
    );
};
