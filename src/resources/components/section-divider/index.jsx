import { Box, styled } from "@mui/material";

export const SectionDivider = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    height: 10,
    borderRadius: 40,
    borderBottomWidth: 10,
    width: 100,
}));
