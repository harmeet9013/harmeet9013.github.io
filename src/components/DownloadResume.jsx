import {
    Box,
    Dialog,
    DialogContent,
    DialogTitle,
    DialogActions,
} from "@mui/material";

export default function DownloadResume({ showPrompt, setShowPrompt }) {
    const handleClose = (event) => {
        if (event.target.id === "cancel" || event.target.id === "dialog") {
            setShowPrompt(false);
        } else {
            setTimeout(() => {
                setShowPrompt(false);
            }, 1000);
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
                className="dialog"
                sx={{ textAlign: "center", fontSize: "30px" }}
            >
                Downloading Resume...
            </DialogTitle>
            <DialogContent className="dialog">
                Click on the Download button below to start downloading resume.
                <br />
                Cancel if you do not want to download and get rid of this
                window.
            </DialogContent>
            <DialogActions className="dialog">
                <a className="dialog-button" id="cancel" onClick={handleClose}>
                    Cancel
                </a>
                <a
                    className="dialog-button"
                    onClick={handleClose}
                    href="./components/assets/resume.pdf"
                    download="HarmeetSingh_Resume.pdf"
                >
                    Download
                </a>
            </DialogActions>
        </Dialog>
    );
}
