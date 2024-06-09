import React from "react";
import { View, Text, ScrollView, Image, Pressable, Linking } from "react-native";
import ImageCarusel from "../../../components/ImageCarusel";
import { SafeAreaView } from "react-native";
import { styles } from "./style";
import Button from "../../../components/Button";

const ProductDetails = ({ route, navigation }) => {
    const {product} = route.params || {}
    console.log('product => ', product)
    const onBackPress = () => {
        navigation.goBack()
    }

    const onContact = () =>{
        let phone = 'real phone rumber'
        Linking.openURL(`tel: ${phone}`)
        let email = 'real email'
        Linking.openURL(`tel: ${email}`)
    }

    return (
        <SafeAreaView style={styles.save}>
            <ScrollView>
                {product?.images?.length ? (
                    <ImageCarusel images={product?.images} />
                ) : (
                    <Image style={styles.image} source={{uri: product?.image}}/>
                )}
                <View style={styles.content}>
                    <Text style={styles.title}>{product?.title}</Text>
                    <Text style={styles.price}>{product?.price}</Text>
                    <Text style={styles.description}>{product?.description}</Text>
                </View>
                <Pressable onPress={onBackPress} style={styles.backContainer}>
                    <Image style={styles.backIcon} source={require('../../../assets/Back.png')}/>
                </Pressable>
            </ScrollView>
            <View style={styles.footer}>
                <Pressable  style={styles.bookmarkContainer}>
                    <Image style={styles.bookmarkIcon} source={require('../../../assets/bookmark.png')} />
                </Pressable>
                <Button onPress={onContact} title="Contact Seller"/>
            </View>
        </SafeAreaView>
    )
}
export default React.memo(ProductDetails)