import { Cancel, Download } from "@mui/icons-material";
import {
    Box,
    Dialog,
    DialogContent,
    DialogTitle,
    DialogActions,
    Button,
    styled,
    Divider,
    useMediaQuery,
} from "@mui/material";

export default function DownloadResume({ showPrompt, setShowPrompt }) {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

    const DialogButton = styled(Button)(({ theme }) => ({
        fontSize: isMobile ? "12px" : "16px",
        fontWeight: "600",
        backgroundColor: theme.palette.action.selected,
        color: theme.palette.text.primary,
        borderRadius: "15px",
        marginLeft: "5px",
        padding: isMobile ? "12px" : "8px 20px",
        transition: "all 150ms ease",
        letterSpacing: "2px",
        "&:hover": {
            backgroundColor: theme.palette.action.hover,
        },
    }));

    const handleClose = (event) => {
        if (event.target.id === "download") {
            setTimeout(() => {
                setShowPrompt(false);
            }, 1000);
        } else {
            setShowPrompt(false);
        }
    };
    return (
        <Dialog
            id="dialog"
            open={showPrompt}
            onClose={handleClose}
            PaperProps={{
                component: Box,
                sx: {
                    borderRadius: "15px",
                    padding: isMobile ? "10px" : "20px",
                },
            }}
        >
            <DialogTitle
                id="title"
                sx={{
                    textAlign: "center",
                    fontSize: isMobile ? "24px" : "30px",
                }}
            >
                Downloading Resume
            </DialogTitle>
            <Divider flexItem />
            <DialogContent
                sx={{
                    textAlign: "center",
                    fontSize: isMobile ? "14px" : "20px",
                }}
            >
                The download button will take you to Google Drive.
                <br />
                Click on cancel to close this window.
            </DialogContent>

            <DialogActions>
                <DialogButton
                    id="cancel"
                    onClick={handleClose}
                    startIcon={<Cancel />}
                >
                    Cancel
                </DialogButton>
                <DialogButton
                    id="download"
                    onClick={handleClose}
                    href="https://bit.ly/hs_resume_website"
                    target="_blank"
                    startIcon={<Download />}
                >
                    Download
                </DialogButton>
            </DialogActions>
        </Dialog>
    );
}
