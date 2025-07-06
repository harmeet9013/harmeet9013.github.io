import {
    Box,
    Fade,
    Link,
    Stack,
    Button,
    Typography,
    useTheme,
} from "@mui/material";
import {
    FolderRounded,
    OpenInNewRounded,
    ContactPageRounded,
} from "@mui/icons-material";
import { useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
//
import { Silk } from "../../components";
import { scrollToSection } from "../../utils";
import { useSettingsContext } from "../../settings";
import { STATIC_URLS, SECTIONS_IDS, COMMON_IMAGES, SKILLS } from "../../config";

export const BackgroundIntro = () => {
    const muiTheme = useTheme();
    const { isMobile, setOpenResumeDialog } = useSettingsContext();

    const [imageLoaded, setImageLoaded] = useState(false);

    const marqueeSliderOptions = {
        slidesPerView: 1.5,
        loop: true,
        speed: 5000,
        modules: [Autoplay],
        autoplay: {
            delay: 1,
            disableOnInteraction: false,
        },
        simulateTouch: false,
        freeMode: {
            enabled: true,
            sticky: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 4.5,
            },
        },
    };

    return (
        <Fade in={imageLoaded}>
            <Stack
                id={SECTIONS_IDS["intro"]}
                direction={isMobile ? "column" : "row"}
                sx={(theme) => ({
                    position: "relative",
                    zIndex: 0,
                    rowGap: "1rem",
                    height: "100svh",
                    cursor: "default",
                    columnGap: "2rem",
                    overflow: "hidden",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: theme.transitions.create(),
                    padding: isMobile ? "8svh 2rem 0 2rem" : "0 5rem 0 5rem",
                })}
            >
                <Stack
                    top={0}
                    left={0}
                    width={1}
                    height={1}
                    position="absolute"
                >
                    <Silk
                        speed={5}
                        scale={0.5}
                        color={
                            muiTheme["palette"]["secondary"]["main"] ||
                            "#7B7481"
                        }
                        noiseIntensity={1}
                        rotation={180}
                    />
                </Stack>

                <Box
                    component="img"
                    src={COMMON_IMAGES["avatar"]}
                    alt="avatar-img"
                    onLoad={() => setImageLoaded(true)}
                    sx={(theme) => ({
                        zIndex: 1,
                        maxWidth: "400px",
                        maxHeight: "400px",
                        pointerEvents: "none",
                        transition: theme.transitions.create(),
                        borderRadius: isMobile ? 20 : 30,
                        width: isMobile ? "30svh" : "50svh",
                        height: isMobile ? "30svh" : "50svh",
                        border: `${theme.spacing(1.5)} solid ${
                            theme.palette.primary.light
                        }`,
                    })}
                />

                <Stack
                    spacing={1}
                    alignItems="center"
                    textAlign="center"
                    justifyContent="center"
                    zIndex={1}
                >
                    <Typography
                        component="h2"
                        color="primary.light"
                        variant={isMobile ? "h4" : "h2"}
                    >
                        i'm <b>harmeet singh</b>
                    </Typography>

                    <Typography
                        color="white"
                        component="h1"
                        fontWeight={300}
                        variant={isMobile ? "body1" : "h6"}
                    >
                        experienced <b>Full Stack Developer</b>
                    </Typography>

                    <Link
                        underline="hover"
                        onClick={() =>
                            window.open(STATIC_URLS["things_unsaid"])
                        }
                        sx={{
                            mt: -2,
                            mb: 2,
                            cursor: "pointer",
                            color: "secondary.light",
                        }}
                    >
                        a glimpse{" "}
                        <OpenInNewRounded
                            sx={(theme) => ({
                                fontSize: theme.spacing(2.5),
                                ml: 0.5,
                                my: -0.4,
                            })}
                        />
                    </Link>

                    <Stack spacing={2} direction={isMobile ? "column" : "row"}>
                        <Button
                            color="tertiary"
                            variant="contained"
                            onClick={() => {
                                scrollToSection("contact");
                            }}
                            startIcon={<ContactPageRounded />}
                        >
                            contact
                        </Button>
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={() => {
                                setOpenResumeDialog(true);
                            }}
                            startIcon={<FolderRounded />}
                        >
                            resume
                        </Button>
                    </Stack>
                </Stack>

                <Box
                    className="skills_slider"
                    sx={{
                        left: 0,
                        bottom: 0,
                        width: "100%",
                        height: muiTheme.spacing(10),
                        position: "absolute",
                        background: muiTheme.palette.grey[100],
                        color: muiTheme.palette.grey[900],
                    }}
                >
                    <Swiper {...marqueeSliderOptions}>
                        {SKILLS?.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Stack
                                        gap={2}
                                        width={1}
                                        height={1}
                                        direction="row"
                                        alignItems="center"
                                        sx={{
                                            pointerEvents: "none",
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={item?.image}
                                            sx={{
                                                aspectRatio: "1/1",
                                                width: muiTheme.spacing(5),
                                            }}
                                        />

                                        <Typography
                                            width={1}
                                            variant="h3"
                                            textTransform="uppercase"
                                        >
                                            {item?.text}
                                        </Typography>
                                    </Stack>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </Box>
            </Stack>
        </Fade>
    );
};
