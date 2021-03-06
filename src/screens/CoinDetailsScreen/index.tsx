import React,{useState} from 'react';
import {Text, View, StyleSheet,Image, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Ionicons,Entypo,AntDesign,FontAwesome5,MaterialIcons,FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PriceChange from '../../components/PriceChange';
const image = require('../../../assets/images/Saly-1.png');
const CoinDetailsScreen = () => {
    const [isTouch, setIsTouch] = useState(false)



    const [coinData, setCoinData] = useState({
        id:'1',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png',
        name:'BItcoin',
        symbol: 'USD',
        valueUSD: '$30.6',
        valueChange24H: 0.89,
        valueChange1D :-2.11,
        valueChange7D: 2.12,
        currentPrice: 586.586,
        amount: 2,
    });

    const onPress = () => {
        setIsTouch(!isTouch)
    }

    const onSell = () => {
        
    }

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <View style={styles.left}>
                    <Image style={styles.image} source={{uri:coinData.image}}/>
                    <View>
                        <Text style={styles.name}>{coinData.name}</Text>
                        <Text style={styles.symbol}>{coinData.symbol}</Text>
                    </View>
                </View>
                    <View style={styles.right}>
                        <TouchableOpacity onPress={onPress}>
                            <AntDesign  size={30} name = {isTouch ? "staro" : "star"}/>
                        </TouchableOpacity>
                       <Text style={{fontSize:10}}>Watch</Text>
                    </View>
            </View>
            <View style={styles.pricechange24h}>  
                <View>
                    <Text style={styles.header}>Current price</Text> 
                    <Text style={{fontSize: 24, fontWeight:'bold'}}>${coinData.currentPrice}</Text> 
                </View>
                <View style={{flexDirection:'row', width: 200,justifyContent: 'space-between'}}>
                    <View  style={{alignItems:'center'}}>
                        <Text style={styles.header}>1 hour</Text> 
                        <PriceChange value={coinData.valueChange24H} style={styles.value}/>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Text style={styles.header}>1 day</Text> 
                        <PriceChange value={coinData.valueChange1D} style={styles.value}/>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Text style={styles.header}>7 days</Text> 
                        <PriceChange value={coinData.valueChange7D} style={styles.value}/>
                    </View>
                </View>
            </View>
            <View style={{flexDirection:'row', justifyContent: 'space-between', marginTop: 20}}>
                <Text>Position</Text>
                <Text>{coinData.symbol} {coinData.amount}($ {coinData.currentPrice})</Text>
            </View>
            <View style={styles.btn}>
                <Pressable style={[styles.btnBt,{backgroundColor:'#5AB858',}]} onPress = {() => navigation.navigate('TradeDetails')}>
                    <Text style={styles.btnvalue}>BUY</Text>
                </Pressable>
                <Pressable style={[styles.btnBt,{backgroundColor:'#DE4545'}]} onPress={onSell}>
                    <Text style={styles.btnvalue}>SELL</Text>
                </Pressable>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex :1,
        marginVertical: 10,
        backgroundColor:'white',
        padding:20
    },
    containerTop: {
        flexDirection:'row',
        justifyContent:'space-between',
    },
    image: {
        height:50,
        width:50,
        resizeMode:'contain',
        marginRight:10
    },
    left: {
        alignItems:'center',
        flexDirection:'row',
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
    },
    pricechange24h: {
        flexDirection:'row',
        justifyContent: 'space-between',

    },
    header: {
        color:'#9B9B9B'
    },
    value: {
        fontSize: 18
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 'auto'
    },
    btnBt: {
        height: 50,
        borderRadius: 24,
        flex:1, 
        margin: 5,
        justifyContent:'center',
        alignItems:'center'
    },
    btnvalue: {
        color:'#fff'
    }
})

export default CoinDetailsScreen