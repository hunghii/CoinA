import React,{useState} from 'react';
import {Text, View, StyleSheet,Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import PortfolioCoin from '../../components/PortfolioCoin';
const image = require('../../../assets/images/Saly-20.png');


const RankingsScreen = () => {
    return (
       <View style={styles.container}>
            <Image style={styles.image} source={image}/>
                <Text style={styles.title}>Rankings</Text>
           
        </View>
    )
}
const styles = StyleSheet.create({
 container:{
        flex: 1,
        padding: 20,
        alignItems:'center',
        backgroundColor:'white'
    },
    image: {
        height: 150,
        resizeMode: 'contain'
    },
    header: {
        marginVertical: 20,
        width: '100%',

    },
    title:{ 
        color:'#000000',
        fontWeight:'bold',
        fontSize: 18
    },
})

export default RankingsScreen