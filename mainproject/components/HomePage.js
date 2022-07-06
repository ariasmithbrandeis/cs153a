import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Image, Button, FlatList, TextInput } from 'react-native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationArt from '../App';

import SyncArt from './SyncArt';


const HomeScreen = ({navigation}) => {
    

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

            <Button title = "Get Art" 
                onPress={() => {() => 
                navigation.navigate('Art Page')}}>   
        
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

export default HomeScreen;