import { StyleSheet } from "react-native";
import colors from "./colors";

export const SERVICE_URLS = {
    API_URL: 'http://localhost:3000/api'
}

export const SPACING = {
    LARGE: 24,
    MEDIUM: 16,
    SMALL: 8
}

export const COMMON_STYLES = StyleSheet.create({
    subHeading: {
        color: colors.lightGrayText,
    },
    textInputLabel: {
        fontSize: 12,
        color: colors.lightGrayText,
        marginBottom: 5,
        marginTop: 8
    },
    textFieldActive: {
        borderWidth: 1,
        borderColor: colors.border,
        height: 40,
        borderRadius: 8,
        padding: 8
    },
})