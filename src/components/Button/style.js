import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        marginTop:30,
        backgroundColor: colors.orange,
        paddingHorizontal: 8,
        paddingVertical: 20,
        borderRadius: 8,
        width:'100%'
    },
    title:{
        color: colors.white,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    }
})