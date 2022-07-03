import React from 'react';
import {View,Text} from 'react-native';
import {useValue} from './ValueStorageContext';


const Async2 = () => {
    const {currentValue} = useValue();
    return (

        <View style={{flex:1}}>
            <Text> Cylinder Volume </Text>
            <Text> pi*r^2*h </Text>
            <Text> radius: {currentValue.radius} </Text>
            <Text> height: {currentValue.height} </Text>
            <Text> volume: {Math.PI*Math.pow(currentValue.radius, 2)*currentValue.height} </Text>
        </View>
 
    );
}

export default Async2;