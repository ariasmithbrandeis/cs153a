import React,{useState} from 'react';
import {View,Text,TextInput,Button} from 'react-native';
import {useValue} from './ValueStorageContext'; // to use/change shared values

const Async1 = () => {
    const [radius,setRadius] = useState("");
    const [height,setHeight] = useState("");
    const {currentValue,setCurrentValue} = useValue();
    return ( 
        <View style = {{justifyContent:'space-between',flex:1}}>
            <Text> currentValue = {JSON.stringify(currentValue)} </Text>
                <View style = {{flexDirection:'row', justifyContent:'space-evenly'}}>
                    <Text>radius</Text>
                    <TextInput
                        style={{backgroundColor:'lime'}}
                        onChangeText = {(textRadius)=>setRadius(textRadius)} 
                        defaultValue = {currentValue.radius}
                    />
                </View>
                <View style = {{flexDirection:'row',justifyContent:'space-evenly'}}>
                    <Text>height</Text>
                    <TextInput
                        style={{backgroundColor:'turquoise'}}
                        onChangeText = {(textHeight)=>setHeight(textHeight)} 
                        defaultValue = {currentValue.height}
                    />
                </View>
            
            <Button 
               title="save data"
               onPress = {() => 
                    setCurrentValue({radius:radius,height:height})
                }
               />
            
        </View>
    );
}

export default Async1;