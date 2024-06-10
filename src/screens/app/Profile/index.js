import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles"
import Header from "../../../components/header";
import ListItem from "../../../components/ListItem";
import Button from "../../../components/Button";
import { NavigationContainer } from "@react-navigation/native";

const Profile = ({navigation}) => {
    const num = 10
    onLogout = () =>{
        console.log('logout is clicked!!')
    }
    const onSettingsPress = () =>{
        navigation.navigate('Setting')
    }
    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.content}>
                <Header title={"Profile"} showLogout onLogout={onLogout}/>
                <Text style={styles.name}>User name</Text>
                <Text style={styles.email}>User email</Text>
                <ListItem title="My Listing" subtitle={`Already have ${num} listing`}></ListItem>
                <ListItem title="Setting" subtitle={'Account, FAQ, Contact'} onPress={onSettingsPress}></ListItem>
            </View>
           <Button title="Add New Listing"></Button>
           </View>
        </SafeAreaView>
    )
}
export default React.memo(Profile)