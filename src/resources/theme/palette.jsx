import { alpha } from "@mui/material";
//
import COLOR_PALETTE from "./material_theme.json";

const COLORS = (mode, theme) => {
    const isLightMode = mode === "light";
    return {
        mode,
        primary: theme.palette.augmentColor({
            color: {
                main: isLightMode ? "#246488" : "#94cdf7",
            },
            name: "primary",
        }),
        secondary: theme.palette.augmentColor({
            color: {
                main: isLightMode ? "#4f606e" : "#b7c9d8",
            },
            name: "secondary",
        }),
        tertiary: theme.palette.augmentColor({
            color: {
                main: isLightMode ? "#63597c" : "#cec0e8",
            },
            name: "tertiary",
        }),
        background: {
            default: isLightMode ? "#ffffff" : "#0a0f12",
            paper: isLightMode ? "#f1f4f9" : "#181c20",
        },
        divider: isLightMode ? "#d7dadf" : "#313539",
        grey: {
            ...COLOR_PALETTE["palettes"]["neutral"],
        },
    };
};

export default function palette(mode, theme) {
    return {
        mode,
        ...COLORS(mode, theme),
    };
}
