import React,{useState} from 'react';
import {Text, View, StyleSheet,Image} from 'react-native';
import { Ionicons,Entypo,AntDesign,FontAwesome5,MaterialIcons,FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
const image = require('../../../assets/images/Saly-1.png');
const CoinDetailsScreen = () => {
    const [isTouch, setIsTouch] = useState(false)



    const [coinData, setCoinData] = useState({
        id:'1',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png',
        name:'BItcoin',
        symbol: 'USD',
        valueUSD: '$30.6',
        valueChange24h: 0.89
    });

    const onPress = () => {
        setIsTouch(!isTouch)
    }
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
                
                <View >
                    <Text>Current price</Text> 
                    <Text>$62.420</Text> 
                </View>
                <View>
                    <Text>1 hour</Text> 
                    <Text>+3.74%</Text> 
                </View>
                <View>
                    <Text>1 day</Text> 
                    <Text>+0.74%</Text> 
                </View>

                <View>
                    <Text>7 days</Text> 
                    <Text>-0.74%</Text> 
                </View>
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

    
    
})

export default CoinDetailsScreen