import { StyleSheet } from "react-native";

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
        color: "#FCA34D",
        textDecorationLine: "underline",
    },
    TextContainer: {
        textAlign: "center"
    },
    footerText:{
        fontSize:16,
        color: "#4F63AC",
        alignSelf:"center",
        fontWeight:  "bold",
        marginTop: 30
    }
})