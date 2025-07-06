import "swiper/css";
import "swiper/css/bundle";
import "./resources/fonts/index.css";
import "./resources/styles/globals.css";

import { Divider, Stack } from "@mui/material";

import {
    About,
    Header,
    Hobbies,
    Contact,
    Projects,
    Experience,
    BackgroundIntro,
    //
    SettingsProvider,
    ThemeProvider,
    ResumeDialog,
} from "./resources";

export default function App() {
    return (
        <SettingsProvider>
            <ThemeProvider>
                <Header />

                <Stack component="main" divider={<Divider />} width={1}>
                    <BackgroundIntro />

                    <About />

                    <Experience />

                    <Projects />

                    <Hobbies />

                    <Contact />
                </Stack>

                <ResumeDialog />
            </ThemeProvider>
        </SettingsProvider>
    );
}
