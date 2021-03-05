import React,{useState} from 'react';
import {Text, View, StyleSheet,Image} from 'react-native';

const image = require('../../../assets/images/Saly-1.png');
const  HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image}/>
            <Text style={styles.title}>Welcome to CoinA </Text>
            <Text style={styles.subtitle}>Invest your virtual $100.000 and compete with others</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        alignItems:'center',
        backgroundColor:'white'
    },
    image: {
        height: 200,
        width: 300,
        aspectRatio:1,
    },
    title: {
        fontSize:20,
        fontWeight:'bold',
        marginTop: 20,
        marginBottom: 15
    },
    subtitle: {
        color: '#777575',
        fontSize:20,
        textAlign:'center'
    }
})

export default HomeScreen
