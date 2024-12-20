import {
    Dialog,
    Button,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography,
} from "@mui/material";
import { CloseRounded, CheckRounded } from "@mui/icons-material";
//
import { STATIC_URLS } from "../../config";
import { useSettingsContext } from "../../settings";

export const ResumeDialog = () => {
    const { openResumeDialog, setOpenResumeDialog } = useSettingsContext();

    const handleSuccess = () => {
        window.open(STATIC_URLS["resume"]);
        handleClose();
    };

    const handleClose = () => {
        setOpenResumeDialog(false);
    };

    return (
        <Dialog open={openResumeDialog} onClose={handleClose}>
            <DialogTitle variant="h5" color="text.secondary" fontWeight={600}>
                Resume Download
            </DialogTitle>

            <DialogContent dividers>
                <Typography py={1} variant="body1">
                    Clicking '
                    <Typography
                        variant="inline"
                        color="primary"
                        fontWeight={600}
                    >
                        Sure
                    </Typography>
                    ' will redirect to google drive. That's where the resume is.
                </Typography>
            </DialogContent>

            <DialogActions>
                <Button
                    variant="outlined"
                    onClick={handleClose}
                    startIcon={<CloseRounded />}
                >
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    onClick={handleSuccess}
                    startIcon={<CheckRounded />}
                >
                    Sure
                </Button>
            </DialogActions>
        </Dialog>
    );
};
