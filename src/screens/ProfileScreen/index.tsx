import React,{useState} from 'react';
import {Text, View, StyleSheet,Image, Pressable} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import PortfolioCoin from '../../components/PortfolioCoin';
const image = require('../../../assets/images/Saly-16.png');


const ProfileScreen = () => {
    const [user, setUser] = useState({
        id:'1',
        name:'hiimhung',
        email: 'hunghi08@gmail.com',
        imageUser:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png',
        netWorth: 39309
    });

    const signOut = () => {
        console.warn("press exit")
    }
    return (
       <View style={styles.container}>
            <Image style={styles.image} source={image}/>
            <View style={styles.root}>
                <View style={styles.left}>
                    <Image style={styles.imageuser} source={{uri:user.imageUser}} />
                    <View>
                        <Text style={styles.name}>{user.name}</Text>
                        <Text style={styles.email}>{user.email}</Text>
                    </View>
                </View>
                <View style={styles.right}>
                    <Text style={styles.netWorth}>${user.netWorth}</Text>
                </View>
            </View>
            <Pressable style={styles.signout} onPress={signOut}>
                <Text style={{color: '#646060'}}>
                    SignOut
                </Text>
            </Pressable>
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
    root: {
        flexDirection:'row',
        justifyContent:"space-between",
        height:50,
        marginVertical: 10,
        width:'100%'
    },
    image: {
        height: 150,
        resizeMode: 'contain'
    },
    left: {
        flexDirection: 'row',
        alignItems:'center',
    },
    name: {
        fontWeight:'500',
        marginBottom: 5,
        fontSize: 24,
        fontFamily:'Roboto'
    },
    email: {
        color: '#646464',

    },
    right: {
        alignItems:'flex-end',
    },
    netWorth: {
        fontSize: 18,
        fontWeight:'600',
    },
    imageuser: {
        marginRight: 10,
        height: 100,
        width: 100,
        borderRadius: 50
    },
    signout: {
        marginTop:'auto',
        
    }
})

export default ProfileScreen