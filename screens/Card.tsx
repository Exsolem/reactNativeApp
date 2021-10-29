import React, {FC} from 'react'
import {Image, StyleSheet, Text, View} from "react-native";
import {IPictures} from "../store/feedsSlice";

interface CardProps {
    picture: IPictures
}

export const Card: FC<CardProps> = ({ picture:{id,author }}) => {
    return(
        <View style={styles.card}>
            <Image style={styles.image}
                   source={{ uri: `https://picsum.photos/id/${id}/500`}}
                   resizeMode={'cover'}
            />
            <Text style={styles.text}>{ author }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        justifyContent:"center",
        alignItems: 'center',
        position: 'relative',
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 15,
        width: '90%',
        overflow: 'hidden'
    },
    text: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        fontSize: 24,
        color: 'whitesmoke',
        textAlign: 'left',
        justifyContent: "center",
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingLeft: 10,
        fontFamily: 'BebasNeue'
    },
    image: {
        width: "100%",
        height: 400
    }
});
