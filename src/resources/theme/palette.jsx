import { alpha } from "@mui/material";
//
import COLOR_PALETTE from "./material_theme.json";

const COLORS = (mode) => {
    const light = {
        primary: {
            main: COLOR_PALETTE["palettes"]["primary"][40],
            light: COLOR_PALETTE["palettes"]["primary"][30],
            dark: COLOR_PALETTE["palettes"]["primary"][50],
            contrastText: COLOR_PALETTE["palettes"]["primary"][100],
        },
        secondary: {
            main: COLOR_PALETTE["palettes"]["secondary"][40],
            light: COLOR_PALETTE["palettes"]["secondary"][30],
            dark: COLOR_PALETTE["palettes"]["secondary"][50],
            contrastText: COLOR_PALETTE["palettes"]["secondary"][100],
        },
        tertiary: {
            main: COLOR_PALETTE["palettes"]["tertiary"][40],
            light: COLOR_PALETTE["palettes"]["tertiary"][30],
            dark: COLOR_PALETTE["palettes"]["tertiary"][50],
            contrastText: COLOR_PALETTE["palettes"]["tertiary"][100],
        },
    };

    const dark = {
        primary: {
            main: COLOR_PALETTE["palettes"]["primary"][80],
            light: COLOR_PALETTE["palettes"]["primary"][70],
            dark: COLOR_PALETTE["palettes"]["primary"][90],
            contrastText: COLOR_PALETTE["palettes"]["primary"][20],
        },
        secondary: {
            main: COLOR_PALETTE["palettes"]["secondary"][80],
            light: COLOR_PALETTE["palettes"]["secondary"][70],
            dark: COLOR_PALETTE["palettes"]["secondary"][90],
            contrastText: COLOR_PALETTE["palettes"]["secondary"][20],
        },
        tertiary: {
            main: COLOR_PALETTE["palettes"]["tertiary"][80],
            light: COLOR_PALETTE["palettes"]["tertiary"][70],
            dark: COLOR_PALETTE["palettes"]["tertiary"][90],
            contrastText: COLOR_PALETTE["palettes"]["tertiary"][20],
        },
    };

    return {
        mode,
        ...(mode === "light" ? light : dark),
        background: {
            default:
                COLOR_PALETTE["palettes"]["neutral"][
                    mode === "light" ? "95" : "0"
                ],
            paper: COLOR_PALETTE["palettes"]["neutral"][
                mode === "light" ? "90" : "5"
            ],
        },
        divider: alpha(COLOR_PALETTE["schemes"][mode]["outlineVariant"], 0.7),
        grey: {
            ...COLOR_PALETTE["palettes"]["neutral"],
        },
    };
};

export default function palette(mode) {
    return {
        mode,
        ...COLORS(mode),
    };
}
