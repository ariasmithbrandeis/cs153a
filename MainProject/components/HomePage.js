import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Image, Button, FlatList, TextInput } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator ();

const HomeStack = () => {
    

    return (
        <View style = {styles.container}>
            <View style={styles.labelContainer}>
                <Text style = {styles.title}>
                    Artist Portfolio Helper
                </Text>
                <Text style={styles.subTitle}>
                    Getting Started
                </Text>
            </View>
            <View style={styles.inputContainer}>

        <NavigationContainer>
            <Stack.Navigator>
    
                <Stack.Screen
                    name = "Get Art"
                    component={SyncArtScreen}
                />
                <Stack.Screen
                    name = "Inspo Board"
                    component={InspoScreen}
                />
                <Stack.Screen
                    name = "Resume"
                    component={ResumeScreen}
                />
                <Stack.Screen
                    name = "Profile"
                    component={ProfileScreen}
                />

            </Stack.Navigator>
        </NavigationContainer>
            <Button title = "Get Art" 
                onPress={() => {() => 
                navigation.navigate('GetArt')}}>   
        
            </Button> 
                <Button title = "Inspo Board" 
                onPress={() => {}}>   

                </Button>
                <Button title = "Resume" 
                onPress={() => {}}>   

                </Button>
                <Button title = "Profile Page" 
                onPress={() => {}}>   

                </Button>
            </View>
 
        </View>

        
    );
}
const SyncArtScreen = ({navigation}) => {

    return (
        <Button title = "Get Art"
        onPress={() => {() => 
        navigation.navigate('Get Art')}}/>   
        

      );
}
const InspoScreen = ({navigation}) => {

           
    return (         
    <Button title = "Inspo Board" 
    onPress={() => {() => 
    navigation.navigate('Inspo Board')}}>   
        
    </Button>
    )
}
const ResumeScreen = ({navigation}) => {

                  
    return (  
    <Button title = "Resume" 
    onPress={() => {() => 
    navigation.navigate('Resume')}}>   
        
    </Button>
    )

}
const ProfileScreen = ({navigation}) => {

               
    return (     
    <Button title = "Profile" 
    onPress={() => {() => 
    navigation.navigate('Profile')}}>   
        
    </Button>
    )
}

const styles = StyleSheet.create({


    container: {
      flexDirection: 'column',
      flex:1,
      alignItems: 'center',
  
    },
  
    labelContainer: {
      alignItems: 'center',
      justifyContent: 'top',
  
    },
  
    inputContainer: {
        alignItems: 'center',
        justifyContent: 'top',
        flexDirection: 'column',
    
      },
    title:{
  
      fontSize:36,
      color:'#eb34e5',
      fontWeight:600,
      fontFamily: "Arial",
    },
  
    subTitle:{
  
      fontSize:20,
      color:'#4287f5',
      fontWeight:400,
      fontFamily: "Arial",
    },
  
    label: {
      textAlign: "center",
      marginBottom: 10,
      fontSize: 20,
  
  
    },
  
  
    paragraph: {
      margin: 24,
      marginTop: 0,
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'left',
    },
  
    info: {
      alignItems: 'center',
      justifyContent: 'top',
      padding: 50,
    }
  
  });

export default HomeStack;