import React from "react";
import Button from "../../../components/Button";
import { 
    Text, 
    View, 
    Image, Pressable
} from "react-native";
import { styles } from "./style"

const Splash = () => {
    return (
        <View style={styles.Container}>
            <Image resizeMode="contain" style={styles.image} source={require('../../../assets/splash_image.png')}/>

            <View style={styles.TextContainer}>
                <Text style={styles.title}>You'll find </Text>
                <Text style={[styles.innerTitle, styles.title, styles.TextContainer]}>all you need </Text> 
                <Text style={styles.title}> here!</Text>
            </View>

            <Button title={"Sign Up"}></Button>
            <Pressable hitSlop={60}>
                <Text style={styles.footerText}>Sign In</Text>
            </Pressable>
        </View>
    )
}
export default Splash