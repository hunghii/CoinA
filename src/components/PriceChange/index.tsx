import React,{useState} from 'react';
import {Text, View, StyleSheet,Image} from 'react-native';
import RankingsScreen from '../../screens/RankingsScreen';

export interface PriceChange24HProps  {
    value: number,
  style?: object,
}

const PriceChange = ({ value, style = {} }: PriceChange24HProps ) => {
    return (
        <Text style={[style, {color: value > 0 ? '#398f0a' : '#f10000'}]}>
            {value > 0 ? '+' : ''}{value.toPrecision(2)}%
        </Text>
    )
}
const styles = StyleSheet.create({
    
})

export default PriceChange

