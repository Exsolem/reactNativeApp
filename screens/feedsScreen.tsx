import React, {useEffect, useCallback} from 'react';
import { ScrollView, SafeAreaView, StyleSheet, RefreshControl, Image } from "react-native";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getAsync, setRefresh, setFetching, resetPictures } from '../store/feedsSlice';
import { Card } from './Card'


function Feeds (){
    const dispatch = useAppDispatch();
    const { pictures, isRefresh, page, fetching } = useAppSelector( state => state.feeds);

    const onRefresh = useCallback((): void => {
        dispatch(setRefresh(true));
        dispatch(resetPictures());
        dispatch(getAsync(page))
    }, []);

    useEffect(()=>{
        if(fetching){
            dispatch(getAsync(page))
        }
    },[fetching])

    useEffect((): void => {
        dispatch(getAsync(page))
    }, []);

    const scrollFetch = (offset: number): void =>{
        if( offset < 200){
            dispatch(setFetching(true))
        }
        else dispatch(setFetching(false))
    }
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.contentContainer}

                onScroll={({
                  nativeEvent: {
                    contentOffset ,
                    contentSize,
                    layoutMeasurement
                }}) => scrollFetch(contentSize.height - contentOffset.y - layoutMeasurement.height)}

                refreshControl={
                    <RefreshControl
                        refreshing={isRefresh}
                        onRefresh={onRefresh}
                    />
                    }
            >
                {
                   pictures.length === 0 &&
                   <Image style={styles.image}
                          source={{ uri:'https://filmdar.com/tms-loading.gif'}}

                   />
                }
                {
                    pictures.map( picture => {
                        return (
                            <Card key={picture.id} picture={ picture }/>
                        )
                    })
                }
            </ScrollView>
        </SafeAreaView>

)
}

export default Feeds;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: "center",
    },
    scrollView: {
        backgroundColor: 'whitesmoke',
    },
    image:{
        width: 250,
        height: 250,
        marginTop: 150
    },
    contentContainer:{
        justifyContent:'center',
        alignItems:'center'
    }
});
