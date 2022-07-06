import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Image, Button, FlatList, TextInput, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'; 

import * as ImagePicker from 'expo-image-picker';

const SyncArt = () => {
    const [data,setData] = useState([]);
    const [sub,setSub] = useState('');
    const [image, setImage] = useState(null);
    const pickImage = async () => {
      // No permissions request is necessary for launching the image library

      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log(result);
      if (!result.cancelled) {
        setImage(result.uri);
      }
    };

    return (
        <View style = {styles.container}>
          <ScrollView contentContainerStyle = {{flexGrow:1}}>
            <View style={styles.labelContainer}>
                <Text style = {styles.title}>
                    Your Portfolio
                </Text>
                <Text style={styles.subTitle}>
                Pick photos of your art for your portfolio
                </Text>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Button title="Pick an image from camera roll" 
                  onPress={pickImage} />
                  {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} 
                </View>
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

	
	
	
