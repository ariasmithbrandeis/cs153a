import React from 'react';
import {View,Text} from 'react-native';
import {useValue} from './ValueStorageContext';



const Async3 = () => {
    const {currentValue} = useValue();
    return (

        <View>
            <View>
                <Text> Cone Volume {currentValue.height} </Text>
                <Text> (1/3)*pi*r^2*h </Text>
                <Text> radius: {currentValue.radius} </Text>
                <Text> height: {currentValue.height} </Text>
                <Text> volume: {(1/3)*Math.PI*Math.pow(currentValue.radius, 2)*currentValue.height} </Text>
            </View>
        </View>

    );
}

export default Async3;