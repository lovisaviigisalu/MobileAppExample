import React, { useState } from "react";
import { Pressable, Image, Text, View } from "react-native";
import { styles } from "./styles";
import Input from "../Input";

const Header = ({title, onBackPress, showBack, showSearch, showLogout, onSearchKeyword, keyword, onLogout}) => {
    const [showSeachInput, setShowSeachInput] = useState(false)
    const onSearch = () => {
        setShowSeachInput(search => !search)
    }
    return (
        <View>
        <View style={styles.container}>
            { showBack ? (
                <Pressable hitSlop={20} onPress={onBackPress}>
                    <Image style={styles.icon} source={require('../../assets/Back.png')} />
                </Pressable>
            ) : showSearch ? (
                <Pressable hitSlop={20} onPress={onSearch}>
                    <Image style={styles.icon} source={require('../../assets/Search.png')} />
                </Pressable>
            ) : <View style={styles.space} /> }
            <Text style={styles.title}>{title}</Text>
            { showLogout ? (
                <Pressable hitSlop={20} onPress={onLogout}>
                    <Image style={styles.icon} source={require('../../assets/logout.png')} />
                </Pressable>
            ) : <View style={styles.space} />}
        </View>
                {
                    showSeachInput ? (
                        <Input onChangeText={onSearchKeyword} value={keyword} placeholder="Type ypur keyword" />
                    ) : null
                }
        </View>
    )
}
export default React.memo(Header)