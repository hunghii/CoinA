import React,{useState} from 'react';
import {Text, View, StyleSheet,Image} from 'react-native';

export interface UserRankingsProps  {
    user: {
        name: string,
        image: string,
        netWorth: number,
    },
    place: number,
}

const UserRankings = (props : UserRankingsProps) => {
    const {
      user : {
            name,    
            image,
            netWorth,
        },
        place
       
    } = props;
    return (
       <View style={styles.container}>
           <View style={styles.left}>
                <Text style={styles.place}>{place}</Text>
                <Image style={styles.image} source={{uri:image}} />
                <View>
                    <Text style={styles.name}>{name}</Text>
                </View>
           </View>
            <View style={styles.right}>
                <Text style={styles.netWorth}>${netWorth}</Text>
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
    place: {
        fontWeight: 'bold',
        marginRight: 10
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
    netWorth: {
        fontSize: 18,
        fontWeight:'600'
    }
})

export default UserRankings