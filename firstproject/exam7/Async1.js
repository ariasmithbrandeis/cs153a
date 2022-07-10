import React,{useState,useEffect} from 'react';
import {View,Text,TextInput,Button} from 'react-native';
import {useValue} from './ValueStorageContext'; // to use/change shared values

const Async1 = () => {
    const {currentValue,setCurrentValue} = useValue();
    const [width,setWidth] = useState(currentValue.width);
    const [depth,setDepth] = useState(currentValue.depth);
    const [height,setHeight] = useState(currentValue.height);
    
    useEffect(()=> {
        setWidth(currentValue.width);
        setDepth(currentValue.depth);
        setHeight(currentValue.height);
         },
        [currentValue]);

    return ( 
        <View style={{justifyContent:'space-between',flex:1}}>
            <Text> currentValue = {JSON.stringify(currentValue)} </Text>
            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                <Text>Width</Text>
                <TextInput
                    style={{backgroundColor:'lightgreen'}}
                    onChangeText = {(text)=>setWidth(text)} 
                    value={width}
                />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                <Text>Depth</Text>
                <TextInput
                    style={{backgroundColor:'aqua'}}
                    onChangeText = {(text)=>setDepth(text)} 
                    value={depth}
                />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                <Text>Height</Text>
                <TextInput
                    style={{backgroundColor:'pink'}}
                    onChangeText = {(text)=>setHeight(text)} 
                    value={height}
                />
            </View>
            
            <Button 
               title="save Data"
               onPress = {() => 
                    setCurrentValue({width,depth,height})
                }
               />
            
            
        </View>
    )
}
export default Async1;