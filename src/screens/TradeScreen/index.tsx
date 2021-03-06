import React,{useState} from 'react';
import {View, Text, Image, StyleSheet,TextInput, Pressable, Keyboard,TouchableWithoutFeedback } from 'react-native';
const image = require('../../../assets/images/Saly-31.png');
const TradeScreen = () => {
    return (
        <TouchableWithoutFeedback style= { { flex:1}} onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.topcontent}>
                    <Text style={styles.title}>Buy Bitcoin</Text>
                    <Text style={styles.subtitle}> 1 BTC = 64.200 USD</Text>
                    <Image style={styles.image} source={image}/>
                </View>
                
                
                
                <View style={styles.txtInput}>
                    <TextInput 
                        keyboardType = 'number-pad'
                        style={{ height: 40, borderColor: '#D0CDCD', borderWidth: 1, width: '40%', borderRadius: 5 }}
                    />
                    <Text>=</Text>
                    <TextInput 
                        placeholder="BTC"
                        style={{ height: 40, borderColor: '#D0CDCD', borderWidth: 1, width: '40%',borderRadius: 5 }}
                        keyboardType = 'number-pad'
                    />
                </View>
                <View style={{flexDirection:'row-reverse'}}>
                    <Text style={{color:'#5F5B5B', marginRight: 20}}>Max: $64.200</Text>
                </View>
                <View style={styles.btn}>
                    <Pressable >
                        <Text style={styles.txtBnt}>Place order</Text>
                    </Pressable>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:20,
        backgroundColor:'white'
    },
    title: {
        fontSize: 24,
        color:"#000000"
    },
    subtitle: {
        marginTop: 10,
        color: '#5F5B5B'
    },
    image: {
        marginTop: 20,
        height: 160,
        width: 252,
    },
    topcontent: {
        alignItems:'center',
    },
    txtInput: {
        marginTop: 50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center'
        
    },
    btn: {
        marginTop: "auto",
        height: 50,
        backgroundColor:'#007AFF',
        borderRadius: 24,
        alignItems:'center',
        justifyContent:'center'
    },
    txtBnt: {
        color:'#fff',
        fontSize: 18
    }
})

export default TradeScreen