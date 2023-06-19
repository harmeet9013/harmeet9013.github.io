import {
    Box,
    Dialog,
    DialogContent,
    DialogTitle,
    DialogActions,
} from "@mui/material";

export default function DownloadResume({ showPrompt, setShowPrompt }) {
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
                    backgroundColor: "rgba(20, 20, 20, 1)",
                    color: "white",
                    borderRadius: "40px",
                },
            }}
        >
            <DialogTitle
                id="title"
                sx={{ textAlign: "center", fontSize: "30px" }}
            >
                Downloading Resume...
            </DialogTitle>
            <DialogContent
                className="dialog"
                sx={{ textAlign: "left", fontSize: "16px" }}
            >
                The download button will take you to Google Drive.
                <br />
                Click on cancel to close this window.
            </DialogContent>
            <DialogActions className="dialog">
                <a className="dialog-button" id="cancel" onClick={handleClose}>
                    Cancel
                </a>
                <a
                    id="download"
                    className="dialog-button"
                    onClick={handleClose}
                    href="https://bit.ly/hs_resume_website"
                    target="_blank"
                >
                    Download
                </a>
            </DialogActions>
        </Dialog>
    );
}
