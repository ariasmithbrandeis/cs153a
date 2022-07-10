import React from 'react';
import {View,Text,TextInput} from 'react-native';



const Async0 = () => {

    return (

        <View style={{flex:1,padding:10,margin:20}}>
            <Text
               style={{fontSize:32,fontWeight:'bold'}}> 
                Exam 7 
            </Text>
            <Text> Modify the code in 
            </Text>
            <Text>
                Async1,2,3, AsyncDemo, and AsyncContextDemo 
            </Text>
            <Text>
                to match the images in mastery.cs.brandeis.edu
            </Text>
            <Text>
                Instead of Profile, Age, BMI, you will have Data, Cylinder, Cone.
                The Data screen lets you specify the radius and height.
                The Cylinder and Cone screens show the volume using the
                values of radius and height stored in context.
            </Text>

        </View>
 
    )
}

export default Async0;