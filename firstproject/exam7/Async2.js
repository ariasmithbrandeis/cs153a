import React from 'react';
import {View,Text,TextInput} from 'react-native';
import {useValue} from './ValueStorageContext';


const Async2 = () => {
    const {currentValue} = useValue();
    return (

        <View style={{flex:1}}>
            <Text> Volume </Text>
            <Text> w: {currentValue.width} </Text>
            <Text> d: {currentValue.depth} </Text>
            <Text> h: {currentValue.height} </Text>
            <Text> Volume: {currentValue.width*currentValue.depth*currentValue.height}</Text>
            <View style={{flex:1}}></View>

        </View>
 
    )
}

export default Async2;