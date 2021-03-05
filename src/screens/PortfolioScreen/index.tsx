import React,{useState} from 'react';
import {Text, View, StyleSheet,Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import PortfolioCoin from '../../components/PortfolioCoin';
const image = require('../../../assets/images/Saly-10.png');

const portfolioCoin = [
    {
        id:'1',
        name:'USD Coin',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png',
        symbol: 'USD',
        valueUSD: '$69.430',
        amount: 1.38
    },
    {
        id:'2',
        name:'FCD',
        image:'https://getblockcard.com/wp-content/uploads/2019/08/eth.png',
        symbol: 'BTC',
        valueUSD: '$70.23',
        amount: 1.38
    },
    {
        id:'3',
        name:'Tether',
        image:'https://otcxpert.com/wp-content/uploads/2018/10/USDT-icon.png',
        symbol: 'BTC',
        valueUSD: '$100',
        amount: 1.38
    },
    {
        id:'4',
        name:'BItcoin',
        image:'https://getblockcard.com/wp-content/uploads/2019/08/eth.png',
        symbol: 'USD',
        valueUSD: '$20.67',
        amount: 20.67
    },
    {
        id:'6',
        name:'BItcoin',
        image:'https://getblockcard.com/wp-content/uploads/2019/08/eth.png',
        symbol: 'USD',
        valueUSD: '$20.67',
        amount: 20.67
    },
    {
        id:'7',
        name:'BItcoin',
        image:'https://getblockcard.com/wp-content/uploads/2019/08/eth.png',
        symbol: 'USD',
        valueUSD: '$20.67',
        amount: 20.67
    },{
        id:'8',
        name:'BItcoin',
        image:'https://getblockcard.com/wp-content/uploads/2019/08/eth.png',
        symbol: 'USD',
        valueUSD: '$20.67',
        amount: 20.67
    },
    {
        id:'9',
        name:'BItcoin',
        image:'https://getblockcard.com/wp-content/uploads/2019/08/eth.png',
        symbol: 'USD',
        valueUSD: '$20.67',
        amount: 20.67
    }
]

const PortfolioScreen = () => {
    return (
       <View style={styles.container}>
           
            <FlatList
                style={{width:'100%'}}
                data={portfolioCoin}
                renderItem={({item})=><PortfolioCoin portfolioCoin={item} />}
                ListHeaderComponentStyle = {{alignItems:'center'}}
                showsVerticalScrollIndicator= {false}
                ListHeaderComponent={() => (
                    <>
                        <Image style={styles.image} source={image}/>
                        <View style={styles.header}>
                            <Text style={styles.title}>Portfolio balance </Text>
                            <Text style={styles.subtitle}>$69.420</Text>
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
        resizeMode: 'contain'
    },
    header: {
        marginVertical: 20,
        width: '100%',

    },
    title:{ 
        color:'#645C5C',
        fontWeight:'bold',
        fontSize: 18
    },
    subtitle:{ 
        fontSize: 36,
        fontWeight:'bold'

    },
})

export default PortfolioScreen