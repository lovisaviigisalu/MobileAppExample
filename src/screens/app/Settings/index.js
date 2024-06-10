import React from "react";
import { View, Text, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import header from "../../../components/header";
import ListItem from "../../../components/ListItem";
import { styles } from "./style";
import Header from "../../../components/header";

const Settings = () => {

    const onItemPress = () => {
        Linking.openURL('https://google.com')
    }
    return(
        <SafeAreaView style={{flex:1}}>
            <Header title="Setting"/>
            <View style={styles.container}>
                <Text style={styles.sectionTitle}>Help Center</Text>
                <ListItem onPress={onItemPress} style={styles.item} title="FAQ"></ListItem>
                <ListItem onPress={onItemPress} style={styles.item} title="Contact Us"></ListItem>
                <ListItem onPress={onItemPress} style={styles.item} title="Provacy & Terms"></ListItem>
            </View>
        </SafeAreaView>
    )
}
export default React.memo(Settings)