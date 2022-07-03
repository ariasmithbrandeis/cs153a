import react from "react";
import React,{useState} from 'react';
import {View,Text,TextInput,Button} from 'react-native';
import {useValue} from './ValueStorageContext'; // to use/change shared values

const Async0 = () => {
    
    return (
        <View>
            <Text style = {{fontSize: 20}}>
                Exam 6
            </Text>
            <Text>
                Modify the code in
            </Text>
            <Text>
                Async1,2,3, AsyncDemo, and AsyncContextDemo
            </Text>
            <Text>
                to match the images in mastery.cs.brandeis.edu
            </Text>
        </View>
    );
}

export default Async0;