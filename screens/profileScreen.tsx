import React from "react";
import {SafeAreaView, View, Text, StyleSheet, Button, Image} from "react-native";
import {useAppDispatch, useAppSelector} from "../hooks";
import { setLogout } from '../store/loginSlice'




const Profile = () => {
    const dispatch = useAppDispatch();
    const { email } = useAppSelector( state => state.login);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <View>
                    <Image style={styles.image} source={{uri: 'https://i.ytimg.com/vi/NDaSKpI9eW0/maxresdefault.jpg'}}/>
                </View>
                <View>
                    <Text style={styles.text}>Name: Billy</Text>
                    <Text style={styles.text}>Email:{email}</Text>
                </View>

            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title={'Logout'}
                    onPress={() => dispatch(setLogout())}
                    color={'orangered'}
                />
            </View>
        </SafeAreaView>
    )
}

export default Profile;


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "space-between",
        padding: 5
    },
    card:{
        flexDirection: "row",
        backgroundColor: 'darkorange',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 15,
    },
    text:{
        fontFamily: 'BebasNeue',
        fontSize: 16,
        color: 'whitesmoke',
        textAlign: "left",
        marginLeft: 10
    },
    buttonContainer:{
        borderRadius: 15,
        overflow: "hidden",
    },
    image:{
        width: 100,
        height: 100,
        borderRadius: 15
    }
})
