import { StyleSheet} from "react-native";
import {colors, fontFamily } from "@/styles/theme"

export const s = StyleSheet.create({

    container: {
        height: 36,
        backgroundColor: colors.gray[100],
        borderColor: colors.gray[300],
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 12,
        gap: 10,
    },

    name: {
        fontSize: 14,
        color: colors.gray[500],
        fontFamily: fontFamily.regular
    },

    containerSelected: {
        backgroundColor: colors.green.base,
        borderColor: colors.green.base,
    },

    nameSelected: {
        color: colors.gray[100]
    }
})