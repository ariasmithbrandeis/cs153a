import React from 'react';
import {View,Text} from 'react-native';
import {useValue} from './ValueStorageContext';
import FeedbackForm from './FeedbackForm';



const Async3 = () => {
    const {currentValue} = useValue();
    return (

        <View>
            <View>
                <Text> BMI calculator </Text>
                <Text> height: {currentValue.height} </Text>
                <Text> weight: {currentValue.weight} </Text>
                <Text> bmi: {currentValue.weight/(currentValue.height*currentValue.height)*703} </Text>
            </View>
            <FeedbackForm />
        </View>

    )
}

export default Async3;