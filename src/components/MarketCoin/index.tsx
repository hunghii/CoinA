import React,{useState} from 'react';
import {Text, View, StyleSheet,Image} from 'react-native';
import PriceChange from '../PriceChange';

export interface MarketCoinProps  {
    marketCoin: {
        name: string,
        image: string,
        symbol: string,
        valueChange24h: number,
        valueUSD: string
    }
}

const MarketCoin = (props : MarketCoinProps) => {
    const {
      marketCoin : {
            name,    
            image,
            symbol,
            valueChange24h,
            valueUSD
        },
       
    } = props
    return (
       <View style={styles.container}>
           <View style={styles.left}>
                <Image style={styles.image} source={{uri:image}} />
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.symbol}>{symbol}</Text>
                </View>
           </View>
            <View style={styles.right}>
               <Text style={styles.valueUSD}>{valueUSD}</Text>
               <PriceChange value={valueChange24h}/>
               <Text style={{color: valueChange24h > 0 ?'#4bdb00' : '#f10000'}} >{valueChange24h > 0 && '+'}{valueChange24h}</Text>
            </View>
               
       </View>
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