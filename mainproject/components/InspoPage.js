import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Image, Button, FlatList, TextInput, SafeAreaView, ScrollView } from 'react-native'; 

const InspoPage = () => {
    const [data,setData] = useState([]);
    const [sub,setSub] = useState('');

    const getReddit = async() => {
        try{
            const url = "https://www.reddit.com/r/"+sub+'.json'
            const response = await fetch(url);
            const json = await response.json();
            setData(json.data.children); 
          } catch (error) {
            console.error(error);
          } finally {
              setLoading(false);
          }
        };

        const clearAll = async () => {
          try {
            console.log('in clearData')
            await AsyncStorage.clear()
          } catch(e) {
            console.log("error in clearData ")
            console.dir(e)
            // clear error
          }
    }
    
    return (
        <View style = {styles.container}>
          <ScrollView contentContainerStyle = {{flexGrow:1}}>
            <View style={styles.labelContainer}>
                <Text style = {styles.title}>
                    Your Inspiration
                </Text>
                <Text style={styles.subTitle}>
                    Check it out!
                </Text>
            </View>
            <View style={styles.inputContainer}>
                <Text style = {styles.paragraph}>
                    Select /subreddit to import:
                </Text>
                <TextInput style = {{borderWidth: 1}} 
                placeholder= '/rsubreddit'
                onChangeText={(text) => {setSub(text)}}>
                    
                </TextInput>
                <Button title = "reddit import" 
                onPress={() => {getReddit()}}>   

                </Button>
                <Button
                title={"Clear"}
                color="red"
                onPress = {() => {
                  clearAll()
                  getReddit([])
                }}
                />
            </View>
            <SafeAreaView>
            <FlatList
                data = {data}
                renderItem = {({ item }) => (
                    <View style={{flexDirection:'row',
                                    padding:15,
                                    margin:5,
                                    borderWidth:2,
                                    justifyContent:'space-evenly',
                                    backgroundColor:'#fedcba',}}>
                        <Text>{item.data.title}</Text>
                        <Image style = {{width: item.data.thumbnail_width, height: item.data.thumbnail_height}}
                                source = {{uri: item.data.thumbnail}}/>
                        
                    </View>
                )}
                /> 
                </SafeAreaView> 
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

export default InspoPage;