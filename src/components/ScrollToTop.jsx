import { Fab, Slide } from "@mui/material";
import { ArrowUpwardRounded } from "@mui/icons-material";

export default function ScrollToTop(props) {
    return (
        <Slide direction="up" in={props.showScrollTop}>
            <Fab
                sx={(theme) => ({
                    position: "fixed",
                    bottom: 25,
                    right: 25,
                    backgroundColor: theme.palette.secondary.container,
                    transition: `${theme.transitions.create()} !important`,
                    "&:hover": {
                        backgroundColor:
                            theme.palette.containers.secondary.main,
                    },
                })}
                onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                }}
            >
                <ArrowUpwardRounded
                    sx={(theme) => ({
                        color: theme.palette.primary.main,
                    })}
                />
            </Fab>
        </Slide>
    );
}
