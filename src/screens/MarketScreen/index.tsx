import React,{useState} from 'react';
import {Text, View, StyleSheet,Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import MarketCoin from '../../components/MarketCoin';
const image = require('../../../assets/images/Saly-17.png');

const marketCoin = [
    {
        id:'1',
        name:'USD Coin',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png',
        symbol: 'USD',
        valueUSD: '$69.430',
        valueChange24H: -1.38
    },
    {
        id:'2',
        name:'FCD',
        image:'https://getblockcard.com/wp-content/uploads/2019/08/eth.png',
        symbol: 'BTC',
        valueUSD: '$70.23',
        valueChange24H: 1.3243
    },
    {
        id:'3',
        name:'Tether',
        image:'https://otcxpert.com/wp-content/uploads/2018/10/USDT-icon.png',
        symbol: 'BTC',
        valueUSD: '$100',
        valueChange24H: -1.607
    },
    {
        id:'4',
        name:'BItcoin',
        image:'https://getblockcard.com/wp-content/uploads/2019/08/eth.png',
        symbol: 'USD',
        valueUSD: '$20.67',
        valueChange24H: 2.67
    },
    {
        id:'6',
        name:'BItcoin',
        image:'https://getblockcard.com/wp-content/uploads/2019/08/eth.png',
        symbol: 'USD',
        valueUSD: '$0976.6',
        valueChange24H: 5.1
    },
    {
        id:'7',
        name:'BItcoin',
        image:'https://getblockcard.com/wp-content/uploads/2019/08/eth.png',
        symbol: 'USD',
        valueUSD: '$65.99',
        valueChange24H: 1.7
    },{
        id:'8',
        name:'BItcoin',
        image:'https://getblockcard.com/wp-content/uploads/2019/08/eth.png',
        symbol: 'USD',
        valueUSD: '$33.4',
        valueChange24H: -1.304
    },
    {
        id:'9',
        name:'BItcoin',
        image:'https://getblockcard.com/wp-content/uploads/2019/08/eth.png',
        symbol: 'USD',
        valueUSD: '$30.6',
        valueChange24H: 0.89
    }
]

const MarketScreen = () => {
    return (
       <View style={styles.container}>
            
            <FlatList
                style={{width:'100%'}}
                data={marketCoin}
                renderItem={({item})=><MarketCoin marketCoin={item} />}
                ListHeaderComponentStyle = {{alignItems:'center'}}
                showsVerticalScrollIndicator= {false}
                ListHeaderComponent={() => (
                    <>
                        <Image style={styles.image} source={image}/>
                        <View style={styles.header}>
                            <Text style={styles.title}>Market</Text>
                        </View> 
                    </>
                )}
            />
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
        resizeMode: 'contain',
    },
    header: {
        marginVertical: 20,
        width: '100%',
        alignItems:'center',
        justifyContent:'center',
        
    },
    title:{ 
        color:'#000000',
        fontWeight:'bold',
        fontSize: 18,
    },
    symbol: {
        color: '#6b6b6b'
    }
})

export default MarketScreen