import {
    Box,
    Dialog,
    DialogContent,
    DialogTitle,
    DialogActions,
} from "@mui/material";

export default function DownloadResume({
    showPrompt,
    setShowPrompt,
    darkMode,
    setDarkMode,
}) {
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
                    backgroundColor: `${
                        darkMode ? "rgba(20, 20, 20, 1)" : "#f8f6f4"
                    }`,
                    color: "white",
                    borderRadius: "40px",
                },
            }}
        >
            <DialogTitle
                id="title"
                sx={{
                    textAlign: "center",
                    fontSize: "30px",
                    color: `${darkMode ? "white" : "black"}`,
                }}
            >
                Downloading Resume...
            </DialogTitle>
            <DialogContent
                className={`dialog ${darkMode ? "dark" : "light"}`}
                sx={{ textAlign: "left", fontSize: "16px" }}
            >
                The download button will take you to Google Drive.
                <br />
                Click on cancel to close this window.
            </DialogContent>
            <DialogActions className={`dialog ${darkMode ? "dark" : "light"}`}>
                <a
                    className={`dialog-button ${darkMode ? "dark" : "light"}`}
                    id="cancel"
                    onClick={handleClose}
                >
                    Cancel
                </a>
                <a
                    id="download"
                    className={`dialog-button ${darkMode ? "dark" : "light"}`}
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
