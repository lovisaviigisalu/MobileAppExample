import React from "react";
import { Pressable, Image, Text, View} from "react-native";
import { styles } from "./style";
import { SafeAreaProvider } from 'react-native-safe-area-context';


const AuthHeader = ({title, onBackPress}) => {
    return (

        <View style={styles.container}>
            <Pressable onPress={onBackPress} hitSlop={20} style={styles.container}>
                <Image style={styles.image} source={require('../../assets/auth-back.png')}/>   
            </Pressable>     
            <Text style={[styles.title,styles.container]}>{title}</Text>
        </View>

    )
}

export default React.memo(AuthHeader)