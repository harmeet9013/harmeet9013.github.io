import { alpha } from "@mui/material";
//
import COLOR_PALETTE from "./material_theme.json";

const COLORS = (mode, theme) => {
    const isLightMode = mode === "light";
    return {
        mode,
        primary: theme.palette.augmentColor({
            color: {
                main: isLightMode ? "#375018" : "#adcd86",
            },
            name: "primary",
        }),
        secondary: theme.palette.augmentColor({
            color: {
                main: isLightMode ? "#434c35" : "#bcc7a9",
            },
            name: "secondary",
        }),
        tertiary: theme.palette.augmentColor({
            color: {
                main: isLightMode ? "#21504e" : "#9cccc7",
            },
            name: "tertiary",
        }),
        background: {
            default: isLightMode ? "#f9faef" : "#12140e",
            paper: isLightMode ? "#f1f2e6" : "#1e201a",
        },
        divider: isLightMode ? "#c6c7bd" : "#454840",
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
