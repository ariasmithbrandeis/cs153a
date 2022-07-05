import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Image, Button, FlatList, TextInput, SafeAreaView, ScrollView } from 'react-native'; 

const SyncArt = () => {
    const [data,setData] = useState([]);
    const [sub,setSub] = useState('');

    
    return (
        <View style = {styles.container}>
          <ScrollView contentContainerStyle = {{flexGrow:1}}>
            <View style={styles.labelContainer}>
                <Text style = {styles.title}>
                    Your Portfolio
                </Text>
                <Text style={styles.subTitle}>
                    Imports
                </Text>
                <Button title = "Google Drive Import" 
                onPress={() => {}}>   

                </Button>
                </View>  
          </ScrollView>
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

export default SyncArt;