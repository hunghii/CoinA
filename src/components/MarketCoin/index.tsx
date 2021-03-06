import React,{useState} from 'react';
import {Text, View, StyleSheet,Image, Pressable} from 'react-native';
import PriceChange from '../PriceChange';
import { useNavigation } from '@react-navigation/native'
export interface MarketCoinProps  {
    marketCoin: {
        name: string,
        image: string,
        symbol: string,
        valueChange24H: number,
        valueUSD: string
    }
}

const MarketCoin = (props : MarketCoinProps) => {
    const {
      marketCoin : {
            name,    
            image,
            symbol,
            valueChange24H,
            valueUSD
        },
       
    } = props


    const navigation = useNavigation();
    return (
       <Pressable style={styles.container} onPress = {() => navigation.navigate('CoinDetails')}>
           <View style={styles.left}>
                <Image style={styles.image} source={{uri:image}} />
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.symbol}>{symbol}</Text>
                </View>
           </View>
            <View style={styles.right}>
               <Text style={styles.valueUSD}>{valueUSD}</Text>
               <PriceChange value={valueChange24H}/>
            </View>
               
       </Pressable>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        height:50,
        marginVertical: 10
    },
    image: {
        height:50,
        width:50,
        marginRight: 10,
    },
    left: {
        flexDirection: 'row',
        alignItems:'center'
    },
    name: {
        fontWeight:'bold',
        marginBottom: 5
    },
    right: {
        alignItems:'flex-end',
    },
    valueUSD: {
        fontSize: 18,
        fontWeight:'600'
    },
    symbol: {
        color: '#6b6b6b'
    }
})

export default MarketCoin