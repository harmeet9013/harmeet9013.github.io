import { useContext, createContext } from "react";

export const settingsContext = createContext();

export const useSettingsContext = () => {
    const context = useContext(settingsContext);

    if (!context) {
        throw new Error(
            "useSettingsContext must be used inside the SettingsProvider"
        );
    }

    return context;
};
