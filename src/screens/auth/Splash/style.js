import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    Container: {
        padding: 24,
        flexDirection: "column",
        justifyContent:"center",
        alignItems: "center",
        height: "100%"
    },
    image: {
        width: '100%',
        height: 200
    },
    titleContainer: { 
        marginVertical: 54
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign:"center"
    },
    innerTitle: {
        color: colors.orange,
        textDecorationLine: "underline",
    },
    TextContainer: {
        textAlign: "center"
    },
    footerText:{
        fontSize:16,
        color: colors.blue,
        alignSelf:"center",
        fontWeight:  "bold",
        marginTop: 30
    }
})