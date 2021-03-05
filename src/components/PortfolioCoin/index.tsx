import React,{useState} from 'react';
import {Text, View, StyleSheet,Image} from 'react-native';

export interface PortfolioCoinProps  {
    portfolioCoin: {
        name: string,
        image: string,
        symbol: string,
        amount: number,
        valueUSD: number
    }
}

const PortfolioCoin = (props : PortfolioCoinProps) => {
    const {
      portfolioCoin : {
            name,    
            image,
            symbol,
            amount,
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
               <Text style={styles.amount}>{symbol} {amount}</Text>
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
        margin:10,
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
    symbol: {
        color: '#646464',
    },
    right: {
        alignItems:'flex-end',
    },
    valueUSD: {
        fontSize: 18,
        fontWeight:'600'
    }
})

export default PortfolioCoin