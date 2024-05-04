import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles= StyleSheet.create({
    container: {
        padding:24,
        flexGrow: 1,
    },
    agreeRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    agreeText: {
        color: colors.blue,
        marginHorizontal:14
    },
    agreeTextBold: {
        color: colors.blue,
        fontWeight: 'bold',
        marginHorizontal:14
    }, 
    button: {
        marginVertical: 20
    },
    scrollViewContainer: {
        flexGrow: 1,
        paddingBottom: 24, // Additional padding to prevent cut-off of content by the bottom of the screen
    },
    footerText: {
        color: colors.blue,
        marginBottom: 56,
        textAlign: 'center'
    },
    footerLink: {
        fontWeight: 'bold'
    }
})