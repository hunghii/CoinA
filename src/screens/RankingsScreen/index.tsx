import React,{useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const RankingsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={{color: "#fff"}}>Rankings</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
})

export default RankingsScreen