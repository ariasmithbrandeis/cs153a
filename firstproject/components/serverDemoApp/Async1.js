import React,{useState,useEffect} from 'react';
import {View,Text,TextInput,Button} from 'react-native';
import {useValue} from './ValueStorageContext'; // to use/change shared values

const Async1 = () => {
    const {currentValue,setCurrentValue} = useValue();
    const [name,setName] = useState(currentValue.name);
    const [age,setAge] = useState(currentValue.age);
    const [weight,setWeight] = useState(currentValue.weight);
    const [height,setHeight] = useState(currentValue.height);
    
    useEffect(()=> {
        setName(currentValue.name);
        setAge(currentValue.age);
        setWeight(currentValue.weight);
        setHeight(currentValue.height);
         },
        [currentValue]);

    return ( 
        <View style={{justifyContent:'space-between',flex:1}}>
            <Text> currentValue = {JSON.stringify(currentValue)} </Text>
            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                <Text>name</Text>
                <TextInput
                    style={{backgroundColor:'lightgreen'}}
                    onChangeText = {(text)=>setName(text)} 
                    value={name}
                />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                <Text>age</Text>
                <TextInput
                    style={{backgroundColor:'lightblue'}}
                    onChangeText = {(text)=>setAge(text)} 
                    value={age}
                />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                <Text>weight</Text>
                <TextInput
                    style={{backgroundColor:'pink'}}
                    onChangeText = {(text)=>setWeight(text)} 
                    value={weight}
                />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                <Text>height</Text>
                <TextInput
                    style={{backgroundColor:'aqua'}}
                    onChangeText = {(text)=>setHeight(text)} 
                    value={height}
                />
            </View>
            
            <Button 
               title="save Profile"
               onPress = {() => 
                    setCurrentValue({name,age,weight,height})
                }
               />
            
            
        </View>
    )
}
export default Async1;