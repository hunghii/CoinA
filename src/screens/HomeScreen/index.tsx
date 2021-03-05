import React,{useState} from 'react';
import {Text, View, StyleSheet,Image} from 'react-native';

const image = require('../../../assets/images/Saly-1.png');
const HomeScreen = () => {
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
    },
    image: {
        height: '40%',
        aspectRatio:1,
    },
    title: {
        color: '#fff',
        fontSize:20,
        fontWeight:'bold',
        marginTop: 20,
        marginBottom: 15
    },
    subtitle: {
        color: '#fff',
        fontSize:20,
        textAlign:'center'
    }
})

export default HomeScreen