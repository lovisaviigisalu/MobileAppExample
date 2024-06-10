import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles= StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16, 
        shadowColor: "#000",
        shadowOffset: {
            width:0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6, 
        backgroundColor: colors.white
    },
    title: {
        color: colors.blue,
        fontSize: 18,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 12,
        color: colors.grey,
         marginTop: 6
    },
    arrow: {
        height: 32, 
        width: 32
    }
})