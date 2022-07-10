import React from 'react';
import {View,Text} from 'react-native';
import {useValue} from './ValueStorageContext';




const Async3 = () => {
    const {currentValue} = useValue();
    return (

        <View>
            <View>
                <Text> Surface Area </Text>
                <Text> width: {currentValue.width} </Text>
                <Text> depth: {currentValue.depth} </Text>
                <Text> height: {currentValue.height} </Text>
                <Text> Surface Area: {2*currentValue.width*currentValue.depth + 2*currentValue.width*currentValue.height + 2*currentValue.depth*currentValue.height} </Text>
            </View>

        </View>

    )
}

export default Async3;