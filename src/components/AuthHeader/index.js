import React from "react";
import { Pressable, Image, Text, View} from "react-native";
import { styles } from "./style";

const AuthHeader = ({title, onBackPress}) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={onBackPress} style={styles.container}>
                <Image style={styles.image} source={require('../../assets/auth-back.png')}/>   
            </Pressable>     
            <Text style={[styles.title,styles.container]}>{title}</Text>
        </View>
    )
}

export default AuthHeader