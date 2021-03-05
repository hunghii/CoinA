import React,{useState} from 'react';
import {Text, View, StyleSheet,Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import UserRankings from '../../components/UserRankings';
const image = require('../../../assets/images/Saly-20.png');

const user = [
    {
        id:'1',
        name:'hiimhung',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png',
        netWorth: 7866,
    },
    {
        id:'2',
        name:'Trinh Hien',
        image:'https://getblockcard.com/wp-content/uploads/2019/08/eth.png',
       netWorth: 452,
    },
    {
        id:'3',
        name:'Hoang',
        image:'https://otcxpert.com/wp-content/uploads/2018/10/USDT-icon.png',
        netWorth: 54323,
    },
    {
        id:'4',
        name:'Long',
        image:'https://getblockcard.com/wp-content/uploads/2019/08/eth.png',
       netWorth: 3412,
    },
    {
        id:'6',
        name:'Minh',
        image:'https://getblockcard.com/wp-content/uploads/2019/08/eth.png',
        netWorth: 8785,
    },
    {
        id:'7',
        name:'Linh',
        image:'https://getblockcard.com/wp-content/uploads/2019/08/eth.png',
        netWorth: 4341,
    },{
        id:'8',
        name:'Ngoc',
        image:'https://getblockcard.com/wp-content/uploads/2019/08/eth.png',
        netWorth: 2313,
    },
    {
        id:'9',
        name:'Mai',
        image:'https://getblockcard.com/wp-content/uploads/2019/08/eth.png',
        netWorth: 203424,
    }
]

const RankingsScreen = () => {
    return (
       <View style={styles.container}>
            
            <FlatList
                style={{width:'100%'}}
                data={user}
                renderItem={({item,index})=><UserRankings user ={item} place={index}/>}
                ListHeaderComponentStyle = {{alignItems:'center'}}
                showsVerticalScrollIndicator= {false}
                ListHeaderComponent={() => (
                    <>  
                        <Image style={styles.image} source={image}/>
                        <View style={styles.header}>
                            <Text style={styles.title}>Rankings</Text>
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

export default RankingsScreen