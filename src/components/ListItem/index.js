import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { styles } from "./style";

const ListItem = ({title, subtitle, onPress, style}) => {
    return(
        <Pressable style={[styles.container, style]} onPress={onPress}>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
                {!! subtitle ? (<Text style={styles.subtitle}>{subtitle}</Text>): null}
            </View>
            <Image> style={styles.arrow} source={require('../../assets/auth-back.png')}</Image>
        </Pressable>
    )
}
export default React.memo(ListItem)