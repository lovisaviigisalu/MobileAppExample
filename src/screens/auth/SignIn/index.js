import React from "react";
import { Text, View, ScrollView } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import { styles } from "./style";
import CheckBox from "../../../components/Checkbox";
import { useState } from "react";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const SignIn = ({navigation}) => {

    const [checked, setChecked] = useState(false)
    const onBack = () => {
        navigation.goBack();
    }
    return (
        <SafeAreaView>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.container}>
            <AuthHeader onBackPress={onBack} title={"Sign In"}/>
            <Input label={"Email"} placeholder={"example@gmail.com"}></Input>
            <Input isPassword label={"Password"} placeholder={"*******"}></Input>

            <View style={styles.agreeRow}>
                <CheckBox checked={checked} onCheck={setChecked}></CheckBox>
                <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold} >Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
            </View>
            <Button style={styles.button} title="Sign In"/>
            <Separator text={"Or sign up with "}/>
            <GoogleLogin/>
            <Text style={styles.footerText}> Already have an account?  
                <Text style={styles.footerLink}> Sign In</Text>
            </Text>

        </View>
        </ScrollView>
        </SafeAreaView>
    )
}
export default React.memo(SignIn)