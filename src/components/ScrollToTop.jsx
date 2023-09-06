import { ArrowUpwardRounded } from "@mui/icons-material";
import { Fab, Slide } from "@mui/material";

export default function ScrollToTop(props) {
    return (
        <Slide direction="up" in={props.showScrollTop}>
            <Fab
                sx={(theme) => ({
                    position: "fixed",
                    bottom: 25,
                    right: props.isMobile ? 25 : 120,
                    backgroundColor: theme.palette.background.default,
                    transition: `${theme.transitions.create()} !important`,
                    border: `2px solid ${theme.palette.tertiary.container.on}`,
                    "&:hover": {
                        backgroundColor: theme.palette.tertiary.container.main,
                    },
                })}
                onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                }}
            >
                <ArrowUpwardRounded color="tertiary" />
            </Fab>
        </Slide>
    );
}
