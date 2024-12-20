import { Fab, Slide } from "@mui/material";
import { ArrowUpwardRounded } from "@mui/icons-material";
//
import { useSettingsContext } from "../../settings";

export const ScrollToTop = ({ showScrollTop }) => {
    const { isMobile } = useSettingsContext();

    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Slide direction="up" in={showScrollTop}>
            <Fab
                sx={(theme) => ({
                    position: "fixed",
                    bottom: 25,
                    right: isMobile ? 25 : 120,
                    backgroundColor: theme.palette.background.default,
                    transition: `${theme.transitions.create()} !important`,
                    border: `2px solid ${theme.palette.divider}`,
                    // "&:hover": {
                    //     backgroundColor: theme.palette.tertiary.container.main,
                    // },
                })}
                onClick={handleScrollTop}
            >
                <ArrowUpwardRounded color="tertiary" />
            </Fab>
        </Slide>
    );
};
