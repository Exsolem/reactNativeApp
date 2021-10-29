import React from 'react'
import {TextInput, View, Text, StyleSheet, Button, SafeAreaView} from "react-native";

import {useAppDispatch, useAppSelector} from "../hooks";
import { setEmail, setPassword, setLogin } from '../store/loginSlice'

const Login = () => {
    const dispatch = useAppDispatch();
    const { isEmail, isPassword, password, email } = useAppSelector( state => state.login);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <TextInput
                    style={styles.input}
                    autoCompleteType={'email'}
                    keyboardType={'email-address'}
                    onChange={({ nativeEvent: { text} }) => dispatch(setEmail(text.trim()))}
                    placeholder={'@Email'}
                    value={email}
                />
                {
                    !isEmail && <Text style={styles.text}>Email is not valid</Text>
                }

                <TextInput
                    style={styles.input}
                    onChange={({ nativeEvent: { text} }) => dispatch(setPassword(text.trim()))}
                    autoCompleteType={'password'}
                    placeholder={'Password'}
                    value={password}
                />
                {
                    !isPassword && <Text style={styles.text}>Password length min 8 chars</Text>
                }
                <Button title={'Login'} onPress={() => dispatch(setLogin())}/>
            </View>
        </SafeAreaView>
    )
}

export default Login;


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: 'darkorange',
    },
    wrapper:{
        justifyContent: "space-between",
    },
    text:{
        color: '#C51D34',
        fontSize: 14,
        fontWeight: '500',
    },
    input:{
        backgroundColor: 'whitesmoke',
        width: 300,
        height: 50,
        color: 'darkorange',
        fontSize: 20,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 5,
        marginBottom: 5
    }
})
